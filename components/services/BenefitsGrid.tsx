'use client';

import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { ReactNode } from 'react';

interface Benefit {
    title: string;
    description: string;
    icon: ReactNode;
}

interface BenefitsGridProps {
    benefits: Benefit[];
    title?: string;
    subtitle?: string;
}

export default function BenefitsGrid({
    benefits,
    title = "Why Choose Clear Path Digital?",
    subtitle = "The Advantage"
}: BenefitsGridProps) {
    return (
        <section className="py-32 relative">
            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="inline-block py-1 px-4 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                        {subtitle}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        {title}
                    </h2>
                    <p className="text-xl text-muted-foreground font-light">
                        We don't just deliver services; we deliver measurable growth and sustainable results.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, index) => (
                        <FadeIn key={index} className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors duration-500 group">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                            <p className="text-muted-foreground leading-relaxed font-light">
                                {benefit.description}
                            </p>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
