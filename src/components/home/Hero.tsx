"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Star,
  ShieldCheck,
  Award,
  X,
} from "lucide-react";
import { useLang } from "@/lib/i18n";

const avatars = [
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-500",
  "from-rose-400 to-pink-500",
  "from-sky-400 to-indigo-500",
];

export function Hero() {
  const { t } = useLang();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="bg-navy-gradient relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pattern-grid absolute inset-0 opacity-50" />
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-navy-400/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-300/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300">
            <Star className="h-3.5 w-3.5 fill-gold-300" />
            {t("hero.badge")}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] !text-white sm:text-5xl lg:text-[3.4rem]">
            {t("hero.title").split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-gradient-gold">
              {t("hero.title").split(" ").slice(-2).join(" ")}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            {t("hero.subtitle")}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/inscription"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-7 py-3.5 text-base font-bold text-navy shadow-gold transition-transform hover:scale-[1.03]"
            >
              {t("hero.cta1")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/formations"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-gold-300 hover:text-gold-300"
            >
              {t("hero.cta2")}
            </Link>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {avatars.map((a, i) => (
                  <span
                    key={i}
                    className={`h-9 w-9 rounded-full bg-gradient-to-br ${a} ring-2 ring-navy`}
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-gold-300">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-white/60">+2 500 apprenants satisfaits</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <ShieldCheck className="h-5 w-5 text-gold-300" />
              Paiement sécurisé
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Award className="h-5 w-5 text-gold-300" />
              Certificat reconnu
            </div>
          </div>
        </div>

        {/* Right — video card */}
        <div className="animate-fade-up [animation-delay:150ms]">
          <div className="relative mx-auto max-w-md">
            <div className="animate-float relative overflow-hidden rounded-3xl border border-white/10 shadow-premium">
              <div className="bg-navy-gradient relative aspect-[4/5]">
                <div className="pattern-grid absolute inset-0 opacity-60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                  <button
                    onClick={() => setShowVideo(true)}
                    className="animate-pulse-ring flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-navy shadow-gold transition-transform hover:scale-110"
                    aria-label={t("hero.watch")}
                  >
                    <Play className="h-8 w-8 fill-current pl-1" />
                  </button>
                  <span className="text-sm font-semibold text-white/80">
                    {t("hero.watch")}
                  </span>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute -left-6 top-10 hidden rounded-2xl bg-white p-4 shadow-premium sm:block">
              <div className="text-2xl font-extrabold text-gradient-navy">98%</div>
              <div className="text-xs text-muted">{t("hero.stat2")}</div>
            </div>
            <div className="absolute -right-5 bottom-12 hidden rounded-2xl bg-white p-4 shadow-premium sm:block">
              <div className="text-2xl font-extrabold text-gradient-navy">2 500+</div>
              <div className="text-xs text-muted">{t("hero.stat1")}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-dark/90 p-5 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 flex items-center gap-1 text-white/80 hover:text-gold-300"
            >
              <X className="h-5 w-5" /> Fermer
            </button>
            <div className="aspect-video overflow-hidden rounded-2xl">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
                title="Présentation Coaching Présidentiel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
