import { Sparkles, Megaphone, Flame, Crown, Infinity as InfinityIcon } from "lucide-react";

const STEPS = [
  {
    phase: "Phase 01",
    icon: Sparkles,
    title: "Teasing & Lore",
    date: "Semaines 1–2",
    desc: "Dévoilement progressif d'un Gardien par semaine sur X et Farcaster. Publication du manifeste Sankofa. Ouverture de la liste d'attente sur cette page.",
  },
  {
    phase: "Phase 02",
    icon: Megaphone,
    title: "Whitelist & Validation",
    date: "Semaines 3–4",
    desc: "Sélection manuelle de 25 wallets de confiance — collectionneurs afrofuturistes, voix culturelles, holders Base. Mint privé avant l'ouverture publique.",
  },
  {
    phase: "Phase 03",
    icon: Flame,
    title: "Reveal & Mint Public",
    date: "Jour J",
    desc: "Drop des 5 Gardiens en simultané. Mint à prix fixe puis enchères publiques sur OpenSea pour les pièces restantes. Live X Spaces pendant la cérémonie.",
  },
  {
    phase: "Phase 04",
    icon: Crown,
    title: "Rituel d'Activation",
    date: "Semaine +1",
    desc: "Chaque détenteur reçoit une carte d'activation physique numérotée, signée, envoyée par courrier sécurisé. Accès au cercle privé des Gardiens.",
  },
  {
    phase: "Phase 05",
    icon: InfinityIcon,
    title: "Saison II",
    date: "Trimestre suivant",
    desc: "Si Genesis sold-out : ouverture de la Saison II (Élémentaires) — édition limitée 50 pièces, prix d'entrée plus accessible, exclusivité réservée aux détenteurs Genesis.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="feuille-de-route"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-3 py-1 text-xs font-medium tracking-[0.22em] uppercase text-gold-300">
            Roadmap
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Le voyage des{" "}
            <span className="text-gradient-gold">Gardiens</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/75">
            Une cérémonie en cinq actes. Pas de promesses creuses — chaque étape
            a une date, un livrable, un objectif.
          </p>
        </div>

        <ol className="mt-16 space-y-6">
          {STEPS.map((step, i) => (
            <li
              key={step.phase}
              className="group relative grid gap-6 rounded-3xl border border-border bg-surface/50 p-6 transition hover:border-gold-500/50 sm:grid-cols-[auto_1fr] sm:p-8"
            >
              <div className="flex items-start gap-5">
                <div className="relative grid h-14 w-14 flex-none place-items-center rounded-2xl border border-gold-500/40 bg-gradient-to-br from-gold-500/10 to-primary-500/10">
                  <step.icon className="text-gold-400" size={24} />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-gold-500 text-[10px] font-bold text-[#1a0f00]">
                    {i + 1}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gold-400">
                    {step.phase}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-muted">
                    {step.date}
                  </span>
                </div>
                <h3 className="mt-1 font-display text-2xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/75">
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
