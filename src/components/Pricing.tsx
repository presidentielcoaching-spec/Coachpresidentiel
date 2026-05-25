import { Check, Diamond, Gem, Crown } from "lucide-react";

const TIERS = [
  {
    icon: Diamond,
    name: "Mint Public",
    badge: "À l'ouverture",
    price: "0.18",
    unit: "ETH",
    eur: "≈ 540 €",
    desc: "Prix fixe lors du drop public. Premier arrivé, premier servi sur les Gardiens restants après la whitelist.",
    perks: [
      "1 Gardien Sankofa (1-of-1)",
      "Certificat d'activation papier signé",
      "Accès au cercle privé Discord",
      "Royalties créateur 7.5% sur reventes",
    ],
    cta: "Rejoindre la liste",
    href: "#whitelist",
    highlight: false,
  },
  {
    icon: Gem,
    name: "Whitelist Genesis",
    badge: "Recommandé",
    price: "0.12",
    unit: "ETH",
    eur: "≈ 360 €",
    desc: "Réservé aux 25 wallets sélectionnés. Mint privé 48h avant le public. Choix prioritaire du Gardien.",
    perks: [
      "Tous les avantages Mint Public",
      "Choix prioritaire parmi les 5 Gardiens",
      "Mention au générique de la collection",
      "Place réservée whitelist Saison II",
      "Appel vidéo 1:1 avec l'artiste",
    ],
    cta: "Postuler à la Whitelist",
    href: "#whitelist",
    highlight: true,
  },
  {
    icon: Crown,
    name: "Patron Founder",
    badge: "1 place seulement",
    price: "Sur invitation",
    unit: "",
    eur: "Bundle 3 Gardiens",
    desc: "Trois Gardiens parmi les cinq, accord direct avec l'artiste. Stratégique pour collectionneur ou institution culturelle.",
    perks: [
      "3 Gardiens 1-of-1 au choix",
      "Œuvre physique signée 70×70 cm offerte",
      "Co-curation de la Saison II",
      "Crédit Patron à perpétuité",
      "Visite privée de l'atelier",
    ],
    cta: "Contacter le studio",
    href: "#contact",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="rarete" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-3 py-1 text-xs font-medium tracking-[0.22em] uppercase text-gold-300">
            Rareté & Accès
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Trois voies pour <span className="text-gradient-gold">entrer dans la lignée</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/75">
            5 Gardiens. Pas de pré-mint pour l&apos;équipe. Pas de réserve cachée.
            Quand c&apos;est parti, c&apos;est parti.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <article
              key={tier.name}
              className={`relative rounded-3xl border p-8 ${
                tier.highlight
                  ? "border-gold-500/60 bg-gradient-to-b from-gold-500/[0.08] to-surface glow-gold"
                  : "border-border bg-surface/50"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-4 py-1 text-[10px] font-bold tracking-[0.2em] uppercase text-[#1a0f00]">
                  {tier.badge}
                </span>
              )}

              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-gold-500/40 bg-gold-500/10">
                  <tier.icon className="text-gold-400" size={22} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{tier.name}</h3>
                  {!tier.highlight && (
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
                      {tier.badge}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-gradient-gold">
                  {tier.price}
                </span>
                {tier.unit && (
                  <span className="text-sm font-semibold text-gold-300">
                    {tier.unit}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted">{tier.eur}</p>

              <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                {tier.desc}
              </p>

              <ul className="mt-6 space-y-3">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className="mt-0.5 flex-none text-gold-400"
                    />
                    <span className="text-foreground/85">{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  tier.highlight
                    ? "bg-gold-500 text-[#1a0f00] shadow-lg shadow-gold-500/25 hover:bg-gold-400"
                    : "border border-gold-500/40 text-gold-300 hover:bg-gold-500/10"
                }`}
              >
                {tier.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
