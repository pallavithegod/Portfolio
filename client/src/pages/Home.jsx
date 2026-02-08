import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Personal from '../components/Personal';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Personal />
      <Contact />
    </div>
  );
};

export default Home;
