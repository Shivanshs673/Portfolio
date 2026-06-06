"use client";

import { ArrowRight, Download, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function downloadResume() {
  const link = document.createElement("a");
  link.href = "/resume.svg";
  link.download = "Shivansh_Shukla_Resume.svg";
  link.click();
}

export function ResumeSection() {
  return (
    <section id="resume" className="section-wrapper relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <Card className="glass p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Resume</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">Elegant one-page resume preview.</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Presenting a clear, recruiter-friendly summary with compact typography, portfolio links, and a downloadable vector resume.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="accent" onClick={() => window.open("/resume.svg", "_blank", "noopener,noreferrer")}>
                  View Resume
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="glass" onClick={downloadResume}>
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </Card>
          </div>

          <Card className="glass overflow-hidden p-4">
            <div className="rounded-[28px] border border-white/10 bg-slate-950 p-6 shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Preview</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">Shivansh Shukla</h3>
                </div>
                <FileText className="h-8 w-8 text-cyan-300" />
              </div>

              <div className="mt-8 space-y-4 rounded-[24px] border border-white/8 bg-white/5 p-5">
                {[
                  "Android Developer · Software Engineer",
                  "Final Year CSE Student",
                  "Kotlin · Jetpack Compose · Firebase",
                  "FinSetu, MY JUET, MemeLang, Recipe App",
                  "Mozilla Club Joint Secretary",
                ].map((line) => (
                  <div key={line} className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    {line}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[24px] border border-cyan-400/15 bg-cyan-400/8 p-5 text-sm leading-6 text-slate-200">
                The downloadable resume is generated from the same premium visual language used in the site, so the experience stays cohesive.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
