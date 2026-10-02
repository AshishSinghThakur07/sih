import React from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050709] border-t border-white/10 pt-14 pb-10 text-zinc-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={EVENT_CONFIG.logos.college}
                alt="RRGI Logo"
                className="h-10 w-auto object-contain bg-white/5 p-1 rounded-lg border border-white/10"
              />
              <img
                src={EVENT_CONFIG.logos.sih}
                alt="SIH Logo"
                className="h-10 w-auto object-contain bg-white/5 p-1 rounded-lg border border-white/10"
              />
            </div>

            <div>
              <h3 className="text-sm font-display font-bold text-white uppercase">
                {EVENT_CONFIG.collegeFullName}
              </h3>
              <p className="text-xs font-mono text-[#F58220] font-semibold mt-0.5">
                {EVENT_CONFIG.eventEdition} — Digital Event Showcase
              </p>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Official event archive for the Internal Smart India Hackathon at RRGI. Organized in accordance with Ministry of Education and AICTE guidelines.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-[#2E9E45]">
              <Shield className="w-3.5 h-3.5" />
              <span>Sanctioned by Ministry of Education's Innovation Cell (MIC) & AICTE</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider mb-3">
              ARCHIVE NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#about" className="hover:text-[#F58220] transition-colors">About Event</a></li>
              <li><a href="#glance" className="hover:text-[#F58220] transition-colors">At A Glance</a></li>
              <li><a href="#journey" className="hover:text-[#F58220] transition-colors">Completed Journey</a></li>
              <li><a href="#projects" className="hover:text-[#F58220] transition-colors">Innovation Showcase</a></li>
              <li><a href="#winners" className="hover:text-[#F58220] transition-colors">Winners & Recognition</a></li>
              <li><a href="#team" className="hover:text-[#F58220] transition-colors">Committee & Judges</a></li>
              <li><a href="#gallery" className="hover:text-[#F58220] transition-colors">Event Gallery</a></li>
            </ul>
          </div>

          {/* Col 3: Campus Helpdesk */}
          <div>
            <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider mb-3">
              CAMPUS DETAILS
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F58220] shrink-0 mt-0.5" />
                <span>{EVENT_CONFIG.venue}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2E9E45] shrink-0" />
                <span>{EVENT_CONFIG.contactEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F58220] shrink-0" />
                <span>{EVENT_CONFIG.phone}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-zinc-500">
          <div>
            © {EVENT_CONFIG.year} {EVENT_CONFIG.collegeName}. Internal Smart India Hackathon Archive.
          </div>
          <div>
            R.R. Group of Institutions • All Rights Reserved
          </div>
        </div>

      </div>
    </footer>
  );
};
