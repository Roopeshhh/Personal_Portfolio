import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Terminal } from 'lucide-react';

export default function Footer() {
    const { personal } = portfolioData;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative py-12 px-6 border-t border-white/10 bg-canvas">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

                {/* Brand */}
                <div className="flex items-center gap-2 text-slate-300">
                    <div className="w-8 h-8 rounded-lg glass-card flex items-center justify-center border border-white/10">
                        <Terminal className="w-4 h-4 text-aurora-cyan" />
                    </div>
                    <span className="font-display font-bold text-sm">
                        {personal.name}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                        © {new Date().getFullYear()}
                    </span>
                </div>

                {/* Philosophy Text */}
                <div className="text-xs font-mono text-slate-500 text-center">
                    Engineered with React • Tailwind CSS • Clean Architecture
                </div>

                {/* Back to Top */}
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl glass-card text-xs font-mono text-slate-300 hover:text-white hover:border-aurora-cyan/40 transition-colors"
                >
                    <span>Top</span>
                    <ArrowUp className="w-3.5 h-3.5 text-aurora-cyan" />
                </button>

            </div>
        </footer>
    );
}