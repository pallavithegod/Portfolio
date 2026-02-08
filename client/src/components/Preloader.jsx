import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const keysRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate keys playing
    if (keysRef.current) {
        // Select both white and black keys
        const keys = keysRef.current.children; 
        
        tl.to(keys, {
          scaleY: 0.9,
          duration: 0.2,
          stagger: {
            each: 0.1,
            from: "random",
            repeat: 3,
            yoyo: true
          },
          ease: 'power1.inOut'
        });
    }

    tl.to(textRef.current, {
      opacity: 1,
      duration: 0.5,
    }, "-=1.5")
    .to([keysRef.current, textRef.current], {
      opacity: 0,
      duration: 0.8, // Slower fade out
      ease: 'power2.out' 
    })
    .to(containerRef.current, {
      opacity: 0, // Fade out opacity instead of slide up for smoothness
      duration: 1.0,
      ease: 'power2.inOut',
      onComplete: onComplete
    });

  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center">
      <div className="text-center relative">
        {/* Piano Keys Loader */}
        <div ref={keysRef} className="flex justify-center items-start h-24 overflow-hidden relative p-2 bg-primary">
             {/* White Keys */}
             {[...Array(7)].map((_, i) => (
                <div 
                  key={`white-${i}`} 
                  className="w-8 h-24 bg-white border border-gray-300 rounded-b-md mx-0.5 relative z-10 origin-top"
                ></div>
             ))}
             
             {/* Black Keys (Overlay) */}
             {[0, 1, 3, 4, 5].map((pos, i) => (
                 <div 
                    key={`black-${i}`}
                    className="absolute top-2 w-5 h-14 bg-black rounded-b-sm z-20 origin-top"
                    style={{ left: `${(pos * 36) + 32}px` }} 
                 ></div>
             ))}
        </div>
        
        <h2 ref={textRef} className="text-secondary font-mono text-xl tracking-widest opacity-0 mt-8">
          Loading...
        </h2>
      </div>
    </div>
  );
};

export default Preloader;
