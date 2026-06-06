"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

import { achievements } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-wrapper px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Achievements"
          title="A timeline that shows momentum, not just labels"
          description="The narrative here is intentionally simple: evidence of academic rigor, technical initiative, community work, and shipping discipline."
        />

        <div className="relative mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[30px] border border-white/10 bg-white/7 p-5 backdrop-blur-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                  <Trophy className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Milestone {index + 1}</p>
                  <h3 className="mt-1 text-lg font-medium text-white">{item}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
