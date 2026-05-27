import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { getCurrentUser } from "@/lib/auth";
import {
  anthropic,
  buildConciergeSystemPrompt,
  buildUserContextPreamble,
  CONCIERGE_MODEL,
  type UserContext,
} from "@/lib/concierge";

export const runtime = "nodejs";
export const maxDuration = 60;

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  if (!anthropic) {
    return new Response(
      JSON.stringify({
        error:
          "Koffi est indisponible. Définis ANTHROPIC_API_KEY dans .env pour l'activer.",
      }),
      { status: 503, headers: { "Content-Type": "application/json" } },
    );
  }

  const body = (await req.json().catch(() => ({}))) as {
    messages?: ChatMessage[];
  };
  const incoming = Array.isArray(body.messages) ? body.messages : [];
  if (incoming.length === 0) {
    return new Response(
      JSON.stringify({ error: "Aucun message fourni" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  // Optional user context (works for anonymous landing visitors too)
  let context: UserContext = {};
  try {
    const user = await getCurrentUser();
    if (user) {
      context = {
        name: user.name.split(" ")[0],
        email: user.email,
        isPremium: user.isPremium,
        languages: user.languages.map((l) => l.language.name),
      };
    }
  } catch {
    // ignore — anonymous visitor
  }

  const messages: Anthropic.MessageParam[] = incoming
    .filter((m) => m && (m.role === "user" || m.role === "assistant"))
    .map((m) => ({ role: m.role, content: String(m.content).slice(0, 2000) }));

  const preamble = buildUserContextPreamble(context);
  if (preamble) {
    messages.unshift({ role: "user", content: preamble });
    messages.unshift({
      role: "assistant",
      content: "Bien noté, je personnalise mes réponses.",
    });
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const apiStream = anthropic!.messages.stream({
          model: CONCIERGE_MODEL,
          max_tokens: 600,
          system: [
            {
              type: "text",
              text: buildConciergeSystemPrompt(),
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
        controller.enqueue(encoder.encode(`\n\n[Désolé, j'ai un souci technique : ${msg}]`));
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
