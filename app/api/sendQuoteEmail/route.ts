import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { describeAttribution, sanitizeAttribution } from "@/lib/attribution";
import { logGhlFailure, syncQuoteSubmissionToGhl, type QuoteSubmission } from "@/lib/ghl";

const LIMITS = {
  name: 100,
  businessName: 120,
  email: 254,
  phone: 40,
  existingWebsite: 200,
  projectDetails: 4000,
};

const EMAIL_TIMEOUT_MS = 8000;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^[+]?[()\d\s.-]{7,20}$/;

function isValidPhone(value: string) {
  const digitCount = value.replace(/\D/g, "").length;
  return PHONE_REGEX.test(value) && digitCount >= 7 && digitCount <= 15;
}

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
    ["Website or social page", submission.existingWebsite || "-"],
    ...describeAttribution(submission.attribution).map((line): [string, string] => {
      const [label, ...rest] = line.split(": ");
      return [label, rest.join(": ")];
    }),
  ];

  // Statica site theme tokens (tailwind.config.js): ink #0B0D12, ink-raised
  // #141821, ink-line #2A3140, paper #F5F5F2, mist #B8BDC9, bolt #F0C014.
  const warningHtml = crmWarning
    ? `<p style="background:#2a1414;border-left:4px solid #ef4444;padding:12px 14px;border-radius:8px;color:#F5F5F2;margin:0 0 20px;"><strong style="color:#ef4444;">CRM sync warning:</strong> ${escapeHtml(
        crmWarning
      )} Please reconcile this inquiry in GoHighLevel manually using reference <strong>${escapeHtml(
        submission.reference
      )}</strong>.</p>`
    : "";

  const rowsHtml = rows
    .map(
      ([label, value], i) =>
        `<tr>
          <td style="padding:${i === 0 ? "0" : "14px"} 0 4px;border-top:${
          i === 0 ? "none" : "1px solid #2A3140"
        };font-family:Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#B8BDC9;">${escapeHtml(
          label
        )}</td>
        </tr>
        <tr>
          <td style="padding:0 0 2px;font-family:Arial,sans-serif;font-size:15px;color:#F5F5F2;">${escapeHtml(
            value
          )}</td>
        </tr>`
    )
    .join("");

  const emailBody = `
<div style="background:#0B0D12;padding:32px 16px;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:auto;background:#141821;border:1px solid #2A3140;border-radius:16px;padding:28px 28px 24px;">
    <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.24em;text-transform:uppercase;color:#F0C014;">Statica &bull; Free Homepage Preview</p>
    <h1 style="font-size:22px;line-height:1.25;color:#F5F5F2;margin:0 0 20px;">New free homepage preview request</h1>
    ${warningHtml}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      ${rowsHtml}
    </table>
    <p style="margin:20px 0 4px;padding-top:14px;border-top:1px solid #2A3140;font-family:Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#B8BDC9;">Anything they'd like us to know</p>
    <p style="background:#0B0D12;border:1px solid #2A3140;padding:14px;border-left:3px solid #F0C014;border-radius:8px;white-space:pre-wrap;color:#F5F5F2;font-size:15px;margin:6px 0 0;">${escapeHtml(
      submission.projectDetails || "-"
    )}</p>
  </div>
</div>`.trim();

  const warningText = crmWarning
    ? `\nCRM SYNC WARNING: ${crmWarning} Please reconcile manually using reference ${submission.reference}.\n`
    : "";

  const attributionLines = describeAttribution(submission.attribution);
  const attributionText = attributionLines.length ? "\n" + attributionLines.join("\n") : "";

  const text = `New free homepage preview request
Reference: ${submission.reference}
${warningText}
Name: ${submission.name}
Business: ${submission.businessName}
Email: ${submission.email}
Phone: ${submission.phone || "-"}
Website or social page: ${submission.existingWebsite || "-"}${attributionText}

Anything they'd like us to know:
${submission.projectDetails || "-"}`;

  await withTimeout(
    transporter.sendMail({
      from: fromUser,
      to: inbox,
      replyTo: submission.email,
      subject: `Free homepage preview request: ${submission.businessName}`,
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
      body: { message: "Preview request sent successfully!", reference: submission.reference },
    };
  }

  // Neither destination durably captured the inquiry.
  return {
    status: 502,
    body: {
      message:
        "We couldn't send your preview request right now. Please try again in a moment, or email us directly.",
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
    const projectDetails = clip(body.projectDetails, LIMITS.projectDetails);
    const idempotencyKey =
      typeof body.idempotencyKey === "string" ? body.idempotencyKey.trim().slice(0, 100) : "";

    if (!name || !businessName || !email) {
      return NextResponse.json(
        { message: "Missing required fields: name, email, businessName" },
        { status: 400 }
      );
    }
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ message: "Invalid email address." }, { status: 400 });
    }
    if (phone && !isValidPhone(phone)) {
      return NextResponse.json({ message: "Invalid phone number." }, { status: 400 });
    }

    const submission: QuoteSubmission = {
      reference: generateReference(),
      name,
      businessName,
      email,
      phone,
      existingWebsite,
      projectDetails,
      attribution: sanitizeAttribution(body.attribution) ?? undefined,
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
      { message: "Failed to send preview request." },
      { status: 502 }
    );
  }
}
