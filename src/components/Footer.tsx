import React from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#050709] border-t border-white/10 pt-14 pb-10 text-zinc-400 font-sans text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src={EVENT_CONFIG.logos.college} alt="RRGI Logo" className="h-8 w-auto object-contain" />
              <img src={EVENT_CONFIG.logos.sih} alt="SIH Logo" className="h-8 w-auto object-contain" />
            </div>

            <div>
              <h3 className="text-sm font-display font-bold text-white uppercase">
                {EVENT_CONFIG.collegeName}
              </h3>
              <p className="text-xs font-mono text-[#F58220] font-semibold mt-0.5">
                {EVENT_CONFIG.eventEdition} {EVENT_CONFIG.year}
              </p>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Official campus portal for the Internal Smart India Hackathon at {EVENT_CONFIG.collegeName}. Organized under MoE & AICTE guidelines.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-[#2E9E45]">
              <Shield className="w-3.5 h-3.5" />
              <span>Sanctioned by Ministry of Education's Innovation Cell</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider mb-3">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-[#F58220] transition-colors">About</a></li>
              <li><a href="#themes" className="hover:text-[#F58220] transition-colors">SIH Themes</a></li>
              <li><a href="#problems" className="hover:text-[#F58220] transition-colors">Problem Statements</a></li>
              <li><a href="#process" className="hover:text-[#F58220] transition-colors">Process</a></li>
              <li><a href="#timeline" className="hover:text-[#F58220] transition-colors">Timeline</a></li>
              <li><a href="#team" className="hover:text-[#F58220] transition-colors">Organizing Team</a></li>
              <li><a href="#faq" className="hover:text-[#F58220] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider mb-3">
              CAMPUS HELPDESK
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
            © {EVENT_CONFIG.year} {EVENT_CONFIG.collegeName}. Internal Smart India Hackathon.
          </div>
          <div>
            RajaRajeswari Group of Institutions
          </div>
        </div>

      </div>
    </footer>
  );
};
