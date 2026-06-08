"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { EASE_IN_OUT_CIRC } from "@/lib/motion";

function AndroidLogoMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" aria-hidden>
      <path d="M17.6 9.5 19 7.3a.5.5 0 0 0-.8-.6l-1.5 2.3a7.9 7.9 0 0 0-4.7-1.5H11a7.9 7.9 0 0 0-4.7 1.5L4.8 6.7a.5.5 0 1 0-.8.6L5.4 9.5A8 8 0 0 0 4 14v3.5a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5V19h6v-1.5a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5V14a8 8 0 0 0-1.4-4.5ZM9 12.3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
    </svg>
  );
}

export function HeroAndroidLogo() {
  const reducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), { stiffness: 80, damping: 18 });
  const springY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), { stiffness: 80, damping: 18 });

  useEffect(() => {
    if (reducedMotion) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX / window.innerWidth - 0.5);
      mouseY.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reducedMotion, mouseX, mouseY]);

  if (reducedMotion) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-24 z-[1] hidden -translate-x-1/2 text-cyan-300/70 sm:block lg:top-28"
      style={{ x: springX, y: springY }}
      animate={{ y: [0, -12, 0], rotate: [0, 6, 0, -6, 0] }}
      transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: EASE_IN_OUT_CIRC }}
    >
      <div className="relative h-16 w-16 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-3 shadow-[0_0_40px_rgba(34,211,238,0.15)] backdrop-blur-xl lg:h-20 lg:w-20">
        <AndroidLogoMark />
        <motion.div
          className="absolute inset-0 rounded-3xl ring-1 ring-cyan-300/20"
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

export function HeroParticles() {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;

  const particles = Array.from({ length: 14 }, (_, index) => ({
    id: index,
    left: `${8 + ((index * 13) % 84)}%`,
    top: `${12 + ((index * 17) % 70)}%`,
    size: 3 + (index % 3),
    delay: index * 0.25,
  }));

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-300/50"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.9, 0.2], scale: [1, 1.4, 1] }}
          transition={{ duration: 4 + (particle.id % 3), repeat: Number.POSITIVE_INFINITY, delay: particle.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function TwinkleStars() {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;

  const stars = Array.from({ length: 24 }, (_, index) => ({
    id: index,
    left: `${(index * 17) % 100}%`,
    top: `${(index * 23) % 55}%`,
    delay: (index % 6) * 0.35,
  }));

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[1]">
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute h-1 w-1 rounded-full bg-white/70"
          style={{ left: star.left, top: star.top }}
          animate={{ opacity: [0.1, 1, 0.15], scale: [0.6, 1.2, 0.6] }}
          transition={{ duration: 2.4 + (star.id % 4), repeat: Number.POSITIVE_INFINITY, delay: star.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
