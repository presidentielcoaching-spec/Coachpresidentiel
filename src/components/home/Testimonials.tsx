"use client";

import { Star, Quote, Play } from "lucide-react";
import { Container, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export function Testimonials() {
  const { t } = useLang();
  return (
    <section className="bg-navy-gradient relative overflow-hidden py-24 sm:py-28">
      <div className="pattern-grid absolute inset-0 opacity-40" />
      <Container className="relative">
        <SectionHeading
          kicker={t("testi.kicker")}
          title={t("testi.title")}
          subtitle="Des résultats concrets, racontés par celles et ceux qui les ont vécus."
          variant="light"
        />

        {/* Featured video testimonial */}
        <Reveal>
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:grid-cols-[1fr_1.2fr] sm:items-center">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-navy-dark">
              <div className="pattern-grid absolute inset-0 opacity-50" />
              <button className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-navy shadow-gold transition-transform hover:scale-110">
                  <Play className="h-7 w-7 fill-current pl-1" />
                </span>
              </button>
            </div>
            <div>
              <div className="flex text-gold-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-lg font-medium leading-relaxed text-white">
                « En 6 mois, Coaching Présidentiel a complètement changé ma
                trajectoire professionnelle. Le niveau d'accompagnement est
                exceptionnel. »
              </p>
              <div className="mt-4 text-sm">
                <div className="font-bold text-gold-300">Awa Bamba</div>
                <div className="text-white/60">Diplômée — Promotion 2025</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Grid of text testimonials */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((tt, i) => (
            <Reveal key={tt.name} delay={i * 80}>
              <figure className="card-hover h-full rounded-2xl bg-white p-7">
                <Quote className="h-8 w-8 text-gold-300" />
                <blockquote className="mt-4 text-sm leading-relaxed text-navy/80">
                  {tt.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span
                    className={`h-11 w-11 shrink-0 rounded-full bg-gradient-to-br ${tt.avatar}`}
                  />
                  <div>
                    <div className="text-sm font-bold text-navy">{tt.name}</div>
                    <div className="text-xs text-muted">
                      {tt.role} · {tt.program}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
