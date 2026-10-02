import React from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import confetti from 'canvas-confetti';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#F58220', '#2E9E45', '#FFFFFF'],
    });
  };

  return (
    <section id="register" className="py-24 relative bg-[#080B0D] overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#F58220]/15 to-[#2E9E45]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#101820] to-[#0A0E12] border border-white/15 shadow-2xl">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#F58220] uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#2E9E45]" />
            <span>{EVENT_CONFIG.collegeName} • {EVENT_CONFIG.eventEdition}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
            READY TO BUILD SOMETHING THAT MATTERS?
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto mb-8 font-sans">
            Form your team of 6 RRGI students, pick your problem statement, and register to represent our institution at Smart India Hackathon 2026.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                triggerConfetti();
                window.open('https://forms.gle/rrgi-sih-2026', '_blank');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-display font-bold text-white bg-gradient-to-r from-[#F58220] to-[#2E9E45] hover:opacity-95 shadow-xl transition-all transform hover:scale-105"
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-8 text-xs font-mono text-zinc-500 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#2E9E45]" />
            <span>Official Institutional Gateway • Free Registration for All Students</span>
          </div>

        </div>

      </div>
    </section>
  );
};
