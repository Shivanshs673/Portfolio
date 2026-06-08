import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email is required"),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000),
});

function readEnv(name: string) {
  const raw = process.env[name];
  if (!raw) return undefined;

  const trimmed = raw.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }

  return trimmed;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function resendErrorMessage(error: { message?: string; name?: string }) {
  const message = error.message?.trim();
  if (!message) {
    return "Failed to send email. Please try again or email shivanshs673@gmail.com directly.";
  }

  if (message.toLowerCase().includes("only send testing emails")) {
    return "Email delivery is in test mode. Set RESEND_TO_EMAIL on Vercel to the same email you used to sign up for Resend, or verify a custom domain in Resend.";
  }

  if (message.toLowerCase().includes("invalid") && message.toLowerCase().includes("from")) {
    return "Invalid sender address. On Vercel, set RESEND_FROM_EMAIL to: Portfolio <onboarding@resend.dev> (no extra quotes).";
  }

  return message;
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Invalid form data";
    return NextResponse.json({ error: firstError }, { status: 400 });
  }

  const { name, email, subject, message } = parsed.data;

  const apiKey = readEnv("RESEND_API_KEY");
  const fromEmail = readEnv("RESEND_FROM_EMAIL") ?? "Portfolio <onboarding@resend.dev>";
  const toEmail = readEnv("RESEND_TO_EMAIL") ?? "shivanshs673@gmail.com";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email API key is not configured. Please email shivanshs673@gmail.com directly." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: email,
    subject: `Portfolio: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a; max-width: 600px;">
        <h2 style="color: #0e7490;">New message from your portfolio</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="color: #64748b; font-size: 13px;">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: resendErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ ok: true, message: "Message sent successfully." });
}
