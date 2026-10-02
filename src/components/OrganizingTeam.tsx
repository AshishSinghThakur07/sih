import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { EVENT_CONFIG, type TeamMember } from '../config/eventConfig';
import { Users } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

// First + last initial, ignoring titles such as "Ms." or "Dr." (so "Ms. Aarti Jaiswal" -> "AJ").
const getInitials = (name: string) => {
  const words = name
    .replace(/[\[\]]/g, '')
    .split(/\s+/)
    .filter((w) => w && !/^(mr|mrs|ms|miss|dr|prof|er)\.?$/i.test(w));
  if (words.length === 0) return '?';
  const first = words[0][0];
  const last = words.length > 1 ? words[words.length - 1][0] : '';
  return (first + last).toUpperCase();
};

const tileVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

interface PersonTileProps {
  member: TeamMember;
  accent: string;
  featured?: boolean;
}

const PersonTile: React.FC<PersonTileProps> = ({ member, accent, featured = false }) => (
  <motion.article
    variants={tileVariants}
    style={{ ['--accent' as string]: accent }}
    className="group relative overflow-hidden rounded-3xl flex flex-col sm:flex-row items-center gap-5 sm:gap-8 p-6 sm:p-8 text-center sm:text-left bg-gradient-to-r from-[#121A22]/90 to-[#0A0E12]/95 border border-white/10 hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-500"
  >
    {/* Accent edge */}
    <span className="absolute inset-y-0 left-0 w-1 bg-[var(--accent)]" />

    {/* Colour sweeps in from the left on hover */}
    <span
      aria-hidden="true"
      className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-gradient-to-r from-[var(--accent)] to-[color-mix(in_srgb,var(--accent)_55%,#080B0D)] transition-[width] duration-500 ease-out"
    />

    {/* Avatar with a slowly turning ring */}
    <div className={`relative shrink-0 flex items-center justify-center ${featured ? 'w-40 h-40' : 'w-28 h-28'}`}>
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full animate-spin [animation-duration:8s] [background:conic-gradient(from_0deg,var(--accent),transparent_55%,var(--accent))] opacity-60 group-hover:opacity-100 transition-opacity"
      />
      <div
        className={`relative rounded-full overflow-hidden bg-[#101820] border-4 border-[#0E1318] flex items-center justify-center ${
          featured ? 'w-[9.25rem] h-[9.25rem]' : 'w-[6.25rem] h-[6.25rem]'
        }`}
      >
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <span
            className={`font-display font-extrabold text-[var(--accent)] group-hover:text-white transition-colors ${
              featured ? 'text-5xl' : 'text-3xl'
            }`}
          >
            {getInitials(member.name)}
          </span>
        )}
      </div>
    </div>

    {/* Name + roles */}
    <div className="relative min-w-0">
      <span className="inline-block px-3 py-1 rounded-full border border-[var(--accent)]/50 bg-[var(--accent)]/10 group-hover:bg-white/15 group-hover:border-white/50 text-[11px] sm:text-xs font-mono font-bold text-[var(--accent)] group-hover:text-white uppercase tracking-wide transition-colors">
        {member.role}
      </span>
      <h3
        className={`mt-3 font-display font-bold text-white leading-tight ${
          featured ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-3xl'
        }`}
      >
        {member.name}
      </h3>
      <p className="mt-1.5 text-xs sm:text-sm font-mono text-zinc-400 group-hover:text-white/90 transition-colors">
        {member.designation}
      </p>
    </div>
  </motion.article>
);

export const OrganizingTeam: React.FC = () => {
  const { leaders, students } = EVENT_CONFIG.team;
  const [spoc, ...others] = leaders;

  return (
    <MotionConfig reducedMotion="user">
      <section id="team" className="py-24 relative border-t border-white/5">
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
              EVENT LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              THE ORGANIZING TEAM
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.15 }}
            className="space-y-4"
          >
            {/* 1. SPOC: full-width tile */}
            {spoc && <PersonTile member={spoc} accent="#F58220" featured />}

            {/* 2. Two tiles side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {others.map((member, i) => (
                <PersonTile
                  key={member.id}
                  member={member}
                  accent={i % 2 === 0 ? '#2E9E45' : '#F58220'}
                />
              ))}
            </div>

            {/* 3. Student volunteers: full-width tile */}
            <motion.article
              variants={tileVariants}
              style={{ ['--accent' as string]: '#2E9E45' }}
              className="group relative overflow-hidden rounded-3xl flex flex-col sm:flex-row items-center gap-5 sm:gap-8 p-6 sm:p-8 text-center sm:text-left bg-gradient-to-r from-[#12201A]/90 to-[#0A0E12]/95 border border-white/10 hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-500"
            >
              <span className="absolute inset-y-0 left-0 w-1 bg-[var(--accent)]" />
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-gradient-to-r from-[var(--accent)] to-[color-mix(in_srgb,var(--accent)_55%,#080B0D)] transition-[width] duration-500 ease-out"
              />
              {/* Stack of volunteer avatars */}
              <div className="relative shrink-0 flex -space-x-5">
                {[0, 1, 2, 3].map((i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.4, x: -20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.12, type: 'spring', stiffness: 300, damping: 18 }}
                    className="w-16 h-16 rounded-full border-4 border-[#0E1318] bg-[#101820] flex items-center justify-center text-[var(--accent)] group-hover:-translate-y-1 group-hover:bg-white transition-all duration-300"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <Users className="w-6 h-6" />
                  </motion.span>
                ))}
              </div>

              <div className="relative min-w-0 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
                <div className="text-5xl sm:text-6xl font-display font-extrabold text-white leading-none">
                  {students.count}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                    {students.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm font-mono text-zinc-400 group-hover:text-white/90 transition-colors">
                    {students.description}
                  </p>
                </div>
              </div>
            </motion.article>
          </motion.div>

        </div>
      </section>
    </MotionConfig>
  );
};
