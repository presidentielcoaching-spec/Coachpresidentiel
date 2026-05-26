"use client";

import { useEffect, useMemo, useState } from "react";
import { Plus, Trash2, User, X } from "lucide-react";
import type { Gender, Person } from "@/lib/genealogy/types";
import {
  fullName,
  getChildren,
  loadPeople,
  newId,
  savePeople,
} from "@/lib/genealogy/storage";

type FormState = {
  firstName: string;
  lastName: string;
  gender: Gender | "";
  birthDate: string;
  deathDate: string;
  birthPlace: string;
  fatherId: string;
  motherId: string;
  notes: string;
};

const EMPTY_FORM: FormState = {
  firstName: "",
  lastName: "",
  gender: "",
  birthDate: "",
  deathDate: "",
  birthPlace: "",
  fatherId: "",
  motherId: "",
  notes: "",
};

export function FamilyTreeEditor() {
  const [people, setPeople] = useState<Person[]>([]);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setPeople(loadPeople());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) savePeople(people);
  }, [people, mounted]);

  const peopleById = useMemo(
    () => new Map(people.map((p) => [p.id, p])),
    [people],
  );

  const males = people.filter((p) => p.gender !== "F");
  const females = people.filter((p) => p.gender !== "M");

  function startEdit(p: Person) {
    setEditingId(p.id);
    setForm({
      firstName: p.firstName,
      lastName: p.lastName,
      gender: p.gender ?? "",
      birthDate: p.birthDate ?? "",
      deathDate: p.deathDate ?? "",
      birthPlace: p.birthPlace ?? "",
      fatherId: p.fatherId ?? "",
      motherId: p.motherId ?? "",
      notes: p.notes ?? "",
    });
  }

  function resetForm() {
    setEditingId(null);
    setForm(EMPTY_FORM);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.firstName.trim() && !form.lastName.trim()) return;

    const data: Person = {
      id: editingId ?? newId(),
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      gender: form.gender || undefined,
      birthDate: form.birthDate || undefined,
      deathDate: form.deathDate || undefined,
      birthPlace: form.birthPlace.trim() || undefined,
      fatherId: form.fatherId || undefined,
      motherId: form.motherId || undefined,
      notes: form.notes.trim() || undefined,
    };

    setPeople((prev) => {
      const exists = prev.some((p) => p.id === data.id);
      return exists
        ? prev.map((p) => (p.id === data.id ? data : p))
        : [...prev, data];
    });
    resetForm();
  }

  function handleDelete(id: string) {
    setPeople((prev) =>
      prev
        .filter((p) => p.id !== id)
        .map((p) => ({
          ...p,
          fatherId: p.fatherId === id ? undefined : p.fatherId,
          motherId: p.motherId === id ? undefined : p.motherId,
        })),
    );
    if (selectedId === id) setSelectedId(null);
    if (editingId === id) resetForm();
  }

  function renderParents(p: Person) {
    const f = p.fatherId ? peopleById.get(p.fatherId) : undefined;
    const m = p.motherId ? peopleById.get(p.motherId) : undefined;
    if (!f && !m) return null;
    return (
      <div className="text-xs text-[var(--color-muted)]">
        {f && <>père : {fullName(f)} </>}
        {f && m && <>· </>}
        {m && <>mère : {fullName(m)}</>}
      </div>
    );
  }

  const selected = selectedId ? peopleById.get(selectedId) : undefined;
  const selectedChildren = selected
    ? getChildren(people, selected.id)
    : [];

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
      {/* Formulaire d'ajout / édition */}
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            {editingId ? "Modifier la personne" : "Ajouter une personne"}
          </h2>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="text-xs text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
            >
              <X size={14} className="inline" /> annuler
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Prénom">
              <input
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                className={inputClass}
                placeholder="Marie-Joseph"
              />
            </Field>
            <Field label="Nom">
              <input
                value={form.lastName}
                onChange={(e) =>
                  setForm({ ...form, lastName: e.target.value })
                }
                className={inputClass}
                placeholder="Angélique"
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Genre">
              <select
                value={form.gender}
                onChange={(e) =>
                  setForm({ ...form, gender: e.target.value as Gender | "" })
                }
                className={inputClass}
              >
                <option value="">—</option>
                <option value="M">Homme</option>
                <option value="F">Femme</option>
                <option value="X">Autre</option>
              </select>
            </Field>
            <Field label="Lieu de naissance">
              <input
                value={form.birthPlace}
                onChange={(e) =>
                  setForm({ ...form, birthPlace: e.target.value })
                }
                className={inputClass}
                placeholder="Saint-Pierre, Martinique"
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Date de naissance">
              <input
                type="date"
                value={form.birthDate}
                onChange={(e) =>
                  setForm({ ...form, birthDate: e.target.value })
                }
                className={inputClass}
              />
            </Field>
            <Field label="Date de décès">
              <input
                type="date"
                value={form.deathDate}
                onChange={(e) =>
                  setForm({ ...form, deathDate: e.target.value })
                }
                className={inputClass}
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Père">
              <select
                value={form.fatherId}
                onChange={(e) =>
                  setForm({ ...form, fatherId: e.target.value })
                }
                className={inputClass}
              >
                <option value="">—</option>
                {males
                  .filter((p) => p.id !== editingId)
                  .map((p) => (
                    <option key={p.id} value={p.id}>
                      {fullName(p)}
                    </option>
                  ))}
              </select>
            </Field>
            <Field label="Mère">
              <select
                value={form.motherId}
                onChange={(e) =>
                  setForm({ ...form, motherId: e.target.value })
                }
                className={inputClass}
              >
                <option value="">—</option>
                {females
                  .filter((p) => p.id !== editingId)
                  .map((p) => (
                    <option key={p.id} value={p.id}>
                      {fullName(p)}
                    </option>
                  ))}
              </select>
            </Field>
          </div>

          <Field label="Notes">
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className={`${inputClass} min-h-20`}
              placeholder="Anecdotes, profession, lieux de vie…"
            />
          </Field>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-gold-500)] px-5 py-3 text-sm font-semibold text-[var(--color-background)] transition hover:bg-[var(--color-gold-400)]"
          >
            <Plus size={16} />
            {editingId ? "Enregistrer" : "Ajouter au registre familial"}
          </button>
        </form>
      </div>

      {/* Liste des personnes */}
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Registre familial ({people.length})
          </h2>
          {selected && (
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              className="text-xs text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
            >
              <X size={14} className="inline" /> désélectionner
            </button>
          )}
        </div>

        {!mounted ? (
          <p className="mt-6 text-sm text-[var(--color-muted)]">Chargement…</p>
        ) : people.length === 0 ? (
          <p className="mt-6 text-sm text-[var(--color-muted)]">
            Aucune personne enregistrée. Ajoutez d&apos;abord les plus anciens
            ancêtres connus pour pouvoir ensuite leur rattacher des descendants.
          </p>
        ) : (
          <ul className="mt-4 max-h-[640px] space-y-2 overflow-y-auto pr-2">
            {people.map((p) => (
              <li
                key={p.id}
                className={`rounded-xl border p-3 transition ${
                  selectedId === p.id
                    ? "border-[var(--color-gold-500)] bg-[var(--color-primary-800)]/30"
                    : "border-[var(--color-border)] bg-[var(--color-surface-elevated)]/50"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedId(p.id)}
                    className="flex flex-1 items-start gap-3 text-left"
                  >
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-700)] text-[var(--color-gold-400)]">
                      <User size={14} />
                    </span>
                    <div>
                      <p className="font-semibold">{fullName(p)}</p>
                      <p className="text-xs text-[var(--color-muted)]">
                        {[p.birthDate, p.deathDate].filter(Boolean).join(" — ")}
                        {p.birthPlace && <> · {p.birthPlace}</>}
                      </p>
                      {renderParents(p)}
                    </div>
                  </button>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => startEdit(p)}
                      className="rounded-md border border-[var(--color-border)] px-2 py-1 text-xs hover:border-[var(--color-primary-400)]"
                    >
                      Modifier
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(p.id)}
                      className="rounded-md border border-[var(--color-border)] px-2 py-1 text-xs text-[var(--color-african-red)] hover:border-[var(--color-african-red)]"
                      aria-label="Supprimer"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>

                {selectedId === p.id && (
                  <div className="mt-3 border-t border-[var(--color-border)] pt-3 text-sm">
                    {p.notes && (
                      <p className="text-[var(--color-muted)]">{p.notes}</p>
                    )}
                    <div className="mt-2 text-xs text-[var(--color-muted)]">
                      Enfants directs :{" "}
                      {selectedChildren.length === 0
                        ? "aucun enregistré"
                        : selectedChildren
                            .map((c) => fullName(c))
                            .join(", ")}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-sm text-[var(--color-foreground)] outline-none transition focus:border-[var(--color-primary-400)]";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs uppercase tracking-widest text-[var(--color-muted)]">
        {label}
      </span>
      {children}
    </label>
  );
}
