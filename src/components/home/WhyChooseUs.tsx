"use client";

import {
  UserCheck,
  GraduationCap,
  BadgeCheck,
  Users,
  Clock,
  Target,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";

const reasons = [
  {
    icon: UserCheck,
    title: "Accompagnement personnalisé",
    desc: "Un suivi individuel et des feedbacks réguliers pour progresser à votre rythme.",
  },
  {
    icon: GraduationCap,
    title: "Formateurs experts",
    desc: "Apprenez auprès de professionnels reconnus dans leur domaine.",
  },
  {
    icon: BadgeCheck,
    title: "Certificat de fin de formation",
    desc: "Validez vos compétences avec un certificat numérique vérifiable.",
  },
  {
    icon: Users,
    title: "Communauté privée",
    desc: "Rejoignez un réseau ambitieux d'apprenants et d'anciens élèves.",
  },
  {
    icon: Clock,
    title: "Cours accessibles 24h/24",
    desc: "Vos cours et supports disponibles à tout moment, partout.",
  },
  {
    icon: Target,
    title: "Suivi individuel",
    desc: "Des objectifs clairs et un mentor dédié pour garantir vos résultats.",
  },
];

export function WhyChooseUs() {
  const { t } = useLang();
  return (
    <section id="pourquoi" className="bg-mesh py-24 sm:py-28">
      <Container>
        <SectionHeading
          kicker={t("why.kicker")}
          title={t("why.title")}
          subtitle="Une expérience d'apprentissage complète, exigeante et orientée résultats."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 90}>
              <div className="card-hover group h-full rounded-2xl border border-border bg-white p-7">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold-300 transition-colors group-hover:bg-gradient-to-br group-hover:from-gold-300 group-hover:to-gold-500 group-hover:text-navy">
                  <r.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {r.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
