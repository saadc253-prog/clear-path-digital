'use client';

import FadeIn from '@/components/animations/FadeIn';
import dynamic from 'next/dynamic';
import { Users, Briefcase, Globe, Award } from 'lucide-react';

const MetricGlobe = dynamic(() => import('@/components/ui/MetricGlobe'), { ssr: false });

const stats = [
    {
        label: 'Industries Served',
        value: '10+',
        description: 'Providing tailored digital growth strategies across multiple sectors.',
        icon: Briefcase,
        color: 'text-primary'
    },
    {
        label: 'Client Satisfaction',
        value: '100%',
        description: 'Committed to delivering measurable results and exceptional service.',
        icon: Award,
        color: 'text-accent'
    },
    {
        label: 'Global Support',
        value: '24/7',
        description: 'Reliable customer service and project management across time zones.',
        icon: Globe,
        color: 'text-primary'
    },
    {
        label: 'Expert Team',
        value: 'Elite',
        description: 'Specialists in development, SEO, marketing, and support.',
        icon: Users,
        color: 'text-purple-400'
    }
];

export default function BrandImpact() {
    return (
        <section className="section-padding bg-slate-900/20 border-y border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[150px] pointer-events-none" />

            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left side: Globe Visualization */}
                    <FadeIn className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative w-full aspect-square max-w-[600px]">
                            <MetricGlobe />
                            {/* Orbital Text Rings */}
                            <div className="absolute inset-0 border border-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-8 border border-accent/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        </div>
                    </FadeIn>

                    {/* Right side: Stats Grid */}
                    <div className="lg:w-1/2 w-full">
                        <FadeIn className="mb-12">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Proven Reach</span>
                            <h2 className="text-fluid-h2 font-black tracking-tight leading-[1.1]">
                                Engineered for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Global Dominance.</span>
                            </h2>
                        </FadeIn>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {stats.map((stat, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="glass-card p-6 rounded-3xl border-white/5 hover:border-primary/20 transition-all group bg-white/5">
                                        <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                                            <stat.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-3xl font-black tracking-tight mb-1">{stat.value}</div>
                                            <div className="text-xs font-bold uppercase tracking-widest text-foreground/60 mb-2">{stat.label}</div>
                                            <p className="text-xs text-muted-foreground font-light leading-relaxed">
                                                {stat.description}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
