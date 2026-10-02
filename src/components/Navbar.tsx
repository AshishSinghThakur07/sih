import React, { useEffect, useState } from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Themes', href: '#themes' },
  { name: 'Problems', href: '#problems' },
  { name: 'Process', href: '#process' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Team', href: '#team' },
  { name: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B0D]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Brand Identity: RRGI Crest + SIH Mark */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#101820] border border-white/10 group-hover:border-[#F58220]/40 transition-colors">
              <img
                src={EVENT_CONFIG.logos.college}
                alt="RRGI Logo"
                className="h-7 w-auto object-contain"
              />
              <span className="text-xs font-display font-extrabold tracking-wider text-white">
                {EVENT_CONFIG.collegeName}
              </span>
            </div>

            <span className="text-xs font-mono text-zinc-500 hidden sm:inline">×</span>

            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
              <span className="text-[11px] font-mono text-zinc-300 font-medium">SIH 2026</span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#101820]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#F58220] text-white font-bold shadow-md'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#register"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-display font-bold text-white bg-gradient-to-r from-[#F58220] to-[#E57210] hover:from-[#E57210] hover:to-[#2E9E45] shadow-lg hover:shadow-[#F58220]/20 transition-all"
            >
              <span>REGISTER</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="md:hidden p-2 rounded-xl bg-[#101820] border border-white/10 text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#F58220]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#080B0D]/95 backdrop-blur-2xl z-50 border-t border-white/10 p-6 flex flex-col justify-between animate-fadeIn">
          <div className="space-y-2">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest px-3 mb-2">Navigation</div>
            {NAV_LINKS.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-display font-bold text-zinc-200 hover:text-white hover:bg-[#101820] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 text-center">
            <span className="text-xs font-mono text-[#F58220] font-bold">
              {EVENT_CONFIG.collegeName} • {EVENT_CONFIG.eventEdition}
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
