import type { ReactNode } from "react";
import { SiteShell } from "./SiteShell";
import { PageHero } from "./PageHero";
import { Container } from "./Section";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <SiteShell>
      <PageHero kicker="Informations légales" title={title} />
      <section className="bg-white py-16">
        <Container className="max-w-3xl">
          <p className="mb-8 text-sm text-muted">
            Dernière mise à jour : {updated}
          </p>
          <div className="legal space-y-6 text-[0.97rem] leading-relaxed text-navy/80">
            {children}
          </div>
        </Container>
      </section>
      <style>{`
        .legal h2 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-top: 2rem;
        }
        .legal p { color: var(--color-muted); }
        .legal ul { list-style: disc; padding-left: 1.25rem; }
        .legal li { color: var(--color-muted); margin-top: 0.4rem; }
        .legal a { color: var(--color-gold-600); font-weight: 600; }
      `}</style>
    </SiteShell>
  );
}
