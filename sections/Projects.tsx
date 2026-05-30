"use client";

import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "../utils/data";
import NeonCard from "../components/NeonCard";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  
  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="py-12 relative overflow-hidden bg-transparent">
      
      {/* Background spotlights */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-brand-emerald/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-brand-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start justify-start text-left mb-16">
          <span className="font-sans text-[11px] font-bold tracking-widest text-brand-emerald uppercase mb-2">04 / PORTFOLIO</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Featured Projects
          </h2>
          <div className="w-16 h-[2px] bg-brand-emerald mt-3" />
        </div>

        {/* Projects Grid (Larger typography!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 select-none">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.015, y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="h-full"
            >
              <NeonCard
                variant="neutral"
                className="h-full flex flex-col justify-between group shine-sweep-container border border-slate-800 hover:border-brand-emerald/30 shadow-premium"
                delay={0.05 * index}
                glowOpacity={0.02}
              >
                <div>
                  
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-lg border border-slate-800 bg-slate-900 flex items-center justify-center text-2xl shadow-premium select-none transition-transform duration-500 group-hover:scale-110">
                      {project.image}
                    </div>
                    <span className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded border border-slate-800 bg-slate-900/60 text-slate-400 font-bold">
                      {project.category.replace("-", " / ")}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-white mb-3 leading-tight tracking-wide transition-colors group-hover:text-brand-emerald">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-sans font-medium">
                    {project.description}
                  </p>

                </div>

                <div>
                  
                  {/* Tech Tags - Enlarge text! */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800 font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Dynamic Action Buttons (Symmetric Side-by-Side!) */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                    {/* View Repository Button */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-3.5 py-2 border border-slate-800 bg-slate-950/60 hover:bg-slate-900 hover:border-brand-emerald/40 text-slate-300 hover:text-white rounded-lg text-[11px] font-bold font-sans tracking-widest uppercase transition-all duration-300 shadow-premium flex-1 select-none cursor-pointer"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-brand-emerald"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      Repo
                    </a>
 
                    {/* Live Demo Button */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-3.5 py-2 border border-brand-emerald/20 bg-brand-emerald/5 hover:bg-brand-emerald/15 text-brand-emerald hover:text-white rounded-lg text-[11px] font-bold font-sans tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.02)] hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] flex-1 select-none cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-brand-emerald" />
                      Demo
                    </a>
                  </div>

                </div>

              </NeonCard>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
