import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-sm",
        glass: "border border-card-border bg-card/40 backdrop-blur-xl text-slate-900 dark:text-white hover:bg-card/70",
        accent: "bg-primary-accent text-white hover:bg-primary-accent-hover shadow-md shadow-primary-accent/10",
        outline: "border border-card-border bg-transparent text-slate-900 dark:text-white hover:bg-surface",
        ghost: "text-muted hover:bg-surface hover:text-foreground",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-12 rounded-full px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
