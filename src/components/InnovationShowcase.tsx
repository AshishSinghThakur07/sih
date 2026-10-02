import React from 'react';
import { EVENT_CONFIG, type ShowcaseProject } from '../config/eventConfig';
import { Cpu, Sparkles } from 'lucide-react';

export const InnovationShowcase: React.FC = () => {
  const projects: ShowcaseProject[] = EVENT_CONFIG.projects;

  const featuredProject = projects.find(p => p.isFeatured) || projects[0];
  // The featured project has its own large card above, so it is left out of the grid.
  const otherProjects = projects.filter(p => p.id !== featuredProject?.id);

  return (
    <section id="projects" className="py-24 relative border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#F58220]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101820] border border-white/10 text-xs font-mono text-[#F58220] uppercase tracking-wider mb-4">
              <Cpu className="w-3.5 h-3.5 text-[#2E9E45]" />
              <span>BUILT BY FIRST-YEAR STUDENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              BEST HARDWARE PROJECTS
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-zinc-400 max-w-md font-sans">
            Hands-on hardware and simulator builds by RRGI first-year teams during Internal SIH 2026.
          </p>
        </div>

        {/* 1. FEATURED PROJECT HIGHLIGHT (Editorial Hero Card) */}
        {featuredProject && (
          <div className="mb-14 rounded-3xl bg-gradient-to-br from-[#101820] via-[#0E1318] to-[#0A0E12] border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Project Image */}
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/10 h-72 sm:h-96">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: featuredProject.imagePosition }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#F58220] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-lg">
                    BEST PROJECT
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#2E9E45] font-bold">
                  <Sparkles className="w-4 h-4 text-[#F58220]" />
                  <span>{featuredProject.domain}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-snug">
                  {featuredProject.title}
                </h3>

                <p className="text-xs font-mono text-zinc-400">
                  Developed by <strong className="text-white">{featuredProject.teamName}</strong>
                </p>

                <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2 font-semibold">
                    TECHNOLOGY STACK
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Team Members List if available */}
                {featuredProject.teamMembers && (
                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1.5 font-semibold">
                      TEAM MEMBERS
                    </span>
                    <p className="text-xs text-zinc-400 font-sans">
                      {featuredProject.teamMembers.join(' • ')}
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* 2. SUPPORTING PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map(project => (
            <div
              key={project.id}
              className="group rounded-3xl bg-[#0E1318]/80 border border-white/10 hover:border-[#F58220]/40 transition-all duration-300 hover:-translate-y-1 shadow-xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="h-48 w-full bg-[#101820] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: project.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1318] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                      project.category === 'Hardware' 
                        ? 'bg-[#2E9E45] text-white' 
                        : 'bg-[#101820] border border-white/20 text-[#F58220]'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-mono text-[#2E9E45] font-semibold block">
                    {project.domain}
                  </span>

                  <h4 className="text-base font-display font-bold text-white leading-snug group-hover:text-amber-200 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-xs font-mono text-zinc-400">
                    {project.teamName}
                  </p>

                  <p className="text-xs text-zinc-300 font-sans line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tech Stack Footer */}
              <div className="p-6 pt-0 border-t border-white/5 mt-4">
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-zinc-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
