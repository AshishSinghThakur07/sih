import React from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { Users, FileCode, MapPin, Calendar } from 'lucide-react';

const ICONS = [Users, FileCode, MapPin, Calendar];

export const EventInfoStrip: React.FC = () => {
  return (
    <section className="py-12 relative bg-[#080B0D] border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EVENT_CONFIG.quickInfo.map((info, idx) => {
            const IconComponent = ICONS[idx % ICONS.length];
            const isOrange = idx % 2 === 0;

            return (
              <div
                key={info.label}
                className="p-6 rounded-2xl bg-[#0E1318] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                    {info.label}
                  </span>
                  <IconComponent className={`w-4 h-4 ${isOrange ? 'text-[#F58220]' : 'text-[#2E9E45]'}`} />
                </div>

                <div>
                  <div className="text-2xl font-display font-bold text-white mb-1">
                    {info.value}
                  </div>
                  <p className="text-[11px] font-sans text-zinc-400 leading-tight">
                    {info.note}
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
