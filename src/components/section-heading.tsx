"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { DURATION, EASE_OUT_EXPO, viewportOnce } from "@/lib/motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "";

  return (
    <motion.div
      className={`flex max-w-3xl flex-col space-y-3 sm:space-y-4 ${alignment}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: DURATION.slow, ease: EASE_OUT_EXPO }}
    >
      {eyebrow ? <Badge variant="soft" className="w-fit">{eyebrow}</Badge> : null}
      <h2 className="text-3xl font-bold tracking-tight text-[#F8F5EE] sm:text-4xl md:text-5xl lg:text-6xl font-display">{title}</h2>
      <p className="max-w-2xl text-sm leading-relaxed text-[#B8B8B8] sm:text-base sm:leading-relaxed md:text-lg">{description}</p>
    </motion.div>
  );
}
