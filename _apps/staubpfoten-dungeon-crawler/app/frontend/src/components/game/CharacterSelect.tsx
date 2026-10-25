import { useState } from 'react';
import { CHARACTERS, type CharacterId, type Stat } from '@/game/data';
import { ASSETS, CHARACTER_ART } from '@/game/assets';

interface CharacterSelectProps {
  onSelect: (id: CharacterId) => void;
}

export default function CharacterSelect({ onSelect }: CharacterSelectProps) {
  const [selected, setSelected] = useState<CharacterId | null>(null);
  const selectedName = CHARACTERS.find((c) => c.id === selected)?.name;

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <img
        src={ASSETS.background}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ imageRendering: 'pixelated' }}
      />
      <div className="absolute inset-0" style={{ background: 'rgba(43, 27, 18, 0.72)' }} />

      <div className="relative mx-auto flex min-h-screen max-w-[900px] flex-col justify-center gap-6 px-3 py-8 sm:px-4">
        <header className="text-center">
          <p className="font-pixel mb-3 text-[10px] tracking-[0.3em] text-[#f2b33d]">Ein Würfel-Abenteuer</p>
          <h1
            className="font-pixel text-[28px] leading-[1.35] text-[#f6e7c8] sm:text-[48px]"
            style={{ textShadow: '5px 5px 0 #120a06' }}
          >
            STAUBPFOTEN!
          </h1>
          <p className="mt-3 text-[20px] text-[#f6e7c8]/90">
            Schleich durch den Brumsenbau bis zur Hinogkammer – aber leise!
          </p>
        </header>

        <section aria-labelledby="wahl-titel">
          <h2 id="wahl-titel" className="font-pixel mb-4 text-center text-[12px] leading-relaxed text-[#ff6fae]">
            Wähle deine Staubpfote!
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {CHARACTERS.map((character) => {
              const isSelected = selected === character.id;
              return (
                <button
                  key={character.id}
                  type="button"
                  onClick={() => setSelected(character.id)}
                  aria-pressed={isSelected}
                  aria-label={`${character.name} wählen`}
                  className="pixel-panel flex flex-col items-center gap-3 p-3 text-center transition-transform sm:p-5"
                  style={{
                    borderColor: isSelected ? '#f2b33d' : '#120a06',
                    background: isSelected ? '#6b4a30' : '#4a2f1e',
                    transform: isSelected ? 'translate(-2px, -2px)' : undefined,
                  }}
                >
                  <div
                    className="aspect-square w-full max-w-[180px] overflow-hidden"
                    style={{ background: '#2b1b12', border: '4px solid #120a06' }}
                  >
                    <img
                      src={CHARACTER_ART[character.id]}
                      alt={`${character.name} als Pixel-Katze`}
                      className="h-full w-full object-contain"
                      style={{ imageRendering: 'pixelated' }}
                    />
                  </div>
                  <h3 className="font-pixel text-[14px] leading-tight text-[#f2b33d] sm:text-[18px]">{character.name}</h3>

                  <dl className="grid w-full grid-cols-2 gap-1 sm:grid-cols-4 sm:gap-2">
                    {(Object.keys(character.stats) as Stat[]).map((stat) => (
                      <div key={stat} className="px-1 py-1 text-center" style={{ background: '#2b1b12' }}>
                        <dt className="font-pixel text-[8px] text-[#c9b48e]">{stat}</dt>
                        <dd className="font-pixel mt-1 text-[13px] text-[#f6e7c8]">{character.stats[stat]}</dd>
                      </div>
                    ))}
                    <div className="px-1 py-1 text-center" style={{ background: '#2b1b12' }}>
                      <dt className="font-pixel text-[8px] text-[#c9b48e]">LP</dt>
                      <dd className="font-pixel mt-1 text-[13px] text-[#7bc950]">{character.slp}</dd>
                    </div>
                  </dl>

                  <span
                    className="font-pixel w-full px-2 py-3 text-[9px] leading-relaxed sm:text-[11px]"
                    style={{
                      background: isSelected ? '#7bc950' : '#f2b33d',
                      color: '#2b1b12',
                      border: '4px solid #120a06',
                    }}
                  >
                    {isSelected ? '✓ Gewählt' : `${character.name} wählen`}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => selected && onSelect(selected)}
            disabled={!selected}
            className="pixel-btn pixel-btn-pink mt-6 w-full px-4 py-5 text-[13px] leading-relaxed sm:text-[15px]"
          >
            {selected ? `Spielen mit ${selectedName} ▶` : 'Spielen ▶'}
          </button>
          {!selected && <p className="mt-2 text-center text-[18px] text-[#c9b48e]">Tippe zuerst auf eine Figur.</p>}
        </section>

        <section className="pixel-panel p-4">
          <h2 className="font-pixel mb-2 text-[11px] leading-relaxed text-[#f2b33d]">So wird gewürfelt</h2>
          <ul className="space-y-1 text-[19px] leading-snug text-[#f6e7c8]/90">
            <li>1. Würfle mit einem 6-seitigen Würfel.</li>
            <li>2. Gleicher Wert oder darunter: Probe bestanden.</li>
            <li>3. Darüber: Fehlschlag, du verlierst 1 LP (Lebenspunkt). Bei einer 6 ist es eine Katastrophe mit 2 LP.</li>
            <li>4. Bei 0 LP ist das Abenteuer vorbei.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
