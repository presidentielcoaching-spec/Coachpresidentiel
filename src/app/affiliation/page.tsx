import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  Gift,
  Wallet,
  Share2,
  TrendingUp,
  Link as LinkIcon,
} from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Programme d'affiliation & parrainage",
  description:
    "Gagnez des commissions en recommandant Coaching Présidentiel. Espace affilié, liens de parrainage et récompenses.",
};

const steps = [
  {
    icon: LinkIcon,
    title: "Obtenez votre lien",
    desc: "Inscrivez-vous gratuitement et recevez votre lien d'affiliation unique.",
  },
  {
    icon: Share2,
    title: "Partagez",
    desc: "Diffusez-le à votre réseau, sur les réseaux sociaux ou par WhatsApp.",
  },
  {
    icon: Wallet,
    title: "Gagnez des commissions",
    desc: "Touchez jusqu'à 20% sur chaque inscription validée via votre lien.",
  },
];

const perks = [
  { icon: TrendingUp, label: "Jusqu'à 20% de commission" },
  { icon: Gift, label: "Bonus de parrainage cumulables" },
  { icon: Users, label: "Tableau de bord affilié dédié" },
  { icon: Wallet, label: "Paiements via Orange Money & Wave" },
];

export default function AffiliationPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Espace Affiliés"
        title="Recommandez, parrainez, gagnez"
        subtitle="Transformez votre réseau en revenus avec notre programme d'affiliation et de parrainage."
      >
        <Link
          href="/inscription"
          className="inline-flex rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-7 py-3.5 font-bold text-navy shadow-gold transition-transform hover:scale-[1.03]"
        >
          Devenir affilié
        </Link>
      </PageHero>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            kicker="Comment ça marche"
            title="3 étapes pour commencer à gagner"
          />
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <div className="card-hover relative h-full rounded-2xl border border-border bg-white p-7 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-gold-300">
                    <s.icon className="h-8 w-8" />
                  </span>
                  <div className="mt-4 text-sm font-bold text-gold-500">
                    Étape {i + 1}
                  </div>
                  <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cloud py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold">Vos avantages affiliés</h2>
              <div className="gold-divider mt-4" />
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {perks.map((p) => (
                  <li
                    key={p.label}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 text-sm font-medium text-navy/80"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-50 text-gold-600">
                      <p.icon className="h-5 w-5" />
                    </span>
                    {p.label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-navy-gradient relative overflow-hidden rounded-3xl p-8 text-center shadow-premium">
              <div className="pattern-grid absolute inset-0 opacity-40" />
              <div className="relative">
                <div className="text-sm font-semibold uppercase tracking-wider text-gold-300">
                  Simulation de gains
                </div>
                <div className="mt-4 text-5xl font-extrabold text-gradient-gold">
                  250 000 FCFA
                </div>
                <p className="mt-2 text-white/60">
                  potentiels avec 5 parrainages sur la formation IA
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 text-white">
                  {[
                    { n: "5", l: "Filleuls" },
                    { n: "20%", l: "Commission" },
                    { n: "∞", l: "Plafond" },
                  ].map((x) => (
                    <div
                      key={x.l}
                      className="rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="text-2xl font-extrabold">{x.n}</div>
                      <div className="text-xs text-white/60">{x.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </SiteShell>
  );
}
