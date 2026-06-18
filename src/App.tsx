import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import { Chatbot } from './components/Chatbot';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div 
      initial={{ y: 0 }} 
      animate={{ y: "-100%" }} 
      transition={{ duration: 1, delay: 2.2, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-[#0C0C0C] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <motion.h1 
          animate={{ opacity: 0, y: -30, filter: "blur(10px)" }} 
          transition={{ duration: 0.6, delay: 1.7 }}
          className="text-white font-black uppercase tracking-widest text-4xl sm:text-5xl md:text-7xl"
          style={{ textShadow: '0 0 40px rgba(255,255,255,0.3)' }}
        >
          NEXTGEN AI
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  // Prevent scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      // Fallback in case animation fails to trigger completion
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3500);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <div className="w-full bg-background min-h-screen text-textPrimary font-sans">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      
      <Chatbot />
    </div>
  );
}

export default App;
