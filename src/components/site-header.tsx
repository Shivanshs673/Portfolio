"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/70 backdrop-blur-2xl supports-[backdrop-filter]:bg-slate-950/55">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="#home" className="group flex min-w-0 items-center gap-2 sm:gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-xs font-semibold tracking-[0.3em] text-cyan-100 shadow-lg shadow-cyan-500/10 transition group-hover:scale-105 sm:h-11 sm:w-11 sm:text-sm sm:tracking-[0.35em]">
            SS
          </span>
          <div className="hidden min-w-0 flex-col sm:flex">
            <p className="truncate text-sm font-semibold text-white">Shivansh Shukla</p>
            <p className="truncate text-xs text-slate-400">Android & Software Developer</p>
          </div>
        </Link>

        <nav className="hidden max-w-[52vw] items-center gap-0.5 overflow-x-auto rounded-full border border-white/10 bg-white/5 px-1.5 py-1.5 scrollbar-none xl:flex xl:max-w-none xl:gap-1 xl:px-2 xl:py-2">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-2.5 py-1.5 text-xs text-slate-300 transition hover:bg-white/10 hover:text-white xl:px-3 xl:py-2 xl:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button variant="accent" size="sm" className="hidden md:inline-flex" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button
            variant="glass"
            size="icon"
            className="xl:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/5 bg-slate-950/95 px-4 py-4 xl:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2 sm:grid-cols-2">
              {navLinks.map((item) => (
                <Button key={item.href} asChild variant="glass" className="justify-start rounded-2xl px-4 py-3 text-left">
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                </Button>
              ))}
              <Button asChild variant="accent" className="justify-start rounded-2xl px-4 py-3 text-left sm:col-span-2">
                <Link href="#contact" onClick={() => setOpen(false)}>
                  Contact Me
                </Link>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
