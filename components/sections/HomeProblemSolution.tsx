'use client';

import FadeIn from '@/components/animations/FadeIn';
import { TrendingDown, TrendingUp, Target } from 'lucide-react';

export default function HomeProblemSolution() {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-10" />

            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                <FadeIn className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1.5 px-6 rounded-full border border-primary/20 bg-primary/5 text-sm font-semibold tracking-widest uppercase text-primary mb-6 shadow-[0_0_15px_-5px_#8b5cf6]">
                        The Challenge
                    </span>
                    <h2 className="text-fluid-h2 font-bold tracking-tight mb-6">
                        Struggling to Grow Online or Manage{' '}
                        <span className="text-muted-foreground">Customer Support Efficiently?</span>
                    </h2>
                    <p className="text-fluid-body text-muted-foreground font-light leading-relaxed">
                        Many businesses face challenges like slow websites, poor search visibility, inconsistent social media growth, and delayed customer responses.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Problem */}
                    <FadeIn delay={0} className="glass-card p-8 rounded-3xl border border-red-500/10 bg-red-500/5">
                        <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6">
                            <TrendingDown className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-red-400/90">The Problem</h3>
                        <p className="text-muted-foreground font-light leading-relaxed">
                            Slow websites, weak SEO, inconsistent social media, and delayed customer support are silently costing you leads, revenue, and reputation every single day.
                        </p>
                    </FadeIn>

                    {/* Solution */}
                    <FadeIn delay={0.15} className="glass-card p-8 rounded-3xl border border-primary/20 bg-primary/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent -z-10" />
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-primary">Our Solution</h3>
                        <p className="text-muted-foreground font-light leading-relaxed">
                            Clear Path Digital provides practical, scalable solutions — from high-performance websites and data-driven SEO to AI-powered customer support and business automation.
                        </p>
                    </FadeIn>

                    {/* Outcome */}
                    <FadeIn delay={0.3} className="glass-card p-8 rounded-3xl border border-green-500/10 bg-green-500/5">
                        <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 mb-6">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-green-400/90">The Outcome</h3>
                        <p className="text-muted-foreground font-light leading-relaxed">
                            Measurable results — not just digital activity. More traffic, better conversions, faster response times, and a business that operates efficiently at scale.
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
    );
}
