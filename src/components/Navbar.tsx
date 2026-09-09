import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full p-4 sm:p-6 md:px-12 md:py-8 z-[90] pointer-events-none">
        <div className="w-full flex justify-between items-center pointer-events-auto">
          {/* Brand Logo */}
          <Link to="/" className="inline-block transition-transform hover:scale-105">
            <img 
              src="/logo-cropped.png" 
              alt="NextGen AI Logo" 
              className="w-20 md:w-28 lg:w-36 h-auto object-contain" 
            />
          </Link>

          {/* Desktop Floating Pill Navigation */}
          <nav 
            className="hidden md:flex items-center gap-1.5 rounded-full px-4 py-2 backdrop-blur-md"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 5, 30, 0.75) 0%, rgba(5, 20, 35, 0.75) 100%)',
              border: '1px solid rgba(0,216,255,0.25)',
              borderTopColor: 'rgba(118,33,176,0.5)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}
          >
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium tracking-wider transition-all duration-300 group ${
                    active 
                      ? 'text-white bg-white/15 shadow-[0_0_15px_rgba(0,216,255,0.2)]' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00d8ff] shadow-[0_0_8px_#00d8ff]" 
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Direct CTA on Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase text-white bg-gradient-to-r from-[#7621B0] to-[#00d8ff] hover:opacity-95 transition-opacity shadow-[0_0_20px_rgba(118,33,176,0.4)]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-11 h-11 flex flex-col justify-center items-center gap-[5px] z-[100] relative rounded-full bg-black/50 border border-white/15 backdrop-blur-md"
              aria-label="Toggle Menu"
            >
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-5 h-[2px] bg-white rounded-full transition-transform" 
              />
              <motion.span 
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-3.5 h-[2px] bg-[#00d8ff] rounded-full transition-opacity" 
              />
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-5 h-[2px] bg-white rounded-full transition-transform" 
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] bg-[#0C0C0C]/95 backdrop-blur-2xl flex flex-col justify-center items-center px-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 text-center">
              {navLinks.map((link, idx) => {
                const active = isActive(link.path);
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-2xl font-semibold tracking-wide uppercase transition-colors ${
                        active ? 'text-[#00d8ff]' : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="pt-6"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block px-8 py-3 rounded-full text-sm font-semibold tracking-widest uppercase text-white bg-gradient-to-r from-[#7621B0] to-[#00d8ff] shadow-[0_0_25px_rgba(0,216,255,0.4)]"
                >
                  Book a Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
