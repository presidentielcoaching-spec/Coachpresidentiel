import { PageHeader } from "@/components/PageHeader";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { isAnthropicConfigured } from "@/lib/anthropic";
import { CoachChat } from "./CoachChat";

export default async function IAPage() {
  const user = (await getCurrentUser())!;
  const languages = await prisma.language.findMany({
    where: {
      id: { in: user.languages.map((l) => l.languageId) },
    },
    orderBy: { name: "asc" },
  });

  const pool =
    languages.length > 0
      ? languages
      : await prisma.language.findMany({
          take: 4,
          orderBy: { name: "asc" },
        });

  return (
    <>
      <PageHeader
        title="IA Conversationnelle"
        subtitle="Parle avec Mbote, ton coach IA — voix incluse."
      />
      <CoachChat
        userName={user.name.split(" ")[0]}
        hasAnthropicKey={isAnthropicConfigured()}
        languages={pool.map((l) => ({
          code: l.code,
          name: l.name,
          emoji: l.emoji,
          greeting: l.greeting,
        }))}
      />
    </>
  );
}
