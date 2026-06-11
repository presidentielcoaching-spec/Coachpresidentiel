import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { Checkout } from "@/components/payment/Checkout";

export const metadata: Metadata = {
  title: "Paiement sécurisé",
  description:
    "Réglez votre formation via Orange Money, Wave, Visa ou Mastercard. Paiement en plusieurs tranches, reçus et factures PDF.",
};

export default function PaiementPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Paiement sécurisé"
        title="Finalisez votre inscription"
        subtitle="Paiement flexible, sécurisé et reçu généré automatiquement."
      />
      <Suspense fallback={null}>
        <Checkout />
      </Suspense>
    </SiteShell>
  );
}
