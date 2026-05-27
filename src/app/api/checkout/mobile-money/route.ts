import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import {
  PREMIUM_PRICE_XOF,
  SUPPORT_WHATSAPP,
  WAVE_PAYMENT_URL,
} from "@/lib/payments";

export const runtime = "nodejs";

const ALLOWED = new Set(["orange_money", "wave"]);

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Non connecté" }, { status: 401 });
  }
  if (user.isPremium) {
    return NextResponse.json({ error: "Déjà Premium" }, { status: 400 });
  }

  const body = (await req.json().catch(() => ({}))) as {
    provider?: string;
    phone?: string;
    action?: "intent" | "claim_paid";
    pendingId?: string;
  };
  const provider = (body.provider ?? "").trim();
  const action = body.action ?? "intent";

  if (!ALLOWED.has(provider)) {
    return NextResponse.json({ error: "Fournisseur invalide" }, { status: 400 });
  }

  // ---- Étape 2 : l'utilisateur déclare avoir payé ----
  if (action === "claim_paid") {
    const id = (body.pendingId ?? "").trim();
    if (!id) {
      return NextResponse.json({ error: "Référence manquante" }, { status: 400 });
    }
    const pending = await prisma.pendingPayment.findFirst({
      where: { id, userId: user.id },
    });
    if (!pending) {
      return NextResponse.json({ error: "Référence inconnue" }, { status: 404 });
    }
    await prisma.pendingPayment.update({
      where: { id: pending.id },
      data: { status: "claim_paid" },
    });
    await prisma.activity.create({
      data: {
        userId: user.id,
        kind: "payment.claim_paid",
        payload: JSON.stringify({ provider, pendingId: pending.id }),
      },
    });

    const message = encodeURIComponent(
      `Bonjour, je viens de payer mon Pass Premium Kemetlingua AI (${provider === "wave" ? "Wave" : "Orange Money"}). Mon compte : ${user.name} / ${user.email}. Référence : ${pending.id}. Voici la capture de mon paiement.`,
    );
    const whatsappUrl = SUPPORT_WHATSAPP
      ? `https://wa.me/${SUPPORT_WHATSAPP}?text=${message}`
      : null;

    return NextResponse.json({
      id: pending.id,
      status: "claim_paid",
      whatsappUrl,
      message:
        "Paiement déclaré ! Envoie-nous la capture via WhatsApp et on active ton Premium en quelques minutes.",
    });
  }

  // ---- Étape 1 : création de l'intention ----
  const phone = (body.phone ?? "").trim();

  // Pour Orange Money on exige le téléphone tout de suite (matchera le paiement)
  if (provider === "orange_money" && !/^\+?\d{8,16}$/.test(phone)) {
    return NextResponse.json(
      { error: "Numéro de téléphone invalide" },
      { status: 400 },
    );
  }

  const pending = await prisma.pendingPayment.create({
    data: {
      userId: user.id,
      provider,
      phone: phone || null,
      email: user.email,
      amountCents: 500, // référence EUR
      currency: provider === "wave" ? "XOF" : "EUR",
      status: "pending",
    },
  });

  // Wave : on renvoie le lien direct + tout le nécessaire pour le QR (côté client)
  if (provider === "wave") {
    return NextResponse.json({
      id: pending.id,
      provider: "wave",
      paymentUrl: WAVE_PAYMENT_URL,
      amountXof: PREMIUM_PRICE_XOF,
      message:
        "Scanne le QR ou clique sur le bouton pour payer 3 250 XOF avec Wave.",
    });
  }

  // Orange Money : on continue à passer par WhatsApp pour validation manuelle
  const message = encodeURIComponent(
    `Bonjour, je suis ${user.name} (${user.email}). Je veux activer mon Pass Premium Kemetlingua AI via Orange Money depuis le numéro ${phone}. Ma référence : ${pending.id}`,
  );
  const whatsappUrl = SUPPORT_WHATSAPP
    ? `https://wa.me/${SUPPORT_WHATSAPP}?text=${message}`
    : null;

  return NextResponse.json({
    id: pending.id,
    provider: "orange_money",
    whatsappUrl,
    message:
      "Demande enregistrée. Notre équipe valide ton paiement Orange Money sous 1 h ouvrée.",
  });
}
