import React from 'react';
import { education } from '../data/portfolioData';
import Carousel from './React bits/carousal';
import { Award, Users, Mic } from 'lucide-react';

const achievementsData = [
    {
        id: 1,
        title: 'Hackathons',
        description: 'Finalist in 5+ hackathons with innovative ideas. Built working prototypes under tight deadlines.',
        icon: <Award className="h-[16px] w-[16px] text-secondary" />
    },
    {
        id: 2,
        title: 'Tech Society',
        description: 'Junior Council Member at ANVESHAN. Co-organized coding workshops for 100+ students.',
        icon: <Users className="h-[16px] w-[16px] text-secondary" />
    },
    {
        id: 3,
        title: 'Soft Skills',
        description: 'Communication, Collaboration, Leadership, Time Management, Creativity.',
        icon: <Mic className="h-[16px] w-[16px] text-secondary" />
    }
];

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
              <div key={index} className="group relative pl-8 py-4 border-l-2 border-slate/20 hover:border-secondary transition-colors duration-300">
                <span className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-primary border-2 border-slate/20 group-hover:border-secondary group-hover:bg-secondary transition-all duration-300"></span>
                <div className="bg-tertiary/40 p-4 rounded-r-lg group-hover:bg-tertiary/60 transition-all">
                    <h4 className="text-white font-bold text-lg group-hover:text-secondary transition-colors">{edu.institution}</h4>
                    <p className="text-slate mb-1">{edu.degree}</p>
                    {edu.year && <p className="text-lightSlate font-mono text-sm mb-2">{edu.year}</p>}
                    <div className="inline-block bg-secondary/10 px-3 py-1 rounded text-secondary text-sm font-semibold border border-secondary/20">
                        {edu.score}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements / Leadership */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center"><span className="w-8 h-0.5 bg-secondary mr-3"></span>Achievements & Leadership</h3>
          
          <div className="h-[400px] w-full flex items-center justify-center">
            <Carousel 
              items={achievementsData}
              baseWidth={300}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
