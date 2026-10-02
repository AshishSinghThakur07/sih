import React, { useState } from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { ShieldCheck, Award, GraduationCap, Users } from 'lucide-react';

export const OrganizingTeam: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Leadership' | 'Faculty' | 'Students'>('All');

  const { leadership, faculty, students } = EVENT_CONFIG.organizingTeam;

  const showLeadership = activeTab === 'All' || activeTab === 'Leadership';
  const showFaculty = activeTab === 'All' || activeTab === 'Faculty';
  const showStudents = activeTab === 'All' || activeTab === 'Students';

  return (
    <section id="team" className="py-24 relative bg-[#080B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101820] border border-white/10 text-xs font-mono text-[#F58220] uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2E9E45]" />
              <span>EVENT LEADERSHIP & CONVENERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              THE PEOPLE BEHIND THE INNOVATION
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-zinc-400 max-w-md font-sans">
            Guiding student innovators across ideation, prototype building, and national SIH 2026 portal selection.
          </p>
        </div>

        {/* Group Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {(['All', 'Leadership', 'Faculty', 'Students'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                activeTab === tab
                  ? 'bg-[#F58220] text-white shadow-lg shadow-[#F58220]/20 font-bold'
                  : 'glass-panel text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              {tab === 'All' ? 'All Committee Members' : tab}
            </button>
          ))}
        </div>

        {/* 1. FEATURED LEADERSHIP SECTION (Hero Cards for SPOC & Conveners) */}
        {showLeadership && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6 text-xs font-mono text-[#2E9E45] font-bold uppercase tracking-widest">
              <Award className="w-4 h-4 text-[#F58220]" />
              <span>SIH SPOC & CHIEF CONVENERS</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {leadership.map(member => (
                <div
                  key={member.id}
                  className="group relative rounded-3xl bg-gradient-to-br from-[#101820] to-[#0A0E12] border border-white/15 hover:border-[#F58220]/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center"
                >
                  {/* Featured Portrait */}
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-[#080B0D] shrink-0 border border-white/10 shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D]/80 via-transparent to-transparent" />
                  </div>

                  {/* Leader Info */}
                  <div className="flex-1 text-center sm:text-left">
                    <span className="px-3 py-1 rounded-full bg-[#F58220]/20 border border-[#F58220]/40 text-xs font-mono font-bold text-[#F58220] mb-2 inline-block">
                      {member.role}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1 group-hover:text-amber-200 transition-colors">
                      {member.name}
                    </h3>

                    <p className="text-xs font-mono text-[#2E9E45] font-semibold mb-2">
                      {member.designation}
                    </p>

                    <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-4">
                      {member.department}
                    </p>

                    {member.bio && (
                      <p className="text-xs text-zinc-300 font-sans italic bg-white/5 p-3 rounded-xl border border-white/5">
                        "{member.bio}"
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. FACULTY COORDINATORS GROUP */}
        {showFaculty && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6 text-xs font-mono text-zinc-400 font-bold uppercase tracking-widest">
              <GraduationCap className="w-4 h-4 text-[#2E9E45]" />
              <span>FACULTY COORDINATORS & MENTORS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {faculty.map(member => (
                <div
                  key={member.id}
                  className="group rounded-3xl bg-[#0E1318] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-xl p-5 flex items-center gap-4"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-2xl object-cover border border-white/10 shrink-0 group-hover:scale-105 transition-transform"
                  />

                  <div>
                    <span className="text-[10px] font-mono text-[#F58220] font-bold block mb-0.5">
                      {member.role}
                    </span>
                    <h4 className="text-base font-display font-bold text-white group-hover:text-[#F58220] transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-[11px] font-mono text-[#2E9E45] font-semibold">
                      {member.designation}
                    </p>
                    <p className="text-[11px] text-zinc-400 font-sans">
                      {member.department}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. STUDENT ORGANIZING TEAM GROUP */}
        {showStudents && (
          <div>
            <div className="flex items-center gap-2 mb-6 text-xs font-mono text-zinc-400 font-bold uppercase tracking-widest">
              <Users className="w-4 h-4 text-[#F58220]" />
              <span>STUDENT DEVELOPER COMMUNITY & ORGANIZERS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {students.map(member => (
                <div
                  key={member.id}
                  className="group rounded-3xl bg-[#0E1318] border border-white/10 hover:border-[#F58220]/40 transition-all duration-300 hover:-translate-y-1 shadow-xl overflow-hidden flex flex-col justify-between"
                >
                  <div className="h-52 w-full bg-[#101820] relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1318] via-transparent to-transparent opacity-90" />

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-[#101820]/90 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-[#F58220]">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-base font-display font-bold text-white mb-1 group-hover:text-[#F58220] transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-[11px] font-mono text-[#2E9E45] font-semibold mb-1">
                      {member.designation}
                    </p>
                    <p className="text-[11px] text-zinc-400 font-sans">
                      {member.department}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
