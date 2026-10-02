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
      <section id="statement" className="py-24 relative border-t border-white/5 overflow-hidden">
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

          {/* Statement card */}
          <motion.figure
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative overflow-hidden rounded-3xl p-8 sm:p-14 text-center bg-gradient-to-b from-[#121A22]/90 to-[#0A0E12]/95 border border-white/10"
          >
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F58220] via-amber-400 to-[#2E9E45]" />

            {/* Floating quote mark */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto mb-8 w-16 h-16 flex items-center justify-center rounded-2xl bg-white text-[#F58220] shadow-[0_0_50px_-6px_#F58220]"
            >
              <Quote className="w-8 h-8" fill="currentColor" />
            </motion.div>

            {/* Words appear one by one */}
            <motion.blockquote
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ staggerChildren: 0.045, delayChildren: 0.3 }}
              className="text-2xl sm:text-4xl font-display font-bold text-white leading-snug tracking-tight"
            >
              {words.map((word, i) => (
                <motion.span key={`${word}-${i}`} variants={wordVariants} className="inline-block mr-[0.28em]">
                  {word}
                </motion.span>
              ))}
            </motion.blockquote>

            <figcaption className="mt-10 flex flex-col items-center gap-4">
              <span className="block h-0.5 w-16 bg-[#F58220]" />
              <div className="flex items-center gap-3">
                <img
                  src={EVENT_CONFIG.logos.college}
                  alt=""
                  className="h-9 w-auto object-contain"
                  loading="lazy"
                />
                <span className="text-sm font-mono font-semibold text-zinc-300 tracking-wide">{author}</span>
              </div>
            </figcaption>
          </motion.figure>

        </div>
      </section>
    </MotionConfig>
  );
};
