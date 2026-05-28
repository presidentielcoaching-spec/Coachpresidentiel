import { CATEGORIES, COLLECTIONS } from "@/lib/sankofa/data";
import { CollectionCard } from "@/components/sankofa/CollectionCard";
import { CategoriesGrid } from "@/components/sankofa/CategoriesGrid";

export default function CollectionsPage() {
  return (
    <div className="relative">
      <div className="border-b border-[var(--color-sankofa-border)] sankofa-cosmos-bg">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <span className="sankofa-chip">Collections</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-sankofa-gold">Le panthéon</span>{" "}
            <span className="text-[var(--color-sankofa-ivory)]">
              numérique africain
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[var(--color-sankofa-muted)] md:text-base">
            {COLLECTIONS.length} collections curatées, classées par thème
            culturel. Chaque collection est vérifiée et accompagnée d'un dossier
            historique consultable on-chain.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-xs uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
          Catégories culturelles
        </div>
        <div className="mt-4">
          <CategoriesGrid />
        </div>

        <div className="mt-16">
          {CATEGORIES.map((cat) => {
            const list = COLLECTIONS.filter((c) => c.category === cat.id);
            if (!list.length) return null;
            return (
              <div key={cat.id} id={cat.id} className="mb-14">
                <div className="mb-6 flex items-end justify-between">
                  <div>
                    <span className="sankofa-chip">{cat.label}</span>
                    <h2 className="mt-3 text-2xl font-semibold text-[var(--color-sankofa-ivory)]">
                      {cat.tagline}
                    </h2>
                  </div>
                  <div className="hidden md:block text-[10px] uppercase tracking-[0.22em] text-[var(--color-sankofa-muted)]">
                    {list.length} collection{list.length > 1 ? "s" : ""}
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {list.map((c) => (
                    <CollectionCard key={c.id} collection={c} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
