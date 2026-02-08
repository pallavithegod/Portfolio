import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
        <span className="text-secondary font-mono text-2xl mr-4">02.</span> Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((category, index) => {
          const Icon = category.icon;
          return (
            <div key={index} className="skill-card group relative p-6 bg-tertiary/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(100,255,218,0.15)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                  <div className="text-secondary mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                      <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-slate font-mono text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 group-hover:bg-white transition-colors"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
