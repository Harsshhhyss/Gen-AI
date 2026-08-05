import React, { useRef, useMemo, useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';const InstaIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><defs><linearGradient id="insta-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f09433" /><stop offset="25%" stopColor="#e6683c" /><stop offset="50%" stopColor="#dc2743" /><stop offset="75%" stopColor="#cc2366" /><stop offset="100%" stopColor="#bc1888" /></linearGradient></defs><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#insta-grad)"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#insta-grad)"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#insta-grad)"></line></svg>;
const LinkedinIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="#0077b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const TwitterIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="#1DA1F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const YoutubeIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.17 1 12 1 12s0 3.83.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.83 23 12 23 12s0-3.83-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#FF0000"></polygon></svg>;

const ParticleCore = () => {
  const starsRef = useRef<THREE.Points>(null);
  const coreGroupRef = useRef<THREE.Group>(null);

  // Generate a vast starfield
  const count = 3000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;     // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40 - 10; // z
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (starsRef.current) {
      starsRef.current.rotation.y = t * 0.01;
      starsRef.current.rotation.z = t * 0.005;
    }
    if (coreGroupRef.current) {
      // Mouse tracking for the core ONLY
      coreGroupRef.current.position.x = THREE.MathUtils.lerp(coreGroupRef.current.position.x, state.pointer.x * 2.5, 0.05);
      coreGroupRef.current.position.y = THREE.MathUtils.lerp(coreGroupRef.current.position.y, Math.sin(t * 1.5) * 0.2 + state.pointer.y * 2.5, 0.05);
      coreGroupRef.current.rotation.x = t * 0.2;
      coreGroupRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#7621B0" />
      <directionalLight position={[-10, -10, -5]} intensity={2} color="#00d8ff" />
      
      {/* Central Interactive Core */}
      <group ref={coreGroupRef}>
        <Sphere args={[1.8, 64, 64]}>
          <MeshDistortMaterial 
            color="#0C0C0C" 
            emissive="#7621B0"
            emissiveIntensity={0.6}
            attach="material" 
            distort={0.4} 
            speed={2.5} 
            roughness={0.2}
            metalness={1}
            wireframe={true}
          />
        </Sphere>
        <Sphere args={[1.7, 32, 32]}>
           <meshStandardMaterial color="#0C0C0C" roughness={0.1} metalness={0.9} />
        </Sphere>
      </group>

      {/* Background Stars */}
      <points ref={starsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <PointMaterial transparent color="#FFFFFF" size={0.06} sizeAttenuation={true} depthWrite={false} opacity={0.85} />
      </points>
    </group>
  );
};

export const HeroSection: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="h-screen w-full flex flex-col relative overflow-hidden bg-background">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ParticleCore />
        </Canvas>
        {/* Gradient overlay to blend bottom into next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-0 pointer-events-none" />
      </div>

      {/* Top Navigation - Fixed across all sections */}
      <div className="fixed top-0 left-0 w-full p-6 sm:p-8 md:p-12 z-[90] pointer-events-none">
        <FadeIn delay={0.1} y={-20} className="w-full flex justify-between items-center pointer-events-auto">
          {/* Logo — top left */}
            <img src="/logo-cropped.png" alt="NextGen AI Logo" className="w-20 md:w-28 lg:w-36 h-auto object-contain transition-transform hover:scale-105" />

          {/* Right side container */}
          <div className="flex items-center">
            {/* Floating pill nav — top right */}
            <div className="hidden md:flex items-center gap-2 rounded-full px-3 py-2.5"
              style={{
                background: 'linear-gradient(135deg, rgba(118,33,176,0.15) 0%, rgba(0,216,255,0.05) 100%)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(0,216,255,0.2)',
                borderTopColor: 'rgba(118,33,176,0.4)',
                borderBottomColor: 'rgba(0,216,255,0.1)',
                boxShadow: '0 8px 32px rgba(118,33,176,0.2), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 0 20px rgba(0,216,255,0.05)'
              }}>
              {['About', 'Services', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="relative px-6 py-2 rounded-full text-base font-medium tracking-wider text-white/90 hover:text-white transition-all duration-300 hover:bg-white/15 group"
                >
                  {link}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00d8ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#00d8ff]" />
                </a>
              ))}
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 flex flex-col justify-center items-center gap-[5px] z-[100] relative"
              >
                <motion.span 
                  animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="w-6 h-[2px] bg-white rounded-full" 
                />
                <motion.span 
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-4 h-[2px] bg-white/60 rounded-full" 
                />
                <motion.span 
                  animate={isMobileMenuOpen ? { rotate: -45, y: -7, width: 24, backgroundColor: '#fff' } : { rotate: 0, y: 0, width: 24, backgroundColor: 'transparent' }}
                  className="h-[2px] rounded-full" 
                />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-24 left-4 right-4 bg-[#0C0C0C]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl pointer-events-auto"
            >
              {['About', 'Services', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-lg font-medium py-2 border-b border-white/5 hover:text-[#00d8ff] transition-colors"
                >
                  {link}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      {/* Hero Heading & Tagline & Button */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full mt-6 sm:mt-4 md:-mt-5 px-4 pointer-events-none">
        <FadeIn delay={0.15} y={40} className="w-full flex flex-col items-center justify-center pointer-events-none">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#00d8ff]"></span>
            <span className="text-[#00d8ff] font-semibold tracking-[0.3em] uppercase text-[10px] sm:text-xs md:text-sm">
              get next gen | top website makers in pune
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#00d8ff]"></span>
          </div>
          <h1 className="text-white font-bold tracking-tight leading-none text-center whitespace-nowrap text-[11vw] sm:text-[10vw] md:text-[11vw] lg:text-[10vw] drop-shadow-2xl">
            NextGen AI
          </h1>
          <p className="mt-6 sm:mt-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-[#8B9CAF] font-light text-center max-w-xl md:max-w-3xl lg:max-w-4xl text-[clamp(1.1rem,1.5vw,1.3rem)] leading-relaxed tracking-wide drop-shadow-lg">
            Your premier next-gen website builder and digital marketing agency. We elevate your online presence <br className="hidden md:block" /> with intelligent AI websites, custom app development, and seamless interactive ecosystems.
          </p>
          
          {/* Start Project Button */}
          <div className="mt-10 sm:mt-12 pointer-events-auto">
            <a href="#contact" className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-semibold tracking-wider text-black bg-white transition-all duration-300 hover:scale-105 hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              WORK WITH US
            </a>
          </div>
        </FadeIn>
      </div>
      {/* Social Media Sidebar — Left Middle */}
      <FadeIn delay={0.6} y={0} className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-8 md:left-12 z-30 pointer-events-auto hidden sm:flex flex-col gap-6">
        {[
          { icon: InstaIcon, href: '#' },
          { icon: LinkedinIcon, href: '#' },
          { icon: TwitterIcon, href: '#' },
          { icon: YoutubeIcon, href: '#' },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <a
              key={i}
              href={s.href}
              className="hover:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
      </FadeIn>
    </section>
  );
};
