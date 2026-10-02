import React, { useRef, useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { Trophy, Medal, ChevronDown } from 'lucide-react';
import { EVENT_CONFIG, type WinnerItem } from '../config/eventConfig';

const EASE = [0.16, 1, 0.3, 1] as const;

type Position = WinnerItem['position'];

const ACCENTS: Record<Position, string> = {
  '1st': '#F58220',
  '2nd': '#2E9E45',
  '3rd': '#D08A26',
};

const RANK: Record<Position, string> = { '1st': '1', '2nd': '2', '3rd': '3' };

const rowVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
};

export const Winners: React.FC = () => {
  const winners: WinnerItem[] = EVENT_CONFIG.winners;

  // 1st place is open by default.
  const [open, setOpen] = useState<Position | null>('1st');

  // Rows open by themselves on mouse hover (after a short pause so passing over a row doesn't flicker).
  const hoverTimer = useRef<number | undefined>(undefined);

  const hoverOpen = (position: Position) => {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setOpen(position), 120);
  };
  const cancelHover = () => window.clearTimeout(hoverTimer.current);

  // Click / tap / keyboard always opens the row.
  const choose = (position: Position) => {
    cancelHover();
    setOpen(position);
  };

  return (
    <MotionConfig reducedMotion="user">
      <section id="winners" className="py-24 relative border-t border-white/5 overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#F58220]/15 via-amber-500/10 to-[#2E9E45]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-14"
          >
            <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest font-semibold block mb-2">
              TOP 3 TEAMS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              WINNERS & RECOGNITION
            </h2>
          </motion.div>

          {/* Leaderboard */}
          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.15 }}
            className="space-y-4"
          >
            {winners.map((winner) => {
              const accent = ACCENTS[winner.position];
              const isOpen = open === winner.position;
              const isFirst = winner.position === '1st';
              const Icon = isFirst ? Trophy : Medal;
              const panelId = `winner-${winner.position}`;

              const details = (
                <>
                  <div>
                    <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Team ID</span>
                    <span className="block text-sm font-mono font-bold text-white">{winner.teamId}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Year</span>
                    <span className="block text-sm font-mono font-bold text-white">{winner.year}</span>
                  </div>
                </>
              );

              return (
                <motion.li
                  key={winner.position}
                  variants={rowVariants}
                  onPointerEnter={(e) => {
                    if (e.pointerType === 'mouse') hoverOpen(winner.position);
                  }}
                  onPointerLeave={cancelHover}
                  style={{ ['--accent' as string]: accent }}
                  className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border transition-colors duration-500 ${
                    isOpen
                      ? 'border-[var(--accent)] bg-gradient-to-r from-[var(--accent)]/20 via-[#0E1318] to-[#0A0E12]'
                      : 'border-white/10 bg-gradient-to-r from-[#121A22] to-[#0A0E12] hover:border-white/30'
                  }`}
                >
                  {/* Accent bar */}
                  <span className="absolute inset-y-0 left-0 w-1.5 bg-[var(--accent)]" />

                  {/* Champion glow */}
                  {isFirst && isOpen && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 animate-pulse-subtle shadow-[inset_0_0_70px_-14px_var(--accent)] pointer-events-none"
                    />
                  )}

                  <button
                    type="button"
                    onClick={() => choose(winner.position)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="group relative w-full flex items-center gap-3 sm:gap-6 p-4 sm:p-6 pl-5 sm:pl-8 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                  >
                    {/* Rank */}
                    <span className="w-9 sm:w-16 shrink-0 text-5xl sm:text-7xl font-display font-extrabold leading-none text-[var(--accent)]">
                      {RANK[winner.position]}
                    </span>

                    {/* Medal */}
                    <motion.div
                      className="shrink-0"
                      animate={isFirst ? { y: [0, -5, 0] } : undefined}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <div
                        className={`flex items-center justify-center rounded-xl sm:rounded-2xl border transition-colors duration-300 w-10 h-10 sm:w-14 sm:h-14 ${
                          isOpen
                            ? 'bg-white text-[var(--accent)] border-white'
                            : 'bg-[#101820] text-[var(--accent)] border-[var(--accent)]/50'
                        }`}
                      >
                        <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                      </div>
                    </motion.div>

                    {/* Team name (+ details on small screens) */}
                    <div className="flex-1 min-w-0">
                      <span className="block text-[10px] sm:text-[11px] font-mono font-bold text-[var(--accent)] tracking-[0.25em] uppercase">
                        {winner.title}
                      </span>
                      <h3 className="text-xl sm:text-4xl font-display font-extrabold text-white uppercase leading-tight tracking-tight truncate">
                        {winner.teamName}
                      </h3>
                      <div className="sm:hidden mt-1.5 flex gap-5">{details}</div>
                    </div>

                    {/* Details on larger screens */}
                    <div className="hidden sm:flex gap-10 shrink-0 pr-2">{details}</div>

                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-zinc-400 group-hover:text-white transition-transform duration-500 ${
                        isOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>

                  {/* Members */}
                  <div
                    id={panelId}
                    role="region"
                    className={`relative grid transition-[grid-template-rows] duration-500 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-8 pb-5 sm:pb-6 pt-1">
                        <span className="block mb-3 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                          Team Members
                        </span>
                        <motion.ul
                          key={isOpen ? 'open' : 'closed'}
                          initial="hidden"
                          animate={isOpen ? 'show' : 'hidden'}
                          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }}
                          className="flex flex-wrap lg:flex-nowrap gap-2"
                        >
                          {winner.members.map((name) => (
                            <motion.li
                              key={name}
                              variants={{
                                hidden: { opacity: 0, x: -10 },
                                show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
                              }}
                              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10"
                            >
                              <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                              <span className="text-xs lg:text-[13px] font-sans text-zinc-100 whitespace-nowrap">{name}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>

        </div>
      </section>
    </MotionConfig>
  );
};
