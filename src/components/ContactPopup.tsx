import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, MessageSquare } from 'lucide-react';

export const ContactPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Only trigger once per session
    if (hasDismissed) return;

    // Trigger after 40 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 40000);

    return () => clearTimeout(timer);
  }, [hasDismissed]);

  const handleClose = () => {
    setIsOpen(false);
    setHasDismissed(true);
  };

  const handleAction = () => {
    setIsOpen(false);
    setHasDismissed(true);
    // Use timeout to allow modal close animation before opening URL
    setTimeout(() => {
      window.open("https://wa.me/917385750187?text=Hi%20NextGen%20AI!%20I'm%20interested%20in%20discussing%20a%20project.", '_blank');
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#0C0C0C] rounded-[32px] overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(118,33,176,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Background Glow inside Popup */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#7621B0] rounded-full blur-[100px] opacity-40 pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#00d8ff] rounded-full blur-[100px] opacity-20 pointer-events-none" />

            <div className="relative z-10 p-8 flex flex-col items-center text-center">
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7621B0] to-[#00d8ff] flex items-center justify-center mb-6 shadow-lg shadow-[#7621B0]/30">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                Ready to build something amazing?
              </h3>
              
              <p className="text-[#D7E2EA]/70 text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
                You've been exploring for a while! Let's schedule a free strategy call to discuss how NextGen AI can transform your digital presence.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <button 
                  onClick={handleClose}
                  className="flex-1 py-3.5 px-6 rounded-full text-white/80 font-semibold text-sm border border-white/10 hover:bg-white/5 transition-colors"
                >
                  Maybe Later
                </button>
                <button 
                  onClick={handleAction}
                  className="flex-1 py-3.5 px-6 rounded-full bg-white text-black font-bold text-sm tracking-wide uppercase hover:bg-[#00d8ff] hover:shadow-[0_0_20px_rgba(0,216,255,0.4)] transition-all flex items-center justify-center gap-2"
                >
                  Book a Call <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
