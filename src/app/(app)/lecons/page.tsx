import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Clock, Star } from "lucide-react";

export default async function LeconsPage() {
  const user = (await getCurrentUser())!;
  const langIds = user.languages.map((l) => l.languageId);

  const lessons = await prisma.lesson.findMany({
    where: langIds.length > 0 ? { languageId: { in: langIds } } : {},
    include: { language: true },
    orderBy: [{ language: { name: "asc" } }, { orderIndex: "asc" }],
  });

  const grouped = lessons.reduce<Record<string, typeof lessons>>((acc, l) => {
    (acc[l.language.name] ??= []).push(l);
    return acc;
  }, {});

  return (
    <>
      <PageHeader
        title="Mes leçons"
        subtitle={`${lessons.length} leçons disponibles dans tes langues.`}
      />

      {Object.keys(grouped).length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-10">
          {Object.entries(grouped).map(([lang, items]) => (
            <section key={lang}>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl">{items[0].language.emoji}</span>
                <h2 className="text-xl font-bold">{lang}</h2>
                <span className="rounded-full bg-surface-elevated px-2.5 py-0.5 text-xs text-muted ring-1 ring-border">
                  {items.length} leçons
                </span>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((l, i) => (
                  <li key={l.id}>
                    <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface-elevated p-5 transition hover:border-gold-500/60">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-primary-600/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-200">
                          Leçon {i + 1}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-400">
                          {l.category}
                        </span>
                      </div>
                      <h3 className="mt-3 text-lg font-bold">{l.title}</h3>
                      <p className="mt-1 line-clamp-2 flex-1 text-sm text-muted">
                        {l.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-xs text-muted">
                        <span className="inline-flex items-center gap-1">
                          <Clock size={12} /> {l.durationMin} min
                        </span>
                        <span className="inline-flex items-center gap-1 text-gold-400">
                          <Star size={12} /> +20 XP
                        </span>
                      </div>
                      <button
                        type="button"
                        className="mt-4 rounded-full bg-gold-500 px-4 py-2 text-xs font-bold text-[#1a0f00] transition hover:bg-gold-400"
                      >
                        Commencer la leçon
                      </button>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </>
  );
}

function EmptyState() {
  return (
    <div className="rounded-3xl border border-border bg-surface-elevated p-12 text-center">
      <h3 className="text-xl font-bold">Aucune langue sélectionnée</h3>
      <p className="mt-2 text-sm text-muted">
        Ajoute une langue depuis le catalogue pour débloquer tes premières leçons.
      </p>
      <Link
        href="/langues"
        className="mt-6 inline-block rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-[#1a0f00]"
      >
        Explorer les langues
      </Link>
    </div>
  );
}
