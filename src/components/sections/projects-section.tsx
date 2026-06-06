"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, ExternalLink, Grid3x3, Sparkles } from "lucide-react";

import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const categories = ["All", ...new Set(projects.map((project) => project.category))];

export function ProjectsSection() {
  const [active, setActive] = useState("All");

  const filteredProjects = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.category === active)),
    [active],
  );

  return (
    <section id="projects" className="section-wrapper relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Premium project cards with motion, depth, and recruiter-friendly narratives."
          description="Interactive cards, parallax-ready layouts, and clear links to GitHub and live demos."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button key={category} variant={active === category ? "accent" : "glass"} size="sm" onClick={() => setActive(category)}>
              {category === "All" ? <Grid3x3 className="h-3.5 w-3.5" /> : null}
              {category}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="mt-8 grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.name}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                className="perspective-1000"
              >
                <Card className="glass group h-full overflow-hidden p-0">
                  <div className={`relative overflow-hidden bg-gradient-to-br ${project.accent} p-6`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_26%)]" />
                    <div className="relative flex h-48 items-end justify-between rounded-[28px] border border-white/10 bg-slate-950/65 p-5 shadow-xl shadow-slate-950/30 backdrop-blur-xl">
                      <div>
                        <Badge variant="soft" className="mb-3 w-fit">{project.category}</Badge>
                        <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                        <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">{project.summary}</p>
                      </div>
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-white/80 transition group-hover:scale-105">
                        <Sparkles className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5 p-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <Badge key={item} className="bg-white/8 px-3 py-1 text-slate-200">
                          {item}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-slate-200">
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button asChild size="sm" variant="accent">
                        <Link href={project.github} target="_blank" rel="noreferrer">
                          <Code2 className="h-4 w-4" />
                          GitHub
                        </Link>
                      </Button>
                      <Button asChild size="sm" variant="glass">
                        <Link href={project.live} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
