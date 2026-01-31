'use client';

import FadeIn from '@/components/animations/FadeIn';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ArrowRight, AlertCircle, CheckCircle2, Trophy } from 'lucide-react';

interface ProblemSolutionProps {
    problem: string;
    solution: string;
    outcome: string;
}

export default function ProblemSolution({ problem, solution, outcome }: ProblemSolutionProps) {
    return (
        <section className="py-24 relative">
            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                <FadeIn className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Transformation</h2>
                    <p className="text-muted-foreground font-light text-lg">From challenge to conquest.</p>
                </FadeIn>

                <div className="grid gap-6 md:grid-cols-3 items-stretch relative">

                    {/* Connecting Lines (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-[30%] w-[5%] h-[1px] bg-white/10 -translate-y-1/2 z-0" />
                    <div className="hidden md:block absolute top-1/2 right-[30%] w-[5%] h-[1px] bg-white/10 -translate-y-1/2 z-0" />

                    {/* Problem */}
                    <FadeIn delay={0} className="relative z-10 h-full">
                        <motion.div
                            whileInView={{ rotateX: [20, 0], opacity: [0, 1] }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-full"
                        >
                            <Card className="h-full glass-card border-white/5 bg-transparent hover:bg-white/5 transition-colors duration-500">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-muted-foreground">
                                        <AlertCircle className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-muted-foreground">The Problem</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground font-light leading-relaxed">{problem}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </FadeIn>

                    {/* Solution */}
                    <FadeIn delay={0.2} className="relative z-10 h-full">
                        <motion.div
                            whileInView={{ rotateX: [20, 0], scale: [0.95, 1.05], opacity: [0, 1] }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-full"
                        >
                            <Card className="h-full glass-card border-white/20 bg-white/5 shadow-2xl">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4 text-black">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-white">Our Solution</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 font-medium leading-relaxed">{solution}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </FadeIn>

                    {/* Outcome */}
                    <FadeIn delay={0.4} className="relative z-10 h-full">
                        <motion.div
                            whileInView={{ rotateX: [20, 0], opacity: [0, 1] }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="h-full"
                        >
                            <Card className="h-full glass-card border-white/5 bg-transparent hover:bg-white/5 transition-colors duration-500">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-muted-foreground">
                                        <Trophy className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-muted-foreground">The Outcome</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground font-light leading-relaxed">{outcome}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}
