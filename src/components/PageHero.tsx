import type { ReactNode } from "react";
import { Container } from "./Section";

export function PageHero({
  kicker,
  title,
  subtitle,
  children,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-navy-gradient relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div className="pattern-grid absolute inset-0 opacity-50" />
      <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />
      <Container className="relative text-center">
        {kicker && (
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-300/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300">
            {kicker}
          </span>
        )}
        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold !text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
