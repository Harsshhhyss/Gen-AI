import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Global Layout Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Chatbot } from './components/Chatbot';
import { ContactPopup } from './components/ContactPopup';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Multi-Page Routes
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { AiSolutionsPunePage } from './pages/AiSolutionsPunePage';
import { SoftwareDevelopmentPunePage } from './pages/SoftwareDevelopmentPunePage';
import { DigitalMarketingPunePage } from './pages/DigitalMarketingPunePage';

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

  // Prevent scrolling while preloader runs on first load
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3500);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="w-full bg-background min-h-screen text-textPrimary font-sans flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {/* Global Floating Glassmorphic Navbar */}
        <Navbar />

        {/* Dynamic Route View */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ai-solutions-pune" element={<AiSolutionsPunePage />} />
            <Route path="/software-development-pune" element={<SoftwareDevelopmentPunePage />} />
            <Route path="/digital-marketing-pune" element={<DigitalMarketingPunePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Unified Luxury Global Footer */}
        <Footer />

        {/* Global Interactive Elements */}
        <Chatbot />
        <FloatingWhatsApp />
        <ContactPopup />
      </div>
    </BrowserRouter>
  );
}

export default App;
