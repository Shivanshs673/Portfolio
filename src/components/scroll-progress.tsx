"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function ScrollProgress({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 h-1 origin-left bg-primary-accent"
      style={{ scaleX }}
    />
  );
}
