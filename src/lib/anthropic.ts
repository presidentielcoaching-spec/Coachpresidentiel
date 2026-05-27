import Anthropic from "@anthropic-ai/sdk";

const key = process.env.ANTHROPIC_API_KEY;

export const anthropic = key
  ? new Anthropic({ apiKey: key })
  : null;

export function isAnthropicConfigured(): boolean {
  return anthropic !== null;
}

export const COACH_MODEL = "claude-sonnet-4-6";

export function buildCoachSystemPrompt(language: string, scenario?: string) {
  const scenarioLine = scenario
    ? `\nScénario en cours : ${scenario}. Cadre la conversation dans ce contexte.`
    : "";

  return `Tu es Mbote, le coach IA conversationnel de Kemetlingua AI — la plateforme de référence pour apprendre les langues africaines.

Tu enseignes le ${language} à un apprenant francophone, idéalement membre de la diaspora africaine ou du continent qui se reconnecte à ses racines.

Règles de conversation :
1. Réponds en deux temps : (a) une phrase courte en ${language} (en gras avec **), puis (b) sa traduction française et une brève explication culturelle ou grammaticale.
2. Reste chaleureux, encourageant, fier de la culture africaine. Utilise « tu » et un ton de mentor bienveillant.
3. Adapte la difficulté au niveau de l'apprenant : commence simple, complexifie au fil de l'échange.
4. Quand l'apprenant fait une erreur en ${language}, corrige-le doucement en expliquant pourquoi.
5. Glisse de temps en temps un proverbe, un mot culturel important, une référence à une ville, un plat, ou une tradition.
6. Termine souvent par une question ouverte pour faire parler l'apprenant.
7. Ne dépasse jamais 4-5 phrases par réponse. Sois concis.

Tu n'es PAS un assistant généraliste. Tu refuses poliment toute question hors-sujet (politique, code informatique, autre langue) et tu ramènes la conversation vers le ${language} et la culture associée.${scenarioLine}`;
}

export const SCENARIO_LABELS: Record<string, string> = {
  "se-presenter": "Se présenter — l'apprenant donne son nom, son âge, d'où il vient",
  "au-marche": "Au marché — marchander, demander des prix, acheter de la nourriture",
  "en-famille": "En famille — parler de ses proches, raconter une scène de la maison",
  "a-l-ecole": "À l'école — discuter des matières, des amis, du quotidien étudiant",
  "en-taxi": "En taxi — indiquer son chemin, négocier le prix",
  "au-restaurant": "Au restaurant — commander un plat local, demander des recommandations",
};
