import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';

export const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Precision Over Bloat',
      desc: 'We don’t believe in 6-month discovery phases with bloated slide decks. We write high-impact, modular code and ship production-ready systems fast.'
    },
    {
      title: 'Generative Intelligence by Default',
      desc: 'Every tool we build is infused with AI capabilities—from automated data pipelines to fine-tuned conversational models and automated client outreach.'
    },
    {
      title: 'Complete Radical Transparency',
      desc: 'Zero hidden retainers or confusing jargon. Direct communication, clean Git repositories, and clear milestones from concept to launch.'
    },
    {
      title: 'Local Rooted, Globally Capable',
      desc: 'Proudly headquartered in Pune, Maharashtra, serving local businesses looking to dominate their market while partnering with startups globally.'
    }
  ];

  const techArsenal = [
    { category: 'Frontend & 3D', techs: ['React 19', 'TypeScript', 'Three.js / React Three Fiber', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'AI & Machine Learning', techs: ['OpenAI GPT-4o', 'Google Gemini 1.5/2.0', 'LangChain', 'Llama 3 / Groq', 'PyTorch'] },
    { category: 'Backend & Cloud', techs: ['Node.js', 'Python / FastAPI', 'PostgreSQL / Supabase', 'Docker', 'Vercel Serverless'] },
    { category: 'Automation & Growth', techs: ['WhatsApp Cloud API', 'Make / n8n', 'Automated Scraping', 'Generative Engine Optimization (GEO)'] }
  ];

  return (
    <div className="w-full min-h-screen bg-background text-textPrimary pt-28 pb-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#7621B0]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00d8ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-24 relative z-10">
        {/* Header */}
        <FadeIn delay={0.1} y={30} className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#00d8ff]" />
            <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">About NextGen AI</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            We engineer the software that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8ff] via-white to-[#7621B0]">modern businesses need</span> to win.
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light mt-2">
            Founded and led by <strong>Harsh Kumar Singh</strong>, NextGen AI was born from a singular conviction: traditional development agencies move too slowly, charge too much, and build software without considering actual business growth.
          </p>
        </FadeIn>

        {/* Founder & Narrative Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <FadeIn delay={0.2} y={30} className="md:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 p-2 bg-gradient-to-b from-white/10 to-transparent">
              <div className="w-full h-96 rounded-xl bg-gradient-to-br from-[#18011F] via-[#0C0C0C] to-[#031d2e] flex flex-col items-center justify-center border border-white/5 relative overflow-hidden group">
                <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl font-black text-white/40 tracking-wider shadow-inner group-hover:border-[#00d8ff]/40 group-hover:text-[#00d8ff] transition-all">
                  HKS
                </div>
                <span className="mt-4 text-xs tracking-[0.2em] uppercase text-white/30 font-medium">Founder & Leadership</span>
              </div>
              <div className="p-4 flex flex-col">
                <span className="text-white font-bold text-lg">Harsh Kumar Singh</span>
                <span className="text-[#00d8ff] text-xs uppercase tracking-wider">Founder & Chief Architect</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} y={30} className="md:col-span-7 flex flex-col gap-6 text-white/70 text-base sm:text-lg font-light leading-relaxed">
            <p>
              We sit at the bleeding edge of artificial intelligence, high-performance web development, and hyper-targeted digital growth. While most agencies still rely on cookie-cutter templates, we engineer bespoke SaaS architectures and autonomous AI agents designed to generate quantifiable revenue.
            </p>
            <p>
              From helping local Pune clinics and firms establish dominant market presence to architecting cloud software for international startups, our mission is to eliminate operational friction and unlock unstoppable growth.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold text-white/80">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">📍 Pune, Maharashtra</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">🚀 100% Production Grade</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">🤖 Generative AI Pioneers</span>
            </div>
          </FadeIn>
        </div>

        {/* Core Principles */}
        <div className="flex flex-col gap-8">
          <FadeIn delay={0.1} y={20}>
            <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">How We Operate</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
              Our Core Operating Principles
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={0.15 + i * 0.1} y={20}>
                <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-3 h-full hover:border-[#00d8ff]/30 transition-colors">
                  <h3 className="text-xl font-bold text-white">{v.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed font-light">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Tech Stack Arsenal */}
        <div className="flex flex-col gap-8">
          <FadeIn delay={0.1} y={20}>
            <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">Our Engine</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
              The Technology Arsenal
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techArsenal.map((t, i) => (
              <FadeIn key={t.category} delay={0.15 + i * 0.1} y={20}>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col gap-4 h-full">
                  <h4 className="text-sm uppercase font-bold tracking-wider text-[#00d8ff]">{t.category}</h4>
                  <ul className="flex flex-col gap-2">
                    {t.techs.map(tech => (
                      <li key={tech} className="text-sm text-white/70 font-light flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7621B0]" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <FadeIn delay={0.2} y={30} className="p-10 rounded-2xl bg-gradient-to-r from-white/[0.06] to-white/[0.02] border border-white/15 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-white">Have a vision for your business?</h3>
            <p className="text-white/60 text-sm">Let’s discuss architecture, pricing, and timelines today.</p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider text-black bg-white hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap"
          >
            START A PROJECT
          </Link>
        </FadeIn>
      </div>
    </div>
  );
};
