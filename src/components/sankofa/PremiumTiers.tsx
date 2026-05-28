import { Check, Crown, Gem, Sparkles } from "lucide-react";

const TIERS = [
  {
    name: "Initiate",
    price: "0",
    suffix: "Gratuit",
    Icon: Sparkles,
    color: "from-white/5 to-white/0 border-white/10",
    pitch: "Démarrez l'aventure Sankofa.",
    perks: [
      "Wallet connect multi-chaînes",
      "Frais marketplace 2,5%",
      "Accès au launchpad public",
      "Galerie 3D classique",
    ],
    cta: "Commencer",
    highlighted: false,
  },
  {
    name: "Griot",
    price: "29",
    suffix: "€/mois ou 200 $SANKO",
    Icon: Gem,
    color:
      "from-[var(--color-sankofa-gold-500)]/15 to-[var(--color-sankofa-bronze)]/15 border-[var(--color-sankofa-gold-500)]/40",
    pitch: "Pour collectionneurs sérieux.",
    perks: [
      "Frais réduits à 1,5%",
      "Accès anticipé aux drops (48h)",
      "Alertes IA personnalisées",
      "Galerie immersive premium",
      "Statistiques portefeuille",
    ],
    cta: "Devenir Griot",
    highlighted: true,
  },
  {
    name: "Legendary",
    price: "199",
    suffix: "€/mois ou 1 500 $SANKO",
    Icon: Crown,
    color:
      "from-[var(--color-sankofa-cosmos-bright)]/15 to-[var(--color-sankofa-magenta)]/15 border-[var(--color-sankofa-cosmos-bright)]/40",
    pitch: "Conciergerie d'art numérique.",
    perks: [
      "Frais 0,5% à vie",
      "Allowlist prioritaire toutes phases",
      "Conciergerie 1-to-1 + curator dédié",
      "Salons privés (Marrakech, Lagos, NY)",
      "Vote DAO double pondération",
      "Mint gratuit sur les drops Sankofa",
    ],
    cta: "Rejoindre la confrérie",
    highlighted: false,
  },
];

export function PremiumTiers() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {TIERS.map((t) => (
        <div
          key={t.name}
          className={`sankofa-glass relative overflow-hidden rounded-3xl p-7 bg-gradient-to-br ${t.color} ${
            t.highlighted
              ? "shadow-[0_30px_80px_-20px_rgba(241,195,74,0.25)] scale-[1.02]"
              : ""
          }`}
        >
          {t.highlighted && (
            <div className="absolute right-5 top-5 sankofa-chip text-[10px]">
              Plus populaire
            </div>
          )}
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-black/30 text-[var(--color-sankofa-gold-300)]">
              <t.Icon size={18} />
            </span>
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-[var(--color-sankofa-gold-400)]">
                {t.name}
              </div>
              <div className="text-[11px] text-[var(--color-sankofa-muted)]">
                {t.pitch}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-5xl font-semibold text-[var(--color-sankofa-ivory)]">
              {t.price}
            </span>
            <span className="text-xs text-[var(--color-sankofa-muted)]">
              {t.suffix}
            </span>
          </div>

          <ul className="mt-6 space-y-2.5">
            {t.perks.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2 text-sm text-[var(--color-sankofa-ivory-soft)]"
              >
                <Check
                  size={14}
                  className="mt-0.5 flex-none text-[var(--color-sankofa-gold-400)]"
                />
                {p}
              </li>
            ))}
          </ul>

          <button
            className={`mt-7 w-full rounded-full py-2.5 text-sm font-semibold ${
              t.highlighted
                ? "sankofa-btn-gold"
                : "sankofa-btn-ghost"
            }`}
          >
            {t.cta}
          </button>
        </div>
      ))}
    </div>
  );
}
