import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

interface Project {
  number: string;
  client: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  images: {
    col1_1: string;
    col1_2: string;
    col2: string;
  };
  color: string;
  link?: string;
}

const allProjects: Project[] = [
  {
    number: "01",
    client: "Real Estate & Infrastructure",
    name: "Tathastu Infra",
    category: "Web Applications",
    description: "Full-scale property showcase, interactive virtual floorplan explorer, and automated lead capture CRM integration for high-end luxury real estate.",
    tags: ["React", "Tailwind", "Lead Funnel", "SEO"],
    images: {
      col1_1: "/Projects Tathastu.png",
      col1_2: "/Tathastu Shows.png",
      col2: "/tathastu_homepage.jpg"
    },
    color: "#161616",
    link: "https://www.tathastuinfra.in/"
  },
  {
    number: "02",
    client: "Aura Brand Systems",
    name: "Identity & Digital Experience",
    category: "Brand & UI/UX",
    description: "Complete visual identity design, custom typography system, and responsive web interface designed for elevated aesthetic and high brand recall.",
    tags: ["UI/UX Design", "Three.js", "Brand System"],
    images: {
      col1_1: "/project2_1.png",
      col1_2: "/project2_2.png",
      col2: "/project2_3.png"
    },
    color: "#0f0f1c"
  },
  {
    number: "03",
    client: "Solaris Digital Ecosystem",
    name: "Web Experience & Automation",
    category: "AI & Automation",
    description: "Intelligent customer pipeline, dynamic pricing engine, and integrated AI-assisted support bot reducing turnaround times by 80%.",
    tags: ["AI Chatbot", "Automation", "Performance"],
    images: {
      col1_1: "/project3_1.png",
      col1_2: "/project3_2.png",
      col2: "/project3_3.png"
    },
    color: "#0a1710"
  }
];

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Web Applications', 'AI & Automation', 'Brand & UI/UX'];

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div className="w-full min-h-screen bg-background text-textPrimary pt-28 pb-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-[#7621B0]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Header */}
        <FadeIn delay={0.1} y={30} className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#00d8ff]" />
            <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">Portfolio & Case Studies</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Crafted for performance, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8ff] to-[#7621B0]">engineered for impact</span>.
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light mt-2">
            Explore our flagship builds across SaaS platforms, AI-driven automation systems, and high-conversion web architectures.
          </p>
        </FadeIn>

        {/* Filter Pills */}
        <FadeIn delay={0.2} y={20} className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <FadeIn key={project.number} delay={0.15 + idx * 0.1} y={30}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-[#00d8ff]/40 transition-all flex flex-col justify-between"
                style={{ minHeight: '480px' }}
              >
                {/* Image Cover */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/50">
                  <img
                    src={project.images.col1_1}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#00d8ff] border border-white/10">
                      {project.number} // {project.category}
                    </span>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-[#00d8ff] border border-white/10 transition-colors"
                      title="View Live Site"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-widest text-white/50">{project.client}</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#00d8ff] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-white/70 text-sm font-light leading-relaxed mt-1">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(t => (
                        <span key={t} className="text-[11px] px-2.5 py-0.5 rounded bg-white/5 text-white/60">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-[#00d8ff] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      View Gallery →
                    </span>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Modal Image Gallery Portal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl h-[90vh] bg-[#121212] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#181818]/50 backdrop-blur-sm z-10">
                  <div className="flex items-center gap-3">
                    <span className="text-[#00d8ff] font-mono text-sm tracking-wider uppercase font-semibold">
                      {selectedProject.number} //
                    </span>
                    <h3 className="text-white text-lg sm:text-2xl font-bold tracking-tight">
                      {selectedProject.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-white/90 transition-colors shadow-sm"
                      >
                        <span>View Live</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Modal Gallery Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 sm:space-y-8 custom-scrollbar">
                  <div className="flex flex-col gap-2 max-w-2xl">
                    <span className="text-xs uppercase tracking-widest text-[#00d8ff]">{selectedProject.client}</span>
                    <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40">
                      <img
                        src={selectedProject.images.col1_1}
                        alt="Project screenshot 1"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40">
                      <img
                        src={selectedProject.images.col1_2}
                        alt="Project screenshot 2"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40">
                    <img
                      src={selectedProject.images.col2}
                      alt="Project showcase main"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};
