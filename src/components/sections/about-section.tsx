"use client";

import { GraduationCap } from "lucide-react";

import { aboutPoints, education, professionalSummary } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="section-wrapper px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Android developer with a product engineering mindset"
          description={professionalSummary}
        />

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-2">
          <Card className="glass p-5 sm:p-6">
            <div className="flex flex-wrap gap-3">
              {aboutPoints.map((point) => (
                <Badge key={point} variant="soft" className="px-4 py-2 text-sm">
                  {point}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="glass p-5 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-cyan-300 sm:h-12 sm:w-12">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Education</p>
                <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">{education.school}</h3>
                <p className="mt-1 text-sm text-slate-300">{education.degree}</p>
                <p className="mt-2 text-sm text-slate-400">
                  {education.location} · {education.period}
                </p>
                <p className="mt-1 text-sm text-cyan-200/80">{education.graduation}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
