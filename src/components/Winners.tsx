import React from 'react';
import { EVENT_CONFIG, type WinnerItem } from '../config/eventConfig';
import confetti from 'canvas-confetti';
import { Trophy, Award, Medal, Sparkles } from 'lucide-react';

export const Winners: React.FC = () => {
  const winners: WinnerItem[] = EVENT_CONFIG.winners;

  const firstPlace = winners.find(w => w.position === '1st');
  const secondPlace = winners.find(w => w.position === '2nd');
  const thirdPlace = winners.find(w => w.position === '3rd');
  const specialAwards = winners.filter(w => w.position === 'Special');

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F58220', '#2E9E45', '#FFFFFF', '#FBBF24'],
    });
  };

  return (
    <section id="winners" className="py-24 relative bg-[#080B0D] border-t border-white/5 overflow-hidden">
      {/* Glow ambient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#F58220]/15 via-amber-500/10 to-[#2E9E45]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101820] border border-white/10 text-xs font-mono text-[#F58220] uppercase tracking-wider mb-4">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>INSTITUTIONAL HONORS & NOMINATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            WINNERS & RECOGNITION
          </h2>
          <p className="mt-3 text-xs font-mono text-zinc-400">
            Top selected teams nominated to represent RRGI at the National SIH 2026 Grand Finale
          </p>
        </div>

        {/* 1. ELEGANT PODIUM LAYOUT FOR 1ST, 2ND, 3RD PLACE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end mb-16">
          
          {/* 🥈 SECOND PLACE (Left) */}
          {secondPlace && (
            <div className="order-2 lg:order-1 rounded-3xl bg-[#0E1318] border border-white/15 p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-[#2E9E45]/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-display font-extrabold text-zinc-400">
                  02
                </span>
                <span className="px-3 py-1 rounded-full bg-[#2E9E45]/20 border border-[#2E9E45]/40 text-xs font-mono font-bold text-[#2E9E45]">
                  🥈 SECOND PLACE
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-[#2E9E45] transition-colors">
                {secondPlace.teamName}
              </h3>
              <p className="text-xs font-mono text-zinc-300 mb-3 font-semibold">
                {secondPlace.projectTitle}
              </p>

              <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-4">
                {secondPlace.description}
              </p>

              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] font-mono text-[#2E9E45] font-bold block mb-1">
                  RECOGNITION: {secondPlace.prize}
                </span>
                <p className="text-[11px] text-zinc-400 font-sans">
                  {secondPlace.members.join(' • ')}
                </p>
              </div>
            </div>
          )}

          {/* 🥇 FIRST PLACE (Center Featured Champion Podium) */}
          {firstPlace && (
            <div 
              onClick={triggerConfetti}
              className="order-1 lg:order-2 rounded-3xl bg-gradient-to-b from-[#18222C] to-[#0E141B] border-2 border-[#F58220] p-8 sm:p-10 shadow-2xl relative overflow-hidden group hover:scale-102 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F58220]/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-6xl font-display font-extrabold text-[#F58220]">
                  01
                </span>
                <span className="px-4 py-1.5 rounded-full bg-[#F58220] text-white text-xs font-mono font-extrabold shadow-lg tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> 🥇 1ST PLACE WINNER
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {firstPlace.teamName}
              </h3>
              <p className="text-sm font-mono text-[#F58220] mb-4 font-bold">
                {firstPlace.projectTitle}
              </p>

              <p className="text-xs text-zinc-200 font-sans leading-relaxed mb-6">
                {firstPlace.description}
              </p>

              <div className="pt-4 border-t border-white/15">
                <span className="text-xs font-mono text-amber-300 font-bold block mb-2">
                  🏆 {firstPlace.prize}
                </span>
                <p className="text-xs text-zinc-300 font-sans leading-normal">
                  {firstPlace.members.join(' • ')}
                </p>
              </div>

              <div className="mt-6 text-center">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                  Click to celebrate 🎊
                </span>
              </div>
            </div>
          )}

          {/* 🥉 THIRD PLACE (Right) */}
          {thirdPlace && (
            <div className="order-3 rounded-3xl bg-[#0E1318] border border-white/15 p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-display font-extrabold text-zinc-400">
                  03
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-xs font-mono font-bold text-amber-400">
                  🥉 THIRD PLACE
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                {thirdPlace.teamName}
              </h3>
              <p className="text-xs font-mono text-zinc-300 mb-3 font-semibold">
                {thirdPlace.projectTitle}
              </p>

              <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-4">
                {thirdPlace.description}
              </p>

              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] font-mono text-amber-400 font-bold block mb-1">
                  RECOGNITION: {thirdPlace.prize}
                </span>
                <p className="text-[11px] text-zinc-400 font-sans">
                  {thirdPlace.members.join(' • ')}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* 2. SPECIAL RECOGNITION AWARDS */}
        {specialAwards.length > 0 && (
          <div className="p-6 sm:p-8 rounded-3xl bg-[#101820] border border-white/10 shadow-xl">
            <div className="flex items-center gap-2 mb-6 text-xs font-mono text-[#F58220] font-bold uppercase tracking-widest">
              <Award className="w-4 h-4 text-amber-400" />
              <span>SPECIAL JURY RECOGNITION & CATEGORY HONORS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialAwards.map((award, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#F58220]/20 text-[#F58220] border border-[#F58220]/40 shrink-0">
                    <Medal className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-amber-300 font-bold block mb-0.5">
                      {award.title}
                    </span>
                    <h4 className="text-base font-display font-bold text-white">
                      {award.teamName}
                    </h4>
                    <p className="text-xs font-mono text-zinc-400">
                      {award.projectTitle}
                    </p>
                    <p className="text-xs text-zinc-400 font-sans mt-1">
                      {award.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
