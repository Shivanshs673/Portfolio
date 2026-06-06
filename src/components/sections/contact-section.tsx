"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, PhoneCall, Send } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      event.currentTarget.reset();
      setMessage("Message sent. Shivansh will respond soon.");
    } catch {
      setMessage("Email service is not configured yet. Please use the email link below.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section-wrapper relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="A contact form that feels as polished as the portfolio itself."
          description="The form posts to a server route ready for Resend deployment, with social links and contact details for quick recruiter follow-up."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Card className="glass p-6 md:p-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input name="name" placeholder="Name" required />
                <Input name="email" type="email" placeholder="Email" required />
              </div>
              <Input name="subject" placeholder="Subject" required />
              <Textarea name="message" placeholder="Message" required />

              <div className="flex flex-wrap items-center gap-3">
                <Button type="submit" variant="accent" disabled={loading}>
                  <Send className="h-4 w-4" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {message ? <p className="text-sm text-emerald-300">{message}</p> : null}
              </div>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="glass p-6 md:p-8">
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3 text-white">
                  <Mail className="h-4 w-4 text-cyan-300" />
                  shivanshs673@gmail.com
                </div>
                <div className="flex items-center gap-3 text-white">
                  <PhoneCall className="h-4 w-4 text-cyan-300" />
                  7987190176
                </div>
              </div>
            </Card>

            <Card className="glass p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Social Links</p>
              <div className="mt-4 space-y-3">
                {[
                  { label: "GitHub", href: "https://github.com/shivanshs673" },
                  { label: "LinkedIn", href: "https://linkedin.com/in/shivansh-shukla-2a9552257" },
                  { label: "LeetCode", href: "https://leetcode.com/u/Shivanshs673" },
                ].map((item) => (
                  <Button key={item.label} asChild variant="glass" size="sm" className="justify-between px-4 py-3">
                    <Link href={item.href} target="_blank" rel="noreferrer">
                      {item.label}
                      <Send className="h-4 w-4" />
                    </Link>
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
