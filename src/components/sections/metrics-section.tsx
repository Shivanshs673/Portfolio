"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GlassShimmer } from "@/components/motion/tilt-spotlight-card";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

type CounterProps = {
  value: number;
  duration?: number;
  suffix?: string;
};

function AnimatedCounter({ value, duration = 2, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.floor(latest));
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo equivalent
      });
      return controls.stop;
    }
  }, [motionValue, value, isInView, duration]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toString() + suffix;
      }
    });
  }, [rounded, suffix]);

  return (
    <span ref={ref} className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
      0{suffix}
    </span>
  );
}

const metricsList = [
  { label: "LeetCode Solved", value: 270, suffix: "+" },
  { label: "Android Apps Built", value: 5, suffix: "+" },
  { label: "Internships Completed", value: 1, suffix: "" },
  { label: "Technologies Mastered", value: 15, suffix: "+" },
  { label: "Projects Delivered", value: 8, suffix: "+" },
  { label: "Open Source PRs", value: 20, suffix: "+" },
];

export function MetricsSection() {
  return (
    <section id="metrics" className="section-wrapper relative px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" delay={0.05}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
            {metricsList.map((item) => (
              <Card
                key={item.label}
                className="glass relative overflow-hidden p-4 text-center transition-all duration-300 hover:scale-[1.02] hover:border-white/15"
              >
                <GlassShimmer />
                <div className="flex flex-col items-center justify-center gap-1">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:text-xs">
                    {item.label}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
