import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  {
    number: "01",
    name: "Next Gen AI Website Builders",
    description: "Designing fast, mobile-friendly, and conversion-focused websites using next gen AI technologies to maximize your online presence."
  },
  {
    number: "02",
    name: "Digital Marketing & Social Media",
    description: "Targeted digital marketing campaigns that elevate your social media presence, expanding reach and converting attention into revenue."
  },
  {
    number: "03",
    name: "Advanced Brand Identity Design",
    description: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear market authority for your business."
  },
  {
    number: "04",
    name: "Technical Web Development",
    description: "Optimized, high-performance web applications and infrastructures that structurally elevate brands and consistently exceed expectations."
  },
  {
    number: "05",
    name: "SEO Agency Pune Services",
    description: "Data-driven Search Engine Optimization (SEO) strategies that improve visibility, drive organic traffic, and secure top rankings for your brand."
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
          className="text-white font-black uppercase tracking-tighter text-center text-[clamp(3.5rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none drop-shadow-2xl"
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
