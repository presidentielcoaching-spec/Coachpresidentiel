import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-radial-purple pattern-kente"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/40 bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-200 sm:text-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" />
            La première plateforme IA pour les langues africaines
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Nos langues,
            <br />
            <span className="text-gradient-gold">notre héritage</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-foreground/80 sm:text-xl">
            Apprenez, parlez et vivez les langues africaines grâce à
            l&apos;intelligence artificielle. Du <strong>Wolof</strong> au{" "}
            <strong>Yoruba</strong>, du <strong>Swahili</strong> à
            l&apos;<strong>Ewondo</strong> — reconnecte-toi à tes racines.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/signup"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-base font-semibold text-[#1a0f00] shadow-xl shadow-gold-500/25 transition hover:bg-gold-400"
            >
              Commencer gratuitement
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#fonctionnalites"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-4 text-base font-medium text-foreground transition hover:border-primary-400 hover:bg-surface"
            >
              <PlayCircle size={18} />
              Voir comment ça marche
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 text-left">
            <Stat value="+21" label="Langues" />
            <Stat value="100%" label="Culturel" />
            <Stat value="5€" label="Par mois" />
          </dl>
        </div>

        <div className="relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="text-2xl font-bold text-gold-400 sm:text-3xl">{value}</dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-muted">
        {label}
      </dd>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
      {/* Glow halo */}
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary-500/40 via-primary-700/20 to-african-orange/30 blur-3xl" />

      {/* Concentric mandala */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="mandala" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f5b942" stopOpacity="0.0" />
            <stop offset="70%" stopColor="#f5b942" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="190" fill="url(#mandala)" />
        {[160, 130, 100, 70].map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="#f5b942"
            strokeOpacity={0.25 - i * 0.04}
            strokeWidth="1"
            strokeDasharray={`${2 + i} ${4 + i}`}
          />
        ))}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2;
          const x1 = 200 + Math.cos(angle) * 75;
          const y1 = 200 + Math.sin(angle) * 75;
          const x2 = 200 + Math.cos(angle) * 165;
          const y2 = 200 + Math.sin(angle) * 165;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#f5b942"
              strokeOpacity="0.15"
              strokeWidth="1"
            />
          );
        })}
      </svg>

      {/* Central illustration card */}
      <div className="absolute inset-[12%] overflow-hidden rounded-[2rem] border border-gold-500/30 bg-gradient-to-br from-primary-800/70 via-primary-900/80 to-background shadow-2xl shadow-primary-900/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,185,66,0.25),transparent_55%)]" />
        <div className="absolute inset-0 pattern-kente opacity-40" />

        {/* Stylized figure silhouette */}
        <svg
          viewBox="0 0 200 240"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMax meet"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="head" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3a1c0d" />
              <stop offset="100%" stopColor="#1a0a04" />
            </linearGradient>
            <linearGradient id="wrap" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f5b942" />
              <stop offset="50%" stopColor="#e3672e" />
              <stop offset="100%" stopColor="#c5352b" />
            </linearGradient>
          </defs>
          {/* Head wrap */}
          <path
            d="M60 60 Q100 10 140 60 Q150 85 130 95 Q100 80 70 95 Q50 85 60 60 Z"
            fill="url(#wrap)"
          />
          {/* Wrap accent stripes */}
          <path
            d="M70 55 Q100 30 130 55"
            fill="none"
            stroke="#0b0614"
            strokeOpacity="0.35"
            strokeWidth="3"
          />
          <path
            d="M75 70 Q100 50 125 70"
            fill="none"
            stroke="#fde68a"
            strokeOpacity="0.6"
            strokeWidth="2"
          />
          {/* Face */}
          <ellipse cx="100" cy="115" rx="32" ry="40" fill="url(#head)" />
          {/* Earrings */}
          <circle cx="67" cy="120" r="4" fill="#f5b942" />
          <circle cx="133" cy="120" r="4" fill="#f5b942" />
          {/* Neck / shoulders / dress */}
          <path
            d="M75 150 L85 165 L70 180 L40 230 L160 230 L130 180 L115 165 L125 150 Q115 158 100 158 Q85 158 75 150 Z"
            fill="url(#wrap)"
          />
          <path
            d="M40 230 L160 230 L155 215 L45 215 Z"
            fill="#0b0614"
            opacity="0.35"
          />
        </svg>
      </div>

      {/* Floating language chips */}
      <FloatChip text="Mbolo" sub="Bonjour · Ewondo" className="left-0 top-12" />
      <FloatChip text="Jambo" sub="Bonjour · Swahili" className="right-0 top-32" />
      <FloatChip text="Salam" sub="Bonjour · Wolof" className="-bottom-2 left-6" />
    </div>
  );
}

function FloatChip({
  text,
  sub,
  className,
}: {
  text: string;
  sub: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute hidden items-center gap-3 rounded-2xl border border-border bg-surface-elevated/90 px-4 py-3 shadow-xl shadow-primary-900/40 backdrop-blur md:flex ${
        className ?? ""
      }`}
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-500/20 text-base font-bold text-gold-400">
        {text[0]}
      </span>
      <div className="leading-tight">
        <div className="text-sm font-semibold text-foreground">{text}</div>
        <div className="text-[11px] text-muted">{sub}</div>
      </div>
    </div>
  );
}
