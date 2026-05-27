"use client";

import React from "react";
import { motion } from "framer-motion";

interface TechIcon {
  name: string;
  symbol: string;
  color: string;
  angle: number; // in degrees
}

export default function OrbitingTech() {
  const innerOrbitIcons: TechIcon[] = [
    { name: "React", symbol: "⚛️", color: "text-[#00d8ff]", angle: 0 },
    { name: "Next.js", symbol: "▲", color: "text-white", angle: 120 },
    { name: "TypeScript", symbol: "TS", color: "text-[#3178c6]", angle: 240 },
  ];

  const outerOrbitIcons: TechIcon[] = [
    { name: "FastAPI", symbol: "⚡", color: "text-[#059669]", angle: 45 },
    { name: "PyTorch", symbol: "🔥", color: "text-[#ee4c2c]", angle: 135 },
    { name: "Docker", symbol: "🐳", color: "text-[#2496ed]", angle: 225 },
    { name: "PostgreSQL", symbol: "🐘", color: "text-[#336791]", angle: 315 },
  ];

  return (
    <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] flex items-center justify-center select-none pointer-events-none">
      {/* Central Core Hologram */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 0 20px rgba(0, 240, 255, 0.2)",
            "0 0 35px rgba(0, 240, 255, 0.4)",
            "0 0 20px rgba(0, 240, 255, 0.2)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 flex flex-col items-center justify-center relative backdrop-blur-md"
      >
        {/* Core HUD Lines */}
        <div className="absolute inset-2 border border-dashed border-cyber-cyan/20 rounded-full animate-[spin_30s_linear_infinite]" />
        <div className="absolute inset-4 border border-cyber-purple/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        
        {/* Text */}
        <span className="font-orbitron text-[10px] tracking-[0.2em] text-cyber-cyan opacity-80">SYS CORE</span>
        <span className="font-sans text-xs font-semibold text-white/90 mt-1">ONLINE</span>
        
        {/* Pulsing beacon center dot */}
        <span className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-cyber-cyan rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#00f0ff]" />
      </motion.div>

      {/* --- INNER ORBIT RING --- */}
      <div className="absolute w-[200px] h-[200px] md:w-[260px] md:h-[260px] border border-cyber-cyan/10 rounded-full">
        {/* Orbit Path Dot grid */}
        <div className="absolute inset-0 border border-dashed border-cyber-cyan/5 rounded-full animate-[spin_60s_linear_infinite]" />
      </div>

      {/* Inner Rotating Container */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200px] h-[200px] md:w-[260px] md:h-[260px] flex items-center justify-center"
      >
        {innerOrbitIcons.map((icon, index) => {
          // Convert angle to coordinates
          const rad = (icon.angle * Math.PI) / 180;
          const radius = typeof window !== "undefined" && window.innerWidth >= 768 ? 130 : 100;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          return (
            <motion.div
              key={icon.name}
              style={{ x, y }}
              className="absolute pointer-events-auto"
            >
              {/* Counter-rotate icon container to keep text/icon upright */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-cyber-cyan/20 bg-cyber-black/90 flex items-center justify-center text-sm md:text-base font-orbitron font-bold shadow-neon-cyan/10 hover:border-cyber-cyan/80 hover:shadow-neon-cyan/30 transition-all duration-300 group cursor-pointer"
                title={icon.name}
              >
                <span className={icon.color}>{icon.symbol}</span>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* --- OUTER ORBIT RING --- */}
      <div className="absolute w-[280px] h-[280px] md:w-[370px] md:h-[370px] border border-cyber-purple/10 rounded-full">
        <div className="absolute inset-0 border border-dashed border-cyber-purple/5 rounded-full animate-[spin_80s_linear_infinite_reverse]" />
      </div>

      {/* Outer Rotating Container */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute w-[280px] h-[280px] md:w-[370px] md:h-[370px] flex items-center justify-center"
      >
        {outerOrbitIcons.map((icon, index) => {
          const rad = (icon.angle * Math.PI) / 180;
          const radius = typeof window !== "undefined" && window.innerWidth >= 768 ? 185 : 140;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          return (
            <motion.div
              key={icon.name}
              style={{ x, y }}
              className="absolute pointer-events-auto"
            >
              {/* Counter-rotate to remain upright */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-cyber-purple/20 bg-cyber-black/90 flex items-center justify-center text-xs md:text-sm font-orbitron shadow-neon-purple/10 hover:border-cyber-purple/80 hover:shadow-neon-purple/30 transition-all duration-300 group cursor-pointer"
                title={icon.name}
              >
                <span className={icon.color}>{icon.symbol}</span>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
