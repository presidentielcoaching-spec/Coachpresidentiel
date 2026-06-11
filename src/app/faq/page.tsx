import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Section";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes",
  description:
    "Réponses aux questions sur les paiements, les formations, les certificats et le suivi pédagogique de Coaching Présidentiel.",
};

const categories = [
  "Paiements",
  "Formations",
  "Certificats",
  "Suivi pédagogique",
] as const;

export default function FaqPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="FAQ"
        title="Questions fréquentes"
        subtitle="Tout ce que vous devez savoir avant de rejoindre l'académie."
      />
      <section className="bg-cloud py-20">
        <Container className="max-w-3xl space-y-12">
          {categories.map((cat) => {
            const items = faqs.filter((f) => f.category === cat);
            if (!items.length) return null;
            return (
              <div key={cat}>
                <h2 className="mb-5 text-xl font-bold text-navy">{cat}</h2>
                <FaqAccordion items={items} />
              </div>
            );
          })}
        </Container>
      </section>
    </SiteShell>
  );
}
