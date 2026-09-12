import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#080808] border-t border-white/10 relative z-20 pt-16 pb-12 px-6 sm:px-12 lg:px-20 text-textPrimary overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-[#7621B0]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link to="/" className="inline-block">
              <img src="/logo-cropped.png" alt="NextGen AI Logo" className="w-28 sm:w-36 h-auto object-contain" />
            </Link>
            <p className="text-white/60 text-sm sm:text-base max-w-md leading-relaxed">
              Architecting full-scale SaaS platforms, intelligent AI solutions, and data-driven digital growth strategies for forward-thinking enterprises and local innovators.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#00d8ff] tracking-wider uppercase font-semibold mt-2">
              <span className="w-2 h-2 rounded-full bg-[#00d8ff] animate-pulse" />
              Headquartered in Pune, India · Serving Globally
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <span className="text-white font-semibold text-xs tracking-[0.2em] uppercase text-[#00d8ff]">Navigation</span>
            <Link to="/" className="text-white/70 hover:text-white transition-colors text-sm">Home</Link>
            <Link to="/services" className="text-white/70 hover:text-white transition-colors text-sm">Services</Link>
            <Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm">About Us</Link>
            <Link to="/projects" className="text-white/70 hover:text-white transition-colors text-sm">Projects & Portfolio</Link>
            <Link to="/faq" className="text-white/70 hover:text-white transition-colors text-sm">Frequently Asked Questions</Link>
            <Link to="/contact" className="text-white/70 hover:text-white transition-colors text-sm">Contact & Consultation</Link>
          </div>

          {/* Col 3: Pune Regional Hubs */}
          <div className="flex flex-col gap-3">
            <span className="text-white font-semibold text-xs tracking-[0.2em] uppercase text-[#00d8ff]">Pune Solutions</span>
            <Link to="/ai-solutions-pune" className="text-white/70 hover:text-white transition-colors text-sm">AI Development Pune</Link>
            <Link to="/software-development-pune" className="text-white/70 hover:text-white transition-colors text-sm">Software Company Pune</Link>
            <Link to="/digital-marketing-pune" className="text-white/70 hover:text-white transition-colors text-sm">Digital Marketing Pune</Link>
            <span className="text-xs text-white/40 mt-1">Hinjewadi · Baner · Viman Nagar · Kharadi</span>
          </div>

          {/* Col 4: Direct Connect */}
          <div className="flex flex-col gap-3">
            <span className="text-white font-semibold text-xs tracking-[0.2em] uppercase text-[#00d8ff]">Direct Connect</span>
            <a 
              href="https://wa.me/917385750187?text=Hi%20NextGen%20AI!%20I'm%20interested%20in%20discussing%20a%20project." 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#25D366] transition-colors text-sm flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              WhatsApp: +91 7385750187
            </a>
            <a 
              href="mailto:connect@getnextgen.in" 
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              connect@getnextgen.in
            </a>
            <p className="text-xs text-white/50 leading-relaxed mt-2">
              Available 24/7 for project discovery sessions and urgent technical consultations.
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <span>
            © {new Date().getFullYear()} NextGen AI. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
