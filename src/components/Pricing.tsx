import { Check, Crown, Sparkles } from "lucide-react";

const FREE = [
  "Accès à 3 langues",
  "5 leçons par jour",
  "IA Conversationnelle limitée",
  "Suivi de progression de base",
];

const PREMIUM = [
  "Accès à toutes les 21+ langues",
  "Leçons illimitées",
  "IA Conversationnelle illimitée",
  "Mode hors ligne",
  "Certificats officiels",
  "Contenu culturel exclusif",
  "Sans publicité",
];

export function Pricing() {
  return (
    <section id="tarifs" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Tarifs
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Débloquez tout votre{" "}
            <span className="text-gradient-gold">potentiel</span>
          </h2>
          <p className="mt-4 text-foreground/75">
            Commencez gratuitement. Passez Premium pour une expérience complète,
            sans limite.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* Free */}
          <div className="rounded-3xl border border-border bg-surface-elevated p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">Gratuit</h3>
                <p className="mt-1 text-sm text-muted">
                  Pour découvrir et débuter
                </p>
              </div>
              <Sparkles size={28} className="text-foreground/60" />
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold">0€</span>
              <span className="text-muted">/ pour toujours</span>
            </div>

            <ul className="mt-8 space-y-3">
              {FREE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check
                    size={18}
                    className="mt-0.5 shrink-0 text-african-green"
                  />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#inscription"
              className="mt-8 block w-full rounded-full border border-border bg-surface px-5 py-3 text-center text-sm font-semibold text-foreground transition hover:border-primary-400"
            >
              Commencer gratuitement
            </a>
          </div>

          {/* Premium */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-gold-500/60 bg-gradient-to-br from-primary-800 via-primary-900 to-background p-8 shadow-2xl shadow-primary-900/50">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-500/20 blur-3xl" />
            <div className="absolute inset-0 pattern-kente opacity-30" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="flex items-center gap-2 text-2xl font-bold">
                    Premium
                    <Crown size={20} className="text-gold-400" />
                  </h3>
                  <p className="mt-1 text-sm text-foreground/75">
                    Pour aller jusqu&apos;au bout du voyage
                  </p>
                </div>
                <span className="rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1a0f00]">
                  Le plus choisi
                </span>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-gradient-gold">
                  5€
                </span>
                <span className="text-foreground/75">/ mois</span>
              </div>
              <p className="mt-1 text-xs text-muted">
                Paiement Orange Money, Wave, Carte, PayPal
              </p>

              <ul className="mt-8 space-y-3">
                {PREMIUM.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-gold-400"
                    />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#inscription"
                className="mt-8 block w-full rounded-full bg-gold-500 px-5 py-3 text-center text-sm font-bold text-[#1a0f00] shadow-lg shadow-gold-500/25 transition hover:bg-gold-400"
              >
                Passer Premium — 5€/mois
              </a>
              <p className="mt-3 text-center text-[11px] text-muted">
                Annulable à tout moment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
