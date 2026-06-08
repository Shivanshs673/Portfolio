"use client";

import { Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { timelineEvents } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { GlassShimmer } from "@/components/motion/tilt-spotlight-card";

export function JourneyTimeline() {
  return (
    <section id="timeline" className="section-wrapper px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="My Journey"
          title="Growth & milestones"
          description="How I started programming, found my passion in Android development, and what I've done so far."
        />

        <div className="relative mt-12 pl-6 sm:pl-8 md:pl-12">
          {/* Vertical track line */}
          <div
            aria-hidden
            className="absolute bottom-4 left-[27px] top-4 w-[2px] bg-gradient-to-b from-cyan-400 via-violet-500/40 to-cyan-500/10 sm:left-[35px] md:left-[51px]"
          />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <ScrollReveal
                key={event.year}
                direction="left"
                delay={index * 0.06}
                className="relative"
              >
                {/* Glowing Node Dot */}
                <div className="absolute -left-[37px] top-6 flex h-[22px] w-[22px] items-center justify-center rounded-full border border-cyan-400/50 bg-slate-950 shadow-[0_0_8px_rgba(34,211,238,0.5)] sm:-left-[45px] md:-left-[61px]">
                  <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-[100px_1fr] md:gap-6">
                  {/* Year display */}
                  <div className="flex items-center md:items-start pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-200">
                      <Calendar className="h-3.5 w-3.5 shrink-0" />
                      {event.year}
                    </span>
                  </div>

                  {/* Narrative details card */}
                  <Card className="glass relative overflow-hidden p-5 sm:p-6 transition-all duration-300 hover:scale-[1.01] hover:border-white/12">
                    <GlassShimmer />
                    <h3 className="text-base font-semibold text-white sm:text-lg">{event.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{event.description}</p>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
