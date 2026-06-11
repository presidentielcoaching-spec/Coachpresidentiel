"use client";

import { Container } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const stats = [
  { value: "2 500+", label: "Apprenants formés" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "15+", label: "Formateurs experts" },
  { value: "24/7", label: "Accès aux cours" },
];

export function StatsBand() {
  return (
    <section className="border-y border-border bg-white py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="text-center">
                <div className="font-display text-4xl font-extrabold text-gradient-navy sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-medium text-muted">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
