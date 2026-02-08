import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Download, Maximize2 } from 'lucide-react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const ResumeViewer = () => {
    const containerRef = useRef(null);
    const controlsRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(containerRef.current, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        );
        
        gsap.fromTo(controlsRef.current,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' }
        );
    }, []);

    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 flex flex-col items-center">
            
            {/* Header / Controls */}
            <div ref={controlsRef} className="w-full max-w-5xl flex justify-between items-center mb-6">
                <Link to="/" className="flex items-center text-secondary hover:text-white transition-colors group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
                
                <div className="flex space-x-4">
                    <a 
                        href="/resume.pdf" 
                        download
                        className="flex items-center space-x-2 px-4 py-2 bg-tertiary border border-secondary/30 rounded hover:bg-secondary/10 text-slate hover:text-secondary transition-all"
                    >
                        <Download size={18} />
                        <span>Download PDF</span>
                    </a>
                </div>
            </div>

            {/* Resume Viewer */}
            <div ref={containerRef} className="w-full max-w-5xl bg-white/5 rounded-lg border border-slate/10 p-1 md:p-2 shadow-2xl backdrop-blur-sm h-[80vh]">
                <iframe 
                    src="/resume.pdf" 
                    className="w-full h-full rounded bg-white"
                    title="Resume Preview"
                />
            </div>
            
            <div className="mt-4 text-slate/50 text-sm font-mono">
                Thinking about hiring me? I'd love to chat!
            </div>
        </div>
    );
};

export default ResumeViewer;
