type LogoProps = {
  size?: number;
  showTagline?: boolean;
  /** "full" : 3 mots — "short" : "Notre héritage · Notre futur" — "off" : aucun */
  tagline?: "full" | "short" | "off";
  className?: string;
};

export function Logo({
  size = 44,
  showTagline = true,
  tagline,
  className,
}: LogoProps) {
  const taglineMode: "full" | "short" | "off" =
    tagline ?? (showTagline ? "full" : "off");
  const taglineText =
    taglineMode === "short"
      ? "Héritage · Futur"
      : "Nos langues · Notre héritage · Notre futur";

  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <KemetMark size={size} />
      <div className="flex min-w-0 flex-col leading-none">
        <span className="font-display whitespace-nowrap text-xl font-extrabold tracking-[0.06em] sm:text-2xl">
          <span className="text-gradient-gold">KEMET</span>
          <span className="text-foreground">LINGUA</span>{" "}
          <span className="text-african-green">A</span>
          <span className="text-african-orange">I</span>
        </span>
        {taglineMode !== "off" && (
          <span className="mt-1 truncate text-[10px] font-light tracking-[0.18em] text-muted uppercase sm:text-[11px]">
            {taglineText}
          </span>
        )}
      </div>
    </div>
  );
}

/**
 * KEMET mark : silhouette africaine stylisée + ankh + glow violet IA.
 * Inspiration Égypte ancienne (Kemet) × afro-futurisme.
 */
function KemetMark({ size = 44 }: { size?: number }) {
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
        <linearGradient id="kemet-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5c542" />
          <stop offset="55%" stopColor="#b08148" />
          <stop offset="100%" stopColor="#6c3bff" />
        </linearGradient>
        <linearGradient id="kemet-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#d4a522" />
        </linearGradient>
        <radialGradient id="kemet-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6c3bff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#6c3bff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Halo violet IA */}
      <circle cx="32" cy="32" r="30" fill="url(#kemet-glow)" />

      {/* Silhouette Afrique stylisée (forme stylisée, géométrie afro-futuriste) */}
      <path
        d="M22 4 C30 4 38 6 44 12 C49 17 52 24 52 32 C52 40 49 47 44 53 C40 58 35 60 31 60 L29 56 L26 58 L24 54 L21 56 L19 50 L15 48 L13 42 L10 38 L12 32 L10 26 L14 20 L13 14 L17 10 L22 4 Z"
        fill="url(#kemet-grad)"
        stroke="url(#kemet-stroke)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Madagascar */}
      <circle cx="53" cy="48" r="2" fill="#f5c542" />

      {/* Ankh — symbole de vie / langue / transmission */}
      <g stroke="#090b1a" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
        <circle cx="32" cy="22" r="3" fill="none" />
        <line x1="32" y1="25" x2="32" y2="42" />
        <line x1="27" y1="30" x2="37" y2="30" />
      </g>

      {/* Étincelle hiéroglyphique en haut */}
      <circle cx="22" cy="10" r="1.6" fill="#fde68a" />
      <path
        d="M22 6 L22 14 M18 10 L26 10"
        stroke="#fde68a"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
