"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { HeroAndroidLogo, HeroParticles, TwinkleStars } from "@/components/motion/hero-effects";
import { StaggerReveal, WordReveal, staggerItem } from "@/components/motion/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contactInfo, heroHighlights, quickFacts } from "@/lib/data";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";

const HeroScene = dynamic(() => import("@/components/hero-scene").then((mod) => mod.HeroScene), { ssr: false });

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
      className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 dark:border-white/10 bg-slate-900/5 dark:bg-white/8 px-3 py-1 text-xs font-medium text-cyan-800 dark:text-cyan-100"
    >
      <span className="h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.8)]" />
      {heroHighlights[index]}
    </motion.span>
  );
}

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden pt-10 sm:pt-16 lg:pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_35%)] dark:bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.28),rgba(15,23,42,0)_35%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,1))]" />
        <div className="absolute inset-0 bg-[linear-gradient(var(--card-border)_1px,transparent_1px),linear-gradient(90deg,var(--card-border)_1px,transparent_1px)] bg-[size:96px_96px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      </div>

      <TwinkleStars />
      <HeroParticles />
      <HeroAndroidLogo />

      <div className="absolute inset-x-0 top-0 z-0 hidden h-[360px] opacity-30 sm:block sm:h-[480px]">
        <HeroScene />
      </div>

      <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
        <div className="relative z-10 pt-8 text-center sm:pt-12 lg:pt-20">
          <TypingLine />
          <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.base, delay: 0.15, ease: EASE_OUT_EXPO }}
              className="text-xs uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-200/80 sm:text-sm sm:tracking-[0.35em]"
            >
              Android & Software Developer
            </motion.p>
            <WordReveal text="Shivansh Shukla" as="h1" className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl" />
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.slow, delay: 0.45, ease: EASE_OUT_EXPO }}
              className="mx-auto max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8 lg:text-xl"
            >
              Hi, I&apos;m Shivansh. I build clean, high-performance native Android applications with Kotlin, Jetpack Compose, and clean architecture. Currently looking for Software Engineering and Android Development opportunities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.base, delay: 0.6, ease: EASE_OUT_EXPO }}
              className="flex flex-wrap items-center justify-center gap-2 pt-2"
            >
              <Badge variant="soft" className="flex items-center gap-1.5 border-emerald-400/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Open to Work
              </Badge>
              <Badge variant="soft" className="border-cyan-400/20 bg-cyan-500/10 text-cyan-800 dark:text-cyan-200">
                Based in India
              </Badge>
              <Badge variant="soft" className="border-violet-400/20 bg-violet-500/10 text-violet-800 dark:text-violet-200">
                Available for Internship / Full-time
              </Badge>
            </motion.div>
          </div>

          <StaggerReveal className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center" stagger={0.12}>
            <motion.div variants={staggerItem}>
              <Button asChild size="lg" variant="accent" className="w-full sm:w-auto">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Button asChild size="lg" variant="glass" className="w-full sm:w-auto">
                <Link href="/resume.pdf" download="Shivansh_Shukla_Resume.pdf">
                  Download Resume
                  <Download className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </motion.div>
          </StaggerReveal>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.base, delay: reducedMotion ? 0 : 0.75, ease: EASE_OUT_EXPO }}
            className="mt-8 flex flex-col items-center gap-3 text-sm text-slate-600 dark:text-slate-300 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
          >
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex max-w-full items-center gap-2 break-all transition hover:text-slate-900 dark:hover:text-white sm:break-normal"
            >
              <Mail className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-300" />
              {contactInfo.email}
            </a>
            <span className="hidden text-slate-300 dark:text-slate-600 sm:inline">·</span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-300" />
              {contactInfo.location}
            </span>
          </motion.div>

          <StaggerReveal className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4" stagger={0.08}>
            {quickFacts.map((fact) => (
              <motion.div key={fact.label} variants={staggerItem} className="rounded-2xl border border-slate-900/10 dark:border-white/10 bg-slate-900/5 dark:bg-white/8 p-4 backdrop-blur-2xl sm:rounded-3xl">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 sm:tracking-[0.24em]">{fact.label}</p>
                <p className="mt-2 text-sm text-slate-900 dark:text-white">{fact.value}</p>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
