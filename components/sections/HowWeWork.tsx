'use client';

import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { Search, Lightbulb, Rocket, BarChart3 } from 'lucide-react';

const steps = [
    {
        number: '01',
        title: 'Understand Your Goals',
        description: 'We analyze your business challenges, target audience, and growth objectives to build a clear picture of what success looks like for you.',
        icon: Search,
        color: 'text-violet-400',
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/20',
    },
    {
        number: '02',
        title: 'Build a Growth Strategy',
        description: 'We create a tailored plan combining web development, marketing, AI support, and automation — designed specifically for your business and budget.',
        icon: Lightbulb,
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/20',
    },
    {
        number: '03',
        title: 'Execute with Precision',
        description: 'Our skilled team implements solutions with a focus on performance, scalability, and long-term impact. You stay informed at every step.',
        icon: Rocket,
        color: 'text-primary',
        bg: 'bg-primary/10',
        border: 'border-primary/20',
    },
    {
        number: '04',
        title: 'Optimize for Results',
        description: 'We continuously monitor performance and refine strategies based on real data — ensuring your investment keeps delivering better outcomes.',
        icon: BarChart3,
        color: 'text-green-400',
        bg: 'bg-green-500/10',
        border: 'border-green-500/20',
    },
];

export default function HowWeWork() {
    return (
        <section className="section-padding bg-slate-50 border-y border-slate-200 relative overflow-hidden">
            <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-violet-100/50 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                <FadeIn className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block py-1.5 px-6 rounded-full border border-primary/20 bg-primary/5 text-sm font-semibold tracking-widest uppercase text-primary mb-6 shadow-[0_0_15px_-5px_#8b5cf6]">
                        Our Process
                    </span>
                    <h2 className="text-fluid-h2 font-bold tracking-tight mb-4">
                        How We Help Your{' '}
                        <span className="text-muted-foreground">Business Grow</span>
                    </h2>
                    <p className="text-fluid-body text-muted-foreground font-light">
                        A clear, structured approach that delivers consistent results for every client, every time.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <FadeIn key={step.number} delay={i * 0.1}>
                            <div className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-violet-300 hover:shadow-md transition-all duration-500 h-full group">
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`w-12 h-12 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center ${step.color} group-hover:scale-110 transition-transform`}>
                                        <step.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-4xl font-black text-slate-100 select-none">{step.number}</span>
                                </div>
                                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                                <p className="text-sm text-muted-foreground font-light leading-relaxed">{step.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
