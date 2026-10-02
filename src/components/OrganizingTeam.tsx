import React, { useState } from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { ShieldCheck, Award, GraduationCap, Users } from 'lucide-react';

export const OrganizingTeam: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Leadership' | 'Judges' | 'Faculty' | 'Students'>('All');

  const { leadership, judges, faculty, students } = EVENT_CONFIG.team;

  const showLeadership = activeTab === 'All' || activeTab === 'Leadership';
  const showJudges = activeTab === 'All' || activeTab === 'Judges';
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
              <span>EVENT LEADERSHIP & COMMITTEE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              ORGANIZING TEAM & JUDGES
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-zinc-400 max-w-md font-sans">
            Guiding student innovators across ideation, prototype building, evaluation, and national portal selection.
          </p>
        </div>

        {/* Group Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {(['All', 'Leadership', 'Judges', 'Faculty', 'Students'] as const).map(tab => (
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
        {showLeadership && leadership && (
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
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-[#080B0D] shrink-0 border border-white/10 shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

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

                    <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-3">
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

        {/* 2. JUDGES & EVALUATORS GROUP */}
        {showJudges && judges && judges.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
              <Award className="w-4 h-4 text-amber-400" />
              <span>JUDGES & EVALUATION JURY</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {judges.map(member => (
                <div
                  key={member.id}
                  className="group rounded-3xl bg-[#0E1318] border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 shadow-xl p-5 flex items-center gap-4"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-2xl object-cover border border-white/10 shrink-0 group-hover:scale-105 transition-transform"
                  />

                  <div>
                    <span className="text-[10px] font-mono text-amber-400 font-bold block mb-0.5">
                      {member.role}
                    </span>
                    <h4 className="text-base font-display font-bold text-white group-hover:text-amber-300 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-[11px] font-mono text-zinc-300 font-semibold">
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

        {/* 3. FACULTY MENTORS GROUP */}
        {showFaculty && faculty && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6 text-xs font-mono text-zinc-400 font-bold uppercase tracking-widest">
              <GraduationCap className="w-4 h-4 text-[#2E9E45]" />
              <span>FACULTY COORDINATORS & MENTORS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

        {/* 4. STUDENT ORGANIZING TEAM GROUP */}
        {showStudents && students && (
          <div>
            <div className="flex items-center gap-2 mb-6 text-xs font-mono text-zinc-400 font-bold uppercase tracking-widest">
              <Users className="w-4 h-4 text-[#F58220]" />
              <span>STUDENT DEVELOPER COMMUNITY & ORGANIZERS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {students.map(member => (
                <div
                  key={member.id}
                  className="group rounded-3xl bg-[#0E1318] border border-white/10 hover:border-[#F58220]/40 transition-all duration-300 hover:-translate-y-1 shadow-xl p-5 flex items-center gap-4"
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

      </div>
    </section>
  );
};
