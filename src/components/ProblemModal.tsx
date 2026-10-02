import React from 'react';
import type { ProblemStatement } from '../config/eventConfig';
import { X, Building2, Layers, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface ProblemModalProps {
  ps: ProblemStatement | null;
  onClose: () => void;
}

export const ProblemModal: React.FC<ProblemModalProps> = ({ ps, onClose }) => {
  if (!ps) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0E1318] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6 border-b border-white/10 pb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-[#F58220]/20 border border-[#F58220]/40 text-xs font-mono font-bold text-[#F58220]">
              PS ID: {ps.psCode}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
              {ps.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#2E9E45]/20 border border-[#2E9E45]/40 text-xs font-mono text-[#2E9E45]">
              {ps.complexity}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
            {ps.title}
          </h3>

          <div className="flex items-center gap-2 mt-3 text-xs text-zinc-400 font-sans">
            <Building2 className="w-4 h-4 text-[#F58220]" />
            <span>Sponsoring Ministry / Org: <strong className="text-white">{ps.organization}</strong></span>
          </div>
        </div>

        {/* Modal Body Scrollable */}
        <div className="overflow-y-auto space-y-6 pr-2">
          <div>
            <h4 className="text-xs font-mono text-[#2E9E45] uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
              <FileText className="w-4 h-4" /> Challenge Description
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed bg-[#101820] p-4 rounded-2xl border border-white/5">
              {ps.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono text-[#F58220] uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Expected National Impact
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed bg-[#101820] p-4 rounded-2xl border border-white/5">
              {ps.impact}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Recommended Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {ps.techStack.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-zinc-400">
            Theme: <span className="text-white">{ps.theme}</span>
          </div>

          <a
            href="#register"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-display font-bold text-white bg-gradient-to-r from-[#F58220] to-[#2E9E45] hover:opacity-95 shadow-lg"
          >
            <span>CHOOSE THIS PS & REGISTER</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
