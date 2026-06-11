"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { blogPosts, blogCategories } from "@/lib/content";

export function BlogList() {
  const [active, setActive] = useState("Tous");
  const filtered =
    active === "Tous"
      ? blogPosts
      : blogPosts.filter((p) => p.category === active);

  return (
    <section className="bg-cloud py-20">
      <Container>
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {blogCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                active === c
                  ? "bg-navy text-white shadow-premium"
                  : "border border-border bg-white text-navy/70 hover:border-gold-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link
                href={`/blog/${p.slug}`}
                className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white"
              >
                <div
                  className={`relative aspect-[16/10] bg-gradient-to-br ${p.cover}`}
                >
                  <div className="pattern-grid absolute inset-0 opacity-40" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-navy">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span>
                      {new Date(p.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {p.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-navy transition-colors group-hover:text-gold-600">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {p.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600">
                    Lire l'article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
