import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary py-8 text-center text-slate text-sm font-mono">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/pallavithegod" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Github size={20} /></a>
        <a href="https://linkedin.com/in/pallavii-" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Linkedin size={20} /></a>
        <a href="mailto:jainpallavi.delhi@gmail.com" className="hover:text-secondary transition-colors"><Mail size={20} /></a>
      </div>
      <p>Designed & Built by Pallavi Jain</p>
      <p className="mt-2 text-xs text-lightSlate opacity-70">© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
