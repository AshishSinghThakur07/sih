import React, { useState } from 'react';
import { EVENT_CONFIG, type ProblemStatement } from '../config/eventConfig';
import { ProblemModal } from './ProblemModal';
import { Search, Filter, Building2, Eye } from 'lucide-react';

export const ProblemStatements: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalPS, setActiveModalPS] = useState<ProblemStatement | null>(null);

  const categories = ['All', 'Software', 'Hardware'];

  const filteredPS = EVENT_CONFIG.problemStatements.filter(ps => {
    const matchesSearch =
      ps.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ps.psCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ps.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ps.theme.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || ps.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="problems" className="py-24 relative bg-[#080B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest font-semibold block mb-2">
            CHOOSE YOUR CHALLENGE
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            OFFICIAL SIH PROBLEM STATEMENTS
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Browse through national challenges submitted by Union Ministries, State Government Departments, and PSU R&D units. Select a problem statement to start your submission.
          </p>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="p-4 rounded-2xl glass-panel border border-white/10 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input Box */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search by PS Code, Title, Ministry or Theme..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#101820] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#F58220] transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
            <span className="text-xs font-mono text-zinc-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#2E9E45]" /> Category:
            </span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#2E9E45] text-white shadow-md font-bold'
                    : 'bg-[#101820] text-zinc-400 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Cards Grid */}
        {filteredPS.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl glass-panel border border-white/10">
            <p className="text-zinc-400 text-sm">No problem statements match your search query "{searchTerm}".</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-4 px-4 py-2 rounded-full bg-[#F58220] text-white text-xs font-mono font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPS.map(ps => (
              <div
                key={ps.id}
                className="group relative p-6 sm:p-7 rounded-3xl bg-[#0E1318] border border-white/10 hover:border-[#F58220]/40 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#F58220]/15 border border-[#F58220]/30 text-xs font-mono font-bold text-[#F58220]">
                      {ps.psCode}
                    </span>

                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300">
                      {ps.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-[#F58220] transition-colors leading-snug line-clamp-2">
                    {ps.title}
                  </h3>

                  {/* Sponsoring Org */}
                  <div className="flex items-center gap-2 mb-4 text-xs font-sans text-zinc-400">
                    <Building2 className="w-3.5 h-3.5 text-[#2E9E45] shrink-0" />
                    <span className="truncate">{ps.organization}</span>
                  </div>

                  {/* Description Snippet */}
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed line-clamp-3 mb-6">
                    {ps.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400 truncate max-w-[150px]">
                    {ps.theme}
                  </span>

                  <button
                    onClick={() => setActiveModalPS(ps)}
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-semibold text-white hover:bg-[#F58220] hover:border-[#F58220] transition-colors group/btn"
                  >
                    <span>View Details</span>
                    <Eye className="w-3.5 h-3.5 text-[#F58220] group-hover/btn:text-white transition-colors" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Window */}
        <ProblemModal
          ps={activeModalPS}
          onClose={() => setActiveModalPS(null)}
        />

      </div>
    </section>
  );
};
