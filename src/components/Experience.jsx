import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ShieldCheck, Trophy } from 'lucide-react';

export default function Experience() {
    const { experience, achievements, education } = portfolioData;

    return (
        <section id="experience" className="relative py-20 sm:py-24 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col items-start mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-mono text-aurora-indigo mb-4">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>Career Trajectory</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
                        <span className="text-gradient">Professional Experience &</span>{' '}
                        <span className="text-aurora">Education</span>
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base lg:text-lg mt-3 max-w-2xl font-normal">
                        Hands-on software development experience building MERN stack applications for enterprise and SaaS clients.
                    </p>
                </div>

                {/* Experience Timeline */}
                <div className="relative border-l border-white/10 ml-2 sm:ml-4 md:ml-8 pl-4 sm:pl-6 md:pl-10 space-y-10 sm:space-y-12 mb-12 sm:mb-16">
                    {experience.map((item, index) => (
                        <div key={index} className="relative group">

                            {/* Timeline Node */}
                            <div className="absolute -left-[23px] sm:-left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-canvas border-2 border-aurora-cyan shadow-lg shadow-aurora-cyan/50 group-hover:scale-125 transition-transform" />

                            <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-aurora-cyan/30 transition-all duration-300">

                                {/* Header Info */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                                            {item.role}
                                        </h3>
                                        <div className="text-aurora-cyan font-semibold text-sm sm:text-base mt-0.5">
                                            {item.company}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono text-slate-400 mt-1 sm:mt-0">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                                            <Calendar className="w-3.5 h-3.5 text-aurora-indigo" />
                                            {item.period}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                                            <MapPin className="w-3.5 h-3.5 text-aurora-emerald" />
                                            {item.location}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-slate-300 text-xs sm:text-sm mb-5 leading-relaxed">
                                    {item.summary}
                                </p>

                                {/* Responsibilities */}
                                <div className="space-y-2.5 sm:space-y-3 mb-6">
                                    {item.responsibilities.map((resp, rIdx) => (
                                        <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                                            <CheckCircle2 className="w-4 h-4 text-aurora-cyan shrink-0 mt-0.5" />
                                            <span>{resp}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Stack Badges */}
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-white/5">
                                    {item.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 rounded-md bg-black/40 border border-white/5 text-[11px] sm:text-xs font-mono text-slate-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Competitions & Achievements Card */}
                {achievements && achievements.length > 0 && (
                    <div className="mb-8">
                        {achievements.map((ach, aIndex) => (
                            <div key={aIndex} className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-aurora-cyan/30 transition-all mb-4">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-start gap-3.5">
                                        <div className="p-3 rounded-2xl bg-aurora-cyan/10 border border-aurora-cyan/20 text-aurora-cyan shrink-0">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-mono uppercase tracking-wider text-aurora-cyan">
                                                    {ach.category}
                                                </span>
                                                <span className="text-xs font-mono text-slate-500">• {ach.period}</span>
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-display font-bold text-white mt-1">
                                                {ach.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
                                                {ach.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5 self-start sm:self-center">
                                        {ach.tags.map((t) => (
                                            <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Education Section */}
                <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                    <div className="flex items-start gap-3.5 sm:gap-4">
                        <div className="p-3 rounded-2xl bg-aurora-indigo/10 border border-aurora-indigo/20 text-aurora-indigo shrink-0">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-xs font-mono uppercase tracking-wider text-aurora-indigo">
                                Education
                            </span>
                            <h3 className="text-lg sm:text-xl font-display font-bold text-white mt-1">
                                {education.degree}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-400 mt-1">
                                {education.institution} • {education.location}
                            </p>
                        </div>
                    </div>

                    <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/5 border border-white/10 font-mono text-xs sm:text-sm text-aurora-emerald font-semibold self-start sm:self-auto">
                        {education.grade}
                    </div>
                </div>

            </div>
        </section>
    );
}