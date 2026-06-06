"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/70 backdrop-blur-2xl supports-[backdrop-filter]:bg-slate-950/55">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-sm font-semibold tracking-[0.35em] text-cyan-100 shadow-lg shadow-cyan-500/10 transition group-hover:scale-105">
            SS
          </span>
          <div className="hidden flex-col sm:flex">
            <p className="text-sm font-semibold text-white">Shivansh Shukla</p>
            <p className="text-xs text-slate-400">Android Developer | Software Engineer</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="glass" size="sm" className="hidden sm:inline-flex" asChild>
            <Link href="#contact">Hire Shivansh</Link>
          </Button>
          <Button variant="glass" size="icon" className="lg:hidden" onClick={() => setOpen((current) => !current)} aria-label="Open navigation">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/5 bg-slate-950/95 px-4 py-4 lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2 sm:grid-cols-2">
              {navLinks.map((item) => (
                <Button key={item.href} asChild variant="glass" className="justify-start rounded-2xl px-4 py-3 text-left">
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                </Button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
