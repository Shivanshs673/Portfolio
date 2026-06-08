"use client";

import Link from "next/link";
import { Award, ExternalLink, Calendar, Download } from "lucide-react";
import { motion } from "framer-motion";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { GlassShimmer, TiltSpotlightCard } from "@/components/motion/tilt-spotlight-card";
import { certifications } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-wrapper relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Professional credentials"
          description="Verified credentials and certifications demonstrating proficiency in software engineering methodologies and web development."
        />

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <ScrollReveal
              key={cert.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.06}
            >
              <TiltSpotlightCard
                className="h-full rounded-3xl shadow-lg shadow-slate-950/20 transition-shadow duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
                borderGradient
                glow
              >
                <Card className="glass relative flex h-full flex-col justify-between overflow-hidden p-6 sm:p-8">
                  <GlassShimmer />
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-900/10 dark:border-white/10 bg-slate-900/5 dark:bg-white/8 text-cyan-600 dark:text-cyan-300 sm:h-14 sm:w-14"
                    >
                      <Award className="h-6 w-6 sm:h-7 sm:w-7" />
                    </motion.div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200/80 sm:text-xs sm:tracking-[0.24em]">
                        {cert.issuer}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white sm:text-xl leading-snug">
                        {cert.title}
                      </h3>
                      <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>Issued: {cert.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-900/5 dark:border-white/5 flex flex-wrap items-center justify-end gap-2">
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}>
                      <Button
                        asChild
                        size="sm"
                        variant="glass"
                        className="transition-shadow duration-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                      >
                        <a href={cert.downloadUrl} download>
                          <Download className="h-3.5 w-3.5" />
                          Download PDF
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}>
                      <Button
                        asChild
                        size="sm"
                        variant="glass"
                        className="transition-shadow duration-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                      >
                        <Link href={cert.verificationUrl} target="_blank" rel="noreferrer">
                          Verify Credential
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </TiltSpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
