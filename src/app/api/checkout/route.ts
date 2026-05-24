import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { requireStripe } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Non connecté" }, { status: 401 });
  }
  if (user.isPremium) {
    return NextResponse.json({ error: "Déjà Premium" }, { status: 400 });
  }

  const priceId = process.env.STRIPE_PRICE_ID;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  if (!priceId) {
    return NextResponse.json(
      {
        error:
          "Stripe non configuré. Définis STRIPE_SECRET_KEY et STRIPE_PRICE_ID.",
      },
      { status: 500 },
    );
  }

  let stripe;
  try {
    stripe = requireStripe();
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Stripe indisponible" },
      { status: 500 },
    );
  }

  let customerId = user.stripeCustomerId;
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email,
      name: user.name,
      metadata: { userId: user.id },
    });
    customerId = customer.id;
    await prisma.user.update({
      where: { id: user.id },
      data: { stripeCustomerId: customerId },
    });
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: customerId,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${siteUrl}/boutique/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/boutique?canceled=1`,
    allow_promotion_codes: true,
    billing_address_collection: "auto",
    locale: "fr",
    subscription_data: { metadata: { userId: user.id } },
    metadata: { userId: user.id },
  });

  return NextResponse.json({ url: session.url });
}
