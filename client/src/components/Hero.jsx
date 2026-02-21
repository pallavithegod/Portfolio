import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';
import image1 from '../assets/image1.jpg';
import GlareHover from './React bits/glarehover';
import BlurText from './React bits/blurtext';

const Hero = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    // BlurText handles its own animation, so we remove title/subtitle from here
    tl.fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 1 });
  }, []);

  return (
    <section id="hero" className="min-h-screen flex justify-center pt-32 pb-20 relative z-10">
      <div className="flex flex-col-reverse md:flex-row items-start justify-between w-full max-w-6xl px-6">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start md:pr-12">
          <p className="text-secondary font-mono mb-4 text-lg">Hi! I'm</p>
          
          <div className="mb-4">
            <BlurText 
              text="Pallavi Jain." 
              className="text-5xl md:text-7xl font-bold text-white tracking-tight"
              delay={150}
              animateBy="words"
              direction="top"
            />
          </div>
          
          <div className="mb-6">
            <BlurText 
              text="I design and build thoughtful web experiences." 
              className="text-2xl md:text-4xl font-bold text-slate"
              delay={100}
              animateBy="words" 
              direction="bottom" 
            />
          </div>

          <p className="text-slate text-lg max-w-xl mb-8 leading-relaxed">
            A second year Computer Science student based in Delhi, building modern, accessible, and AI-driven web experiences.
          </p>
          
          <div ref={ctaRef} className="flex space-x-6">
            <a 
              href="#projects" 
              className="px-8 py-3 border border-secondary text-secondary rounded hover:bg-secondary/10 transition-colors font-mono"
            >
              Check out my work
            </a>
            <Link 
              to="/resume" 
              className="px-8 py-3 bg-secondary text-primary rounded hover:bg-secondary/80 transition-colors font-mono font-bold"
            >
              Resume
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end mb-12 md:mb-0 relative group">
           {/* Offset Border wrapper - positioned behind GlareHover if possible, or we simulate it inside */}
           <div className="relative w-[360px] h-[360px] md:w-[420px] md:h-[420px]">
             {/* The Offset Border */}
             <div className="absolute inset-0 border-2 border-secondary rounded-lg translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 pointer-events-none z-0"></div>
             
             {/* The GlareHover Component */}
             <div className="relative z-10 w-full h-full">
               <GlareHover 
                 width="100%" 
                 height="100%" 
                 borderRadius="12px"
                 glareColor="#64ffda"
                 glareOpacity={0.4}
               >
                  <img 
                    src={image1} 
                    alt="Pallavi Jain" 
                    className="w-full h-full object-cover rounded-lg filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
               </GlareHover>
             </div>
           </div>
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
