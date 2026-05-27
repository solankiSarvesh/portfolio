"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workflowPipeline } from "../utils/data";
import NeonCard from "../components/NeonCard";
import { Lightbulb, Calendar, Cpu, Code2, ShieldCheck, Zap, Rocket, CheckCircle } from "lucide-react";

export default function Persona() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [
    <Lightbulb className="w-5 h-5" key="light" />,
    <Calendar className="w-5 h-5" key="calendar" />,
    <Cpu className="w-5 h-5" key="cpu" />,
    <Code2 className="w-5 h-5" key="code" />,
    <ShieldCheck className="w-5 h-5" key="shield" />,
    <Zap className="w-5 h-5" key="zap" />,
    <Rocket className="w-5 h-5" key="rocket" />,
  ];

  const nodeColors = [
    "border-cyber-cyan text-cyber-cyan shadow-neon-cyan/20",
    "border-cyber-blue text-cyber-blue shadow-neon-blue/20",
    "border-cyber-purple text-cyber-purple shadow-neon-purple/20",
    "border-cyber-teal text-cyber-teal shadow-neon-teal/20",
    "border-cyber-cyan text-cyber-cyan shadow-neon-cyan/20",
    "border-cyber-purple text-cyber-purple shadow-neon-purple/20",
    "border-cyber-teal text-cyber-teal shadow-neon-teal/20",
  ];

  const backgroundColors = [
    "bg-cyber-cyan/5 hover:bg-cyber-cyan/15",
    "bg-cyber-blue/5 hover:bg-cyber-blue/15",
    "bg-cyber-purple/5 hover:bg-cyber-purple/15",
    "bg-cyber-teal/5 hover:bg-cyber-teal/15",
    "bg-cyber-cyan/5 hover:bg-cyber-cyan/15",
    "bg-cyber-purple/5 hover:bg-cyber-purple/15",
    "bg-cyber-teal/5 hover:bg-cyber-teal/15",
  ];

  const glowAuras = [
    "bg-cyber-cyan/15",
    "bg-cyber-blue/15",
    "bg-cyber-purple/15",
    "bg-cyber-teal/15",
    "bg-cyber-cyan/15",
    "bg-cyber-purple/15",
    "bg-cyber-teal/15",
  ];

  return (
    <section id="persona" className="py-24 relative overflow-hidden">
      
      {/* Background stars / details */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-20" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyber-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-cyber-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title HUD Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="font-orbitron text-[9px] tracking-[0.25em] text-cyber-cyan uppercase mb-2">PHILOSOPHY_MODULE</span>
          <h2 className="font-orbitron text-2xl sm:text-4xl font-bold tracking-wider text-white">
            // INTERACTIVE WORKFLOW
          </h2>
          <div className="w-16 h-[1px] bg-cyber-cyan/50 mt-4" />
        </div>

        {/* Dynamic Stepper Grid */}
        <div className="relative mb-12 select-none overflow-x-auto pb-4 md:overflow-x-visible">
          
          {/* Main horizontal connecting pipe (Desktop Only) */}
          <div className="hidden lg:block absolute top-6 left-10 right-10 h-[2px] bg-white/5 z-0">
            {/* Animated Laser packet pulsing between stages */}
            <motion.div
              animate={{
                left: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 w-24 h-full bg-gradient-to-r from-transparent via-cyber-cyan to-transparent shadow-[0_0_8px_#00f0ff]"
            />
          </div>

          <div className="flex lg:grid lg:grid-cols-7 gap-6 lg:gap-4 min-w-[850px] lg:min-w-0 px-4">
            {workflowPipeline.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <div key={step.id} className="flex-1 flex flex-col items-center text-center relative z-10">
                  
                  {/* Step Interactive Node */}
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => setActiveStep(index)}
                    className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 relative ${
                      isActive
                        ? nodeColors[index] + " scale-110 " + glowAuras[index]
                        : "border-white/10 bg-cyber-black text-white/50 hover:text-white"
                    } ${backgroundColors[index]}`}
                  >
                    {stepIcons[index]}
                    {/* Pulsing indicator aura */}
                    {isActive && (
                      <span className={`w-12 h-12 rounded-full absolute -z-10 animate-ping opacity-25 ${
                        index % 3 === 0 ? "bg-cyber-cyan" : index % 3 === 1 ? "bg-cyber-blue" : "bg-cyber-purple"
                      }`} />
                    )}
                  </motion.button>

                  {/* Step Label details */}
                  <span className="block font-orbitron text-[9px] font-bold text-white/40 mt-3 uppercase tracking-wider">
                    STAGE_{step.label}
                  </span>
                  
                  <span className={`block font-sans text-xs font-semibold mt-1 tracking-wide ${
                    isActive ? "text-white" : "text-white/60"
                  }`}>
                    {step.title.split(" ")[0]}
                  </span>

                </div>
              );
            })}
          </div>

        </div>

        {/* Expanded Console Readout Terminal Box */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <NeonCard
                variant={
                  activeStep % 3 === 0 ? "cyan" :
                  activeStep % 3 === 1 ? "blue" : "purple"
                }
                className="w-full relative"
                glowOpacity={0.08}
              >
                {/* HUD borders */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className={`w-4 h-4 ${
                      activeStep % 3 === 0 ? "text-cyber-cyan" :
                      activeStep % 3 === 1 ? "text-cyber-blue" : "text-cyber-purple"
                    }`} />
                    <span className="font-orbitron text-xs font-semibold tracking-widest text-white/70">
                      SYS_CONSOLE // WORKFLOW_READOUT
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-white/30">STAGE_{workflowPipeline[activeStep].label}_SECURE</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Console visual frame */}
                  <div className="md:col-span-8">
                    <span className="font-mono text-[10px] text-cyber-cyan uppercase block mb-1">
                      {`>> INITIALIZING STAGE_${workflowPipeline[activeStep].label}: ${workflowPipeline[activeStep].title.toUpperCase()}`}
                    </span>
                    
                    <h3 className="font-orbitron text-xl font-bold text-white mb-3">
                      {workflowPipeline[activeStep].title}
                    </h3>
                    
                    <p className="text-white/70 text-sm leading-relaxed font-sans">
                      {workflowPipeline[activeStep].description}
                    </p>

                    <div className="mt-6 font-mono text-[9px] text-white/40 p-2.5 border border-white/5 bg-white/[0.01] rounded max-w-lg">
                      <span className="text-cyber-purple font-semibold">METHOD:</span> Standard agile engineering, multi-agent AI verification loops, comprehensive regression coverage, and automated containerized edge releases.
                    </div>
                  </div>

                  {/* High Tech graphic widget panel */}
                  <div className="md:col-span-4 flex justify-center py-4 border-t md:border-t-0 md:border-l border-white/5 pl-0 md:pl-6 select-none">
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      {/* Radar sweep */}
                      <div className="absolute inset-0 rounded-full border border-white/5" />
                      <div className="absolute inset-4 rounded-full border border-dashed border-white/10" />
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className={`absolute inset-0 rounded-full border-t-2 border-r-2 ${
                          activeStep % 3 === 0 ? "border-cyber-cyan" :
                          activeStep % 3 === 1 ? "border-cyber-blue" : "border-cyber-purple"
                        } opacity-40`}
                      />
                      <span className="font-orbitron text-xs font-bold text-white/80">
                        {workflowPipeline[activeStep].label} / 07
                      </span>
                    </div>
                  </div>

                </div>

              </NeonCard>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
}
