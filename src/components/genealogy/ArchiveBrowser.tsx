"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { ArchiveRecord, ArchiveType } from "@/lib/genealogy/types";
import { ARCHIVE_LABELS, SAMPLE_ARCHIVES } from "@/lib/genealogy/sample-data";

type Props = {
  type: ArchiveType;
};

export function ArchiveBrowser({ type }: Props) {
  const labels = ARCHIVE_LABELS[type];
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [period, setPeriod] = useState("");

  const all = useMemo(
    () => SAMPLE_ARCHIVES.filter((r) => r.type === type),
    [type],
  );

  const locations = useMemo(() => {
    const set = new Set<string>();
    for (const r of all) {
      if (r.location) set.add(r.location);
    }
    return Array.from(set).sort();
  }, [all]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((r) => {
      if (location && r.location !== location) return false;
      if (period) {
        const year = r.date ? Number(r.date.slice(0, 4)) : null;
        if (!year) return false;
        if (period === "<1800" && year >= 1800) return false;
        if (period === "1800-1850" && (year < 1800 || year > 1850))
          return false;
        if (period === "1850-1900" && (year < 1850 || year > 1900))
          return false;
        if (period === ">1900" && year <= 1900) return false;
      }
      if (!q) return true;
      const haystack = [
        r.name,
        r.origin,
        r.destination,
        r.owner,
        r.notes,
        r.source,
        r.location,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [all, query, location, period]);

  return (
    <section>
      <header className="border-b border-[var(--color-border)] pb-6">
        <p className="text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
          Fonds d&apos;archives
        </p>
        <h1 className="mt-2 text-3xl font-bold md:text-4xl">{labels.title}</h1>
        <p className="mt-2 max-w-2xl text-[var(--color-muted)]">
          {labels.subtitle}
        </p>
        <p className="mt-3 text-xs text-[var(--color-muted)]">
          Sources de référence : {labels.sourceHint}
        </p>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-[2fr_1fr_1fr]">
        <label className="block">
          <span className="mb-1 block text-xs uppercase tracking-widest text-[var(--color-muted)]">
            Rechercher
          </span>
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] py-2 pl-9 pr-3 text-sm outline-none focus:border-[var(--color-primary-400)]"
              placeholder="Nom, origine, lieu, propriétaire…"
            />
          </div>
        </label>

        <label className="block">
          <span className="mb-1 block text-xs uppercase tracking-widest text-[var(--color-muted)]">
            Lieu
          </span>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-sm outline-none focus:border-[var(--color-primary-400)]"
          >
            <option value="">Tous les lieux</option>
            {locations.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-xs uppercase tracking-widest text-[var(--color-muted)]">
            Période
          </span>
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-sm outline-none focus:border-[var(--color-primary-400)]"
          >
            <option value="">Toutes périodes</option>
            <option value="<1800">Avant 1800</option>
            <option value="1800-1850">1800 — 1850</option>
            <option value="1850-1900">1850 — 1900</option>
            <option value=">1900">Après 1900</option>
          </select>
        </label>
      </div>

      <p className="mt-6 text-sm text-[var(--color-muted)]">
        {filtered.length} résultat{filtered.length > 1 ? "s" : ""} sur{" "}
        {all.length} fiches indexées.
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {filtered.map((r) => (
          <RecordCard key={r.id} record={r} />
        ))}
        {filtered.length === 0 && (
          <p className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 p-6 text-sm text-[var(--color-muted)] md:col-span-2">
            Aucune fiche ne correspond à votre recherche. Essayez d&apos;élargir
            les critères.
          </p>
        )}
      </div>
    </section>
  );
}

function RecordCard({ record }: { record: ArchiveRecord }) {
  return (
    <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold">{record.name}</h3>
          <p className="mt-0.5 text-xs text-[var(--color-muted)]">
            {[record.date, record.age, record.location]
              .filter(Boolean)
              .join(" · ")}
          </p>
        </div>
      </div>

      <dl className="mt-4 space-y-2 text-sm">
        {record.origin && (
          <Row label="Origine" value={record.origin} />
        )}
        {record.destination && (
          <Row label="Destination" value={record.destination} />
        )}
        {record.owner && <Row label="Propriétaire" value={record.owner} />}
      </dl>

      {record.notes && (
        <p className="mt-3 border-l-2 border-[var(--color-gold-500)] pl-3 text-sm text-[var(--color-muted)]">
          {record.notes}
        </p>
      )}

      <p className="mt-4 text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
        Source · {record.source}
      </p>
    </article>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <dt className="w-28 shrink-0 text-xs uppercase tracking-widest text-[var(--color-muted)]">
        {label}
      </dt>
      <dd className="text-sm">{value}</dd>
    </div>
  );
}
