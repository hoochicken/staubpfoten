import { useEffect, useState } from 'react';
import { EDGES, MAP_NODES, NEXT, type MapNode, type NodeId } from '@/game/data';
import { ASSETS } from '@/game/assets';
import { chosenBranch, stationAt, type GameState } from '@/game/engine';

interface ColonyMapProps {
  state: GameState;
  onAdvance: (to: NodeId) => void;
  className?: string;
}

type NodeState = 'done' | 'active' | 'next' | 'skipped' | 'locked';

const NODE_STYLES: Record<NodeState, { background: string; color: string; opacity: number }> = {
  done: { background: '#7bc950', color: '#120a06', opacity: 1 },
  active: { background: '#f2b33d', color: '#120a06', opacity: 1 },
  next: { background: '#ff6fae', color: '#120a06', opacity: 1 },
  skipped: { background: '#3a2418', color: '#c9b48e', opacity: 0.4 },
  locked: { background: '#3a2418', color: '#c9b48e', opacity: 1 },
};

const NODES = Object.fromEntries(MAP_NODES.map((n) => [n.id, n])) as Record<NodeId, MapNode>;

/** Portrait screens get a top-to-bottom map so all chambers fit without scrolling. */
function usePortrait(): boolean {
  const query = '(orientation: portrait)';
  const [portrait, setPortrait] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setPortrait(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return portrait;
}

/** Maps the landscape layout coordinates into the visible map area. */
function position(node: MapNode, portrait: boolean): { x: number; y: number } {
  if (portrait) return { x: 12 + node.y * 0.76, y: 5 + node.x * 0.88 };
  return { x: 4 + node.x * 0.92, y: 10 + node.y * 0.78 };
}

function getNodeState(node: MapNode, state: GameState): NodeState {
  if (node.id === state.nodeId) return 'active';
  if (state.path.includes(node.id)) return 'done';
  if (state.roomCleared && NEXT[state.nodeId].includes(node.id)) return 'next';
  const branch = chosenBranch(state.path);
  if (branch && (node.branch === 'A' || node.branch === 'B') && node.branch !== branch) return 'skipped';
  return 'locked';
}

function isTraversed(path: NodeId[], from: NodeId, to: NodeId): boolean {
  return path.some((id, i) => id === from && path[i + 1] === to);
}

function Tunnels({ state, portrait }: { state: GameState; portrait: boolean }) {
  const branch = chosenBranch(state.path);
  const lines = EDGES.map(([from, to]) => {
    const a = position(NODES[from], portrait);
    const b = position(NODES[to], portrait);
    const toBranch = NODES[to].branch;
    const fromBranch = NODES[from].branch;
    const edgeBranch = toBranch === 'A' || toBranch === 'B' ? toBranch : fromBranch;
    const skipped = Boolean(branch) && (edgeBranch === 'A' || edgeBranch === 'B') && edgeBranch !== branch;
    return {
      key: `${from}-${to}`,
      a,
      b,
      traversed: isTraversed(state.path, from, to),
      upcoming: state.roomCleared && from === state.nodeId,
      skipped,
    };
  });

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
      {lines.map(({ key, a, b }) => (
        <line key={`${key}-shadow`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#120a06" strokeWidth={3} strokeLinecap="round" />
      ))}
      {lines.map(({ key, a, b, traversed, upcoming, skipped }) => (
        <line
          key={key}
          x1={a.x}
          y1={a.y}
          x2={b.x}
          y2={b.y}
          stroke={traversed ? '#7bc950' : upcoming ? '#ff6fae' : '#6b4a30'}
          strokeOpacity={skipped ? 0.35 : 1}
          strokeWidth={1.4}
          strokeDasharray="3 2.5"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

function ChamberNode({
  node,
  state,
  portrait,
  onAdvance,
}: {
  node: MapNode;
  state: GameState;
  portrait: boolean;
  onAdvance: (to: NodeId) => void;
}) {
  const nodeState = getNodeState(node, state);
  const style = NODE_STYLES[nodeState];
  const station = stationAt(state.layout, node.id);
  const isEnd = node.branch === 'end';
  const pos = position(node, portrait);
  const clickable = nodeState === 'next';
  const statusText: Record<NodeState, string> = {
    done: 'geschafft',
    active: 'hier bist du',
    next: 'jetzt betretbar',
    skipped: 'anderer Weg',
    locked: 'noch nicht erreicht',
  };

  const circle = (
    <span
      className={`flex items-center justify-center rounded-full ${
        nodeState === 'active' || nodeState === 'next' ? 'animate-node-pulse' : ''
      } ${isEnd ? 'h-[42px] w-[42px] sm:h-[54px] sm:w-[54px]' : 'h-[32px] w-[32px] sm:h-[40px] sm:w-[40px]'}`}
      style={{ background: style.background, border: '3px solid #120a06', boxShadow: '3px 3px 0 #120a06' }}
    >
      {isEnd ? (
        <img
          src={node.id === 'queen' ? ASSETS.queen : ASSETS.honey}
          alt=""
          className="h-[80%] w-[80%] object-contain"
          style={{ imageRendering: 'pixelated' }}
        />
      ) : (
        <span className="font-pixel text-[9px]" style={{ color: style.color }}>
          {nodeState === 'done' ? '✓' : node.slot}
        </span>
      )}
    </span>
  );

  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      style={{ left: `${pos.x}%`, top: `${pos.y}%`, opacity: style.opacity }}
    >
      {clickable ? (
        <button type="button" onClick={() => onAdvance(node.id)} className="rounded-full" aria-label={`Weiter zu ${station.name}`}>
          {circle}
        </button>
      ) : (
        <span aria-hidden="true">{circle}</span>
      )}
      <span
        className="font-pixel mt-1 max-w-[86px] whitespace-nowrap text-center text-[6px] leading-[1.6] sm:text-[7px]"
        style={{
          color: nodeState === 'locked' || nodeState === 'skipped' ? '#c9b48e' : '#f6e7c8',
          textShadow: '2px 2px 0 #120a06',
        }}
      >
        {station.name}
      </span>
      <span className="sr-only">{statusText[nodeState]}</span>
    </div>
  );
}

export default function ColonyMap({ state, onAdvance, className = '' }: ColonyMapProps) {
  const portrait = usePortrait();
  return (
    <div
      className={`pixel-panel relative w-full overflow-hidden p-0 ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(43,27,18,0.82), rgba(43,27,18,0.82)), url(${ASSETS.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      role="group"
      aria-label="Karte des Brumsenbaus mit zwei Wegen zur Königinnenkammer und Hinogkammer"
    >
      <Tunnels state={state} portrait={portrait} />
      {MAP_NODES.map((node) => (
        <ChamberNode key={node.id} node={node} state={state} portrait={portrait} onAdvance={onAdvance} />
      ))}
    </div>
  );
}
