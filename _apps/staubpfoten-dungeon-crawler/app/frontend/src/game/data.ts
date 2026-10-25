export type Stat = 'GE' | 'KK' | 'KL';

export const STAT_LABELS: Record<Stat, string> = {
  GE: 'Geschick',
  KK: 'Körperkraft',
  KL: 'Klugheit',
};

export type CharacterId = 'halo' | 'nand';

export interface Character {
  id: CharacterId;
  name: string;
  tagline: string;
  stats: Record<Stat, number>;
  slp: number;
}

export const CHARACTERS: Character[] = [
  {
    id: 'halo',
    name: 'Halo',
    tagline: 'Flinke Katze im orange-roten Raumanzug – schleicht auf leisen Pfoten überall vorbei.',
    stats: { GE: 5, KK: 2, KL: 3 },
    slp: 5,
  },
  {
    id: 'nand',
    name: 'Nand',
    tagline: 'Kräftige Katze im orange-roten Raumanzug – packt an, wo andere aufgeben.',
    stats: { GE: 3, KK: 4, KL: 3 },
    slp: 5,
  },
];

export interface Station {
  id: string;
  name: string;
  description: string;
  challenge: string;
  /** One die check per entry, resolved in order. Empty for the goal room. */
  checks: Stat[];
  failDamage: number;
  successText: string;
  failText: string;
  reward?: 'laser';
}

/** Rooms that are randomly drawn into the seven numbered chambers. */
export const ROOM_POOL: Station[] = [
  {
    id: 'wachraum',
    name: 'Wachraum',
    description: 'Arbeiterinnen bewachen den Nesteingang.',
    challenge: 'An den Wächterinnen vorbeikommen.',
    checks: ['GE'],
    failDamage: 1,
    successText: 'Unbemerkt an den Wächterinnen vorbeigehuscht!',
    failText: 'Eine Wächterin entdeckt dich und piekst dich in die Pfote.',
  },
  {
    id: 'korridor',
    name: 'Korridor',
    description: 'Brumsen drängen sich durch einen engen Gang.',
    challenge: 'Gegen den Schwarm vorankommen.',
    checks: ['KK'],
    failDamage: 1,
    successText: 'Du drängelst dich durch den Schwarm – der Gang ist geschafft!',
    failText: 'Der Schwarm schiebt dich zurück gegen die Wand.',
  },
  {
    id: 'schlafraum',
    name: 'Schlafraum',
    description: 'Dronen ruhen dicht gedrängt an den Wänden.',
    challenge: 'Lautlos hindurchschleichen.',
    checks: ['GE'],
    failDamage: 1,
    successText: 'Keine Drohne ist aufgewacht. Pssst!',
    failText: 'Eine Drohne brummt im Schlaf und schubst dich.',
  },
  {
    id: 'ventilationsraum',
    name: 'Ventilationsraum',
    description: 'Brumsenflügel erzeugen Luftstrom in den Schächten.',
    challenge: 'Den richtigen Luftschacht finden.',
    checks: ['KL'],
    failDamage: 1,
    successText: 'Richtiger Schacht gefunden – frische Luft voraus!',
    failText: 'Falscher Schacht, ein Windstoß wirft dich um.',
  },
  {
    id: 'lager',
    name: 'Lager',
    description: 'Arbeiterinnen stapeln Nektar und Pollenvorräte.',
    challenge: 'Einen schweren Vorratsblock verschieben.',
    checks: ['KK'],
    failDamage: 1,
    successText: 'Der Vorratsblock rutscht beiseite – Weg frei!',
    failText: 'Der Block kippt zurück auf deine Pfote.',
  },
  {
    id: 'aufzuchtkammer',
    name: 'Aufzuchtkammer',
    description: 'Arbeiterinnen versorgen hungrige Larven.',
    challenge: 'Unbemerkt zwischen den Larvennestern hindurchschleichen.',
    checks: ['GE'],
    failDamage: 1,
    successText: 'Zwischen den Larvennestern hindurchgeschlüpft!',
    failText: 'Eine Amme entdeckt dich und schimpft los.',
  },
  {
    id: 'ki-versteck',
    name: 'KI-Versteck',
    description: 'Zwischen Waben verbirgt sich eine summende Maschine.',
    challenge: 'Die technische Sperre entschlüsseln.',
    checks: ['KL'],
    failDamage: 1,
    successText: 'Sperre entschlüsselt – und dahinter liegt eine Laserwaffe!',
    failText: 'Bzzzt! Die Maschine gibt dir einen kleinen Stromschlag.',
    reward: 'laser',
  },
  {
    id: 'abseits',
    name: 'Abseits',
    description: 'Ein verlassenes Neststück birgt alte Spuren.',
    challenge: 'Die Spuren der verschwundenen Arbeiterinnen deuten.',
    checks: ['KL'],
    failDamage: 1,
    successText: 'Die Spuren verraten dir den weiteren Weg.',
    failText: 'Du verlierst die Spur und stolperst im Dunkeln.',
  },
  {
    id: 'staubgrube',
    name: 'Staubgrube',
    description: 'Aufgewirbelter Staub füllt eine tiefe Senke.',
    challenge: 'Aus der lockeren Grube herausklettern.',
    checks: ['KK'],
    failDamage: 1,
    successText: 'Mit kräftigen Pfoten herausgeklettert!',
    failText: 'Der Staub rutscht weg und du fällst zurück.',
  },
  {
    id: 'fermentpilzkammer',
    name: 'Fermentpilzkammer',
    description: 'Arbeiterinnen pflegen leuchtende Fermentpilze.',
    challenge: 'Durch dichte Pilzsporen zum Ausgang gelangen.',
    checks: ['GE'],
    failDamage: 1,
    successText: 'Elegant durch die Sporen geschlängelt!',
    failText: 'Die Sporen erwischen dich – du hustest fürchterlich.',
  },
  {
    id: 'verschuetteter-raum',
    name: 'Verschütteter Raum',
    description: 'Geröll versperrt einen alten Nestabschnitt.',
    challenge: 'Den verschütteten Durchgang freiräumen.',
    checks: ['KK'],
    failDamage: 1,
    successText: 'Das Geröll ist weggeschoben – der Weg ist frei!',
    failText: 'Ein Brocken rollt dir auf die Pfote.',
  },
];

