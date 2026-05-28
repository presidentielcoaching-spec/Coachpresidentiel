"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { TIMELINE, TimelineEvent } from "@/lib/genealogy/history-data";

const TAG_LABELS: Record<
  TimelineEvent["tag"],
  { label: string; color: string }
> = {
  traite: { label: "Traite", color: "#c5523a" },
  résistance: { label: "Résistance", color: "#3fa34d" },
  abolition: { label: "Abolition", color: "#e8b333" },
  diaspora: { label: "Diaspora", color: "#b88e58" },
  mémoire: { label: "Mémoire", color: "#d6b48b" },
};

const TAGS = Object.keys(TAG_LABELS) as TimelineEvent["tag"][];

const CENTURY_BUCKETS: { label: string; min: number; max: number }[] = [
  { label: "XVe siècle", min: 1400, max: 1499 },
  { label: "XVIe siècle", min: 1500, max: 1599 },
  { label: "XVIIe siècle", min: 1600, max: 1699 },
  { label: "XVIIIe siècle", min: 1700, max: 1799 },
  { label: "XIXe siècle", min: 1800, max: 1899 },
  { label: "XXe siècle", min: 1900, max: 1999 },
  { label: "XXIe siècle", min: 2000, max: 2099 },
];

function startYear(year: string): number {
  const m = year.match(/\d{4}/);
  return m ? Number(m[0]) : 0;
}

export function HistoricalTimeline() {
  const [activeTags, setActiveTags] = useState<Set<TimelineEvent["tag"]>>(
    new Set(TAGS),
  );
  const [century, setCentury] = useState<string>("");
  const [query, setQuery] = useState("");

  const events = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TIMELINE.filter((e) => {
      if (!activeTags.has(e.tag)) return false;
      if (century) {
        const bucket = CENTURY_BUCKETS.find((b) => b.label === century);
        if (bucket) {
          const y = startYear(e.year);
          if (y < bucket.min || y > bucket.max) return false;
        }
      }
      if (!q) return true;
      const hay = [e.title, e.description, e.region, e.source]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [activeTags, century, query]);

  function toggle(tag: TimelineEvent["tag"]) {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  }

  return (
    <div>
      <div className="mb-6 grid gap-3 md:grid-cols-[1fr_auto]">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher dans la chronologie (lieu, personne, source…)"
            className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] py-2 pl-9 pr-3 text-sm outline-none focus:border-[var(--color-gold-500)]"
          />
        </div>
        <select
          value={century}
          onChange={(e) => setCentury(e.target.value)}
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-sm outline-none focus:border-[var(--color-gold-500)]"
        >
          <option value="">Tous les siècles</option>
          {CENTURY_BUCKETS.map((b) => (
            <option key={b.label} value={b.label}>
              {b.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {TAGS.map((tag) => {
          const meta = TAG_LABELS[tag];
          const active = activeTags.has(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => toggle(tag)}
              className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs transition ${
                active
                  ? "border-[var(--color-gold-500)] bg-[var(--color-earth-700)]/40"
                  : "border-[var(--color-border)] opacity-50"
              }`}
            >
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ background: meta.color }}
              />
              {meta.label}
            </button>
          );
        })}
      </div>

      <p className="mb-4 text-sm text-[var(--color-muted)]">
        {events.length} jalon{events.length > 1 ? "s" : ""} sur {TIMELINE.length}.
      </p>

      <ol className="relative ml-3 border-l-2 border-[var(--color-bronze-500)]">
        {events.map((event) => {
          const meta = TAG_LABELS[event.tag];
          return (
            <li key={event.year + event.title} className="mb-8 ml-6">
              <span
                className="absolute -left-2.5 mt-1.5 flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-[var(--color-background)]"
                style={{ background: meta.color }}
              />
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-serif text-2xl font-semibold text-[var(--color-gold-400)]">
                    {event.year}
                  </span>
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] uppercase tracking-widest"
                    style={{
                      background: `${meta.color}22`,
                      color: meta.color,
                    }}
                  >
                    {meta.label}
                  </span>
                </div>
                <h3 className="mt-1 font-serif text-lg font-semibold">
                  {event.title}
                </h3>
                {event.region && (
                  <p className="mt-0.5 text-[11px] uppercase tracking-widest text-[var(--color-bronze-400)]">
                    {event.region}
                  </p>
                )}
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {event.description}
                </p>
                {(event.source || event.link) && (
                  <div className="mt-3 border-t border-[var(--color-border)] pt-2 text-[11px]">
                    {event.source && (
                      <p className="text-[var(--color-gold-400)]">
                        Source · {event.source}
                      </p>
                    )}
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-[var(--color-gold-400)] underline-offset-2 hover:underline"
                      >
                        ↗ Lire en ligne
                      </a>
                    )}
                  </div>
                )}
              </div>
            </li>
          );
        })}

        {events.length === 0 && (
          <li className="ml-6 rounded-xl border border-dashed border-[var(--color-border)] p-6 text-sm text-[var(--color-muted)]">
            Aucun jalon ne correspond à ces filtres.
          </li>
        )}
      </ol>
    </div>
  );
}
