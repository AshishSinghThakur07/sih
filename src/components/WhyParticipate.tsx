import React from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { ShieldAlert, Cpu, Users, Presentation, Trophy } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  ShieldAlert,
  Cpu,
  Users,
  Presentation,
  Trophy
};

export const WhyParticipate: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#080B0D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest font-semibold block mb-2">
            WHY PARTICIPATE
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            WHY JOIN INTERNAL SIH AT {EVENT_CONFIG.collegeName}?
          </h2>
        </div>

        {/* 5 Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENT_CONFIG.whyParticipate.map((item, idx) => {
            const IconComponent = ICON_MAP[item.icon] || ShieldAlert;
            const isOrangeAccent = idx % 2 === 0;

            return (
              <div
                key={item.step}
                className="group relative p-7 rounded-3xl bg-[#0E1318] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-zinc-500 group-hover:text-white transition-colors">
                      {item.step}
                    </span>
                    <div
                      className={`p-2.5 rounded-xl ${
                        isOrangeAccent ? 'bg-[#F58220]/15 text-[#F58220]' : 'bg-[#2E9E45]/15 text-[#2E9E45]'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-[#F58220] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                  {EVENT_CONFIG.collegeName} SIH 2026
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
