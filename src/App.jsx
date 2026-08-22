import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-canvas text-slate-100 selection:bg-aurora-cyan/30 selection:text-white font-sans overflow-x-hidden">

      {/* Background Ambient Aurora Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-aurora-cyan/15 rounded-full blur-[100px] animate-aurora-slow" />
        <div className="absolute top-1/4 -right-40 w-[32rem] h-[32rem] bg-aurora-indigo/15 rounded-full blur-[120px] animate-aurora-slow" style={{ animationDelay: '-6s' }} />
        <div className="absolute top-2/3 -left-40 w-[30rem] h-[30rem] bg-aurora-cyan/10 rounded-full blur-[110px] animate-aurora-slow" style={{ animationDelay: '-10s' }} />
        <div className="absolute bottom-10 right-1/4 w-[26rem] h-[26rem] bg-aurora-violet/10 rounded-full blur-[100px] animate-aurora-slow" style={{ animationDelay: '-14s' }} />
      </div>

      {/* Navigation Dock */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;