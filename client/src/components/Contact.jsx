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
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(contactForm),
        });
        if (response.ok) {
          setStatus('success');
          setContactForm({ name: '', email: '', message: '' });
        } else {
          setStatus('error');
        }
      } catch (error) {
        setStatus('error');
      }
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

            <div className="space-y-4">
                <div className="flex items-center text-slate">
                    <Mail className="text-secondary mr-4" size={20} />
                    <a href="mailto:jainpallavi.delhi@gmail.com" className="hover:text-secondary transition-colors">jainpallavi.delhi@gmail.com</a>
                </div>
                <div className="flex items-center text-slate">
                    <Phone className="text-secondary mr-4" size={20} />
                    <span>8076717873</span>
                </div>
                <div className="flex items-center text-slate">
                    <MapPin className="text-secondary mr-4" size={20} />
                    <span>Delhi, India</span>
                </div>
                 <div className="flex items-center text-slate">
                    <Github className="text-secondary mr-4" size={20} />
                    <a href="https://github.com/pallavithegod" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">pallavithegod</a>
                </div>
                 <div className="flex items-center text-slate">
                    <Linkedin className="text-secondary mr-4" size={20} />
                    <a href="https://linkedin.com/in/pallavii-" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">pallavii-</a>
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
