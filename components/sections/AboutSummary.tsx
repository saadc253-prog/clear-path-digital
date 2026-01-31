'use client';

import FadeIn from '@/components/animations/FadeIn';

export default function AboutSummary() {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                <div className="max-w-4xl">
                    <FadeIn>
                        <span className="inline-block py-1.5 px-6 rounded-full border border-primary/20 bg-primary/5 text-sm font-semibold tracking-widest uppercase text-primary mb-8 shadow-[0_0_15px_-5px_#10b981]">
                            About Clear Path Digital
                        </span>
                        <h2 className="text-fluid-h2 font-bold tracking-tight mb-8">Partnering for <br /> <span className="text-muted-foreground">Digital Success.</span></h2>
                        <div className="space-y-6 text-fluid-body text-muted-foreground font-light leading-relaxed">
                            <p>
                                Clear Path Digital is a full-service digital agency providing high-performance web development, SEO,
                                social media marketing, graphic design, and customer support services to businesses worldwide.
                            </p>
                            <p>
                                We partner with startups, agencies, and established companies looking for reliable digital solutions
                                that drive growth, improve efficiency, and support long-term success.
                            </p>
                            <p className="text-primary font-medium">
                                Our approach is simple: understand your goals, execute with precision, and continuously optimize for better results.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Decorative Gradient Line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
    );
}
