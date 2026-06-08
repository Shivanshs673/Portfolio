"use client";

import { motion, useReducedMotion } from "framer-motion";

import { EASE_IN_OUT_CIRC } from "@/lib/motion";

const blobs = [
  { className: "left-[8%] top-[18%] h-72 w-72 bg-cyan-500/10", duration: 18 },
  { className: "right-[6%] top-[32%] h-96 w-96 bg-violet-500/10", duration: 22 },
  { className: "bottom-[12%] left-[30%] h-80 w-80 bg-blue-500/8", duration: 26 },
];

export function FloatingBlobs() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {blobs.map((blob) => (
        <motion.div
          key={blob.className}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
          animate={{ y: [0, -24, 0, 18, 0], x: [0, 16, -12, 8, 0], scale: [1, 1.06, 0.98, 1.04, 1] }}
          transition={{ duration: blob.duration, repeat: Number.POSITIVE_INFINITY, ease: EASE_IN_OUT_CIRC }}
        />
      ))}
    </div>
  );
}
