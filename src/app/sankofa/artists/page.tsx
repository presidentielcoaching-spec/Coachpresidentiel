import { ARTISTS } from "@/lib/sankofa/data";
import { ArtistCard } from "@/components/sankofa/ArtistCard";

export default function ArtistsPage() {
  const ranked = [...ARTISTS].sort((a, b) => b.volume - a.volume);
  return (
    <div className="relative">
      <div className="border-b border-[var(--color-sankofa-border)] sankofa-cosmos-bg">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <span className="sankofa-chip">Artistes</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-sankofa-gold">14 320 artistes</span>{" "}
            <span className="text-[var(--color-sankofa-ivory)]">
              · 64 pays · une seule vision
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[var(--color-sankofa-muted)] md:text-base">
            Profils vérifiés, niveaux d'ascension (Initié → Griot → Master → Legendary),
            statistiques en temps réel et badges premium.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl font-semibold text-[var(--color-sankofa-ivory)]">
          Top artistes par volume
        </h2>
        <p className="mt-2 text-sm text-[var(--color-sankofa-muted)]">
          Classement mis à jour toutes les 60 secondes via les contrats marketplace.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ranked.map((a) => (
            <ArtistCard key={a.id} artist={a} />
          ))}
        </div>
      </div>
    </div>
  );
}
