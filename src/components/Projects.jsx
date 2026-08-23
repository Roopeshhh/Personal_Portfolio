import React from 'react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import { Layers, ArrowUpRight, CheckCircle2, Clock, Activity, ShieldCheck, HardDrive } from 'lucide-react';

const GithubIcon = () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

export default function Projects() {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="relative py-24 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <ScrollReveal>
                    <div className="flex flex-col items-start mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-mono text-aurora-cyan mb-4">
                            <Layers className="w-3.5 h-3.5" />
                            <span>Featured Case Studies</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
                            <span className="text-gradient">Featured</span>{' '}
                            <span className="text-aurora">Projects</span>
                        </h2>
                        <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl font-normal">
                            Applications designed to solve real-world problems using full-stack MERN, real-time data, and cloud services.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Project Cards with Staggered Scroll Reveal */}
                <div className="grid grid-cols-1 gap-12">
                    {projects.map((project, index) => {
                        const isInDevelopment = project.status === 'in-development' || (!project.liveUrl && !project.githubUrl);

                        return (
                            <ScrollReveal key={project.id} delay={index * 150}>
                                <div className="glass-card rounded-3xl p-8 lg:p-10 border border-white/10 relative overflow-hidden group transition-all duration-300 hover:border-aurora-cyan/30">
                                    {/* Ambient Card Glow */}
                                    <div className="absolute -top-32 -right-32 w-80 h-80 bg-aurora-indigo/10 rounded-full blur-3xl pointer-events-none group-hover:bg-aurora-cyan/15 transition-all duration-500" />

                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

                                        {/* Left Column: Project Overview */}
                                        <div className="lg:col-span-7 flex flex-col justify-between h-full">
                                            <div>
                                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                                    <span className="px-3 py-1 rounded-lg bg-aurora-cyan/10 border border-aurora-cyan/20 text-aurora-cyan text-xs font-mono">
                                                        {project.category}
                                                    </span>
                                                    {isInDevelopment && (
                                                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono text-amber-300">
                                                            <Clock className="w-3 h-3 text-amber-400" />
                                                            In Development
                                                        </span>
                                                    )}
                                                </div>

                                                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 group-hover:text-aurora-cyan transition-colors">
                                                    {project.title}
                                                </h3>

                                                <p className="text-slate-300 text-base leading-relaxed mb-6 font-normal">
                                                    {project.description}
                                                </p>

                                                {/* Technical Highlights */}
                                                <div className="mb-6 space-y-2.5">
                                                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                            // Key Technical Features
                                                    </h4>
                                                    {project.highlights.map((highlight, hIndex) => (
                                                        <div key={hIndex} className="flex items-start gap-2.5 text-sm text-slate-300">
                                                            <CheckCircle2 className="w-4 h-4 text-aurora-emerald shrink-0 mt-0.5" />
                                                            <span>{highlight}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Tech Stack Pills & Dynamic Status */}
                                            <div>
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {project.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="px-2.5 py-1 rounded-md bg-black/40 border border-white/5 text-xs font-mono text-slate-300"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Action Bar / In-Development Notice */}
                                                {isInDevelopment ? (
                                                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                                                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                                                            <span>{project.statusMessage}</span>
                                                        </div>
                                                        <span className="text-[11px] font-mono text-slate-500 uppercase">
                                                            Deployment Coming Soon
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-wrap items-center gap-4">
                                                        {project.liveUrl && (
                                                            <a
                                                                href={project.liveUrl}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/15 transition-all group/btn"
                                                            >
                                                                <span>Live Demo</span>
                                                                <ArrowUpRight className="w-3.5 h-3.5 text-aurora-cyan group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                                            </a>
                                                        )}
                                                        {project.githubUrl && (
                                                            <a
                                                                href={project.githubUrl}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-slate-300 hover:text-white font-medium text-xs border border-white/10 hover:border-white/20 transition-all"
                                                            >
                                                                <GithubIcon />
                                                                <span>Source Code</span>
                                                            </a>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Right Column: Architecture & Structure Preview */}
                                        <div className="lg:col-span-5 w-full">
                                            <div className="rounded-2xl bg-black/60 border border-white/10 p-5 shadow-2xl relative overflow-hidden group-hover:border-white/20 transition-colors">

                                                {/* Terminal Header */}
                                                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs font-mono text-slate-400">
                                                    <div className="flex items-center gap-1.5">
                                                        <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                                                        <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                                                        <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                                                    </div>
                                                    <span className="text-[11px] text-aurora-cyan">{project.id}.architecture</span>
                                                </div>

                                                {/* Architectural Breakdown Panels */}
                                                <div className="space-y-3.5">
                                                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <span className="text-xs font-mono text-slate-400">Real-Time Layer</span>
                                                            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-aurora-emerald">
                                                                <Activity className="w-3 h-3 animate-pulse" />
                                                                WebSockets / Socket.io
                                                            </span>
                                                        </div>
                                                        <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                                                            <div className="bg-gradient-to-r from-aurora-cyan to-aurora-indigo h-full w-4/5 rounded-full"></div>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-3">
                                                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                                            <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Security</span>
                                                            <span className="text-xs font-semibold text-slate-200 flex items-center gap-1">
                                                                <ShieldCheck className="w-3.5 h-3.5 text-aurora-cyan" />
                                                                JWT + RBAC
                                                            </span>
                                                        </div>
                                                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                                            <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Storage</span>
                                                            <span className="text-xs font-semibold text-slate-200 flex items-center gap-1">
                                                                <HardDrive className="w-3.5 h-3.5 text-aurora-emerald" />
                                                                MongoDB + S3
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="p-3.5 rounded-xl bg-black/50 border border-white/5 font-mono text-[11px] text-slate-400 space-y-1">
                                                        <div className="text-emerald-400">// Deployment Strategy</div>
                                                        <div>Docker Containerization</div>
                                                        <div className="text-slate-300">GitHub Actions CI/CD</div>
                                                        <div className="text-aurora-cyan">Target: AWS (EC2 / S3)</div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}