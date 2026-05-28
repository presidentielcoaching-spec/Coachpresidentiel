"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, Square, Trash2, Save, Play } from "lucide-react";
import type { Testimony, TestimonyCategory } from "@/lib/genealogy/types";
import {
  loadTestimonies,
  newId,
  saveTestimonies,
} from "@/lib/genealogy/storage";

const CATEGORIES: TestimonyCategory[] = [
  "Résistance",
  "Marronnage",
  "Spiritualité",
  "Colonisation",
  "Héritage culturel",
  "Diaspora",
  "Transmission",
];

type RecordingState =
  | { status: "idle" }
  | { status: "recording"; startedAt: number }
  | { status: "ready"; blob: Blob; url: string; durationSec: number };

export function MemoryRecorder() {
  const [items, setItems] = useState<Testimony[]>([]);
  const [mounted, setMounted] = useState(false);
  const [recState, setRecState] = useState<RecordingState>({ status: "idle" });
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");
  const [category, setCategory] = useState<TestimonyCategory>("Transmission");
  const [text, setText] = useState("");
  const [filterCat, setFilterCat] = useState<TestimonyCategory | "">("");
  const [error, setError] = useState<string | null>(null);

  const mediaRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    setItems(loadTestimonies());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) saveTestimonies(items);
  }, [items, mounted]);

  async function startRecording() {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      chunksRef.current = [];
      const startedAt = Date.now();
      mr.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, {
          type: mr.mimeType || "audio/webm",
        });
        const url = URL.createObjectURL(blob);
        const durationSec = Math.round((Date.now() - startedAt) / 1000);
        setRecState({ status: "ready", blob, url, durationSec });
        stream.getTracks().forEach((t) => t.stop());
      };
      mr.start();
      mediaRef.current = mr;
      setRecState({ status: "recording", startedAt });
    } catch (err) {
      setError(
        "Impossible d'accéder au microphone. Vérifiez les permissions de votre navigateur.",
      );
      console.error(err);
    }
  }

  function stopRecording() {
    if (mediaRef.current && mediaRef.current.state !== "inactive") {
      mediaRef.current.stop();
    }
  }

  function discardRecording() {
    if (recState.status === "ready") URL.revokeObjectURL(recState.url);
    setRecState({ status: "idle" });
  }

  async function blobToDataUrl(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(String(reader.result));
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    let audioUrl: string | undefined;
    let durationSec: number | undefined;
    if (recState.status === "ready") {
      try {
        audioUrl = await blobToDataUrl(recState.blob);
        durationSec = recState.durationSec;
      } catch {
        setError("Impossible d'enregistrer l'audio localement.");
        return;
      }
    }
    const t: Testimony = {
      id: newId("t"),
      title: title.trim(),
      author: author.trim(),
      category,
      language: language.trim() || undefined,
      durationSec,
      audioUrl,
      text: text.trim() || undefined,
      createdAt: new Date().toISOString(),
    };
    setItems((prev) => [t, ...prev]);
    setTitle("");
    setAuthor("");
    setLanguage("");
    setText("");
    if (recState.status === "ready") URL.revokeObjectURL(recState.url);
    setRecState({ status: "idle" });
  }

  function deleteItem(id: string) {
    setItems((prev) => prev.filter((t) => t.id !== id));
  }

  const filtered = filterCat
    ? items.filter((t) => t.category === filterCat)
    : items;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-6">
        <h2 className="text-lg font-semibold">Nouveau témoignage</h2>
        <p className="mt-1 text-sm text-[var(--color-muted)]">
          Enregistrez la parole d&apos;un ancien, un chant traditionnel, un
          récit familial. L&apos;audio reste sur votre appareil.
        </p>

        <div className="mt-6 rounded-xl border border-dashed border-[var(--color-bronze-500)] bg-[var(--color-background)]/40 p-5 text-center">
          {recState.status === "idle" && (
            <button
              type="button"
              onClick={startRecording}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-terracotta-500)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-terracotta-400)]"
            >
              <Mic size={16} /> Démarrer l&apos;enregistrement
            </button>
          )}
          {recState.status === "recording" && (
            <button
              type="button"
              onClick={stopRecording}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-terracotta-500)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-terracotta-400)]"
            >
              <Square size={14} /> Arrêter — enregistrement en cours…
            </button>
          )}
          {recState.status === "ready" && (
            <div className="flex flex-col items-center gap-3">
              <audio controls src={recState.url} className="w-full max-w-sm" />
              <p className="text-xs text-[var(--color-muted)]">
                Durée : {recState.durationSec} s
              </p>
              <button
                type="button"
                onClick={discardRecording}
                className="text-xs text-[var(--color-terracotta-400)]"
              >
                Réenregistrer
              </button>
            </div>
          )}
          {error && (
            <p className="mt-3 text-xs text-[var(--color-terracotta-400)]">
              {error}
            </p>
          )}
        </div>

        <form onSubmit={handleSave} className="mt-6 grid gap-4">
          <Field label="Titre">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={inputClass}
              placeholder="Chant funéraire de ma grand-mère"
              required
            />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Conteur / autrice">
              <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className={inputClass}
                placeholder="Mamie Solange"
                required
              />
            </Field>
            <Field label="Langue">
              <input
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className={inputClass}
                placeholder="créole, wolof, fon…"
              />
            </Field>
          </div>
          <Field label="Catégorie">
            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value as TestimonyCategory)
              }
              className={inputClass}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Transcription / récit écrit">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className={`${inputClass} min-h-28`}
              placeholder="Retranscrire le récit, traduire, contextualiser…"
            />
          </Field>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-gold-500)] px-5 py-3 text-sm font-semibold text-[var(--color-background)] transition hover:bg-[var(--color-gold-400)]"
          >
            <Save size={16} /> Sauvegarder le témoignage
          </button>
        </form>
      </div>

      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold">
            Bibliothèque ({items.length})
          </h2>
          <select
            value={filterCat}
            onChange={(e) =>
              setFilterCat(e.target.value as TestimonyCategory | "")
            }
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1.5 text-xs"
          >
            <option value="">Toutes catégories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {!mounted ? (
          <p className="mt-4 text-sm text-[var(--color-muted)]">Chargement…</p>
        ) : filtered.length === 0 ? (
          <p className="mt-6 text-sm text-[var(--color-muted)]">
            Aucun témoignage encore. Commencez par enregistrer la voix
            d&apos;un proche, ou inscrivez un récit transmis.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {filtered.map((t) => (
              <li
                key={t.id}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)]/50 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">{t.title}</h3>
                    <p className="text-xs text-[var(--color-muted)]">
                      par {t.author}
                      {t.language && <> · {t.language}</>}
                      {t.durationSec && <> · {t.durationSec}s</>}
                    </p>
                  </div>
                  <span className="rounded-full bg-[var(--color-earth-700)]/50 px-2 py-1 text-[10px] uppercase tracking-widest text-[var(--color-gold-400)]">
                    {t.category}
                  </span>
                </div>

                {t.audioUrl && (
                  <div className="mt-3 flex items-center gap-2">
                    <Play
                      size={14}
                      className="text-[var(--color-gold-400)]"
                    />
                    <audio
                      controls
                      src={t.audioUrl}
                      className="w-full max-w-md"
                    />
                  </div>
                )}

                {t.text && (
                  <p className="mt-3 border-l-2 border-[var(--color-gold-500)] pl-3 text-sm text-[var(--color-muted)]">
                    {t.text}
                  </p>
                )}

                <div className="mt-3 flex items-center justify-between text-[10px] text-[var(--color-muted)]">
                  <span>
                    Enregistré le {new Date(t.createdAt).toLocaleDateString()}
                  </span>
                  <button
                    type="button"
                    onClick={() => deleteItem(t.id)}
                    className="inline-flex items-center gap-1 text-[var(--color-terracotta-500)] hover:text-[var(--color-terracotta-400)]"
                  >
                    <Trash2 size={12} /> Supprimer
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-sm text-[var(--color-foreground)] outline-none transition focus:border-[var(--color-gold-500)]";

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
