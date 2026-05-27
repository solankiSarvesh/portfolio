"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMouseGlow } from "../hooks/useMouseGlow";
import { clsx } from "clsx";

interface NeonCardProps {
  children: React.ReactNode;
  variant?: "cyan" | "purple" | "blue" | "teal" | "neutral";
  className?: string;
  glowOpacity?: number;
  delay?: number;
  onClick?: () => void;
}

export default function NeonCard({
  children,
  variant = "neutral",
  className,
  glowOpacity = 0.015, // Extremely subtle recruiter-friendly backing glow
  delay = 0,
  onClick,
}: NeonCardProps) {
  const { containerRef, handleMouseMove } = useMouseGlow();

  // Muted, high-end Vercel/Linear color spotlights
  const glowColors = {
    cyan: "rgba(255, 255, 255, var(--glow-opacity))",
    purple: "rgba(255, 255, 255, var(--glow-opacity))",
    blue: "rgba(255, 255, 255, var(--glow-opacity))",
    teal: "rgba(255, 255, 255, var(--glow-opacity))",
    neutral: "rgba(255, 255, 255, var(--glow-opacity))",
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
      onClick={onClick}
      style={{
        "--glow-opacity": glowOpacity,
      } as React.CSSProperties}
      className={clsx(
        "relative rounded-xl overflow-hidden glass-card transition-all duration-500",
        onClick && "cursor-pointer select-none",
        className
      )}
    >
      {/* Subtle interactive mouse follow spotlight (Vercel-like hover effect) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${glowColors[variant]} 0%, transparent 80%)`,
        }}
      />

      <div className="relative z-10 p-6 h-full">{children}</div>
    </motion.div>
  );
}
