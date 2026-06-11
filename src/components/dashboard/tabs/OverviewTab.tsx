"use client";

import {
  PlayCircle,
  Award,
  ListChecks,
  TrendingUp,
  ArrowRight,
  Clock,
} from "lucide-react";
import { courses, liveSessions } from "@/lib/dashboard-data";

const stats = [
  { label: "Cours suivis", value: "3", icon: PlayCircle, color: "text-emerald-600 bg-emerald-50" },
  { label: "Progression moyenne", value: "65%", icon: TrendingUp, color: "text-gold-600 bg-gold-50" },
  { label: "Quiz réussis", value: "2", icon: ListChecks, color: "text-sky-600 bg-sky-50" },
  { label: "Certificats", value: "2", icon: Award, color: "text-rose-600 bg-rose-50" },
];

export function OverviewTab({
  onNavigate,
}: {
  onNavigate: (
    t:
      | "overview"
      | "courses"
      | "resources"
      | "quiz"
      | "certificates"
      | "messages"
      | "calendar"
  ) => void;
}) {
  return (
    <div className="space-y-8">
      {/* Welcome banner */}
      <div className="bg-navy-gradient relative overflow-hidden rounded-3xl p-7 sm:p-9">
        <div className="pattern-grid absolute inset-0 opacity-40" />
        <div className="relative max-w-xl">
          <h2 className="text-2xl font-bold !text-white sm:text-3xl">
            Continuez sur votre lancée 🚀
          </h2>
          <p className="mt-2 text-white/70">
            Vous êtes à 68% de votre formation Trading. Encore quelques modules
            avant le prochain certificat !
          </p>
          <button
            onClick={() => onNavigate("courses")}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 text-sm font-bold text-navy"
          >
            Reprendre mon cours <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-border bg-white p-5"
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.color}`}
            >
              <s.icon className="h-5 w-5" />
            </span>
            <div className="mt-3 text-2xl font-extrabold text-navy">
              {s.value}
            </div>
            <div className="text-sm text-muted">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Continue learning */}
        <div className="rounded-3xl border border-border bg-white p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Reprendre l'apprentissage</h3>
            <button
              onClick={() => onNavigate("courses")}
              className="text-sm font-semibold text-gold-600"
            >
              Tout voir
            </button>
          </div>
          <div className="mt-5 space-y-4">
            {courses.map((c) => (
              <div
                key={c.title}
                className="flex items-center gap-4 rounded-2xl border border-border p-4"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${c.accent} text-white`}
                >
                  <PlayCircle className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-semibold text-navy">
                    {c.title}
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-cloud">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${c.accent}`}
                      style={{ width: `${c.progress}%` }}
                    />
                  </div>
                  <div className="mt-1.5 text-xs text-muted">
                    {c.completed}/{c.lessons} leçons · {c.progress}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming live */}
        <div className="rounded-3xl border border-border bg-white p-6">
          <h3 className="text-lg font-bold">Prochaines sessions live</h3>
          <div className="mt-5 space-y-4">
            {liveSessions.map((s) => (
              <div key={s.title} className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-navy text-white">
                  <span className="text-[10px] font-medium opacity-70">
                    {s.date.split(" ")[1]}
                  </span>
                  <span className="text-lg font-extrabold leading-none">
                    {s.date.split(" ")[0]}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-navy">
                    {s.title}
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                    <Clock className="h-3.5 w-3.5" /> {s.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => onNavigate("calendar")}
            className="mt-5 w-full rounded-full border border-border py-2.5 text-sm font-semibold text-navy hover:border-gold-300"
          >
            Voir le calendrier
          </button>
        </div>
      </div>
    </div>
  );
}
