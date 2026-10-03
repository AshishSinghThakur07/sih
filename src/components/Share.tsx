import React, { useEffect, useRef, useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { MessageCircle, Mail, Link2, Check, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { EVENT_CONFIG } from '../config/eventConfig';

const EASE = [0.16, 1, 0.3, 1] as const;

const tileVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

const TILE =
  'group relative overflow-hidden rounded-3xl flex flex-col items-center justify-center gap-5 min-h-[11rem] p-6 text-center bg-gradient-to-b from-[#121A22]/90 to-[#0A0E12]/95 border border-white/10 hover:border-[var(--accent)] hover:-translate-y-2 transition-all duration-500 cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]';

const FILL =
  'absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-gradient-to-t from-[var(--accent)] to-[color-mix(in_srgb,var(--accent)_55%,#080B0D)] transition-[height] duration-500 ease-out';

interface Channel {
  id: string;
  label: string;
  accent: string;
  /** Icon component, or a short text mark for brands that have no icon. */
  icon?: LucideIcon;
  mark?: string;
  href: (url: string, text: string) => string;
}

const CHANNELS: Channel[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    accent: '#2E9E45',
    icon: MessageCircle,
    href: (url, text) => `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    accent: '#F58220',
    mark: 'in',
    href: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    id: 'x',
    label: 'X',
    accent: '#D08A26',
    mark: 'X',
    href: (url, text) =>
      `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
  },
  {
    id: 'email',
    label: 'Email',
    accent: '#2E9E45',
    icon: Mail,
    href: (url, text) => `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`,
  },
];

export const Share: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const pageUrl = () => window.location.href.split('#')[0];
  const shareText = `${EVENT_CONFIG.eventEdition} – ${EVENT_CONFIG.collegeName} digital event archive`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl());
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard can be blocked (e.g. non-secure page); fall back to a manual copy prompt.
      window.prompt('Copy this link:', pageUrl());
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <section id="share" className="py-24 relative border-t border-white/5">
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
              SPREAD THE WORD
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              SHARE THE STORY
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
          >
            {CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <motion.a
                  key={channel.id}
                  variants={tileVariants}
                  href={channel.href(pageUrl(), shareText)}
                  target={channel.id === 'email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={`Share on ${channel.label}`}
                  style={{ ['--accent' as string]: channel.accent }}
                  className={TILE}
                >
                  <span className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)]" />
                  <span aria-hidden="true" className={FILL} />
                  <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />

                  <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl border border-[var(--accent)]/50 bg-[#101820] text-[var(--accent)] group-hover:bg-white group-hover:border-white transition-colors duration-300">
                    {Icon ? (
                      <Icon className="w-7 h-7" />
                    ) : (
                      <span className="text-xl font-display font-extrabold leading-none">{channel.mark}</span>
                    )}
                  </div>
                  <span className="relative text-sm font-display font-bold text-white tracking-wide">
                    {channel.label}
                  </span>
                </motion.a>
              );
            })}

            {/* Copy link */}
            <motion.button
              type="button"
              variants={tileVariants}
              onClick={copyLink}
              aria-label="Copy link"
              style={{ ['--accent' as string]: '#F58220' }}
              className={`${TILE} col-span-2 md:col-span-1`}
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)]" />
              <span aria-hidden="true" className={FILL} />

              <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl border border-[var(--accent)]/50 bg-[#101820] text-[var(--accent)] group-hover:bg-white group-hover:border-white transition-colors duration-300">
                {copied ? <Check className="w-7 h-7" strokeWidth={3} /> : <Link2 className="w-7 h-7" />}
              </div>
              <span className="relative text-sm font-display font-bold text-white tracking-wide" aria-live="polite">
                {copied ? 'Link copied!' : 'Copy link'}
              </span>
            </motion.button>
          </motion.div>

        </div>
      </section>
    </MotionConfig>
  );
};
