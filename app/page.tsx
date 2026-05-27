"use client";

import React, { useState } from "react";
import CyberNavbar from "../components/CyberNavbar";
import ParticleCanvas from "../components/ParticleCanvas";
import ResumeModal from "../components/ResumeModal";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Credentials from "../sections/Credentials";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-brand-dark text-slate-100 selection:bg-brand-emerald/20 selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. Custom Starfield Background Canvas */}
      <ParticleCanvas />

      {/* 2. Global Sticky Navigation Bar */}
      <CyberNavbar onOpenResume={() => setResumeOpen(true)} />

      {/* 3. Main Page Layout Container */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sections Grid */}
        <Hero onOpenResume={() => setResumeOpen(true)} />
        
        <div className="relative z-20 space-y-8">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Credentials />
          <Contact />
        </div>

      </main>

      {/* 4. Minimal Footer */}
      <Footer />

      {/* 5. State-controlled Visual Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

    </div>
  );
}
