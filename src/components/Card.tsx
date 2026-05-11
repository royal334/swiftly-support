import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
  glass?: boolean;
}

export const Card = ({ className, glass = false, ...props }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "rounded-3xl p-6 transition-all duration-300",
        glass
          ? "glass dark:glass-dark"
          : "bg-white dark:bg-white/5 border border-border dark:border-white/5",
        "hover:shadow-2xl hover:shadow-brand-primary/5 dark:hover:shadow-white/5",
        className,
      )}
      {...props}
    />
  );
};

export const CardHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-0 mb-4", className)}
    {...props}
  />
);

export const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-0", className)} {...props} />
);
