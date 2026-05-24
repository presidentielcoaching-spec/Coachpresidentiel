import { PageHeader } from "@/components/PageHeader";
import { getCurrentUser } from "@/lib/auth";
import { Check, Crown } from "lucide-react";
import { CheckoutButtons } from "./CheckoutButtons";

const FEATURES = [
  "Toutes les 21+ langues",
  "Leçons illimitées",
  "IA conversationnelle illimitée",
  "Mode hors ligne (PWA)",
  "Certificats officiels",
  "Contenu culturel exclusif",
  "Sans publicité",
];

export default async function BoutiquePage() {
  const user = (await getCurrentUser())!;
  const hasStripe = Boolean(process.env.STRIPE_SECRET_KEY && process.env.STRIPE_PRICE_ID);
  const supportEmail =
    process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "premium@kemetlingua.com";

  return (
    <>
      <PageHeader
        title="Boutique"
        subtitle="Débloque tout le potentiel d'Kemetlingua AI avec Premium."
      />

      <div className="mx-auto max-w-2xl">
        <article className="relative overflow-hidden rounded-3xl border-2 border-gold-500/60 bg-gradient-to-br from-primary-800 via-primary-900 to-background p-8 shadow-2xl">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-500/20 blur-3xl" />
          <div className="absolute inset-0 pattern-kente opacity-30" />

          <div className="relative">
            <div className="flex items-center gap-2 text-gold-400">
              <Crown size={24} />
              <h2 className="text-2xl font-bold">Pass Premium Kemetlingua</h2>
            </div>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-6xl font-extrabold text-gradient-gold">5€</span>
              <span className="text-foreground/75">/ mois</span>
            </div>
            <p className="mt-1 text-xs text-muted">
              Paiement Carte (Stripe), Orange Money, Wave · Annulable à tout moment
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="mt-0.5 text-gold-400" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CheckoutButtons
                isPremium={user.isPremium}
                hasStripe={hasStripe}
                supportEmail={supportEmail}
              />
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
