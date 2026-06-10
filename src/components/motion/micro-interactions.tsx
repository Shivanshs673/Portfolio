"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";

export function SuccessCheckmark() {
  return (
    <motion.span
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 420, damping: 20 }}
      className="inline-flex items-center gap-2 text-emerald-300"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.08, type: "spring", stiffness: 500, damping: 18 }}
        className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15"
      >
        <Check className="h-3.5 w-3.5" />
      </motion.span>
    </motion.span>
  );
}

export function AnimatedArrow({ className }: { className?: string }) {
  return (
    <motion.span
      className={className}
      initial={{ x: 0 }}
      whileHover={{ x: 4 }}
      transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}
    >
      →
    </motion.span>
  );
}

export function PulseGlow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ boxShadow: ["0 0 0 rgba(59,130,246,0)", "0 0 20px rgba(59,130,246,0.2)", "0 0 0 rgba(59,130,246,0)"] }}
      transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", repeatDelay: 1.5 }}
    >
      {children}
    </motion.div>
  );
}
