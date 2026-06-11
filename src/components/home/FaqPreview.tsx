"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export function FaqPreview() {
  const { t } = useLang();
  return (
    <section className="bg-cloud py-24 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading kicker={t("faq.kicker")} title={t("faq.title")} />
        <Reveal className="mt-12">
          <FaqAccordion items={faqs.slice(0, 5)} />
        </Reveal>
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold-500"
          >
            Voir toutes les questions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
