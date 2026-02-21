import React, { useState } from 'react';
import { Music, Send } from 'lucide-react';
import pianoImage from '../assets/piano.jpg';

const Personal = () => {
  const [factForm, setFactForm] = useState({ name: '', email: '', fact: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFactForm({ ...factForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call for frontend-only deployment
      const { name, email, fact } = factForm;
      const subject = `Fact from ${name || 'Anonymous'}`;
      const body = `Name: ${name || 'Anonymous'}%0D%0AEmail: ${email}%0D%0A%0D%0AFact:%0D%0A${fact}`;
      
      window.location.href = `mailto:jainpallavi.delhi@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      setStatus('success');
      setFactForm({ name: '', email: '', fact: '' });
      setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section id="personal" className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center">
        <span className="text-secondary font-mono text-2xl mr-4">05.</span> Personal & Hobbies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Music Section */}
        <div className="bg-tertiary/90 backdrop-blur-sm rounded-xl border border-slate/10 hover:border-secondary/30 transition-all duration-300 group overflow-hidden relative h-full min-h-[400px]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={pianoImage} 
              alt="Piano Keys" 
              className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
          </div>

          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity z-10">
            <Music size={120} />
          </div>
          
          <div className="relative z-10 p-8 flex flex-col justify-end h-full">
             <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Music className="mr-3 text-secondary" /> The Pianist in Me
            </h3>
            <p className="text-slate mb-6 text-lg leading-relaxed shadow-black drop-shadow-md">
               Beyond code, I find rhythm in keys. I've performed in multiple inter-school and inter-college programs. 
               Learning Western music theory has taught me that structure and creativity go hand in hand—much like engineering.
            </p>

            <div className="h-2 w-20 bg-secondary rounded-full mt-4"></div>
          </div>
        </div>

        {/* Fact Share Section */}
        <div className="bg-tertiary p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-4">Share a Fact</h3>
          <p className="text-slate text-sm mb-6">
            Tell me a fact (about the universe, Earth, or deep sea creatures) that fascinates you! I'm always eager to learn.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
               <input 
                type="text" 
                name="name" 
                placeholder="Name (Optional)" 
                value={factForm.name}
                onChange={handleChange}
                className="w-1/2 bg-primary border border-slate/20 rounded p-2 text-white focus:border-secondary outline-none transition-colors"
              />
              <input 
                type="email" 
                name="email" 
                required
                placeholder="Email" 
                value={factForm.email}
                onChange={handleChange}
                className="w-1/2 bg-primary border border-slate/20 rounded p-2 text-white focus:border-secondary outline-none transition-colors"
              />
            </div>
            <textarea 
              name="fact" 
              required
              placeholder="Did you know..." 
              value={factForm.fact}
              onChange={handleChange}
              rows="3"
              className="w-full bg-primary border border-slate/20 rounded p-2 text-white focus:border-secondary outline-none transition-colors resize-none"
            ></textarea>
            
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="px-6 py-2 bg-secondary/10 text-secondary border border-secondary rounded hover:bg-secondary/20 transition-all flex items-center justify-center w-full"
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Thank You!' : 'Send Fact'}
              {status !== 'sending' && <Send size={16} className="ml-2" />}
            </button>
            {status === 'error' && <p className="text-red-400 text-xs text-center">Something went wrong. Try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Personal;
