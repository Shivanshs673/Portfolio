import Link from "next/link";
import { ArrowUpRight, Code2, Globe, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/shivanshs673", icon: Code2 },
  { label: "LinkedIn", href: "https://linkedin.com/in/shivansh-shukla-2a9552257", icon: UserRound },
  { label: "LeetCode", href: "https://leetcode.com/u/Shivanshs673", icon: Globe },
];

export function FooterSection() {
  return (
    <footer className="relative z-10 border-t border-white/8 bg-slate-950/90 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Built with Next.js + React + TypeScript</p>
          <p className="mt-2 text-2xl font-semibold text-white">Shivansh Shukla</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
            Premium portfolio crafted to feel modern, fast, and recruiter-ready.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Button key={link.label} asChild variant="glass" size="sm" className="px-4">
                <Link href={link.href} target="_blank" rel="noreferrer">
                  <Icon className="h-4 w-4" />
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-between border-t border-white/8 pt-6 text-xs text-slate-500">
        <span>© 2026 Shivansh Shukla. All rights reserved.</span>
        <span>Designed for recruiters, built for performance.</span>
      </div>
    </footer>
  );
}
