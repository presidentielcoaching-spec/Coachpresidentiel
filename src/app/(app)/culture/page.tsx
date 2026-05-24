import { PageHeader } from "@/components/PageHeader";

const COLLECTIONS = [
  { emoji: "📜", title: "Proverbes & sagesse", count: "350+ proverbes" },
  { emoji: "🎶", title: "Chants traditionnels", count: "120 chants" },
  { emoji: "📖", title: "Contes ancestraux", count: "80 contes" },
  { emoji: "🍲", title: "Cuisines & traditions", count: "50 recettes" },
  { emoji: "🎭", title: "Masques & symboles", count: "200 œuvres" },
  { emoji: "👑", title: "Histoires royales", count: "30 récits" },
];

export default function CulturePage() {
  return (
    <>
      <PageHeader
        title="Culture & traditions"
        subtitle="Découvre proverbes, chants, contes et symboles du continent."
      />

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {COLLECTIONS.map((c) => (
          <li key={c.title}>
            <article className="group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-6 transition hover:-translate-y-1 hover:border-gold-500/60">
              <div className="absolute inset-0 -z-0 bg-gradient-to-br from-primary-700/20 via-transparent to-african-orange/20 opacity-60 transition group-hover:opacity-100" />
              <div className="absolute inset-0 -z-0 pattern-kente opacity-30" />
              <div className="relative">
                <span className="text-4xl">{c.emoji}</span>
                <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
                <p className="mt-1 text-xs text-muted">{c.count}</p>
                <button className="mt-5 rounded-full border border-gold-500/40 px-4 py-1.5 text-xs font-semibold text-gold-400">
                  Explorer
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
