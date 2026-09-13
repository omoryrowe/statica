import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
    const monthly = clip(body.monthly, LIMITS.monthly) || "Statica Care";
    const interest = clip(body.interest, LIMITS.interest);
    const projectDetails = clip(body.projectDetails, LIMITS.projectDetails);

    if (!name || !businessName || !email || !need) {
      return NextResponse.json(
        { message: "Missing required fields: name, businessName, email, need" },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Invalid email address." }, { status: 400 });
    }

    const fromUser = process.env.GMAIL_USER;
    const appPass = process.env.GMAIL_APP_PASS;
    const inbox = process.env.QUOTE_INBOX || fromUser;

    if (!fromUser || !appPass || !inbox) {
      return NextResponse.json(
        { message: "Email sender not configured (GMAIL_USER/GMAIL_APP_PASS/QUOTE_INBOX)" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: fromUser, pass: appPass },
    });

    const rows = [
      ["Name", name],
      ["Business", businessName],
      ["Email", email],
      ["Phone", phone || "-"],
      ["Existing website", existingWebsite || "-"],
      ["Need", need],
      ["Website setup", setup],
      ["Monthly plan noted", monthly],
      ["Relay interest", interest || "No"],
    ];

    const emailBody = `
<div style="font-family:Arial,sans-serif;color:#F5F5F2;background:#141821;padding:20px;border-radius:10px;max-width:600px;margin:auto;">
  <h1 style="font-size:22px;color:#F0C014;margin-bottom:16px;">New website inquiry</h1>
  ${rows
    .map(
      ([label, value]) =>
        `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`
    )
    .join("")}
  <p><strong>Project details:</strong></p>
  <p style="background:#0B0D12;padding:10px;border-left:4px solid #F0C014;border-radius:4px;white-space:pre-wrap;">${escapeHtml(
    projectDetails || "-"
  )}</p>
</div>`.trim();

    const text = `New website inquiry

Name: ${name}
Business: ${businessName}
Email: ${email}
Phone: ${phone || "-"}
Existing website: ${existingWebsite || "-"}
Need: ${need}
Website setup: ${setup}
Monthly plan noted: ${monthly}
Relay interest: ${interest || "No"}

Project details:
${projectDetails || "-"}`;

    await transporter.sendMail({
      from: fromUser,
      to: inbox,
      replyTo: email,
      subject: `Website inquiry: ${businessName}`,
      html: emailBody,
      text,
    });

    return NextResponse.json({ message: "Quote request sent successfully!" });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Gmail send error:", message);
    return NextResponse.json(
      { message: "Failed to send quote request." },
      { status: 502 }
    );
  }
}
