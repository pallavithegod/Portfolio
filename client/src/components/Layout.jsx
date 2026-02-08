import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-slate">
      <Navbar />
      <main className="flex-grow pt-24 pb-12 px-6 md:px-12 lg:px-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
