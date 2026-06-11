"use client";

import { Video, Clock, User, Bell } from "lucide-react";
import { liveSessions } from "@/lib/dashboard-data";

const weekDays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const liveDays = [14, 16, 18];

export function CalendarTab() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
      {/* Mini calendar */}
      <div className="rounded-3xl border border-border bg-white p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Juin 2026</h3>
        </div>
        <div className="mt-5 grid grid-cols-7 gap-1 text-center text-xs font-semibold text-muted">
          {weekDays.map((d) => (
            <div key={d} className="py-2">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
            const isLive = liveDays.includes(day);
            const isToday = day === 11;
            return (
              <div
                key={day}
                className={`flex aspect-square items-center justify-center rounded-lg font-medium ${
                  isToday
                    ? "bg-navy text-white"
                    : isLive
                      ? "bg-gold-50 font-bold text-gold-600 ring-1 ring-gold-300"
                      : "text-navy/70 hover:bg-cloud"
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
        <div className="mt-5 flex items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded bg-navy" /> Aujourd'hui
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded bg-gold-300" /> Session live
          </span>
        </div>
      </div>

      {/* Upcoming sessions */}
      <div className="rounded-3xl border border-border bg-white p-6">
        <h3 className="text-lg font-bold">Sessions live à venir</h3>
        <div className="mt-5 space-y-4">
          {liveSessions.map((s) => (
            <div
              key={s.title}
              className="flex flex-wrap items-center gap-4 rounded-2xl border border-border p-4"
            >
              <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-navy text-white">
                <span className="text-[10px] opacity-70">
                  {s.date.split(" ")[1]}
                </span>
                <span className="text-lg font-extrabold leading-none">
                  {s.date.split(" ")[0]}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-semibold text-navy">{s.title}</h4>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {s.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" /> {s.coach}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold text-navy hover:border-gold-300">
                  <Bell className="h-3.5 w-3.5" /> Rappel
                </button>
                <button className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-4 py-2 text-xs font-bold text-navy">
                  <Video className="h-3.5 w-3.5" /> Rejoindre
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
