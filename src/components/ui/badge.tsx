import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-card-border bg-surface text-slate-700 dark:text-slate-200 shadow-sm",
        soft: "border-primary-accent/25 bg-primary-accent/8 text-primary-accent dark:border-primary-accent/30 dark:bg-primary-accent/10 dark:text-primary-accent-hover",
        ghost: "border-transparent bg-transparent text-muted",
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

