import { Globe2, ClipboardList, Trophy, Award } from "lucide-react";

const STEPS = [
  {
    icon: Globe2,
    title: "Choisissez une langue",
    description:
      "Sélectionnez la langue que vous voulez apprendre, parmi plus de 21 langues africaines.",
  },
  {
    icon: ClipboardList,
    title: "Suivez votre parcours",
    description:
      "Des leçons personnalisées créées par l'IA selon votre niveau et vos objectifs.",
  },
  {
    icon: Trophy,
    title: "Pratiquez & progressez",
    description:
      "Parlez, écoutez, lisez et gagnez des XP en relevant des défis quotidiens.",
  },
  {
    icon: Award,
    title: "Atteignez vos objectifs",
    description:
      "Devenez fluide et obtenez votre certificat officiel Afrilingua AI.",
  },
];

export function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="border-t border-border/60 bg-surface/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Comment ça marche
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            4 étapes simples pour{" "}
            <span className="text-gradient-gold">retrouver vos racines</span>
          </h2>
        </div>

        <ol className="relative mt-14 grid gap-8 lg:grid-cols-4">
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent lg:block"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative">
              <div className="flex flex-col items-start gap-4">
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-gold-500/40 bg-gradient-to-br from-primary-700 to-primary-900 text-gold-400 shadow-lg shadow-primary-900/40">
                  <step.icon size={22} strokeWidth={1.75} />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-gold-500 text-[11px] font-bold text-[#1a0f00]">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
