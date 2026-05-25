export function Languages() {
  return (
    <section id="lore" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-cosmic" />
      <div className="absolute inset-0 -z-10 pattern-hieroglyph opacity-50" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-3 py-1 text-xs font-medium tracking-[0.22em] uppercase text-gold-300">
            Le Lore
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Le mot <span className="text-gradient-gold">Sankofa</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div className="relative aspect-square">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-gold-500/30 via-primary-500/20 to-transparent blur-3xl" />
            <svg
              viewBox="0 0 200 200"
              className="h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="lore-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fde68a" />
                  <stop offset="100%" stopColor="#e0a022" />
                </linearGradient>
              </defs>
              {/* Adinkra Sankofa — bird turning backwards */}
              <path
                d="M100 30 C70 30 50 55 50 90 C50 130 80 150 110 150 C140 150 165 130 165 100 C165 75 145 60 125 60 C110 60 100 70 100 85 C100 95 108 105 120 105"
                stroke="url(#lore-grad)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="125" cy="100" r="4" fill="#fde68a" />
              <path
                d="M75 165 L100 180 L125 165"
                stroke="url(#lore-grad)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              {[...Array(60)].map((_, i) => {
                const a = (i / 60) * Math.PI * 2;
                return (
                  <circle
                    key={i}
                    cx={100 + Math.cos(a) * 92}
                    cy={100 + Math.sin(a) * 92}
                    r="0.8"
                    fill="#f5b942"
                    opacity={i % 3 === 0 ? 0.6 : 0.2}
                  />
                );
              })}
            </svg>
          </div>

          <div>
            <p className="font-display text-2xl text-gold-300">
              « Se wo were fi na wosankofa a yenkyi »
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted">
              Proverbe Akan — Ghana
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/85">
              <em>« Il n&apos;est pas tabou de retourner chercher ce que tu as
              oublié. »</em>
            </p>
            <p className="mt-6 leading-relaxed text-foreground/75">
              Sankofa, c&apos;est l&apos;oiseau qui regarde en arrière pour saisir
              l&apos;œuf de la connaissance — sans cesser d&apos;avancer. Cette collection
              est une bibliothèque vivante : chaque masque est un fragment de
              mémoire que la blockchain rend incorruptible.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/75">
              Posséder un Gardien Sankofa, ce n&apos;est pas acheter une image.
              C&apos;est devenir <strong className="text-gold-300">dépositaire</strong>{" "}
              d&apos;une mémoire. Chaque détenteur reçoit hors-chaîne le rituel
              d&apos;activation, signé manuellement par l&apos;artiste, sur papier
              véritable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
