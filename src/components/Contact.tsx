import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { Globe, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { EVENT_CONFIG } from '../config/eventConfig';

const EASE = [0.16, 1, 0.3, 1] as const;

const tileVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const TILE =
  'group relative overflow-hidden rounded-3xl flex flex-col justify-between gap-10 min-h-[15rem] p-7 sm:p-8 bg-gradient-to-b from-[#121A22]/90 to-[#0A0E12]/95 border border-white/10 hover:border-[var(--accent)] hover:-translate-y-2 transition-all duration-500';

const FILL =
  'absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-gradient-to-t from-[var(--accent)] to-[color-mix(in_srgb,var(--accent)_55%,#080B0D)] transition-[height] duration-500 ease-out';

export const Contact: React.FC = () => {
  const { website, phones, venue } = EVENT_CONFIG;

  return (
    <MotionConfig reducedMotion="user">
      <section id="contact" className="py-24 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-14"
          >
            <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest font-semibold block mb-2">
              CONNECT WITH {EVENT_CONFIG.collegeName}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              GET IN TOUCH
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {/* Website */}
            <motion.a
              variants={tileVariants}
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ['--accent' as string]: '#F58220' }}
              className={TILE}
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)]" />
              <span aria-hidden="true" className={FILL} />

              <div className="relative flex items-start justify-between">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl border border-[var(--accent)]/50 bg-[#101820] text-[var(--accent)] group-hover:bg-white group-hover:border-white transition-colors duration-300">
                  <Globe className="w-7 h-7" />
                </div>
                <ArrowUpRight className="w-6 h-6 text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>

              <div className="relative">
                <span className="block text-[11px] font-mono font-bold text-[var(--accent)] group-hover:text-white tracking-[0.25em] uppercase transition-colors">
                  Website
                </span>
                <span className="mt-1 block text-xl sm:text-2xl font-display font-bold text-white break-words">
                  {website}
                </span>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.div
              variants={tileVariants}
              style={{ ['--accent' as string]: '#2E9E45' }}
              className={TILE}
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)]" />
              <span aria-hidden="true" className={FILL} />

              <div className="relative">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl border border-[var(--accent)]/50 bg-[#101820] text-[var(--accent)] group-hover:bg-white group-hover:border-white transition-colors duration-300">
                  <Phone className="w-7 h-7" />
                </div>
              </div>

              <div className="relative">
                <span className="block text-[11px] font-mono font-bold text-[var(--accent)] group-hover:text-white tracking-[0.25em] uppercase transition-colors">
                  Call us
                </span>
                <div className="mt-1 flex flex-col gap-1">
                  {phones.map((number) => (
                    <a
                      key={number}
                      href={`tel:${number.replace(/\s+/g, '')}`}
                      className="text-xl sm:text-2xl font-display font-bold text-white hover:underline underline-offset-4"
                    >
                      {number}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Venue */}
            <motion.div
              variants={tileVariants}
              style={{ ['--accent' as string]: '#D08A26' }}
              className={TILE}
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)]" />
              <span aria-hidden="true" className={FILL} />

              <div className="relative">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl border border-[var(--accent)]/50 bg-[#101820] text-[var(--accent)] group-hover:bg-white group-hover:border-white transition-colors duration-300">
                  <MapPin className="w-7 h-7" />
                </div>
              </div>

              <div className="relative">
                <span className="block text-[11px] font-mono font-bold text-[var(--accent)] group-hover:text-white tracking-[0.25em] uppercase transition-colors">
                  Campus
                </span>
                <span className="mt-1 block text-xl sm:text-2xl font-display font-bold text-white">
                  {venue}
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </MotionConfig>
  );
};
