import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

// --- Hooks ---

function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;

    timeoutId = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

// --- Main Component ---

export const ContactPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [services, setServices] = useState<string[]>([]);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastX = useRef(0);

  const { displayed, done } = useTypewriter("we'd love to\nhear from you!");

  const serviceOptions = ["Brand", "Digital", "Campaign", "Other"];

  const toggleService = (opt: string) => {
    setServices(prev => 
      prev.includes(opt) ? prev.filter(s => s !== opt) : [...prev, opt]
    );
  };

  // Video Desktop Scrubbing
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024 || !videoRef.current) return;
      if (lastX.current === 0) {
        lastX.current = e.clientX;
        return;
      }
      const delta = e.clientX - lastX.current;
      lastX.current = e.clientX;
      
      const duration = videoRef.current.duration;
      if (!duration || isNaN(duration)) return;
      
      const deltaRatio = (delta / window.innerWidth) * 0.8;
      let newTime = videoRef.current.currentTime + deltaRatio * duration;
      newTime = Math.max(0, Math.min(newTime, duration));
      videoRef.current.currentTime = newTime;
    };

    // Bind seeked listener for smooth tracking
    const handleSeeked = () => { /* Ensures rendering frame */ };
    
    const vid = videoRef.current;
    if (vid) vid.addEventListener('seeked', handleSeeked);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      if (vid) vid.removeEventListener('seeked', handleSeeked);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Video Mobile Autoplay
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && videoRef.current) {
        videoRef.current.autoplay = true;
        videoRef.current.play().catch(() => {});
      }
    };
    handleResize(); // run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative bg-white text-neutral-900 font-inter selection:bg-[#EAECE9] selection:text-[#1C2E1E] antialiased overflow-x-hidden flex flex-col lg:block lg:min-h-screen">
      
      {/* Background Video Component */}
      <div className="order-last lg:order-none relative lg:absolute lg:inset-0 lg:z-0 overflow-hidden pointer-events-none w-full aspect-square md:aspect-video lg:aspect-auto lg:h-full bg-neutral-50 lg:bg-transparent">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-right lg:object-right-bottom"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4"
        />
      </div>

      {/* Interactive Navbar */}
      <header className="fixed top-0 inset-x-0 z-[20] px-5 sm:px-8 py-4 sm:py-5 flex flex-row justify-between items-center bg-transparent">
        {/* Logo */}
        <div className="flex flex-row items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.location.href = '/'}>
          <img src="/logo.png" alt="NextGen AI Logo" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain drop-shadow-[0_0_15px_rgba(0,216,255,0.5)]" />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex flex-row items-center text-[23px] text-black font-medium">
          <a href="#" className="hover:opacity-60 transition-opacity">Labs</a>
          <span className="opacity-40">,&nbsp;</span>
          <a href="#" className="hover:opacity-60 transition-opacity">Studio</a>
          <span className="opacity-40">,&nbsp;</span>
          <a href="#" className="hover:opacity-60 transition-opacity">Openings</a>
          <span className="opacity-40">,&nbsp;</span>
          <a href="#" className="hover:opacity-60 transition-opacity">Shop</a>
        </nav>

        {/* Desktop CTA */}
        <a href="#" className="hidden md:block text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity font-medium">
          Get in touch
        </a>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-[30] gap-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-6 h-[2px] bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`w-6 h-[2px] bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`w-6 h-[2px] bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[19] bg-white/95 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center gap-6 text-3xl font-medium text-black">
          <a href="#">Labs</a>
          <a href="#">Studio</a>
          <a href="#">Openings</a>
          <a href="#">Shop</a>
          <a href="#" className="underline mt-4">Get in touch</a>
        </nav>
      </div>

      {/* Content Layout Container */}
      <div className="relative z-10 flex flex-col order-first lg:order-none w-full bg-white lg:bg-transparent pb-8 lg:pb-0 lg:min-h-screen">
        <main id="spade-hero" className="w-full max-w-7xl mx-auto px-6 py-12 flex-1 flex flex-col justify-center mt-20 lg:mt-0">
          
          {/* Headline with Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-[76px] font-normal tracking-tight text-black leading-[1.08] mb-8 select-none w-full whitespace-pre-wrap">
              {displayed}
              {!done && (
                <span className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink" />
              )}
            </h1>
          </motion.div>

          {/* Secondary Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-[#5A635A] leading-relaxed font-normal mb-14 max-w-2xl">
              Whether you have questions, feedback, <br /> drop us a message and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          {/* Interactive Multi-Select Service Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-medium tracking-tight mb-2">What sort of service?</h2>
            <p className="opacity-85 text-[#738273] mb-8">Select all that apply</p>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {serviceOptions.map(opt => {
                const isActive = services.includes(opt);
                return (
                  <motion.button
                    key={opt}
                    onClick={() => toggleService(opt)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#1C2E1E] text-white shadow-md shadow-emerald-950/5' 
                        : 'bg-white text-[#1C2E1E] border border-[#F1F3F1] hover:bg-[#F1F3F1]/55'
                    }`}
                  >
                    {opt}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0, width: 0 }}
                          animate={{ scale: 1, width: 'auto' }}
                          exit={{ scale: 0, width: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <Check size={16} strokeWidth={3} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>

            {/* Contingent Feedback Status Banner */}
            <div className="min-h-[100px]">
              <AnimatePresence mode="wait">
                {services.length === 0 ? (
                  <motion.p
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="italic text-xs text-neutral-500"
                  >
                    Please click to select services above.
                  </motion.p>
                ) : (
                  <motion.div
                    key="active"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-[#FAFBF9] border border-neutral-100 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <p className="text-neutral-800">
                        Ready to inquire about: <span className="font-semibold">{services.join(", ")}</span>
                      </p>
                      <button className="text-[#4D6D47] uppercase text-xs font-bold tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity">
                        Let's Go
                        <span>&rarr;</span>
                      </button>
                    </div>
                    
                    {/* Basic Form */}
                    <form className="mt-8 flex flex-col gap-4 max-w-xl">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#1C2E1E]/20"
                      />
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#1C2E1E]/20"
                      />
                      <textarea 
                        placeholder="Tell us about your project" 
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#1C2E1E]/20"
                      />
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </main>
      </div>
    </div>
  );
};