export const QUEEN_ROOM: Station = {
  id: 'koeniginnenkammer',
  name: 'Königinnenkammer',
  description: 'Die Königin bewacht ihre Eier und Larven.',
  challenge: 'Die Königin ablenken und an ihr vorbeigelangen.',
  checks: ['KK', 'GE'],
  failDamage: 1,
  successText: 'Die Königin schaut in die falsche Richtung!',
  failText: 'Die Königin brummt wütend und stößt dich zurück.',
};

export const HINOG_ROOM: Station = {
  id: 'hinogkammer',
  name: 'Hinogkammer',
  description: 'Goldene Waben voller leckerem, süßem Hinog.',
  challenge: 'Das Ziel! Hier wartet der Hinog.',
  checks: [],
  failDamage: 0,
  successText: 'Mmmh, Hinog!',
  failText: '',
};

export type SlotId = 's1' | 's2' | 's3' | 's4' | 's5' | 's6' | 's7';
export type NodeId = SlotId | 'queen' | 'hinog';
export type Branch = 'start' | 'A' | 'B' | 'end';

export const SLOT_IDS: SlotId[] = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'];

export interface MapNode {
  id: NodeId;
  /** Chamber number shown on the map, null for the fixed end rooms. */
  slot: number | null;
  branch: Branch;
  /** Position on the map in percent. */
  x: number;
  y: number;
}

export const MAP_NODES: MapNode[] = [
  { id: 's1', slot: 1, branch: 'start', x: 7, y: 50 },
  { id: 's2', slot: 2, branch: 'start', x: 21, y: 50 },
  { id: 's3', slot: 3, branch: 'A', x: 38, y: 20 },
  { id: 's4', slot: 4, branch: 'A', x: 60, y: 20 },
  { id: 's5', slot: 5, branch: 'B', x: 35, y: 80 },
  { id: 's6', slot: 6, branch: 'B', x: 51, y: 80 },
  { id: 's7', slot: 7, branch: 'B', x: 67, y: 80 },
  { id: 'queen', slot: null, branch: 'end', x: 79, y: 50 },
  { id: 'hinog', slot: null, branch: 'end', x: 92, y: 50 },
];

export const NEXT: Record<NodeId, NodeId[]> = {
  s1: ['s2'],
  s2: ['s3', 's5'],
  s3: ['s4'],
  s4: ['queen'],
  s5: ['s6'],
  s6: ['s7'],
  s7: ['queen'],
  queen: ['hinog'],
  hinog: [],
};

export const EDGES: Array<[NodeId, NodeId]> = (Object.keys(NEXT) as NodeId[]).flatMap((from) =>
  NEXT[from].map((to) => [from, to] as [NodeId, NodeId]),
);

export const BRANCH_LABEL: Record<'A' | 'B', string> = {
  A: 'Oberer Weg',
  B: 'Unterer Weg',
};

export const LASER_STATS: Stat[] = ['KK', 'KL'];
