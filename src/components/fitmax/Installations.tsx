import {
  Dumbbell,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const offers = [
  {
    icon: Dumbbell,
    title: "Musculation",
    desc: "Poids libres, haltères et machines guidées pour développer force et masse musculaire, quel que soit votre niveau.",
  },
  {
    icon: HeartPulse,
    title: "Cardio",
    desc: "Un espace dédié à l'endurance, à la perte de poids et au renforcement cardiovasculaire.",
  },
  {
    icon: Target,
    title: "Coaching personnalisé",
    desc: "Un accompagnement sur mesure pour atteindre vos objectifs en toute sécurité, étape par étape.",
  },
];

const perks = [
  {
    icon: Sparkles,
    title: "Équipements de qualité",
    desc: "Du matériel moderne et bien entretenu, parfait pour tous les niveaux.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité avant tout",
    desc: "Un environnement encadré où votre santé et votre intégrité priment.",
  },
  {
    icon: Users,
    title: "Bien-être & accessibilité",
    desc: "Une salle accueillante au cœur de Koumassi, ouverte à toutes et à tous.",
  },
];

export function Installations() {
  return (
    <section id="installations" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-400">
            Les installations
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Un complexe pensé pour votre{" "}
            <span className="text-gradient-fire">performance</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            FIT-MAX propose des équipements de qualité, parfaits pour tous les
            niveaux, avec un accent mis sur la sécurité et le bien-être.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="group rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary-500/50 hover:bg-surface-elevated"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/15 text-primary-400 transition-colors group-hover:bg-primary-500 group-hover:text-background">
                <offer.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{offer.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{offer.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background/40 p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-lime-500/15 text-lime-400">
                <perk.icon className="h-5 w-5" />
              </span>
              <div>
                <h4 className="font-semibold">{perk.title}</h4>
                <p className="mt-1 text-sm text-muted">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
