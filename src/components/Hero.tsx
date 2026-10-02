import React from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { Hero3DCanvas } from './Hero3DCanvas';
import { ArrowDown, Sparkles, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#080B0D] bg-grid-pattern">
      {/* 3D WebGL Background Canvas */}
      <Hero3DCanvas />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Institutional Header Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101820] border border-white/10 mb-8 backdrop-blur-md">
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            {EVENT_CONFIG.collegeName}
          </span>
          <span className="text-zinc-500 font-mono text-xs">•</span>
          <span className="text-xs font-mono text-[#F58220] font-semibold uppercase tracking-wider">
            PRESENTS
          </span>
        </div>

        {/* Uploaded SIH Logo (Source of Truth with spacious breathing room) */}
        <div className="mb-8 p-4 sm:p-6 rounded-3xl bg-[#101820]/90 border border-white/10 shadow-2xl backdrop-blur-xl relative group max-w-lg w-full flex justify-center">
          <img
            src={EVENT_CONFIG.logos.sih}
            alt="Smart India Hackathon 2026 Logo"
            className="h-20 sm:h-24 lg:h-28 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-102"
          />
        </div>

        {/* Event Edition Headline */}
        <div className="mb-4">
          <span className="text-xs font-mono text-[#2E9E45] font-extrabold uppercase tracking-widest block mb-2">
            INSTITUTIONAL SELECTION EDITION • 2026
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
            INTERNAL SMART INDIA HACKATHON
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-2xl sm:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] via-white to-[#2E9E45] mb-6">
          {EVENT_CONFIG.tagline}
        </p>

        {/* Concise Description */}
        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-sans font-normal leading-relaxed mb-10">
          Identify real-world challenges, build working software & hardware prototypes, and represent <strong className="text-white">{EVENT_CONFIG.collegeName}</strong> at the national Smart India Hackathon 2026.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <a
            href="#register"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-display font-bold text-white bg-gradient-to-r from-[#F58220] to-[#E57210] hover:from-[#E57210] hover:to-[#2E9E45] shadow-xl hover:shadow-[#F58220]/25 transition-all duration-300 group"
          >
            <span>REGISTER NOW</span>
            <Sparkles className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-display font-semibold text-zinc-300 glass-panel hover:bg-white/10 hover:text-white border border-white/15 transition-all duration-300 group"
          >
            <span>EXPLORE</span>
            <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="inline-flex flex-col items-center text-xs font-mono text-zinc-500 hover:text-[#F58220] transition-colors group"
        >
          <span className="tracking-widest uppercase mb-2">SCROLL TO DISCOVER</span>
          <ArrowDown className="w-4 h-4 text-[#F58220] animate-bounce" />
        </a>

      </div>
    </section>
  );
};
