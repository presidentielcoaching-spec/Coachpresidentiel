// Configuration des paiements alternatifs (Wave, Orange Money) pour la zone XOF.
// Le tarif principal est 5€ — converti à 3 250 XOF pour le lien Wave statique.

export const PREMIUM_PRICE_EUR_CENTS = 500;
export const PREMIUM_PRICE_XOF = 3250;

export const WAVE_PAYMENT_URL =
  process.env.NEXT_PUBLIC_WAVE_PAYMENT_URL ??
  "https://pay.wave.com/m/M_ci_My8ie08PheC3/c/ci/?amount=3250";

export const SUPPORT_WHATSAPP =
  process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP ?? "";

export const SUPPORT_EMAIL =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "premium@kemetlingua.com";

export function formatXOF(amount: number): string {
  return new Intl.NumberFormat("fr-FR").format(amount) + " XOF";
}
