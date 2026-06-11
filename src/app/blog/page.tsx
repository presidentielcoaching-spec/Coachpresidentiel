import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { BlogList } from "@/components/BlogList";

export const metadata: Metadata = {
  title: "Blog & Ressources",
  description:
    "Articles et ressources sur le Trading, l'Intelligence Artificielle, le Leadership, le Développement Personnel et l'Entrepreneuriat.",
};

export default function BlogPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Blog & Ressources"
        title="Apprenez, inspirez-vous, progressez"
        subtitle="Nos meilleurs conseils pour développer vos compétences et votre mindset."
      />
      <BlogList />
    </SiteShell>
  );
}
