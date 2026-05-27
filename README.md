# Kemetlingua AI

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
| `koffi@kemetlingua.com`    | `koffi1234`  |

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

## Paiements

### Stripe (cartes — fonctionnel out-of-the-box)
1. Crée un produit dans [Stripe Dashboard](https://dashboard.stripe.com/test/products) :
   « Pass Premium Kemetlingua », **5€ EUR récurrent mensuel** → copie le `price_...`.
2. Dans Settings → API keys : copie ta `sk_test_...` (ou `sk_live_...`).
3. Renseigne `STRIPE_SECRET_KEY` et `STRIPE_PRICE_ID` dans `.env`.
4. Pour les webhooks en local :
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```
   copie le `whsec_...` affiché dans `STRIPE_WEBHOOK_SECRET`.
5. En prod (Vercel) : ajoute un endpoint webhook → `https://<ton-domaine>/api/webhooks/stripe`
   et écoute les events `checkout.session.completed`, `customer.subscription.updated`,
   `customer.subscription.deleted`.

Le webhook met automatiquement à jour `User.isPremium`, `stripeSubscriptionId`,
`premiumUntil`.

### Wave (paiement direct par QR + lien marchand)
Flux production-ready, **pas d'API marchand requise** :
1. L'utilisateur clique « Payer avec Wave · 3 250 XOF » → une `PendingPayment`
   est créée en DB avec `currency: "XOF"`.
2. Un modal s'ouvre avec :
   - le QR code généré dynamiquement à partir de `NEXT_PUBLIC_WAVE_PAYMENT_URL`
   - un bouton « Ouvrir Wave et payer » qui pointe sur le même lien
   - un bouton « Imprimer / partager le QR » (pour scan en magasin)
3. Après paiement, l'utilisateur clique « J'ai payé » → la `PendingPayment`
   passe en `claim_paid` et un lien WhatsApp pré-rempli s'ouvre pour
   envoyer la capture.
4. Tu rapproches manuellement la transaction Wave dans ton dashboard
   marchand puis flippes `isPremium=true` dans Prisma Studio.

`NEXT_PUBLIC_WAVE_PAYMENT_URL` doit être le lien marchand statique
fourni par ton compte Wave Business (ex : `https://pay.wave.com/m/M_ci_.../c/ci/?amount=3250`).
Le montant 3 250 XOF est l'équivalent ~5€ utilisé partout dans l'UI.

### Orange Money (activation manuelle)
Pas d'URL de paiement statique disponible — flux conservé :
- L'utilisateur saisit son numéro → `PendingPayment` créée
- Lien WhatsApp pré-rempli vers ton numéro support
- Tu valides le paiement puis flippes `isPremium=true`

Pour automatiser Orange Money plus tard : intégrer Intouch / CinetPay
(gateway multi-providers).

## IA Conversationnelle (Claude)

`/ia` utilise **Claude Sonnet 4.6** via le SDK officiel `@anthropic-ai/sdk`.
- Streaming SSE → l'UI affiche la réponse au fil de l'eau
- Prompt caching activé sur le system prompt (~90% moins cher après le 1er appel)
- ASR / TTS dans le **navigateur** (Web Speech API — gratuit, multilingue) :
  micro pour parler, lecture automatique des réponses
- 6 scénarios pré-configurés (au marché, en famille, en taxi…)

Renseigne `ANTHROPIC_API_KEY` (obtenable sur
[console.anthropic.com](https://console.anthropic.com)).

## Moteur de leçons

`/lecons/[langCode]/[slug]` — flux interactif :
1. **Intro** — contexte culturel
2. **Flashcards vocabulaire** — natif ↔ français, TTS sur clic
3. **Quiz** QCM avec score en direct
4. **Prononciation** — ASR navigateur évalue ta diction par overlap de mots

Progrès stocké en DB (`LessonProgress`), +50 XP à la complétion.
Leçons "jouables" actuellement : Ewondo, Wolof, Yoruba, Swahili (salutations).
Étends `src/lib/lessons.ts` pour en ajouter.

## PWA (installable + offline)

- `public/manifest.json` — installable comme app native
- `public/sw.js` — service worker, network-first pour HTML, cache-first
  pour assets statiques, fallback `/offline`
- Service worker activé uniquement en prod (pas de cache pendant le dev)

Pour tester : `pnpm build && pnpm start`, ouvre Chrome DevTools → Application →
Service Workers.

## Roadmap

- [x] ~~Brancher un vrai LLM (Claude API) sur `/ia` + ASR/TTS~~
- [x] ~~Système de quiz et notation de prononciation~~
- [x] ~~Paiements Stripe (carte) pour Premium~~
- [x] ~~Capture d'intention Orange Money / Wave~~
- [x] ~~PWA installable + service worker~~
- [ ] Intégrer Intouch / CinetPay pour automatiser Orange Money / Wave
- [ ] App mobile React Native (partage du design system)
- [ ] Multi-langue UI (anglais, portugais, arabe pour la diaspora)
- [ ] Reconnaissance vocale serveur (Whisper) pour les langues non-supportées par le navigateur
- [ ] Programme de contributeurs natifs (audio, proverbes, contes)
- [ ] Système de recommandation IA (parcours personnalisés)

---

© Kemetlingua AI · Made in 🌍 with ❤️
