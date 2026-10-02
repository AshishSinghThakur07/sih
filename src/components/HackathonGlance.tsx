import React from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { CountUp } from './CountUp';
import { Users, ShieldCheck, Cpu, Clock, Award, Building2 } from 'lucide-react';

export const HackathonGlance: React.FC = () => {
  return (
    <section id="glance" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono text-[#2E9E45] uppercase tracking-widest font-semibold block mb-2">
            EXECUTIVE EVENT SUMMARY
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            HACKATHON AT A GLANCE
          </h2>
          <p className="mt-2 text-xs font-mono text-zinc-400">
            Internal SIH 2026 Participation & Evaluation Metrics
          </p>
        </div>

        {/* Executive Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="group p-6 rounded-3xl bg-[#0E1318]/80 border border-white/10 hover:border-[#F58220]/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                METRIC 01
              </span>
              <div className="p-2.5 rounded-2xl bg-[#101820] text-[#F58220] border border-white/10">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div>
              <span className="text-4xl sm:text-5xl font-display font-extrabold text-white block">
                <CountUp value={EVENT_CONFIG.stats[0]?.value ?? ''} />
              </span>
              <h3 className="text-sm font-display font-bold text-zinc-200 mt-1">
                {EVENT_CONFIG.stats[0]?.label}
              </h3>
              <p className="text-xs text-zinc-400 mt-1 font-sans">
                {EVENT_CONFIG.stats[0]?.subtext}
              </p>
            </div>
          </div>

          <div className="group p-6 rounded-3xl bg-[#0E1318]/80 border border-white/10 hover:border-[#2E9E45]/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                METRIC 02
              </span>
              <div className="p-2.5 rounded-2xl bg-[#101820] text-[#2E9E45] border border-white/10">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
            <div>
              <span className="text-4xl sm:text-5xl font-display font-extrabold text-white block">
                <CountUp value={EVENT_CONFIG.stats[1]?.value ?? ''} />
              </span>
              <h3 className="text-sm font-display font-bold text-zinc-200 mt-1">
                {EVENT_CONFIG.stats[1]?.label}
              </h3>
              <p className="text-xs text-zinc-400 mt-1 font-sans">
                {EVENT_CONFIG.stats[1]?.subtext}
              </p>
            </div>
          </div>

          <div className="group p-6 rounded-3xl bg-[#0E1318]/80 border border-white/10 hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                METRIC 03
              </span>
              <div className="p-2.5 rounded-2xl bg-[#101820] text-amber-400 border border-white/10">
                <Cpu className="w-5 h-5" />
              </div>
            </div>
            <div>
              <span className="text-4xl sm:text-5xl font-display font-extrabold text-white block">
                <CountUp value={EVENT_CONFIG.stats[2]?.value ?? ''} />
              </span>
              <h3 className="text-sm font-display font-bold text-zinc-200 mt-1">
                {EVENT_CONFIG.stats[2]?.label}
              </h3>
              <p className="text-xs text-zinc-400 mt-1 font-sans">
                {EVENT_CONFIG.stats[2]?.subtext}
              </p>
            </div>
          </div>

        </div>

        {/* Secondary Snapshot Bar */}
        <div className="mt-8 p-6 rounded-3xl bg-[#101820]/90 border border-white/10 flex flex-wrap items-center justify-around gap-6 text-center">
          <div className="flex items-center gap-3 text-left">
            <Clock className="w-5 h-5 text-[#F58220]" />
            <div>
              <span className="text-xs font-mono font-bold text-white block">3-DAY SPRINT (36 HRS)</span>
              <span className="text-[11px] text-zinc-400 font-sans">Continuous Prototyping</span>
            </div>
          </div>

          <div className="h-8 w-[1px] bg-white/10 hidden md:block" />

          <div className="flex items-center gap-3 text-left">
            <Building2 className="w-5 h-5 text-[#2E9E45]" />
            <div>
              <span className="text-xs font-mono font-bold text-white block">{EVENT_CONFIG.venue}</span>
              <span className="text-[11px] text-zinc-400 font-sans">RRGI Campus Venue</span>
            </div>
          </div>

          <div className="h-8 w-[1px] bg-white/10 hidden md:block" />

          <div className="flex items-center gap-3 text-left">
            <Award className="w-5 h-5 text-amber-400" />
            <div>
              <span className="text-xs font-mono font-bold text-white block">EXPERT JURY</span>
              <span className="text-[11px] text-zinc-400 font-sans">Faculty & Industry Panel</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
