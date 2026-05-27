"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NeonCard from "../components/NeonCard";
import { Mail, Phone, MessageSquareCode } from "lucide-react";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const socialLinks = [
    { 
      name: "GitHub", 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>, 
      url: "https://github.com/solankiSarvesh"
    },
    { 
      name: "LinkedIn", 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>, 
      url: "https://www.linkedin.com/in/sarvesh-solanki-71a2712ab/"
    },
  ];

  return (
    <section id="contact" className="py-12 relative overflow-hidden bg-transparent select-none">
      
      {/* Background spotlights */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-emerald/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="font-sans text-[11px] font-bold tracking-widest text-brand-emerald uppercase mb-2">06 / CONTACT</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Let's Connect
          </h2>
          <div className="w-16 h-[2px] bg-brand-emerald mt-3" />
        </div>

        {/* Dynamic Hover-Reveal Layout (Upscaled text!) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 min-h-[180px]">
          
          {/* Main Elevated GlassCard */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full max-w-sm"
          >
            <NeonCard
              variant="neutral"
              className="w-full text-center hover:scale-[1.015] hover:shadow-premium duration-500 cursor-pointer border border-slate-800 hover:border-brand-emerald/30 bg-slate-900/60"
              glowOpacity={0.02}
            >
              <div className="flex flex-col items-center justify-center py-6">
                
                {/* Active Indicator icon */}
                <div className="w-14 h-14 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:rotate-6 shadow-premium">
                  <MessageSquareCode className="w-6 h-6 text-brand-emerald animate-pulse" />
                </div>

                <h3 className="font-sans text-xl font-bold text-white tracking-wide">
                  Open for Opportunities
                </h3>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xs mt-2 mb-6 font-sans font-medium">
                  Hover or interact to reveal direct messaging channels.
                </p>

                {/* Subtle Social shortcuts inside */}
                <div className="flex items-center gap-4">
                  {socialLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleCardClick(link.url)}
                      className="w-10 h-10 rounded-lg border border-slate-800 bg-slate-950 hover:bg-slate-900 hover:border-brand-emerald/40 flex items-center justify-center text-slate-400 hover:text-white transition-all cursor-pointer shadow-premium"
                      title={link.name}
                    >
                      {link.icon}
                    </button>
                  ))}
                </div>

              </div>
            </NeonCard>
          </div>

          {/* Dynamic Side panel: Reveals direct phone and email on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4 w-full max-w-xs select-text"
              >
                {/* Email Direct link */}
                <a
                  href="mailto:solankisarvesh18@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-brand-emerald/30 transition-all duration-300 group shadow-premium"
                >
                  <div className="w-9 h-9 rounded bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 shadow-premium">
                    <Mail className="w-5 h-5 text-brand-emerald" />
                  </div>
                  <div className="text-left font-sans">
                    <span className="block text-[10px] text-brand-emerald tracking-wider uppercase font-bold">EMAIL ME</span>
                    <span className="text-sm sm:text-base font-bold text-slate-200 group-hover:text-white transition-colors">
                      solankisarvesh18@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone Direct link */}
                <a
                  href="tel:+919990275559"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-brand-teal/30 transition-all duration-300 group shadow-premium"
                >
                  <div className="w-9 h-9 rounded bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 shadow-premium">
                    <Phone className="w-5 h-5 text-brand-teal" />
                  </div>
                  <div className="text-left font-sans">
                    <span className="block text-[10px] text-brand-teal tracking-wider uppercase font-bold">CALL ME</span>
                    <span className="text-sm sm:text-base font-bold text-slate-200 group-hover:text-white transition-colors">
                      +91 99902 75559
                    </span>
                  </div>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}
