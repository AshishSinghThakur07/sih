import React from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';

export const Partners: React.FC = () => {
  return (
    <section className="py-16 relative bg-[#080B0D] border-t border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[11px] font-mono text-zinc-400 font-bold uppercase tracking-wider block mb-6">
          OFFICIAL SANCTIONING BODIES & INSTITUTIONAL ECOSYSTEM
        </span>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-85">
          <img src={EVENT_CONFIG.logos.college} alt="RRGI Logo" className="h-8 w-auto object-contain" />
          <img src={EVENT_CONFIG.logos.sih} alt="SIH Logo" className="h-8 w-auto object-contain" />
          <img src={EVENT_CONFIG.logos.moe} alt="MoE Logo" className="h-8 w-auto object-contain" />
          <img src={EVENT_CONFIG.logos.aicte} alt="AICTE Logo" className="h-8 w-auto object-contain" />
          <img src={EVENT_CONFIG.logos.iic} alt="IIC Logo" className="h-8 w-auto object-contain" />
        </div>
      </div>
    </section>
  );
};
