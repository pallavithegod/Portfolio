import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ResumeViewer from './components/ResumeViewer';

import Ribbons from './components/React bits/ribbons';
import GradualBlur from './components/React bits/gradualblur';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      <CustomCursor />
      <Ribbons colors={['#64ffda']} baseThickness={10} maxAge={300} opacity={1} />
      
      {/* Global Bottom Blur - Fixed and Persistent */}
      <div className="fixed bottom-0 left-0 w-full h-24 pointer-events-none z-[60]" style={{ backdropFilter: 'blur(2px)', background: 'linear-gradient(to top, rgba(2, 12, 27, 1) 0%, rgba(2, 12, 27, 0) 100%)' }}></div>
      
      {loading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<ResumeViewer />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
