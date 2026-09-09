import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Mail } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'AI & Tech',
    question: 'How does NextGen AI integrate artificial intelligence into my existing business?',
    answer: 'We audit your manual workflows, customer communication channels, and databases to identify bottlenecks. Then, we engineer custom AI solutions—such as automated WhatsApp and email SDR bots, RAG-powered knowledge base assistants, or predictive decision models—that plug directly into your current tech stack via secure APIs.'
  },
  {
    category: 'AI & Tech',
    question: 'What is Generative Engine Optimization (GEO) and how does it differ from traditional SEO?',
    answer: 'Traditional SEO focuses on ranking in Google search result links through keywords and backlinks. Generative Engine Optimization (GEO) is the modern evolution: we structure your web architecture with neural JSON-LD knowledge schemas and semantic entities so AI engines like ChatGPT, Google Gemini, and Perplexity actively cite and recommend NextGen AI when prospective clients ask questions.'
  },
  {
    category: 'SaaS & Development',
    question: 'What tech stack do you use for SaaS and web application development?',
    answer: 'We build with modern, production-hardened technologies: React 19, TypeScript, Next.js, Tailwind CSS, Three.js (for WebGL 3D graphics), Node.js, Python FastAPI, PostgreSQL (Supabase), and Docker. This ensures lightning-fast performance, rock-solid security, and effortless horizontal scaling.'
  },
  {
    category: 'SaaS & Development',
    question: 'Do you build custom mobile apps as well as web applications?',
    answer: 'Yes. We engineer cross-platform iOS and Android applications using React Native and Flutter, sharing backend APIs and database schemas with your web dashboard to minimize development cost and maximize maintenance velocity.'
  },
  {
    category: 'Pricing & Timelines',
    question: 'How much does it cost to build a custom SaaS or AI solution?',
    answer: 'Pricing is transparent and project-based depending on complexity, features, and integrations. A focused MVP typically starts in a modular tier, while full-scale multi-tenant enterprise platforms are scoped through custom milestone contracts. We never charge surprise recurring fees.'
  },
  {
    category: 'Pricing & Timelines',
    question: 'What is your typical project delivery timeline?',
    answer: 'Most high-impact web architectures and targeted AI automation workflows are delivered within 2 to 4 weeks. Full-scale SaaS platforms generally ship in 4 to 8 weeks with complete staging, QA, and security validation.'
  },
  {
    category: 'Local & Support',
    question: 'Are you based in Pune? Can we meet in person to discuss our project?',
    answer: 'Yes! NextGen AI is headquartered in Pune, Maharashtra. We regularly meet clients across Baner, Viman Nagar, Hinjewadi, Kalyani Nagar, and Kharadi for in-person strategy sessions and architecture reviews, while collaborating with international partners remotely via Zoom and WhatsApp.'
  },
  {
    category: 'Local & Support',
    question: 'What happens after our website or software is launched?',
    answer: 'We don’t abandon you upon launch. Every contract includes post-launch monitoring, bug resolution, hosting setup, and automated database backups. We also provide ongoing monthly growth retainers for continuous feature iterations and marketing optimization.'
  }
];

export const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const categories = ['All', 'AI & Tech', 'SaaS & Development', 'Pricing & Timelines', 'Local & Support'];

  const filteredFaqs = activeCategory === 'All'
    ? faqs
    : faqs.filter(f => f.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-background text-textPrimary pt-28 pb-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      {/* Schema Markup for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.answer
            }
          }))
        })
      }} />

      {/* Background glow */}
      <div className="absolute top-24 left-1/3 w-[500px] h-[500px] bg-[#00d8ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Header */}
        <FadeIn delay={0.1} y={30} className="flex flex-col gap-4 text-center items-center">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#00d8ff]" />
            <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">Knowledge & Answers</span>
            <span className="w-8 h-[1px] bg-[#00d8ff]" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8ff] to-[#7621B0]">Questions</span>.
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl font-light">
            Everything you need to know about our engineering standards, AI workflows, pricing models, and how we scale businesses.
          </p>
        </FadeIn>

        {/* Category Pills */}
        <FadeIn delay={0.2} y={20} className="flex flex-wrap justify-center gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIdx(null);
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                  : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <FadeIn key={faq.question} delay={0.1 + idx * 0.05} y={15}>
                <div 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-white/[0.05] border-[#00d8ff]/40 shadow-[0_0_20px_rgba(0,216,255,0.05)]' 
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-[#00d8ff] flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 text-white/70 text-sm sm:text-base leading-relaxed font-light border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <FadeIn delay={0.3} y={30} className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-white/[0.06] to-white/[0.02] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Have a specific question not listed here?</h3>
            <p className="text-white/60 text-sm font-light">
              Connect directly with our engineering team on WhatsApp or email.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/917385750187?text=Hi%20NextGen%20AI!%20I%20have%20a%20question%20regarding%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-[#25D366] bg-white hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Send an Email
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
