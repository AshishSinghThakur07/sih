import React from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { ShieldCheck, Cpu, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-[#080B0D] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest font-semibold block mb-2">
            EVENT OVERVIEW
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            ABOUT INTERNAL SIH 2026 AT {EVENT_CONFIG.collegeName}
          </h2>
        </div>

        {/* Short & Concise Narrative (Max 2-3 sentences) */}
        <div className="rounded-3xl bg-[#101820] border border-white/10 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F58220]/5 rounded-full blur-3xl pointer-events-none" />
          
          <p className="text-lg sm:text-xl text-zinc-100 font-sans leading-relaxed text-center max-w-3xl mx-auto font-normal">
            The Internal Smart India Hackathon 2026 at <strong className="text-white font-semibold">{EVENT_CONFIG.collegeFullName}</strong> brought together student engineering teams for an intensive problem-solving sprint. Conducted in accordance with official Ministry of Education and AICTE guidelines, the event served as RRGI's internal benchmark to evaluate functional prototypes and select top student innovations for national nomination.
          </p>

          {/* Key Event Pillar Tags */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-300">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#2E9E45]">
              <ShieldCheck className="w-4 h-4" /> Official SIH Guidelines
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F58220]">
              <Cpu className="w-4 h-4" /> Software & Hardware Prototypes
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-300">
              <Award className="w-4 h-4" /> National Portal Nominations
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
