import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { FormationCard } from "@/components/FormationCard";
import { formations } from "@/lib/formations";

export const metadata: Metadata = {
  title: "Nos Formations",
  description:
    "Découvrez nos formations premium en Trading, Intelligence Artificielle et Art Oratoire avec accompagnement personnalisé.",
};

export default function FormationsPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Nos Formations"
        title="Trois parcours d'excellence"
        subtitle="Des programmes intensifs, pratiques et certifiants, conçus pour des résultats concrets."
      />
      <section className="bg-cloud py-20">
        <Container>
          <div className="grid gap-7 lg:grid-cols-3">
            {formations.map((f, i) => (
              <Reveal key={f.slug} delay={i * 120}>
                <FormationCard formation={f} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
