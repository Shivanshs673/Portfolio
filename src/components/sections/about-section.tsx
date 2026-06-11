"use client";

import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

import { ScrollReveal, StaggerReveal, staggerItem } from "@/components/motion/scroll-reveal";
import { GlassShimmer } from "@/components/motion/tilt-spotlight-card";
import { aboutPoints, education, professionalSummary } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";

export function AboutSection() {
  return (
    <section id="about" className="section-wrapper px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Android developer with a product engineering mindset"
          description={professionalSummary}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-[380px_1fr]">
          <ScrollReveal direction="left">
            <Card className="relative overflow-hidden border-card-border bg-card shadow-sm h-full min-h-[360px]">
              <GlassShimmer />
              <div className="relative h-full w-full aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-full min-h-[360px]">
                <Image
                  src="/shivansh.jpg"
                  alt="Shivansh Shukla"
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105 filter grayscale hover:grayscale-0"
                  sizes="(max-w-7xl) 380px, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#10B981]">Android Developer</p>
                  <p className="text-xl font-bold font-display text-[#F8F5EE] mt-1">Shivansh Shukla</p>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 justify-between">
            <ScrollReveal direction="up" delay={0.04}>
              <Card className="relative overflow-hidden p-6 sm:p-8 border-card-border bg-[#161616] shadow-sm">
                <GlassShimmer />
                <p className="text-xs uppercase tracking-wider text-muted font-bold mb-4">Highlights</p>
                <StaggerReveal className="flex flex-wrap gap-3">
                  {aboutPoints.map((point) => (
                    <motion.div key={point} variants={staggerItem}>
                      <Badge variant="soft" className="px-4 py-2.5 text-sm font-semibold rounded-full">
                        {point}
                      </Badge>
                    </motion.div>
                  ))}
                </StaggerReveal>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.08}>
              <Card className="relative overflow-hidden p-6 sm:p-8 border-card-border bg-[#161616] shadow-sm h-full flex items-center">
                <GlassShimmer />
                <div className="flex items-start gap-4 w-full">
                  <motion.div
                    whileHover={{ rotate: 8 }}
                    transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-card-border bg-[#1C1C1C] text-[#10B981] shadow-sm"
                  >
                    <GraduationCap className="h-6 w-6" />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted">Education</p>
                    <h3 className="mt-2 text-base font-bold font-display text-[#F8F5EE] sm:text-lg">{education.school}</h3>
                    <p className="mt-1 text-sm text-[#B8B8B8]">{education.degree}</p>
                    <p className="mt-2 text-sm text-[#B8B8B8]/80">
                      {education.location} · {education.period}
                    </p>
                    <p className="mt-1 text-sm text-[#10B981] font-semibold">{education.graduation}</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
