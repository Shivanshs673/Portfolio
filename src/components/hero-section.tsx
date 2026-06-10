"use client";

import Link from "next/link";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { HeroParticles, TwinkleStars } from "@/components/motion/hero-effects";
import { HeroLogo } from "@/components/motion/hero-logo";
import { Magnetic } from "@/components/motion/tilt-spotlight-card";
import { StaggerReveal, WordReveal, staggerItem } from "@/components/motion/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contactInfo, heroHighlights, quickFacts } from "@/lib/data";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";

function TypingLine() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => setIndex((value) => (value + 1) % heroHighlights.length), 2400);
    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.base, ease: EASE_OUT_EXPO }}
      className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/20 bg-[#10B981]/8 px-4 py-1.5 text-xs font-semibold text-[#10B981] shadow-sm"
    >
      <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_12px_rgba(16,185,129,0.5)] animate-pulse" />
      {heroHighlights[index]}
    </motion.span>
  );
}

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden pt-16 sm:pt-24 lg:pt-32 pb-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.06),transparent_40%)] dark:bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),rgba(11,11,11,0)_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(var(--card-border)_1px,transparent_1px),linear-gradient(90deg,var(--card-border)_1px,transparent_1px)] bg-[size:96px_96px] opacity-10 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      </div>

      <TwinkleStars />
      <HeroParticles />

      <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
        <div className="relative z-10 pt-8 text-center sm:pt-12 lg:pt-20">
          <HeroLogo size={190} />
          
          <div className="mt-8">
            <TypingLine />
          </div>

          <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.base, delay: 0.15, ease: EASE_OUT_EXPO }}
              className="text-xs uppercase tracking-[0.3em] text-[#10B981] sm:text-sm sm:tracking-[0.4em] font-semibold"
            >
              Android & Software Developer
            </motion.p>
            <WordReveal text="Shivansh Shukla" as="h1" className="text-5xl font-bold tracking-tight text-[#F8F5EE] sm:text-6xl md:text-7xl lg:text-8xl font-display" />
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.slow, delay: 0.45, ease: EASE_OUT_EXPO }}
              className="mx-auto max-w-2xl text-base leading-relaxed text-[#B8B8B8]/90 sm:text-lg sm:leading-relaxed lg:text-xl font-sans"
            >
              Hi, I&apos;m Shivansh. I build high-performance native Android apps using Kotlin, Jetpack Compose, and Clean Architecture.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.base, delay: 0.6, ease: EASE_OUT_EXPO }}
              className="flex flex-wrap items-center justify-center gap-2 pt-2"
            >
              <Badge variant="soft" className="flex items-center gap-1.5 border-[#10B981]/20 bg-[#10B981]/8 text-[#10B981] font-semibold rounded-full px-3 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34D399] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]"></span>
                </span>
                Open to Work
              </Badge>
              <Badge variant="soft" className="border-white/10 bg-white/5 text-[#F8F5EE] font-semibold rounded-full px-3 py-1">
                Based in India
              </Badge>
              <Badge variant="soft" className="border-white/10 bg-white/5 text-[#F8F5EE] font-semibold rounded-full px-3 py-1">
                Available for Internship / Full-time
              </Badge>
            </motion.div>
          </div>

          <StaggerReveal className="mt-10 flex w-full flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center" stagger={0.12}>
            <motion.div variants={staggerItem}>
              <Magnetic strength={0.18}>
                <Button asChild size="lg" variant="accent" className="w-full sm:w-auto font-semibold px-8 py-3 rounded-full hover:shadow-[0_0_24px_rgba(16,185,129,0.35)] transition-shadow duration-500">
                  <Link href="#projects">
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Magnetic strength={0.18}>
                <Button size="lg" variant="glass" className="w-full sm:w-auto font-semibold px-8 py-3 rounded-full border border-card-border bg-[#161616]/40 backdrop-blur-xl text-[#F8F5EE] hover:bg-[#1C1C1C]/60" onClick={() => window.open("/resume.pdf", "_blank", "noopener,noreferrer")}>
                  Download Resume
                  <Download className="h-4 w-4" />
                </Button>
              </Magnetic>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Magnetic strength={0.18}>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto font-semibold px-8 py-3 rounded-full border border-card-border text-[#F8F5EE] hover:bg-[#161616]">
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </Magnetic>
            </motion.div>
          </StaggerReveal>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.base, delay: reducedMotion ? 0 : 0.75, ease: EASE_OUT_EXPO }}
            className="mt-10 flex flex-col items-center gap-3 text-sm text-[#B8B8B8] sm:mt-12 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 font-medium"
          >
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex max-w-full items-center gap-2 break-all transition hover:text-[#10B981] sm:break-normal"
            >
              <Mail className="h-4 w-4 shrink-0 text-[#10B981]" />
              {contactInfo.email}
            </a>
            <span className="hidden text-card-border sm:inline">·</span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-[#10B981]" />
              {contactInfo.location}
            </span>
          </motion.div>

          <StaggerReveal className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5" stagger={0.08}>
            {quickFacts.map((fact) => (
              <motion.div key={fact.label} variants={staggerItem} className="rounded-2xl border border-card-border bg-[#161616] p-5 shadow-sm backdrop-blur-2xl transition-colors duration-300">
                <p className="text-xs uppercase tracking-[0.25em] text-[#B8B8B8] font-semibold">{fact.label}</p>
                <p className="mt-3 text-base text-[#F8F5EE] font-bold">{fact.value}</p>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
