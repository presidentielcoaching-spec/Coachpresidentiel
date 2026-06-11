"use client";

import { Container, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { FormationCard } from "@/components/FormationCard";
import { formations } from "@/lib/formations";
import { useLang } from "@/lib/i18n";

export function FormationsSection() {
  const { t } = useLang();
  return (
    <section id="formations" className="bg-cloud py-24 sm:py-28">
      <Container>
        <SectionHeading
          kicker={t("formations.kicker")}
          title={t("formations.title")}
          subtitle={t("formations.subtitle")}
        />
        <div className="mt-16 grid gap-7 lg:grid-cols-3">
          {formations.map((f, i) => (
            <Reveal key={f.slug} delay={i * 120}>
              <FormationCard formation={f} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
