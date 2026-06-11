"use client";

import { useState } from "react";
import { formatFcfa } from "@/lib/formations";

export function TrancheSimulator({
  price,
  installments,
}: {
  price: number;
  installments: number;
}) {
  const options = Array.from({ length: installments }, (_, i) => i + 1);
  const [n, setN] = useState(installments);
  const perTranche = Math.ceil(price / n / 1000) * 1000;

  return (
    <div className="rounded-3xl border border-border bg-white p-7 shadow-sm">
      <h3 className="text-lg font-bold">Simulateur de paiement</h3>
      <p className="mt-1 text-sm text-muted">
        Choisissez le nombre de tranches qui vous convient.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => setN(o)}
            className={`flex-1 rounded-xl border px-3 py-2.5 text-sm font-bold transition-all ${
              n === o
                ? "border-gold-400 bg-gold-50 text-gold-600 ring-2 ring-gold-300/40"
                : "border-border text-navy/70 hover:border-gold-300"
            }`}
          >
            {o}x
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-3 rounded-2xl bg-cloud p-5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">Montant total</span>
          <span className="font-semibold text-navy">{formatFcfa(price)}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">Nombre de tranches</span>
          <span className="font-semibold text-navy">{n}</span>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-3">
          <span className="font-medium text-navy">Par tranche</span>
          <span className="text-xl font-extrabold text-gradient-navy">
            {formatFcfa(perTranche)}
          </span>
        </div>
      </div>

      <p className="mt-4 text-xs text-muted">
        Montant indicatif. Aucun frais caché — le détail exact vous est confirmé
        au moment de l'inscription.
      </p>
    </div>
  );
}
