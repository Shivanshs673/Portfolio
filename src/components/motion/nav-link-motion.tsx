"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";

type NavLinkMotionProps = {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
  className?: string;
};

export function NavLinkMotion({ href, label, active, onClick, className }: NavLinkMotionProps) {
  return (
    <Link href={href} onClick={onClick} className={`group relative ${className ?? ""}`}>
      <motion.span
        className="relative z-10 block"
        whileHover={{ color: "#ffffff" }}
        transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}
      >
        {label}
      </motion.span>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-cyan-400/0 blur-md transition-colors group-hover:bg-cyan-400/10"
      />
      {active ? (
        <motion.span
          layoutId="nav-active"
          className="absolute inset-0 rounded-full bg-white/10"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      ) : null}
      <motion.span
        aria-hidden
        className="absolute bottom-0 left-3 right-3 h-px origin-left bg-gradient-to-r from-cyan-400 to-violet-400"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: active ? 1 : 0, opacity: active ? 1 : 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}
      />
    </Link>
  );
}
