import React from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { Award, ShieldCheck, ChevronRight } from 'lucide-react';

export const ClosingStatement: React.FC = () => {
  return (
    <section className="py-20 relative bg-[#080B0D] overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[280px] bg-gradient-to-r from-[#F58220]/12 to-[#2E9E45]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#101820] to-[#0A0E12] border border-white/15 shadow-2xl">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#F58220] uppercase tracking-wider mb-6">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>{EVENT_CONFIG.collegeName} • INSTITUTIONAL STATEMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight mb-4">
            CELEBRATING INNOVATION & EXCELLENCE AT RRGI
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto font-sans leading-relaxed mb-8">
            Internal Smart India Hackathon 2026 demonstrated the problem-solving spirit, teamwork, and technical ingenuity of student teams at <strong className="text-white font-semibold">{EVENT_CONFIG.collegeFullName}</strong>. We congratulate all participants, finalist teams, and national portal nominees representing our institution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-400">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#101820] hover:bg-white/10 border border-white/15 text-white font-display font-bold transition-all"
            >
              <span>EXPLORE ALL SHOWCASE PROJECTS</span>
              <ChevronRight className="w-4 h-4 text-[#F58220]" />
            </a>
          </div>

          <div className="mt-8 text-[11px] font-mono text-zinc-500 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#2E9E45]" />
            <span>Official Event Archive • RajaRajeswari Group of Institutions</span>
          </div>

        </div>

      </div>
    </section>
  );
};
