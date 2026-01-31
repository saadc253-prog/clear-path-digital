'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden section-padding bg-background">
            {/* Emerald Gradient Swirl */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] max-w-[800px] max-h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 mix-blend-screen opacity-50 animate-pulse" />

            {/* Floating Reactive elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-[10%] w-32 h-32 border border-primary/20 rounded-full blur-sm -z-10"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -10, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 left-[5%] w-48 h-48 border border-white/5 rounded-[2rem] blur-md -z-10"
            />
            <div className="w-full max-w-[1400px] px-4 md:px-8 relative z-10">
                <StaggerContainer className="flex flex-col items-center space-y-12 text-center">

                    {/* Badge */}
                    <FadeIn direction="down">
                        <span className="inline-block py-1.5 px-6 rounded-full border border-primary/20 bg-primary/5 text-sm font-semibold tracking-widest uppercase text-primary shadow-[0_0_20px_-5px_#10b981]">
                            Clear Path Digital
                        </span>
                    </FadeIn>

                    {/* Headline */}
                    <FadeIn className="max-w-6xl space-y-6">
                        <h1 className="text-fluid-h1 font-bold tracking-tighter text-foreground leading-[0.95] md:leading-[0.85] select-none">
                            Grow Your Business Online with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Proven Digital Solutions</span>
                        </h1>
                    </FadeIn>

                    {/* Subtext */}
                    <FadeIn className="max-w-4xl text-muted-foreground text-fluid-body font-light leading-relaxed" delay={0.2}>
                        Clear Path Digital helps businesses grow through high-performance web development,
                        SEO optimization, social media marketing, professional graphic design, and reliable customer support services.
                    </FadeIn>

                    {/* CTA Buttons */}
                    <FadeIn delay={0.4} className="flex flex-col gap-6 min-[400px]:flex-row justify-center items-center pt-8">
                        <Button size="lg" asChild className="group bg-primary text-white hover:bg-primary/90 shadow-[0_0_40px_-10px_#10b981] border border-primary/20 w-full min-[400px]:w-auto">
                            <Link href="/contact">
                                Get a Free Consultation
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Link href="/services" className="text-base font-medium text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4">
                            View Our Services
                        </Link>
                    </FadeIn>
                </StaggerContainer>
            </div>
        </section>
    );
}
