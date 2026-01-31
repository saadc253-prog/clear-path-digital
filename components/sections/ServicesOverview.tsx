'use client';

import { Code, Search, Share2, Palette, MessageSquare, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import Tilt from '@/components/animations/Tilt';
import Link from 'next/link';

const services = [
    {
        title: 'Web Development',
        description: 'Custom, high-performance websites built with Next.js and React.',
        icon: Code,
        href: '/services/web-development',
    },
    {
        title: 'SEO Optimization',
        description: 'Data-driven strategies to increase visibility and organic traffic.',
        icon: Search,
        href: '/services/seo',
    },
    {
        title: 'Social Media Marketing',
        description: 'Engaging content and campaigns to grow your brand audience.',
        icon: Share2,
        href: '/services/social-media',
    },
    {
        title: 'Graphic Design',
        description: 'Stunning visuals and branding that resonate with your customers.',
        icon: Palette,
        href: '/services/graphic-design',
    },
    {
        title: 'Chat Support',
        description: '24/7 live chat support teams to handle customer inquiries.',
        icon: MessageSquare,
        href: '/services/chat-support',
    },
    {
        title: 'Call Support',
        description: 'Professional call handling and customer service solutions.',
        icon: Phone,
        href: '/services/call-support',
    },
];

export default function ServicesOverview() {
    return (
        <section className="py-32 relative">
            {/* Gradient Blob - Orange */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -z-10 opacity-30" />

            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                <FadeIn className="mb-24 text-center max-w-3xl mx-auto">
                    <span className="inline-block py-1.5 px-6 rounded-full border border-primary/20 bg-primary/5 text-sm font-semibold tracking-widest uppercase text-primary mb-8 shadow-[0_0_15px_-5px_var(--color-primary)]">
                        Expertise
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Digital Solutions.</h2>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light">
                        Comprehensive strategies tailored to drive your growth.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                    {services.map((service, index) => (
                        <FadeIn
                            key={service.title}
                            delay={index * 0.1}
                            className={`group ${index === 0 || index === 3 ? 'md:col-span-2' : ''
                                }`}
                        >
                            <Tilt className="h-full">
                                <Link href={service.href} className="block h-full">
                                    <div className="h-full glass-card p-10 rounded-[2rem] transition-all duration-500 hover:bg-white/5 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)] flex flex-col justify-between border border-white/5 bg-gradient-to-b from-white/5 to-transparent">
                                        <div>
                                            <div className="mb-8 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                                <service.icon className="h-7 w-7" />
                                            </div>
                                            <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                                            <p className="text-muted-foreground font-light text-xl leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                        <div className="mt-10 flex items-center text-base font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                            Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
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
