'use client';

import FadeIn from '@/components/animations/FadeIn';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
    'Results-focused digital marketing and development solutions',
    'Affordable services for startups and growing businesses',
    'Skilled team across marketing, development, and support',
    'Clear communication and transparent processes',
    'Scalable solutions aligned with your business objectives',
];

export default function WhyChooseUs() {
    return (
        <section className="section-padding bg-slate-900/40 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />

            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <span className="inline-block py-1.5 px-6 rounded-full border border-primary/20 bg-primary/5 text-sm font-semibold tracking-widest uppercase text-primary mb-8 shadow-[0_0_15px_-5px_#8b5cf6]">
                            Why Choose Us
                        </span>
                        <h2 className="text-fluid-h2 font-bold tracking-tight mb-8">Elevating Your <br /> <span className="text-muted-foreground">Digital Authority.</span></h2>
                        <p className="text-fluid-body text-muted-foreground font-light mb-12">
                            We don't just provide services—we build the digital architecture that powers your business growth.
                            Our commitment to precision and outcome-driven strategies sets us apart.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2} className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-white/5 to-transparent">
                        <div className="space-y-6">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex items-start gap-4 group">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <p className="text-lg text-foreground/80 font-light group-hover:text-white transition-colors">
                                        {reason}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
