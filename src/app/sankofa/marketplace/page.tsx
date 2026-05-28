"use client";

import { useMemo, useState } from "react";
import { Filter, Search, SlidersHorizontal, Grid3x3, Rows3 } from "lucide-react";
import { CATEGORIES, CHAINS, NFTS } from "@/lib/sankofa/data";
import { NftCard } from "@/components/sankofa/NftCard";
import type { Category, Chain, Nft } from "@/lib/sankofa/types";

type Sort = "trending" | "recent" | "price-asc" | "price-desc" | "auctions";

const SORTS: { id: Sort; label: string }[] = [
  { id: "trending", label: "Tendance" },
  { id: "recent", label: "Plus récents" },
  { id: "price-asc", label: "Prix croissant" },
  { id: "price-desc", label: "Prix décroissant" },
  { id: "auctions", label: "Enchères live" },
];

const RARITIES: Nft["rarity"][] = [
  "Common",
  "Rare",
  "Epic",
  "Mythic",
  "One of One",
];

export default function MarketplacePage() {
  const [query, setQuery] = useState("");
  const [cats, setCats] = useState<Set<Category>>(new Set());
  const [chains, setChains] = useState<Set<Chain>>(new Set());
  const [rarities, setRarities] = useState<Set<Nft["rarity"]>>(new Set());
  const [priceMin, setPriceMin] = useState<string>("");
  const [priceMax, setPriceMax] = useState<string>("");
  const [onlyAuctions, setOnlyAuctions] = useState(false);
  const [sort, setSort] = useState<Sort>("trending");
  const [view, setView] = useState<"grid" | "rows">("grid");
  const [showFilters, setShowFilters] = useState(true);

  const filtered = useMemo(() => {
    let list = NFTS.slice();
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((n) => n.name.toLowerCase().includes(q));
    }
    if (cats.size) list = list.filter((n) => cats.has(n.category));
    if (chains.size) list = list.filter((n) => chains.has(n.chain));
    if (rarities.size) list = list.filter((n) => rarities.has(n.rarity));
    if (priceMin) list = list.filter((n) => n.price >= +priceMin);
    if (priceMax) list = list.filter((n) => n.price <= +priceMax);
    if (onlyAuctions || sort === "auctions") list = list.filter((n) => n.auction);

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "recent":
        list.reverse();
        break;
      case "auctions":
        list.sort((a, b) => (b.auction?.bids ?? 0) - (a.auction?.bids ?? 0));
        break;
      default:
        list.sort((a, b) => b.likes - a.likes);
    }
    return list;
  }, [query, cats, chains, rarities, priceMin, priceMax, onlyAuctions, sort]);

  function toggleSet<T>(set: Set<T>, value: T, setter: (s: Set<T>) => void) {
    const ns = new Set(set);
    if (ns.has(value)) ns.delete(value);
    else ns.add(value);
    setter(ns);
  }

  return (
    <div className="relative">
      {/* Header */}
      <div className="relative border-b border-[var(--color-sankofa-border)] sankofa-cosmos-bg">
        <div className="absolute inset-0 sankofa-grid-bg opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6 py-14">
          <span className="sankofa-chip">Marketplace</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-sankofa-gold">Toutes les œuvres.</span>{" "}
            <span className="text-[var(--color-sankofa-ivory)]">
              Un seul marché.
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[var(--color-sankofa-muted)] md:text-base">
            {NFTS.length} œuvres listées · 8 collections actives · 5 chaînes ·
            curation IA en temps réel.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Toolbar */}
        <div className="sankofa-glass flex flex-col gap-3 rounded-2xl p-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search
              size={14}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-sankofa-muted)]"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher des œuvres, collections, artistes…"
              className="h-10 w-full rounded-xl border border-[var(--color-sankofa-border)] bg-black/40 pl-10 pr-3 text-sm text-[var(--color-sankofa-ivory)] placeholder:text-[var(--color-sankofa-muted)] focus:border-[var(--color-sankofa-gold-500)] focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="h-10 rounded-xl border border-[var(--color-sankofa-border)] bg-black/40 px-3 text-sm text-[var(--color-sankofa-ivory)] focus:border-[var(--color-sankofa-gold-500)] focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => setShowFilters((v) => !v)}
              className="sankofa-btn-ghost inline-flex h-10 items-center gap-2 px-3 text-xs"
            >
              <SlidersHorizontal size={13} /> Filtres
            </button>
            <div className="hidden md:flex overflow-hidden rounded-xl border border-[var(--color-sankofa-border)]">
              <button
                onClick={() => setView("grid")}
                className={`grid h-10 w-10 place-items-center ${view === "grid" ? "bg-[var(--color-sankofa-gold-500)]/15 text-[var(--color-sankofa-gold-300)]" : "text-[var(--color-sankofa-muted)]"}`}
                aria-label="Grille"
              >
                <Grid3x3 size={14} />
              </button>
              <button
                onClick={() => setView("rows")}
                className={`grid h-10 w-10 place-items-center ${view === "rows" ? "bg-[var(--color-sankofa-gold-500)]/15 text-[var(--color-sankofa-gold-300)]" : "text-[var(--color-sankofa-muted)]"}`}
                aria-label="Liste"
              >
                <Rows3 size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Filters sidebar */}
          {showFilters && (
            <aside className="sankofa-glass h-fit rounded-3xl p-5">
              <div className="mb-2 flex items-center gap-2">
                <Filter size={13} className="text-[var(--color-sankofa-gold-400)]" />
                <h3 className="text-xs uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
                  Affiner
                </h3>
              </div>

              <FilterGroup title="Catégorie">
                <div className="flex flex-wrap gap-1.5">
                  {CATEGORIES.map((c) => (
                    <Chip
                      key={c.id}
                      active={cats.has(c.id)}
                      onClick={() => toggleSet(cats, c.id, setCats)}
                    >
                      {c.label}
                    </Chip>
                  ))}
                </div>
              </FilterGroup>

              <FilterGroup title="Blockchain">
                <div className="flex flex-wrap gap-1.5">
                  {CHAINS.map((c) => (
                    <Chip
                      key={c.id}
                      active={chains.has(c.id)}
                      onClick={() => toggleSet(chains, c.id, setChains)}
                      color={c.color}
                    >
                      {c.name}
                    </Chip>
                  ))}
                </div>
              </FilterGroup>

              <FilterGroup title="Rareté">
                <div className="flex flex-wrap gap-1.5">
                  {RARITIES.map((r) => (
                    <Chip
                      key={r}
                      active={rarities.has(r)}
                      onClick={() => toggleSet(rarities, r, setRarities)}
                    >
                      {r}
                    </Chip>
                  ))}
                </div>
              </FilterGroup>

              <FilterGroup title="Prix">
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceMin}
                    onChange={(e) => setPriceMin(e.target.value)}
                    className="h-9 w-full rounded-lg border border-[var(--color-sankofa-border)] bg-black/40 px-2 text-xs text-[var(--color-sankofa-ivory)]"
                  />
                  <span className="text-xs text-[var(--color-sankofa-muted)]">à</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceMax}
                    onChange={(e) => setPriceMax(e.target.value)}
                    className="h-9 w-full rounded-lg border border-[var(--color-sankofa-border)] bg-black/40 px-2 text-xs text-[var(--color-sankofa-ivory)]"
                  />
                </div>
              </FilterGroup>

              <FilterGroup title="Statut">
                <label className="flex items-center gap-2 text-xs text-[var(--color-sankofa-ivory-soft)]">
                  <input
                    type="checkbox"
                    checked={onlyAuctions}
                    onChange={(e) => setOnlyAuctions(e.target.checked)}
                    className="h-4 w-4 accent-[var(--color-sankofa-gold-500)]"
                  />
                  Enchères en cours uniquement
                </label>
              </FilterGroup>

              <button
                onClick={() => {
                  setCats(new Set());
                  setChains(new Set());
                  setRarities(new Set());
                  setPriceMin("");
                  setPriceMax("");
                  setOnlyAuctions(false);
                  setQuery("");
                }}
                className="mt-2 w-full sankofa-btn-ghost rounded-full py-2 text-xs"
              >
                Réinitialiser
              </button>
            </aside>
          )}

          {/* Grid */}
          <div>
            <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
              <span>{filtered.length} résultats</span>
              <span>
                Vue : {view === "grid" ? "Grille" : "Liste"}
              </span>
            </div>
            {filtered.length === 0 ? (
              <div className="sankofa-glass rounded-3xl p-10 text-center text-sm text-[var(--color-sankofa-muted)]">
                Aucune œuvre ne correspond à vos filtres.
              </div>
            ) : view === "grid" ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((n) => (
                  <NftCard key={n.id} nft={n} />
                ))}
              </div>
            ) : (
              <div className="space-y-2.5">
                {filtered.map((n) => (
                  <a
                    key={n.id}
                    href={`/sankofa/nft/${n.id}`}
                    className="sankofa-glass sankofa-glass-hover flex items-center gap-4 rounded-2xl p-3"
                  >
                    <div
                      className="h-20 w-20 rounded-xl sankofa-shimmer flex-none"
                      style={{ background: n.image }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-sankofa-gold-400)]">
                        {n.tokenId}
                      </div>
                      <div className="truncate text-sm font-semibold text-[var(--color-sankofa-ivory)]">
                        {n.name}
                      </div>
                      <div className="mt-0.5 text-[11px] text-[var(--color-sankofa-muted)]">
                        {n.rarity} · {n.likes} likes
                      </div>
                    </div>
                    <div className="hidden md:block text-right text-xs">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-sankofa-muted)]">
                        Dernière vente
                      </div>
                      <div className="text-[var(--color-sankofa-ivory)]">
                        {n.lastSale} {n.currency}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-sankofa-muted)]">
                        Prix
                      </div>
                      <div className="text-sm font-semibold text-sankofa-gold">
                        {n.price} {n.currency}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-4 border-t border-[var(--color-sankofa-border)] pt-4 first:mt-2 first:border-0 first:pt-0">
      <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-sankofa-gold-400)]">
        {title}
      </div>
      {children}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
  color,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-2.5 py-1 text-[11px] transition ${
        active
          ? "border-[var(--color-sankofa-gold-500)]/70 bg-[var(--color-sankofa-gold-500)]/15 text-[var(--color-sankofa-gold-200)]"
          : "border-[var(--color-sankofa-border)] bg-black/30 text-[var(--color-sankofa-ivory-soft)] hover:border-[var(--color-sankofa-gold-500)]/50"
      }`}
      style={
        active && color
          ? { borderColor: color, color, backgroundColor: `${color}1a` }
          : undefined
      }
    >
      {children}
    </button>
  );
}
