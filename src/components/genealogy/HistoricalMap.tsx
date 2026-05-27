"use client";

import { useMemo, useState } from "react";
import { MapPoint, MAP_POINTS } from "@/lib/genealogy/history-data";

const CATEGORY_LABELS: Record<
  MapPoint["category"],
  { label: string; color: string }
> = {
  "port-negrier": { label: "Port négrier africain", color: "#c5523a" },
  "port-destination": { label: "Port de destination", color: "#e8b333" },
  marronnage: { label: "Zone de marronnage", color: "#3fa34d" },
  plantation: { label: "Plantation / habitation", color: "#b88e58" },
  royaume: { label: "Royaume historique", color: "#d6b48b" },
  affranchissement: { label: "Lieu d'affranchissement", color: "#f3cd5e" },
};

const CATEGORIES = Object.keys(CATEGORY_LABELS) as MapPoint["category"][];

/** Equirectangular projection — world bounded to a meaningful window. */
const VIEW = {
  minLng: -100,
  maxLng: 50,
  minLat: -40,
  maxLat: 50,
  width: 900,
  height: 540,
};

function project(lng: number, lat: number) {
  const x =
    ((lng - VIEW.minLng) / (VIEW.maxLng - VIEW.minLng)) * VIEW.width;
  const y =
    ((VIEW.maxLat - lat) / (VIEW.maxLat - VIEW.minLat)) * VIEW.height;
  return { x, y };
}

const ROUTES: { from: string; to: string }[] = [
  { from: "goree", to: "cap-francais" },
  { from: "saint-louis", to: "pointe-a-pitre" },
  { from: "ouidah", to: "salvador" },
  { from: "elmina", to: "charleston" },
  { from: "loango", to: "salvador" },
  { from: "luanda", to: "cartagena" },
  { from: "bonny", to: "cap-francais" },
];

