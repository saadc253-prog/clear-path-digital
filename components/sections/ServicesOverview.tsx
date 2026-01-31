'use client';

import { Code, Search, Share2, Palette, MessageSquare, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import Tilt from '@/components/animations/Tilt';
import Link from 'next/link';

const services = [
    {
        title: 'Custom Web Development',
        description: 'We build fast, secure, and scalable websites using modern technologies like React and Next.js. Our custom web development services focus on performance, user experience, and conversion—helping businesses turn visitors into customers.',
        icon: Code,
        href: '/services/web-development',
    },
    {
        title: 'SEO Optimization',
        description: 'Our SEO services are designed to improve search visibility, organic traffic, and website performance. We use proven on-page, technical, and content SEO strategies to help businesses rank higher and grow sustainably.',
        icon: Search,
        href: '/services/seo',
    },
    {
        title: 'Social Media Marketing',
        description: 'We help businesses grow their online presence with data-driven social media marketing strategies. From content creation to campaign management, we ensure consistent engagement and measurable results.',
        icon: Share2,
        href: '/services/social-media',
    },
    {
        title: 'Professional Graphic Design',
        description: 'We create clean, impactful designs that strengthen brand identity and support marketing efforts. Our graphic design services include branding, social media creatives, and marketing visuals tailored to your business goals.',
        icon: Palette,
        href: '/services/graphic-design',
    },
    {
        title: '24/7 Live Chat Support',
        description: 'Our trained live chat support agents help businesses respond instantly to customer inquiries, increase conversions, and improve customer satisfaction across websites and digital platforms.',
        icon: MessageSquare,
        href: '/services/chat-support',
    },
    {
        title: 'Outsourced Call Support',
        description: 'We provide professional inbound and outbound call support services to handle customer queries efficiently, ensuring reliable communication and a positive customer experience.',
        icon: Phone,
        href: '/services/call-support',
    },
];

export default function ServicesOverview() {
    return (
        <section className="section-padding relative">
            {/* Gradient Blob - Emerald */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -z-10 opacity-30" />

            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                <FadeIn className="mb-24 text-center max-w-4xl mx-auto">
                    <span className="inline-block py-1.5 px-6 rounded-full border border-primary/20 bg-primary/5 text-sm font-semibold tracking-widest uppercase text-primary mb-8 shadow-[0_0_15px_-5px_#10b981]">
                        What We Offer
                    </span>
                    <h2 className="text-fluid-h2 font-bold tracking-tight mb-8">Our Services</h2>
                    <p className="text-fluid-body text-muted-foreground font-light">
                        Clear Path Digital helps businesses grow through integrated, high-performance digital solutions
                        tailored to your unique goals and business objectives.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                    {services.map((service, index) => (
                        <FadeIn
                            key={service.title}
                            delay={index * 0.1}
                            className="group"
                        >
                            <Tilt className="h-full">
                                <Link href={service.href} className="block h-full">
                                    <div className="h-full glass-card p-8 rounded-[2rem] transition-all duration-500 hover:bg-white/5 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)] border border-white/5 bg-gradient-to-b from-white/5 to-transparent">
                                        <div className="mb-6 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                            <service.icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                                        <p className="text-muted-foreground font-light text-base leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
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
