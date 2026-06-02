import { Sunrise, Sunset, TrendingDown } from "lucide-react";
import { site } from "@/lib/fitmax/site";

const iconFor = (moment: string) =>
  moment.toLowerCase().startsWith("matin") ? Sunrise : Sunset;

export function Affluence() {
  return (
    <section id="affluence" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-lime-500/20 bg-gradient-to-br from-surface to-background p-8 sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-500/30 bg-lime-500/10 px-4 py-1.5 text-sm font-semibold text-lime-400">
              <TrendingDown className="h-4 w-4" />
              Affluence
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Entraînez-vous au calme
            </h2>
            <p className="mt-4 text-lg text-muted">
              Vous préférez la tranquillité ? Voici les créneaux où
              l&apos;affluence est généralement la plus basse pour vous
              entraîner sereinement.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {site.quietTimes.map((slot) => {
              const Icon = iconFor(slot.moment);
              return (
                <div
                  key={`${slot.day}-${slot.moment}`}
                  className="rounded-2xl border border-border bg-surface p-6 text-center"
                >
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lime-500/15 text-lime-400">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-lg font-bold">{slot.day}</p>
                  <p className="text-sm text-muted">{slot.moment}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
