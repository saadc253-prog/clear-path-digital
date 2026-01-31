'use client';

import { useState } from 'react';
import FadeIn from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, Send, Loader2, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
    const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('SENDING');

        const formData = new FormData(e.currentTarget);
        // access_key for Web3Forms
        formData.append("access_key", "ea8b17b6-c56a-4467-9c98-df570188667c");

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

    return (
        <main className="section-padding min-h-screen">
            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Info */}
                    <FadeIn className="lg:sticky lg:top-32">
                        <span className="inline-block py-1 px-4 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold tracking-widest uppercase text-primary mb-6">
                            Connect
                        </span>
                        <h1 className="text-fluid-h1 font-bold tracking-tight mb-8">
                            Let's Build <br /> <span className="text-muted-foreground">Digital Power.</span>
                        </h1>
                        <p className="text-fluid-body text-muted-foreground font-light max-w-lg mb-12 leading-relaxed">
                            Have a visionary project in mind? We're ready to engineer it.
                            Fill out the form for a direct line to our lead strategists.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium">Direct Email</h4>
                                    <p className="text-muted-foreground font-light">saadc253@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium">Priority Line</h4>
                                    <p className="text-muted-foreground font-light">+1 (555) POWER-UP</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right Column: Glass Form */}
                    <FadeIn delay={0.2}>
                        <div className="relative">
                            {status === 'SUCCESS' && (
                                <FadeIn className="absolute inset-0 z-20 flex flex-col items-center justify-center glass-card rounded-3xl p-8 text-center animate-in fade-in zoom-in duration-500">
                                    <CheckCircle2 className="w-16 h-16 text-primary mb-6 animate-bounce" />
                                    <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                                    <p className="text-muted-foreground mb-8">We've received your request and will be in touch within 24 hours.</p>
                                    <Button onClick={() => setStatus('IDLE')} variant="outline" className="rounded-full px-8">Send Another</Button>
                                </FadeIn>
                            )}

                            <form onSubmit={handleSubmit} className={`glass-card p-8 md:p-12 rounded-3xl border border-white/5 space-y-8 transition-opacity duration-300 ${status === 'SUCCESS' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                                {/* Hidden Field for redirect/anti-spam */}
                                <input type="hidden" name="from_name" value="Clear Path Digital Contact Form" />
                                <input type="hidden" name="replyto" value="saadc253@gmail.com" />

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                                        <input
                                            name="name"
                                            id="name"
                                            required
                                            className="flex h-12 w-full rounded-xl border border-white/5 bg-white/5 px-4 py-2 text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:text-muted-foreground/50"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
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
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium ml-1">Project Category</label>
                                    <select
                                        name="subject"
                                        id="subject"
                                        className="flex h-12 w-full rounded-xl border border-white/5 bg-white/5 px-4 py-2 text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                                    >
                                        <option value="Web Engineering">Web Engineering</option>
                                        <option value="SEO Operations">SEO Operations</option>
                                        <option value="Brand Identity">Brand Identity</option>
                                        <option value="CX Solutions">CX Solutions</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium ml-1">Project Details</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        required
                                        className="flex min-h-[160px] w-full rounded-xl border border-white/5 bg-white/5 px-4 py-4 text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:text-muted-foreground/50 resize-y"
                                        placeholder="Tell us about your goals..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={status === 'SENDING'}
                                    className="w-full h-14 text-lg rounded-full bg-primary text-white hover:bg-primary/90 font-semibold shadow-[0_0_30px_-10px_#10b981] disabled:opacity-50"
                                >
                                    {status === 'SENDING' ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Launching...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-5 w-5" />
                                            Send Message
                                        </>
                                    )}
                                </Button>

                                {status === 'ERROR' && (
                                    <p className="text-red-400 text-sm text-center animate-pulse">
                                        Something went wrong. Please try again or email us directly.
                                    </p>
                                )}
                            </form>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </main>
    );
}
