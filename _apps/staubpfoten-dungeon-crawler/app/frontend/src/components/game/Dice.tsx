const PIPS: Record<number, number[]> = {
  1: [4],
  2: [0, 8],
  3: [0, 4, 8],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 2, 3, 5, 6, 8],
};

interface DiceProps {
  value: number | null;
  rolling: boolean;
  tone?: 'success' | 'fail' | 'neutral';
}

const TONE_BG: Record<NonNullable<DiceProps['tone']>, string> = {
  success: '#7bc950',
  fail: '#e5484d',
  neutral: '#f6e7c8',
};

export default function Dice({ value, rolling, tone = 'neutral' }: DiceProps) {
  const pips = value ? PIPS[value] : [];

  return (
    <div
      role="img"
      aria-label={value ? `Würfel zeigt ${value}` : 'Würfel noch nicht geworfen'}
      className={`relative h-[52px] w-[52px] shrink-0 ${rolling ? 'animate-dice-shake' : ''}`}
      style={{ background: TONE_BG[tone], border: '3px solid #120a06', boxShadow: '3px 3px 0 #120a06' }}
    >
      <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-[2px] p-[6px]">
        {Array.from({ length: 9 }, (_, i) => (
          <span key={i} className="flex items-center justify-center">
            {pips.includes(i) && <span className="block h-[7px] w-[7px]" style={{ background: '#120a06' }} />}
          </span>
        ))}
      </div>
      {!value && (
        <span
          className="font-pixel absolute inset-0 flex items-center justify-center text-[16px] leading-none"
          style={{ color: '#120a06' }}
        >
          ?
        </span>
      )}
    </div>
  );
}
