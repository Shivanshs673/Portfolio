"use client";

import { motion } from "framer-motion";

import { skillGroups } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <section id="skills" className="section-wrapper relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A broad stack, organized for real product delivery."
          description="Animated skill cards with progress indicators across Android, programming languages, backend systems, tools, and core CS fundamentals."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: groupIndex * 0.08 }}
            >
              <Card className="glass h-full p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
                  <p className="text-sm leading-6 text-slate-300">{group.description}</p>
                </div>

                <div className="mt-6 space-y-4">
                  {group.skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between text-sm text-slate-200">
                        <span>{skill.name}</span>
                        <span className="text-cyan-200">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/8">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
