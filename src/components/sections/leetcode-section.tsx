"use client";

import { Award, Code2, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { GlassShimmer } from "@/components/motion/tilt-spotlight-card";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { LeetCodeStats } from "@/lib/leetcode";

type LeetcodeSectionProps = {
  stats: LeetCodeStats;
};

export function LeetcodeSection({ stats }: LeetcodeSectionProps) {
  const easyPct = (stats.easySolved / stats.totalEasy) * 100;
  const mediumPct = (stats.mediumSolved / stats.totalMedium) * 100;
  const hardPct = (stats.hardSolved / stats.totalHard) * 100;

  // Circular progress calculations for the main gauge (all problems)
  const totalQuestions = stats.totalEasy + stats.totalMedium + stats.totalHard;
  const overallPct = (stats.totalSolved / totalQuestions) * 100;
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (overallPct / 100) * circumference;

  return (
    <section id="leetcode" className="section-wrapper px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Algorithms"
          title="LeetCode statistics"
          description="Algorithmic problem-solving consistency, difficulty breakdowns, and competitive programming ratings."
        />

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.1fr] sm:mt-12 sm:gap-6">
          {/* Visual Progress Breakdown */}
          <ScrollReveal direction="left">
            <Card className="glass relative flex h-full flex-col overflow-hidden p-5 sm:p-6 md:p-8">
              <GlassShimmer />
              <h3 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">Problem Difficulty Breakdown</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Total solved questions vs global question pool</p>

              <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-around">
                {/* Circular Gauge */}
                <div className="relative flex h-36 w-36 shrink-0 items-center justify-center">
                  <svg className="h-full w-full -rotate-90">
                    <circle
                      cx="72"
                      cy="72"
                      r={radius}
                      className="stroke-slate-900/5 dark:stroke-white/5"
                      strokeWidth="10"
                      fill="transparent"
                    />
                    <circle
                      cx="72"
                      cy="72"
                      r={radius}
                      className="stroke-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                      strokeWidth="10"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">{stats.totalSolved}</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Solved</span>
                  </div>
                </div>

                {/* Horizontal Progress Bars */}
                <div className="w-full flex-1 space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">Easy</span>
                      <span>{stats.easySolved} / {stats.totalEasy}</span>
                    </div>
                    <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-900/5 dark:bg-white/5">
                      <div
                        className="h-full rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                        style={{ width: `${Math.max(4, easyPct)}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                      <span className="font-semibold text-amber-600 dark:text-amber-400">Medium</span>
                      <span>{stats.mediumSolved} / {stats.totalMedium}</span>
                    </div>
                    <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-900/5 dark:bg-white/5">
                      <div
                        className="h-full rounded-full bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.4)]"
                        style={{ width: `${Math.max(4, mediumPct)}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                      <span className="font-semibold text-rose-600 dark:text-rose-400">Hard</span>
                      <span>{stats.hardSolved} / {stats.totalHard}</span>
                    </div>
                    <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-900/5 dark:bg-white/5">
                      <div
                        className="h-full rounded-full bg-rose-500 shadow-[0_0_12px_rgba(239,68,68,0.4)]"
                        style={{ width: `${Math.max(4, hardPct)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Ranking & Rating Stats */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            <ScrollReveal direction="up" delay={0.05}>
              <Card className="glass relative overflow-hidden p-5 sm:p-6">
                <GlassShimmer />
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-500/10 text-amber-500 dark:text-amber-400 sm:h-12 sm:w-12">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Contest Rating</p>
                    <h4 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                      {stats.contestRating ? stats.contestRating.toLocaleString() : "1,510"}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      Reflects problem-solving performance and consistency in weekly contests.
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <Card className="glass relative overflow-hidden p-5 sm:p-6">
                <GlassShimmer />
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 sm:h-12 sm:w-12">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Global Ranking</p>
                    <h4 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                      {stats.globalRanking ? stats.globalRanking.toLocaleString() : "320,000"}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      Ranked among millions of software engineers and competitive coders worldwide.
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15} className="sm:col-span-2">
              <Card className="glass relative overflow-hidden p-5 sm:p-6">
                <GlassShimmer />
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-600 dark:text-purple-400 sm:h-12 sm:w-12">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Consistency Focus</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      Actively practicing data structures and algorithms in **Kotlin** and **C++** to keep my design patterns, logic, and complexity calculations sharp.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                        Active Coder
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
