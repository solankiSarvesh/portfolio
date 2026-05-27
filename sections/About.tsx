"use client";

import React from "react";
import NeonCard from "../components/NeonCard";
import { GraduationCap, Award, Compass, Trophy } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 relative overflow-hidden bg-transparent">
      
      {/* Background gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-brand-emerald/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start justify-start text-left mb-16">
          <span className="font-sans text-[11px] font-bold tracking-widest text-brand-emerald uppercase mb-2">01 / ABOUT ME</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Personal Narrative
          </h2>
          <div className="w-16 h-[2px] bg-brand-emerald mt-3" />
        </div>

        {/* Narratives Card grid (Upscaled text!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <NeonCard variant="neutral" className="h-full border border-slate-800 hover:border-brand-emerald/30 transition-all duration-300">
            <div className="flex items-center gap-2.5 mb-4">
              <GraduationCap className="w-5 h-5 text-brand-emerald" />
              <h3 className="font-sans text-base sm:text-lg font-bold text-white">Academic Foundation</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-medium">
              I am a dedicated software developer specializing in Computer Science, Data Science, and Artificial Intelligence at BML Munjal University. With an active CGPA of 8.81, I focus on building practical applications that combine clean full-stack coding patterns with predictive machine learning algorithms.
            </p>
          </NeonCard>

          <NeonCard variant="neutral" className="h-full border border-slate-800 hover:border-brand-teal/30 transition-all duration-300">
            <div className="flex items-center gap-2.5 mb-4">
              <Trophy className="w-5 h-5 text-brand-teal" />
              <h3 className="font-sans text-base sm:text-lg font-bold text-white">High-Performance Milestones</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-medium">
              My engineering experience ranges from building full-stack e-commerce marketplaces using Django at DigiMind Technologies, to conducting advanced semiconductor cleanroom research at BITS Pilani, Hyderabad. Outside coding, I represent BMU as the GD Goenka Singles Lawn Tennis University Champion 🎾 and direct event coordinates for PitchQuest startup pitches!
            </p>
          </NeonCard>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 select-none">
          
          {/* Card 1: B.Tech */}
          <NeonCard variant="neutral" delay={0.05} className="group border border-slate-800 hover:border-brand-emerald/30">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center">
                <GraduationCap className="w-4.5 h-4.5 text-brand-emerald" />
              </div>
              <span className="font-sans text-xs font-bold tracking-wider text-slate-400">2023 - 2027</span>
            </div>
            <h4 className="font-sans text-base font-bold text-white leading-tight">
              B.Tech in CSE (DS & AI)
            </h4>
            <p className="text-slate-400 text-xs font-sans mt-1">
              BML Munjal University
            </p>
            <div className="mt-6 pt-3 border-t border-slate-800 flex justify-between items-center font-mono text-[10px] text-slate-500">
              <span>SPECIALIZATION</span>
              <span className="text-brand-emerald font-bold">CGPA: 8.81</span>
            </div>
          </NeonCard>

          {/* Card 2: 12th */}
          <NeonCard variant="neutral" delay={0.1} className="group border border-slate-800 hover:border-brand-teal/30">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center">
                <Award className="w-4.5 h-4.5 text-brand-teal" />
              </div>
              <span className="font-sans text-xs font-bold tracking-wider text-slate-400">2021 - 2023</span>
            </div>
            <h4 className="font-sans text-base font-bold text-white leading-tight">
              12th Standard (Science)
            </h4>
            <p className="text-slate-400 text-xs font-sans mt-1">
              The Vivekananda School
            </p>
            <div className="mt-6 pt-3 border-t border-slate-800 flex justify-between items-center font-mono text-[10px] text-slate-500">
              <span>CBSE / DELHI</span>
              <span className="text-brand-teal font-bold">SCORE: 79.2%</span>
            </div>
          </NeonCard>

          {/* Card 3: 10th */}
          <NeonCard variant="neutral" delay={0.15} className="group border border-slate-800 hover:border-brand-emerald/30">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center">
                <Compass className="w-4.5 h-4.5 text-brand-emerald" />
              </div>
              <span className="font-sans text-xs font-bold tracking-wider text-slate-400">2019 - 2021</span>
            </div>
            <h4 className="font-sans text-base font-bold text-white leading-tight">
              10th Standard
            </h4>
            <p className="text-slate-400 text-xs font-sans mt-1">
              Ryan International School
            </p>
            <div className="mt-6 pt-3 border-t border-slate-800 flex justify-between items-center font-mono text-[10px] text-slate-500">
              <span>CBSE / U.P</span>
              <span className="text-brand-emerald font-bold">SCORE: 88.8%</span>
            </div>
          </NeonCard>

        </div>

      </div>

    </section>
  );
}
