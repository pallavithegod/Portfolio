import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/portfolioData';
import { ExternalLink, FolderGit2, ArrowRight, ArrowDown } from 'lucide-react';
import Beams from './React bits/beams';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project, index }) => {
  return (
    <div className={`project-card bg-tertiary/80 backdrop-blur-md rounded-xl p-8 mb-12 border border-slate/10 hover:border-secondary/30 transition-all duration-300 shadow-xl group relative overflow-hidden ${project.isFoundational ? 'opacity-90' : ''}`}>
      
      {/* Beams Background - Individual Card */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 overflow-hidden">
        <Beams 
          beamWidth={2}
          beamHeight={10} // Taller beams
          beamNumber={6} // More beams
          lightColor="#64ffda"
          speed={1}
          scale={1.2} // Zoomed in significantly (was 0.4)
        />
      </div>

      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start mb-6 relative z-10">
        <div>
          <p className="text-secondary font-mono text-sm mb-2">{project.isFoundational ? 'Foundational Project' : 'Featured Project'}</p>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-lightSlate mb-4 max-w-xl">{project.tagline}</p>
        </div>
        <div className="flex space-x-4">
          <a href={project.github} className="text-slate hover:text-secondary transition-colors"><FolderGit2 size={22} /></a>
          <a href={project.link} className="text-slate hover:text-secondary transition-colors"><ExternalLink size={22} /></a>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 relative z-10">
        {project.tech.map((t, i) => (
          <span key={i} className="px-3 py-1 bg-primary/50 text-secondary text-xs rounded-full font-mono border border-secondary/20">
            {t}
          </span>
        ))}
      </div>

      {project.isSimple ? (
        <div className="relative z-10">
           <p className="text-slate text-base leading-relaxed mb-6">
             {project.description}
           </p>
           {/* Link removed from here as per request */}
        </div>
      ) : (
        /* STAR Format */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-bold mb-1 flex items-center text-sm"><span className="text-secondary mr-2 font-mono">S</span>ituation</h4>
              <p className="text-slate text-sm leading-relaxed">{project.star.situation}</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-1 flex items-center text-sm"><span className="text-secondary mr-2 font-mono">T</span>ask</h4>
              <p className="text-slate text-sm leading-relaxed">{project.star.task}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-bold mb-1 flex items-center text-sm"><span className="text-secondary mr-2 font-mono">A</span>ction</h4>
              <p className="text-slate text-sm leading-relaxed">{project.star.action}</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-1 flex items-center text-sm"><span className="text-secondary mr-2 font-mono">R</span>esult</h4>
              <p className="text-slate text-sm leading-relaxed">{project.star.result}</p>
            </div>
          </div>
        </div>
      )}

      {/* Architecture Diagram (Simplified) */}
      {!project.isFoundational && !project.isSimple && (
        <div className="border-t border-slate/10 pt-6 mt-6 relative z-10">
          <h4 className="text-white font-mono text-sm mb-4">Architecture / Flow</h4>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 text-xs font-mono text-slate">
            <div className="p-3 border border-slate/30 rounded bg-primary/80">Frontend (React)</div>
            <ArrowRight className="hidden md:block mx-2 text-secondary" size={16} />
            <ArrowDown className="md:hidden my-2 text-secondary" size={16} />
            <div className="p-3 border border-slate/30 rounded bg-primary/80">Backend (Node.js)</div>
            <ArrowRight className="hidden md:block mx-2 text-secondary" size={16} />
             <ArrowDown className="md:hidden my-2 text-secondary" size={16} />
            <div className="p-3 border border-slate/30 rounded bg-primary/80">AI Services (Gemini/Azure)</div>
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
    const sectionRef = useRef(null);
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo('.project-card', 
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
          }
        );
      }, sectionRef);
  
      return () => ctx.revert();
    }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-12 relative overflow-hidden">
      
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center">
          <span className="text-secondary font-mono text-2xl mr-4">03.</span> Projects
        </h2>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Column 1: First 2 Projects */}
          <div className="flex-1 flex flex-col gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Column 2: Next 3 Projects */}
          <div className="flex-1 flex flex-col gap-8">
            {projects.slice(2).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + 2} />
            ))}
          </div>
        </div>

        {/* Explore More - Centered below columns */}
        <div className="mt-12 text-center">
            <a 
              href="https://github.com/pallavijain" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xl text-secondary hover:text-white transition-colors font-mono group"
            >
              To explore more - visit my github! 
              <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">
                <ArrowRight size={24} />
              </span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
