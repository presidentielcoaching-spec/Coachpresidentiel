import { Dumbbell, MapPin, Phone, Star } from "lucide-react";
import { site } from "@/lib/fitmax/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-radial-fire pt-28 pb-20 sm:pt-32 lg:pt-40"
    >
      <div className="pattern-grid pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-300">
              <MapPin className="h-4 w-4" />
              Koumassi · Boulevard Antananarivo
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Repoussez vos limites chez{" "}
              <span className="text-gradient-fire">FIT-MAX</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Une salle de sport moderne et accessible au cœur de Koumassi. Un
              centre idéal pour la <strong className="text-foreground">musculation</strong>,
              le <strong className="text-foreground">cardio</strong> et le{" "}
              <strong className="text-foreground">coaching personnalisé</strong>,
              avec un accent mis sur la sécurité et le bien-être.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phone.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-7 py-3.5 text-base font-semibold text-background transition-colors hover:bg-primary-400"
              >
                <Phone className="h-5 w-5" />
                {site.phone.display}
              </a>
              <a
                href="#installations"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-primary-500/50 hover:bg-surface-elevated"
              >
                <Dumbbell className="h-5 w-5 text-primary-400" />
                Découvrir la salle
              </a>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                { value: "7j/7", label: "Ouvert toute la semaine" },
                { value: "15h", label: "En semaine, 07h–22h" },
                { value: "Tous", label: "Niveaux bienvenus" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-extrabold text-foreground sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-muted">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 glow-primary">
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600">
                  <Dumbbell className="h-7 w-7 text-background" />
                </span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary-400 text-primary-400"
                    />
                  ))}
                </div>
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                Votre transformation commence ici
              </h2>
              <p className="mt-3 text-muted">
                Équipements de qualité, espace pensé pour tous les niveaux et un
                accompagnement de proximité.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Musculation — poids libres & machines guidées",
                  "Cardio — endurance et perte de poids",
                  "Coaching personnalisé selon vos objectifs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                    <span className="text-sm text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Venir s&apos;entraîner
              </a>
            </div>

            <div className="pointer-events-none absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-primary-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 -z-10 h-44 w-44 rounded-full bg-lime-500/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
