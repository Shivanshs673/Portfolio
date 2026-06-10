"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function HeroLogo({ size = 180 }: { size?: number }) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  
  // Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-24, 24]), { stiffness: 60, damping: 20 });
  const springY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), { stiffness: 60, damping: 20 });

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

  // Motion Variants
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: custom, type: "spring" as const, duration: 1.5, bounce: 0 },
        opacity: { delay: custom, duration: 0.01 }
      }
    })
  };

  const textReveal = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.85,
        type: "spring" as const,
        stiffness: 120,
        damping: 12
      }
    }
  };

  if (reducedMotion) {
    return (
      <div className="flex items-center justify-center py-6">
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="44" stroke="url(#hero-logo-border)" strokeWidth="3" />
          <path d="M 34 38 L 22 50 L 34 62" stroke="url(#hero-cyan)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="49" y="62" textAnchor="middle" fill="currentColor" fontSize="34" fontWeight="900" className="text-slate-900 dark:text-white" style={{ fontFamily: "Inter, sans-serif" }}>S</text>
          <path d="M 59 62 L 67 38" stroke="url(#hero-purple)" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 71 38 L 83 50 L 71 62" stroke="url(#hero-purple)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="hero-logo-border" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
            <linearGradient id="hero-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
            <linearGradient id="hero-purple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8F5EE" />
              <stop offset="100%" stopColor="#B8B8B8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative flex items-center justify-center py-6 select-none">
      {/* Background Glow */}
      <motion.div
        className="absolute h-[220px] w-[220px] rounded-full bg-emerald-500/8 dark:bg-emerald-500/5 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.9, 0.6]
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        }}
      />

      <motion.div
        style={{ x: springX, y: springY }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        whileHover={{ scale: 1.05, rotate: 3 }}
        className="relative z-10 cursor-pointer"
      >
        <motion.svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
        >
          <defs>
            <linearGradient id="hero-logo-border" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
            <linearGradient id="hero-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
            <linearGradient id="hero-purple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8F5EE" />
              <stop offset="100%" stopColor="#B8B8B8" />
            </linearGradient>
          </defs>

          {/* Outer circle border */}
          <motion.circle
            cx="50"
            cy="50"
            r="44"
            stroke="url(#hero-logo-border)"
            strokeWidth="3"
            custom={0.1}
            variants={draw}
          />

          {/* Left angle bracket < */}
          <motion.path
            d="M 34 38 L 22 50 L 34 62"
            stroke="url(#hero-cyan)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            custom={0.4}
            variants={draw}
          />

          {/* Center text S */}
          <motion.text
            x="49"
            y="62"
            textAnchor="middle"
            fill="currentColor"
            fontSize="34"
            fontWeight="900"
            className="text-slate-900 dark:text-white"
            style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
            variants={textReveal}
          >
            S
          </motion.text>

          {/* Center slash / */}
          <motion.path
            d="M 59 62 L 67 38"
            stroke="url(#hero-purple)"
            strokeWidth="3.5"
            strokeLinecap="round"
            custom={1.0}
            variants={draw}
          />

          {/* Right angle bracket > */}
          <motion.path
            d="M 71 38 L 83 50 L 71 62"
            stroke="url(#hero-purple)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            custom={1.2}
            variants={draw}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
