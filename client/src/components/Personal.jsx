import React, { useState } from 'react';
import { Music, Send } from 'lucide-react';

const Personal = () => {
  const [factForm, setFactForm] = useState({ name: '', email: '', fact: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFactForm({ ...factForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('http://localhost:5000/api/fact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(factForm),
      });
      if (response.ok) {
        setStatus('success');
        setFactForm({ name: '', email: '', fact: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="personal" className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center">
        <span className="text-secondary font-mono text-2xl mr-4">05.</span> Personal & Hobbies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Music Section */}
        <div className="bg-tertiary/90 backdrop-blur-sm p-8 rounded-xl border border-slate/10 hover:border-secondary/30 transition-all duration-300 group overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Music size={120} />
          </div>
          
          <div className="relative z-10">
             <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Music className="mr-3 text-secondary" /> The Pianist in Me
            </h3>
            <p className="text-slate mb-6">
               Beyond code, I find rhythm in keys. I've performed in multiple inter-school and inter-college programs. 
               Learning Western music theory has taught me that structure and creativity go hand in hand—much like engineering.
            </p>

            {/* Piano Keys Visual */}
            <div className="flex h-16 w-full max-w-xs mb-6 relative select-none">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="flex-1 bg-white border border-gray-300 rounded-b-md relative hover:bg-gray-100 transition-colors mx-[1px]">
                  {i !== 2 && i !== 6 && (
                    <div className="absolute top-0 right-[-25%] w-[60%] h-[60%] bg-black z-10 rounded-b-sm pointer-events-none"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="h-2 w-20 bg-secondary rounded-full"></div>
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
