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
          description="Verified professional technical credentials from Infosys Springboard."
        />

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <ScrollReveal
              key={cert.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.06}
            >
              <TiltSpotlightCard
                className="h-full rounded-[24px] shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-[#10B981]/5"
                borderGradient
                glow
              >
                <Card className="relative flex h-full flex-col justify-between overflow-hidden p-6 sm:p-8 border-card-border bg-card">
                  <GlassShimmer />
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-card-border bg-[#161616] text-[#10B981] sm:h-14 sm:w-14 shadow-sm"
                    >
                      <Award className="h-6 w-6 sm:h-7 sm:w-7" />
                    </motion.div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#10B981] font-semibold">
                        {cert.issuer}
                      </p>
                      <h3 className="mt-2 text-lg font-bold font-display text-[#F8F5EE] sm:text-xl leading-snug">
                        {cert.title}
                      </h3>
                      <div className="mt-3 flex items-center gap-1.5 text-xs text-[#B8B8B8]/80">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>Issued: {cert.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-card-border flex flex-wrap items-center justify-end gap-2">
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}>
                      <Button
                        asChild
                        size="sm"
                        variant="glass"
                        className="transition-shadow duration-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] border-card-border text-[#F8F5EE]"
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
                        className="transition-shadow duration-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] border-card-border text-[#F8F5EE]"
                      >
                        <a href={cert.downloadUrl} target="_blank" rel="noopener noreferrer">
                          View Certificate
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
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
