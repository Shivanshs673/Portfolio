"use client";

import { motion, useReducedMotion } from "framer-motion";

import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";

export function PageFadeIn({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: DURATION.slow, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  );
}
