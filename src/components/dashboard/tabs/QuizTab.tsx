"use client";

import { ListChecks, CheckCircle2, Clock, Play } from "lucide-react";
import { quizzes } from "@/lib/dashboard-data";

const statusStyle = {
  Réussi: "text-emerald-600 bg-emerald-50",
  "En cours": "text-amber-600 bg-amber-50",
  "À faire": "text-sky-600 bg-sky-50",
};

export function QuizTab() {
  return (
    <div className="space-y-4">
      {quizzes.map((q) => (
        <div
          key={q.title}
          className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-white p-5"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold-300">
            <ListChecks className="h-6 w-6" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-navy">{q.title}</h3>
            <div className="text-sm text-muted">
              {q.course} · {q.questions} questions
            </div>
          </div>

          {q.score !== undefined && (
            <div className="text-center">
              <div className="text-xl font-extrabold text-emerald-600">
                {q.score}%
              </div>
              <div className="text-xs text-muted">Score</div>
            </div>
          )}

          <span
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${statusStyle[q.status]}`}
          >
            {q.status === "Réussi" ? (
              <CheckCircle2 className="h-3.5 w-3.5" />
            ) : (
              <Clock className="h-3.5 w-3.5" />
            )}
            {q.status}
          </span>

          <button
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold ${
              q.status === "Réussi"
                ? "border border-border text-navy hover:border-gold-300"
                : "bg-gradient-to-r from-gold-300 to-gold-500 text-navy"
            }`}
          >
            <Play className="h-4 w-4" />
            {q.status === "Réussi" ? "Revoir" : "Commencer"}
          </button>
        </div>
      ))}
    </div>
  );
}
