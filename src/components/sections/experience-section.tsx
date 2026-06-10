"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Users } from "lucide-react";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { activities, experiences } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";
import { getSkillIcon } from "@/components/icons";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-wrapper px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Work & leadership"
          description="Software engineering internship history and community advisory positions."
        />

        <div className="relative mt-10 space-y-4">
          <div aria-hidden className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-primary-accent/40 via-primary-accent/5 to-transparent md:block" />

          {experiences.map((entry, index) => (
            <ScrollReveal key={entry.company} direction="left" delay={index * 0.07}>
              <article className="relative rounded-[24px] border border-card-border bg-card p-5 shadow-sm sm:p-6 transition-colors duration-300">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 12 }}
                      transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-card-border bg-card text-primary-accent shadow-sm"
                    >
                      <BriefcaseBusiness className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold font-display text-[#F8F5EE]">{entry.company}</h3>
                      <p className="mt-1 text-sm text-[#10B981] font-semibold">{entry.role}</p>
                      <p className="mt-1 text-sm text-[#B8B8B8]/80">{entry.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#B8B8B8]/80">{entry.period}</p>
                </div>

                <ul className="mt-6 space-y-2 text-sm leading-6 text-[#B8B8B8]/95">
                  {entry.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary-accent">·</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {entry.tech && (
                  <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                    {entry.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="soft"
                        className="px-2.5 py-1 text-xs flex items-center gap-1.5"
                      >
                        {getSkillIcon(t)}
                        <span>{t}</span>
                      </Badge>
                    ))}
                  </div>
                )}

                {entry.impact && (
                  <div className="mt-4 rounded-xl border border-[#10B981]/15 bg-[#10B981]/5 p-3.5 text-xs text-[#F8F5EE]/90 leading-relaxed">
                    <span className="font-semibold text-[#10B981] block mb-1">Key Outcomes & Business Impact:</span>
                    {entry.impact}
                  </div>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>

        <h3 className="mt-12 text-lg font-bold font-display text-[#F8F5EE] sm:mt-16 sm:text-xl">Activities & Leadership</h3>

        <div className="mt-6 space-y-4">
          {activities.map((entry, index) => (
            <ScrollReveal key={entry.org} direction="up" delay={index * 0.06}>
              <article className="rounded-[24px] border border-card-border bg-card p-5 shadow-sm sm:p-6 transition-colors duration-300">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 12 }}
                      transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-card-border bg-card text-primary-accent shadow-sm"
                    >
                      <Users className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold font-display text-[#F8F5EE]">{entry.org}</h3>
                      <p className="mt-1 text-sm text-[#10B981] font-semibold">{entry.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#B8B8B8]/80">{entry.period}</p>
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-6 text-[#B8B8B8]/95">
                  {entry.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary-accent">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
