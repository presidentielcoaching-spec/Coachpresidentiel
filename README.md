# FIT-MAX — Site web

Site vitrine de **FIT-MAX**, salle de sport moderne et accessible au cœur de
Koumassi (Boulevard Antananarivo, Abidjan). Musculation, cardio et coaching
personnalisé pour tous les niveaux.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- React 19
- [Tailwind CSS v4](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) (icônes)

## Démarrage

```bash
pnpm install
pnpm dev
```

Le site est disponible sur http://localhost:3000.

## Scripts

- `pnpm dev` — serveur de développement
- `pnpm build` — build de production
- `pnpm start` — démarrage du build
- `pnpm lint` — analyse ESLint
- `pnpm typecheck` — vérification TypeScript

## Structure

- `src/app/` — pages et layout (App Router)
- `src/components/fitmax/` — sections de la page (Hero, Installations, Horaires, Affluence, Contact…)
- `src/lib/fitmax/site.ts` — données du site (adresse, téléphone, horaires, affluence)

## Contact

📍 Boulevard Antananarivo 809, Abidjan (Koumassi)
📞 +225 07 00 11 92 18
