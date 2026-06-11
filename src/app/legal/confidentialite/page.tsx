import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de Coaching Présidentiel.",
};

export default function Confidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité" updated="11 juin 2026">
      <p>
        Coaching Présidentiel accorde une importance primordiale à la protection
        de vos données personnelles. Cette politique décrit comment nous
        collectons, utilisons et protégeons vos informations.
      </p>

      <h2>Données collectées</h2>
      <ul>
        <li>Données d'identification : nom, prénom, email, téléphone.</li>
        <li>Données de paiement, traitées via des prestataires sécurisés.</li>
        <li>Données de progression et d'utilisation de la plateforme.</li>
      </ul>

      <h2>Utilisation des données</h2>
      <p>
        Vos données servent à gérer votre compte, assurer le suivi pédagogique,
        traiter les paiements et vous envoyer des notifications (SMS et email)
        relatives à votre formation.
      </p>

      <h2>Partage des données</h2>
      <p>
        Vos données ne sont jamais vendues. Elles peuvent être partagées avec
        des prestataires techniques (paiement, hébergement) strictement dans le
        cadre du service.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d'un droit d'accès, de rectification et de suppression de
        vos données. Pour l'exercer, écrivez à
        contact@coachingpresidentiel.com.
      </p>

      <h2>Cookies</h2>
      <p>
        Le site utilise des cookies pour améliorer votre expérience et mesurer
        l'audience. Vous pouvez les gérer depuis votre navigateur.
      </p>
    </LegalLayout>
  );
}
