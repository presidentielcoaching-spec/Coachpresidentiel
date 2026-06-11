import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Conditions générales",
  description:
    "Conditions générales de vente et d'utilisation de Coaching Présidentiel.",
};

export default function Conditions() {
  return (
    <LegalLayout
      title="Conditions générales de vente et d'utilisation"
      updated="11 juin 2026"
    >
      <h2>1. Objet</h2>
      <p>
        Les présentes conditions régissent la vente des formations en ligne et
        l'utilisation de la plateforme Coaching Présidentiel.
      </p>

      <h2>2. Inscriptions</h2>
      <p>
        L'inscription est validée après création d'un compte et règlement de la
        première tranche. Un accès à l'espace apprenant est alors ouvert.
      </p>

      <h2>3. Tarifs et paiement</h2>
      <ul>
        <li>Trading : 100 000 FCFA — paiement jusqu'à 4 tranches.</li>
        <li>Art Oratoire : 30 000 FCFA — paiement jusqu'à 3 tranches.</li>
        <li>Intelligence Artificielle : 250 000 FCFA — paiement jusqu'à 5 tranches.</li>
      </ul>
      <p>
        Les paiements s'effectuent via Orange Money, Wave, Visa ou Mastercard.
        Un reçu et une facture PDF sont générés automatiquement.
      </p>

      <h2>4. Accès aux formations</h2>
      <p>
        Les contenus sont accessibles 24h/24 pendant la durée de la formation et
        de son suivi. Le partage de compte est strictement interdit.
      </p>

      <h2>5. Certificats</h2>
      <p>
        Un certificat numérique vérifiable est délivré à l'issue de la formation,
        sous réserve d'avoir complété les modules et évaluations requis.
      </p>

      <h2>6. Rétractation et remboursement</h2>
      <p>
        Compte tenu de la nature numérique des contenus, toute demande de
        remboursement est étudiée au cas par cas conformément à la
        réglementation applicable.
      </p>

      <h2>7. Avertissement sur les risques</h2>
      <p>
        Les formations sont pédagogiques. Le trading comporte un risque de perte
        en capital. Coaching Présidentiel ne garantit aucun résultat financier.
      </p>
    </LegalLayout>
  );
}
