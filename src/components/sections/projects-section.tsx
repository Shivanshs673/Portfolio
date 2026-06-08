"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Code2 } from "lucide-react";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { GlassShimmer, TiltSpotlightCard } from "@/components/motion/tilt-spotlight-card";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ProjectType = typeof projects[number];

function ProjectCard({ project }: { project: ProjectType }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TiltSpotlightCard
      className="h-full rounded-3xl shadow-lg shadow-slate-950/20 transition-shadow duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
      borderGradient
      glow
    >
      <article className="h-full">
        <Card className="glass relative flex h-full flex-col overflow-hidden p-0">
          <GlassShimmer />
          <div className={`relative overflow-hidden bg-gradient-to-br ${project.accent} p-4 sm:p-6`}>
            <div className="relative rounded-2xl border border-slate-900/10 dark:border-white/10 bg-white/75 dark:bg-slate-950/65 p-4 backdrop-blur-xl sm:rounded-[28px] sm:p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-800/80 dark:text-cyan-200/70 sm:text-xs sm:tracking-[0.24em]">
                {project.period}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">{project.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{project.subtitle}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.summary}</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col space-y-4 p-4 sm:space-y-5 sm:p-6">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tech.map((item) => (
                <Badge key={item} className="bg-slate-900/5 dark:bg-white/8 px-2.5 py-1 text-xs text-slate-700 dark:text-slate-200 sm:px-3 sm:text-sm">
                  {item}
                </Badge>
              ))}
            </div>

            <ul className="flex-1 space-y-1.5 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="shrink-0 text-cyan-600 dark:text-cyan-400">·</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Human Story Collapse section */}
            <div className="border-t border-slate-900/5 dark:border-white/5 pt-4 mt-3">
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <span>Behind the Code (Story & Learnings)</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", expanded && "rotate-180")} />
              </button>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 space-y-3 pt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {project.whyBuilt && (
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-200">Why I Built It:</p>
                          <p className="mt-0.5 text-slate-500 dark:text-slate-400">{project.whyBuilt}</p>
                        </div>
                      )}
                      {project.keyChallenge && (
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-200">Key Technical Challenge:</p>
                          <p className="mt-0.5 text-slate-500 dark:text-slate-400">{project.keyChallenge}</p>
                        </div>
                      )}
                      {project.impact && (
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-200">Project Impact:</p>
                          <p className="mt-0.5 text-slate-500 dark:text-slate-400">{project.impact}</p>
                        </div>
                      )}
                      {project.learnings && (
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-200">My Learnings:</p>
                          <p className="mt-0.5 text-slate-500 dark:text-slate-400">{project.learnings}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}>
              <Button
                asChild
                size="sm"
                variant="accent"
                className="w-full transition-shadow duration-500 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] sm:w-auto"
              >
                <Link href={project.github} target="_blank" rel="noreferrer">
                  <Code2 className="h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </motion.div>
          </div>
        </Card>
      </article>
    </TiltSpotlightCard>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-wrapper relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Android applications built with Kotlin, Jetpack Compose, Supabase, and modern architecture patterns."
        />

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.name}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.05}
              className="min-w-0"
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
