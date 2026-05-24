import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { prisma } from "@/lib/db";
import { requireStripe } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "STRIPE_WEBHOOK_SECRET manquant" },
      { status: 500 },
    );
  }

  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({ error: "Signature manquante" }, { status: 400 });
  }

  const body = await req.text();
  const stripe = requireStripe();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, secret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: `Signature invalide: ${msg}` },
      { status: 400 },
    );
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const userId = session.metadata?.userId;
        if (userId && session.subscription) {
          const subscriptionId =
            typeof session.subscription === "string"
              ? session.subscription
              : session.subscription.id;
          const sub = await stripe.subscriptions.retrieve(subscriptionId);
          const item = sub.items.data[0];
          const periodEnd = item?.current_period_end;
          await prisma.user.update({
            where: { id: userId },
            data: {
              isPremium: true,
              stripeSubscriptionId: sub.id,
              premiumUntil: periodEnd ? new Date(periodEnd * 1000) : null,
            },
          });
          await prisma.activity.create({
            data: {
              userId,
              kind: "premium.activated",
              payload: JSON.stringify({ subscriptionId: sub.id }),
            },
          });
        }
        break;
      }
      case "customer.subscription.updated": {
        const sub = event.data.object;
        const item = sub.items.data[0];
        const periodEnd = item?.current_period_end;
        const isActive = sub.status === "active" || sub.status === "trialing";
        await prisma.user.updateMany({
          where: { stripeSubscriptionId: sub.id },
          data: {
            isPremium: isActive,
            premiumUntil: periodEnd ? new Date(periodEnd * 1000) : null,
          },
        });
        break;
      }
      case "customer.subscription.deleted": {
        const sub = event.data.object;
        await prisma.user.updateMany({
          where: { stripeSubscriptionId: sub.id },
          data: { isPremium: false, premiumUntil: null },
        });
        break;
      }
    }
  } catch (err) {
    console.error("Webhook handler error:", err);
    return NextResponse.json({ error: "Handler failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
