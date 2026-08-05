import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

const Card = ({ project, i, sectionProgress }: { project: typeof projects[0], i: number, sectionProgress: any }) => {
  const start = i / projects.length;
  const end = (i + 1) / projects.length;

  const scale = useTransform(sectionProgress, [start, end], [1, 0.88]);
  const opacity = useTransform(sectionProgress, [start, end], [1, 0.5]);

  return (
    <div className="h-screen w-full flex justify-center sticky top-0 items-start pt-[12vh]">
      <motion.div
        style={{ scale, opacity, transformOrigin: 'top center', top: `${i * 35}px` }}
        className="relative w-full max-w-6xl rounded-[32px] overflow-hidden border border-white/10"
      >
        <div
          className="w-full p-6 md:p-8 flex flex-col gap-6"
          style={{ backgroundColor: project.color, minHeight: '80vh' }}
        >
          {/* Header Row */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4 md:gap-6">
              <span className="font-black text-[clamp(3.5rem,9vw,110px)] text-white leading-none tracking-tighter">
                {project.number}
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-white/50 text-[11px] sm:text-sm font-medium tracking-[0.2em] uppercase">
                  {project.client}
                </span>
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl tracking-tight">
                  {project.name}
                </h3>
              </div>
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 border border-white/30 rounded-full px-5 py-2 text-[11px] font-semibold tracking-[0.2em] text-white uppercase hover:bg-white hover:text-black transition-all duration-300 mt-2">
                Live Project
              </a>
            )}
          </div>

          {/* Images Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 h-[40vh] md:h-[55vh]">
            <div className="col-span-1 md:col-span-2 flex flex-col gap-3 sm:gap-4 h-full">
              <div className="flex-1 rounded-xl sm:rounded-2xl overflow-hidden bg-white/5">
                <img src={project.images.col1_1} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 rounded-xl sm:rounded-2xl overflow-hidden bg-white/5">
                <img src={project.images.col1_2} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="col-span-1 md:col-span-3 rounded-xl sm:rounded-2xl overflow-hidden bg-white/5 h-full">
              <img src={project.images.col2} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

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
          />
        ))}
      </div>
    </section>
  );
};
