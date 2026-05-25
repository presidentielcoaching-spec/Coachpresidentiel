import { Shield, ScanLine, Hand, FileSignature } from "lucide-react";

const PILLARS = [
  {
    icon: Shield,
    title: "Vérifié on-chain",
    desc: "Smart contract ERC-721 audité, déployé sur Base. Provenance traçable depuis le mint. Pas de pre-reveal opaque.",
  },
  {
    icon: ScanLine,
    title: "Authentifié hors-chaîne",
    desc: "Chaque NFT est accompagné d'une carte d'activation papier numérotée, signée à la main, avec QR de vérification.",
  },
  {
    icon: Hand,
    title: "Rituel transmissible",
    desc: "Le détenteur reçoit un protocole d'activation personnel. Transmissible avec le NFT à chaque revente.",
  },
  {
    icon: FileSignature,
    title: "Royalties créateur",
    desc: "7.5% à l'artiste sur chaque revente perpétuelle. L'art continue de soutenir celui qui l'a fait naître.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-3 py-1 text-xs font-medium tracking-[0.22em] uppercase text-gold-300">
            Pourquoi Sankofa
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Le NFT n&apos;est qu&apos;une partie.{" "}
            <span className="text-gradient-gold">Le reste fait la valeur.</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/75">
            Ce qui distingue Sankofa Legacy des 99% de drops qui meurent en
            silence : un protocole de valeur que la blockchain seule ne peut pas
            porter.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PILLARS.map((p) => (
            <article
              key={p.title}
              className="group rounded-3xl border border-border bg-surface/50 p-7 transition hover:border-gold-500/50"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-gold-500/40 bg-gold-500/10 transition group-hover:bg-gold-500/20">
                <p.icon className="text-gold-400" size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
