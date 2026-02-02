'use client';

import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { Users, Briefcase, Globe, Award } from 'lucide-react';

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
        color: 'text-emerald-400'
    },
    {
        label: 'Global Support',
        value: '24/7',
        description: 'Reliable customer service and project management across time zones.',
        icon: Globe,
        color: 'text-blue-400'
    },
    {
        label: 'Expert Team',
        value: 'Expert',
        description: 'Specialists in development, SEO, marketing, and support.',
        icon: Users,
        color: 'text-purple-400'
    }
];

export default function BrandImpact() {
    return (
        <section className="section-padding bg-white/5 border-y border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="glass-card p-8 rounded-[2rem] border-white/5 h-full hover:border-primary/20 transition-all group">
                                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${stat.color}`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-black tracking-tight">{stat.value}</div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-foreground/80">{stat.label}</div>
                                    <p className="text-sm text-muted-foreground font-light leading-relaxed pt-2">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
