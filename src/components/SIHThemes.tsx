import React, { useState } from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { Bot, Activity, Leaf, Sprout, Lock, Zap, GraduationCap, ShieldCheck, ArrowRight } from 'lucide-react';

const THEME_ICONS: Record<string, React.FC<{ className?: string }>> = {
  Bot,
  Activity,
  Leaf,
  Sprout,
  Lock,
  Zap,
  GraduationCap,
  ShieldCheck,
};

export const SIHThemes: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Hardware & Software', 'Sustainability', 'Security', 'AgriTech', 'Education'];

  const filteredThemes = selectedCategory === 'All'
    ? EVENT_CONFIG.themes
    : EVENT_CONFIG.themes.filter(t => t.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="themes" className="py-24 relative bg-[#080B0D] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono text-[#2E9E45] uppercase tracking-widest font-semibold block mb-2">
              SIH FOCUS AREAS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              EXPLORE THE CHALLENGES
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-zinc-400 max-w-sm font-sans">
            Configurable SIH technology categories. Choose your domain of expertise to begin ideation.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#F58220] text-white shadow-md font-bold'
                  : 'bg-[#101820] text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredThemes.map(theme => {
            const IconComponent = THEME_ICONS[theme.icon] || Bot;

            return (
              <div
                key={theme.id}
                className="group relative p-6 rounded-3xl bg-[#0E1318] border border-white/10 hover:border-[#F58220]/40 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#101820] border border-white/10 flex items-center justify-center text-[#F58220]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#2E9E45] font-bold">
                      {theme.code}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-[#F58220] transition-colors">
                    {theme.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-4">
                    {theme.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-zinc-500">{theme.psCount}+ PS</span>
                  <a href="#problems" className="text-[#F58220] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
