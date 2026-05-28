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
  const [ethnie, setEthnie] = useState("");
  const [plantation, setPlantation] = useState("");
  const [period, setPeriod] = useState("");

  const all = useMemo(
    () => SAMPLE_ARCHIVES.filter((r) => r.type === type),
    [type],
  );

  const facets = useMemo(() => {
    const locs = new Set<string>();
    const eths = new Set<string>();
    const plants = new Set<string>();
    for (const r of all) {
      if (r.location) locs.add(r.location);
      if (r.ethnie) eths.add(r.ethnie);
      if (r.plantation) plants.add(r.plantation);
    }
    return {
      locations: [...locs].sort(),
      ethnies: [...eths].sort(),
      plantations: [...plants].sort(),
    };
  }, [all]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((r) => {
      if (location && r.location !== location) return false;
      if (ethnie && r.ethnie !== ethnie) return false;
      if (plantation && r.plantation !== plantation) return false;
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
        r.ethnie,
        r.plantation,
        r.ship,
        r.notes,
        r.source,
        r.location,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [all, query, location, ethnie, plantation, period]);

  const hasEthnie = facets.ethnies.length > 0;
  const hasPlantation = facets.plantations.length > 0;

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

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <label className="block lg:col-span-2">
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
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] py-2 pl-9 pr-3 text-sm outline-none focus:border-[var(--color-gold-500)]"
              placeholder="Nom, ethnie, plantation, navire, source…"
            />
          </div>
        </label>

        <FilterSelect
          label="Lieu"
          value={location}
          onChange={setLocation}
          options={facets.locations}
          placeholder="Tous les lieux"
        />

        <FilterSelect
          label="Période"
          value={period}
          onChange={setPeriod}
          options={["<1800", "1800-1850", "1850-1900", ">1900"]}
          placeholder="Toutes périodes"
        />

        {hasEthnie && (
          <FilterSelect
            label="Ethnie"
            value={ethnie}
            onChange={setEthnie}
            options={facets.ethnies}
            placeholder="Toutes les ethnies"
          />
        )}

        {hasPlantation && (
          <FilterSelect
            label="Plantation"
            value={plantation}
            onChange={setPlantation}
            options={facets.plantations}
            placeholder="Toutes les plantations"
          />
        )}
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
            Aucune fiche ne correspond à votre recherche.
          </p>
        )}
      </div>
    </section>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs uppercase tracking-widest text-[var(--color-muted)]">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-sm outline-none focus:border-[var(--color-gold-500)]"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function RecordCard({ record }: { record: ArchiveRecord }) {
  return (
    <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-5">
      <h3 className="font-serif text-lg font-semibold">{record.name}</h3>
      <p className="mt-0.5 text-xs text-[var(--color-muted)]">
        {[record.date, record.age, record.location]
          .filter(Boolean)
          .join(" · ")}
      </p>

      <dl className="mt-4 space-y-2 text-sm">
        {record.court && <Row label="Juridiction" value={record.court} />}
        {record.origin && <Row label="Origine" value={record.origin} />}
        {record.destination && (
          <Row label="Destination" value={record.destination} />
        )}
        {record.ethnie && <Row label="Ethnie" value={record.ethnie} />}
        {record.plantation && (
          <Row label="Plantation" value={record.plantation} />
        )}
        {record.ship && <Row label="Navire" value={record.ship} />}
        {record.owner && <Row label="Propriétaire" value={record.owner} />}
      </dl>

      {record.verdict && (
        <div className="mt-4 rounded-lg border border-[var(--color-bronze-500)]/40 bg-[var(--color-earth-700)]/30 p-3">
          <p className="text-[10px] uppercase tracking-widest text-[var(--color-gold-400)]">
            Verdict
          </p>
          <p className="mt-1 text-sm">{record.verdict}</p>
        </div>
      )}

      {record.figures && record.figures.length > 0 && (
        <div className="mt-3">
          <p className="text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
            Figures
          </p>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {record.figures.map((f) => (
              <span
                key={f}
                className="rounded-full border border-[var(--color-bronze-500)]/40 bg-[var(--color-surface-elevated)]/60 px-2 py-0.5 text-[11px]"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      )}

      {record.notes && (
        <p className="mt-3 border-l-2 border-[var(--color-gold-500)] pl-3 text-sm text-[var(--color-muted)]">
          {record.notes}
        </p>
      )}

      {record.archiveRef && (
        <p className="mt-3 font-mono text-[11px] text-[var(--color-bronze-300)]">
          Cote · {record.archiveRef}
        </p>
      )}

      <p className="mt-3 text-xs uppercase tracking-widest text-[var(--color-gold-400)]">
        Source · {record.source}
      </p>

      {record.externalLinks && record.externalLinks.length > 0 && (
        <ul className="mt-3 space-y-1 text-xs">
          {record.externalLinks.map((l) => (
            <li key={l.label}>
              {l.url ? (
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-gold-400)] underline-offset-2 hover:underline"
                >
                  ↗ {l.label}
                </a>
              ) : (
                <span className="text-[var(--color-muted)]">↗ {l.label}</span>
              )}
            </li>
          ))}
        </ul>
      )}
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
