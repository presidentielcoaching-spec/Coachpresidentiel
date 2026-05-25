type LogoProps = {
  size?: number;
  showTagline?: boolean;
  className?: string;
};

export function Logo({ size = 44, showTagline = true, className }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <SankofaMark size={size} />
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-[0.15em] text-gradient-gold sm:text-2xl">
          SANKOFA
        </span>
        {showTagline && (
          <span className="mt-1 text-[10px] font-light tracking-[0.32em] text-muted uppercase sm:text-[11px]">
            Legacy · The Ether Guardians
          </span>
        )}
      </div>
    </div>
  );
}

function SankofaMark({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sankofa-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="50%" stopColor="#f5b942" />
          <stop offset="100%" stopColor="#e0a022" />
        </linearGradient>
        <radialGradient id="sankofa-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#sankofa-glow)" />
      {/* Stylized Sankofa heart / Adinkra — two spiraling curves meeting */}
      <path
        d="M32 8 C20 8 12 18 12 30 C12 42 22 50 32 50 C42 50 52 42 52 30 C52 22 46 16 38 16 C32 16 28 20 28 26 C28 30 31 33 35 33 C38 33 40 31 40 28"
        stroke="url(#sankofa-grad)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Central dot — the seed */}
      <circle cx="40" cy="28" r="2.2" fill="#fde68a" />
      {/* Lower flourishes */}
      <path
        d="M22 52 L32 58 L42 52"
        stroke="url(#sankofa-grad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
