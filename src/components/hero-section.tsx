"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { Button } from "@/components/ui/button";
import { contactInfo, heroHighlights, quickFacts } from "@/lib/data";

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
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-medium text-cyan-100">
      <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.8)]" />
      {heroHighlights[index]}
    </span>
  );
}

export function HeroSection() {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    gsap.fromTo(titleRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power4.out" });
  }, [reducedMotion]);

  return (
    <section id="home" className="relative overflow-hidden pt-10 sm:pt-16 lg:pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.28),rgba(15,23,42,0)_35%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,1))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:96px_96px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      </div>

      <div className="absolute inset-x-0 top-0 z-0 hidden h-[360px] opacity-30 sm:block sm:h-[480px]">
        <HeroScene />
      </div>

      <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
        <div ref={titleRef} className="relative z-10 pt-8 text-center sm:pt-12 lg:pt-20">
          <TypingLine />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-5 space-y-4 sm:mt-6 sm:space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80 sm:text-sm sm:tracking-[0.35em]">
              Android & Software Developer
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Shivansh Shukla
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:text-xl">
              Building scalable Android applications with Kotlin, Jetpack Compose, Supabase, and MVVM architecture.
            </p>
          </motion.div>

          <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <Button asChild size="lg" variant="accent" className="w-full sm:w-auto">
              <Link href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="glass" className="w-full sm:w-auto">
              <Link href="/resume.pdf" download="Shivansh_Shukla_Resume.pdf">
                Download Resume
                <Download className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 text-sm text-slate-300 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex max-w-full items-center gap-2 break-all transition hover:text-white sm:break-normal"
            >
              <Mail className="h-4 w-4 shrink-0 text-cyan-300" />
              {contactInfo.email}
            </a>
            <span className="hidden text-slate-600 sm:inline">·</span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-cyan-300" />
              {contactInfo.location}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-2xl sm:rounded-3xl">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 sm:tracking-[0.24em]">{fact.label}</p>
                <p className="mt-2 text-sm text-white">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
