"use client";

import React from "react";
import NeonCard from "../components/NeonCard";
import { skillsData } from "../utils/data";
import { Terminal, AppWindow, Cpu, Eye } from "lucide-react";

export default function Skills() {
  const icons = [
    <Terminal className="w-5 h-5 text-brand-emerald" key="terminal" />,
    <AppWindow className="w-5 h-5 text-brand-teal" key="app" />,
    <Cpu className="w-5 h-5 text-brand-emerald" key="cpu" />,
    <Eye className="w-5 h-5 text-brand-teal" key="eye" />,
  ];

  return (
    <section id="skills" className="py-12 relative overflow-hidden bg-transparent">
      
      {/* Ambient spotlights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-brand-emerald/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-brand-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start justify-start text-left mb-16">
          <span className="font-sans text-[11px] font-bold tracking-widest text-brand-emerald uppercase mb-2">02 / SKILLSET</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Technical Capabilities
          </h2>
          <div className="w-16 h-[2px] bg-brand-emerald mt-3" />
        </div>

        {/* 4-Category Skills Grid (Larger fonts!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 select-none">
          {skillsData.map((category, index) => (
            <NeonCard
              key={category.title}
              variant="neutral"
              delay={0.05 * index}
              className="group border border-slate-800 hover:border-brand-emerald/20 transition-all duration-300"
              glowOpacity={0.02}
            >
              <div className="flex items-center gap-3.5 border-b border-slate-800 pb-4 mb-6">
                <div className="w-9 h-9 rounded bg-slate-900 border border-slate-800 flex items-center justify-center shadow-premium">
                  {icons[index]}
                </div>
                <h3 className="font-sans text-base sm:text-lg font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tag Cloud - Enlarge text to sm! */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative flex items-center justify-between px-3.5 py-2 rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-brand-emerald/30 text-sm font-sans font-semibold text-slate-300 hover:text-white transition-all duration-300 hover:scale-[1.03] cursor-pointer shadow-premium"
                  >
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </NeonCard>
          ))}
        </div>

      </div>

    </section>
  );
}
