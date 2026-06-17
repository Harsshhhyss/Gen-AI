import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

export const AnimatedText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalLetters = text.replace(/\s+/g, '').length;
  let letterIndex = 0;

  return (
    <p ref={container} className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => {
        const wordLetters = word.split('');
        return (
          <span key={i} className="mr-[0.25em] mb-[0.1em] flex">
            {wordLetters.map((letter, j) => {
              const start = letterIndex / totalLetters;
              const end = start + (1 / totalLetters);
              letterIndex++;
              return (
                <Character key={j} progress={scrollYProgress} range={[start, end]}>
                  {letter}
                </Character>
              );
            })}
          </span>
        );
      })}
    </p>
  );
};

interface CharacterProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
