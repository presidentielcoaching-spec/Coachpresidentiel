type LogoProps = {
  size?: number;
  showTagline?: boolean;
  className?: string;
};

export function Logo({ size = 44, showTagline = true, className }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <AfricaMark size={size} />
      <div className="flex flex-col leading-none">
        <span className="text-gradient-gold text-xl font-extrabold tracking-wide sm:text-2xl">
          KEMETLINGUA <span className="text-african-green">A</span>
          <span className="text-african-orange">I</span>
        </span>
        {showTagline && (
          <span className="mt-1 text-[10px] font-light tracking-[0.18em] text-muted uppercase sm:text-[11px]">
            Nos langues, notre héritage
          </span>
        )}
      </div>
    </div>
  );
}

function AfricaMark({ size = 44 }: { size?: number }) {
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
        <linearGradient id="africa-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5b942" />
          <stop offset="45%" stopColor="#3fa34d" />
          <stop offset="100%" stopColor="#e3672e" />
        </linearGradient>
        <linearGradient id="africa-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#e0a022" />
        </linearGradient>
      </defs>
      {/* Stylized Africa silhouette */}
      <path
        d="M22 4 C30 4 38 6 44 12 C49 17 52 24 52 32 C52 40 49 47 44 53 C40 58 35 60 31 60 L29 56 L26 58 L24 54 L21 56 L19 50 L15 48 L13 42 L10 38 L12 32 L10 26 L14 20 L13 14 L17 10 L22 4 Z"
        fill="url(#africa-grad)"
        stroke="url(#africa-stroke)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Madagascar dot */}
      <circle cx="53" cy="48" r="2" fill="#f5b942" />
      {/* Kente-like geometric overlays */}
      <path
        d="M22 14 L28 18 L24 22 Z"
        fill="#0b0614"
        opacity="0.35"
      />
      <path
        d="M18 30 L24 34 L20 40 L16 36 Z"
        fill="#0b0614"
        opacity="0.25"
      />
      <path
        d="M30 38 L36 42 L34 48 L28 46 Z"
        fill="#0b0614"
        opacity="0.3"
      />
      {/* Highlight sparkle */}
      <circle cx="20" cy="10" r="1.6" fill="#fde68a" />
      <path
        d="M20 6 L20 14 M16 10 L24 10"
        stroke="#fde68a"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
