import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  MessageCircle, 
  X, 
  Zap, 
  Cpu, 
  Laptop
} from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

interface JobRole {
  id: string;
  title: string;
  department: 'Engineering' | 'AI & ML' | 'Design & Creative' | 'Marketing & Growth';
  type: string;
  location: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  techStack: string[];
}

const jobOpenings: JobRole[] = [
  {
    id: 'full-stack-ai-engineer',
    title: 'Full-Stack AI Engineer',
    department: 'Engineering',
    type: 'Full-Time',
    location: 'Pune / Remote',
    experience: '1 - 3 Years',
    description: 'Lead the architecture and implementation of AI-infused web applications, SaaS dashboards, and serverless backend systems for our enterprise clients.',
    responsibilities: [
      'Build ultra-responsive, sleek frontend interfaces using React 19, TypeScript, and Tailwind CSS.',
      'Architect robust backend services and serverless functions using Node.js and Python / FastAPI.',
      'Integrate OpenAI, Google Gemini, and Anthropic APIs with streaming responses and resilient failover.',
      'Collaborate directly with Founder Harsh Kumar Singh on rapid prototyping and production deployments.'
    ],
    requirements: [
      'Strong proficiency in TypeScript, React, and modern CSS frameworks.',
      'Experience with RESTful APIs, database design (PostgreSQL / Supabase), and cloud deployment (Vercel / AWS).',
      'Hands-on experience calling and orchestrating LLM APIs and prompt engineering.',
      'A bias for clean architecture, self-direction, and shipping quickly.'
    ],
    techStack: ['React 19', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'PostgreSQL', 'Vercel']
  },
  {
    id: 'autonomous-agents-architect',
    title: 'Autonomous AI Agents & LLM Architect',
    department: 'AI & ML',
    type: 'Full-Time',
    location: 'Remote / Pune',
    experience: '1 - 4 Years',
    description: 'Design and deploy multi-agent autonomous workflows, advanced retrieval-augmented generation (RAG) pipelines, and fine-tuned open-source models.',
    responsibilities: [
      'Develop stateful multi-agent systems using LangChain, LangGraph, or custom agentic loops.',
      'Implement high-precision RAG architectures with vector embeddings, semantic re-ranking, and caching.',
      'Evaluate, benchmark, and deploy open-weight models (Llama 3, DeepSeek, Mistral) on cloud inference endpoints.',
      'Design safety guardrails, structured JSON outputs, and automated workflow orchestrations.'
    ],
    requirements: [
      'Solid programming background in Python with deep understanding of asynchronous execution.',
      'Practical experience with vector databases (Pinecone, Qdrant, Chroma) and embedding models.',
      'Familiarity with function-calling, tool-use agents, and prompt optimization techniques.',
      'Curiosity to test and integrate newly released research models within 24 hours of launch.'
    ],
    techStack: ['Python', 'LangChain', 'LlamaIndex', 'Pinecone', 'OpenAI o3/GPT-4o', 'DeepSeek', 'FastAPI']
  },
  {
    id: 'ui-ux-creative-developer',
    title: 'UI/UX Designer & Creative Frontend Developer',
    department: 'Design & Creative',
    type: 'Full-Time',
    location: 'Pune (Hybrid) / Remote',
    experience: '1 - 3 Years',
    description: 'Craft mesmerizing, modern dark-aesthetic interfaces with fluid GSAP animations, Framer Motion transitions, and pixel-perfect design systems.',
    responsibilities: [
      'Design comprehensive Figma mockups, interactive prototypes, and high-fidelity component libraries.',
      'Translate design tokens into production-ready React components with zero aesthetic compromise.',
      'Build engaging scroll-scrub animations, micro-interactions, and 3D / canvas-based visual effects.',
      'Ensure strict mobile responsiveness, lightning-fast Core Web Vitals, and WCAG accessibility.'
    ],
    requirements: [
      'A jaw-dropping portfolio demonstrating mastery of modern web aesthetics and typography.',
      'Proficiency in Figma, Tailwind CSS, Framer Motion, and GSAP.',
      'Experience building responsive web apps in React and TypeScript.',
      'An obsession with details—easing curves, spatial rhythm, glassmorphic glows, and performance.'
    ],
    techStack: ['Figma', 'React', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'TypeScript']
  },
  {
    id: 'geo-performance-marketer',
    title: 'Performance Marketing & GEO / AI-SEO Specialist',
    department: 'Marketing & Growth',
    type: 'Full-Time',
    location: 'Remote / Pune',
    experience: '1 - 3 Years',
    description: 'Lead our client acquisition funnels and pioneer Generative Engine Optimization (GEO) to rank NextGen AI and our clients in ChatGPT, Perplexity, and Google.',
    responsibilities: [
      'Formulate and execute Generative Engine Optimization (GEO) strategies to capture AI recommendation queries.',
      'Manage and optimize high-ROI PPC campaigns across Google Ads, LinkedIn, and Meta Ads.',
      'Produce technical case studies, landing page copy, and conversion-rate optimization (CRO) experiments.',
      'Track full-funnel attribution from organic AI mentions to closed enterprise deals.'
    ],
    requirements: [
      'Demonstrated track record in B2B tech marketing, performance advertising, or technical SEO.',
      'Clear understanding of AI search engines (Perplexity, SearchGPT, Google AI Overviews).',
      'Strong analytical mindset with proficiency in Google Analytics 4, Search Console, and ad managers.',
      'Exceptional copywriting skills for technical, enterprise-grade buyers.'
    ],
    techStack: ['Google Ads', 'Meta Ads', 'GA4', 'GEO Frameworks', 'Search Console', 'Ahrefs / Semrush']
  },
  {
    id: 'ai-software-intern',
    title: 'Software & AI Engineering Intern',
    department: 'Engineering',
    type: 'Internship (Paid)',
    location: 'Pune / Remote',
    experience: 'Freshers / College Students',
    description: 'A high-velocity, hands-on paid internship writing production code, testing autonomous agents, and shipping customer-facing features from week one.',
    responsibilities: [
      'Assist senior engineers in building full-stack modules and data scrapers.',
      'Write clean, modular unit tests and automate recurring development workflows.',
      'Prototype prompt pipelines and test agentic capabilities on real-world datasets.',
      'Participate in code reviews and architecture design brainstorms with founder Harsh.'
    ],
    requirements: [
      'Foundational programming skills in JavaScript/TypeScript or Python.',
      'Working knowledge of Git, GitHub, and basic web technologies (HTML/CSS/JS).',
      'Self-driven learner who builds projects outside of coursework and plays with AI tools.',
      'Enrolled in or recent graduate of Computer Science / Engineering or equivalent self-taught portfolio.'
    ],
    techStack: ['JavaScript', 'TypeScript', 'Python', 'React', 'Git', 'REST APIs']
  }
];

