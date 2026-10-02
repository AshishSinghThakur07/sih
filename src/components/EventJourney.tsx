import React from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { Lightbulb, Users, FileSearch, Presentation, Code, CheckCircle2, Trophy } from 'lucide-react';

const STAGE_ICONS = [Lightbulb, Users, FileSearch, Presentation, Code, CheckCircle2, Trophy];

export const EventJourney: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative bg-[#080B0D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest font-semibold block mb-2">
            EVENT CHRONICLE
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            THE COMPLETED JOURNEY
          </h2>
          <p className="mt-3 text-xs font-mono text-zinc-400">
            How Internal SIH 2026 was executed at RRGI from ideation to national nomination
          </p>
        </div>

        {/* Connected Journey Stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative">
          {EVENT_CONFIG.journey.map((stage, idx) => {
            const IconComponent = STAGE_ICONS[idx % STAGE_ICONS.length];

            return (
              <div
                key={stage.step}
                className="group p-5 rounded-3xl bg-[#0E1318] border border-white/10 hover:border-[#F58220]/50 transition-all duration-300 flex flex-col justify-between text-center relative overflow-hidden"
              >
                {/* Completed Check Badge */}
                <div className="absolute top-3 right-3">
                  <span className="w-2 h-2 rounded-full bg-[#2E9E45] inline-block" />
                </div>

                <div>
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-[#101820] border border-[#F58220]/40 flex items-center justify-center text-[#F58220] mb-4 group-hover:bg-[#F58220] group-hover:text-white transition-colors duration-300 shadow-lg">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono text-zinc-500 font-bold block mb-1">
                    STAGE {stage.step}
                  </span>

                  <h3 className="text-xs font-display font-bold text-white mb-1 leading-snug">
                    {stage.title}
                  </h3>

                  <span className="text-[10px] font-mono text-[#2E9E45] font-semibold block mb-3">
                    {stage.subtitle}
                  </span>
                </div>

                <p className="text-[11px] text-zinc-400 font-sans leading-tight mt-2">
                  {stage.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Journey Bottom Confirmation */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101820] border border-white/10 text-xs font-mono text-zinc-400">
            <CheckCircle2 className="w-4 h-4 text-[#2E9E45]" />
            <span>All 7 phases successfully executed at RRGI campus</span>
          </div>
        </div>

      </div>
    </section>
  );
};
