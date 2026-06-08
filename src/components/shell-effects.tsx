"use client";

import { useScroll } from "framer-motion";

import { CommandPalette } from "@/components/command-palette";
import { FloatingBlobs } from "@/components/motion/floating-blobs";
import { GradientMesh } from "@/components/motion/gradient-mesh";
import { MouseSpotlight } from "@/components/motion/mouse-spotlight";
import { SmoothScrollProvider } from "@/components/motion/smooth-scroll-provider";
import { ScrollProgress } from "@/components/scroll-progress";

export function ShellEffects() {
  const { scrollYProgress } = useScroll();

  return (
    <SmoothScrollProvider>
      <GradientMesh />
      <FloatingBlobs />
      <MouseSpotlight />
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <CommandPalette />
    </SmoothScrollProvider>
  );
}
