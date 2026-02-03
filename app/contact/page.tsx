'use client';

import { useState, useRef, useEffect } from 'react';
import FadeIn from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail, Phone, Send, Loader2, CheckCircle2,
    Globe, Clock, ShieldCheck, ChevronDown,
    Building2, MessageCircle, Heart, Zap,
    Check
} from 'lucide-react';

export default function ContactPage() {
    const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('Web Development');
    const selectRef = useRef<HTMLDivElement>(null);

    const services = [
        "Web Development",
        "SEO Optimization",
        "Social Media Marketing",
        "Graphic Design",
        "Chat/Call Support"
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsSelectOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('SENDING');

        const ACCESS_KEY = "ec100b76-0d43-4a48-86d0-fd695f9ab831";

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", ACCESS_KEY);
        formData.append("service_interested", selectedService); // Add custom selected service

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('SUCCESS');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('ERROR');
            }
        } catch (error) {
            setStatus('ERROR');
        }
    }

    const whyContactUs = [
        'Clear and honest communication',
        'Quick response times (within 24 hours)',
        'Tailored solutions based on your needs',
        'Professional support from experienced specialists'
    ];

    const faqs = [
        { q: 'How soon will you respond?', a: 'We aim to respond to all inquiries within 24 hours.' },
        { q: 'Do you work with international clients?', a: 'Yes, we work with businesses worldwide.' },
        { q: 'Is the consultation free?', a: 'Yes, the initial consultation is completely free.' },
        { q: 'What services do you offer?', a: 'We offer web development, SEO, social media marketing, graphic design, live chat support, and call support services.' },
    ];

    return (
        <main className="min-h-screen">
            {/* Hero & Contact Form Section */}
            <section className="section-padding">
                <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Info Column */}
                        <FadeIn>
                            <span className="inline-block py-1 px-4 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold tracking-widest uppercase text-primary mb-6">
                                Contact Us
                            </span>
                            <h1 className="text-fluid-h1 font-bold tracking-tight mb-8">
                                Let’s Talk About <br /> <span className="text-muted-foreground">Growing Your Business.</span>
                            </h1>
                            <p className="text-fluid-body text-muted-foreground font-light max-w-lg mb-12 leading-relaxed">
                                Get in touch with Clear Path Digital and let’s discuss how we can help your business grow with proven digital solutions. Whether you need development, marketing, or customer service, our team is ready to assist.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">Email Us</h4>
                                        <p className="text-muted-foreground font-light">hello@clearpathdigital.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">Phone Support</h4>
                                        <p className="text-muted-foreground font-light">+1 (555) POWER-UP</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">Availability</h4>
                                        <p className="text-muted-foreground font-light italic">24/7 Digital Support Available</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Form Column */}
                        <FadeIn delay={0.2} className="relative">
                            {status === 'SUCCESS' && (
                                <FadeIn className="absolute inset-0 z-20 flex flex-col items-center justify-center glass-card rounded-3xl p-8 text-center bg-black/80 backdrop-blur-xl border-primary/20">
                                    <CheckCircle2 className="w-16 h-16 text-primary mb-6 animate-bounce" />
                                    <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                                    <p className="text-muted-foreground mb-8">We've received your request and will be in touch shortly.</p>
                                    <Button onClick={() => setStatus('IDLE')} variant="outline" className="rounded-full px-8 border-primary/20 hover:bg-primary/10">Send Another</Button>
                                </FadeIn>
                            )}

                            <form onSubmit={handleSubmit} className={`glass-card p-8 md:p-12 rounded-3xl border border-white/5 space-y-6 transition-opacity duration-300 ${status === 'SUCCESS' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                                <h3 className="text-2xl font-bold mb-4">Request a Free Consultation</h3>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium ml-1">Full Name</label>
                                        <input
                                            name="name"
                                            id="name"
                                            required
                                            className="flex h-12 w-full rounded-xl border border-white/5 bg-white/5 px-4 py-2 text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:text-muted-foreground/50"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium ml-1">Email Address</label>
                                        <input
                                            name="email"
                                            id="email"
                                            type="email"
                                            required
                                            className="flex h-12 w-full rounded-xl border border-white/5 bg-white/5 px-4 py-2 text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:text-muted-foreground/50"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium ml-1">Phone Number <span className="text-muted-foreground text-xs">(Optional)</span></label>
                                        <input
                                            name="phone"
                                            id="phone"
                                            className="flex h-12 w-full rounded-xl border border-white/5 bg-white/5 px-4 py-2 text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:text-muted-foreground/50"
                                            placeholder="+00 000 000 000"
                                        />
                                    </div>

                                    {/* Custom Themed Select Dropdown */}
                                    <div className="space-y-2 relative" ref={selectRef}>
                                        <label className="text-sm font-medium ml-1">Service Interested In</label>
                                        <div
                                            onClick={() => setIsSelectOpen(!isSelectOpen)}
                                            className="flex h-12 w-full items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-2 text-sm text-foreground cursor-pointer hover:border-primary/30 transition-all select-none"
                                        >
                                            <span className={selectedService ? "text-foreground" : "text-muted-foreground"}>
                                                {selectedService || "Select a service"}
                                            </span>
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSelectOpen ? 'rotate-180 text-primary' : ''}`} />
                                        </div>

                                        <AnimatePresence>
                                            {isSelectOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    className="absolute z-30 top-full left-0 right-0 mt-2 glass-card rounded-2xl border border-white/10 shadow-2xl backdrop-blur-3xl overflow-hidden"
                                                >
                                                    <div className="p-2 space-y-1">
                                                        {services.map((service) => (
                                                            <div
                                                                key={service}
                                                                onClick={() => {
                                                                    setSelectedService(service);
                                                                    setIsSelectOpen(false);
                                                                }}
                                                                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm cursor-pointer transition-all ${selectedService === service
                                                                    ? 'bg-primary/20 text-primary font-bold'
                                                                    : 'text-muted-foreground hover:bg-white/5 hover:text-white'
                                                                    }`}
                                                            >
                                                                {service}
                                                                {selectedService === service && <Check className="w-4 h-4" />}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium ml-1">How can we help?</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        required
                                        className="flex min-h-[140px] w-full rounded-xl border border-white/5 bg-white/5 px-4 py-4 text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:text-muted-foreground/50 resize-none"
                                        placeholder="Tell us about your business goals..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={status === 'SENDING'}
                                    className="w-full h-14 text-lg rounded-full bg-primary text-white hover:bg-primary/90 font-semibold shadow-[0_0_30px_-10px_#8b5cf6] disabled:opacity-50"
                                >
                                    {status === 'SENDING' ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Requesting Consultation...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-5 w-5" />
                                            Send Message
                                        </>
                                    )}
                                </Button>

                                {status === 'ERROR' && (
                                    <p className="text-red-400 text-sm text-center">
                                        Something went wrong. Please try again later.
                                    </p>
                                )}
                            </form>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Why Contact Us Section */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <h2 className="text-fluid-h2 font-bold tracking-tight mb-8">Why Contact <br />Clear Path Digital?</h2>
                            <p className="text-fluid-body text-muted-foreground font-light mb-8 leading-relaxed">
                                We believe in building long-term partnerships, not one-time transactions. When you reach out, you're starting a journey toward measurable digital success.
                            </p>
                            <div className="space-y-4">
                                {whyContactUs.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-foreground/80 font-light">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} className="glass-card p-10 rounded-3xl border-white/10 flex flex-col justify-center bg-primary/5">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Globe className="w-8 h-8 animate-pulse" />
                                </div>
                                <h3 className="text-3xl font-bold">Clients Worldwide</h3>
                            </div>
                            <p className="text-lg text-muted-foreground font-light leading-relaxed">
                                Clear Path Digital proudly serves clients across different industries and regions. No matter where you’re located, we’re equipped to provide reliable digital solutions and ongoing support.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* FAQs section */}
            <section className="py-24">
                <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
                    <FadeIn className="text-center mb-16">
                        <h2 className="text-fluid-h2 font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground font-light text-center">Everything you need to know about starting your project.</p>
                    </FadeIn>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <details className="group glass-card rounded-2xl border border-white/5 overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                        <span className="text-lg font-medium pr-8">{faq.q}</span>
                                        <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform duration-300" />
                                    </summary>
                                    <div className="p-6 pt-0 text-muted-foreground font-light leading-relaxed border-t border-white/5">
                                        {faq.a}
                                    </div>
                                </details>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-12">
                <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                    <FadeIn className="glass-card rounded-3xl border-primary/20 p-12 text-center bg-primary/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                        <h2 className="text-fluid-h2 font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 font-light italic leading-relaxed">
                            Contact Clear Path Digital today and let’s build a strategy that supports your business goals.
                        </p>
                        <Button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="rounded-full px-12 h-14 text-lg bg-primary text-white hover:bg-primary-hover font-bold"
                        >
                            Get a Free Consultation
                        </Button>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
