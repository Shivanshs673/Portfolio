"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Users } from "lucide-react";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { activities, experiences } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-wrapper px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Work & leadership"
          description="Professional internship experience and campus leadership roles."
        />

        <div className="relative mt-10 space-y-4">
          <div aria-hidden className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-cyan-400/40 via-violet-400/20 to-transparent md:block" />

                  {experiences.map((entry, index) => (
            <ScrollReveal key={entry.company} direction="left" delay={index * 0.07}>
              <article className="relative rounded-2xl border border-slate-900/10 dark:border-white/10 bg-slate-900/5 dark:bg-white/7 p-5 backdrop-blur-2xl sm:rounded-[32px] sm:p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 12 }}
                      transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-900/10 dark:border-white/10 bg-slate-900/5 dark:bg-white/8 text-cyan-600 dark:text-cyan-200"
                    >
                      <BriefcaseBusiness className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{entry.company}</h3>
                      <p className="mt-1 text-sm text-cyan-700 dark:text-cyan-200/80">{entry.role}</p>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{entry.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{entry.period}</p>
                </div>

                <ul className="mt-6 space-y-2 text-sm leading-6 text-slate-655 dark:text-slate-300">
                  {entry.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-cyan-600 dark:text-cyan-400">·</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {entry.tech && (
                  <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                    {entry.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-slate-900/8 dark:border-white/8 bg-slate-900/5 dark:bg-white/5 px-2.5 py-0.5 text-xs text-slate-600 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {entry.impact && (
                  <div className="mt-4 rounded-xl border border-cyan-600/15 dark:border-cyan-400/15 bg-cyan-500/5 dark:bg-cyan-400/5 p-3.5 text-xs text-cyan-800 dark:text-cyan-200/95 leading-relaxed">
                    <span className="font-semibold text-cyan-700 dark:text-cyan-300 block mb-1">Key Outcomes & Business Impact:</span>
                    {entry.impact}
                  </div>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>

        <h3 className="mt-12 text-lg font-semibold text-slate-900 dark:text-white sm:mt-16 sm:text-xl">Activities & Leadership</h3>

        <div className="mt-6 space-y-4">
          {activities.map((entry, index) => (
            <ScrollReveal key={entry.org} direction="up" delay={index * 0.06}>
              <article className="rounded-2xl border border-slate-900/10 dark:border-white/10 bg-slate-900/5 dark:bg-white/7 p-5 backdrop-blur-2xl sm:rounded-[32px] sm:p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 12 }}
                      transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-900/10 dark:border-white/10 bg-slate-900/5 dark:bg-white/8 text-cyan-600 dark:text-cyan-200"
                    >
                      <Users className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{entry.org}</h3>
                      <p className="mt-1 text-sm text-cyan-700 dark:text-cyan-200/80">{entry.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{entry.period}</p>
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-655 dark:text-slate-300">
                  {entry.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-cyan-600 dark:text-cyan-400">·</span>
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
