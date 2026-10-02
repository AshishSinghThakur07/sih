import React from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { Calendar } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 relative bg-[#080B0D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest font-semibold block mb-2">
            SCHEDULE & MILESTONES
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            TIMELINE
          </h2>
        </div>

        {/* Clean Timeline Stream */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 pl-6 md:pl-10 space-y-8">
          {EVENT_CONFIG.timeline.map((item) => {
            const isCompleted = item.status === 'completed';
            const isActive = item.status === 'active';

            return (
              <div key={item.id} className="relative group">
                {/* Node Marker */}
                <div
                  className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full border-4 ${
                    isCompleted
                      ? 'bg-[#2E9E45] border-[#080B0D]'
                      : isActive
                      ? 'bg-[#F58220] border-[#080B0D]'
                      : 'bg-[#101820] border-white/20'
                  }`}
                />

                {/* Timeline Card */}
                <div className="p-6 rounded-2xl bg-[#0E1318] border border-white/10 hover:border-white/20 transition-all shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-[#F58220] font-bold uppercase">
                      {item.phase}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#2E9E45]" />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
