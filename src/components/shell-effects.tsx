"use client";

import { useScroll } from "framer-motion";

import { CommandPalette } from "@/components/command-palette";
import { MouseGlow } from "@/components/mouse-glow";
import { ScrollProgress } from "@/components/scroll-progress";

export function ShellEffects() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <MouseGlow />
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <CommandPalette />
    </>
  );
}
