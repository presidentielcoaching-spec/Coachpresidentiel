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

## Déploiement

### Préparation commune (5 min)

1. **Crée une base Postgres** (gratuit) :
   - Neon : [console.neon.tech](https://console.neon.tech) → Create project → copie le `DATABASE_URL`
   - OU Supabase : Project → Settings → Database → URI
   - OU Vercel Postgres : depuis le dashboard Vercel
2. **Génère un `AUTH_SECRET`** :
   ```bash
   openssl rand -base64 48
   ```
3. **Récupère tes clés API** : Stripe (sk + price + whsec), Anthropic, et le numéro WhatsApp support.

### Vercel

1. Ouvre [vercel.com/new](https://vercel.com/new) → Import Git Repository → choisis `Coachpresidentiel`.
2. **Important** : sélectionne la bonne branche (`main` après merge de la PR, ou `claude/african-language-platform-fcj6J` en attendant).
3. Framework Preset = Next.js (auto-détecté).
4. Ajoute les variables d'environnement (Settings → Environment Variables) :
   ```
   DATABASE_URL=postgresql://…?sslmode=require
   AUTH_SECRET=…
   NEXT_PUBLIC_SITE_URL=https://<ton-domaine>.vercel.app
   STRIPE_SECRET_KEY=sk_…
   STRIPE_WEBHOOK_SECRET=whsec_…   (à remplir après l'étape 6 ci-dessous)
   STRIPE_PRICE_ID=price_…
   ANTHROPIC_API_KEY=sk-ant-…
   NEXT_PUBLIC_SUPPORT_WHATSAPP=221700000000
   NEXT_PUBLIC_SUPPORT_EMAIL=premium@kemetlingua.com
   NEXT_PUBLIC_WAVE_PAYMENT_URL=https://pay.wave.com/m/M_ci_…/c/ci/?amount=3250
   ```
5. Deploy. Le `buildCommand` de `vercel.json` :
   - swap automatique du provider Prisma SQLite → Postgres (`scripts/prepare-db-schema.mjs`)
   - `prisma generate` + `prisma db push --accept-data-loss` (crée les tables)
   - `next build`
6. **Webhook Stripe** :
   - Dashboard Stripe → Developers → Webhooks → Add endpoint
   - URL : `https://<ton-domaine>.vercel.app/api/webhooks/stripe`
   - Events : `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`
   - Copie le `whsec_…` dans `STRIPE_WEBHOOK_SECRET` côté Vercel → Redéploie
7. **Seed des langues + utilisateurs démo** (une seule fois) :
   ```bash
   vercel env pull .env.production.local
   DATABASE_URL=$(grep DATABASE_URL .env.production.local | cut -d= -f2-) pnpm db:seed
   ```

### Netlify

1. Ouvre [app.netlify.com/start](https://app.netlify.com/start) → Import existing project → GitHub → `Coachpresidentiel`.
2. Sélectionne la bonne branche (idem Vercel).
3. Build settings : laisse Netlify détecter le `netlify.toml` (déjà commité). Sinon :
   - Build command : `node scripts/prepare-db-schema.mjs && pnpm prisma generate && pnpm prisma db push --accept-data-loss && pnpm next build`
   - Publish directory : `.next`
4. Ajoute les mêmes variables d'environnement que pour Vercel (Site settings → Environment variables).
5. Le plugin `@netlify/plugin-nextjs` (déclaré dans `netlify.toml`) est installé automatiquement.
6. Deploy. Récupère le webhook Stripe (`https://<ton-domaine>.netlify.app/api/webhooks/stripe`) comme à l'étape Vercel 6.
7. Seed via `netlify env:get` ou via Neon SQL Editor directement.

### Local vs Prod : comment Prisma jongle entre SQLite et Postgres

- **Local** : `DATABASE_URL="file:./prisma/dev.db"` → `scripts/prepare-db-schema.mjs` détecte SQLite et laisse le schéma intact.
- **CI Vercel/Netlify** : `DATABASE_URL` commence par `postgres://` → le script bascule `provider = "sqlite"` vers `provider = "postgresql"` dans `prisma/schema.prisma` AVANT `prisma generate`. La modification est éphémère (faite dans le container CI, jamais commitée).

> ⚠️ **SQLite n'est pas persistant sur Vercel ni Netlify** (filesystem éphémère).
> Tu DOIS provisionner un Postgres hébergé.

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

## Agent d'accueil Koffi (concierge global)

Un widget de chat flottant accessible **sur toutes les pages** (landing,
auth, app — sauf `/ia` et `/lecons/[...]` pour éviter les chevauchements).

- **Persona Koffi** — agent commercial / onboarding / support de niveau 1
- Distinct de **Mbote** (qui enseigne les langues sur `/ia`)
- Connaît toutes les fonctionnalités, les tarifs, les paiements, les langues
- Personnalise quand l'utilisateur est connecté (prénom, statut Premium, langues)
- Streaming Claude Sonnet 4.6 + prompt caching sur le system prompt
- Conversation persistée en `localStorage` (dernières 20 messages)
- Suggestions rapides : « Comment souscrire ? », « Quelles langues ? », etc.

Endpoint : `POST /api/concierge` (accepte les visiteurs anonymes).
Config UI : `src/components/ConciergeWidget.tsx`.
Persona / brief produit : `src/lib/concierge.ts`.

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
