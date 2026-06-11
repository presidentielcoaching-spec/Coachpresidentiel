import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'équipe Coaching Présidentiel. WhatsApp, email, réseaux sociaux et formulaire de contact.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Contact"
        title="Parlons de votre projet"
        subtitle="Une question sur nos formations ? Notre équipe vous répond rapidement."
      />
      <ContactForm />
    </SiteShell>
  );
}
