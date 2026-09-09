import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Vikram Joshi',
      role: 'Co-Founder & CTO',
      company: 'LogixFlow SaaS',
      location: 'Pune / Singapore',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      metric: '+310% MRR Growth',
      quote: 'NextGen AI architected our complete enterprise SaaS platform in under 6 weeks. Their deep knowledge of automated AI pipelines and high-speed React frontends cut our development timeline in half.',
      tag: 'Custom SaaS & AI Agents'
    },
    {
      name: 'Dr. Ananya Kulkarni',
      role: 'Managing Director',
      company: 'Aura Aesthetics & Clinic',
      location: 'Viman Nagar, Pune',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      metric: '2.8x Booking Volume',
      quote: 'We had virtually zero digital presence until Harsh and the NextGen AI team designed our web experience and automated appointment engine. We are now booked out 3 weeks in advance purely from Google local search.',
      tag: 'Digital Growth & Automation'
    },
    {
      name: 'Rohan Deshmukh',
      role: 'Head of Operations',
      company: 'Krypton Precision Engineering',
      location: 'MIDC Bhosari, Pune',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      metric: '40hrs/wk Saved in Ops',
      quote: 'The custom business automation and WhatsApp workflows built by NextGen AI transformed our internal lead pipeline. No other agency in Pune provides this level of technical execution and AI integration.',
      tag: 'Workflow Automation'
    }
  ];

  const stats = [
    { value: '99.4%', label: 'Client Satisfaction Rate' },
    { value: '3.4x', label: 'Average Client Traffic Growth' },
    { value: '< 24hr', label: 'Average Consultation Response Time' },
    { value: '100%', label: 'On-Time Project Delivery' }
  ];

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-background relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7621B0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Section Heading */}
        <FadeIn delay={0.1} y={30} className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#00d8ff]" />
            <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">Client Endorsements & Proof</span>
            <span className="w-8 h-[1px] bg-[#00d8ff]" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Trusted by businesses scaling with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8ff] to-[#7621B0]">confidence</span>.
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-light">
            Real founders, real metrics. Here is how our engineering and growth strategies deliver measurable returns for our partners.
          </p>
        </FadeIn>

        {/* Stats Strip */}
        <FadeIn delay={0.2} y={20}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-1">
                <span className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00d8ff]">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-white/50 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <FadeIn key={rev.name} delay={0.3 + idx * 0.15} y={30}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-2xl p-8 bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/10 relative flex flex-col justify-between hover:border-[#7621B0]/50 transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Top Header with Tag and Metric */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#7621B0]/20 text-[#00d8ff] border border-[#7621B0]/30">
                      {rev.tag}
                    </span>
                    <span className="text-xs font-bold text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-md border border-[#25D366]/20">
                      {rev.metric}
                    </span>
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4 text-[#FFB800]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light italic mb-8">
                    "{rev.quote}"
                  </p>
                </div>

                {/* Client Profile */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-3.5">
                  <img 
                    src={rev.avatar} 
                    alt={rev.name} 
                    className="w-11 h-11 rounded-full object-cover border border-white/20"
                  />
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm">{rev.name}</span>
                    <span className="text-white/50 text-xs">{rev.role}, {rev.company}</span>
                    <span className="text-[#00d8ff] text-[10px] tracking-wider uppercase mt-0.5">{rev.location}</span>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
