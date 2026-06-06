"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Code2, Download, Globe, Layers3, MonitorSmartphone, Sparkles, Terminal, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroHighlights, quickFacts } from "@/lib/data";

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

function FloatingTechCloud() {
  const icons = [
    { icon: MonitorSmartphone, label: "Compose" },
    { icon: Workflow, label: "MVVM" },
    { icon: Terminal, label: "Kotlin" },
    { icon: Layers3, label: "Firebase" },
    { icon: Sparkles, label: "Future" },
    { icon: Code2, label: "Open Source" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block">
      {icons.map((item, index) => {
        const Icon = item.icon;
        const positions = [
          "left-8 top-12",
          "right-10 top-20",
          "left-0 bottom-24",
          "right-4 bottom-12",
          "left-28 top-1/2",
          "right-28 top-1/2",
        ];

        return (
          <motion.div
            key={item.label}
            className={`absolute ${positions[index]} rounded-2xl border border-white/10 bg-slate-950/55 px-3 py-2 text-xs text-slate-200 shadow-xl shadow-cyan-500/10 backdrop-blur-xl`}
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4 + index * 0.35, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-2">
              <Icon className="h-3.5 w-3.5 text-cyan-300" />
              {item.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function HeroSection() {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  const factCards = useMemo(() => quickFacts, []);

  useEffect(() => {
    if (reducedMotion) return;

    const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });
    timeline.fromTo(titleRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    timeline.fromTo(cardRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.45");
  }, [reducedMotion]);

  return (
    <section id="home" className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.28),rgba(15,23,42,0)_35%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,1))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:96px_96px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      </div>

      <div className="absolute inset-x-0 top-0 z-0 h-[620px] opacity-40">
        <HeroScene />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28">
        <div ref={titleRef} className="relative z-10 pt-12 lg:pt-24">
          <TypingLine />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">Aspiring Software Engineer and Android Developer</p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Shivansh Shukla
            </h1>
            <p className="max-w-2xl text-xl leading-8 text-slate-300 sm:text-2xl">
              Building scalable mobile applications and solving real-world problems with Kotlin, Jetpack Compose, and modern technologies.
            </p>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" variant="accent">
              <Link href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="glass">
              <Link href="/resume.svg" download="Shivansh_Shukla_Resume.svg">
                Download Resume
                <Download className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {factCards.map((fact) => (
              <div key={fact.label} className="rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur-2xl">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{fact.label}</p>
                <p className="mt-2 text-sm text-white">{fact.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-sm text-slate-300">
            {quickFacts.map((fact) => (
              <Badge key={fact.label} className="bg-white/8 px-4 py-2 text-slate-200">
                {fact.value}
              </Badge>
            ))}
          </div>
        </div>

        <div ref={cardRef} className="relative z-10 flex items-center justify-center lg:pt-16">
          <div className="relative w-full max-w-[560px] rounded-[36px] border border-white/12 bg-white/7 p-4 shadow-[0_40px_120px_rgba(2,6,23,0.5)] backdrop-blur-3xl">
            <FloatingTechCloud />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-cyan-950/70 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(167,139,250,0.14),transparent_32%)]" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">Profile Snapshot</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Future-ready builder</h2>
                  </div>
                  <Badge variant="soft">Open to internships</Badge>
                </div>

                <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(34,211,238,0.16),rgba(30,41,59,0.15))] p-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_55%)]" />
                    <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-white/12 bg-gradient-to-br from-cyan-400/18 via-white/6 to-violet-400/16 shadow-[0_0_80px_rgba(34,211,238,0.18)]">
                      <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-center">
                        <div>
                          <p className="text-4xl font-semibold text-white">S</p>
                          <p className="mt-2 text-xs tracking-[0.3em] text-slate-400">SHIVANSH</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[28px] border border-white/10 bg-white/6 p-4">
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span>Stack</span>
                        <span className="text-cyan-300">Android + Full Stack</span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {['Kotlin', 'Compose', 'Firebase', 'TypeScript', 'Three.js', 'GSAP'].map((item) => (
                          <span key={item} className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-slate-200">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        { value: '12+', label: 'Apps & projects' },
                        { value: '250+', label: 'DSA problems' },
                        { value: '20+', label: 'Technologies' },
                        { value: '1', label: 'Mission: shipping value' },
                      ].map((item) => (
                        <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/6 p-4">
                          <p className="text-2xl font-semibold text-white">{item.value}</p>
                          <p className="mt-1 text-xs text-slate-400">{item.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[28px] border border-cyan-400/15 bg-cyan-400/8 p-4">
                      <div className="flex items-center gap-3 text-sm text-cyan-100">
                        <Globe className="h-4 w-4" />
                        Recruiter-friendly product design with engineering depth
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
