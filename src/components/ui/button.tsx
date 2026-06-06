import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white/15 text-white shadow-lg shadow-cyan-500/10 backdrop-blur-xl hover:bg-white/20",
        glass: "border border-white/15 bg-white/10 text-white backdrop-blur-xl hover:bg-white/15",
        accent: "bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-slate-950 shadow-xl shadow-cyan-500/20 hover:brightness-110",
        outline: "border border-white/15 bg-transparent text-white hover:bg-white/10",
        ghost: "text-white/80 hover:bg-white/8 hover:text-white",
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
