import { MAP_NODES, NEXT, type NodeId } from '@/game/data';
import { currentStation, stationAt, type GameState } from '@/game/engine';
import ColonyMap from './ColonyMap';
import StatusBar from './StatusBar';

interface MapScreenProps {
  state: GameState;
  onStart: () => void;
  onAdvance: (to: NodeId) => void;
  onBackToRoom: () => void;
  onRestart: () => void;
}

function choiceLabel(from: NodeId, to: NodeId, name: string): string {
  if (from !== 's2') return `${name} →`;
  const branch = MAP_NODES.find((n) => n.id === to)?.branch;
  return `${branch === 'A' ? 'Oberer' : 'Unterer'} Weg: ${name} →`;
}

export default function MapScreen({ state, onStart, onAdvance, onBackToRoom, onRestart }: MapScreenProps) {
  const isStart = state.path.length === 1 && !state.roomCleared && !state.lastRoll;

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden">
      <StatusBar state={state} onRestart={onRestart} />

      <main className="flex min-h-0 flex-1 flex-col gap-2 p-2 sm:gap-3 sm:p-3 landscape:flex-row">
        <ColonyMap state={state} onAdvance={onAdvance} className="min-h-0 flex-1" />

        <aside className="pixel-panel flex shrink-0 flex-col justify-center gap-2 p-3 landscape:w-[300px]">
          {isStart ? (
            <>
              <h1 className="font-pixel text-[12px] leading-relaxed text-[#f2b33d]">Dein Weg</h1>
              <p className="text-[18px] leading-snug text-[#f6e7c8]/90">
                Zwei Wege führen durch den Brumsenbau – vorbei an der Königin bis zur Hinogkammer. Die Kammern sind neu
                ausgelost.
              </p>
              <button
                type="button"
                onClick={onStart}
                className="pixel-btn pixel-btn-pink mt-1 w-full px-3 py-2 text-[10px] leading-relaxed"
              >
                Abenteuer jetzt starten ▶
              </button>
            </>
          ) : state.roomCleared ? (
            <>
              <h1 className="font-pixel text-[11px] leading-relaxed text-[#7bc950]">
                {state.nodeId === 's2' ? 'Der Gang gabelt sich!' : 'Weg frei!'}
              </h1>
              <p className="text-[17px] leading-snug text-[#c9b48e]">
                Wähle den nächsten Raum – hier oder direkt auf der Karte (pink).
              </p>
              {NEXT[state.nodeId].map((to) => (
                <button
                  key={to}
                  type="button"
                  onClick={() => onAdvance(to)}
                  className="pixel-btn pixel-btn-green w-full px-3 py-2 text-[9px] leading-relaxed"
                >
                  {choiceLabel(state.nodeId, to, stationAt(state.layout, to).name)}
                </button>
              ))}
            </>
          ) : (
            <>
              <h1 className="font-pixel text-[11px] leading-relaxed text-[#f2b33d]">Du bist hier</h1>
              <p className="text-[18px] leading-snug text-[#f6e7c8]/90">{currentStation(state).name}</p>
              <button
                type="button"
                onClick={onBackToRoom}
                className="pixel-btn w-full px-3 py-2 text-[10px] leading-relaxed"
              >
                Zurück in den Raum
              </button>
            </>
          )}
        </aside>
      </main>
    </div>
  );
}