export const CareersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedJob, setSelectedJob] = useState<JobRole | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Application Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '1 - 2 Years',
    portfolioUrl: '',
    coverNote: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const departments = ['All', 'Engineering', 'AI & ML', 'Design & Creative', 'Marketing & Growth'];

  const filteredJobs = activeTab === 'All' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === activeTab);

  const openApplication = (job?: JobRole) => {
    if (job) {
      setSelectedJob(job);
      setFormData(prev => ({ ...prev, role: job.title }));
    } else {
      setSelectedJob(null);
      setFormData(prev => ({ ...prev, role: 'General / Spontaneous Pitch' }));
    }
    setSubmitted(false);
    setErrorMessage('');
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setApplicationId(result.applicationId || 'NXT-APP-' + Math.floor(Math.random() * 90000 + 10000));
        setSubmitted(true);
      } else {
        setErrorMessage(result.error || 'Failed to submit application. Please reach out to us directly via WhatsApp.');
      }
    } catch (err: unknown) {
      console.error('Error submitting application:', err);
      const msg = err instanceof Error ? err.message : 'Network error';
      setErrorMessage(`Connection issue (${msg}). You can also email your CV to connect@getnextgen.in.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-background text-textPrimary pt-28 pb-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-[#7621B0]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-2/3 left-10 w-96 h-96 bg-[#00d8ff]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-24 relative z-10">
        
        {/* Hero Section */}
        <FadeIn delay={0.1} y={30} className="flex flex-col gap-5 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#00d8ff]" />
            <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">Join NextGen AI</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8ff] via-white to-[#7621B0]">autonomous future</span> with us.
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light">
            We are an engineering-driven AI agency headquartered in Pune, building production-grade autonomous systems, modern SaaS products, and high-impact digital solutions. If you love shipping real code and despise corporate bureaucracy, you belong here.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10">
            <div className="flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-white">100%</span>
              <span className="text-xs text-white/50 uppercase tracking-wider">Code Ownership</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-[#00d8ff]">Remote</span>
              <span className="text-xs text-white/50 uppercase tracking-wider">+ Pune Hub</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-[#7621B0]">Top-Tier</span>
              <span className="text-xs text-white/50 uppercase tracking-wider">AI Tooling Budget</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-[#25D366]">0%</span>
              <span className="text-xs text-white/50 uppercase tracking-wider">Corporate Fluff</span>
            </div>
          </div>
        </FadeIn>

        {/* Culture & Engineering Values */}
        <div className="flex flex-col gap-10">
          <FadeIn delay={0.15} y={20} className="flex flex-col gap-2">
            <span className="text-xs text-[#00d8ff] uppercase tracking-[0.2em] font-semibold">Our Culture</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Why engineers and builders thrive here.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.2} y={20} className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00d8ff]/30 transition-all flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00d8ff]/10 border border-[#00d8ff]/20 flex items-center justify-center text-[#00d8ff]">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Frontier AI Engineering</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                No mockups that gather dust. You will build and deploy real multi-agent architectures, RAG pipelines, fine-tuned models, and high-load web systems used by actual paying customers.
              </p>
            </FadeIn>

            <FadeIn delay={0.25} y={20} className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#7621B0]/40 transition-all flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#7621B0]/10 border border-[#7621B0]/20 flex items-center justify-center text-[#7621B0]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Radical Autonomy</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                We hire intelligent, ambitious individuals and give them full control over technical decisions. If you have an architectural improvement or a new AI model to test, implement it.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} y={20} className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#25D366]/30 transition-all flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">AI Supercharged Tooling</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                Every team member receives paid access to frontier AI tooling—Cursor Pro, Claude 3.7 Sonnet, OpenAI o3/GPT-4o, and dedicated cloud GPU instances for prototyping.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Benefits & Perks Grid */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-[#00d8ff] uppercase tracking-[0.2em] font-semibold">Perks & Growth</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              What we offer our builders.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-white font-semibold text-base flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d8ff]" />
                Remote-First Flexibility
              </span>
              <p className="text-white/50 text-xs leading-relaxed">
                Work from wherever you are most productive, with optional collaboration hub meetups in Pune.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-white font-semibold text-base flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7621B0]" />
                Performance Milestones
              </span>
              <p className="text-white/50 text-xs leading-relaxed">
                Direct bonuses tied to successful project launches, client milestones, and architectural breakthroughs.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-white font-semibold text-base flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                Founder Mentorship
              </span>
              <p className="text-white/50 text-xs leading-relaxed">
                Direct collaboration and daily pairing with founder Harsh Kumar Singh on enterprise system architecture.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-white font-semibold text-base flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d8ff]" />
                Proof-of-Work Portfolio
              </span>
              <p className="text-white/50 text-xs leading-relaxed">
                Build standout public contributions, open-source modules, and verified live enterprise client case studies.
              </p>
            </div>
          </div>
        </div>

        {/* Active Open Positions Section */}
        <div id="openings" className="flex flex-col gap-8 scroll-mt-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-[#00d8ff] uppercase tracking-[0.2em] font-semibold">Current Opportunities</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Open Positions at NextGen AI
              </h2>
              <p className="text-white/60 text-sm max-w-xl font-light">
                Select a role to review the mission, tech stack, and responsibilities, or pitch us your unique superpower directly.
              </p>
            </div>

            <button
              onClick={() => openApplication()}
              className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-all border border-white/10 flex items-center gap-2"
            >
              <span>Spontaneous Application</span>
              <Sparkles className="w-4 h-4 text-[#00d8ff]" />
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-b border-white/10 pb-4">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveTab(dept)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider transition-all ${
                  activeTab === dept
                    ? 'bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                    : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Openings List */}
          <div className="flex flex-col gap-4">
            {filteredJobs.map((job) => (
              <FadeIn key={job.id} delay={0.1} y={15}>
                <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 transition-all group flex flex-col gap-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00d8ff] transition-colors">
                          {job.title}
                        </h3>
                        <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#00d8ff]/10 text-[#00d8ff] border border-[#00d8ff]/20">
                          {job.department}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 mt-1">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-white/40" />
                          {job.type}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-white/40" />
                          {job.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-white/40" />
                          {job.experience}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => openApplication(job)}
                        className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105"
                      >
                        <span>Apply Now</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm font-light leading-relaxed">
                    {job.description}
                  </p>

                  {/* Responsibilities & Tech Stack preview */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-wider text-white/50 font-semibold">Key Responsibilities</span>
                      <ul className="flex flex-col gap-1.5">
                        {job.responsibilities.slice(0, 3).map((resp, i) => (
                          <li key={i} className="text-xs text-white/70 flex items-start gap-2">
                            <span className="text-[#00d8ff] mt-0.5">›</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-wider text-white/50 font-semibold">Arsenal & Tech Stack</span>
                      <div className="flex flex-wrap gap-2">
                        {job.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/80 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* General Pitch Callout */}
        <FadeIn delay={0.2} y={20}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#18011F] via-[#100318] to-[#041926] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-2 max-w-xl text-center md:text-left">
              <span className="text-[#00d8ff] text-xs uppercase tracking-wider font-semibold">Proof of Work Over Credentials</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Don’t fit cleanly into a job description?</h3>
              <p className="text-white/70 text-sm font-light leading-relaxed">
                If you have built an exceptional AI project, authored high-performing code, or created viral designs, reach out anyway. We always make room for true talent.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => openApplication()}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-gray-100 transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-105"
              >
                Send Direct Pitch
              </button>
              
              <a
                href="https://wa.me/917385750187?text=Hi%20NextGen%20AI!%20I'd%20like%20to%20chat%20about%20career%20opportunities%20with%20your%20team."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-[#25D366] bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Harsh</span>
              </a>
            </div>
          </div>
        </FadeIn>

      </div>

      {/* Interactive Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#121212] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 my-8 overflow-hidden"
            >
              {/* Top Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {submitted ? (
                <div className="py-8 flex flex-col items-center text-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366]">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-bold text-white">Application Dispatched!</h3>
                    <p className="text-[#00d8ff] text-xs font-semibold uppercase tracking-wider">
                      Transmitted to NextGen AI Hiring Pipeline
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="w-full max-w-md bg-black/40 border border-white/10 rounded-2xl p-4 text-left flex flex-col gap-2.5">
                    <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
                      <span className="text-white/50">Target Position</span>
                      <span className="text-white font-medium">{formData.role}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
                      <span className="text-white/50">Candidate Email</span>
                      <span className="text-[#00d8ff] font-mono">{formData.email}</span>
                    </div>
                    {applicationId && (
                      <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
                        <span className="text-white/50">Application ID</span>
                        <span className="text-white/70 font-mono text-[11px]">{applicationId}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
                      <span className="text-white/50">Dossier Routed To</span>
                      <span className="text-white font-mono text-[11px]">connect@getnextgen.in</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/50">Expected Response</span>
                      <span className="text-[#25D366] font-semibold">48 to 72 Hours</span>
                    </div>
                  </div>

                  <p className="text-white/60 text-xs max-w-md font-light">
                    Founder Harsh Kumar Singh and our technical leads will review your portfolio. An acknowledgment has been sent to your email.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mt-2">
                    <a
                      href="https://wa.me/917385750187?text=Hi%20Harsh!%20I%20just%20submitted%20my%20application%20for%20the%20NextGen%20AI%20team."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-xs font-bold tracking-wider uppercase hover:bg-[#25D366]/25 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Followup</span>
                    </a>

                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#00d8ff] text-xs uppercase tracking-wider font-semibold">Candidate Application</span>
                    <h3 className="text-2xl font-bold text-white">
                      {selectedJob ? `Apply for ${selectedJob.title}` : 'Submit Spontaneous Application'}
                    </h3>
                    <p className="text-white/60 text-xs font-light">
                      Send your GitHub, live projects, or resume URL directly to founder Harsh Kumar Singh.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-wider text-white/60 font-medium">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Aditi Kulkarni"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00d8ff] transition-colors placeholder:text-white/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-wider text-white/60 font-medium">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="aditi@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00d8ff] transition-colors placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-wider text-white/60 font-medium">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00d8ff] transition-colors placeholder:text-white/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-wider text-white/60 font-medium">Position *</label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00d8ff] transition-colors"
                      >
                        {jobOpenings.map(j => (
                          <option key={j.id} value={j.title}>{j.title}</option>
                        ))}
                        <option value="General / Spontaneous Pitch">General / Spontaneous Pitch</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-wider text-white/60 font-medium">Experience Level</label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00d8ff] transition-colors"
                      >
                        <option value="Student / Fresher">Student / Fresher</option>
                        <option value="1 - 2 Years">1 - 2 Years</option>
                        <option value="3 - 5 Years">3 - 5 Years</option>
                        <option value="5+ Years (Lead / Senior)">5+ Years (Lead / Senior)</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-wider text-white/60 font-medium">GitHub / Portfolio / Resume Link *</label>
                      <input
                        type="url"
                        required
                        value={formData.portfolioUrl}
                        onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                        placeholder="https://github.com/... or Google Drive"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00d8ff] transition-colors placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-white/60 font-medium">Proof of Work / What have you built? *</label>
                    <textarea
                      rows={3}
                      required
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      placeholder="Highlight a cool project, problem you solved, or why you want to build with NextGen AI..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00d8ff] transition-colors placeholder:text-white/20 resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:scale-105 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
