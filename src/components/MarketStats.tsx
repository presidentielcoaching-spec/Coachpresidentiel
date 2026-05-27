import { COLLECTION } from "@/lib/collection";

const STATS = [
  { value: String(COLLECTION.totalSupply), label: "Gardiens Genesis" },
  { value: "1 / 1", label: "Rareté par pièce" },
  { value: `${COLLECTION.royaltyBps / 100}%`, label: "Royalties créateur" },
  { value: COLLECTION.chain, label: "Blockchain" },
];

export function MarketStats() {
  return (
    <section className="relative overflow-hidden border-y border-gold-500/20 bg-gradient-to-b from-surface/40 via-background to-surface/40 py-10">
      <div className="absolute inset-0 -z-10 pattern-hieroglyph opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-y-6 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="border-l border-gold-500/30 px-4 first:border-l-0 sm:first:border-l"
            >
              <dt className="font-display text-3xl font-bold text-gradient-gold sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
