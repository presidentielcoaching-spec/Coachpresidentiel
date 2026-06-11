"use client";

import { Award, Download, Share2, Lock } from "lucide-react";
import { certificates } from "@/lib/dashboard-data";

export function CertificatesTab() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {certificates.map((c) => {
        const delivered = c.status === "Délivré";
        return (
          <div
            key={c.title}
            className={`overflow-hidden rounded-3xl border ${
              delivered ? "border-gold-300" : "border-border"
            } bg-white`}
          >
            <div
              className={`relative p-8 text-center ${
                delivered ? "bg-navy-gradient" : "bg-cloud"
              }`}
            >
              {delivered && (
                <div className="pattern-grid absolute inset-0 opacity-40" />
              )}
              <div className="relative">
                <span
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
                    delivered
                      ? "bg-gradient-to-br from-gold-300 to-gold-500 text-navy shadow-gold"
                      : "bg-white text-muted"
                  }`}
                >
                  {delivered ? (
                    <Award className="h-8 w-8" />
                  ) : (
                    <Lock className="h-8 w-8" />
                  )}
                </span>
                <h3
                  className={`mt-4 text-lg font-bold ${
                    delivered ? "!text-white" : "text-navy"
                  }`}
                >
                  {c.title}
                </h3>
                {delivered ? (
                  <p className="mt-1 text-sm text-white/60">
                    Délivré le {c.date}
                  </p>
                ) : (
                  <p className="mt-1 text-sm text-muted">
                    Terminez la formation pour débloquer
                  </p>
                )}
              </div>
            </div>

            <div className="p-6">
              {delivered ? (
                <>
                  <div className="mb-4 rounded-xl bg-cloud px-4 py-3 text-center text-xs text-muted">
                    Identifiant de vérification :{" "}
                    <span className="font-semibold text-navy">{c.id}</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-navy py-2.5 text-sm font-bold text-white">
                      <Download className="h-4 w-4" /> PDF
                    </button>
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm font-bold text-navy hover:border-gold-300">
                      <Share2 className="h-4 w-4" /> Partager
                    </button>
                  </div>
                </>
              ) : (
                <div className="h-2.5 overflow-hidden rounded-full bg-cloud">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-rose-400 to-pink-500"
                    style={{ width: "92%" }}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
