"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/lib/content";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-cloud"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <span className="hidden rounded-full bg-gold-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-gold-600 sm:inline">
                  {item.category}
                </span>
                <span className="font-semibold text-navy">{item.question}</span>
              </span>
              <Plus
                className={`h-5 w-5 shrink-0 text-gold-500 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
