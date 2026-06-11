import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de Coaching Présidentiel.",
};

export default function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales" updated="11 juin 2026">
      <h2>Éditeur du site</h2>
      <p>
        Le présent site est édité par <strong>Coaching Présidentiel</strong>,
        académie de formation en ligne spécialisée dans le Trading,
        l'Intelligence Artificielle et l'Art Oratoire.
      </p>
      <ul>
        <li>Siège : Abidjan, Côte d'Ivoire</li>
        <li>Email : contact@coachingpresidentiel.com</li>
        <li>Téléphone : +225 07 00 00 00 00</li>
      </ul>

      <h2>Directeur de la publication</h2>
      <p>Le directeur de la publication est le représentant légal de Coaching Présidentiel.</p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par un prestataire d'hébergement cloud assurant la
        disponibilité et la sécurité des données.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus (textes, vidéos, supports de cours, logos,
        graphismes) est la propriété exclusive de Coaching Présidentiel. Toute
        reproduction sans autorisation est interdite.
      </p>

      <h2>Responsabilité</h2>
      <p>
        Les formations proposées ont une vocation pédagogique. Le trading
        comporte des risques de perte en capital ; les résultats individuels
        peuvent varier.
      </p>
    </LegalLayout>
  );
}
