import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-slate-900/10 dark:border-white/10 bg-slate-900/5 dark:bg-white/10 text-slate-700 dark:text-white/90",
        soft: "border-cyan-500/20 dark:border-cyan-400/20 bg-cyan-500/5 dark:bg-cyan-400/10 text-cyan-700 dark:text-cyan-100",
        ghost: "border-transparent bg-transparent text-slate-600 dark:text-slate-300",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

