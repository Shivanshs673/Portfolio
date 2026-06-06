import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const name = body.name?.trim();
  const email = body.email?.trim();
  const subject = body.subject?.trim();
  const message = body.message?.trim();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.RESEND_TO_EMAIL ?? "shivanshs673@gmail.com";

  if (!apiKey || !fromEmail) {
    return NextResponse.json(
      {
        message: "Contact service is not configured. Set RESEND_API_KEY and RESEND_FROM_EMAIL to enable email delivery.",
      },
      { status: 501 },
    );
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: email,
    subject: `Portfolio contact: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2>New portfolio contact submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
