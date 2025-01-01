import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, selectedItems, projectDetails } = body;

        if (!name || !email || !projectDetails || !selectedItems) {
            return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
        }

        // Ensure environment variables are defined
        const senderEmail = process.env.SENDGRID_FROM_EMAIL ?? '';
        if (!senderEmail) {
            throw new Error('SENDGRID_FROM_EMAIL environment variable is not defined.');
        }

        const emailBody = `
<div style="font-family: Arial, sans-serif; color: #E5E7EB; background: #1F2937; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto; box-shadow: 0 4px 6px rgba(0,0,0,0.5);">
        <h1 style="font-size: 24px; color: #6366F1; text-align: center; margin-bottom: 20px;">New Quote Request</h1>
        <p style="font-size: 16px; color: #9CA3AF; line-height: 1.5; margin-bottom: 10px;">
            <strong style="color: #E5E7EB;">Name:</strong> ${name}
        </p>
        <p style="font-size: 16px; color: #9CA3AF; line-height: 1.5; margin-bottom: 10px;">
            <strong style="color: #E5E7EB;">Email:</strong> ${email}
        </p>
        <p style="font-size: 16px; color: #9CA3AF; line-height: 1.5; margin-bottom: 10px;">
            <strong style="color: #E5E7EB;">Selected Items:</strong>
        </p>
        <ul style="padding-left: 20px; margin-bottom: 20px; color: #9CA3AF; font-size: 16px; line-height: 1.6;">
            ${Object.entries(selectedItems)
                .map(([item, count]) => `<li style="margin-bottom: 5px;">${item} <span style="color: #6366F1; font-weight: bold;">x${count}</span></li>`)
                .join('')}
        </ul>
        <p style="font-size: 16px; color: #9CA3AF; line-height: 1.5; margin-bottom: 10px;">
            <strong style="color: #E5E7EB;">Project Details:</strong>
        </p>
        <p style="font-size: 16px; color: #D1D5DB; line-height: 1.6; background: #374151; padding: 10px; border-left: 4px solid #6366F1; border-radius: 4px;">
            ${projectDetails}
        </p>
    </div>
`;


        const msg = {
            to: senderEmail, // Recipient email
            from: senderEmail, // Verified sender email
            subject: 'New Quote Request',
            html: emailBody,
        };

        await sgMail.send(msg);

        return NextResponse.json({ message: 'Quote request sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send quote request. Please try again.' }, { status: 500 });
    }
}
