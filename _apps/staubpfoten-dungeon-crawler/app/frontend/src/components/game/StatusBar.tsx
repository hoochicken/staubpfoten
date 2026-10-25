import { STAT_LABELS, type Stat } from '@/game/data';
import { CHARACTER_ART } from '@/game/assets';
import type { GameState } from '@/game/engine';

interface StatusBarProps {
  state: GameState;
  onRestart: () => void;
  /** Stat that is currently tested, highlighted in the bar. */
  highlight?: Stat | null;
}

export default function StatusBar({ state, onRestart, highlight = null }: StatusBarProps) {
  const character = state.character;
  if (!character) return null;

  return (
    <header
      className="flex shrink-0 items-center gap-2 px-3 py-2 sm:gap-3 sm:px-4"
      style={{ background: '#3a2418', borderBottom: '4px solid #120a06' }}
    >
      <div className="h-10 w-10 shrink-0 overflow-hidden" style={{ background: '#2b1b12', border: '3px solid #120a06' }}>
        <img
          src={CHARACTER_ART[character.id]}
          alt={character.name}
          className="h-full w-full object-cover"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      <div className="min-w-0">
        <p className="font-pixel text-[10px] leading-tight text-[#f2b33d]">{character.name}</p>
        <div className="mt-1 flex gap-[3px]" aria-label={`${state.slp} von ${character.slp} Lebenspunkten`}>
          {Array.from({ length: character.slp }, (_, i) => (
            <span
              key={i}
              className="block h-3 w-3"
              style={{ background: i < state.slp ? '#7bc950' : '#2b1b12', border: '2px solid #120a06' }}
            />
          ))}
        </div>
      </div>

      <dl className="ml-auto flex items-center gap-1">
        {(Object.keys(character.stats) as Stat[]).map((key) => {
          const boosted = state.hasLaser && (key === 'KK' || key === 'KL');
          const active = key === highlight;
          return (
            <div
              key={key}
              title={STAT_LABELS[key]}
              className="flex items-baseline gap-1 px-[6px] py-1"
              style={{
                background: active ? '#6b4a30' : '#2b1b12',
                border: active ? '2px solid #f2b33d' : '2px solid transparent',
              }}
            >
              <dt className="font-pixel text-[7px] text-[#c9b48e]">{key}</dt>
              <dd className="font-pixel text-[10px] text-[#f6e7c8]">
                {character.stats[key]}
                {boosted ? <span className="text-[#7bc950]">+1</span> : null}
              </dd>
            </div>
          );
        })}
      </dl>

      {state.hasLaser && (
        <span
          className="hidden px-2 py-1 text-[15px] leading-none sm:inline"
          style={{ background: '#2b1b12', color: '#7bc950' }}
        >
          Laser aktiv
        </span>
      )}

      <button
        type="button"
        onClick={onRestart}
        className="pixel-btn shrink-0 px-2 text-[12px] leading-none"
        aria-label="Spiel neu starten"
        title="Neu starten"
      >
        ↺
      </button>
    </header>
  );
}
