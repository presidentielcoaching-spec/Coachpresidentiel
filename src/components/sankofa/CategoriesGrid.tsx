import Link from "next/link";
import { CATEGORIES } from "@/lib/sankofa/data";

const ICONS: Record<string, string> = {
  heritage: "𓂀",
  civilizations: "𒀭",
  sankofa: "᎘",
  diaspora: "✶",
  memory: "⚔",
  tribal: "◬",
  afrobeat: "♫",
  "ai-art": "✦",
  artifacts: "✺",
  music: "♪",
  tickets: "✦",
  realestate: "❖",
};

export function CategoriesGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {CATEGORIES.map((cat) => (
        <Link
          key={cat.id}
          href={`/sankofa/collections?cat=${cat.id}`}
          className="sankofa-glass sankofa-glass-hover group relative overflow-hidden rounded-2xl px-5 py-5"
        >
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--color-sankofa-gold-500)]/10 text-2xl text-[var(--color-sankofa-gold-200)] group-hover:bg-[var(--color-sankofa-gold-500)]/20">
              {ICONS[cat.id] ?? "✦"}
            </span>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-[var(--color-sankofa-ivory)]">
                {cat.label}
              </div>
              <div className="mt-1 text-[11px] leading-relaxed text-[var(--color-sankofa-muted)]">
                {cat.tagline}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
