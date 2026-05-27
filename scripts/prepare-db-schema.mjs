#!/usr/bin/env node
// Adapte prisma/schema.prisma au DATABASE_URL fourni au build.
//
// - `file:...` (SQLite) → laisse tel quel (dev local)
// - `postgres://` ou `postgresql://` → bascule le provider à `postgresql`
//
// Idempotent : peut être lancé plusieurs fois sans casser.
// Invoqué automatiquement par `pnpm build` (cf. package.json) et par les
// build commands de Vercel / Netlify.

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const schemaPath = join(here, "..", "prisma", "schema.prisma");

const url = process.env.DATABASE_URL ?? "";
let targetProvider = null;
if (url.startsWith("postgres://") || url.startsWith("postgresql://")) {
  targetProvider = "postgresql";
} else if (url.startsWith("file:")) {
  targetProvider = "sqlite";
}

if (!targetProvider) {
  console.log(
    "[prepare-db-schema] DATABASE_URL non reconnu (ou vide). Laisse schema.prisma inchangé.",
  );
  process.exit(0);
}

const original = await readFile(schemaPath, "utf8");

// On ne matche QUE les providers SGBD (sqlite, postgresql, mysql, mongodb...)
// pour ne pas confondre avec le `provider = "prisma-client-js"` du generator.
const DB_PROVIDER_RE = /provider\s*=\s*"(sqlite|postgresql|mysql|mongodb|sqlserver|cockroachdb)"/;

const currentMatch = original.match(DB_PROVIDER_RE);
const currentProvider = currentMatch?.[1];

if (!currentProvider) {
  console.warn(
    "[prepare-db-schema] Aucun provider de datasource trouvé dans schema.prisma — abandon.",
  );
  process.exit(1);
}

if (currentProvider === targetProvider) {
  console.log(
    `[prepare-db-schema] schema.prisma a déjà provider = "${targetProvider}". OK.`,
  );
  process.exit(0);
}

const next = original.replace(DB_PROVIDER_RE, `provider = "${targetProvider}"`);

if (next === original) {
  console.warn(
    "[prepare-db-schema] Remplacement impossible — abandon.",
  );
  process.exit(1);
}

await writeFile(schemaPath, next);
console.log(
  `[prepare-db-schema] provider basculé sur "${targetProvider}" (était "${currentProvider}").`,
);
