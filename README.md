# Sankofa Legacy — The Ether Guardians

Édition Genesis ultra-rare de 5 NFT 1-of-1, frappés sur **Base**.
Cinq Gardiens, cinq civilisations africaines, une mémoire restaurée on-chain.

> _« Se wo were fi na wosankofa a yenkyi. »_
> « Il n'est pas tabou de retourner chercher ce que tu as oublié. » — Proverbe Akan

---

## Contenu du repo

```
src/
  app/                    # Pages Next.js 15 (App Router)
  components/             # UI de la landing page Sankofa
  lib/collection.ts       # Source de vérité : les 5 Gardiens + infos collection
public/
  metadata/               # Métadonnées NFT standard OpenSea (1.json … 5.json + contract.json)
  guardians/              # ⚠ À AJOUTER : tes 5 visuels en haute déf
STRATEGY.md               # Stratégie de lancement complète sur 90 jours
```

## Mise en route locale

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm typecheck    # vérification TypeScript
pnpm build        # build production
```

---

## Étapes à faire toi-même (je ne peux pas les faire pour toi)

### 1. Wallet — 10 minutes
1. Installer **MetaMask** ou **Coinbase Wallet** (extension Chrome ou app mobile)
2. **Noter la phrase secrète (12 ou 24 mots) sur papier** — JAMAIS en numérique
3. Faire deux copies, les garder dans deux lieux séparés
4. Activer le réseau **Base** (Settings → Networks → Add Base)
5. Acheter ~50€ d'ETH sur Coinbase, l'envoyer vers ton wallet, puis le ponter sur Base via [bridge.base.org](https://bridge.base.org)

⚠ **Personne ne doit voir ta seed phrase.** Pas même moi. Pas même le support OpenSea. Quiconque la demande est un escroc.

### 2. Compte OpenSea — 5 minutes
1. Aller sur [opensea.io](https://opensea.io) → "Connect Wallet" → choisir MetaMask/Coinbase
2. Signer le message (gratuit, pas de transaction)
3. Profil : nom d'affichage = **Sankofa Studio**, avatar, bannière, bio (utiliser le pitch de STRATEGY.md §1)
4. Lier X et site web (sankofa-legacy.xyz quand déployé)

### 3. Création de la collection — 10 minutes
1. Sur OpenSea : "Create" → "Create a collection"
2. Nom : **Sankofa Legacy**
3. Slug recommandé : `sankofa-legacy`
4. Blockchain : **Base**
5. Royalties créateur : **7.5%** (= 750 basis points)
6. Catégorie : Art
7. Uploader bannière (1400×400) + featured image (600×400) + logo (350×350)

### 4. Upload des images sur IPFS — 15 minutes
1. Créer compte gratuit sur [pinata.cloud](https://pinata.cloud)
2. Uploader tes 5 visuels en haute déf (≥ 2048×2048, JPG/PNG)
3. Copier les 5 CID (CIDv1 recommandé, commence par `bafy...`)
4. Remplacer `ipfs://REMPLACER_PAR_CID_IMAGE_X` dans chacun des 5 fichiers `public/metadata/X.json`
5. Uploader aussi les 5 fichiers JSON metadata sur Pinata, noter leurs CID
6. C'est ces CID JSON qu'on passera au smart contract comme `tokenURI`

### 5. Mint des 5 Gardiens — selon ton choix

**Option A — Sans code (recommandée pour démarrer)** :
- Sur OpenSea Studio, "Drop" → mode "Open Edition" désactivé → liste manuelle
- Uploader chaque image, copier-coller la description et les traits depuis `public/metadata/X.json`
- 5 transactions de mint, ~0.10€ de gas chacune sur Base

**Option B — Smart contract custom** :
- Déployer un ERC-721 simple via [thirdweb.com](https://thirdweb.com) ou [Manifold](https://studio.manifold.xyz/)
- Tu gardes le contrôle total, le nom du contrat apparaît sur les NFT
- Plus crédible pour les collectionneurs sérieux

### 6. Déploiement du site
```bash
npm install -g vercel
vercel              # premier déploiement
vercel --prod       # production
```
Puis pointer un domaine (recommandation : **sankofa-legacy.xyz**, ~6€/an).

---

## Place des visuels

Les 5 images doivent être placées dans `public/guardians/` avec ces noms :

- `1.jpg` — NUBIAN 329 (le masque bleu/or aux hiéroglyphes)
- `2.jpg` — ZAMZUU (la coiffe de plumes au bouclier)
- `3.jpg` — TELLEM (le masque Dogon dans le cosmos)
- `4.jpg` — GELEDE (le masque Yoruba multicolore avec HUD AR)
- `5.jpg` — ASHANTI (le masque doré aux fibres optiques)

Tant que ces fichiers ne sont pas présents, la landing affichera les emplacements vides avec gradients de fallback — pas de bug visible.

---

## Sécurité — Les 5 règles qui sauvent une carrière NFT

1. **Seed phrase sur papier uniquement.** Si elle est sur écran, screenshot, cloud, email → considère-la compromise.
2. **Multi-sig pour le wallet Studio** (Gnosis Safe). 2 signatures sur 3 pour valider une vente importante.
3. **Jamais signer un message ou une transaction que tu ne comprends pas.** En cas de doute, fermer l'onglet.
4. **Lien OpenSea uniquement via opensea.io tapé à la main.** Les phishing scam ressemblent à 99% à l'original.
5. **Pas de DM "support" qui te contacte en premier.** Le vrai support ne DM jamais.

---

## Roadmap

Voir [STRATEGY.md](./STRATEGY.md) pour le calendrier détaillé sur 90 jours,
les canaux, les prix justifiés, les risques et la checklist exécutable.
