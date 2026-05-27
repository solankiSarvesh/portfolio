"use client";

import React, { useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CyberNavbarProps {
  onOpenResume: () => void;
}

export default function CyberNavbar({ onOpenResume }: CyberNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Profiles", id: "credentials" },
    { name: "Connect", id: "contact" },
  ];

  const activeSection = useActiveSection(
    navItems.map((item) => item.id),
    0.25
  );

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 border-b border-slate-800 bg-[#080d18]/70 backdrop-blur-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo brand */}
          <div 
            className="flex-shrink-0 flex items-center gap-1.5 cursor-pointer select-none" 
            onClick={() => handleScroll("home")}
          >
            <span className="font-sans font-bold text-base tracking-wider text-slate-100 hover:text-brand-emerald transition-colors">
              Sarvesh.
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`relative font-sans text-xs tracking-wider font-semibold uppercase transition-colors duration-300 py-1.5 px-0.5 hover:text-white ${
                  activeSection === item.id ? "text-brand-emerald" : "text-slate-400"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-emerald"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Actions: Resume Trigger */}
          <div className="hidden md:flex items-center gap-4 select-none">
            <button
              onClick={onOpenResume}
              className="relative inline-flex items-center justify-center font-sans text-xs font-bold px-4 py-2 bg-brand-emerald text-slate-950 hover:bg-brand-emerald/90 rounded-lg transition-colors cursor-pointer shadow-premium"
            >
              Resume
            </button>
          </div>

          {/* Mobile Hamburger menu trigger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#080d18]/95 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`block w-full text-left font-sans text-sm font-semibold uppercase py-2 px-3 rounded-md border ${
                    activeSection === item.id
                      ? "border-brand-emerald/20 bg-brand-emerald/5 text-brand-emerald"
                      : "border-transparent text-slate-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenResume();
                  }}
                  className="block w-full text-center font-sans text-sm font-bold py-2 bg-brand-emerald text-slate-950 hover:bg-brand-emerald/90 rounded-md transition-colors shadow-premium cursor-pointer"
                >
                  View Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
