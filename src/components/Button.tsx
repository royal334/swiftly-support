import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary:
        "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-lg shadow-brand-primary/20",
      secondary:
        "bg-brand-secondary text-white hover:bg-brand-secondary/90 shadow-lg shadow-brand-secondary/20",
      outline:
        "border-2 border-brand-primary/20 bg-transparent hover:bg-brand-primary/5 text-brand-primary",
      ghost:
        "bg-transparent hover:bg-white/10 dark:hover:bg-white/5 text-current",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg font-semibold",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary/50 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
