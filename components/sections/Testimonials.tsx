'use client';

import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        quote: 'Clear Path Digital helped us launch a high-performance website and improve our lead generation significantly. Highly professional team.',
        author: 'Startup Founder',
        role: 'Tech Startup',
        rating: 5,
    },
    {
        quote: 'Their AI chat support team improved our response time and customer satisfaction dramatically. We saw an immediate positive impact.',
        author: 'E-commerce Owner',
        role: 'Online Retail Brand',
        rating: 5,
    },
    {
        quote: 'Their SEO strategy helped us rank on the first page within months. The organic traffic growth has been exceptional and consistent.',
        author: 'Marketing Director',
        role: 'SaaS Company',
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-100/40 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                <FadeIn className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block py-1.5 px-6 rounded-full border border-primary/20 bg-primary/5 text-sm font-semibold tracking-widest uppercase text-primary mb-6 shadow-[0_0_15px_-5px_#8b5cf6]">
                        Client Results
                    </span>
                    <h2 className="text-fluid-h2 font-bold tracking-tight mb-4">
                        Trusted by{' '}
                        <span className="text-muted-foreground">Growing Businesses</span>
                    </h2>
                    <p className="text-fluid-body text-muted-foreground font-light">
                        Real feedback from businesses that partnered with Clear Path Digital to grow online.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-violet-300 hover:shadow-md transition-all duration-500 h-full flex flex-col group">
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(t.rating)].map((_, s) => (
                                        <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>

                                {/* Quote icon */}
                                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                                {/* Quote text */}
                                <p className="text-slate-600 font-light leading-relaxed italic flex-1 mb-8">
                                    "{t.quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 border-t border-white/5 pt-6">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                                        {t.author[0]}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm">{t.author}</div>
                                        <div className="text-xs text-muted-foreground">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
