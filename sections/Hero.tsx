"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, ArrowDown } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "DS & AI Specialist",
    "Python & Django Developer",
    "IoT Systems Builder",
    "ML Research Intern",
    "Lawn Tennis Champion"
  ];

  // Soft mouse coordinate follow for aesthetic ambient spot details
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  // Swapping cycle for dynamic roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent">
      
      {/* Custom styled background accents */}
      <div className="absolute inset-0 bg-carbon-dots pointer-events-none opacity-50 z-0" />
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-brand-emerald/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-brand-teal/5 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Headline & CTAs (Significantly enlarged fonts & dynamic cycler!) */}
        <div className="md:col-span-7 flex flex-col items-start text-left select-none">
          
          {/* Status Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-brand-emerald/20 bg-brand-emerald/5 text-brand-emerald text-[11px] tracking-widest uppercase font-bold mb-6 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
          >
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
            High-Performance Builder
          </motion.div>

          {/* Heading Name - Mega Size! */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="text-5xl sm:text-7xl font-sans font-extrabold tracking-tight text-white leading-none mb-3"
          >
            Sarvesh Solanki
          </motion.h1>

          {/* Dynamic Swapping Roles Cycler! */}
          <div className="h-9 sm:h-11 overflow-hidden mb-6 flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl sm:text-3xl font-mono font-extrabold text-brand-emerald tracking-wide uppercase"
              >
                // {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Human Recruiter Headline - Large Size! */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-xl sm:text-2xl font-sans font-extrabold text-slate-200 leading-snug tracking-tight mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text"
          >
            Creating practical AI and software solutions with a focus on usability, performance, and real-world impact.
          </motion.h2>

          {/* Concise Intro - Highly Legible Size! */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-sans font-medium"
          >
            Data Science & AI student at BML Munjal University. Experienced in ML citation engines at BITS Pilani, Hyderabad and full-stack application development using Python, Django, and React. GD Goenka Lawn Tennis Champion & E-Cell Lead.
          </motion.p>

          {/* Clean Apple-like CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={() => handleScrollToSection("projects")}
              className="relative inline-flex items-center justify-center font-sans text-xs sm:text-sm font-bold px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shadow-premium"
            >
              View Projects <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>

            <button
              onClick={onOpenResume}
              className="relative inline-flex items-center justify-center font-sans text-xs sm:text-sm font-bold px-6 py-3 bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/30 hover:bg-brand-emerald/20 rounded-lg transition-colors cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.05)]"
            >
              Resume (Visual CV)
            </button>

            <div className="flex items-center gap-3.5 ml-2 border-l border-slate-800 pl-4 py-1.5">
              <a
                href="https://github.com/solankiSarvesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-brand-emerald transition-colors"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sarvesh-solanki-71a2712ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-brand-teal transition-colors"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <button
                onClick={() => handleScrollToSection("contact")}
                className="text-slate-400 hover:text-brand-emerald transition-colors cursor-pointer"
                title="Contact"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Ultra-Premium Floating transparent Profile Picture Visual */}
        <div className="md:col-span-5 flex justify-center items-center relative py-12 md:py-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center cursor-pointer group"
          >
            {/* Soft, beautiful emerald backglow behind your transparent body */}
            <div className="absolute w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full bg-brand-emerald/10 blur-[80px] scale-[1.1] animate-pulse pointer-events-none z-0" />
            <div className="absolute w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full bg-brand-teal/5 blur-[80px] scale-[1.0] pointer-events-none z-0" />

            {/* Profile Avatar Frame - Transparent, no board, no layout boundaries */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 overflow-visible z-10 flex items-end justify-center select-none">
              <Image
                src="/profile.png"
                alt="Sarvesh Solanki"
                fill
                priority
                className="object-contain object-bottom transition-transform duration-750 group-hover:scale-105"
              />
              
              {/* Premium bottom fade dissolution: blends cut-off shoulders smoothly into navy canvas */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent pointer-events-none z-20" />
            </div>

            {/* 3D FLOATING ACHIEVEMENT CARDS (Positioned organically around body!) */}
            
            {/* Card 1: Athletics (Top-Left) */}
            <motion.div
              initial={{ x: -10, y: -10, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.06, y: -3 }}
              className="absolute -top-3 -left-5 z-30 px-3.5 py-2 bg-slate-950/95 border border-brand-emerald/30 rounded-xl backdrop-blur-md shadow-premium text-left flex items-center gap-2 select-none"
            >
              <span className="text-sm">🏆</span>
              <div className="font-sans leading-none">
                <span className="block text-[8px] text-brand-emerald font-extrabold tracking-widest uppercase mb-0.5">ATHLETICS</span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-100">Tennis Champion</span>
              </div>
            </motion.div>

            {/* Card 2: Academics (Bottom-Right) */}
            <motion.div
              initial={{ x: 10, y: 10, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              whileHover={{ scale: 1.06, y: -3 }}
              className="absolute -bottom-3 -right-5 z-30 px-3.5 py-2 bg-slate-950/95 border border-brand-teal/30 rounded-xl backdrop-blur-md shadow-premium text-left flex items-center gap-2 select-none"
            >
              <span className="text-sm">🎓</span>
              <div className="font-sans leading-none">
                <span className="block text-[8px] text-brand-teal font-extrabold tracking-widest uppercase mb-0.5">ACADEMICS</span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-100">BMU // 8.81 CGPA</span>
              </div>
            </motion.div>

            {/* Card 3: Leadership (Middle-Left) */}
            <motion.div
              initial={{ x: -15, y: 10, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.06, y: -3 }}
              className="absolute top-[60%] -left-8 z-30 px-3.5 py-2 bg-slate-950/95 border border-brand-emerald/30 rounded-xl backdrop-blur-md shadow-premium text-left flex items-center gap-2 select-none"
            >
              <span className="text-sm">🚀</span>
              <div className="font-sans leading-none">
                <span className="block text-[8px] text-brand-emerald font-extrabold tracking-widest uppercase mb-0.5">LEADERSHIP</span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-100">PitchQuest Lead</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        onClick={() => handleScrollToSection("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer select-none text-slate-500 hover:text-brand-emerald transition-colors"
      >
        <ArrowDown className="w-4 h-4" />
      </motion.div>

    </section>
  );
}
