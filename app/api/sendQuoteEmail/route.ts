import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { logGhlFailure, syncQuoteSubmissionToGhl, type QuoteSubmission } from "@/lib/ghl";

const LIMITS = {
  name: 100,
  businessName: 120,
  email: 254,
  phone: 40,
  existingWebsite: 200,
  need: 80,
  setup: 80,
  monthly: 80,
  interest: 120,
  projectDetails: 4000,
};

const EMAIL_TIMEOUT_MS = 8000;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function clip(value: unknown, max: number) {
  return String(value ?? "").trim().slice(0, max);
}

function generateReference() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `Q-${date}-${random}`;
}

function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms)
    ),
  ]);
}

async function sendQuoteEmail(
  submission: QuoteSubmission,
  crmWarning: string | undefined
) {
  const fromUser = process.env.GMAIL_USER;
  const appPass = process.env.GMAIL_APP_PASS;
  const inbox = process.env.QUOTE_INBOX || fromUser;

  if (!fromUser || !appPass || !inbox) {
    throw new Error("Email sender not configured (GMAIL_USER/GMAIL_APP_PASS/QUOTE_INBOX)");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: fromUser, pass: appPass },
  });

  const rows = [
    ["Reference", submission.reference],
    ["Name", submission.name],
    ["Business", submission.businessName],
    ["Email", submission.email],
    ["Phone", submission.phone || "-"],
    ["Existing website", submission.existingWebsite || "-"],
    ["Need", submission.need],
    ["Website Design & Build", submission.setup],
    ["Monthly plan noted", submission.monthly],
    ["Relay interest", submission.interest || "No"],
  ];

  const warningHtml = crmWarning
    ? `<p style="background:#3a1f1f;border-left:4px solid #ef4444;padding:10px;border-radius:4px;"><strong>CRM sync warning:</strong> ${escapeHtml(
        crmWarning
      )} Please reconcile this inquiry in GoHighLevel manually using reference <strong>${escapeHtml(
        submission.reference
      )}</strong>.</p>`
    : "";

  const emailBody = `
<div style="font-family:Arial,sans-serif;color:#F5F5F2;background:#141821;padding:20px;border-radius:10px;max-width:600px;margin:auto;">
  <h1 style="font-size:22px;color:#F0C014;margin-bottom:16px;">New website inquiry</h1>
  ${warningHtml}
  ${rows
    .map(
      ([label, value]) =>
        `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`
    )
    .join("")}
  <p><strong>Project details:</strong></p>
  <p style="background:#0B0D12;padding:10px;border-left:4px solid #F0C014;border-radius:4px;white-space:pre-wrap;">${escapeHtml(
    submission.projectDetails || "-"
  )}</p>
</div>`.trim();

  const warningText = crmWarning
    ? `\nCRM SYNC WARNING: ${crmWarning} Please reconcile manually using reference ${submission.reference}.\n`
    : "";

  const text = `New website inquiry
Reference: ${submission.reference}
${warningText}
Name: ${submission.name}
Business: ${submission.businessName}
Email: ${submission.email}
Phone: ${submission.phone || "-"}
Existing website: ${submission.existingWebsite || "-"}
Need: ${submission.need}
Website Design & Build: ${submission.setup}
Monthly plan noted: ${submission.monthly}
Relay interest: ${submission.interest || "No"}

Project details:
${submission.projectDetails || "-"}`;

  await withTimeout(
    transporter.sendMail({
      from: fromUser,
      to: inbox,
      replyTo: submission.email,
      subject: `Website inquiry: ${submission.businessName}`,
      html: emailBody,
      text,
    }),
    EMAIL_TIMEOUT_MS,
    "Gmail send"
  );
}

interface HandlerResult {
  status: number;
  body: { message: string; reference?: string };
}

async function handleSubmission(submission: QuoteSubmission): Promise<HandlerResult> {
  const ghlResult = await syncQuoteSubmissionToGhl(submission);
  if (!ghlResult.ok) {
    logGhlFailure(submission.reference, ghlResult.warning);
  }

  let emailOk = false;
  let emailError: string | undefined;
  try {
    await sendQuoteEmail(submission, ghlResult.ok ? undefined : ghlResult.warning);
    emailOk = true;
  } catch (err) {
    emailError = err instanceof Error ? err.message : String(err);
    console.error(`[quote:${submission.reference}] Gmail send failed: ${emailError}`);
  }

  if (emailOk || ghlResult.ok) {
    return {
      status: 200,
      body: { message: "Quote request sent successfully!", reference: submission.reference },
    };
  }

  // Neither destination durably captured the inquiry.
  return {
    status: 502,
    body: {
      message:
        "We couldn't send your quote request right now. Please try again in a moment, or email us directly.",
    },
  };
}

// Best-effort, single-instance de-duplication for near-simultaneous
// duplicate submissions (e.g. a double-click that slips past the client's
// own guard). This is NOT a cross-instance or cross-deploy guarantee:
// on serverless hosting each instance has its own memory, so a duplicate
// routed to a different instance will not be caught here. The durable,
// cross-instance protection is GHL's own contact upsert (matches by
// email) and the opportunity existence check before creating a new one.
const inFlightByKey = new Map<string, Promise<HandlerResult>>();
const INFLIGHT_RETENTION_MS = 60_000;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = clip(body.name, LIMITS.name);
    const businessName = clip(body.businessName, LIMITS.businessName);
    const email = clip(body.email, LIMITS.email);
    const phone = clip(body.phone, LIMITS.phone);
    const existingWebsite = clip(body.existingWebsite, LIMITS.existingWebsite);
    const need = clip(body.need, LIMITS.need);
    const setup = clip(body.setup, LIMITS.setup) || "Not sure yet";
    const setupId = typeof body.setupId === "string" ? body.setupId.trim().slice(0, 40) : null;
    const monthly = clip(body.monthly, LIMITS.monthly) || "Statica Care";
    const interest = clip(body.interest, LIMITS.interest);
    const projectDetails = clip(body.projectDetails, LIMITS.projectDetails);
    const idempotencyKey =
      typeof body.idempotencyKey === "string" ? body.idempotencyKey.trim().slice(0, 100) : "";

    if (!name || !businessName || !email || !need) {
      return NextResponse.json(
        { message: "Missing required fields: name, businessName, email, need" },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Invalid email address." }, { status: 400 });
    }

    const submission: QuoteSubmission = {
      reference: generateReference(),
      name,
      businessName,
      email,
      phone,
      existingWebsite,
      need,
      setup,
      setupId,
      monthly,
      interest,
      projectDetails,
    };

    if (idempotencyKey && inFlightByKey.has(idempotencyKey)) {
      const cached = await inFlightByKey.get(idempotencyKey)!;
      return NextResponse.json(cached.body, { status: cached.status });
    }

    const resultPromise = handleSubmission(submission);
    if (idempotencyKey) {
      inFlightByKey.set(idempotencyKey, resultPromise);
      resultPromise.finally(() => {
        setTimeout(() => inFlightByKey.delete(idempotencyKey), INFLIGHT_RETENTION_MS);
      });
    }

    const result = await resultPromise;
    return NextResponse.json(result.body, { status: result.status });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Quote submission error:", message);
    return NextResponse.json(
      { message: "Failed to send quote request." },
      { status: 502 }
    );
  }
}
