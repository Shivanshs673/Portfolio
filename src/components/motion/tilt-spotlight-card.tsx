"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

import { useReducedMotion as useReducedMotionHook } from "@/hooks/use-reduced-motion";

type TiltSpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  borderGradient?: boolean;
};

export function TiltSpotlightCard({ children, className = "", glow = true, borderGradient = false }: TiltSpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotionHook();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 180, damping: 22 });
  const springRotateY = useSpring(rotateY, { stiffness: 180, damping: 22 });
  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.08), transparent 70%)`;

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;
    mouseX.set(px);
    mouseY.set(py);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotateX.set(((py - centerY) / centerY) * -6);
    rotateY.set(((px - centerX) / centerX) * 6);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={`group relative [transform-style:preserve-3d] ${className}`}
      style={{ rotateX: springRotateX, rotateY: springRotateY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
    >
      {borderGradient ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-[1px] rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: "linear-gradient(120deg, rgba(16, 185, 129, 0.3), rgba(255, 255, 255, 0.05), rgba(16, 185, 129, 0.3))",
            backgroundSize: "200% 200%",
          }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      ) : null}
      {glow ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
      ) : null}
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}

type MagneticProps = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({ children, className, strength = 0.28 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotionHook();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18 });
  const springY = useSpring(y, { stiffness: 200, damping: 18 });

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * strength);
        y.set((event.clientY - rect.top - rect.height / 2) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

export function GlassShimmer({ className = "" }: { className?: string }) {
  const reducedMotion = useReducedMotionHook();
  if (reducedMotion) return null;

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] ${className}`}
    >
      <motion.div
        className="absolute -inset-full rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{ x: ["-120%", "120%"] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", repeatDelay: 2 }}
      />
    </motion.div>
  );
}
