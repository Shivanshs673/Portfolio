"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

export function GradientMesh() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) return;

    // Fluidly transitions the mesh coordinates down as page scrolls
    const tween = gsap.to(ref.current, {
      background: "radial-gradient(circle at 80% 80%, rgba(168,85,247,0.16), transparent 45%), radial-gradient(circle at 15% 75%, rgba(56,189,248,0.14), transparent 40%)",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-40"
      style={{
        background: "radial-gradient(circle at 20% 20%, rgba(56,189,248,0.15), transparent 40%), radial-gradient(circle at 80% 10%, rgba(168,85,247,0.12), transparent 35%)",
      }}
    />
  );
}
