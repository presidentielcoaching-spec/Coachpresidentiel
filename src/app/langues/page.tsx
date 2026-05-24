import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";
import { prisma } from "@/lib/db";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Toutes les langues — Kemetlingua AI",
  description:
    "Découvrez les 21+ langues africaines disponibles : Wolof, Swahili, Yoruba, Lingala, Ewondo, Bambara, Hausa, Akan, Zulu et bien d'autres.",
};

export default async function LanguesPage() {
  const languages = await prisma.language.findMany({
    orderBy: { name: "asc" },
    include: { _count: { select: { lessons: true, learners: true } } },
  });

  // Group by region
  const groups = languages.reduce<Record<string, typeof languages>>((acc, l) => {
    const region = l.region.split(" ·")[0].split(" ")[0]
      ? l.region.includes("Afrique") || ["Sénégal","Mali","Ghana","Bénin","Togo","Burkina","Côte","Nigeria","Niger","Cameroun"].some(c => l.region.includes(c))
        ? regionOf(l.region)
        : regionOf(l.region)
      : "Autre";
    (acc[region] ??= []).push(l);
    return acc;
  }, {});

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-radial-purple pattern-kente">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/40 bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-200">
              <Globe2 size={12} /> {languages.length} langues disponibles
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Toutes nos <span className="text-gradient-gold">langues vivantes</span>
            </h1>
            <p className="mt-4 max-w-2xl text-foreground/80">
              Le plus grand catalogue de langues africaines au monde, enrichi
              chaque mois. Choisis ta langue maternelle, paternelle ou
              ancestrale — et plonge dans son univers culturel.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl space-y-14 px-4 py-16 sm:px-6 lg:px-8">
          {Object.entries(groups).map(([region, langs]) => (
            <section key={region}>
              <h2 className="mb-6 text-2xl font-bold">
                <span className="text-gradient-gold">{region}</span>{" "}
                <span className="text-sm font-normal text-muted">
                  ({langs.length})
                </span>
              </h2>
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {langs.map((l) => (
                  <li key={l.id}>
                    <article
                      className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-surface-elevated p-5 transition hover:-translate-y-1 hover:border-gold-500/60`}
                    >
                      <div
                        className={`absolute inset-0 -z-0 bg-gradient-to-br ${l.hue} opacity-60 transition group-hover:opacity-90`}
                      />
                      <div className="relative flex h-full flex-col">
                        <div className="flex items-start justify-between">
                          <span className="grid h-14 w-14 place-items-center rounded-xl bg-background/40 text-3xl ring-1 ring-border">
                            {l.emoji}
                          </span>
                          <span className="rounded-full bg-background/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-400">
                            {l.code}
                          </span>
                        </div>

                        <div className="mt-4">
                          <h3 className="text-xl font-bold">{l.name}</h3>
                          <p className="mt-0.5 text-xs text-foreground/70">
                            {l.region}
                          </p>
                          <p className="mt-0.5 text-xs text-foreground/60">
                            {l.speakers}
                          </p>
                        </div>

                        <div className="mt-4 rounded-xl border border-border/60 bg-background/40 px-3 py-2">
                          <p className="text-[10px] uppercase tracking-wider text-muted">
                            Bonjour
                          </p>
                          <p className="text-sm font-semibold text-gold-400">
                            {l.greeting}
                          </p>
                        </div>

                        <div className="mt-auto flex items-center justify-between pt-4 text-[11px] text-muted">
                          <span>{l._count.lessons} leçons</span>
                          <span>{l._count.learners} apprenants</span>
                        </div>

                        <Link
                          href="/signup"
                          className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-gold-500 px-4 py-2 text-xs font-bold text-[#1a0f00] transition hover:bg-gold-400"
                        >
                          Commencer · gratuit
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

function regionOf(region: string): string {
  if (/Maghreb|Tunisie|Algérie|Maroc/i.test(region)) return "Afrique du Nord";
  if (/Sénégal|Mali|Gambie|Burkina|Côte|Ghana|Togo|Bénin|Nigeria|Niger|Sahel/i.test(region))
    return "Afrique de l'Ouest";
  if (/Cameroun|RCA|Tchad|Gabon|Congo|RDC/i.test(region))
    return "Afrique Centrale";
  if (/Kenya|Tanzanie|Ouganda|Rwanda|Burundi|Éthiopie|Ethiopie|Érythrée|Est/i.test(region))
    return "Afrique de l'Est";
  if (/Afrique du Sud|Zimbabwe|Mozambique|Angola|Namibie|Sud/i.test(region))
    return "Afrique Australe";
  if (/Madagascar/i.test(region)) return "Océan Indien";
  return "Autres régions";
}
