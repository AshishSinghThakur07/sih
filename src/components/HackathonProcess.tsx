import React from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { UserPlus, Users, FileSearch, Code, Presentation, CheckCircle, Trophy } from 'lucide-react';

const STEP_ICONS = [UserPlus, Users, FileSearch, Code, Presentation, CheckCircle, Trophy];

export const HackathonProcess: React.FC = () => {
  return (
    <section id="process" className="py-24 relative bg-[#080B0D] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#2E9E45] uppercase tracking-widest font-semibold block mb-2">
            HACKATHON STEPS
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            THE PROCESS
          </h2>
        </div>

        {/* Horizontal / Vertical Connected Process */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative">
          {EVENT_CONFIG.process.map((p, idx) => {
            const IconComponent = STEP_ICONS[idx % STEP_ICONS.length];

            return (
              <div
                key={p.step}
                className="group p-5 rounded-2xl bg-[#0E1318] border border-white/10 hover:border-[#F58220]/40 transition-all flex flex-col items-center text-center justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-[#101820] border border-[#F58220] flex items-center justify-center text-[#F58220] mb-4 group-hover:bg-[#F58220] group-hover:text-white transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>

                <span className="text-[10px] font-mono text-zinc-500 font-bold mb-1">
                  STEP {p.step}
                </span>

                <h3 className="text-sm font-display font-bold text-white mb-2 leading-snug">
                  {p.name}
                </h3>

                <p className="text-[11px] text-zinc-400 font-sans leading-tight">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
