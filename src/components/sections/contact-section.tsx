"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, PhoneCall, Send } from "lucide-react";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SuccessCheckmark } from "@/components/motion/micro-interactions";
import { socialLinks, contactInfo } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";

type FormStatus = { type: "success" | "error"; text: string } | null;

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    subject || "Portfolio Contact"
  )}&body=${encodeURIComponent(
    `Hello Shivansh,\n\n${message}\n\nBest regards,\n${name}\nEmail: ${email}`
  )}`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = event.currentTarget;
    const payload = { name, email, subject, message };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: { error?: string; message?: string } = {};
      try {
        data = (await response.json()) as { error?: string; message?: string };
      } catch {
        throw new Error("Invalid server response");
      }

      if (!response.ok) {
        setStatus({ type: "error", text: data.error ?? "Unable to send message. Please try again." });
        return;
      }

      form.reset();
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setStatus({ type: "success", text: "Message sent! I'll get back to you soon." });
    } catch {
      setStatus({
        type: "error",
        text: `Something went wrong. Please email me directly at ${contactInfo.email}.`,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section-wrapper relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="Have an opportunity, question, or collaboration in mind? Send a message and I'll respond as soon as I can."
        />

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal direction="up">
            <Card className="glass p-5 sm:p-6 md:p-8">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    disabled={loading}
                    className="motion-safe-focus"
                  />
                  <Input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    disabled={loading}
                    className="motion-safe-focus"
                  />
                </div>
                <Input
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                  required
                  disabled={loading}
                  className="motion-safe-focus"
                />
                <Textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                  rows={5}
                  required
                  disabled={loading}
                  className="motion-safe-focus"
                />

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Button type="submit" variant="accent" disabled={loading} className="w-full sm:w-auto">
                    <Send className="h-4 w-4" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                  {status?.type === "error" && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full sm:w-auto border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10"
                    >
                      <a href={mailtoUrl}>
                        Send via Email App
                      </a>
                    </Button>
                  )}
                  <AnimatePresence mode="wait">
                    {status ? (
                      <motion.p
                        key={status.text}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        className={`flex items-center gap-2 text-sm ${status.type === "success" ? "text-emerald-300" : "text-red-300"}`}
                      >
                        {status.type === "success" ? <SuccessCheckmark /> : null}
                        {status.text}
                      </motion.p>
                    ) : null}
                  </AnimatePresence>
                </div>
              </form>
            </Card>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal direction="right" delay={0.06}>
              <Card className="glass p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Direct contact</p>
                <div className="mt-4 space-y-4 text-sm">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-white transition hover:text-cyan-200"
                  >
                    <Mail className="h-4 w-4 text-cyan-300" />
                    {contactInfo.email}
                  </a>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-white transition hover:text-cyan-200"
                  >
                    <PhoneCall className="h-4 w-4 text-cyan-300" />
                    {contactInfo.phone}
                  </a>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.12}>
              <Card className="glass p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Social</p>
                <div className="mt-4 space-y-3">
                  {socialLinks.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ x: 6 }}
                      transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}
                    >
                      <Button asChild variant="glass" size="sm" className="w-full justify-between px-4 py-3">
                        <Link href={item.href} target="_blank" rel="noreferrer">
                          {item.name}
                          <motion.span whileHover={{ x: 4 }} transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}>
                            <Send className="h-4 w-4" />
                          </motion.span>
                        </Link>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
