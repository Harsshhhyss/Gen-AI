import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, CheckCircle2, Code2, Layers, Database, ShieldCheck } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export const SoftwareDevelopmentPunePage: React.FC = () => {
  const offerings = [
    {
      title: 'Full-Stack SaaS Application Development',
      desc: 'Scalable multi-tenant cloud software with automated billing, user roles, real-time analytics, and high-concurrency database schemas.',
      icon: Layers
    },
    {
      title: 'Custom Web & Mobile Application Engineering',
      desc: 'High-speed React, Next.js, and React Native mobile apps engineered for seamless UX, zero downtime, and instant page loads.',
      icon: Code2
    },
    {
      title: 'Database Architecture & Cloud DevOps',
      desc: 'PostgreSQL, Supabase, Redis caching, and automated Docker CI/CD deployments configured for enterprise-grade security and reliability.',
      icon: Database
    },
    {
      title: 'Legacy Software Modernization & APIs',
      desc: 'Migrate slow legacy systems into modular cloud microservices. Connect third-party APIs, payments, and messaging gateways seamlessly.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="w-full min-h-screen bg-background text-textPrimary pt-28 pb-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Custom Software Development",
          "provider": {
            "@type": "LocalBusiness",
            "name": "NextGen AI",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "telephone": "+91-7385750187",
            "url": "https://www.getnextgen.in/software-development-pune"
          },
          "areaServed": ["Pune", "Hinjewadi", "Baner", "Viman Nagar", "Kharadi", "Maharashtra"]
        })
      }} />

      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-[#7621B0]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-20 relative z-10">
        <FadeIn delay={0.1} y={30} className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#00d8ff]" />
            <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">Custom Software Engineering in Pune</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Top-Tier <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8ff] via-white to-[#7621B0]">Custom Software & SaaS</span> Development in Pune.
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light mt-2">
            We architect and build production-grade web applications, bespoke business software, and enterprise SaaS platforms in weeks, not quarters. No outsourcing, no bloated retainers—just elite software engineering delivered on-time.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider text-black bg-white hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
            >
              REQUEST A SOFTWARE SCOPE & QUOTE
            </Link>
            <a
              href="https://wa.me/917385750187?text=Hi%20NextGen%20AI!%20I%20need%20custom%20software%20development%20in%20Pune."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider text-[#25D366] bg-white hover:bg-gray-100 transition-all flex items-center gap-2 shadow-md hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              TALK ON WHATSAPP
            </a>
          </div>
        </FadeIn>

        {/* Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.map((o, idx) => {
            const Icon = o.icon;
            return (
              <FadeIn key={o.title} delay={0.15 + idx * 0.1} y={20}>
                <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00d8ff]/40 transition-all flex flex-col gap-4 h-full">
                  <div className="p-3 rounded-xl bg-[#7621B0]/15 text-[#00d8ff] w-fit border border-[#7621B0]/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{o.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed font-light">{o.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Why NextGen AI */}
        <FadeIn delay={0.2} y={30}>
          <div className="p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 flex flex-col gap-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Why Pune Businesses Choose NextGen AI</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-2">
              <div className="flex flex-col gap-2">
                <span className="text-[#00d8ff] font-bold text-base flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> 100% Code Ownership
                </span>
                <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                  You own all Git repositories, IP, and design files from the day we start.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[#00d8ff] font-bold text-base flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Rapid Sprint Cycles
                </span>
                <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                  Weekly production deployments so you test live software every single Friday.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[#00d8ff] font-bold text-base flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Direct Architect Access
                </span>
                <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                  Communicate directly with founder Harsh Kumar Singh without middleman account managers.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
