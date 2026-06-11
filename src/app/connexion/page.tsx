import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Connexion",
  description: "Connectez-vous à votre espace apprenant Coaching Présidentiel.",
};

export default function ConnexionPage() {
  return <LoginForm />;
}
