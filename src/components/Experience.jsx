import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
    const { experience, education } = portfolioData;

    return (
        <section id="experience" className="relative py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col items-start mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-mono text-aurora-indigo mb-4">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>Work History</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
                        <span className="text-gradient">Professional Experience &</span>{' '}
                        <span className="text-aurora">Education</span>
                    </h2>
                    <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl font-normal">
                        Hands-on software development experience building MERN stack applications for enterprise and SaaS clients.
                    </p>
                </div>

                {/* Experience Timeline */}
                <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12 mb-16">
                    {experience.map((item, index) => (
                        <div key={index} className="relative group">

                            {/* Timeline Luminous Node */}
                            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-canvas border-2 border-aurora-cyan shadow-lg shadow-aurora-cyan/50 group-hover:scale-125 transition-transform" />

                            <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-aurora-cyan/30 transition-all duration-300">

                                {/* Header Info */}
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-white">
                                            {item.role}
                                        </h3>
                                        <div className="text-aurora-cyan font-semibold text-base mt-0.5">
                                            {item.company}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                                            <Calendar className="w-3.5 h-3.5 text-aurora-indigo" />
                                            {item.period}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                                            <MapPin className="w-3.5 h-3.5 text-aurora-emerald" />
                                            {item.location}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                                    {item.summary}
                                </p>

                                {/* Responsibilities & Achievements */}
                                <div className="space-y-3 mb-6">
                                    {item.responsibilities.map((resp, rIdx) => (
                                        <div key={rIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                                            <CheckCircle2 className="w-4 h-4 text-aurora-cyan shrink-0 mt-0.5" />
                                            <span>{resp}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Stack Badges */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                    {item.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 rounded-md bg-black/40 border border-white/5 text-xs font-mono text-slate-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Education Section */}
                <div className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-2xl bg-aurora-indigo/10 border border-aurora-indigo/20 text-aurora-indigo shrink-0">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-xs font-mono uppercase tracking-wider text-aurora-indigo">
                                Education
                            </span>
                            <h3 className="text-xl font-display font-bold text-white mt-1">
                                {education.degree}
                            </h3>
                            <p className="text-sm text-slate-400 mt-1">
                                {education.institution} • {education.location}
                            </p>
                        </div>
                    </div>

                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 font-mono text-sm text-aurora-emerald font-semibold self-start md:self-auto">
                        {education.grade}
                    </div>
                </div>

            </div>
        </section>
    );
}