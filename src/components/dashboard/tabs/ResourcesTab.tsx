"use client";

import { FileText, Download, FileSpreadsheet, Presentation } from "lucide-react";
import { resources } from "@/lib/dashboard-data";

const typeIcon = {
  PDF: FileText,
  Excel: FileSpreadsheet,
  Slides: Presentation,
};

const typeColor = {
  PDF: "text-rose-600 bg-rose-50",
  Excel: "text-emerald-600 bg-emerald-50",
  Slides: "text-amber-600 bg-amber-50",
};

export function ResourcesTab() {
  return (
    <div>
      <p className="mb-6 text-sm text-muted">
        Téléchargez tous vos supports de cours, disponibles 24h/24.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((r) => {
          const Icon = typeIcon[r.type];
          return (
            <div
              key={r.title}
              className="card-hover flex flex-col rounded-2xl border border-border bg-white p-5"
            >
              <div className="flex items-start justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${typeColor[r.type]}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-cloud px-2.5 py-1 text-xs font-semibold text-muted">
                  {r.type}
                </span>
              </div>
              <h3 className="mt-4 flex-1 font-semibold leading-snug text-navy">
                {r.title}
              </h3>
              <div className="mt-2 text-xs text-muted">
                {r.course} · {r.size}
              </div>
              <button className="mt-4 flex items-center justify-center gap-2 rounded-full bg-navy py-2.5 text-sm font-bold text-white transition-colors hover:bg-navy-light">
                <Download className="h-4 w-4" /> Télécharger
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
