import type { Metadata } from "next";
import { Dashboard } from "@/components/dashboard/Dashboard";

export const metadata: Metadata = {
  title: "Espace Apprenant",
  description:
    "Tableau de bord sécurisé : cours vidéo, supports PDF, quiz, progression, certificats, messagerie et calendrier des sessions live.",
  robots: { index: false, follow: false },
};

export default function EspaceApprenantPage() {
  return <Dashboard />;
}
