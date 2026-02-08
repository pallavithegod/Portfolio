import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../data/portfolioData';
import ChromaGrid from './React bits/chroma';

gsap.registerPlugin(ScrollTrigger);

// Gradient Palettes for Skills
const gradients = [
    'linear-gradient(145deg, #64ffda, #000)', // Teal
    'linear-gradient(145deg, #bd34fe, #000)', // Purple
    'linear-gradient(145deg, #ff8c00, #000)', // Orange
    'linear-gradient(145deg, #00bfff, #000)', // Blue
];

const chromaItems = skills.map((category, index) => ({
    icon: category.icon, // Component
    title: category.category,
    subtitle: category.items.join(', '),
    borderColor: '#64ffda',
    gradient: gradients[index % gradients.length],
    url: null
}));

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skill-card', 
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%', // Trigger earlier
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
        <span className="text-secondary font-mono text-2xl mr-4">02.</span> Technical Skills
      </h2>

      <div className="h-[600px] w-full relative">
        <ChromaGrid 
          items={chromaItems}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
          className="bg-transparent"
        />
      </div>
    </section>
  );
};

export default Skills;
