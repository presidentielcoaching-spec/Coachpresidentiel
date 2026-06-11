import type { MetadataRoute } from "next";
import { formations } from "@/lib/formations";
import { blogPosts } from "@/lib/content";

const base = "https://coachingpresidentiel.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/formations",
    "/faq",
    "/contact",
    "/blog",
    "/affiliation",
    "/connexion",
    "/inscription",
    "/paiement",
    "/legal/mentions-legales",
    "/legal/confidentialite",
    "/legal/conditions",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const formationRoutes = formations.map((f) => ({
    url: `${base}/formations/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...formationRoutes, ...blogRoutes];
}
