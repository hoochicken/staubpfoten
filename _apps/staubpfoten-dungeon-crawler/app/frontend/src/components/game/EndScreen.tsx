import { CHARACTER_ART, WIN_ART } from '@/game/assets';
import { chosenBranch, currentStation, type GameState } from '@/game/engine';

interface EndScreenProps {
  state: GameState;
  onRestart: () => void;
}

export default function EndScreen({ state, onRestart }: EndScreenProps) {
  const won = state.phase === 'won';
  const character = state.character;
  if (!character) return null;

  const branch = chosenBranch(state.path);
  const passed = Math.max(0, state.path.length - 1);
  const stats = `Übrige LP: ${state.slp} · Geschaffte Kammern: ${passed}${
    branch === 'A' ? ' · Oberer Weg' : branch === 'B' ? ' · Unterer Weg' : ''
  }`;

  if (won) {
    return (
      <div className="flex h-[100dvh] flex-col gap-2 overflow-hidden p-2 sm:gap-3 sm:p-3">
        <div className="pixel-panel relative min-h-0 flex-1 overflow-hidden p-0">
          <img
            src={WIN_ART[character.id]}
            alt={`${character.name} schleckt glücklich triefenden Hinog in der Hinogkammer`}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ imageRendering: 'pixelated' }}
          />
          <h1
            className="font-pixel absolute left-2 top-2 px-3 py-2 text-[16px] leading-[1.4] text-[#f2b33d] sm:text-[24px]"
            style={{ background: 'rgba(18,10,6,0.85)', border: '3px solid #120a06', textShadow: '3px 3px 0 #120a06' }}
          >
            Hinog!
          </h1>
        </div>

        <section className="pixel-panel flex shrink-0 flex-col gap-2 p-3 sm:flex-row sm:items-center sm:gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-[19px] leading-snug text-[#f6e7c8]/90">
              {character.name} hat sich an der Königin vorbeigeschlichen und schleckt jetzt glücklich den leckeren, süßen
              Hinog. Mmmh!
            </p>
            <p className="text-[17px] text-[#c9b48e]">{stats}</p>
          </div>
          <button
            type="button"
            onClick={onRestart}
            className="pixel-btn pixel-btn-pink shrink-0 px-4 py-2 text-[10px] leading-relaxed"
          >
            Nochmal spielen
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="flex h-[100dvh] items-center justify-center overflow-hidden px-4">
      <div className="pixel-panel w-full max-w-[560px] p-5 text-center">
        <div
          className="mx-auto flex h-24 w-24 items-center justify-center"
          style={{ background: '#2b1b12', border: '4px solid #120a06' }}
        >
          <img
            src={CHARACTER_ART[character.id]}
            alt={`${character.name} erschöpft`}
            className="h-[80%] w-[80%] object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
        <h1 className="font-pixel mt-4 text-[20px] leading-[1.5] text-[#e5484d]">Erwischt!</h1>
        <p className="mt-3 text-[20px] leading-snug text-[#f6e7c8]/90">
          {character.name} hat in der Kammer „{currentStation(state).name}“ keine Kraft mehr und muss sich ausruhen. Beim
          nächsten Mal klappt es besser!
        </p>
        <p className="mt-2 text-[18px] text-[#c9b48e]">{stats}</p>
        <button
          type="button"
          onClick={onRestart}
          className="pixel-btn pixel-btn-pink mt-4 w-full px-4 py-2 text-[10px] leading-relaxed"
        >
          Nochmal spielen
        </button>
        <p className="mt-2 text-[16px] text-[#c9b48e]">Beim nächsten Spiel werden die Kammern neu ausgelost.</p>
      </div>
    </div>
  );
}
