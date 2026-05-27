"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Award, Briefcase, GraduationCap, Code, Phone, Mail, MapPin, Globe } from "lucide-react";
import Image from "next/image";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <>
      <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl overflow-y-auto select-none"
        >
          {/* Main Modal Panel */}
          <motion.div
            initial={{ scale: 0.95, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 30, opacity: 0 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.15 }}
            className="relative w-full max-w-4xl bg-slate-900/90 border border-slate-700/50 rounded-2xl shadow-hover-premium overflow-hidden flex flex-col my-8"
          >
            {/* Header / Actions bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-emerald animate-pulse" />
                <h3 className="font-sans font-bold text-sm tracking-widest text-slate-400 uppercase">
                  Interactive CV Portfolio
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  download="Sarvesh_Solanki_Resume.pdf"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-emerald hover:bg-brand-emerald/90 text-slate-950 font-sans text-xs font-bold transition-colors shadow-premium cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg border border-slate-800 bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Resume visual content area */}
            <div className="p-6 md:p-10 overflow-y-auto max-h-[80vh] custom-scrollbar space-y-8 bg-[#090f1d] text-slate-200">
              
              {/* Top Profile Banner: Two columns */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-slate-800 pb-8">
                
                {/* Left Side: Avatar & Name */}
                <div className="md:col-span-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-end justify-center overflow-visible flex-shrink-0 group">
                    {/* Tiny emerald backglow behind transparent avatar */}
                    <div className="absolute inset-2 rounded-full bg-brand-emerald/10 blur-[25px] scale-[1.2]" />
                    <Image
                      src="/profile.png"
                      alt="Sarvesh Solanki"
                      fill
                      priority
                      className="object-contain object-bottom select-none pointer-events-none z-10"
                    />
                    {/* Bottom fade mask */}
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#090f1d] via-[#090f1d]/50 to-transparent pointer-events-none z-20" />
                  </div>
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 text-[10px] font-bold uppercase tracking-wider">
                      Tennis Athlete & AI Builder
                    </div>
                    <h1 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-none">
                      Sarvesh Solanki
                    </h1>
                    <p className="font-sans text-sm sm:text-base text-slate-400 font-medium leading-tight">
                      B.Tech in CSE (Data Science & AI) — Class of 2027
                    </p>
                    <p className="font-mono text-xs text-brand-teal font-semibold">
                      BML Munjal University // CGPA: 8.81
                    </p>
                  </div>
                </div>

                {/* Right Side: Quick Contact Details */}
                <div className="md:col-span-4 space-y-2 text-xs font-sans text-slate-400 md:border-l md:border-slate-800 md:pl-6">
                  <div className="flex items-center justify-center md:justify-start gap-2.5">
                    <Phone className="w-3.5 h-3.5 text-brand-emerald" />
                    <span className="font-mono font-medium text-slate-300">+91 99902 75559</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2.5">
                    <Mail className="w-3.5 h-3.5 text-brand-teal" />
                    <a href="mailto:solankisarvesh18@gmail.com" className="hover:text-brand-teal transition-colors font-mono">
                      solankisarvesh18@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-emerald" />
                    <span>Delhi / NCR, India</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2.5">
                    <Globe className="w-3.5 h-3.5 text-brand-teal" />
                    <a href="https://github.com/solankiSarvesh" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition-colors font-mono">
                      github.com/solankiSarvesh
                    </a>
                  </div>
                </div>

              </div>

              {/* Grid content: Main Columns */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Left Side Column: Experience & Projects */}
                <div className="md:col-span-8 space-y-8">
                  
                  {/* Experience Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                      <Briefcase className="w-4 h-4 text-brand-emerald" />
                      <h2 className="font-sans font-bold text-sm tracking-wider uppercase text-white">
                        Professional Work
                      </h2>
                    </div>

                    <div className="space-y-6">
                      
                      {/* BITS Pilani */}
                      <div className="relative pl-4 border-l border-slate-800 space-y-1.5">
                        <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-brand-emerald" />
                        <div className="flex flex-wrap justify-between items-start">
                          <h3 className="font-sans font-bold text-sm text-slate-100">
                            Research Intern (Semiconductor Fab & IoT)
                          </h3>
                          <span className="font-mono text-[10px] text-slate-500 font-medium">
                            June 2025 – July 2025
                          </span>
                        </div>
                        <p className="font-sans text-xs font-semibold text-slate-400">
                          BITS Pilani, Hyderabad Campus
                        </p>
                        <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 pl-1 font-sans leading-relaxed">
                          <li>Developed a potentiometric Android application measuring concentration levels of Potassium, Sodium, and pH, increasing biomedical diagnostics precision.</li>
                          <li>Gained cleanroom microchip fabrication expertise, working with thermal e-beam evaporators and sputter ion deposition systems to print micro/nanochip semiconductor models.</li>
                        </ul>
                      </div>

                      {/* DigiMind */}
                      <div className="relative pl-4 border-l border-slate-800 space-y-1.5">
                        <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-brand-teal" />
                        <div className="flex flex-wrap justify-between items-start">
                          <h3 className="font-sans font-bold text-sm text-slate-100">
                            Software Engineering Intern (Full Stack)
                          </h3>
                          <span className="font-mono text-[10px] text-slate-500 font-medium">
                            June 2024 – July 2024
                          </span>
                        </div>
                        <p className="font-sans text-xs font-semibold text-slate-400">
                          DigiMind Technologies
                        </p>
                        <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 pl-1 font-sans leading-relaxed">
                          <li>Collaborated to construct a responsive painting collection marketplace using Python, Django, HTML5, CSS3, and SQLite.</li>
                          <li>Designed painting listings displays, feedback commenting systems, and robust media upload trackers.</li>
                        </ul>
                      </div>

                    </div>
                  </div>

                  {/* Projects Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                      <Code className="w-4 h-4 text-brand-teal" />
                      <h2 className="font-sans font-bold text-sm tracking-wider uppercase text-white">
                        Core Projects
                      </h2>
                    </div>

                    <div className="space-y-5">
                      
                      {/* Project 1 */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <h3 className="font-sans font-bold text-sm text-slate-100">
                            AI-Enhanced Citation Prediction Model
                          </h3>
                          <span className="font-mono text-[10px] text-slate-500 font-medium">Python / XGBoost</span>
                        </div>
                        <p className="text-xs text-slate-400 font-sans leading-relaxed">
                          Developed an advanced ML system predicting research paper citation frequencies. Optimized features utilizing Scikit-Learn, NLP libraries, Pandas, and NumPy pipelines to ensure high predictor accuracies.
                        </p>
                      </div>

                      {/* Project 2 */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <h3 className="font-sans font-bold text-sm text-slate-100">
                            Potentiometric Renal Health IoT Telemetry App
                          </h3>
                          <span className="font-mono text-[10px] text-slate-500 font-medium">Java / Android Studio</span>
                        </div>
                        <p className="text-xs text-slate-400 font-sans leading-relaxed">
                          Created a mobile diagnostics app interfacing with renal potentiometric biosensors via Bluetooth sockets. Plots live telemetry concentrations of Potassium, Sodium, and pH levels.
                        </p>
                      </div>

                      {/* Project 3 */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <h3 className="font-sans font-bold text-sm text-slate-100">
                            Aethery Full-Stack E-Commerce Website
                          </h3>
                          <span className="font-mono text-[10px] text-slate-500 font-medium">React / Razorpay</span>
                        </div>
                        <p className="text-xs text-slate-400 font-sans leading-relaxed">
                          Built a premium React-based online herbal store named Aethery, incorporating product catalogs, interactive shopping carts, and secure Razorpay payment gateway integration.
                        </p>
                      </div>

                    </div>
                  </div>

                </div>

                {/* Right Side Column: Skills & Athletics/Trophies */}
                <div className="md:col-span-4 space-y-8">
                  
                  {/* Education & Academic honors */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                      <GraduationCap className="w-4 h-4 text-brand-teal" />
                      <h2 className="font-sans font-bold text-sm tracking-wider uppercase text-white">
                        Education
                      </h2>
                    </div>

                    <div className="space-y-4 text-xs font-sans">
                      <div className="space-y-1">
                        <h4 className="font-bold text-slate-200">B.Tech, CSE (Data Science & AI)</h4>
                        <p className="text-slate-400">BML Munjal University</p>
                        <p className="font-mono text-slate-500">2023 - 2027 | CGPA: 8.81</p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-slate-200">12th Standard (Science)</h4>
                        <p className="text-slate-400">The Vivekananda School</p>
                        <p className="font-mono text-slate-500">CBSE Delhi | 79.2%</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Tag Dashboard */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                      <Code className="w-4 h-4 text-brand-emerald" />
                      <h2 className="font-sans font-bold text-sm tracking-wider uppercase text-white">
                        Skills
                      </h2>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {["Python", "Java", "C Language", "JavaScript", "SQL", "Django", "React", "Next.js", "Pandas", "NumPy", "Android Studio", "Git/GitHub", "Data Science", "Machine Learning", "NLP", "Agile", "OOP"].map((sk) => (
                        <span
                          key={sk}
                          className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300 font-semibold"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Leadership & Athletics: Resonates with character */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                      <Award className="w-4 h-4 text-brand-emerald" />
                      <h2 className="font-sans font-bold text-sm tracking-wider uppercase text-white">
                        Achievements
                      </h2>
                    </div>

                    <div className="space-y-4 text-xs font-sans">
                      
                      {/* Trophy 1 */}
                      <div className="flex gap-2.5 items-start">
                        <span className="w-6 h-6 rounded bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          🏆
                        </span>
                        <div className="space-y-0.5">
                          <h4 className="font-bold text-slate-200">Lawn Tennis Singles Champion</h4>
                          <p className="text-slate-400 text-[11px] leading-tight">
                            Won 1st place in Singles Category representing BMU at GD Goenka University Tournament.
                          </p>
                        </div>
                      </div>

                      {/* Trophy 2 */}
                      <div className="flex gap-2.5 items-start">
                        <span className="w-6 h-6 rounded bg-brand-teal/10 text-brand-teal border border-brand-teal/20 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          🚀
                        </span>
                        <div className="space-y-0.5">
                          <h4 className="font-bold text-slate-200">Lead Event Organizer (E-Cell)</h4>
                          <p className="text-slate-400 text-[11px] leading-tight">
                            Coordinated PitchQuest Event managing startup pitches for 100+ students.
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* Footer indicator */}
            <div className="px-6 py-3 bg-slate-950/65 border-t border-slate-800 text-center font-mono text-[9px] text-slate-500 uppercase tracking-widest">
              Verified Developer Transcript // Precision Athlete-Engineer Code base
            </div>

          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
