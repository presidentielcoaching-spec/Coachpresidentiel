"use client";

import { useEffect, useMemo, useState } from "react";
import { User } from "lucide-react";
import type { Person } from "@/lib/genealogy/types";
import { fullName, getChildren, loadPeople } from "@/lib/genealogy/storage";

export function DescendantTree() {
  const [people, setPeople] = useState<Person[]>([]);
  const [rootId, setRootId] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setPeople(loadPeople());
    setMounted(true);
  }, []);

  const rootCandidates = useMemo(() => {
    const childIds = new Set<string>();
    for (const p of people) {
      if (p.fatherId || p.motherId) childIds.add(p.id);
    }
    const roots = people.filter((p) => !childIds.has(p.id));
    return roots.length > 0 ? roots : people;
  }, [people]);

  useEffect(() => {
    if (!rootId && rootCandidates[0]) setRootId(rootCandidates[0].id);
  }, [rootCandidates, rootId]);

  const root = people.find((p) => p.id === rootId);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-6">
        <label className="block">
          <span className="mb-1 block text-xs uppercase tracking-widest text-[var(--color-muted)]">
            Aïeul de référence
          </span>
          <select
            value={rootId}
            onChange={(e) => setRootId(e.target.value)}
            className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-sm outline-none focus:border-[var(--color-primary-400)]"
          >
            <option value="">— sélectionner —</option>
            {people.map((p) => (
              <option key={p.id} value={p.id}>
                {fullName(p)}
                {p.birthDate ? ` (${p.birthDate.slice(0, 4)})` : ""}
              </option>
            ))}
          </select>
        </label>
        <p className="mt-2 text-xs text-[var(--color-muted)]">
          Astuce : commencez par votre plus ancien ancêtre connu pour voir
          s&apos;épanouir toute sa descendance.
        </p>
      </div>

      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/30 p-6 md:p-10">
        {!mounted ? (
          <p className="text-sm text-[var(--color-muted)]">Chargement…</p>
        ) : people.length === 0 ? (
          <p className="text-sm text-[var(--color-muted)]">
            Aucune personne dans le registre. Commencez par ajouter des
            membres dans l&apos;onglet « Arbre généalogique ».
          </p>
        ) : root ? (
          <div className="overflow-x-auto">
            <Branch person={root} people={people} level={0} />
          </div>
        ) : (
          <p className="text-sm text-[var(--color-muted)]">
            Sélectionnez une personne pour afficher sa descendance.
          </p>
        )}
      </div>
    </div>
  );
}

function Branch({
  person,
  people,
  level,
}: {
  person: Person;
  people: Person[];
  level: number;
}) {
  const children = getChildren(people, person.id);
  return (
    <div className="relative">
      <PersonCard person={person} level={level} />
      {children.length > 0 && (
        <div className="ml-6 mt-3 border-l border-dashed border-[var(--color-border)] pl-6">
          <ul className="space-y-3">
            {children.map((child) => (
              <li key={child.id}>
                <Branch person={child} people={people} level={level + 1} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function PersonCard({ person, level }: { person: Person; level: number }) {
  const dates = [person.birthDate, person.deathDate].filter(Boolean).join(" — ");
  return (
    <div
      className={`inline-flex items-start gap-3 rounded-xl border border-[var(--color-border)] p-3 ${
        level === 0
          ? "bg-[var(--color-earth-700)]/50"
          : "bg-[var(--color-surface-elevated)]/60"
      }`}
    >
      <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-earth-700)] text-[var(--color-gold-400)]">
        <User size={14} />
      </span>
      <div>
        <p className="text-sm font-semibold">{fullName(person)}</p>
        {(dates || person.birthPlace) && (
          <p className="text-xs text-[var(--color-muted)]">
            {dates}
            {person.birthPlace && (dates ? ` · ${person.birthPlace}` : person.birthPlace)}
          </p>
        )}
      </div>
    </div>
  );
}
