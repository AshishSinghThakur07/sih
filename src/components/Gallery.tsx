import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { EVENT_CONFIG, type GalleryItem } from '../config/eventConfig';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

const tileVariants = {
  hidden: { opacity: 0, y: 50, clipPath: 'inset(12% 0 0 0 round 1.5rem)' },
  show: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0 0 0 round 1.5rem)',
    transition: { duration: 0.9, ease: EASE },
  },
};

export const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const items: GalleryItem[] = EVENT_CONFIG.gallery;

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % items.length);
    }
  }, [selectedIndex, items.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
    }
  }, [selectedIndex, items.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    },
    [selectedIndex, handleNext, handlePrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const activeItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <MotionConfig reducedMotion="user">
      <section id="gallery" className="py-24 relative border-t border-white/5">
        {/* Soft Glow Ambient Background */}
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#F58220]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#2E9E45]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-14"
          >
            <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest font-semibold block mb-2">
              EVENT HIGHLIGHTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              GALLERY & EVENT HIGHLIGHTS
            </h2>
          </motion.div>

          {/* Photo grid (12 columns): big tile on the left, four small tiles on the right, three small tiles underneath (spans come from the config) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.12 }}
            className="grid grid-cols-1 md:grid-cols-12 auto-rows-[12.5rem] gap-4 sm:gap-5"
          >
            {items.map((item, idx) => (
              <motion.button
                type="button"
                key={item.id}
                variants={tileVariants}
                onClick={() => setSelectedIndex(idx)}
                aria-label={`Open photo: ${item.title}`}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#F58220]/70 text-left cursor-pointer shadow-xl hover:shadow-[0_24px_50px_-24px_rgba(245,130,32,0.55)] transition-[border-color,box-shadow] duration-500 focus-visible:outline-2 focus-visible:outline-[#F58220] ${item.aspect}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                  style={{ objectPosition: item.imagePosition }}
                  loading="lazy"
                />

                {/* Bottom shade: always on the big tile, otherwise fades in on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#080B0D]/85 via-[#080B0D]/10 to-transparent transition-opacity duration-500 [@media(hover:none)]:opacity-100 ${
                    idx === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />

                {/* Thin inner ring for a finished edge */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />

                {/* Category: small glass label, top-left */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#080B0D]/45 backdrop-blur-md border border-white/20 text-[10px] font-mono font-semibold uppercase tracking-wider text-white/90">
                  {item.category}
                </span>

                {/* Open icon, top-right */}
                <span className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#F58220] opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <Maximize2 className="w-4 h-4" />
                </span>

                {/* Title: slides up on hover (always visible on the big tile and on touch screens) */}
                <div
                  className={`absolute inset-x-0 bottom-0 p-4 sm:p-5 transition-all duration-500 [@media(hover:none)]:opacity-100 [@media(hover:none)]:translate-y-0 ${
                    idx === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0'
                  }`}
                >
                  <h3
                    className={`font-display font-bold text-white leading-snug ${
                      idx === 0 ? 'text-xl sm:text-3xl' : 'text-sm sm:text-base'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <span className="mt-2 block h-0.5 w-8 bg-[#F58220] group-hover:w-16 transition-all duration-500" />
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Fullscreen lightbox */}
          <AnimatePresence>
            {activeItem && selectedIndex !== null && (
              <motion.div
                key="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedIndex(null)}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden rounded-3xl bg-[#0E1318] border border-white/15 shadow-2xl"
                >
                  {/* Top bar */}
                  <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#F58220]/15 border border-[#F58220]/40 text-xs font-mono font-bold text-[#F58220]">
                        {activeItem.category}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        {selectedIndex + 1} / {items.length}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedIndex(null)}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-[#F58220] transition-colors"
                      aria-label="Close photo"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Image stage */}
                  <div className="relative flex-1 min-h-[16rem] bg-black/60 flex items-center justify-center p-3 sm:p-5 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeItem.id}
                        src={activeItem.image}
                        alt={activeItem.title}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="max-h-[62vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
                      />
                    </AnimatePresence>

                    <button
                      onClick={handlePrev}
                      className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#F58220] transition-colors"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#F58220] transition-colors"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Caption */}
                  <div className="px-5 sm:px-6 py-4 border-t border-white/10">
                    <h4 className="text-lg sm:text-xl font-display font-bold text-white">{activeItem.title}</h4>
                    {activeItem.description && (
                      <p className="mt-1 text-xs sm:text-sm text-zinc-400 font-sans">{activeItem.description}</p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
    </MotionConfig>
  );
};
