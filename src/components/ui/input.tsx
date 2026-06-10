import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-11 w-full rounded-2xl border border-card-border bg-surface dark:bg-zinc-900/40 px-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 shadow-sm outline-none transition focus:border-primary-accent/50 focus:ring-2 focus:ring-primary-accent/10 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
