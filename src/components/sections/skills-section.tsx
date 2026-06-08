"use client";

import { motion } from "framer-motion";

import { ScrollReveal, StaggerReveal, staggerItem } from "@/components/motion/scroll-reveal";
import { GlassShimmer, TiltSpotlightCard } from "@/components/motion/tilt-spotlight-card";
import { skillGroups } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";

export function SkillsSection() {
  return (
    <section id="skills" className="section-wrapper relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technical skills"
          description="Mobile development, Supabase & Firebase integration, and computer science fundamentals."
        />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <ScrollReveal key={group.title} direction="up" delay={groupIndex * 0.06}>
              <TiltSpotlightCard className="h-full rounded-3xl" borderGradient glow>
                <Card className="glass relative h-full overflow-hidden p-5 sm:p-6">
                  <GlassShimmer />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                  <StaggerReveal className="mt-4 flex flex-wrap gap-2" stagger={0.05}>
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        variants={staggerItem}
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}
                      >
                        <Badge className="bg-slate-900/5 dark:bg-white/8 px-3 py-1.5 text-sm text-slate-700 dark:text-slate-200">{skill}</Badge>
                      </motion.div>
                    ))}
                  </StaggerReveal>
                </Card>
              </TiltSpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
