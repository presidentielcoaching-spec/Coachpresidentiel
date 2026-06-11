"use client";

import { PlayCircle, CheckCircle2, Lock } from "lucide-react";
import { courses } from "@/lib/dashboard-data";

export function CoursesTab() {
  return (
    <div className="space-y-6">
      {courses.map((c) => (
        <div
          key={c.title}
          className="overflow-hidden rounded-3xl border border-border bg-white"
        >
          <div className={`relative bg-gradient-to-r ${c.accent} p-6`}>
            <div className="pattern-grid absolute inset-0 opacity-30" />
            <div className="relative flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">
                  {c.formation}
                </span>
                <h3 className="mt-3 text-xl font-bold !text-white">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-white/80">
                  Prochaine leçon : {c.nextLesson}
                </p>
              </div>
              <button className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy">
                <PlayCircle className="h-5 w-5" /> Continuer
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-navy">
                Progression : {c.progress}%
              </span>
              <span className="text-muted">
                {c.completed}/{c.lessons} leçons
              </span>
            </div>
            <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-cloud">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${c.accent}`}
                style={{ width: `${c.progress}%` }}
              />
            </div>

            {/* Lesson list sample */}
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {[
                { name: "Introduction & objectifs", done: true },
                { name: "Concepts fondamentaux", done: true },
                { name: c.nextLesson, done: false, current: true },
                { name: "Module avancé", done: false, locked: true },
              ].map((l, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 rounded-xl border p-3 text-sm ${
                    l.current
                      ? "border-gold-300 bg-gold-50"
                      : "border-border"
                  }`}
                >
                  {l.done ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  ) : l.locked ? (
                    <Lock className="h-5 w-5 text-muted" />
                  ) : (
                    <PlayCircle className="h-5 w-5 text-gold-500" />
                  )}
                  <span
                    className={`truncate ${
                      l.locked ? "text-muted" : "text-navy"
                    }`}
                  >
                    {l.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
