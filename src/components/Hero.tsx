import { ArrowRight, ExternalLink } from "lucide-react";
import { COLLECTION, GUARDIANS } from "@/lib/collection";
import { GuardianImage } from "./GuardianImage";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-cosmic pattern-hieroglyph"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/5 px-3 py-1 text-xs font-medium tracking-[0.18em] uppercase text-gold-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" />
            Genesis · Édition ultra-rare 1-of-1
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient-gold">SANKOFA</span>
            <br />
            <span className="text-foreground">LEGACY</span>
          </h1>

          <p className="mt-3 font-display text-sm tracking-[0.35em] text-muted uppercase sm:text-base">
            {COLLECTION.subtitle}
          </p>

          <p className="mt-8 max-w-xl text-lg text-foreground/80 sm:text-xl">
            <strong className="text-gold-300">Cinq Gardiens.</strong>{" "}
            <strong className="text-gold-300">Cinq civilisations.</strong> Une
            mémoire restaurée on-chain. Chaque NFT est unique, signé, et
            transporte un rituel d&apos;activation transmis à son détenteur.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#whitelist"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-base font-semibold text-[#1a0f00] shadow-xl shadow-gold-500/30 transition hover:bg-gold-400"
            >
              Rejoindre la Whitelist
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={COLLECTION.opensea}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-500/30 bg-surface/60 px-7 py-4 text-base font-medium text-foreground transition hover:border-gold-400 hover:bg-surface"
            >
              Voir sur OpenSea
              <ExternalLink size={16} />
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 text-left">
            <Stat value="5" label="Gardiens" />
            <Stat value="1/1" label="Ultra-rare" />
            <Stat value="Base" label="Blockchain" />
          </dl>
        </div>

        <div className="relative">
          <GuardianStack />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l border-gold-500/30 pl-4">
      <dt className="font-display text-3xl font-bold text-gradient-gold sm:text-4xl">
        {value}
      </dt>
      <dd className="mt-1 text-[10px] tracking-[0.22em] text-muted uppercase">
        {label}
      </dd>
    </div>
  );
}

function GuardianStack() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary-500/40 via-cobalt/20 to-gold-500/20 blur-3xl" />

      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="hero-mandala" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f5b942" stopOpacity="0" />
            <stop offset="70%" stopColor="#f5b942" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="195" fill="url(#hero-mandala)" />
        {[170, 140, 110, 80].map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="#f5b942"
            strokeOpacity={0.3 - i * 0.05}
            strokeWidth="1"
            strokeDasharray={`${3 + i} ${5 + i}`}
          />
        ))}
      </svg>

      {GUARDIANS.map((g, i) => {
        const angle = (i / GUARDIANS.length) * Math.PI * 2 - Math.PI / 2;
        const radius = 38;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        const center = i === 0;
        return (
          <div
            key={g.id}
            className={`absolute overflow-hidden rounded-2xl border border-gold-500/40 shadow-2xl shadow-primary-900/60 ring-1 ring-gold-500/20 ${
              center
                ? "left-1/2 top-1/2 z-20 h-48 w-48 -translate-x-1/2 -translate-y-1/2 glow-gold sm:h-56 sm:w-56"
                : "z-10 h-24 w-24 sm:h-28 sm:w-28"
            }`}
            style={
              center
                ? undefined
                : {
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }
            }
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${g.accent} opacity-60`}
            />
            <div className="absolute inset-0 pattern-hieroglyph opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[10px] font-bold tracking-[0.2em] text-gold-200/90 sm:text-xs">
                {g.name}
              </span>
            </div>
            <GuardianImage
              src={g.thumb}
              alt={g.name}
              className="h-full w-full object-cover opacity-95 mix-blend-luminosity"
              fallbackClassName="hidden"
            />
          </div>
        );
      })}
    </div>
  );
}
