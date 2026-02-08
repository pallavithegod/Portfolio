import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };

    const handleHover = () => {
      gsap.to(cursor, { scale: 1.5, opacity: 0.5 });
      gsap.to(follower, { scale: 2, background: 'rgba(100, 255, 218, 0.1)' });
    };

    const handleHoverOut = () => {
      gsap.to(cursor, { scale: 1, opacity: 1 });
      gsap.to(follower, { scale: 1, background: 'transparent' });
    };

    window.addEventListener('mousemove', moveCursor);
    
    // Add hover effects to interactive elements
    const links = document.querySelectorAll('a, button, input, textarea');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleHover);
      link.addEventListener('mouseleave', handleHoverOut);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleHover);
        link.removeEventListener('mouseleave', handleHoverOut);
      });
    };
  }, []); // Note: This checks elements present on mount. For dynamic elements, might need a different approach or event delegation.

  return (
    <div className="hidden md:block pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference">
      <div 
        ref={cursorRef} 
        className="w-2 h-2 bg-secondary rounded-full absolute -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div 
        ref={followerRef} 
        className="w-8 h-8 border border-secondary rounded-full absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
      ></div>
    </div>
  );
};

export default CustomCursor;
