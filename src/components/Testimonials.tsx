import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Grâce à Kemetlingua, j'ai pu parler Ewondo avec ma grand-mère pour la première fois. C'était bouleversant.",
    author: "Koffi A.",
    role: "Diaspora · Paris",
  },
  {
    quote:
      "L'IA corrige ma prononciation Wolof en temps réel. C'est comme avoir un prof natif dans ma poche.",
    author: "Amina T.",
    role: "Étudiante · Dakar",
  },
  {
    quote:
      "Les proverbes et les contes m'ont reconnecté à mes racines Yoruba. Bien plus qu'une appli de langue.",
    author: "Chidi B.",
    role: "Diaspora · Londres",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border/60 bg-surface/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Témoignages
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Plus qu&apos;une app —{" "}
            <span className="text-gradient-gold">une renaissance</span>
          </h2>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <li
              key={t.author}
              className="relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-8"
            >
              <Quote
                size={36}
                className="absolute right-5 top-5 text-primary-500/30"
              />
              <p className="text-base leading-relaxed text-foreground/90">
                « {t.quote} »
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-gold-500 to-african-orange text-sm font-bold text-[#1a0f00]">
                  {t.author[0]}
                </span>
                <div>
                  <div className="text-sm font-semibold">{t.author}</div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
