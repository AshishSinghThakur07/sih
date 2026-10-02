import React, { useState, useEffect, useCallback } from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface GalleryItemType {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
  description?: string;
}

export const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const items: GalleryItemType[] = EVENT_CONFIG.gallery;

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
    <section id="gallery" className="py-24 relative bg-[#080B0D] border-t border-white/5">
      {/* Soft Glow Ambient Background */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#F58220]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#2E9E45]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101820] border border-white/10 text-xs font-mono text-[#F58220] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#2E9E45]" />
            <span>CAMPUS INNOVATION STORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            EVENT MOMENTS
          </h2>
          <p className="mt-3 text-sm text-zinc-400 font-sans">
            A visual glimpse into ideas, collaboration, and innovation at {EVENT_CONFIG.collegeName}.
          </p>
        </div>

        {/* Editorial Asymmetric Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(idx)}
              className={`group relative rounded-3xl overflow-hidden border border-white/10 glass-panel cursor-pointer shadow-2xl transition-all duration-500 hover:border-[#F58220]/50 hover:-translate-y-1 ${item.aspect}`}
            >
              {/* Photo Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover min-h-[260px] group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-[#080B0D]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between z-10">
                <div className="pr-4">
                  <span className="px-3 py-1 rounded-full bg-[#F58220]/20 border border-[#F58220]/40 text-[10px] font-mono font-bold text-[#F58220] uppercase tracking-wider mb-2 inline-block">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-display font-bold text-white leading-snug group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-zinc-400 font-sans line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Hover Maximize Icon */}
                <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Interactive Lightbox Modal */}
        {activeItem && selectedIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-2xl animate-fadeIn">
            <div className="relative max-w-5xl w-full rounded-3xl overflow-hidden bg-[#0E1318] border border-white/20 shadow-2xl flex flex-col max-h-[92vh]">
              
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-5 bg-[#101820] border-b border-white/10 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#F58220]/20 border border-[#F58220]/40 text-xs font-mono font-bold text-[#F58220]">
                    {activeItem.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {selectedIndex + 1} / {items.length}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedIndex(null)}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-[#F58220] transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image Stage */}
              <div className="relative flex-1 bg-black flex items-center justify-center p-4 min-h-[350px] overflow-hidden">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-[68vh] w-auto object-contain rounded-xl shadow-2xl"
                />

                {/* Left Arrow Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#F58220] transition-colors"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#F58220] transition-colors"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Footer Caption */}
              <div className="p-6 bg-[#0E1318] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-display font-bold text-white">
                    {activeItem.title}
                  </h4>
                  {activeItem.description && (
                    <p className="text-xs text-zinc-400 font-sans mt-1">
                      {activeItem.description}
                    </p>
                  )}
                </div>

                <div className="text-xs font-mono text-[#2E9E45] font-semibold shrink-0">
                  {EVENT_CONFIG.collegeName} SIH 2026
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
