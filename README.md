# Coaching Présidentiel

Plateforme web premium de **formation en ligne** — académie d'élite en
**Trading**, **Intelligence Artificielle** et **Art Oratoire**.

Site moderne, responsive et haut de gamme construit avec **Next.js 15**,
**React 19**, **Tailwind CSS v4** et **TypeScript**.

## ✨ Fonctionnalités

- **Hero premium** avec vidéo de présentation et preuve sociale
- **Catalogue de formations** (Trading, IA, Art Oratoire) avec pages détaillées
  et simulateur de paiement en tranches
- **Espace Apprenant** sécurisé : cours vidéo, progression, supports PDF, quiz,
  certificats numériques, messagerie formateurs, calendrier des sessions live
- **Système de paiement** : Orange Money, Wave, Visa, Mastercard — paiement en
  plusieurs tranches, coupons promo, reçu & facture
- **Pourquoi nous choisir**, **témoignages** (texte + vidéo)
- **Blog & ressources** filtrable par catégorie
- **FAQ** par thématique
- **Contact** (formulaire + WhatsApp, réseaux sociaux)
- **Espace affiliés / programme de parrainage**
- **Assistant IA** flottant + bouton WhatsApp
- **Multilingue FR / EN** (sélecteur de langue)
- **SEO avancé** : métadonnées, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`
- **Animations modernes** au scroll, design entièrement responsive
- Pages **légales** (mentions, confidentialité, conditions)

## 🎨 Identité visuelle

- Bleu nuit `#0A1F44`, Or premium `#D4AF37`, Blanc, Gris clair `#F5F5F5`
- Titres **Montserrat**, texte **Poppins**

## 🚀 Démarrage

```bash
pnpm install
pnpm dev      # serveur de développement
pnpm build    # build de production
pnpm start    # serveur de production
```

## 📁 Structure

```
src/
  app/                pages (App Router) + sitemap/robots
  components/         UI (home, dashboard, auth, payment, …)
  lib/                données (formations, contenu, dashboard) + i18n
```

> Les espaces apprenant, paiement et authentification sont des démonstrations
> front-end prêtes à être connectées à un back-end (auth, paiements, CRM).
