import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { Quote } from 'lucide-react';
import { EVENT_CONFIG } from '../config/eventConfig';

const EASE = [0.16, 1, 0.3, 1] as const;

const wordVariants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: EASE } },
};

export const CollegeStatement: React.FC = () => {
  const { label, text, author } = EVENT_CONFIG.collegeStatement;
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <MotionConfig reducedMotion="user">
      <section id="statement" className="py-16 relative border-t border-white/5 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[320px] bg-gradient-to-r from-[#F58220]/15 via-amber-500/10 to-[#2E9E45]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-8"
          >
            <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest font-semibold block">
              {label}
            </span>
          </motion.div>

          {/* Statement card: slim, quote mark | statement | signature */}
          <motion.figure
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl px-6 py-7 sm:px-9 sm:py-8 bg-gradient-to-r from-[#121A22]/90 to-[#0A0E12]/95 border border-white/10"
          >
            {/* Slim accent bar */}
            <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#F58220] to-[#2E9E45]" />

            <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
              {/* Quote mark */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-white text-[#F58220] shadow-[0_0_30px_-6px_#F58220]"
              >
                <Quote className="w-5 h-5" fill="currentColor" />
              </motion.div>

              {/* Words appear one by one */}
              <motion.blockquote
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ staggerChildren: 0.04, delayChildren: 0.3 }}
                className="flex-1 text-lg sm:text-xl lg:text-2xl font-display font-semibold text-white leading-snug tracking-tight"
              >
                {words.map((word, i) => (
                  <motion.span key={`${word}-${i}`} variants={wordVariants} className="inline-block mr-[0.26em]">
                    {word}
                  </motion.span>
                ))}
              </motion.blockquote>

              {/* Signature */}
              <figcaption className="shrink-0 flex items-center gap-3 md:border-l md:border-white/10 md:pl-8">
                <img
                  src={EVENT_CONFIG.logos.college}
                  alt=""
                  className="h-9 w-auto object-contain"
                  loading="lazy"
                />
                <span className="text-[11px] font-mono font-semibold text-zinc-300 tracking-wide leading-snug">
                  {author}
                </span>
              </figcaption>
            </div>
          </motion.figure>

        </div>
      </section>
    </MotionConfig>
  );
};
