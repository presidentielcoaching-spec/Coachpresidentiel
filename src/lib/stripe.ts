import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY;

export const stripe = key
  ? new Stripe(key, {
      apiVersion: "2026-04-22.dahlia",
      typescript: true,
      appInfo: { name: "Kemetlingua AI", version: "0.1.0" },
    })
  : null;

export function requireStripe(): Stripe {
  if (!stripe) {
    throw new Error(
      "Stripe n'est pas configuré. Définis STRIPE_SECRET_KEY dans .env",
    );
  }
  return stripe;
}

export const PREMIUM_PRICE_EUR_CENTS = 500;
