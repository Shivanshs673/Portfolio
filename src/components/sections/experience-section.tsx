"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

import { experiences } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-wrapper px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Community leadership and technical coordination"
          description="This section keeps the story concise: community-facing responsibilities, event execution, and technical sessions that create shared momentum."
        />

        <div className="mt-10 space-y-4">
          {experiences.map((entry, index) => (
            <motion.article
              key={entry.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/7 p-6 backdrop-blur-2xl"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-cyan-200">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{entry.company}</h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.3em] text-cyan-200/80">{entry.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400">{entry.period}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {entry.responsibilities.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
