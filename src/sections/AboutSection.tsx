import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center relative px-5 sm:px-8 md:px-10 py-20 bg-background overflow-hidden">
      {/* Decorative 3D Images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon 3D" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3D Object" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego 3D" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="Group 3D" />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-10">
        <FadeIn delay={0} y={40}>
          <h2 className="text-white font-black uppercase tracking-tighter leading-none text-center text-[clamp(3.5rem,12vw,160px)] drop-shadow-2xl">
            About Us
          </h2>
        </FadeIn>

        <AnimatedText 
          text="Founded and led by Harsh Kumar Singh, NextGen AI is the top digital marketing agency and website builder in Pune. Serving businesses across Lohegaon, Viman Nagar, and beyond, we specialize in custom app development, high-performance websites, and explosive brand growth. We provide the best AI solutions in Pune and intelligent business automation to expand your online presence and establish market authority."
          className="text-textPrimary font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
        />

        <FadeIn delay={0.2} y={30} className="mt-16 sm:mt-20 md:mt-24">
          <button className="rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-semibold tracking-wider text-black bg-white transition-all duration-300 hover:scale-105 hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            WORK WITH US
          </button>
        </FadeIn>
      </div>
    </section>
  );
};
