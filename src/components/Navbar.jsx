import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';

export default function Navbar() {
  const { personal } = portfolioData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar background trigger
      setIsScrolled(window.scrollY > 20);

      // 2. Scroll progress calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // 3. Active section spy
      const sections = ['projects', 'skills', 'experience', 'contact'];
      let current = '';
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = sectionId;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Reading Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-white/5 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-aurora-cyan via-aurora-indigo to-aurora-emerald transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 py-4 transition-all duration-300">
        <nav className={`w-full max-w-5xl rounded-2xl transition-all duration-300 ${isScrolled
            ? 'glass-dock py-3 px-6 shadow-2xl shadow-black/60'
            : 'bg-transparent py-4 px-6'
          }`}>
          <div className="flex items-center justify-between">

            {/* Logo / Monogram */}
            <a href="#" className="flex items-center gap-2 group text-slate-100 hover:text-white transition-colors">
              <div className="w-8 h-8 rounded-xl glass-card flex items-center justify-center border border-white/10 group-hover:border-aurora-cyan/50 transition-colors">
                <Terminal className="w-4 h-4 text-aurora-cyan" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-tight">
                  {personal.name.split(' ')[0]}<span className="text-aurora-cyan">.dev</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 -mt-1">
                  Full Stack MERN
                </span>
              </div>
            </a>

            {/* Desktop Nav Links with Active Indicator */}
            <div className="hidden md:flex items-center gap-1 rounded-full px-3 py-1 glass-card border border-white/5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all ${isActive
                        ? 'bg-white/15 text-white font-semibold shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Right Action */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-aurora-cyan/40 transition-all group"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-aurora-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 rounded-xl glass-card text-slate-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Drawer */}
          {isMobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 border-t border-white/10 mt-3 flex flex-col gap-1.5 animate-fadeIn">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 text-center text-xs font-semibold px-4 py-2.5 rounded-xl bg-aurora-cyan/20 text-aurora-cyan border border-aurora-cyan/30"
              >
                Get in Touch
              </a>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}