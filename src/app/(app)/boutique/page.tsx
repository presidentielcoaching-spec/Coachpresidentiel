import { PageHeader } from "@/components/PageHeader";
import { Check, Crown } from "lucide-react";

const FEATURES = [
  "Toutes les 21+ langues",
  "Leçons illimitées",
  "IA conversationnelle illimitée",
  "Mode hors ligne",
  "Certificats officiels",
  "Contenu culturel exclusif",
  "Sans publicité",
];

export default function BoutiquePage() {
  return (
    <>
      <PageHeader
        title="Boutique"
        subtitle="Débloque tout le potentiel d'Afrilingua AI avec Premium."
      />

      <div className="mx-auto max-w-2xl">
        <article className="relative overflow-hidden rounded-3xl border-2 border-gold-500/60 bg-gradient-to-br from-primary-800 via-primary-900 to-background p-8 shadow-2xl">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-500/20 blur-3xl" />
          <div className="absolute inset-0 pattern-kente opacity-30" />

          <div className="relative">
            <div className="flex items-center gap-2 text-gold-400">
              <Crown size={24} />
              <h2 className="text-2xl font-bold">Pass Premium Afrilingua</h2>
            </div>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-6xl font-extrabold text-gradient-gold">5€</span>
              <span className="text-foreground/75">/ mois</span>
            </div>
            <p className="mt-1 text-xs text-muted">
              Paiement Orange Money, Wave, Carte, PayPal · Annulable à tout moment
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="mt-0.5 text-gold-400" />
                  {f}
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full rounded-full bg-gold-500 px-5 py-4 text-base font-bold text-[#1a0f00] shadow-xl shadow-gold-500/30 transition hover:bg-gold-400">
              Passer Premium — 5€/mois
            </button>
          </div>
        </article>
      </div>
    </>
  );
}
