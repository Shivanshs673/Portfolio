"use client";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: number;
};

export function Logo({ className, size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("select-none", className)}
    >
      <defs>
        <linearGradient id="logo-border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" /> {/* Cyan 500 */}
          <stop offset="100%" stopColor="#a855f7" /> {/* Purple 500 */}
        </linearGradient>
        <linearGradient id="cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" /> {/* Cyan 400 */}
          <stop offset="100%" stopColor="#0891b2" /> {/* Cyan 600 */}
        </linearGradient>
        <linearGradient id="purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" /> {/* Purple 400 */}
          <stop offset="100%" stopColor="#7e22ce" /> {/* Purple 700 */}
        </linearGradient>
      </defs>

      {/* Circular border */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="url(#logo-border-grad)"
        strokeWidth="3.5"
      />

      {/* Left angle bracket < */}
      <path
        d="M 34 38 L 22 50 L 34 62"
        stroke="url(#cyan-grad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center S */}
      <text
        x="49"
        y="62"
        textAnchor="middle"
        fill="currentColor"
        fontSize="34"
        fontWeight="900"
        className="text-slate-900 dark:text-white"
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        S
      </text>

      {/* Right slash / */}
      <path
        d="M 59 62 L 67 38"
        stroke="url(#purple-grad)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Right angle bracket > */}
      <path
        d="M 71 38 L 83 50 L 71 62"
        stroke="url(#purple-grad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
