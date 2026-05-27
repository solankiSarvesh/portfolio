"use client";

import React, { useState, useEffect } from "react";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(42109);

  // Slow ticks for the visitor dashboard metric
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 2) + 1);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Profiles", id: "credentials" },
    { name: "Connect", id: "contact" },
  ];

  return (
    <footer className="relative border-t border-slate-800 bg-[#080d18] py-12 overflow-hidden z-10 select-none">
      
      {/* Subtle carbon overlay */}
      <div className="absolute inset-0 bg-carbon-grid pointer-events-none opacity-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
          
          {/* Logo brand */}
          <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => handleScrollToSection("home")}>
            <span className="font-sans font-bold text-sm tracking-wider text-white hover:text-brand-emerald transition-colors">
              Sarvesh.
            </span>
          </div>

          {/* Quick scroll shortcuts */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 select-none">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollToSection(link.id)}
                className="font-sans text-[10px] tracking-widest text-slate-400 hover:text-brand-emerald transition-colors uppercase font-bold"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Telemetry stats */}
          <div className="flex items-center gap-4 select-none">
            
            {/* Visitors counter */}
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400 tracking-wider">
              <span>TRAFFIC:</span>
              <span className="text-brand-emerald font-bold tracking-widest bg-slate-950 px-2 py-0.5 rounded border border-slate-800 shadow-premium">
                {visitorCount.toLocaleString()}
              </span>
            </div>

            {/* Clean Secure link beacons */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-slate-800 bg-slate-950">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
              <span className="font-sans text-[8px] font-bold text-slate-300 tracking-wider uppercase">
                SECURE_LINK
              </span>
            </div>

          </div>

        </div>

        {/* Brand Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-4 text-center sm:text-left">
          <p className="font-mono text-[9px] text-slate-500 uppercase tracking-widest font-semibold">
            © {new Date().getFullYear()} SARVESH SOLANKI. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono text-[9px] text-brand-emerald uppercase tracking-widest font-bold animate-pulse">
            HIGH-PERFORMANCE TECH-ATHLETE PORTFOLIO // V2.0
          </p>
        </div>

      </div>

    </footer>
  );
}
