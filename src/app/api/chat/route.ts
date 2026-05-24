import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { getCurrentUser } from "@/lib/auth";
import {
  anthropic,
  buildCoachSystemPrompt,
  COACH_MODEL,
  SCENARIO_LABELS,
} from "@/lib/anthropic";

export const runtime = "nodejs";
export const maxDuration = 60;

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return new Response(
      JSON.stringify({ error: "Non connecté" }),
      { status: 401, headers: { "Content-Type": "application/json" } },
    );
  }

  if (!anthropic) {
    return new Response(
      JSON.stringify({
        error:
          "Coach IA indisponible. Définis ANTHROPIC_API_KEY dans .env pour activer.",
      }),
      { status: 503, headers: { "Content-Type": "application/json" } },
    );
  }

  const body = (await req.json().catch(() => ({}))) as {
    messages?: ChatMessage[];
    language?: string;
    scenario?: string;
  };

  const language = (body.language ?? "Ewondo").slice(0, 60);
  const scenarioKey = body.scenario ?? "";
  const scenario = SCENARIO_LABELS[scenarioKey];
  const incoming = Array.isArray(body.messages) ? body.messages : [];
  if (incoming.length === 0) {
    return new Response(
      JSON.stringify({ error: "Aucun message fourni" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const messages: Anthropic.MessageParam[] = incoming
    .filter((m) => m && (m.role === "user" || m.role === "assistant"))
    .map((m) => ({ role: m.role, content: String(m.content).slice(0, 4000) }));

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const apiStream = anthropic!.messages.stream({
          model: COACH_MODEL,
          max_tokens: 1024,
          system: [
            {
              type: "text",
              text: buildCoachSystemPrompt(language, scenario),
              cache_control: { type: "ephemeral" },
            },
          ],
          messages,
        });

        for await (const event of apiStream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        controller.close();
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Erreur inconnue";
        controller.enqueue(
          encoder.encode(`\n\n[Erreur coach IA : ${msg}]`),
        );
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "no-store",
    },
  });
}
