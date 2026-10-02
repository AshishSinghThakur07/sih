import React, { useEffect, useState } from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Glance', href: '#glance' },
  { name: 'Journey', href: '#journey' },
  { name: 'Projects', href: '#projects' },
  { name: 'Winners', href: '#winners' },
  { name: 'Team', href: '#team' },
  { name: 'Gallery', href: '#gallery' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="w-full">
        {/* Single merged bar: RRGI logo — navigation — SIH logo */}
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 py-2 bg-[#101820]/90 border-y border-white/10 shadow-xl backdrop-blur-xl">

          {/* Left: RRGI */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0 group">
            <img
              src={EVENT_CONFIG.logos.college}
              alt="RRGI College Logo"
              className="h-8 sm:h-10 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xs font-display font-extrabold tracking-wider text-white group-hover:text-[#F58220] transition-colors">
                {EVENT_CONFIG.collegeName}
              </span>
              <span className="hidden lg:block text-[9px] font-mono text-zinc-400 tracking-tight">
                R.R. Group of Institutions
              </span>
            </div>
          </a>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#F58220] text-white font-bold shadow-md shadow-[#F58220]/20'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: SIH + mobile toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2.5">
              <div className="hidden lg:flex flex-col text-right">
                <span className="text-[11px] font-display font-extrabold tracking-wide text-white">
                  SMART INDIA HACKATHON
                </span>
                <span className="text-[9px] font-mono text-[#F58220] font-bold tracking-tight">
                  INTERNAL EDITION 2026
                </span>
              </div>
              <img
                src={EVENT_CONFIG.logos.sih}
                alt="Smart India Hackathon Logo"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 bg-white/5 border border-white/10 text-white hover:border-[#F58220]/50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#F58220]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[50px] bg-[#080B0D]/95 backdrop-blur-2xl z-50 border-t border-white/10 p-6 flex flex-col justify-between animate-fadeIn">
          <div className="space-y-2">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest px-3 mb-3 font-semibold">
              Event Navigation
            </div>
            {NAV_LINKS.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-display font-bold text-zinc-200 hover:text-white hover:bg-[#101820] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 text-center">
            <span className="text-xs font-mono text-[#F58220] font-bold block">
              {EVENT_CONFIG.collegeFullName}
            </span>
            <span className="text-[11px] font-mono text-zinc-400 mt-1 block">
              Internal Smart India Hackathon 2026 Showcase
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
