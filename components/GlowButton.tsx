"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx } from "clsx";

interface GlowButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "link";
  children: React.ReactNode;
}

export default function GlowButton({
  variant = "primary",
  className,
  children,
  ...props
}: GlowButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-sans text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors duration-300 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  
  const variantStyles = {
    primary: "bg-white text-black hover:bg-white/90 focus:ring-white",
    secondary: "bg-zinc-900/50 text-white border border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700 focus:ring-zinc-500",
    link: "bg-transparent text-white/60 hover:text-white border border-transparent focus:ring-zinc-800",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.025, y: -1 }}
      whileTap={{ scale: 0.975 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-1.5">{children}</span>
    </motion.button>
  );
}
