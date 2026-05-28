import { CHAINS } from "@/lib/sankofa/data";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

const TICKERS = [
  { sym: "ETH", price: 4_182.55, change: +2.41 },
  { sym: "SOL", price: 248.12, change: +5.78 },
  { sym: "MATIC", price: 0.812, change: -1.04 },
  { sym: "BNB", price: 712.45, change: +0.92 },
  { sym: "SANKO", price: 1.42, change: +18.7 },
  { sym: "FLOOR (Sankofa Genesis)", price: 1.84, change: +4.2 },
  { sym: "FLOOR (Òrìṣà Codex)", price: 3.2, change: +9.1 },
  { sym: "Gas (Eth)", price: 12, change: -8.0, unit: "gwei" },
];

export function SankofaTicker() {
  // duplicate for seamless marquee
  const items = [...TICKERS, ...TICKERS, ...TICKERS];
  return (
    <div className="relative border-b border-[var(--color-sankofa-border)] bg-black/40 text-[11px] tracking-[0.18em] uppercase text-[var(--color-sankofa-ivory-soft)]">
      <div className="overflow-hidden sankofa-scroll-fade">
        <div className="sankofa-marquee py-2">
          {items.map((t, i) => {
            const positive = t.change >= 0;
            return (
              <div
                key={`${t.sym}-${i}`}
                className="flex items-center gap-2 whitespace-nowrap px-6 border-r border-[var(--color-sankofa-border)]/60"
              >
                <Activity
                  size={12}
                  className="text-[var(--color-sankofa-gold-400)]"
                />
                <span className="font-semibold text-[var(--color-sankofa-ivory)]">
                  {t.sym}
                </span>
                <span className="text-[var(--color-sankofa-muted)]">
                  {t.price.toLocaleString("en-US", {
                    maximumFractionDigits: 3,
                  })}
                  {t.unit ? ` ${t.unit}` : " USD"}
                </span>
                <span
                  className={`flex items-center gap-1 font-medium ${
                    positive
                      ? "text-emerald-300"
                      : "text-[var(--color-sankofa-bronze)]"
                  }`}
                >
                  {positive ? (
                    <TrendingUp size={11} />
                  ) : (
                    <TrendingDown size={11} />
                  )}
                  {positive ? "+" : ""}
                  {t.change.toFixed(2)}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-3">
        {CHAINS.map((c) => (
          <span
            key={c.id}
            className="flex items-center gap-1 text-[10px] tracking-[0.2em]"
            style={{ color: c.color }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: c.color }}
            />
            {c.name}
          </span>
        ))}
      </div>
    </div>
  );
}
