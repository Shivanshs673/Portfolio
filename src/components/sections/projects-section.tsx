"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="min-w-0"
            >
              <Card className="glass flex h-full flex-col overflow-hidden p-0">
                <div className={`relative overflow-hidden bg-gradient-to-br ${project.accent} p-4 sm:p-6`}>
                  <div className="relative rounded-2xl border border-white/10 bg-slate-950/65 p-4 backdrop-blur-xl sm:rounded-[28px] sm:p-5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-200/70 sm:text-xs sm:tracking-[0.24em]">
                      {project.period}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{project.name}</h3>
                    <p className="text-sm text-slate-400">{project.subtitle}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col space-y-4 p-4 sm:space-y-5 sm:p-6">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((item) => (
                      <Badge key={item} className="bg-white/8 px-2.5 py-1 text-xs text-slate-200 sm:px-3 sm:text-sm">
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <ul className="flex-1 space-y-1.5 text-sm leading-6 text-slate-300">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="shrink-0 text-cyan-400">·</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild size="sm" variant="accent" className="w-full sm:w-auto">
                    <Link href={project.github} target="_blank" rel="noreferrer">
                      <Code2 className="h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