export function HistoricalMap() {
  const [selectedId, setSelectedId] = useState<string | null>("ouidah");
  const [activeCats, setActiveCats] = useState<Set<MapPoint["category"]>>(
    new Set(CATEGORIES),
  );

  const byId = useMemo(
    () => new Map(MAP_POINTS.map((p) => [p.id, p])),
    [],
  );

  const selected = selectedId ? byId.get(selectedId) ?? null : null;

  const visible = MAP_POINTS.filter((p) => activeCats.has(p.category));

  function toggleCat(c: MapPoint["category"]) {
    setActiveCats((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/30 p-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => {
            const meta = CATEGORY_LABELS[c];
            const active = activeCats.has(c);
            return (
              <button
                key={c}
                type="button"
                onClick={() => toggleCat(c)}
                className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs transition ${
                  active
                    ? "border-[var(--color-gold-500)] bg-[var(--color-earth-700)]/50"
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

        <svg
          viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
          className="h-auto w-full rounded-xl bg-[var(--color-background)]"
          role="img"
          aria-label="Carte historique de la traite atlantique"
        >
          {/* Continent silhouettes — simplified abstract */}
          <defs>
            <pattern
              id="hatch"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="6"
                stroke="#3d2818"
                strokeWidth="2"
              />
            </pattern>
          </defs>

          {/* Africa */}
          <path
            d="M 540 130 Q 580 110 620 140 Q 660 170 670 240 Q 680 320 640 390 Q 600 450 560 430 Q 520 410 500 350 Q 490 280 510 210 Q 520 160 540 130 Z"
            fill="url(#hatch)"
            stroke="#5c3520"
            strokeWidth="1.5"
            opacity="0.55"
          />
          {/* South America */}
          <path
            d="M 200 280 Q 240 270 290 320 Q 310 380 290 460 Q 270 520 220 510 Q 180 480 170 410 Q 170 340 200 280 Z"
            fill="url(#hatch)"
            stroke="#5c3520"
            strokeWidth="1.5"
            opacity="0.55"
          />
          {/* North America */}
          <path
            d="M 60 140 Q 120 100 240 130 Q 290 170 280 230 Q 220 260 160 250 Q 110 240 60 200 Z"
            fill="url(#hatch)"
            stroke="#5c3520"
            strokeWidth="1.5"
            opacity="0.55"
          />
          {/* Caribbean arc */}
          <path
            d="M 230 230 Q 270 240 310 245 Q 330 250 340 260"
            fill="none"
            stroke="#5c3520"
            strokeWidth="2"
            strokeDasharray="3 3"
            opacity="0.6"
          />
          {/* Europe */}
          <path
            d="M 510 90 Q 560 70 620 90 Q 640 110 620 130 Q 580 140 540 130 Q 510 120 510 90 Z"
            fill="url(#hatch)"
            stroke="#5c3520"
            strokeWidth="1.5"
            opacity="0.55"
          />

          {/* Routes */}
          {ROUTES.map(({ from, to }) => {
            const f = byId.get(from);
            const t = byId.get(to);
            if (!f || !t) return null;
            const a = project(f.lng, f.lat);
            const b = project(t.lng, t.lat);
            const mx = (a.x + b.x) / 2;
            const my = (a.y + b.y) / 2 + 30;
            return (
              <path
                key={`${from}-${to}`}
                d={`M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`}
                stroke="#c5523a"
                strokeWidth="1.2"
                strokeDasharray="4 3"
                fill="none"
                opacity="0.7"
              />
            );
          })}

          {/* Points */}
          {visible.map((p) => {
            const { x, y } = project(p.lng, p.lat);
            const isSelected = p.id === selectedId;
            return (
              <g
                key={p.id}
                onClick={() => setSelectedId(p.id)}
                style={{ cursor: "pointer" }}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={isSelected ? 8 : 5}
                  fill={CATEGORY_LABELS[p.category].color}
                  stroke="#0a0604"
                  strokeWidth="1.5"
                />
                {isSelected && (
                  <text
                    x={x + 10}
                    y={y - 6}
                    fontSize="11"
                    fill="#f3e9d8"
                    fontFamily="Poppins, sans-serif"
                  >
                    {p.name}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        <p className="mt-3 text-xs text-[var(--color-muted)]">
          Carte schématique illustrant les principaux lieux et axes de la
          traite atlantique. Cliquez sur un repère pour afficher son détail.
        </p>
      </div>

      <aside className="space-y-4">
        {selected ? (
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-5">
            <p
              className="text-xs uppercase tracking-widest"
              style={{ color: CATEGORY_LABELS[selected.category].color }}
            >
              {CATEGORY_LABELS[selected.category].label}
            </p>
            <h3 className="mt-2 text-xl font-semibold">{selected.name}</h3>
            <p className="text-xs text-[var(--color-muted)]">
              {selected.region} · {selected.modernCountry}
            </p>
            {selected.period && (
              <p className="mt-2 text-sm">
                <span className="text-[var(--color-gold-400)]">Période :</span>{" "}
                {selected.period}
              </p>
            )}
            <p className="mt-3 text-sm text-[var(--color-foreground)]">
              {selected.description}
            </p>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[var(--color-border)] p-5 text-sm text-[var(--color-muted)]">
            Sélectionnez un point sur la carte pour en lire la description.
          </div>
        )}

        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/30 p-5">
          <h4 className="text-sm font-semibold">Tous les repères</h4>
          <ul className="mt-3 max-h-96 space-y-1 overflow-y-auto pr-2 text-sm">
            {visible.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => setSelectedId(p.id)}
                  className={`flex w-full items-start gap-2 rounded-md px-2 py-1 text-left transition ${
                    selectedId === p.id
                      ? "bg-[var(--color-earth-700)]/40"
                      : "hover:bg-[var(--color-surface-elevated)]/50"
                  }`}
                >
                  <span
                    className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full"
                    style={{
                      background: CATEGORY_LABELS[p.category].color,
                    }}
                  />
                  <span>
                    <span className="block">{p.name}</span>
                    <span className="block text-xs text-[var(--color-muted)]">
                      {p.modernCountry}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
