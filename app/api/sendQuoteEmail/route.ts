import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type SelectedItems =
  | Record<string, number>
  | Array<{ item: string; count: number }>;

function renderItems(selected: SelectedItems) {
  const entries = Array.isArray(selected)
    ? selected.map(({ item, count }) => [item, count] as const)
    : Object.entries(selected);
  return entries
    .map(([item, count]) =>
      `<li style="margin-bottom:5px;">${String(item)} <span style="font-weight:bold;">x${Number(count) || 0}</span></li>`
    )
    .join('');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, selectedItems, projectDetails } = body || {};

    if (!name || !email || !projectDetails || !selectedItems) {
      return NextResponse.json(
        { message: 'Missing: name, email, projectDetails, selectedItems' },
        { status: 400 }
      );
    }

    const fromUser = process.env.GMAIL_USER;
    const appPass  = process.env.GMAIL_APP_PASS;
    const inbox    = process.env.QUOTE_INBOX || fromUser;

    if (!fromUser || !appPass || !inbox) {
      return NextResponse.json(
        { message: 'Email sender not configured (GMAIL_USER/GMAIL_APP_PASS/QUOTE_INBOX)' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: fromUser, pass: appPass },
    });

    const emailBody = `
<div style="font-family:Arial,sans-serif;color:#E5E7EB;background:#1F2937;padding:20px;border-radius:10px;max-width:600px;margin:auto;">
  <h1 style="font-size:24px;color:#6366F1;text-align:center;margin-bottom:20px;">New Quote Request</h1>
  <p><strong>Name:</strong> ${String(name)}</p>
  <p><strong>Email:</strong> ${String(email)}</p>
  <p><strong>Selected Items:</strong></p>
  <ul style="padding-left:20px;margin-bottom:20px;">${renderItems(selectedItems as SelectedItems)}</ul>
  <p><strong>Project Details:</strong></p>
  <p style="background:#374151;padding:10px;border-left:4px solid #6366F1;border-radius:4px;">${String(projectDetails)}</p>
</div>`.trim();

    await transporter.sendMail({
      from: fromUser,           // must be the Workspace mailbox with the app password
      to: inbox,                // where you want to receive leads
      replyTo: email,           // lets you reply to the requester
      subject: 'New Quote Request',
      html: emailBody,
      text: `New Quote Request\n\nName: ${name}\nEmail: ${email}\n\nProject Details:\n${projectDetails}`,
    });

    return NextResponse.json({ message: 'Quote request sent successfully!' });
  } catch (err: any) {
    console.error('Gmail send error:', err?.response || err);
    return NextResponse.json(
      { message: 'Failed to send quote request.', detail: String(err?.message || err) },
      { status: 502 }
    );
  }
}
