import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Mail, Sparkles, Cpu, Layers, Zap, MapPin, FileText, ArrowUpRight } from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="relative min-h-[90vh] flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">

        {/* Left Column: Natural Editorial Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-mono text-aurora-emerald mb-5 sm:mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-aurora-emerald"></span>
            </span>
            <span>{personal.availability}</span>
          </div>

          {/* Clean Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.15] mb-5 sm:mb-6">
            <span className="text-gradient block">Building scalable</span>
            <span className="text-aurora block">Full-Stack Applications</span>
            <span className="text-slate-300 text-2xl sm:text-4xl lg:text-5xl font-semibold mt-1 block">
              with MERN.
            </span>
          </h1>

          {/* Grounded Bio */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl">
            {personal.bio}
          </p>

          {/* Action Triggers */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-aurora-cyan to-aurora-indigo text-slate-950 font-semibold text-xs sm:text-sm hover:opacity-95 hover:shadow-lg hover:shadow-aurora-cyan/20 transition-all group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {personal.resumeUrl && (
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl glass-card text-white font-medium text-xs sm:text-sm hover:bg-white/10 border border-white/10 hover:border-aurora-cyan/40 transition-all group"
              >
                <FileText className="w-4 h-4 text-aurora-indigo" />
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl glass-card text-slate-300 hover:text-white font-medium text-xs sm:text-sm hover:bg-white/5 border border-white/5 hover:border-white/15 transition-all"
            >
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Channels & Core Stack */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-white/5 w-full">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2 sm:p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:border-aurora-cyan/40 transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 sm:p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:border-aurora-cyan/40 transition-colors"
              >
                <LinkedinIcon />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email Roopesh"
                className="p-2 sm:p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:border-aurora-cyan/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="hidden sm:block h-4 w-[1px] bg-white/10"></div>

            <span className="text-xs font-mono text-slate-400">
              React • Node.js • Express • MongoDB • AWS
            </span>
          </div>
        </div>

        {/* Right Column: Grounded Engineering Bento Card with Headshot */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="w-full max-w-md p-5 sm:p-6 rounded-3xl glass-card relative group">

            {/* Top Profile Header with Headshot */}
            <div className="flex items-center gap-4 pb-4 mb-4 border-b border-white/10">
              <div className="relative shrink-0">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-aurora-cyan to-aurora-indigo rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
                <img
                  src={personal.avatarUrl || "/profile.jpg"}
                  alt={personal.name}
                  className="relative w-16 h-16 sm:w-18 sm:h-18 object-cover object-top rounded-2xl border border-white/20 shadow-2xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-aurora-emerald border-2 border-canvas shadow-md"></span>
              </div>

              <div className="min-w-0">
                <h2 className="font-display font-bold text-base sm:text-lg text-white truncate">
                  {personal.name}
                </h2>
                <p className="text-xs font-medium text-aurora-cyan truncate">
                  Software Engineer @ Cognizants
                </p>
                <p className="text-[11px] font-mono text-slate-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  <span>{personal.location}</span>
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-4">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-1.5 text-aurora-cyan mb-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono uppercase tracking-wider">Performance</span>
                </div>
                <div className="text-lg sm:text-xl font-display font-bold text-white">~40%</div>
                <div className="text-[11px] text-slate-400">Page load reduction</div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-1.5 text-aurora-emerald mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono uppercase tracking-wider">Component Reuse</span>
                </div>
                <div className="text-lg sm:text-xl font-display font-bold text-white">30%</div>
                <div className="text-[11px] text-slate-400">Faster UI delivery</div>
              </div>
            </div>

            {/* Core Stack Snapshot */}
            <div className="space-y-2 p-3.5 sm:p-4 rounded-2xl bg-black/40 border border-white/5 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span>// Primary Stack</span>
                <span className="text-aurora-cyan">MERN + AWS</span>
              </div>
              <div className="text-slate-300 text-[11px] sm:text-xs">
                <span className="text-aurora-indigo font-bold">const</span> techStack = [
              </div>
              <div className="pl-3.5 text-slate-400 space-y-0.5 text-[11px]">
                <div><span className="text-emerald-400">'React.js & Redux Toolkit'</span>,</div>
                <div><span className="text-emerald-400">'Node.js & Express REST APIs'</span>,</div>
                <div><span className="text-emerald-400">'MongoDB & Redis Caching'</span>,</div>
                <div><span className="text-emerald-400">'Socket.io Real-Time'</span>,</div>
                <div><span className="text-emerald-400">'AWS EC2 / S3 & Docker'</span></div>
              </div>
              <div className="text-slate-300 text-[11px] sm:text-xs">];</div>
            </div>

            {/* Status Footer */}
            <div className="mt-3.5 pt-3 flex items-center justify-between text-xs text-slate-400 border-t border-white/5">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-aurora-cyan" />
                <span>3+ Years Experience</span>
              </div>
              <span className="font-mono text-slate-500 text-[11px]">Full Stack MERN</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}