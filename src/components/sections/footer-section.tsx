"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Magnetic } from "@/components/motion/tilt-spotlight-card";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { contactInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const footerSocialLinks = [
  { label: "GitHub", href: contactInfo.github, icon: GitHubIcon, colorClass: "text-[#F8F5EE]" },
  { label: "LinkedIn", href: contactInfo.linkedin, icon: LinkedInIcon, colorClass: "text-[#F8F5EE]" },
  { label: "LeetCode", href: contactInfo.leetcode, icon: LeetCodeIcon, colorClass: "text-[#F8F5EE]" },
];

export function FooterSection({ lastUpdated }: { lastUpdated: string }) {
  return (
    <ScrollReveal direction="up">
      <footer className="relative z-10 border-t border-card-border bg-surface/90 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <p className="text-xl font-bold font-display text-[#F8F5EE] sm:text-2xl">Shivansh Shukla</p>
            <p className="mt-2 text-sm text-[#B8B8B8]">Android & Software Developer · B.Tech CSE, JUET</p>
            
            <div className="mt-3 flex flex-wrap gap-2 text-[10px] sm:text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-2.5 py-0.5 font-medium text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to Opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-card-border bg-card px-2.5 py-0.5 font-medium text-[#B8B8B8]/90">
                India
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-card-border bg-card px-2.5 py-0.5 font-medium text-muted">
                Last Updated: {lastUpdated}
              </span>
            </div>

            <p className="mt-4 max-w-md text-xs leading-relaxed text-muted">
              Thanks for visiting my portfolio. Feel free to reach out if you&apos;d like to collaborate or discuss opportunities.
            </p>

            <a
              href={`mailto:${contactInfo.email}`}
              className="mt-3 inline-block break-all text-sm font-semibold text-primary-accent hover:text-primary-accent-hover sm:break-normal"
            >
              {contactInfo.email}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {footerSocialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Magnetic key={link.label} strength={0.18}>
                  <Button asChild variant="glass" size="sm" className="px-3 sm:px-4">
                    <Link href={link.href} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <Icon className={cn("h-4 w-4 shrink-0", link.colorClass)} />
                      <span>{link.label}</span>
                      <motion.span whileHover={{ x: 3, y: -3 }} transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </motion.span>
                    </Link>
                  </Button>
                </Magnetic>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-7xl flex-col gap-2 border-t border-card-border pt-6 text-xs text-muted sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Shivansh Shukla</span>
          <span>Built with Next.js & TypeScript</span>
        </div>
      </footer>
    </ScrollReveal>
  );
}
