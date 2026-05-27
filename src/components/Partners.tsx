type PartnerProps = {
  name: string;
  hue: string;
  glyph: React.ReactNode;
};

const PARTNERS: PartnerProps[] = [
  {
    name: "Base",
    hue: "#1d6dd6",
    glyph: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
        <path
          d="M2.5 12 L12 12 M12 12 C12 6.5 16.5 2.5 22 2.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "OpenSea",
    hue: "#2081e2",
    glyph: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M5 14 Q9 9 12 11 Q15 13 19 9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <line x1="3" y1="16" x2="21" y2="16" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    name: "IPFS",
    hue: "#5cc6c0",
    glyph: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <polygon
          points="12,2 22,7 22,17 12,22 2,17 2,7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <polygon
          points="12,2 22,7 12,12 2,7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          opacity="0.45"
        />
      </svg>
    ),
  },
  {
    name: "MetaMask",
    hue: "#f6851b",
    glyph: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M3 6 L9 4 L12 9 L15 4 L21 6 L19 12 L21 17 L15 20 L12 17 L9 20 L3 17 L5 12 Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Pinata",
    hue: "#e85a4f",
    glyph: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M9 16 L9 22 M15 16 L15 22 M12 16 L12 21"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function Partners() {
  return (
    <section className="border-y border-border/60 bg-surface/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.32em] text-muted">
          Construit sur un socle vérifiable
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14">
          {PARTNERS.map((p) => (
            <li
              key={p.name}
              className="group flex items-center gap-2.5 text-foreground/70 transition hover:text-foreground"
              style={{ color: undefined }}
            >
              <span
                className="transition group-hover:text-current"
                style={{ color: p.hue }}
              >
                {p.glyph}
              </span>
              <span className="text-sm font-semibold tracking-wide">
                {p.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
