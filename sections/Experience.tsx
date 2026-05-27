"use client";

import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "../utils/data";
import NeonCard from "../components/NeonCard";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-12 relative overflow-hidden bg-transparent">
      
      {/* Background spotlights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-brand-emerald/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-brand-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start justify-start text-left mb-20">
          <span className="font-sans text-[11px] font-bold tracking-widest text-brand-emerald uppercase mb-2">03 / EXPERIENCE</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Professional History
          </h2>
          <div className="w-16 h-[2px] bg-brand-emerald mt-3" />
        </div>

        {/* Minimal Timeline with glowing green border */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-6">
          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div key={item.id} className="relative pl-8 md:pl-10">
                
                {/* Clean Timeline Node Icon with brand highlights */}
                <div className="absolute -left-[17px] top-1.5 flex items-center justify-center z-20 select-none">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className={`w-8 h-8 rounded-full border ${item.type === "work" ? "border-brand-emerald/40 bg-brand-emerald/10 text-brand-emerald" : "border-brand-teal/40 bg-brand-teal/10 text-brand-teal"} flex items-center justify-center shadow-premium`}
                  >
                    {item.type === "work" ? (
                      <Briefcase className="w-4 h-4" />
                    ) : (
                      <GraduationCap className="w-4 h-4" />
                    )}
                  </motion.div>
                </div>

                {/* Content Card with upscaled text size */}
                <NeonCard
                  variant="neutral"
                  className="group border border-slate-800 hover:border-brand-emerald/20 transition-all duration-300"
                  delay={0.05 * index}
                  glowOpacity={0.02}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-sans text-lg sm:text-xl font-bold text-white tracking-wide">
                        {item.role}
                      </h3>
                      <h4 className={`font-sans text-sm font-semibold ${item.type === "work" ? "text-brand-emerald" : "text-brand-teal"} mt-0.5`}>
                        {item.company}
                      </h4>
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs font-bold tracking-wider text-slate-300 uppercase bg-slate-900 border border-slate-800 px-3 py-1 rounded-md self-start sm:self-center shadow-premium">
                      {item.duration}
                    </span>
                  </div>

                  {/* Descriptions Bullet items - Enlarge text to base! */}
                  <ul className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                    {item.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-2.5 items-start text-left">
                        <span className={`w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 ${item.type === "work" ? "bg-brand-emerald" : "bg-brand-teal"}`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags - Enlarge text to xs/sm! */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800 font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </NeonCard>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
