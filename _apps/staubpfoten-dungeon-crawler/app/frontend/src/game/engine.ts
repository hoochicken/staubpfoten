import {
  CHARACTERS,
  HINOG_ROOM,
  LASER_STATS,
  MAP_NODES,
  NEXT,
  QUEEN_ROOM,
  ROOM_POOL,
  SLOT_IDS,
  type Branch,
  type Character,
  type CharacterId,
  type NodeId,
  type SlotId,
  type Station,
  type Stat,
} from './data';

export type Phase = 'select' | 'play' | 'won' | 'lost';
export type Tone = 'success' | 'fail' | 'info';
export type Layout = Record<SlotId, Station>;

export interface LogEntry {
  id: number;
  text: string;
  tone: Tone;
}

export interface RollResult {
  value: number;
  stat: Stat;
  target: number;
  success: boolean;
  catastrophe: boolean;
}

export interface GameState {
  phase: Phase;
  character: Character | null;
  slp: number;
  /** Random assignment of rooms to the seven numbered chambers. */
  layout: Layout | null;
  nodeId: NodeId;
  /** Chambers entered so far, in order. */
  path: NodeId[];
  /** Index of the check inside the current room. */
  checkIndex: number;
  /** True when all checks of the current room passed and the player may move on. */
  roomCleared: boolean;
  hasLaser: boolean;
  lastRoll: RollResult | null;
  log: LogEntry[];
  nextLogId: number;
}

export type GameAction =
  | { type: 'SELECT'; id: CharacterId; layout: Layout }
  | { type: 'ROLL'; value: number; stat: Stat }
  | { type: 'ADVANCE'; to: NodeId }
  | { type: 'RESTART' };

export const initialState: GameState = {
  phase: 'select',
  character: null,
  slp: 0,
  layout: null,
  nodeId: 's1',
  path: [],
  checkIndex: 0,
  roomCleared: false,
  hasLaser: false,
  lastRoll: null,
  log: [],
  nextLogId: 1,
};

/** Draws seven different rooms at random for the numbered chambers. */
export function drawLayout(): Layout {
  const pool = [...ROOM_POOL];
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return SLOT_IDS.reduce((acc, slot, i) => ({ ...acc, [slot]: pool[i] }), {} as Layout);
}

export function stationAt(layout: Layout | null, nodeId: NodeId): Station {
  if (nodeId === 'queen') return QUEEN_ROOM;
  if (nodeId === 'hinog') return HINOG_ROOM;
  return layout ? layout[nodeId] : ROOM_POOL[0];
}

export function currentStation(state: GameState): Station {
  return stationAt(state.layout, state.nodeId);
}

export function currentStat(state: GameState): Stat {
  const station = currentStation(state);
  return station.checks[state.checkIndex] ?? station.checks[0] ?? 'GE';
}

export function chosenBranch(path: NodeId[]): Branch | null {
  const node = MAP_NODES.find((n) => path.includes(n.id) && (n.branch === 'A' || n.branch === 'B'));
  return node ? node.branch : null;
}

export function targetFor(state: GameState, stat: Stat): number {
  if (!state.character) return 0;
  const bonus = state.hasLaser && LASER_STATS.includes(stat) ? 1 : 0;
  return state.character.stats[stat] + bonus;
}

export function rollD6(): number {
  return Math.floor(Math.random() * 6) + 1;
}

function addLog(state: GameState, entries: Array<Omit<LogEntry, 'id'>>): Pick<GameState, 'log' | 'nextLogId'> {
  let id = state.nextLogId;
  const withIds = entries.map((e) => ({ ...e, id: id++ }));
  return { log: [...withIds.reverse(), ...state.log].slice(0, 40), nextLogId: id };
}

function resolveRoll(state: GameState, value: number, stat: Stat): GameState {
  const station = currentStation(state);
  const target = targetFor(state, stat);
  const catastrophe = value === 6;
  const success = !catastrophe && value <= target;
  const roll: RollResult = { value, stat, target, success, catastrophe };
  const rollText = `${stat}-Probe: 🎲 ${value} gegen ${target}`;

  if (!success) {
    const damage = station.failDamage + (catastrophe ? 1 : 0);
    const slp = Math.max(0, state.slp - damage);
    const entries: Array<Omit<LogEntry, 'id'>> = [
      { text: `${rollText} – ${catastrophe ? 'KATASTROPHE!' : 'Fehlschlag'}`, tone: 'fail' },
      { text: `${station.failText} −${damage} LP`, tone: 'fail' },
    ];
    if (slp === 0) entries.push({ text: 'Deine Staubpfote ist erschöpft …', tone: 'fail' });
    return { ...state, ...addLog(state, entries), slp, lastRoll: roll, phase: slp === 0 ? 'lost' : 'play' };
  }

  const entries: Array<Omit<LogEntry, 'id'>> = [
    { text: `${rollText} – Erfolg!`, tone: 'success' },
    { text: station.successText, tone: 'success' },
  ];
  const hasLaser = state.hasLaser || station.reward === 'laser';

  const nextCheck = state.checkIndex + 1;
  if (nextCheck < station.checks.length) {
    entries.push({ text: `Zweite Probe nötig: ${station.checks[nextCheck]}`, tone: 'info' });
    return { ...state, ...addLog(state, entries), checkIndex: nextCheck, lastRoll: roll, hasLaser };
  }

  entries.push({
    text:
      state.nodeId === 'queen'
        ? 'An der Königin vorbei! Der Duft von Hinog liegt in der Luft …'
        : `${station.name} geschafft! Der Weg ist frei.`,
    tone: 'info',
  });
  return { ...state, ...addLog(state, entries), roomCleared: true, lastRoll: roll, hasLaser };
}

function advance(state: GameState, to: NodeId): GameState {
  if (!state.roomCleared || !NEXT[state.nodeId].includes(to)) return state;
  const path = [...state.path, to];

  if (to === 'hinog') {
    return {
      ...state,
      ...addLog(state, [{ text: 'Die Hinogkammer! Leckerer, süßer Hinog überall! 🍯', tone: 'success' }]),
      nodeId: to,
      path,
      roomCleared: false,
      phase: 'won',
    };
  }

  const next = stationAt(state.layout, to);
  const branchNode = MAP_NODES.find((n) => n.id === to);
  const branchText =
    state.nodeId === 's2' && branchNode && (branchNode.branch === 'A' || branchNode.branch === 'B')
      ? ` (${branchNode.branch === 'A' ? 'oberer' : 'unterer'} Weg)`
      : '';
  return {
    ...state,
    ...addLog(state, [{ text: `Du betrittst: ${next.name}${branchText}`, tone: 'info' }]),
    nodeId: to,
    path,
    checkIndex: 0,
    roomCleared: false,
    lastRoll: null,
  };
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SELECT': {
      const character = CHARACTERS.find((c) => c.id === action.id);
      if (!character) return state;
      const fresh: GameState = {
        ...initialState,
        phase: 'play',
        character,
        slp: character.slp,
        layout: action.layout,
        nodeId: 's1',
        path: ['s1'],
      };
      return {
        ...fresh,
        ...addLog(fresh, [
          {
            text: `${character.name} schleicht in den Brumsenbau. Erste Kammer: ${action.layout.s1.name}`,
            tone: 'info',
          },
        ]),
      };
    }
    case 'ROLL':
      if (state.phase !== 'play' || state.roomCleared) return state;
      return resolveRoll(state, action.value, action.stat);
    case 'ADVANCE':
      if (state.phase !== 'play') return state;
      return advance(state, action.to);
    case 'RESTART':
      return initialState;
    default:
      return state;
  }
}
