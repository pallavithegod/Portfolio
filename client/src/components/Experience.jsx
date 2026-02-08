import React from 'react';
import { education } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-12">
       <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
        <span className="text-secondary font-mono text-2xl mr-4">04.</span> Experience & Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center"><span className="w-8 h-0.5 bg-secondary mr-3"></span>Academic Snapshot</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-slate/30 pl-6 py-2 relative hover:border-secondary transition-colors duration-300 group">
                <span className="absolute -left-[5px] top-6 w-2.5 h-2.5 bg-primary border-2 border-slate/30 group-hover:border-secondary group-hover:bg-secondary transition-colors duration-300 rounded-full"></span>
                <h4 className="text-white font-bold group-hover:text-secondary transition-colors">{edu.institution}</h4>
                <p className="text-slate text-sm mb-1">{edu.degree}</p>
                 {edu.year && <p className="text-lightSlate font-mono text-xs mb-2">{edu.year}</p>}
                <p className="text-secondary font-bold">{edu.score}</p>
                {edu.location && <p className="text-slate text-xs">{edu.location}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements / Leadership */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center"><span className="w-8 h-0.5 bg-secondary mr-3"></span>Achievements & Leadership</h3>
          
          <div className="group bg-tertiary/50 p-6 rounded-xl border border-white/5 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg mb-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-secondary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
             <div className="relative z-10">
                <h4 className="text-secondary font-bold mb-2 text-lg">Hackathons</h4>
                <ul className="list-disc list-inside text-slate text-sm space-y-2">
                  <li>Finalist in 5+ hackathons with innovative ideas.</li>
                  <li>Built working prototypes under tight deadlines.</li>
                </ul>
             </div>
          </div>

          <div className="group bg-tertiary/50 p-6 rounded-xl border border-white/5 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-secondary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <div className="relative z-10">
                <h4 className="text-secondary font-bold mb-2 text-lg">Tech Society (ANVESHAN)</h4>
                <ul className="list-disc list-inside text-slate text-sm space-y-2">
                  <li>Junior Council Member.</li>
                  <li>Co-organized coding workshops for 100+ students.</li>
                </ul>
            </div>
          </div>

           <div className="group bg-tertiary/50 p-6 rounded-xl border border-white/5 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-secondary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <div className="relative z-10">
                <h4 className="text-secondary font-bold mb-2 text-lg">Soft Skills</h4>
                <p className="text-slate text-sm">Communication, Collaboration, Leadership, Time Management, Creativity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
