import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cpu, Layout, Server, Database, Cloud, Wrench, GitBranch, Check } from 'lucide-react';

export default function Skills() {
    const { skills } = portfolioData;

    const categoryIcons = {
        "Frontend": <Layout className="w-5 h-5 text-aurora-cyan" />,
        "Backend": <Server className="w-5 h-5 text-aurora-indigo" />,
        "Databases": <Database className="w-5 h-5 text-aurora-emerald" />,
        "Cloud & DevOps": <Cloud className="w-5 h-5 text-aurora-cyan" />,
        "Tools": <Wrench className="w-5 h-5 text-aurora-violet" />,
        "Architecture": <GitBranch className="w-5 h-5 text-aurora-indigo" />,
    };

    return (
        <section id="skills" className="relative py-24 px-6 bg-canvas-elevated/40">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col items-start mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-mono text-aurora-emerald mb-4">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>Technical Capabilities</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
                        <span className="text-gradient">Skills &</span>{' '}
                        <span className="text-aurora">Technologies</span>
                    </h2>
                    <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl font-normal">
                        A breakdown of my technical stack across frontend, backend APIs, data storage, cloud deployment, and system architecture.
                    </p>
                </div>

                {/* 6 Category Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((cat, idx) => (
                        <div
                            key={idx}
                            className="glass-card rounded-3xl p-7 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                {/* Category Header */}
                                <div className="flex items-center gap-3.5 mb-3">
                                    <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                                        {categoryIcons[cat.category] || <Cpu className="w-5 h-5 text-aurora-cyan" />}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-display font-bold text-white">
                                            {cat.category}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-xs text-slate-400 font-normal mb-5 leading-relaxed">
                                    {cat.description}
                                </p>

                                {/* Core Skills (Highlighted) */}
                                <div className="mb-3">
                                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    // Core
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.core.map((skill) => (
                                            <span
                                                key={skill}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-aurora-cyan/10 border border-aurora-cyan/30 text-xs font-mono text-slate-100 font-medium hover:border-aurora-cyan/60 transition-all cursor-default"
                                            >
                                                <Check className="w-3 h-3 text-aurora-emerald" />
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Secondary Skills */}
                                <div>
                                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                    // Additional
                                    </span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {cat.secondary.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2 py-1 rounded-lg bg-black/40 border border-white/5 text-[11px] font-mono text-slate-400 hover:text-slate-200 transition-colors cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}