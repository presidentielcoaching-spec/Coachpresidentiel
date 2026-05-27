"use client";

import { useMemo, useState } from "react";
import { TIMELINE, TimelineEvent } from "@/lib/genealogy/history-data";

const TAG_LABELS: Record<TimelineEvent["tag"], { label: string; color: string }> =
  {
    traite: { label: "Traite", color: "#c5523a" },
    résistance: { label: "Résistance", color: "#3fa34d" },
    abolition: { label: "Abolition", color: "#e8b333" },
    diaspora: { label: "Diaspora", color: "#b88e58" },
    mémoire: { label: "Mémoire", color: "#d6b48b" },
  };

const TAGS = Object.keys(TAG_LABELS) as TimelineEvent["tag"][];

export function HistoricalTimeline() {
  const [activeTags, setActiveTags] = useState<Set<TimelineEvent["tag"]>>(
    new Set(TAGS),
  );

  const events = useMemo(
    () => TIMELINE.filter((e) => activeTags.has(e.tag)),
    [activeTags],
  );

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

      <ol className="relative ml-3 border-l-2 border-[var(--color-bronze-500)]">
        {events.map((event) => {
          const meta = TAG_LABELS[event.tag];
          return (
            <li key={event.year + event.title} className="mb-8 ml-6">
              <span
                className="absolute -left-2.5 mt-1.5 flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-[var(--color-background)]"
                style={{ background: meta.color }}
              />
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-4">
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
                <h3 className="mt-1 text-base font-semibold">{event.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {event.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
