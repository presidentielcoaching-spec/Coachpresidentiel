import { Mic, Compass, BookOpenText, Users } from "lucide-react";

const FEATURES = [
  {
    icon: Mic,
    title: "IA Conversationnelle",
    description:
      "Parle avec ton coach IA et améliore ta prononciation en temps réel, comme avec un locuteur natif.",
    accent: "from-primary-500/30 to-primary-700/10",
  },
  {
    icon: Compass,
    title: "Parcours personnalisé",
    description:
      "Un apprentissage adapté à ton niveau, tes objectifs et ton rythme — généré et corrigé par l'IA.",
    accent: "from-african-orange/30 to-gold-500/10",
  },
  {
    icon: BookOpenText,
    title: "Culture & traditions",
    description:
      "Découvre proverbes, contes, chansons et histoires ancestrales transmis par nos aînés.",
    accent: "from-african-green/30 to-primary-500/10",
  },
  {
    icon: Users,
    title: "Communauté vivante",
    description:
      "Échange avec des apprenants du continent et de la diaspora, rejoins des groupes par langue.",
    accent: "from-primary-700/30 to-african-red/10",
  },
];

export function Features() {
  return (
    <section id="fonctionnalites" className="border-y border-border/60 bg-surface/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Fonctionnalités
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Une expérience{" "}
            <span className="text-gradient-gold">immersive et humaine</span>
          </h2>
          <p className="mt-4 text-foreground/75">
            On combine l&apos;IA la plus avancée avec la richesse de nos cultures.
            Apprendre une langue africaine n&apos;a jamais été aussi vivant.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, description, accent }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-6 transition hover:border-primary-400/60 hover:bg-surface-elevated/80"
            >
              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${accent} blur-2xl transition group-hover:scale-110`}
              />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/15 text-primary-200 ring-1 ring-primary-500/30">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
