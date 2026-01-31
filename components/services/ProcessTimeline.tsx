'use client';

import FadeIn from '@/components/animations/FadeIn';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ProcessStep {
    title: string;
    description: string;
}

interface ProcessTimelineProps {
    steps: ProcessStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
    return (
        <section className="py-24 relative overflow-hidden bg-background">
            <div className="container px-4 md:px-6 relative z-10">
                <FadeIn className="text-right mb-24 pr-4 md:pr-10">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-4">
                        How We Work
                    </h2>
                    <p className="text-muted-foreground text-xl font-light">
                        Transparent execution, predictable results.
                    </p>
                </FadeIn>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute right-8 md:right-1/2 top-0 bottom-0 w-px bg-white/10 md:translate-x-1/2" />

                    <div className="space-y-32">
                        {steps.map((step, index) => (
                            <FadeIn key={index} className="relative flex flex-col md:flex-row items-center group">

                                {/* Text Content */}
                                <div className={`w-full md:w-1/2 pr-16 md:pr-24 text-right ${index % 2 !== 0 ? 'md:order-1 md:text-left md:pl-24 md:pr-0' : ''}`}>
                                    <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground text-lg font-light leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Number Bubble */}
                                <div className="absolute right-0 md:right-1/2 w-16 h-16 rounded-full border border-white/10 bg-background md:translate-x-1/2 flex items-center justify-center text-xl font-light text-muted-foreground group-hover:border-primary group-hover:text-primary transition-all duration-300 z-10">
                                    {index + 1}
                                </div>

                                {/* Spacer for flex alignment */}
                                <div className="hidden md:block w-1/2" />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
