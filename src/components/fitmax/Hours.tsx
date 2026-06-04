import { Clock } from "lucide-react";
import { site } from "@/lib/fitmax/site";

export function Hours() {
  return (
    <section id="horaires" className="relative bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-400">
              <Clock className="h-4 w-4" />
              Horaires d&apos;ouverture
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ouvert 7 jours sur 7
            </h2>
            <p className="mt-4 max-w-md text-lg text-muted">
              FIT-MAX vous accueille tôt le matin et jusqu&apos;en soirée, pour
              s&apos;adapter à votre emploi du temps. Venez vous entraîner au
              rythme qui vous convient.
            </p>

            <div className="mt-8 rounded-2xl border border-primary-500/20 bg-primary-500/5 p-5">
              <p className="text-sm text-muted">
                <span className="font-semibold text-foreground">Astuce :</span>{" "}
                arrivez 10 minutes avant la fermeture pour profiter pleinement
                de votre séance.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <ul className="divide-y divide-border">
              {site.hours.map((slot) => {
                const isWeekend =
                  slot.day === "Samedi" || slot.day === "Dimanche";
                return (
                  <li
                    key={slot.day}
                    className="flex items-center justify-between px-6 py-4"
                  >
                    <span
                      className={`font-medium ${
                        isWeekend ? "text-primary-300" : "text-foreground"
                      }`}
                    >
                      {slot.day}
                    </span>
                    <span className="font-semibold tabular-nums text-foreground">
                      {slot.range}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
