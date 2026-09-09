import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../sections/HeroSection';
import { MarqueeSection } from '../sections/MarqueeSection';
import { VisionSection } from '../components/VisionSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FadeIn } from '../components/FadeIn';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HomePage: React.FC = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.15,
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);
  const serviceCards = [
    {
      title: 'Full-Scale SaaS Architecture',
      desc: 'End-to-end cloud platforms, multi-tenant databases, authentication, and ultra-fast microfrontends designed to scale from zero to millions of users.',
      icon: '⚡',
      badge: 'Production-Ready'
    },
    {
      title: 'Autonomous AI Agents & Solutions',
      desc: 'Fine-tuned LLMs, automated WhatsApp & email outreach bots, intelligent customer support agents, and predictive workflow automation.',
      icon: '🧠',
      badge: 'High Impact'
    },
    {
      title: 'Performance Marketing & GEO / AI-SEO',
      desc: 'Optimized for traditional Google Search AND AI search engines (ChatGPT, Perplexity, Gemini). Data-driven conversion funnels that generate client deals.',
      icon: '📈',
      badge: 'Revenue Driven'
    }
  ];

  const featuredProjects = [
    {
      name: 'PulseFlow SaaS Engine',
      category: 'AI Analytics Platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      description: 'Enterprise workflow monitoring platform with generative predictive anomaly detection.'
    },
    {
      name: 'Nexus Health Hub',
      category: 'Automated Medical Ecosystem',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
      description: 'Clinic booking engine and automated WhatsApp consultation pipeline built for top Pune practitioners.'
    }
  ];

  const faqsPreview = [
    {
      q: 'How fast can NextGen AI build our SaaS or AI software?',
      a: 'Most MVP platforms and custom automation pipelines are delivered within 3 to 6 weeks, complete with production testing and deployment.'
    },
    {
      q: 'Do you provide maintenance and scaling support post-launch?',
      a: 'Yes. We offer continuous DevOps, model fine-tuning, security patches, and conversion rate optimization to scale alongside your business growth.'
    },
    {
      q: 'How does Generative Engine Optimization (GEO) help my brand?',
      a: 'GEO structures your website data with neural schemas so generative AI tools (like ChatGPT, Perplexity, and Google AI Overviews) recommend you first when customers ask questions.'
    }
  ];

  return (
    <div className="w-full flex flex-col bg-background text-textPrimary relative">
      {/* GSAP Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] bg-transparent pointer-events-none">
        <div 
          ref={progressRef}
          className="h-full w-full bg-gradient-to-r from-[#00d8ff] via-[#7621B0] to-[#B600A8] origin-left scale-x-0 shadow-[0_0_12px_#00d8ff]"
        />
      </div>

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Marquee */}
      <MarqueeSection />

      {/* 3. Vision & Philosophy */}
      <VisionSection />

      {/* 4. Core Services Overview */}
      <section className="py-24 px-6 sm:px-12 lg:px-20 bg-background relative border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <FadeIn delay={0.1} y={20} className="flex flex-col gap-3 max-w-2xl">
              <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">Core Capabilities</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Engineering intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8ff] to-[#7621B0]">digital ecosystems</span>.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} y={20}>
              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-[#00d8ff] hover:text-white transition-colors group"
              >
                VIEW ALL SERVICES
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCards.map((card, i) => (
              <FadeIn key={card.title} delay={0.15 + i * 0.1} y={30}>
                <div className="h-full p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00d8ff]/40 transition-all flex flex-col justify-between group">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-3xl">{card.icon}</span>
                      <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-white/5 text-white/70 border border-white/10">
                        {card.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00d8ff] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/5">
                    <Link to="/services" className="text-xs uppercase tracking-wider text-white/50 hover:text-white transition-colors flex items-center gap-1.5">
                      Explore Deliverables <span>→</span>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials & Social Proof */}
      <TestimonialsSection />

      {/* 6. Featured Projects Teaser */}
      <section className="py-24 px-6 sm:px-12 lg:px-20 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <FadeIn delay={0.1} y={20} className="flex flex-col gap-3 max-w-2xl">
              <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">Featured Work</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Battle-tested software <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00d8ff]">deployed in the wild</span>.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} y={20}>
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-[#00d8ff] hover:text-white transition-colors group"
              >
                VIEW FULL PORTFOLIO
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((p, i) => (
              <FadeIn key={p.name} delay={0.15 + i * 0.15} y={30}>
                <Link to="/projects" className="group block rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all">
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#00d8ff] border border-white/10">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#00d8ff] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed font-light">
                      {p.description}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Quick FAQ Preview */}
      <section className="py-24 px-6 sm:px-12 lg:px-20 bg-background border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <FadeIn delay={0.1} y={20} className="flex flex-col gap-2">
              <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">Common Inquiries</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Frequently Asked Questions
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} y={20}>
              <Link to="/faq" className="text-sm font-semibold text-[#00d8ff] hover:text-white transition-colors">
                View all FAQs & Answers →
              </Link>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-4">
            {faqsPreview.map((faq, i) => (
              <FadeIn key={i} delay={0.15 + i * 0.1} y={20}>
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col gap-2">
                  <h4 className="text-base sm:text-lg font-semibold text-white">{faq.q}</h4>
                  <p className="text-white/60 text-sm leading-relaxed font-light">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Conversion CTA Block */}
      <section className="py-24 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-[#0C0C0C] to-[#12051E] relative overflow-hidden border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 relative z-10">
          <FadeIn delay={0.1} y={30} className="flex flex-col items-center gap-4">
            <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">Initiate Transformation</span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Ready to engineer your next <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8ff] to-[#B600A8]">growth leap</span>?
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl font-light">
              Whether you need an MVP built in 30 days, an automated client acquisition engine, or complete enterprise AI integration—let’s talk.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} y={20} className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/contact"
              className="px-10 py-4 rounded-full text-base font-semibold tracking-wider text-black bg-white hover:bg-gray-100 transition-all shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:scale-105"
            >
              SCHEDULE A CALL
            </Link>
            <a
              href="https://wa.me/917385750187?text=Hi%20NextGen%20AI!%20I'm%20interested%20in%20discussing%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full text-base font-semibold tracking-wider text-[#25D366] bg-white hover:bg-gray-100 transition-all shadow-[0_0_25px_rgba(37,211,102,0.2)] hover:scale-105 flex items-center gap-2"
            >
              CHAT ON WHATSAPP
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
