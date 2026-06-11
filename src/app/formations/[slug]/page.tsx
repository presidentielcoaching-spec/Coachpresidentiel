import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Check,
  Clock,
  CreditCard,
  Award,
  ArrowRight,
  Target,
  Sparkles,
} from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { Container } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { TrancheSimulator } from "@/components/TrancheSimulator";
import {
  formations,
  getFormation,
  accentStyles,
  formationIcons,
} from "@/lib/formations";

export function generateStaticParams() {
  return formations.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const f = getFormation(slug);
  if (!f) return { title: "Formation introuvable" };
  return {
    title: `Formation ${f.title}`,
    description: f.tagline,
  };
}

export default async function FormationDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const formation = getFormation(slug);
  if (!formation) notFound();

  const a = accentStyles[formation.accent];
  const Icon = formationIcons[formation.icon];

  return (
    <SiteShell>
      <section className="bg-navy-gradient relative overflow-hidden pt-36 pb-16 sm:pt-44">
        <div className="pattern-grid absolute inset-0 opacity-50" />
        <Container className="relative">
          <Link
            href="/formations"
            className="text-sm font-medium text-white/60 hover:text-gold-300"
          >
            ← Toutes les formations
          </Link>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div>
              <span className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-gold-300">
                <Icon className="h-4 w-4" /> {formation.level}
              </span>
              <h1 className="mt-5 text-4xl font-extrabold !text-white sm:text-5xl">
                Formation {formation.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg text-white/70">
                {formation.tagline}
              </p>
              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/80">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold-300" /> {formation.duration}
                </span>
                <span className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-gold-300" />{" "}
                  {formation.installmentLabel}
                </span>
                <span className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-gold-300" /> Certificat inclus
                </span>
              </div>
            </div>

            {/* Pricing card */}
            <div className="rounded-3xl border border-white/10 bg-white p-7 shadow-premium">
              <div className="text-sm font-medium text-muted">
                Tarif de la formation
              </div>
              <div className="mt-1 text-4xl font-extrabold text-navy">
                {formation.priceLabel}
              </div>
              <Link
                href={`/inscription?formation=${formation.slug}`}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3.5 text-sm font-bold text-navy shadow-gold transition-transform hover:scale-[1.02]"
              >
                S'inscrire maintenant <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/paiement?formation=${formation.slug}`}
                className="mt-3 flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-gold-300"
              >
                Payer en plusieurs fois
              </Link>
              <div className="mt-5 space-y-2.5 border-t border-border pt-5 text-sm text-navy/70">
                {[
                  "Accès 24h/24 à l'espace apprenant",
                  "Suivi personnalisé & mentor dédié",
                  "Communauté privée incluse",
                ].map((b) => (
                  <p key={b} className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${a.text}`} /> {b}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Curriculum */}
      <section className="bg-cloud py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Programme de la formation
            </h2>
            <div className="gold-divider mt-4" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {formation.modules.map((m, i) => (
                <Reveal key={m} delay={i * 60}>
                  <div className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${a.soft} ${a.text} text-sm font-bold`}
                    >
                      {i + 1}
                    </span>
                    <span className="font-medium text-navy">{m}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <h3 className="mt-12 flex items-center gap-2 text-xl font-bold">
              <Target className="h-5 w-5 text-gold-500" /> Ce que vous saurez
              faire
            </h3>
            <ul className="mt-5 space-y-3">
              {formation.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-navy/80">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* Tranche simulator */}
          <div className="lg:sticky lg:top-28">
            <TrancheSimulator
              price={formation.price}
              installments={formation.installments}
            />
          </div>
        </Container>
      </section>

      {/* Other formations */}
      <section className="bg-white py-16">
        <Container>
          <h2 className="text-2xl font-bold">Autres formations</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {formations
              .filter((f) => f.slug !== formation.slug)
              .map((f) => {
                const FIcon = formationIcons[f.icon];
                return (
                <Link
                  key={f.slug}
                  href={`/formations/${f.slug}`}
                  className="card-hover flex items-center gap-4 rounded-2xl border border-border p-5"
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${accentStyles[f.accent].soft} ${accentStyles[f.accent].text}`}
                  >
                    <FIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="font-bold text-navy">{f.title}</div>
                    <div className="text-sm text-muted">{f.priceLabel}</div>
                  </div>
                </Link>
                );
              })}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
