import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

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

export default function Contact() {
    const { personal } = portfolioData;
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            if (personal.web3formsKey && personal.web3formsKey !== 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify({
                        access_key: personal.web3formsKey,
                        name: formData.name,
                        email: formData.email,
                        subject: formData.subject || 'Portfolio Inquiry',
                        message: formData.message,
                        from_name: 'Roopesh Portfolio Contact',
                    }),
                });

                const result = await response.json();
                if (result.success) {
                    setIsSubmitted(true);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                } else {
                    setErrorMessage(result.message || 'Something went wrong. Please try again or email directly.');
                }
            } else {
                window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`)}`;
                setIsSubmitted(true);
            }
        } catch (err) {
            setErrorMessage('Network error. Please email directly at ' + personal.email);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative py-20 sm:py-24 px-4 sm:px-6 bg-canvas-elevated/40">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <ScrollReveal>
                    <div className="flex flex-col items-start mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-mono text-aurora-cyan mb-4">
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>Get in Touch</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
                            <span className="text-gradient">Let's</span>{' '}
                            <span className="text-aurora">Connect</span>
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base lg:text-lg mt-3 max-w-2xl font-normal">
                            Feel free to reach out regarding full-time opportunities, projects, or technical conversations.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">

                    {/* Direct Channels */}
                    <div className="lg:col-span-5 space-y-4 sm:space-y-6">
                        <ScrollReveal delay={150}>
                            <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 space-y-5 sm:space-y-6">
                                <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                                    Contact Details
                                </h3>

                                <div className="space-y-3 sm:space-y-4">
                                    <a
                                        href={`mailto:${personal.email}`}
                                        className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5 hover:border-aurora-cyan/40 hover:bg-white/[0.06] transition-all group"
                                    >
                                        <div className="p-2.5 sm:p-3 rounded-xl bg-aurora-cyan/10 text-aurora-cyan group-hover:scale-110 transition-transform shrink-0">
                                            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                        <div className="min-w-0">
                                            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 block uppercase">Email</span>
                                            <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-aurora-cyan transition-colors truncate block">{personal.email}</span>
                                        </div>
                                    </a>

                                    <a
                                        href={`tel:${personal.phone}`}
                                        className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5 hover:border-aurora-emerald/40 hover:bg-white/[0.06] transition-all group"
                                    >
                                        <div className="p-2.5 sm:p-3 rounded-xl bg-aurora-emerald/10 text-aurora-emerald group-hover:scale-110 transition-transform shrink-0">
                                            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 block uppercase">Phone</span>
                                            <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-aurora-emerald transition-colors">{personal.phone}</span>
                                        </div>
                                    </a>

                                    <div className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5">
                                        <div className="p-2.5 sm:p-3 rounded-xl bg-aurora-indigo/10 text-aurora-indigo shrink-0">
                                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 block uppercase">Location</span>
                                            <span className="text-xs sm:text-sm font-semibold text-white">{personal.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Channels */}
                                <div className="pt-4 border-t border-white/10 flex items-center gap-2 sm:gap-3">
                                    <a
                                        href={personal.socials.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="GitHub Profile"
                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl glass-card text-xs font-mono text-slate-300 hover:text-white hover:border-aurora-cyan/40 transition-colors"
                                    >
                                        <GithubIcon />
                                        <span>GitHub</span>
                                    </a>

                                    <a
                                        href={personal.socials.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="LinkedIn Profile"
                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl glass-card text-xs font-mono text-slate-300 hover:text-white hover:border-aurora-cyan/40 transition-colors"
                                    >
                                        <LinkedinIcon />
                                        <span>LinkedIn</span>
                                    </a>
                                </div>

                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <ScrollReveal delay={250}>
                            <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 relative overflow-hidden">

                                {isSubmitted ? (
                                    <div className="py-10 sm:py-12 flex flex-col items-center justify-center text-center space-y-4">
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-aurora-emerald/10 border border-aurora-emerald/30 text-aurora-emerald flex items-center justify-center animate-bounce">
                                            <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-display font-bold text-white">Message Sent</h3>
                                        <p className="text-slate-400 text-xs sm:text-sm max-w-md">
                                            Thank you for reaching out. I will review your message and get back to you shortly.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="mt-4 px-5 py-2 sm:px-6 sm:py-2.5 rounded-xl bg-white/10 text-xs font-mono text-white hover:bg-white/15 transition-all cursor-pointer"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

                                        {errorMessage && (
                                            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                                                <AlertCircle className="w-4 h-4 shrink-0" />
                                                <span>{errorMessage}</span>
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                            <div>
                                                <label className="block text-[11px] font-mono text-slate-400 mb-1.5 uppercase">Your Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    placeholder="Sarah Jenkins"
                                                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-aurora-cyan/60 transition-colors"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-[11px] font-mono text-slate-400 mb-1.5 uppercase">Email Address</label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    placeholder="sarah@company.com"
                                                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-aurora-cyan/60 transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-mono text-slate-400 mb-1.5 uppercase">Subject</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                placeholder="Full Stack Engineering Role / Project"
                                                className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-aurora-cyan/60 transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-mono text-slate-400 mb-1.5 uppercase">Message</label>
                                            <textarea
                                                rows={4}
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="Hello Roopesh, I'd like to discuss an opportunity..."
                                                className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-aurora-cyan/60 transition-colors resize-none"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-aurora-cyan to-aurora-indigo text-slate-950 font-semibold text-xs sm:text-sm hover:opacity-95 transition-all shadow-lg shadow-aurora-cyan/15 disabled:opacity-50 cursor-pointer"
                                        >
                                            {isSubmitting ? (
                                                <span className="font-mono text-xs animate-pulse">Sending message...</span>
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <Send className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}

                            </div>
                        </ScrollReveal>
                    </div>

                </div>

            </div>
        </section>
    );
}