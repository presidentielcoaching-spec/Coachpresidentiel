import { ArrowRight } from "lucide-react";

type Language = {
  name: string;
  region: string;
  speakers: string;
  level: string;
  progress: number;
  emoji: string;
  hue: string;
};

const LANGUAGES: Language[] = [
  {
    name: "Swahili",
    region: "Afrique de l'Est",
    speakers: "+200M locuteurs",
    level: "Débutant",
    progress: 65,
    emoji: "🏔️",
    hue: "from-african-green/30 to-primary-700/10",
  },
  {
    name: "Wolof",
    region: "Sénégal · Gambie",
    speakers: "+12M locuteurs",
    level: "Débutant",
    progress: 40,
    emoji: "⛵",
    hue: "from-gold-500/30 to-african-orange/10",
  },
  {
    name: "Yoruba",
    region: "Nigeria · Bénin",
    speakers: "+45M locuteurs",
    level: "Débutant",
    progress: 30,
    emoji: "👑",
    hue: "from-african-orange/30 to-african-red/10",
  },
  {
    name: "Lingala",
    region: "RDC · Congo",
    speakers: "+40M locuteurs",
    level: "Débutant",
    progress: 50,
    emoji: "🌆",
    hue: "from-primary-500/30 to-african-green/10",
  },
  {
    name: "Ewondo",
    region: "Cameroun",
    speakers: "+2M locuteurs",
    level: "Débutant",
    progress: 20,
    emoji: "🏡",
    hue: "from-african-red/30 to-gold-500/10",
  },
  {
    name: "Bambara",
    region: "Mali",
    speakers: "+15M locuteurs",
    level: "Débutant",
    progress: 25,
    emoji: "🥁",
    hue: "from-primary-700/30 to-african-orange/10",
  },
  {
    name: "Hausa",
    region: "Nigeria · Niger",
    speakers: "+80M locuteurs",
    level: "Débutant",
    progress: 35,
    emoji: "🌾",
    hue: "from-gold-500/30 to-primary-500/10",
  },
  {
    name: "Akan",
    region: "Ghana",
    speakers: "+11M locuteurs",
    level: "Débutant",
    progress: 18,
    emoji: "✨",
    hue: "from-african-green/30 to-gold-500/10",
  },
];

export function Languages() {
  return (
    <section id="langues" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Nos langues
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Explorez nos{" "}
              <span className="text-gradient-gold">langues vivantes</span>
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/75">
              Plus de 21 langues africaines disponibles dès aujourd&apos;hui,
              avec audio natif, transcription phonétique et contextes culturels.
            </p>
          </div>
          <a
            href="#toutes-les-langues"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-2 text-sm font-medium text-foreground/85 transition hover:border-primary-400 hover:text-gold-400 md:inline-flex"
          >
            Voir toutes les langues
            <ArrowRight size={16} />
          </a>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LANGUAGES.map((lang) => (
            <li key={lang.name}>
              <LanguageCard {...lang} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function LanguageCard({
  name,
  region,
  speakers,
  level,
  progress,
  emoji,
  hue,
}: Language) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-5 transition hover:-translate-y-1 hover:border-gold-500/60 hover:shadow-2xl hover:shadow-primary-900/30`}
    >
      <div
        className={`absolute inset-0 -z-0 bg-gradient-to-br ${hue} opacity-60 transition group-hover:opacity-90`}
      />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-background/40 text-2xl ring-1 ring-border backdrop-blur">
            {emoji}
          </span>
          <ProgressRing value={progress} />
        </div>

        <div className="mt-5">
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
          <p className="mt-1 text-xs text-muted">{region}</p>
          <p className="mt-1 text-xs text-foreground/60">{speakers}</p>
        </div>

        <div className="mt-5 flex items-center justify-between text-xs">
          <span className="rounded-full bg-background/60 px-2.5 py-1 font-medium text-foreground/75 ring-1 ring-border">
            Niveau {level.toLowerCase()}
          </span>
          <span className="font-semibold text-gold-400">{progress}%</span>
        </div>
      </div>
    </article>
  );
}

function ProgressRing({ value }: { value: number }) {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div className="relative h-12 w-12">
      <svg viewBox="0 0 48 48" className="h-12 w-12 -rotate-90">
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="#f5b942"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center text-[10px] font-bold text-gold-400">
        {value}%
      </span>
    </div>
  );
}
