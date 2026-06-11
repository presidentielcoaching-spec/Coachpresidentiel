"use client";

import Link from "next/link";
import { Check, ArrowRight, Clock, CreditCard } from "lucide-react";
import { type Formation, accentStyles, formationIcons } from "@/lib/formations";
import { useLang } from "@/lib/i18n";

export function FormationCard({ formation }: { formation: Formation }) {
  const { t } = useLang();
  const a = accentStyles[formation.accent];
  const Icon = formationIcons[formation.icon];

  return (
    <article
      className={`card-hover relative flex flex-col rounded-3xl border bg-white p-7 ${
        formation.featured
          ? "border-gold-300 ring-2 ring-gold-300/40 shadow-premium"
          : "border-border shadow-sm"
      }`}
    >
      {formation.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-navy shadow-gold">
          {t("formations.popular")}
        </span>
      )}

      <div className="flex items-center gap-4">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${a.soft} ${a.text} ring-1 ${a.ring}`}
        >
          <Icon className="h-7 w-7" />
        </span>
        <div>
          <h3 className="text-xl font-bold">{formation.title}</h3>
          <span className="text-xs font-medium uppercase tracking-wide text-muted">
            {formation.level}
          </span>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted">
        {formation.tagline}
      </p>

      <div className="mt-6 flex items-end gap-2">
        <span className="text-3xl font-extrabold text-navy">
          {formation.priceLabel}
        </span>
      </div>

      <div className="mt-4 grid gap-2 text-sm text-muted">
        <span className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-gold-500" /> {formation.duration}
        </span>
        <span className="flex items-center gap-2">
          <CreditCard className="h-4 w-4 text-gold-500" />{" "}
          {formation.installmentLabel}
        </span>
      </div>

      <ul className="mt-6 grid gap-2.5 border-t border-border pt-6">
        {formation.modules.slice(0, 5).map((m) => (
          <li key={m} className="flex items-start gap-2.5 text-sm">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${a.text}`} />
            <span className="text-navy/80">{m}</span>
          </li>
        ))}
        {formation.modules.length > 5 && (
          <li className="text-sm font-medium text-muted">
            + {formation.modules.length - 5} autres modules
          </li>
        )}
      </ul>

      <div className="mt-7 flex flex-col gap-3 pt-2">
        <Link
          href={`/inscription?formation=${formation.slug}`}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-all hover:bg-navy-light hover:shadow-premium"
        >
          {t("formations.enroll")}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href={`/formations/${formation.slug}`}
          className="text-center text-sm font-semibold text-navy/70 transition-colors hover:text-gold-500"
        >
          {t("formations.details")}
        </Link>
      </div>
    </article>
  );
}
