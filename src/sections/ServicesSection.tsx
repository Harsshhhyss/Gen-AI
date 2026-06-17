import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  {
    number: "01",
    name: "Responsive Website Development",
    description: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
  },
  {
    number: "02",
    name: "Targeted Social Media Advertising",
    description: "Dynamic campaigns that add energy and storytelling to brands, expanding reach and converting attention into measurable revenue."
  },
  {
    number: "03",
    name: "Advanced Identity Design",
    description: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable market authority."
  },
  {
    number: "04",
    name: "Technical System Architecture",
    description: "Optimized, high-performance infrastructures that structurally elevate brands and consistently exceed expectations."
  },
  {
    number: "05",
    name: "Search Engine Optimization",
    description: "Data-driven SEO strategies that improve visibility, drive organic traffic, and secure top rankings for your brand in search engines."
  }
];

const ServiceItem = ({ service, i }: { service: typeof services[0]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.92', 'start 0.35']
  });

  // Number slides in from the left
  const numberX = useTransform(scrollYProgress, [0, 1], [-80, 0]);
  const numberOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Text slides in from the right, with a slight delay (offset)
  const textX = useTransform(scrollYProgress, [0.1, 1], [60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 1], [0, 1]);

  // Border line grows from 0 → full width
  const lineScaleX = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <div ref={ref} className="relative">
      {/* Animated top border line */}
      <motion.div
        style={{ scaleX: lineScaleX, transformOrigin: 'left' }}
        className="absolute top-0 left-0 right-0 h-px bg-[rgba(12,12,12,0.15)]"
      />

      <div className="flex flex-col md:flex-row items-start md:items-center py-8 sm:py-10 md:py-12 overflow-hidden">
        {/* Number */}
        <motion.div
          style={{ x: numberX, opacity: numberOpacity }}
          className="md:w-1/3 mb-4 md:mb-0"
        >
          <span className="text-[#0C0C0C] font-black text-[clamp(3rem,10vw,140px)] leading-none select-none">
            {service.number}
          </span>
        </motion.div>

        {/* Name + Description */}
        <motion.div
          style={{ x: textX, opacity: textOpacity }}
          className="md:w-2/3 flex flex-col gap-2 md:pl-10"
        >
          <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
            {service.name}
          </h3>
          <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
            {service.description}
          </p>
        </motion.div>
      </div>

      {/* Bottom border on last item */}
      {i === services.length - 1 && (
        <motion.div
          style={{ scaleX: lineScaleX, transformOrigin: 'left' }}
          className="absolute bottom-0 left-0 right-0 h-px bg-[rgba(12,12,12,0.15)]"
        />
      )}
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  const headingRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: headingProgress } = useScroll({
    target: headingRef,
    offset: ['start 0.9', 'start 0.3']
  });

  const headingY = useTransform(headingProgress, [0, 1], [60, 0]);
  const headingOpacity = useTransform(headingProgress, [0, 1], [0, 1]);

  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20"
    >
      {/* Heading scroll reveal */}
      <div ref={headingRef}>
        <motion.h2
          style={{ y: headingY, opacity: headingOpacity }}
          className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none"
        >
          Services
        </motion.h2>
      </div>

      {/* Service items */}
      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, i) => (
          <ServiceItem key={service.number} service={service} i={i} />
        ))}
      </div>
    </section>
  );
};
