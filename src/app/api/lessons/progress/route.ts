import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Non connecté" }, { status: 401 });

  const body = (await req.json().catch(() => ({}))) as {
    lessonSlug?: string;
    score?: number;
    completed?: boolean;
  };
  const lessonSlug = (body.lessonSlug ?? "").trim();
  if (!lessonSlug) {
    return NextResponse.json({ error: "lessonSlug requis" }, { status: 400 });
  }
  const score = Math.max(0, Math.min(100, Math.round(body.score ?? 0)));
  const completed = Boolean(body.completed);

  const progress = await prisma.lessonProgress.upsert({
    where: { userId_lessonId: { userId: user.id, lessonId: lessonSlug } },
    update: {
      step: completed ? "done" : "in_progress",
      score,
      completed,
      completedAt: completed ? new Date() : null,
      attempts: { increment: 1 },
    },
    create: {
      userId: user.id,
      lessonId: lessonSlug,
      step: completed ? "done" : "in_progress",
      score,
      completed,
      completedAt: completed ? new Date() : null,
      attempts: 1,
    },
  });

  if (completed) {
    await prisma.user.update({
      where: { id: user.id },
      data: { xp: { increment: 50 } },
    });
    await prisma.activity.create({
      data: {
        userId: user.id,
        kind: "lesson.completed",
        payload: JSON.stringify({ lessonSlug, score }),
      },
    });
  }

  return NextResponse.json({ ok: true, progress });
}
