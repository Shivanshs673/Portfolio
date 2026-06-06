"use client";

import { motion } from "framer-motion";
import { Award, BrainCircuit, Code2, GraduationCap, Sparkles } from "lucide-react";

import { aboutPoints, aboutStats } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const icons = [GraduationCap, Code2, BrainCircuit, Award];

export function AboutSection() {
  return (
    <section id="about" className="section-wrapper px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="A builder with mobile depth and product taste"
          description="Passionate Android Developer with experience building modern mobile applications using Kotlin, Jetpack Compose, Firebase, Room, Retrofit, and MVVM architecture. Strong foundation in Data Structures, Algorithms, Operating Systems, Computer Networks, and Software Engineering."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Card className="glass overflow-hidden p-6">
            <div className="flex flex-wrap gap-3">
              {aboutPoints.map((point) => (
                <Badge key={point} variant="soft" className="px-4 py-2 text-sm">
                  {point}
                </Badge>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-300 md:text-base">
              Shivansh focuses on turning abstract ideas into polished, reliable products. The work blends Android engineering, modern UI systems, and problem solving with a recruiter-friendly presentation layer.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {aboutStats.map((stat, index) => {
                const Icon = icons[index % icons.length];

                return (
                  <motion.div key={stat.label} whileHover={{ y: -4 }} className="rounded-3xl border border-white/10 bg-white/6 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-2xl font-semibold text-white">{stat.value}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-400">{stat.label}</p>
                      </div>
                      <Icon className="h-5 w-5 text-cyan-300" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Mobile-first product thinking",
              "API integration and state management",
              "Fast prototyping with modern tooling",
              "Clean systems, smooth interactions",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[30px] border border-white/10 bg-white/7 p-5 backdrop-blur-2xl"
              >
                <p className="text-sm font-medium text-white">{item}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Designed to feel calm, fast, and well-structured from the first interaction.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
