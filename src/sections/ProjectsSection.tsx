import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const projects = [
  {
    number: "01",
    client: "Real Estate Platform",
    name: "Tathastu",
    images: {
      col1_1: "/Projects Tathastu.png",
      col1_2: "/Tathastu Shows.png",
      col2: "/tathastu_homepage.jpg"
    },
    color: "#1A1A1A",
    link: "https://www.tathastuinfra.in/"
  },
  {
    number: "02",
    client: "Aura Brand Identity",
    name: "Identity Design",
    images: {
      col1_1: "/project2_1.png",
      col1_2: "/project2_2.png",
      col2: "/project2_3.png"
    },
    color: "#0d0d1a"
  },
  {
    number: "03",
    client: "Solaris Digital",
    name: "Web Experience",
    images: {
      col1_1: "/project3_1.png",
      col1_2: "/project3_2.png",
      col2: "/project3_3.png"
    },
    color: "#0a1a0a"
  }
];

const Card = ({ project, i, sectionProgress, onClick }: { project: typeof projects[0], i: number, sectionProgress: any, onClick: () => void }) => {
  const start = i / projects.length;
  const end = (i + 1) / projects.length;

  const scale = useTransform(sectionProgress, [start, end], [1, 0.88]);
  const opacity = useTransform(sectionProgress, [start, end], [1, 0.5]);

  return (
    <div className="h-screen w-full flex justify-center sticky top-0 items-start pt-[12vh]">
      <motion.div
        style={{ scale, opacity, transformOrigin: 'top center', top: `${i * 35}px` }}
        className="relative w-full max-w-6xl rounded-[32px] overflow-hidden border border-white/10 group cursor-pointer"
        onClick={onClick}
      >
        <div
          className="w-full p-6 md:p-8 flex flex-col gap-6"
          style={{ backgroundColor: project.color, minHeight: '80vh' }}
        >
          {/* Header Row */}
          <div className="flex items-start justify-between z-10">
            <div className="flex items-center gap-4 md:gap-6">
              <span className="font-black text-[clamp(3.5rem,9vw,110px)] text-white leading-none tracking-tighter">
                {project.number}
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-white/50 text-[11px] sm:text-sm font-medium tracking-[0.2em] uppercase">
                  {project.client}
                </span>
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl tracking-tight group-hover:text-[#00d8ff] transition-colors duration-300">
                  {project.name}
                </h3>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-2 border border-white/30 rounded-full px-5 py-2 text-[11px] font-semibold tracking-[0.2em] text-white uppercase group-hover:bg-white group-hover:text-black transition-all duration-300 mt-2">
              View Project
            </div>
          </div>

          {/* Single Cover Image */}
          <div className="flex-1 rounded-2xl overflow-hidden bg-white/5 relative">
            <img src={project.images.col2} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-background relative z-30 px-4 sm:px-6 md:px-10 pb-[20vh]"
    >
      <div className="pt-20 pb-12 text-center">
        <h2 className="text-white font-bold tracking-tight text-[clamp(2.5rem,10vw,120px)] leading-none drop-shadow-2xl">
          Projects
        </h2>
      </div>

      <div className="flex flex-col relative w-full items-center pb-[10vh]">
        {projects.map((project, i) => (
          <Card
            key={project.number}
            project={project}
            i={i}
            sectionProgress={scrollYProgress}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl h-full max-h-[90vh] rounded-[32px] overflow-hidden flex flex-col"
              style={{ backgroundColor: selectedProject.color }}
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 md:p-8 shrink-0">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white/50 text-[11px] sm:text-sm font-medium tracking-[0.2em] uppercase">
                      {selectedProject.client}
                    </span>
                    <h3 className="text-white font-semibold text-2xl md:text-4xl tracking-tight">
                      {selectedProject.name}
                    </h3>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hidden sm:flex items-center gap-2 bg-[#00d8ff] text-black rounded-full px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
                    >
                      Visit Live Site
                    </a>
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Gallery */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 pt-0 custom-scrollbar">
                
                {selectedProject.link && (
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="sm:hidden flex items-center justify-center w-full mb-6 gap-2 bg-[#00d8ff] text-black rounded-full px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
                  >
                    Visit Live Site
                  </a>
                )}

                {/* Mobile Carousel / Desktop Grid inside Modal */}
                <div className="flex md:hidden flex-1 overflow-x-auto gap-4 snap-x snap-mandatory hide-scrollbar pb-4">
                  <div className="min-w-[85%] rounded-2xl overflow-hidden bg-white/5 h-[60vh] snap-center shrink-0">
                    <img src={selectedProject.images.col1_1} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-[85%] rounded-2xl overflow-hidden bg-white/5 h-[60vh] snap-center shrink-0">
                    <img src={selectedProject.images.col1_2} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-[85%] rounded-2xl overflow-hidden bg-white/5 h-[60vh] snap-center shrink-0">
                    <img src={selectedProject.images.col2} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="hidden md:grid flex-1 grid-cols-5 gap-6 min-h-[60vh]">
                  <div className="col-span-2 flex flex-col gap-6 h-full">
                    <div className="flex-1 rounded-3xl overflow-hidden bg-white/5">
                      <img src={selectedProject.images.col1_1} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 rounded-3xl overflow-hidden bg-white/5">
                      <img src={selectedProject.images.col1_2} alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="col-span-3 rounded-3xl overflow-hidden bg-white/5 h-full">
                    <img src={selectedProject.images.col2} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
