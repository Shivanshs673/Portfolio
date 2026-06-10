"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

export function GradientMesh() {
  const containerRef = useRef<HTMLDivElement>(null);
  const light1Ref = useRef<HTMLDivElement>(null);
  const light2Ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !light1Ref.current || !light2Ref.current) return;

    // Smooth, hardware-accelerated transform movement linked to scrolling
    const trigger = ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(light1Ref.current, {
          xPercent: progress * 40,
          yPercent: progress * 30,
        });
        gsap.set(light2Ref.current, {
          xPercent: -progress * 30,
          yPercent: progress * 40,
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-30 dark:opacity-20"
    >
      <div
        ref={light1Ref}
        className="absolute -left-[10%] -top-[10%] h-[70vw] w-[70vw] rounded-full bg-emerald-500/12 blur-[140px] dark:bg-emerald-500/10"
      />
      <div
        ref={light2Ref}
        className="absolute -right-[10%] top-[10%] h-[60vw] w-[60vw] rounded-full bg-white/4 blur-[120px] dark:bg-white/2"
      />
    </div>
  );
}
