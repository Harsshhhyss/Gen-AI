import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, CheckCircle2, Bot, Cpu, Sparkles, Workflow } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export const AiSolutionsPunePage: React.FC = () => {
  const capabilities = [
    {
      title: 'Custom AI Agents & Autonomous SDRs',
      desc: 'Deploy 24/7 AI agents that proactively prospect local clients, qualify incoming leads on WhatsApp, and schedule calendar appointments autonomously.',
      icon: Bot
    },
    {
      title: 'Enterprise RAG & LLM Integration',
      desc: 'Securely connect private company documentation, ERP data, and customer logs to fine-tuned GPT-4o and Gemini models for instantaneous internal search and insights.',
      icon: Cpu
    },
    {
      title: 'Generative AI Product Development',
      desc: 'Build customer-facing generative applications—from automated image generation and content synthesizers to intelligent voice and conversational assistants.',
      icon: Sparkles
    },
    {
      title: 'Intelligent Process Automation (IPA)',
      desc: 'Connect messy, manual spreadsheets, invoice processing, and CRM updates into fully automated AI pipelines that execute in seconds without errors.',
      icon: Workflow
    }
  ];

  const localHubs = [
    'Hinjewadi IT Park (Phase 1, 2, 3)',
    'Baner & Balewadi Tech Corridor',
    'Viman Nagar & Kalyani Nagar',
    'Kharadi & Magarpatta Cybercity',
    'Kothrud & Senapati Bapat Road',
    'Bhosari & Chakan MIDC Industrial Belts'
  ];

  return (
    <div className="w-full min-h-screen bg-background text-textPrimary pt-28 pb-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      {/* SEO Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "AI Development & Solutions",
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
            "url": "https://www.getnextgen.in/ai-solutions-pune"
          },
          "areaServed": ["Pune", "Hinjewadi", "Baner", "Viman Nagar", "Kharadi", "Maharashtra"]
        })
      }} />

      {/* Radial glow */}
      <div className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-[#00d8ff]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-20 relative z-10">
        {/* Hero */}
        <FadeIn delay={0.1} y={30} className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#00d8ff]" />
            <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">Pune's Leading AI Engineering Partner</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8ff] via-white to-[#7621B0]">AI Solutions & Development</span> Company in Pune.
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light mt-2">
            NextGen AI empowers enterprises, startups, and growing businesses across Pune with custom generative AI solutions, autonomous workflow agents, and enterprise LLM integrations that slash operating costs and multiply revenue.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider text-black bg-white hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105"
            >
              BOOK TECHNICAL AI CONSULTATION
            </Link>
            <a
              href="https://wa.me/917385750187?text=Hi%20NextGen%20AI!%20I'm%20looking%20for%20AI%20solutions%20in%20Pune."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider text-[#25D366] bg-white hover:bg-gray-100 transition-all flex items-center gap-2 shadow-md hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              TALK ON WHATSAPP
            </a>
          </div>
        </FadeIn>

        {/* Capabilities Grid */}
        <div className="flex flex-col gap-8">
          <FadeIn delay={0.1} y={20}>
            <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">Specialized AI Systems</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
              Enterprise-Ready AI Architectures We Deploy in Pune
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeIn key={c.title} delay={0.15 + i * 0.1} y={20}>
                  <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00d8ff]/40 transition-all flex flex-col gap-4 h-full">
                    <div className="p-3 rounded-xl bg-[#00d8ff]/10 text-[#00d8ff] w-fit border border-[#00d8ff]/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{c.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed font-light">{c.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Local Pune Presence Hubs */}
        <FadeIn delay={0.2} y={30}>
          <div className="p-10 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/10 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">Local Reach & In-Person Strategy</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Serving Clients Across Major Pune Hubs</h3>
              <p className="text-white/60 text-sm font-light">
                Our engineering leadership is based in Pune. We host in-person whiteboard and architecture reviews across all major commercial corridors:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
              {localHubs.map((hub, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-white/80 font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                  <span>{hub}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Bottom CTA */}
        <FadeIn delay={0.2} y={20} className="text-center flex flex-col items-center gap-6 p-10 rounded-2xl bg-[#0A0A0A] border border-white/10">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to automate your operations with custom AI?</h3>
          <p className="text-white/70 text-sm sm:text-base max-w-xl font-light">
            Schedule a free 30-minute discovery call with our Pune engineering team. We will identify high-ROI automation opportunities for your specific business.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider text-black bg-white hover:bg-gray-100 transition-all shadow-lg"
          >
            START AN AI PROJECT IN PUNE
          </Link>
        </FadeIn>
      </div>
    </div>
  );
};
