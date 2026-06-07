"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Users } from "lucide-react";

import { activities, experiences } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-wrapper px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Work & leadership"
          description="Professional internship experience and campus leadership roles."
        />

        <div className="mt-10 space-y-4">
          {experiences.map((entry, index) => (
            <motion.article
              key={entry.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="rounded-2xl border border-white/10 bg-white/7 p-5 backdrop-blur-2xl sm:rounded-[32px] sm:p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-cyan-200">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{entry.company}</h3>
                    <p className="mt-1 text-sm text-cyan-200/80">{entry.role}</p>
                    <p className="mt-1 text-sm text-slate-400">{entry.location}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400">{entry.period}</p>
              </div>

              <ul className="mt-6 space-y-2 text-sm leading-6 text-slate-300">
                {entry.responsibilities.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-cyan-400">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <h3 className="mt-12 text-lg font-semibold text-white sm:mt-16 sm:text-xl">Activities & Leadership</h3>

        <div className="mt-6 space-y-4">
          {activities.map((entry, index) => (
            <motion.article
              key={entry.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/7 p-5 backdrop-blur-2xl sm:rounded-[32px] sm:p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-cyan-200">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{entry.org}</h3>
                    <p className="mt-1 text-sm text-cyan-200/80">{entry.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400">{entry.period}</p>
              </div>

              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                {entry.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-cyan-400">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
