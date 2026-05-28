import { PLATFORM_STATS, formatCompact } from "@/lib/sankofa/data";

const STATS = [
  {
    label: "Volume cumulé",
    value: `$${formatCompact(PLATFORM_STATS.totalVolume)}`,
    sub: "+18,4% / 30j",
  },
  {
    label: "Transactions",
    value: formatCompact(PLATFORM_STATS.totalSales),
    sub: "Toutes blockchains confondues",
  },
  {
    label: "Artistes vérifiés",
    value: formatCompact(PLATFORM_STATS.artists),
    sub: `${PLATFORM_STATS.countriesRepresented} pays représentés`,
  },
  {
    label: "Collectionneurs",
    value: formatCompact(PLATFORM_STATS.collectors),
    sub: "Communauté active",
  },
  {
    label: "Royalties reversées",
    value: "$18.4M",
    sub: "100% on-chain · transparent",
  },
];

export function StatsStrip() {
  return (
    <section className="relative border-y border-[var(--color-sankofa-border)] bg-black/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[var(--color-sankofa-border)] md:grid-cols-5">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="bg-[var(--color-sankofa-bg)] px-6 py-7 text-center md:text-left"
          >
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
              {s.label}
            </div>
            <div className="mt-2 text-3xl font-semibold text-sankofa-gold">
              {s.value}
            </div>
            <div className="mt-1 text-[11px] text-[var(--color-sankofa-ivory-soft)]">
              {s.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
