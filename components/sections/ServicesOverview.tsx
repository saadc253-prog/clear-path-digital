'use client';

import { Code, Search, Share2, Palette, Bot, Sparkles, ArrowUpRight } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import Tilt from '@/components/animations/Tilt';
import Link from 'next/link';

const services = [
    {
        title: 'Custom Web Development',
        description: 'Next-gen performance with React & Next.js. Engineered for speed and scale.',
        icon: Code,
        href: '/services/web-development',
        gridClass: 'md:col-span-2 md:row-span-2',
        color: 'from-violet-500/20'
    },
    {
        title: 'SEO Optimization',
        description: 'Command search results with data-driven technical SEO.',
        icon: Search,
        href: '/services/seo',
        gridClass: 'md:col-span-2 md:row-span-1',
        color: 'from-cyan-500/20'
    },
    {
        title: 'Social Media',
        description: 'Building deep community engagement through viral strategy.',
        icon: Share2,
        href: '/services/social-media',
        gridClass: 'md:col-span-1 md:row-span-1',
        color: 'from-purple-500/20'
    },
    {
        title: 'Graphic Design',
        description: 'Premium visual identities that define market leaders.',
        icon: Palette,
        href: '/services/graphic-design',
        gridClass: 'md:col-span-1 md:row-span-1',
        color: 'from-pink-500/20'
    },
    {
        title: 'AI Chat Support',
        description: 'Intelligent 24/7 AI-powered conversations that scale infinitely.',
        icon: Bot,
        href: '/services/ai-chat-support',
        gridClass: 'md:col-span-2 md:row-span-1',
        color: 'from-teal-500/20'
    },
    {
        title: 'AI Automation',
        description: 'Smart workflow automation powered by cutting-edge AI technology.',
        icon: Sparkles,
        href: '/services/ai-automation',
        gridClass: 'md:col-span-2 md:row-span-1',
        color: 'from-blue-500/20'
    },
];

export default function ServicesOverview() {
    return (
        <section className="section-padding relative overflow-hidden bg-background">
            {/* Background Accent Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] -z-10" />

            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                <FadeIn className="mb-24 text-left max-w-4xl">
                    <span className="inline-block py-1.5 px-6 rounded-full border border-primary/20 bg-primary/5 text-sm font-semibold tracking-widest uppercase text-primary mb-8 shadow-[0_0_15px_-5px_#8b5cf6]">
                        Scale Your Impact
                    </span>
                    <h2 className="text-fluid-h2 font-black tracking-tight mb-8 leading-[1]">
                        Integrated <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Ecosystems.</span>
                    </h2>
                    <p className="text-fluid-body text-muted-foreground font-light max-w-2xl">
                        We don't just provide services—we build the 3D digital infrastructure
                        that powers consistent growth for modern agencies and startups.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid gap-4 grid-cols-1 md:grid-cols-4 md:auto-rows-[minmax(280px,auto)]">
                    {services.map((service, index) => (
                        <FadeIn
                            key={service.title}
                            delay={index * 0.1}
                            className={service.gridClass}
                        >
                            <Tilt className="h-full">
                                <Link href={service.href} className="block h-full group">
                                    <div className={`h-full glass-card p-8 rounded-[2.5rem] transition-all duration-700 hover:bg-white/5 hover:border-primary/30 relative overflow-hidden flex flex-col justify-between bg-gradient-to-br ${service.color} to-transparent`}>

                                        <div className="relative z-10 h-full flex flex-col">
                                            <div className="mb-8 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                                <service.icon className="h-6 w-6" />
                                            </div>

                                            <div className="mt-auto">
                                                <h3 className="text-2xl font-black mb-3 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                                                <p className="text-muted-foreground font-light text-base leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                                                    {service.description}
                                                </p>

                                                <div className="flex items-center text-sm font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                                    Deploy Solution <ArrowUpRight className="ml-2 w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Subtle Rim Light */}
                                        <div className="absolute inset-0 border border-white/5 group-hover:border-primary/20 rounded-[2.5rem] pointer-events-none transition-colors duration-700" />
                                    </div>
                                </Link>
                            </Tilt>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
