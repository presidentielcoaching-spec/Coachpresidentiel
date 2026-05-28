import { Bot, ScanSearch, Wand2, ShieldCheck, Layers, LineChart } from "lucide-react";

const FEATURES = [
  {
    Icon: Wand2,
    title: "Génération d'art NFT",
    desc: "Stable Diffusion XL fine-tuné sur 240k œuvres africaines. Style transfer Adinkra, Ndebele, Nsibidi.",
    badge: "Génératif",
  },
  {
    Icon: LineChart,
    title: "Estimation de valeur",
    desc: "Pricing ML basé sur la rareté, l'historique on-chain, le sentiment social et 18 métriques.",
    badge: "Pricing",
  },
  {
    Icon: ShieldCheck,
    title: "Détection de faux NFT",
    desc: "Vision transformer + analyse de provenance pour bloquer copy-mints en moins de 200 ms.",
    badge: "Sécurité",
  },
  {
    Icon: Layers,
    title: "Curation intelligente",
    desc: "Recommandations cross-chain : suggestions de drops, collections complémentaires, alertes prix.",
    badge: "Curation",
  },
  {
    Icon: Bot,
    title: "Assistant Web3",
    desc: "Copilote intégré. Explique les contrats, signe en sécurité, traduit l'on-chain en langage humain.",
    badge: "Copilote",
  },
  {
    Icon: ScanSearch,
    title: "Analyse de tendances",
    desc: "Heatmaps de volume, sentiment Twitter/Farcaster, traque les wallets influents en temps réel.",
    badge: "Insights",
  },
];

export function AiSuite() {
  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {FEATURES.map((f) => (
        <div
          key={f.title}
          className="sankofa-glass sankofa-glass-hover relative overflow-hidden rounded-3xl p-5"
        >
          <div className="absolute right-3 top-3 sankofa-chip text-[10px]">
            {f.badge}
          </div>
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[var(--color-sankofa-gold-500)]/25 to-[var(--color-sankofa-cosmos-bright)]/20 text-[var(--color-sankofa-gold-200)]">
            <f.Icon size={18} />
          </div>
          <h3 className="mt-4 text-base font-semibold text-[var(--color-sankofa-ivory)]">
            {f.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-sankofa-muted)]">
            {f.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
