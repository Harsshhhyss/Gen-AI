import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, TrendingUp, Search, Target, Megaphone } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export const DigitalMarketingPunePage: React.FC = () => {
  const pillars = [
    {
      title: 'Generative Engine Optimization (GEO)',
      desc: 'Rank on Google Search AND get recommended by ChatGPT, Google Gemini, and Perplexity when high-intent local clients search for solutions.',
      icon: Search
    },
    {
      title: 'Performance Meta & Google Ads Funnels',
      desc: 'High-converting paid advertising funnels built with razor-sharp audience targeting in Pune and across India that generate verified sales calls.',
      icon: Target
    },
    {
      title: 'Local SEO & Google Business Profile Domination',
      desc: 'Top 3 ranking in Google Maps local pack across Viman Nagar, Baner, Hinjewadi, and Kharadi to capture clients searching "near me".',
      icon: TrendingUp
    },
    {
      title: 'B2B Social Media Growth & Inbound Content',
      desc: 'Turn your founders and business brand into industry authorities on LinkedIn and Instagram with high-retention technical content.',
      icon: Megaphone
    }
  ];

  return (
    <div className="w-full min-h-screen bg-background text-textPrimary pt-28 pb-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Digital Marketing & Generative Engine Optimization",
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
            "url": "https://www.getnextgen.in/digital-marketing-pune"
          },
          "areaServed": ["Pune", "Hinjewadi", "Baner", "Viman Nagar", "Kharadi", "Maharashtra"]
        })
      }} />

      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[#00d8ff]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-20 relative z-10">
        <FadeIn delay={0.1} y={30} className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#00d8ff]" />
            <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">Performance Digital Marketing in Pune</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Next-Generation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8ff] via-white to-[#7621B0]">Digital Marketing & GEO</span> Agency in Pune.
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light mt-2">
            Move beyond vanity metrics and generic agency retainers. NextGen AI engineers data-driven customer acquisition systems that dominate Google Local Maps and get cited inside AI search engines.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider text-black bg-white hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
            >
              REQUEST A GROWTH AUDIT
            </Link>
            <a
              href="https://wa.me/917385750187?text=Hi%20NextGen%20AI!%20I'm%20looking%20for%20digital%20marketing%20services%20in%20Pune."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider text-[#25D366] bg-white hover:bg-gray-100 transition-all flex items-center gap-2 shadow-md hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              TALK ON WHATSAPP
            </a>
          </div>
        </FadeIn>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <FadeIn key={p.title} delay={0.15 + idx * 0.1} y={20}>
                <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00d8ff]/40 transition-all flex flex-col gap-4 h-full">
                  <div className="p-3 rounded-xl bg-[#00d8ff]/10 text-[#00d8ff] w-fit border border-[#00d8ff]/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed font-light">{p.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.2} y={30} className="p-10 rounded-2xl bg-[#0C0C0C] border border-white/10 text-center flex flex-col items-center gap-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to dominate Pune search results and scale client leads?</h3>
          <p className="text-white/70 text-sm sm:text-base max-w-xl font-light">
            We will conduct a free digital presence and SEO/GEO audit of your current business and show you exactly where you are losing deals to competitors.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider text-black bg-white hover:bg-gray-100 transition-all shadow-lg"
          >
            CLAIM FREE DIGITAL GROWTH AUDIT
          </Link>
        </FadeIn>
      </div>
    </div>
  );
};
