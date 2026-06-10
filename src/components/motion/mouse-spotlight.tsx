"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function MouseSpotlight() {
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 22, mass: 0.4 });
  const glow = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(16, 185, 129, 0.04), transparent 65%)`;
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${springX}px ${springY}px, rgba(255,255,255,0.02), transparent 70%)`;

  useEffect(() => {
    if (reducedMotion) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reducedMotion, x, y]);

  if (reducedMotion) return null;

  return (
    <>
      <motion.div aria-hidden className="pointer-events-none fixed inset-0 z-[1]" style={{ background: glow }} />
      <motion.div aria-hidden className="pointer-events-none fixed inset-0 z-[2]" style={{ background: spotlight }} />
    </>
  );
}
