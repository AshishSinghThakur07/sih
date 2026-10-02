import React from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { ShieldCheck, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#080B0D] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest font-semibold block mb-2">
            ABOUT THE PLATFORM
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            INTERNAL SIH AT {EVENT_CONFIG.collegeName}
          </h2>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Narrative Block */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl sm:text-2xl text-zinc-100 font-display font-semibold leading-relaxed">
              {EVENT_CONFIG.collegeName}'s Internal Smart India Hackathon is the platform where students identify real-world challenges, develop innovative ideas, build working solutions, and present their work before evaluators.
            </p>

            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              Organized in alignment with official Smart India Hackathon (SIH) guidelines by the Ministry of Education’s Innovation Cell and AICTE, this internal selection sprint identifies and nominates {EVENT_CONFIG.collegeName}'s top student teams for the National Grand Finale.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#101820] border border-white/10 text-[#2E9E45]">
                <ShieldCheck className="w-4 h-4" /> Official SIH Guidelines
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#101820] border border-white/10 text-[#F58220]">
                <Cpu className="w-4 h-4" /> Hardware & Software Tracks
              </span>
            </div>
          </div>

          {/* Visual Focus Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#101820] p-2 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                alt="RRGI Internal Hackathon Sprint"
                className="w-full h-72 object-cover rounded-2xl group-hover:scale-103 transition-transform duration-500"
              />
              <div className="p-4 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>{EVENT_CONFIG.collegeName} Innovation Block</span>
                <span className="text-[#2E9E45] font-bold">SIH 2026</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
