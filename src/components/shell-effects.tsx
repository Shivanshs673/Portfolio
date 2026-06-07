"use client";

import { useScroll } from "framer-motion";

import { CommandPalette } from "@/components/command-palette";
import { ScrollProgress } from "@/components/scroll-progress";

export function ShellEffects() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <CommandPalette />
    </>
  );
}
