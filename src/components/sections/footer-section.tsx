import Link from "next/link";
import { ArrowUpRight, Code2, Globe, UserRound } from "lucide-react";

import { contactInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";

const footerSocialLinks = [
  { label: "GitHub", href: contactInfo.github, icon: Code2 },
  { label: "LinkedIn", href: contactInfo.linkedin, icon: UserRound },
  { label: "LeetCode", href: contactInfo.leetcode, icon: Globe },
];

export function FooterSection() {
  return (
    <footer className="relative z-10 border-t border-white/8 bg-slate-950/90 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <p className="text-xl font-semibold text-white sm:text-2xl">Shivansh Shukla</p>
          <p className="mt-2 text-sm text-slate-400">Android & Software Developer · B.Tech CSE (Completed)</p>
          <p className="mt-1 text-sm text-slate-500">{contactInfo.location}</p>
          <a
            href={`mailto:${contactInfo.email}`}
            className="mt-2 inline-block break-all text-sm text-cyan-300 hover:text-cyan-200 sm:break-normal"
          >
            {contactInfo.email}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {footerSocialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Button key={link.label} asChild variant="glass" size="sm" className="px-3 sm:px-4">
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

      <div className="mx-auto mt-6 flex max-w-7xl flex-col gap-2 border-t border-white/8 pt-6 text-xs text-slate-500 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Shivansh Shukla</span>
        <span>Built with Next.js & TypeScript</span>
      </div>
    </footer>
  );
}
