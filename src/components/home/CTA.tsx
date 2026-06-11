"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";

export function CTA() {
  const { t } = useLang();
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="bg-navy-gradient relative overflow-hidden rounded-[2rem] px-6 py-16 text-center shadow-premium sm:px-12 sm:py-20">
            <div className="pattern-grid absolute inset-0 opacity-40" />
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold-400/15 blur-3xl" />
            <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-navy-400/30 blur-3xl" />
            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-300/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300">
                <Sparkles className="h-3.5 w-3.5" />
                Places limitées
              </span>
              <h2 className="mt-6 text-3xl font-bold !text-white sm:text-4xl md:text-[2.8rem]">
                {t("cta.title")}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
                {t("cta.subtitle")}
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Link
                  href="/inscription"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-8 py-4 text-base font-bold text-navy shadow-gold transition-transform hover:scale-[1.03]"
                >
                  {t("cta.button")}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-gold-300 hover:text-gold-300"
                >
                  Parler à un conseiller
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
