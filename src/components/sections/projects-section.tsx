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
import { getSkillIcon } from "@/components/icons";

import { Magnetic } from "@/components/motion/tilt-spotlight-card";

type ProjectType = typeof projects[number];

function ProjectCard({ project }: { project: ProjectType }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TiltSpotlightCard
      className="h-full rounded-[24px] transition-shadow duration-500 hover:shadow-2xl hover:shadow-[#10B981]/5"
      borderGradient
      glow
    >
      <article className="h-full">
        <Card className="relative flex h-full flex-col overflow-hidden p-0 border-card-border bg-card">
          <GlassShimmer />
          <div className="relative p-6 sm:p-8 border-b border-card-border bg-gradient-to-b from-[#161616] to-[#1C1C1C]">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <Code2 className="h-20 w-20 text-[#10B981]" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#10B981] font-semibold">
              {project.period}
            </p>
            <h3 className="mt-3 text-2xl font-bold font-display text-[#F8F5EE] tracking-tight group-hover:text-[#10B981] transition-colors duration-300 sm:text-3xl">
              {project.name}
            </h3>
            <p className="text-sm font-medium text-[#B8B8B8] mt-1">{project.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-[#B8B8B8]/80 font-sans">{project.summary}</p>
          </div>

          <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 gap-6">
            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted font-bold mb-3">Technologies</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((item) => (
                    <Badge key={item} variant="soft" className="px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 rounded-full">
                      {getSkillIcon(item)}
                      <span>{item}</span>
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted font-bold mb-3">Key Features</p>
                <ul className="space-y-2.5 text-sm leading-relaxed text-[#B8B8B8]/80">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2 items-start">
                      <span className="shrink-0 text-[#10B981] mt-1">·</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Human Story Collapse section */}
              <div className="border-t border-card-border pt-5 mt-4">
                <button
                  type="button"
                  onClick={() => setExpanded(!expanded)}
                  className="flex w-full items-center justify-between text-xs font-bold uppercase tracking-widest text-[#10B981] hover:text-[#34D399] transition-colors cursor-pointer"
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
                      <div className="mt-4 space-y-4 pt-1 text-xs leading-relaxed text-[#B8B8B8]">
                        {project.whyBuilt && (
                          <div>
                            <p className="font-bold text-[#F8F5EE] uppercase tracking-wider text-[10px]">Why I Built It</p>
                            <p className="mt-1 text-[#B8B8B8]/80">{project.whyBuilt}</p>
                          </div>
                        )}
                        {project.keyChallenge && (
                          <div>
                            <p className="font-bold text-[#F8F5EE] uppercase tracking-wider text-[10px]">Key Technical Challenge</p>
                            <p className="mt-1 text-[#B8B8B8]/80">{project.keyChallenge}</p>
                          </div>
                        )}
                        {project.impact && (
                          <div>
                            <p className="font-bold text-[#F8F5EE] uppercase tracking-wider text-[10px]">Project Impact</p>
                            <p className="mt-1 text-[#B8B8B8]/80">{project.impact}</p>
                          </div>
                        )}
                        {project.learnings && (
                          <div>
                            <p className="font-bold text-[#F8F5EE] uppercase tracking-wider text-[10px]">My Learnings</p>
                            <p className="mt-1 text-[#B8B8B8]/80">{project.learnings}</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="pt-4 border-t border-card-border">
              <motion.div whileHover={{ scale: 1.015 }} transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}>
                <Magnetic strength={0.15}>
                  <Button
                    asChild
                    size="sm"
                    variant="accent"
                    className="w-full transition-shadow duration-500 hover:shadow-[0_0_24px_rgba(16,185,129,0.35)] sm:w-auto font-semibold px-6 py-2.5 rounded-full"
                  >
                    <Link href={project.github} target="_blank" rel="noreferrer">
                      <Code2 className="h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                </Magnetic>
              </motion.div>
            </div>
          </div>
        </Card>
      </article>
    </TiltSpotlightCard>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-wrapper relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Native Android applications showcasing Kotlin, Hilt, Room, and clean MVVM patterns."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2">
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
