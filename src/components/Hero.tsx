import React from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { Hero3DCanvas } from './Hero3DCanvas';
import { ArrowDown, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#080B0D] bg-grid-pattern">
      {/* 3D WebGL Background Canvas */}
      <Hero3DCanvas />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* TOP: Dual Official Brand Composition [RRGI LOGO] + [SIH LOGO] */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-3xl bg-[#101820]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-white/5 border border-white/10">
            <img
              src={EVENT_CONFIG.logos.college}
              alt="R.R. Group of Institutions Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <div className="text-left hidden sm:block">
              <span className="text-xs font-display font-extrabold text-white block tracking-wide">
                {EVENT_CONFIG.collegeName}
              </span>
              <span className="text-[10px] font-mono text-zinc-400">
                R.R. Group of Institutions
              </span>
            </div>
          </div>

          <span className="text-zinc-600 font-mono text-sm hidden sm:inline">•</span>

          <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10">
            <img
              src={EVENT_CONFIG.logos.sih}
              alt="Smart India Hackathon Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <div className="text-left hidden sm:block">
              <span className="text-xs font-display font-extrabold text-white block tracking-wide">
                SMART INDIA HACKATHON
              </span>
              <span className="text-[10px] font-mono text-[#F58220] font-bold">
                INTERNAL EDITION 2026
              </span>
            </div>
          </div>
        </div>

        {/* Status Badge: Event Completed */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E9E45]/15 border border-[#2E9E45]/40 mb-6 backdrop-blur-md">
          <CheckCircle2 className="w-4 h-4 text-[#2E9E45]" />
          <span className="text-xs font-mono font-bold text-[#2E9E45] uppercase tracking-wider">
            EVENT COMPLETED • DIGITAL ARCHIVE
          </span>
        </div>

        {/* Main Editorial Headline */}
        <div className="mb-6 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.06]">
            INTERNAL SMART INDIA HACKATHON <span className="text-[#F58220]">2026</span>
          </h1>
          <p className="mt-3 text-lg sm:text-xl font-mono text-[#2E9E45] font-semibold tracking-wider">
            R.R. GROUP OF INSTITUTIONS
          </p>
        </div>

        {/* Concise Supporting Sentence */}
        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-sans font-normal leading-relaxed mb-10">
          A comprehensive look back at student innovation, technical problem-solving, and continuous prototyping during Internal SIH 2026 at RRGI.
        </p>

        {/* Navigation Action Buttons (NO REGISTRATION BUTTON) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <a
            href="#glance"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-display font-bold text-white bg-gradient-to-r from-[#F58220] to-[#E57210] hover:from-[#E57210] hover:to-[#2E9E45] shadow-xl hover:shadow-[#F58220]/25 transition-all duration-300 group"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>EXPLORE HIGHLIGHTS</span>
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-display font-semibold text-zinc-300 glass-panel hover:bg-white/10 hover:text-white border border-white/15 transition-all duration-300 group"
          >
            <span>VIEW PROJECTS</span>
            <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#journey"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-display font-semibold text-zinc-300 glass-panel hover:bg-white/10 hover:text-white border border-white/15 transition-all duration-300 group"
          >
            <span>SEE THE JOURNEY</span>
          </a>
        </div>

        {/* Hero Quick Statistics Strip */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-3xl bg-[#101820]/80 border border-white/10 backdrop-blur-xl shadow-2xl mb-12">
          {EVENT_CONFIG.stats.map(s => (
            <div key={s.id} className="p-3 text-center border-r last:border-r-0 border-white/5">
              <span className="text-2xl sm:text-3xl font-display font-extrabold text-white block">
                {s.value}
              </span>
              <span className="text-[11px] font-mono text-[#F58220] font-bold uppercase block mt-0.5">
                {s.label}
              </span>
            </div>
          ))}
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
