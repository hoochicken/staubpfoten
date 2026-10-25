import { STAT_LABELS } from '@/game/data';
import { ROOM_ART } from '@/game/assets';
import { currentStat, currentStation, targetFor, type GameState } from '@/game/engine';
import Dice from './Dice';
import StatusBar from './StatusBar';

interface RoomScreenProps {
  state: GameState;
  rolling: boolean;
  onRoll: () => void;
  onOpenMap: () => void;
  onRestart: () => void;
}

const TONE_COLOR = { success: '#7bc950', fail: '#e5484d', info: '#c9b48e' } as const;

export default function RoomScreen({ state, rolling, onRoll, onOpenMap, onRestart }: RoomScreenProps) {
  const station = currentStation(state);
  const stat = currentStat(state);
  const target = targetFor(state, stat);
  const roll = rolling ? null : state.lastRoll;
  const tone = roll ? (roll.success ? 'success' : 'fail') : 'neutral';
  const latest = roll ? state.log[0] : null;
  const art = ROOM_ART[station.id];

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden">
      <StatusBar state={state} onRestart={onRestart} highlight={state.roomCleared ? null : stat} />

      <main className="flex min-h-0 flex-1 flex-col gap-2 p-2 sm:gap-3 sm:p-3 landscape:flex-row">
        <div className="pixel-panel relative min-h-0 flex-1 overflow-hidden p-0">
          {art && (
            <img
              src={art}
              alt={`${station.name}: ${station.description}`}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ imageRendering: 'pixelated' }}
            />
          )}
          <h1
            className="font-pixel absolute bottom-2 left-2 px-2 py-1 text-[11px] leading-relaxed text-[#f2b33d] sm:text-[13px]"
            style={{ background: 'rgba(18,10,6,0.85)', border: '3px solid #120a06' }}
          >
            {station.name}
          </h1>
          <button
            type="button"
            onClick={onOpenMap}
            className="pixel-btn absolute right-2 top-2 px-2 text-[8px] leading-none"
          >
            Karte
          </button>
        </div>

        <section className="pixel-panel flex shrink-0 flex-col gap-2 p-3 landscape:w-[320px] landscape:justify-center">
          <p className="text-[18px] leading-snug text-[#f6e7c8]/90">{station.description}</p>
          <p className="text-[17px] leading-snug text-[#c9b48e]">
            <span className="text-[#ff6fae]">Aufgabe:</span> {station.challenge}
          </p>

          <div className="flex items-center gap-3">
            <Dice value={roll?.value ?? null} rolling={rolling} tone={tone} />
            <div className="min-w-0 flex-1">
              <p className="font-pixel text-[9px] leading-relaxed text-[#f6e7c8]">
                {stat}-Probe
                {station.checks.length > 1 ? ` (${state.checkIndex + 1}/${station.checks.length})` : ''}
              </p>
              <p className="text-[16px] leading-tight text-[#c9b48e]">
                {STAT_LABELS[stat]}: würfle {target} oder weniger
              </p>
            </div>
            {!state.roomCleared && (
              <button
                type="button"
                onClick={onRoll}
                disabled={state.phase !== 'play' || rolling}
                className="pixel-btn shrink-0 px-3 text-[9px] leading-none"
              >
                {rolling ? '…' : roll && !roll.success ? 'Nochmal' : 'Würfeln'}
              </button>
            )}
          </div>

          {latest && (
            <p className="text-[17px] leading-snug" style={{ color: TONE_COLOR[latest.tone] }} role="status">
              {latest.text}
            </p>
          )}

          {state.roomCleared && (
            <button
              type="button"
              onClick={onOpenMap}
              className="pixel-btn pixel-btn-green w-full px-3 py-2 text-[10px] leading-relaxed"
            >
              Weiter zur Karte →
            </button>
          )}
        </section>
      </main>
    </div>
  );
}
