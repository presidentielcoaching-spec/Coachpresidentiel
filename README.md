# Afrilingua AI

> **Nos langues, notre héritage.**
> La première plateforme IA pour apprendre les langues africaines —
> pour le continent et la diaspora.

![Next.js](https://img.shields.io/badge/Next.js-15.5-black) ![Tailwind](https://img.shields.io/badge/Tailwind-4.x-38bdf8) ![Prisma](https://img.shields.io/badge/Prisma-6.x-2D3748)

---

## Stack

- **Next.js 15** (App Router, React 19, Server Actions)
- **TypeScript** strict
- **Tailwind CSS v4** + design system maison (violet / or / vert-orange-rouge africain, motifs kente)
- **Prisma 6** + **SQLite** (dev) / **Postgres** (prod)
- **Auth maison** : JWT signé (HS256 via `jose`) en cookie HTTP-only + `bcryptjs`
- **Middleware** pour les routes protégées
- **lucide-react** pour les icônes

## Démarrage local

```bash
pnpm install
pnpm db:push       # crée prisma/dev.db
pnpm db:seed       # charge 21 langues + le compte démo
pnpm dev           # http://localhost:3000
```

### Compte de démo

| Email                    | Mot de passe |
| ------------------------ | ------------ |
| `koffi@afrilingua.ai`    | `koffi1234`  |

## Structure

```
src/
├── app/
│   ├── page.tsx              # Landing publique
│   ├── langues/page.tsx      # Catalogue public des langues
│   ├── (auth)/               # Login / Signup / Server actions
│   └── (app)/                # Routes protégées
│       ├── dashboard/        # Tableau de bord (Bonjour Koffi, parcours…)
│       ├── lecons/           # Mes leçons par langue
│       ├── ia/               # IA conversationnelle
│       ├── classement/       # Leaderboard
│       ├── communaute/       # Groupes & discussions
│       ├── culture/          # Proverbes, chants, contes
│       ├── certificats/      # Certificats obtenus
│       ├── boutique/         # Pass Premium 5€/mois
│       └── parametres/       # Profil & préférences
├── components/               # UI partagée (Navbar, Hero, Logo, AppSidebar…)
└── lib/
    ├── db.ts                 # Singleton Prisma
    └── auth.ts               # Session JWT + getCurrentUser
prisma/
├── schema.prisma             # User / Language / Lesson / UserLanguage / Activity
└── seed.ts                   # 21 langues + 6 leçons par langue
middleware.ts                 # Garde-fou sur /dashboard, /lecons, /ia…
```

## Déploiement Vercel

1. **Pousse la branche** sur GitHub.
2. **Importe le repo** dans [vercel.com/new](https://vercel.com/new).
3. **Provisionne une base Postgres** (Vercel Postgres, Neon, ou Supabase).
4. **Variables d'environnement** :
   - `DATABASE_URL` → URL Postgres (`postgresql://…?sslmode=require`)
   - `AUTH_SECRET` → 32+ caractères aléatoires (`openssl rand -base64 48`)
5. **Bascule Prisma sur Postgres** : édite `prisma/schema.prisma` et change `provider = "sqlite"` → `provider = "postgresql"`.
6. **Deploy**. Le `buildCommand` du `vercel.json` exécute `prisma db push` + `next build`.
7. **Seed** (une fois) : `vercel env pull && pnpm db:seed`.

> ⚠️ SQLite n'est pas persistant sur Vercel (système de fichiers éphémère).
> Postgres hébergé est **obligatoire** en prod.

## Pages publiques

| Route        | Description                            |
| ------------ | -------------------------------------- |
| `/`          | Landing marketing                      |
| `/langues`   | Catalogue des 21+ langues, par région  |
| `/login`     | Connexion                              |
| `/signup`    | Inscription gratuite                   |

## Pages app (auth requise)

| Route          | Description                                            |
| -------------- | ------------------------------------------------------ |
| `/dashboard`   | Bonjour Koffi, parcours, mes langues, IA, classement   |
| `/lecons`      | Toutes les leçons groupées par langue                  |
| `/ia`          | Coach IA conversationnel (UI placeholder)              |
| `/classement`  | Podium + tableau Top 50                                |
| `/communaute`  | Groupes, discussions, événements                       |
| `/culture`     | Collections proverbes / chants / contes                |
| `/certificats` | Certificats obtenus & à débloquer                      |
| `/boutique`    | Pass Premium                                           |
| `/parametres`  | Profil, préférences, déconnexion                       |

## Roadmap

- [ ] Brancher un vrai LLM (Claude API ou OpenAI) sur `/ia` + ASR / TTS
- [ ] Système de quiz et notation de prononciation
- [ ] App mobile React Native (partage du design system)
- [ ] Paiements Orange Money, Wave, Stripe pour Premium
- [ ] Mode hors ligne (PWA + Service Worker)
- [ ] Programme de contributeurs natifs (audio, proverbes, contes)

---

© Afrilingua AI · Made in 🌍 with ❤️
