'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, ShieldCheck, Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20 bg-background">
            {/* Dynamic Mesh Gradient Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[100px] animate-pulse delay-700" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[80px]" />
            </div>

            {/* Decorative Grid Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 -z-10" />

            <div className="w-full max-w-[1400px] px-4 md:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left: Content */}
                    <div className="lg:col-span-8 flex flex-col items-start text-left">
                        <StaggerContainer className="space-y-8">
                            <FadeIn direction="down">
                                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-primary/20 bg-primary/5 text-xs font-bold tracking-[0.2em] uppercase text-primary shadow-[0_0_20px_-5px_#10b981]">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    The Future of Digital Excellence
                                </div>
                            </FadeIn>

                            <FadeIn>
                                <h1 className="text-fluid-h1 font-black tracking-tight text-foreground leading-[1] md:leading-[0.9]">
                                    Engineered to <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-white animate-gradient">Scale Your Business.</span>
                                </h1>
                            </FadeIn>

                            <FadeIn className="max-w-2xl text-muted-foreground text-fluid-body font-light leading-relaxed">
                                We don't just build websites; we engineer digital growth systems. High-performance development, data-driven SEO, and expert support designed for elite agencies and ambitious brands.
                            </FadeIn>

                            <FadeIn className="flex flex-col sm:flex-row gap-6 pt-6 w-full sm:w-auto">
                                <Button size="lg" asChild className="group bg-primary text-white hover:bg-primary-hover shadow-[0_0_40px_-10px_#10b981] px-8 py-7 text-lg rounded-2xl w-full sm:w-auto">
                                    <Link href="/contact">
                                        Start Your Project
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild className="px-8 py-7 text-lg rounded-2xl glass border-white/5 hover:bg-white/5 w-full sm:w-auto">
                                    <Link href="/work">
                                        View Case Studies
                                    </Link>
                                </Button>
                            </FadeIn>

                            {/* Trust badges */}
                            <FadeIn className="pt-8 flex flex-wrap gap-8 items-center border-t border-white/5">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground/60">
                                    <Zap className="w-4 h-4 text-primary" />
                                    <span>High Performance</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground/60">
                                    <ShieldCheck className="w-4 h-4 text-primary" />
                                    <span>Elite Security</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground/60">
                                    <Globe className="w-4 h-4 text-primary" />
                                    <span>Global Reach</span>
                                </div>
                            </FadeIn>
                        </StaggerContainer>
                    </div>

                    {/* Right: Visual Element/Abstract Shape */}
                    <FadeIn direction="up" className="lg:col-span-4 hidden lg:block">
                        <div className="relative aspect-square">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-emerald-500/20 rounded-full blur-3xl opacity-30"
                            />
                            <div className="absolute inset-4 glass-card rounded-[3rem] border-white/10 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                                <div className="p-12 text-center space-y-4">
                                    <div className="text-5xl font-black text-primary">100%</div>
                                    <div className="text-sm uppercase tracking-widest font-bold text-muted-foreground">Client Success</div>
                                </div>
                                {/* Floating particles effect mock */}
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            y: [0, -40, 0],
                                            opacity: [0, 1, 0],
                                        }}
                                        transition={{
                                            duration: Math.random() * 3 + 2,
                                            repeat: Infinity,
                                            delay: Math.random() * 2,
                                        }}
                                        className="absolute w-1 h-1 bg-primary rounded-full"
                                        style={{
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}
