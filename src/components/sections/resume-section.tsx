"use client";

import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PulseGlow } from "@/components/motion/micro-interactions";
import { GlassShimmer } from "@/components/motion/tilt-spotlight-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EASE_IN_OUT_CIRC } from "@/lib/motion";

function downloadResume() {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Shivansh_Shukla_Resume.pdf";
  link.click();
}

export function ResumeSection() {
  return (
    <section id="resume" className="section-wrapper relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal direction="up">
          <div className="relative">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-cyan-400/10 blur-3xl"
              animate={{ opacity: [0.35, 0.65, 0.35], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: EASE_IN_OUT_CIRC }}
            />
            <Card className="glass relative overflow-hidden p-6 sm:p-8 md:p-12">
              <GlassShimmer />
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Resume</p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">Download my resume</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Full details on my education, experience, projects, and technical skills.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
                <Button variant="accent" className="w-full sm:w-auto" onClick={() => window.open("/resume.pdf", "_blank", "noopener,noreferrer")}>
                  View Resume
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <PulseGlow className="w-full sm:w-auto">
                  <Button variant="glass" className="w-full sm:w-auto" onClick={downloadResume}>
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                </PulseGlow>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
