import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';

export const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'saas',
      number: '01',
      title: 'Full-Scale SaaS Architecture',
      badge: 'Software Engineering',
      tagline: 'From napkin idea to enterprise-grade, multi-tenant cloud software.',
      description: 'We engineer high-performance Software-as-a-Service platforms built for extreme concurrency, high availability, and effortless scaling. We handle everything from secure authentication and automated Stripe/Razorpay billing to real-time analytics and intuitive microfrontends.',
      deliverables: [
        'Multi-Tenant Cloud Backend & API Architecture',
        'High-Speed Modern React / Next.js Web Interface',
        'Automated Subscription Billing & Invoice Pipelines',
        'Role-Based Access Control (RBAC) & Security Hardening',
        'Zero-Downtime CI/CD & Automated Cloud Deployment'
      ],
      tech: ['React 19', 'TypeScript', 'Node / Python', 'PostgreSQL', 'Vercel / AWS']
    },
    {
      id: 'ai',
      number: '02',
      title: 'Autonomous AI Agents & Intelligent Solutions',
      badge: 'Artificial Intelligence',
      tagline: 'Harness LLMs and neural models to automate mission-critical operations.',
      description: 'We build custom AI agents that work 24/7 inside your business. From context-aware customer service copilots that resolve inquiries in seconds to autonomous prospecting bots that scrape leads, write hyper-personalized pitches, and send follow-ups automatically.',
      deliverables: [
        'Custom RAG (Retrieval-Augmented Generation) Chatbots',
        'Autonomous WhatsApp & Email Lead Generation Agents',
        'Document Parsing & Automated Data Extraction Pipelines',
        'Voice & Conversational AI Workflows',
        'Proprietary Fine-Tuned Local & Cloud Models'
      ],
      tech: ['Google Gemini', 'OpenAI GPT-4o', 'LangChain', 'Llama 3', 'Pinecone / pgvector']
    },
    {
      id: 'geo',
      number: '03',
      title: 'Performance Marketing & GEO / AI-SEO',
      badge: 'Growth Engine',
      tagline: 'Rank #1 in Google Search AND get recommended by ChatGPT, Gemini & Perplexity.',
      description: 'Search has fundamentally shifted. Traditional keyword stuffing no longer works. We optimize your digital presence for Answer Engines and Generative AI models using structured JSON-LD neural schemas, high-intent local packs, and conversion-optimized landing funnels.',
      deliverables: [
        'Generative Engine Optimization (GEO) & Schema Architecture',
        'Local SEO & Google Business Profile Domination (Pune & India)',
        'High-Converting Meta & Google Ads Funnel Architecture',
        'Technical Site Audits & Web Core Vitals Acceleration',
        'Automated Lead Nurturing & Retargeting Pipelines'
      ],
      tech: ['JSON-LD', 'Google Search Console', 'Meta Ads', 'Google Ads', 'GA4']
    },
    {
      id: 'automation',
      number: '04',
      title: 'End-to-End Workflow & Business Automation',
      badge: 'Operational Efficiency',
      tagline: 'Eliminate repetitive manual tasks and save 30+ hours of team effort weekly.',
      description: 'We connect your CRM, messaging apps, email, and spreadsheets into a self-driving digital machine. Invoices are generated automatically, appointments are confirmed without human input, and client data flows seamlessly across your tech stack.',
      deliverables: [
        'Custom WhatsApp Business API Automated Workflows',
        'CRM & Lead Pipeline Integrations (HubSpot, Notion, Sheets)',
        'Automated Invoicing, Receipts & Payment Follow-ups',
        'Cross-Platform Webhook & API Middleware',
        'Internal Team Alerts & Escalation Bots (Slack / Telegram)'
      ],
      tech: ['n8n', 'Make.com', 'Python Scripts', 'WhatsApp Cloud API', 'REST APIs']
    },
    {
      id: 'design',
      number: '05',
      title: 'Brand Identity & High-Conversion UI/UX',
      badge: 'Visual Design',
      tagline: 'Interfaces that captivate attention and turn casual visitors into closed deals.',
      description: 'A great product fails if the design looks outdated or confusing. We craft bespoke visual identities, sleek glassmorphic interfaces, interactive 3D WebGL scenes, and conversion-engineered checkout flows that build instant authority.',
      deliverables: [
        'Comprehensive Design Systems & Component Libraries',
        'Interactive 3D WebGL / Three.js Canvas Visualizations',
        'Mobile-First Responsive Layouts & Micro-Interactions',
        'Conversion Rate Optimization (CRO) UX Audits',
        'Full Brand Identity, Logo, & Typography Guidelines'
      ],
      tech: ['Figma', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'Radix UI']
    }
  ];

  return (
    <div className="w-full min-h-screen bg-background text-textPrimary pt-28 pb-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00d8ff]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-20 relative z-10">
        {/* Header */}
        <FadeIn delay={0.1} y={30} className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#00d8ff]" />
            <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">Specialized Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Comprehensive solutions engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8ff] via-white to-[#7621B0]">exponential growth</span>.
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light mt-2">
            We don’t do generic web development. We build full-stack digital assets—from intelligent SaaS software to autonomous AI agents and performance customer acquisition pipelines.
          </p>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col gap-12">
          {services.map((service, idx) => (
            <FadeIn key={service.id} delay={0.15 + idx * 0.1} y={30}>
              <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-[#00d8ff]/40 transition-all duration-300 flex flex-col lg:flex-row gap-10 justify-between">
                {/* Left col */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-[#00d8ff]">{service.number}</span>
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-white/5 text-white/80 border border-white/10">
                      {service.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-[#00d8ff] text-sm sm:text-base font-medium">
                    {service.tagline}
                  </p>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light mt-2">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.tech.map(t => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-white/60 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right col: Deliverables */}
                <div className="lg:w-96 flex flex-col justify-between p-6 rounded-2xl bg-black/40 border border-white/5">
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/50">Core Deliverables</span>
                    <ul className="flex flex-col gap-2.5">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="text-xs sm:text-sm text-white/80 flex items-start gap-2.5 font-light">
                          <span className="text-[#25D366] font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10">
                    <Link
                      to="/contact"
                      className="w-full py-2.5 px-4 rounded-full text-center text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-gray-100 transition-colors block"
                    >
                      Request Proposal
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.2} y={30} className="p-10 rounded-2xl bg-gradient-to-r from-[#7621B0]/20 to-[#00d8ff]/10 border border-white/15 text-center flex flex-col items-center gap-6">
          <h3 className="text-3xl font-bold text-white">Need a customized engineering package?</h3>
          <p className="text-white/70 text-base max-w-xl font-light">
            We architect tailored solutions combining custom SaaS development, automated AI outreach, and local market domination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider text-black bg-white hover:bg-gray-100 transition-all shadow-lg"
            >
              BOOK TECHNICAL DISCOVERY
            </Link>
            <a
              href="https://wa.me/917385750187?text=Hi%20NextGen%20AI!%20I'd%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider text-[#25D366] bg-white hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
            >
              CHAT ON WHATSAPP
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
