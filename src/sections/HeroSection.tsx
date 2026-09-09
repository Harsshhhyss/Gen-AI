import React, { useRef, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);const InstaIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><defs><linearGradient id="insta-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f09433" /><stop offset="25%" stopColor="#e6683c" /><stop offset="50%" stopColor="#dc2743" /><stop offset="75%" stopColor="#cc2366" /><stop offset="100%" stopColor="#bc1888" /></linearGradient></defs><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#insta-grad)"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#insta-grad)"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#insta-grad)"></line></svg>;
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
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Parallax scrub on 3D Canvas
      if (canvasRef.current) {
        gsap.to(canvasRef.current, {
          yPercent: 18,
          scale: 1.05,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        });
      }

      // 2. Smooth scale and fade out for hero content on scroll
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          y: -50,
          opacity: 0.15,
          scale: 0.94,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '70% top',
            scrub: true,
          }
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen w-full flex flex-col relative overflow-hidden bg-background pt-24 sm:pt-28">
      {/* 3D Canvas Background */}
      <div ref={canvasRef} className="absolute inset-0 z-0 will-change-transform">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ParticleCore />
        </Canvas>
        {/* Gradient overlay to blend bottom into next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-0 pointer-events-none" />
      </div>


      {/* Hero Heading & Tagline & Button */}
      <div ref={contentRef} className="flex-1 flex flex-col items-center justify-center relative z-10 w-full mt-6 sm:mt-4 md:-mt-5 px-4 pointer-events-none will-change-transform">
        <FadeIn delay={0.15} y={40} className="w-full flex flex-col items-center justify-center pointer-events-none">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#00d8ff]"></span>
            <span className="text-[#00d8ff] font-semibold tracking-[0.3em] uppercase text-[10px] sm:text-xs md:text-sm">
              get next gen
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#00d8ff]"></span>
          </div>
          <h1 className="text-white font-bold tracking-tight leading-none text-center whitespace-nowrap text-[11vw] sm:text-[10vw] md:text-[11vw] lg:text-[10vw] drop-shadow-2xl">
            NextGen AI
          </h1>
          <p className="mt-6 sm:mt-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-[#8B9CAF] font-light text-center max-w-3xl lg:max-w-4xl text-[clamp(0.9rem,1vw,1.1rem)] leading-relaxed tracking-wide drop-shadow-lg mx-auto">
            Architecting full-scale SaaS platforms, intelligent AI solutions, and data-driven digital growth strategies. We engineer high-performance software ecosystems designed to scale your business.
          </p>
          
          {/* Start Project Button */}
          <div className="mt-10 sm:mt-12 pointer-events-auto flex flex-col sm:flex-row items-center gap-4">
            <Link to="/contact" className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-semibold tracking-wider text-black bg-white transition-all duration-300 hover:scale-105 hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] text-center w-full sm:w-auto">
              WORK WITH US
            </Link>
            <a 
              href="https://wa.me/917385750187?text=Hi%20NextGen%20AI!%20I'm%20interested%20in%20discussing%20a%20project." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-semibold tracking-wider text-[#25D366] bg-white transition-all duration-300 hover:scale-105 hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              CHAT
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
