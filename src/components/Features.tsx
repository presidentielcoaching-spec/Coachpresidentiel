import { GUARDIANS } from "@/lib/collection";
import { GuardianImage } from "./GuardianImage";

export function Features() {
  return (
    <section id="gardiens" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-3 py-1 text-xs font-medium tracking-[0.22em] uppercase text-gold-300">
            Les Gardiens
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Cinq présences,{" "}
            <span className="text-gradient-gold">une seule lignée</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/75">
            Chaque Gardien est frappé en exemplaire unique. Possesseur unique.
            Histoire unique. Charge spirituelle unique.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {GUARDIANS.map((g) => (
            <article
              key={g.id}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface/60 transition hover:border-gold-500/60"
            >
              <div className="relative aspect-square overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${g.accent} opacity-50`}
                />
                <div className="absolute inset-0 pattern-hieroglyph opacity-30" />
                <GuardianImage
                  src={g.image}
                  alt={`${g.name} — ${g.title}`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  fallbackClassName="absolute inset-0 h-full w-full opacity-0"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/80 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-gold-300 backdrop-blur">
                  #{String(g.id).padStart(3, "0")} · 1/1
                </div>
              </div>

              <div className="relative -mt-16 px-6 pb-8">
                <h3 className="font-display text-2xl font-bold tracking-wide text-foreground">
                  {g.name}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-gold-400">
                  {g.title}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-muted">
                  <span className="rounded-full border border-border bg-background/40 px-2.5 py-1">
                    {g.origin}
                  </span>
                  <span className="rounded-full border border-border bg-background/40 px-2.5 py-1">
                    {g.element}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-foreground/75">
                  {g.story}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
