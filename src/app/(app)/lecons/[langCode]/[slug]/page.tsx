import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { getLessonContent } from "@/lib/lessons";
import { LessonPlayer } from "./LessonPlayer";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ langCode: string; slug: string }>;
}) {
  const { langCode, slug } = await params;
  const content = getLessonContent(langCode, slug);
  if (!content) notFound();

  const language = await prisma.language.findUnique({
    where: { code: langCode },
  });
  if (!language) notFound();

  const lesson = await prisma.lesson.findUnique({
    where: { languageId_slug: { languageId: language.id, slug } },
  });
  if (!lesson) notFound();

  return (
    <LessonPlayer
      languageName={language.name}
      languageEmoji={language.emoji}
      lessonTitle={lesson.title}
      lessonSlug={`${language.code}/${slug}`}
      content={content}
    />
  );
}
