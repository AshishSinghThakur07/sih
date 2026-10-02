import React, { useEffect, useRef, useState } from 'react';
import { motion, MotionConfig, useInView, useReducedMotion } from 'framer-motion';
import { EVENT_CONFIG } from '../config/eventConfig';
import { Lightbulb, ClipboardCheck, Cpu, Gavel, Trophy, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// One icon per stage in config order: idea, review checklist, hardware/software build, judge's gavel, trophy.
const STAGE_ICONS: LucideIcon[] = [Lightbulb, ClipboardCheck, Cpu, Gavel, Trophy];

const EASE = [0.16, 1, 0.3, 1] as const;
const STEP_MS = 3200;

export const EventJourney: React.FC = () => {
  const stages = EVENT_CONFIG.journey;
  const count = stages.length;

  const rowRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rowRef, { margin: '-15% 0px' });
  const reduceMotion = useReducedMotion();

  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const autoplay = inView && !hovering && !reduceMotion;

  // Walk through the stages on its own until the visitor takes over.
  useEffect(() => {
    if (!autoplay) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % count), STEP_MS);
    return () => window.clearTimeout(t);
  }, [active, autoplay, count]);

  return (
    <MotionConfig reducedMotion="user">
      <section id="journey" className="relative border-t border-white/5 min-h-screen flex items-center pt-24 pb-10">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-8"
          >
            <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest font-semibold block mb-2">
              EVENT CHRONICLE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              THE COMPLETED JOURNEY
            </h2>
          </motion.div>

          {/* Expanding tall panels: the active stage opens up, finished stages tick green */}
          <motion.div
            ref={rowRef}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.1 }}
            onPointerEnter={(e) => {
              if (e.pointerType === 'mouse') setHovering(true);
            }}
            onPointerLeave={() => setHovering(false)}
            className="flex gap-2 sm:gap-3 h-[54vh] lg:h-[min(62vh,30rem)]"
          >
            {stages.map((stage, idx) => {
              const Icon = STAGE_ICONS[idx % STAGE_ICONS.length];
              const isActive = idx === active;
              const isDone = idx < active;

              return (
                <motion.article
                  key={stage.step}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onPointerEnter={(e) => {
                    if (e.pointerType === 'mouse') setActive(idx);
                  }}
                  onClick={() => setActive(idx)}
                  onFocus={() => setActive(idx)}
                  style={{ flexGrow: isActive ? 4.5 : 1 }}
                  className={`relative basis-0 min-w-0 overflow-hidden cursor-pointer border bg-[#0E1318]/85 transition-[flex-grow,border-color] duration-700 ease-out focus-visible:outline-2 focus-visible:outline-[#F58220] ${
                    isActive ? 'border-[#F58220]' : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  {/* Optional event photo: dim and grey when closed, vivid when open */}
                  {stage.image && (
                    <img
                      src={stage.image}
                      alt=""
                      loading="lazy"
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                        isActive ? 'opacity-90 scale-100' : 'opacity-25 grayscale scale-110'
                      }`}
                    />
                  )}

                  {/* Active fill (lighter over a photo so the picture still shows) */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-700 ${
                      stage.image
                        ? 'from-[#F58220]/85 via-[#101820]/40 to-[#101820]/15'
                        : 'from-[#F58220] via-[#F58220]/35 to-[#101820]'
                    } ${isActive ? 'opacity-100' : 'opacity-0'}`}
                  />
                  {/* Diagonal texture */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 opacity-60 [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.045)_0_2px,transparent_2px_14px)]"
                  />

                  {/* Giant outlined number */}
                  <span
                    aria-hidden="true"
                    className={`absolute -right-2 top-2 text-[7rem] sm:text-[9rem] leading-none font-display font-extrabold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.35)] select-none transition-all duration-700 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                  >
                    {stage.step}
                  </span>

                  {/* Top: status (number, or a tick once the stage is done) */}
                  <div className="absolute top-3 sm:top-4 inset-x-0 flex justify-center">
                    {isDone ? (
                      <span className="w-6 h-6 flex items-center justify-center rounded-md bg-[#2E9E45]/20 text-[#2E9E45]">
                        <Check className="w-4 h-4" strokeWidth={3} />
                      </span>
                    ) : (
                      <span
                        className={`text-xs sm:text-sm font-mono font-bold tracking-widest ${
                          isActive ? 'text-white' : 'text-zinc-500'
                        }`}
                      >
                        {stage.step}
                      </span>
                    )}
                  </div>

                  {/* Icon: top-left corner when open (clean photo), centred under the number when closed */}
                  <div
                    className={`absolute transition-all duration-700 ease-out ${
                      isActive
                        ? 'top-3 sm:top-4 left-3 sm:left-4 translate-x-0'
                        : 'top-[22%] left-1/2 -translate-x-1/2'
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center border rounded-xl sm:rounded-2xl transition-all duration-700 ${
                        isActive
                          ? 'w-11 h-11 sm:w-14 sm:h-14 bg-white text-[#F58220] border-white shadow-lg'
                          : isDone
                            ? 'w-9 h-9 sm:w-11 sm:h-11 bg-[#101820] text-[#2E9E45] border-[#2E9E45]/50'
                            : 'w-9 h-9 sm:w-11 sm:h-11 bg-[#101820] text-zinc-300 border-white/15'
                      }`}
                    >
                      <Icon className={isActive ? 'w-5 h-5 sm:w-7 sm:h-7' : 'w-4 h-4 sm:w-5 sm:h-5'} />
                    </div>
                  </div>

                  {/* Collapsed: vertical title */}
                  <div
                    className={`absolute bottom-4 left-1/2 -translate-x-1/2 [writing-mode:vertical-rl] rotate-180 max-h-[55%] transition-opacity duration-300 ${
                      isActive ? 'opacity-0' : 'opacity-100 delay-300'
                    }`}
                  >
                    <h3
                      className={`text-[11px] sm:text-sm font-display font-bold uppercase tracking-wide whitespace-nowrap ${
                        isDone ? 'text-zinc-300' : 'text-zinc-400'
                      }`}
                    >
                      {stage.title}
                    </h3>
                  </div>

                  {/* Active: horizontal title + short line */}
                  <div
                    className={`absolute inset-x-0 bottom-0 p-3 sm:p-6 transition-all duration-500 ${
                      isActive ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                  >
                    <h3 className="text-base sm:text-3xl font-display font-bold text-white uppercase leading-tight tracking-tight">
                      {stage.title}
                    </h3>
                    <span className="mt-1 sm:mt-2 block text-[11px] sm:text-sm font-mono font-semibold text-white/90">
                      {stage.subtitle}
                    </span>
                  </div>

                  {/* Autoplay timer along the bottom edge */}
                  {isActive && autoplay && (
                    <motion.span
                      key={`timer-${active}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: STEP_MS / 1000, ease: 'linear' }}
                      className="absolute bottom-0 left-0 right-0 h-1 origin-left bg-white"
                    />
                  )}
                </motion.article>
              );
            })}
          </motion.div>

        </div>
      </section>
    </MotionConfig>
  );
};
