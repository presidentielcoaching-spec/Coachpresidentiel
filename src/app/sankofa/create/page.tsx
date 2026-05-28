"use client";

import { useState } from "react";
import {
  Upload,
  Wand2,
  Sparkles,
  ShieldCheck,
  Layers,
  Music2,
  Ticket,
  Building2,
  Image as ImageIcon,
  ChevronRight,
} from "lucide-react";
import { CATEGORIES, CHAINS } from "@/lib/sankofa/data";

const NFT_TYPES = [
  { id: "image", label: "Œuvre visuelle", Icon: ImageIcon },
  { id: "music", label: "Musique / Audio", Icon: Music2 },
  { id: "ticket", label: "Billet NFT", Icon: Ticket },
  { id: "realestate", label: "Immobilier tokenisé", Icon: Building2 },
];

export default function CreatePage() {
  const [type, setType] = useState("image");
  const [chain, setChain] = useState(CHAINS[0].id);
  const [category, setCategory] = useState(CATEGORIES[0].id);
  const [name, setName] = useState("");
  const [supply, setSupply] = useState("1");
  const [royalties, setRoyalties] = useState("7.5");
  const [useAi, setUseAi] = useState(true);
  const [aiPrompt, setAiPrompt] = useState(
    "Adinkra symbol mixed with cosmic nebula, gold and bronze hues, hyperreal cinematic.",
  );

  return (
    <div className="relative">
      <div className="border-b border-[var(--color-sankofa-border)] sankofa-cosmos-bg">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <span className="sankofa-chip">
            <Sparkles size={11} /> Création · Mint NFT
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-sankofa-gold">Donnez vie à votre œuvre.</span>
            <br />
            <span className="text-[var(--color-sankofa-ivory)]">
              Frappez-la sur la blockchain.
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[var(--color-sankofa-muted)] md:text-base">
            Mint mono-pièce, edition limitée ou collection complète. Royalties
            programmables, IA générative en option, IPFS + Filecoin pour la
            pérennité.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.3fr_1fr]">
        {/* Form */}
        <div className="space-y-6">
          <div className="sankofa-glass rounded-3xl p-6">
            <h3 className="text-xs uppercase tracking-[0.22em] text-[var(--color-sankofa-gold-400)]">
              1 · Type de NFT
            </h3>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {NFT_TYPES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setType(t.id)}
                  className={`flex flex-col items-center gap-2 rounded-2xl border px-3 py-4 text-xs transition ${
                    type === t.id
                      ? "border-[var(--color-sankofa-gold-500)]/70 bg-[var(--color-sankofa-gold-500)]/15 text-[var(--color-sankofa-gold-200)]"
                      : "border-[var(--color-sankofa-border)] bg-black/30 text-[var(--color-sankofa-ivory-soft)] hover:border-[var(--color-sankofa-gold-500)]/50"
                  }`}
                >
                  <t.Icon size={18} />
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="sankofa-glass rounded-3xl p-6">
            <h3 className="text-xs uppercase tracking-[0.22em] text-[var(--color-sankofa-gold-400)]">
              2 · Média
            </h3>
            <div className="mt-3 rounded-2xl border border-dashed border-[var(--color-sankofa-gold-500)]/40 bg-black/30 px-6 py-10 text-center">
              <Upload size={22} className="mx-auto text-[var(--color-sankofa-gold-300)]" />
              <div className="mt-3 text-sm text-[var(--color-sankofa-ivory)]">
                Glissez votre fichier ici
              </div>
              <div className="mt-1 text-[11px] text-[var(--color-sankofa-muted)]">
                PNG · JPG · GIF · MP4 · GLB · MP3 · WAV — jusqu'à 200 MB
              </div>
              <button className="sankofa-btn-ghost mt-4 px-4 py-2 text-xs">
                Choisir un fichier
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-2xl border border-[var(--color-sankofa-border)] bg-black/30 px-4 py-3">
              <div className="flex items-center gap-3">
                <Wand2 size={14} className="text-[var(--color-sankofa-gold-300)]" />
                <div>
                  <div className="text-sm text-[var(--color-sankofa-ivory)]">
                    Utiliser le studio IA Sankofa
                  </div>
                  <div className="text-[11px] text-[var(--color-sankofa-muted)]">
                    Génération haute qualité, style transfer Adinkra/Ndebele/Nsibidi.
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                checked={useAi}
                onChange={(e) => setUseAi(e.target.checked)}
                className="h-4 w-4 accent-[var(--color-sankofa-gold-500)]"
              />
            </div>
            {useAi && (
              <div className="mt-3">
                <label className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
                  Prompt IA
                </label>
                <textarea
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  rows={3}
                  className="mt-1 w-full rounded-2xl border border-[var(--color-sankofa-border)] bg-black/40 px-3 py-2 text-sm text-[var(--color-sankofa-ivory)] focus:border-[var(--color-sankofa-gold-500)] focus:outline-none"
                />
                <div className="mt-2 flex justify-end">
                  <button className="sankofa-btn-gold inline-flex items-center gap-2 px-4 py-2 text-xs">
                    <Wand2 size={12} /> Générer 4 variantes
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="sankofa-glass rounded-3xl p-6">
            <h3 className="text-xs uppercase tracking-[0.22em] text-[var(--color-sankofa-gold-400)]">
              3 · Métadonnées
            </h3>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <Field label="Nom de l'œuvre">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sankofa Bird A01"
                  className="sankofa-input"
                />
              </Field>
              <Field label="Catégorie">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as typeof category)}
                  className="sankofa-input"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Blockchain">
                <select
                  value={chain}
                  onChange={(e) => setChain(e.target.value as typeof chain)}
                  className="sankofa-input"
                >
                  {CHAINS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} · {c.symbol}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Supply">
                <input
                  type="number"
                  min={1}
                  value={supply}
                  onChange={(e) => setSupply(e.target.value)}
                  className="sankofa-input"
                />
              </Field>
              <Field label="Royalties (%)">
                <input
                  type="number"
                  step="0.1"
                  min={0}
                  max={20}
                  value={royalties}
                  onChange={(e) => setRoyalties(e.target.value)}
                  className="sankofa-input"
                />
              </Field>
              <Field label="Storage">
                <select className="sankofa-input" defaultValue="ipfs-fil">
                  <option value="ipfs-fil">IPFS + Filecoin (recommandé)</option>
                  <option value="arweave">Arweave</option>
                  <option value="s3">AWS S3</option>
                </select>
              </Field>
              <Field label="Description" full>
                <textarea
                  rows={4}
                  placeholder="Racontez l'histoire de votre œuvre, sa source culturelle, son rituel d'inspiration…"
                  className="sankofa-input min-h-[100px]"
                />
              </Field>
            </div>
          </div>

          <div className="sankofa-glass rounded-3xl p-6">
            <h3 className="text-xs uppercase tracking-[0.22em] text-[var(--color-sankofa-gold-400)]">
              4 · Vente
            </h3>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {[
                { id: "fixed", label: "Prix fixe", desc: "Vente immédiate" },
                { id: "auction", label: "Enchère", desc: "Durée 24h-7j" },
                { id: "open", label: "Édition ouverte", desc: "Mint pendant 24h" },
              ].map((s) => (
                <label
                  key={s.id}
                  className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[var(--color-sankofa-border)] bg-black/30 p-4 transition hover:border-[var(--color-sankofa-gold-500)]/50"
                >
                  <input
                    type="radio"
                    name="sale"
                    defaultChecked={s.id === "fixed"}
                    className="mt-1 accent-[var(--color-sankofa-gold-500)]"
                  />
                  <div>
                    <div className="text-sm font-semibold text-[var(--color-sankofa-ivory)]">
                      {s.label}
                    </div>
                    <div className="text-[11px] text-[var(--color-sankofa-muted)]">
                      {s.desc}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="sankofa-btn-gold inline-flex items-center gap-2 px-6 py-3 text-sm">
              <Sparkles size={14} /> Mint le NFT
              <ChevronRight size={14} />
            </button>
            <button className="sankofa-btn-ghost inline-flex items-center gap-2 px-6 py-3 text-sm">
              Sauvegarder en brouillon
            </button>
          </div>
        </div>

        {/* Preview */}
        <aside className="space-y-4">
          <div className="sankofa-glass rounded-3xl overflow-hidden">
            <div className="aspect-square sankofa-shimmer" style={{
              background:
                "conic-gradient(from 45deg at 60% 40%, #f7e7a4, #cd7f32, #1e3a8a, #050309, #f7e7a4)",
            }} />
            <div className="px-5 py-4">
              <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-gold-400)]">
                Aperçu en direct
              </div>
              <div className="mt-1 text-base font-semibold text-[var(--color-sankofa-ivory)]">
                {name || "Sans titre"}
              </div>
              <div className="mt-0.5 text-xs text-[var(--color-sankofa-muted)]">
                {supply} édition{+supply > 1 ? "s" : ""} · {royalties}% royalties
              </div>
            </div>
          </div>

          <div className="sankofa-glass rounded-3xl p-5">
            <h4 className="text-xs uppercase tracking-[0.22em] text-[var(--color-sankofa-gold-400)]">
              Coûts estimés
            </h4>
            <div className="mt-3 space-y-2 text-sm">
              <Row label="Gas blockchain" value="~0,0023 ETH" />
              <Row label="Pin IPFS" value="Gratuit" />
              <Row label="Frais plateforme" value="2,5% à la vente" />
              <Row label="Frais artiste (royalties)" value={`${royalties}%`} />
            </div>
          </div>

          <div className="sankofa-glass rounded-3xl p-5">
            <h4 className="text-xs uppercase tracking-[0.22em] text-[var(--color-sankofa-gold-400)]">
              Protections automatiques
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-sankofa-ivory-soft)]">
              <li className="flex items-start gap-2">
                <ShieldCheck size={14} className="mt-0.5 text-emerald-300" />
                Vérification anti-copy NFT (perceptual hashing)
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck size={14} className="mt-0.5 text-emerald-300" />
                Détection automatique de droits d'auteur tiers
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck size={14} className="mt-0.5 text-emerald-300" />
                Contrats audités SlowMist + CertiK
              </li>
              <li className="flex items-start gap-2">
                <Layers size={14} className="mt-0.5 text-[var(--color-sankofa-gold-300)]" />
                Backup permanent IPFS + Filecoin (200 ans)
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <style jsx global>{`
        .sankofa-input {
          width: 100%;
          height: 40px;
          border-radius: 0.85rem;
          border: 1px solid var(--color-sankofa-border);
          background: rgba(0, 0, 0, 0.35);
          color: var(--color-sankofa-ivory);
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
        }
        .sankofa-input:focus {
          border-color: var(--color-sankofa-gold-500);
          outline: none;
        }
        textarea.sankofa-input {
          height: auto;
          padding-top: 0.6rem;
          padding-bottom: 0.6rem;
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? "md:col-span-2" : undefined}>
      <label className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
        {label}
      </label>
      <div className="mt-1">{children}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-[var(--color-sankofa-border)] pb-2 text-[var(--color-sankofa-ivory-soft)] last:border-0">
      <span>{label}</span>
      <span className="font-semibold text-[var(--color-sankofa-ivory)]">
        {value}
      </span>
    </div>
  );
}
