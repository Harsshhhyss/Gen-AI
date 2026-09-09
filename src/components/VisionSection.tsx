import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

export const VisionSection: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'AI-First Architecture',
      desc: 'We don’t just write code; we design intelligent software systems with built-in neural reasoning, automated pipelines, and generative workflows.',
      highlight: 'Future-Proof'
    },
    {
      number: '02',
      title: 'High-Velocity Execution',
      desc: 'From initial prototype to production-grade SaaS in weeks, not quarters. We eliminate bloat and iterate rapidly with production-ready benchmarks.',
      highlight: 'Speed to Market'
    },
    {
      number: '03',
      title: 'Measurable ROI & Growth',
      desc: 'Software is useless if it doesn’t drive conversions. Every product we engineer is optimized for customer acquisition, retention, and scalable revenue.',
      highlight: 'Bottom-Line Impact'
    }
  ];

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#090909] relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7621B0]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00d8ff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Header */}
        <FadeIn delay={0.1} y={30} className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#00d8ff]" />
            <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">Our Vision & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8ff] via-white to-[#7621B0]">modern software</span> and autonomous intelligence.
          </h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mt-2 font-light">
            We believe the next decade belongs to companies that integrate intelligent automation directly into their digital core. NextGen AI exists to give startups and established enterprises the engineering firepower of an elite AI product team.
          </p>
        </FadeIn>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <FadeIn key={pillar.number} delay={0.2 + idx * 0.15} y={30}>
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-2xl p-8 bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 relative flex flex-col justify-between overflow-hidden group hover:border-[#00d8ff]/40 transition-colors"
              >
                <div className="absolute top-0 right-0 p-6 text-4xl sm:text-5xl font-black text-white/5 group-hover:text-[#00d8ff]/10 transition-colors">
                  {pillar.number}
                </div>
                
                <div className="flex flex-col gap-4">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-white/5 text-[#00d8ff] border border-white/10 w-fit">
                    {pillar.highlight}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00d8ff] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center text-xs text-white/40 tracking-wider group-hover:text-white/80 transition-colors">
                  NEXTGEN PRINCIPLE // {pillar.number}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
