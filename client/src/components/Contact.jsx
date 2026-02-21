import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
  
    const handleChange = (e) => {
      setContactForm({ ...contactForm, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus('sending');
      
      // Simulate API call for frontend-only deployment
      const { name, email, message } = contactForm;
      const subject = `Portfolio Contact from ${name}`;
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
      
      window.location.href = `mailto:jainpallavi.delhi@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      setStatus('success');
      setContactForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    };

  return (
    <section id="contact" className="py-12 mb-12">
       <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center justify-center">
        <span className="text-secondary font-mono text-2xl mr-4">06.</span> Get In Touch
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="text-slate mb-8">
                I'm currently looking for new opportunities and my inbox is always open. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
                <a href="mailto:jainpallavi.delhi@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-tertiary/30 rounded-lg hover:bg-tertiary/50 transition-all group border border-transparent hover:border-secondary/30">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition-colors">
                        <Mail className="text-secondary" size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-slate mb-1">Email</p>
                        <p className="text-white font-mono group-hover:text-secondary transition-colors">jainpallavi.delhi@gmail.com</p>
                    </div>
                </a>
                
                <div className="flex items-center p-4 bg-tertiary/30 rounded-lg border border-transparent">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                        <Phone className="text-secondary" size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-slate mb-1">Phone</p>
                        <p className="text-white font-mono">8076717873</p>
                    </div>
                </div>

                <div className="flex items-center p-4 bg-tertiary/30 rounded-lg border border-transparent">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="text-secondary" size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-slate mb-1">Location</p>
                        <p className="text-white">Delhi, India</p>
                    </div>
                </div>

                 <div className="flex gap-4 pt-2">
                    <a href="https://github.com/pallavithegod" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center p-4 bg-tertiary/30 rounded-lg hover:bg-tertiary/50 transition-all group border border-transparent hover:border-secondary/30">
                         <Github className="text-slate group-hover:text-secondary transition-colors" size={24} />
                         <span className="ml-2 text-slate group-hover:text-white transition-colors">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/pallavii-" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center p-4 bg-tertiary/30 rounded-lg hover:bg-tertiary/50 transition-all group border border-transparent hover:border-secondary/30">
                        <Linkedin className="text-slate group-hover:text-secondary transition-colors" size={24} />
                         <span className="ml-2 text-slate group-hover:text-white transition-colors">LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-tertiary p-8 rounded-lg shadow-xl">
             <div className="mb-4">
                <label className="block text-secondary text-sm font-mono mb-2">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={contactForm.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary border border-slate/20 rounded p-3 text-white focus:border-secondary outline-none transition-colors"
                />
            </div>
             <div className="mb-4">
                <label className="block text-secondary text-sm font-mono mb-2">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={contactForm.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary border border-slate/20 rounded p-3 text-white focus:border-secondary outline-none transition-colors"
                />
            </div>
             <div className="mb-6">
                <label className="block text-secondary text-sm font-mono mb-2">Message</label>
                <textarea 
                    name="message" 
                    value={contactForm.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-primary border border-slate/20 rounded p-3 text-white focus:border-secondary outline-none transition-colors resize-none"
                ></textarea>
            </div>
            <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full py-4 border border-secondary text-secondary rounded hover:bg-secondary/10 transition-colors font-mono"
            >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Say Hello'}
            </button>
             {status === 'error' && <p className="text-red-400 text-xs text-center mt-2">Failed to send. Please email directly.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
