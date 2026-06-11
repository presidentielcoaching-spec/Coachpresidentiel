import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { Container } from "@/components/Section";
import { blogPosts } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article introuvable" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <SiteShell>
      <article>
        <header
          className={`relative overflow-hidden bg-gradient-to-br ${post.cover} pt-36 pb-16 sm:pt-44`}
        >
          <div className="pattern-grid absolute inset-0 opacity-30" />
          <Container className="relative max-w-3xl text-center">
            <span className="inline-block rounded-full bg-white/90 px-4 py-1 text-xs font-bold text-navy">
              {post.category}
            </span>
            <h1 className="mt-5 text-3xl font-extrabold !text-white sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-white/80">
              <span>{post.author}</span>
              <span>·</span>
              <span>
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {post.readTime}
              </span>
            </div>
          </Container>
        </header>

        <div className="bg-white py-16">
          <Container className="max-w-3xl">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-gold-600"
            >
              <ArrowLeft className="h-4 w-4" /> Retour au blog
            </Link>
            <div className="prose-cp space-y-6 text-[1.05rem] leading-relaxed text-navy/80">
              <p className="text-xl font-medium text-navy">{post.excerpt}</p>
              <p>
                Chez Coaching Présidentiel, nous croyons que l'excellence
                s'apprend. Dans cet article, notre équipe partage une approche
                concrète et actionnable, fruit de l'accompagnement de centaines
                d'apprenants ambitieux.
              </p>
              <h2 className="text-2xl font-bold text-navy">
                Pourquoi c'est important
              </h2>
              <p>
                Les compétences à forte valeur ajoutée ne s'improvisent pas.
                Elles se construisent par la pratique délibérée, un suivi
                rigoureux et un environnement qui pousse vers le haut. C'est
                exactement ce que nous cultivons dans nos formations.
              </p>
              <blockquote className="border-l-4 border-gold-400 bg-cloud px-6 py-4 text-lg font-medium italic text-navy">
                « La discipline est le pont entre les objectifs et leur
                réalisation. »
              </blockquote>
              <h2 className="text-2xl font-bold text-navy">
                Passez à l'action
              </h2>
              <p>
                La théorie ne suffit pas. Rejoignez une de nos formations pour
                bénéficier d'un accompagnement personnalisé et transformer ces
                principes en résultats concrets.
              </p>
            </div>

            <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
              <h3 className="text-xl font-bold !text-white">
                Envie d'aller plus loin ?
              </h3>
              <p className="mt-2 text-white/70">
                Découvrez nos formations premium et passez au niveau supérieur.
              </p>
              <Link
                href="/formations"
                className="mt-5 inline-flex rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 text-sm font-bold text-navy"
              >
                Voir les formations
              </Link>
            </div>
          </Container>
        </div>

        <section className="bg-cloud py-16">
          <Container>
            <h2 className="text-2xl font-bold">À lire également</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="card-hover overflow-hidden rounded-2xl border border-border bg-white"
                >
                  <div
                    className={`aspect-[16/9] bg-gradient-to-br ${p.cover}`}
                  />
                  <div className="p-5">
                    <span className="text-xs font-semibold text-gold-600">
                      {p.category}
                    </span>
                    <h3 className="mt-1.5 font-bold leading-snug text-navy">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </article>
    </SiteShell>
  );
}
