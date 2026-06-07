"use client";

import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
        <Card className="glass p-6 sm:p-8 md:p-12">
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
            <Button variant="glass" className="w-full sm:w-auto" onClick={downloadResume}>
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
