import { Check, Sparkles, Globe2, Wallet, Cpu } from "lucide-react";

const PHASES = [
  {
    label: "T1 2026 · Phase Sankofa",
    title: "Marketplace + 3 chaînes",
    status: "done",
    items: [
      "Lancement marketplace ETH / Polygon / Base",
      "Sankofa Genesis (1000 NFT)",
      "Audits SlowMist + CertiK",
      "5 000 premiers collectionneurs",
    ],
    Icon: Check,
  },
  {
    label: "T2 2026 · Phase Adinkra",
    title: "DAO + Token $SANKO",
    status: "active",
    items: [
      "Token utilitaire $SANKO (TGE)",
      "DAO communautaire (Snapshot + on-chain)",
      "Launchpad public pour 30 artistes",
      "Galerie immersive 3D bêta",
    ],
    Icon: Sparkles,
  },
  {
    label: "T3 2026 · Phase Diaspora",
    title: "Multi-chaînes + Mobile",
    status: "next",
    items: [
      "Ajout Solana + BNB Chain",
      "Apps iOS & Android premium",
      "Wallet natif Sankofa intégré",
      "Paiement carte bancaire EUR/USD/XOF",
    ],
    Icon: Wallet,
  },
  {
    label: "T4 2026 · Phase Métavers",
    title: "Métavers culturel africain",
    status: "next",
    items: [
      "Musée virtuel Vision Pro / Quest",
      "Concerts Afrobeat tokenisés",
      "Passeport culturel NFT (KYC souverain)",
      "Partenariats musées et États",
    ],
    Icon: Globe2,
  },
  {
    label: "2027 · Phase Renaissance",
    title: "Économie créative décentralisée",
    status: "next",
    items: [
      "Immobilier tokenisé (RWA)",
      "Royalties musique on-chain",
      "Bourse de fragments d'œuvres",
      "Présence dans 120 pays",
    ],
    Icon: Cpu,
  },
];

export function Roadmap() {
  return (
    <div className="grid gap-3 lg:grid-cols-5">
      {PHASES.map((p) => {
        const styles =
          p.status === "done"
            ? "border-emerald-400/40 bg-emerald-500/5"
            : p.status === "active"
              ? "border-[var(--color-sankofa-gold-500)]/50 bg-[var(--color-sankofa-gold-500)]/10"
              : "border-[var(--color-sankofa-border)]";
        return (
          <div
            key={p.label}
            className={`sankofa-glass relative rounded-3xl p-5 ${styles}`}
          >
            <div className="flex items-center gap-2">
              <p.Icon
                size={16}
                className={
                  p.status === "done"
                    ? "text-emerald-300"
                    : p.status === "active"
                      ? "text-[var(--color-sankofa-gold-300)]"
                      : "text-[var(--color-sankofa-muted)]"
                }
              />
              <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
                {p.label}
              </span>
            </div>
            <h3 className="mt-3 text-base font-semibold text-[var(--color-sankofa-ivory)]">
              {p.title}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {p.items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-2 text-[12px] text-[var(--color-sankofa-ivory-soft)]"
                >
                  <span
                    className={`mt-1 h-1.5 w-1.5 flex-none rounded-full ${
                      p.status === "done"
                        ? "bg-emerald-400"
                        : p.status === "active"
                          ? "bg-[var(--color-sankofa-gold-400)]"
                          : "bg-[var(--color-sankofa-muted)]"
                    }`}
                  />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
