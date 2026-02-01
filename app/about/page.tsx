'use client';

import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import ContactCTA from '@/components/sections/ContactCTA';
import Link from 'next/link';
import {
    Users, Target, Zap, Globe, Code, Search,
    Share2, Palette, Headset, CheckCircle2,
    Rocket, ChevronRight, Briefcase, Building2
} from 'lucide-react';

export default function AboutPage() {
    const whatWeDo = [
        {
            title: 'Web Development',
            description: 'Custom websites using modern technologies.',
            icon: <Code className="w-6 h-6" />,
            link: '/services/web-development'
        },
        {
            title: 'SEO Optimization',
            description: 'Sustainable organic growth strategies.',
            icon: <Search className="w-6 h-6" />,
            link: '/services/seo'
        },
        {
            title: 'Social Media',
            description: 'Building brand awareness and engagement.',
            icon: <Share2 className="w-6 h-6" />,
            link: '/services/social-media'
        },
        {
            title: 'Graphic Design',
            description: 'Consistent and professional brand identity.',
            icon: <Palette className="w-6 h-6" />,
            link: '/services/graphic-design'
        },
        {
            title: 'Customer Support',
            description: '24/7 live chat and call support services.',
            icon: <Headset className="w-6 h-6" />,
            link: '/services/call-support'
        }
    ];

    const howWeWork = [
        { id: '01', title: 'Understand', description: 'We take time to understand your business, goals, and audience.' },
        { id: '02', title: 'Plan', description: 'We create a tailored strategy aligned with your objectives.' },
        { id: '03', title: 'Execute', description: 'Our team delivers with precision and attention to detail.' },
        { id: '04', title: 'Optimize', description: 'We continuously improve performance based on data and feedback.' }
    ];

    const valueProps = [
        'Results-driven digital solutions',
        'Clear communication and honest timelines',
        'Skilled professionals across multiple disciplines',
        'Scalable services that grow with your business',
        'Global service delivery with a personalized approach'
    ];

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="section-padding overflow-hidden">
                <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
                    <FadeIn className="text-center mb-16 md:mb-24">
                        <span className="inline-block py-1 px-4 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium tracking-widest uppercase text-primary mb-6">
                            Full-Service Digital Agency
                        </span>
                        <h1 className="text-fluid-h1 font-bold tracking-tight mb-8">
                            About <span className="text-muted-foreground">Clear Path Digital</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-medium text-white/90 mb-8 max-w-4xl mx-auto">
                            Helping Businesses Grow with Proven Digital Solutions
                        </h2>
                        <p className="text-fluid-body text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
                            Clear Path Digital is focused on helping businesses grow, scale, and succeed online.
                            We provide end-to-end solutions that drive real results, acting as your reliable digital partner worldwide.
                        </p>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                        <FadeIn className="glass-card p-10 rounded-3xl border-white/10">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                                <Users className="w-7 h-7" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6">Who We Are</h3>
                            <p className="text-lg text-muted-foreground font-light leading-relaxed">
                                We are a team of developers, marketers, designers, and support professionals working together to solve real business challenges.
                                From building high-performance websites to managing customer interactions, we help businesses strengthen their online presence and improve operational efficiency.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.2} className="glass-card p-10 rounded-3xl border-primary/20 bg-primary/5">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                                <Target className="w-7 h-7" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                                To empower businesses with digital solutions that are effective, scalable, and aligned with their long-term goals. We focus on creating value through performance-driven strategies and clean execution.
                            </p>
                            <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                                <p className="text-primary font-medium italic text-xl">
                                    "Your growth is our success."
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
                    <FadeIn className="mb-16">
                        <h2 className="text-fluid-h2 font-bold tracking-tight mb-4">What We Do</h2>
                        <p className="text-muted-foreground font-light max-w-2xl">A complete range of digital services designed to help you stand out in competitive markets.</p>
                    </FadeIn>

                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whatWeDo.map((item, i) => (
                            <Link key={i} href={item.link}>
                                <FadeIn className="glass-card p-8 rounded-2xl border-white/5 hover:border-primary/50 transition-all duration-300 group h-full">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-xl font-bold">{item.title}</h4>
                                    </div>
                                    <p className="text-muted-foreground font-light mb-4">{item.description}</p>
                                    <div className="flex items-center text-xs font-bold uppercase tracking-widest text-primary gap-2 group-hover:gap-4 transition-all">
                                        Learn More <ChevronRight className="w-4 h-4" />
                                    </div>
                                </FadeIn>
                            </Link>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* How We Work */}
            <section className="py-24 relative overflow-hidden">
                <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <FadeIn className="md:w-1/3">
                            <h2 className="text-fluid-h2 font-bold tracking-tight mb-8">How We Work</h2>
                            <p className="text-muted-foreground font-light leading-relaxed mb-8">
                                We believe in clarity, collaboration, and consistency. Our process is designed to keep things simple and transparent, allowing us to build long-term partnerships.
                            </p>
                            <Link href="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary-hover transition-all">
                                Get a Free Consultation
                            </Link>
                        </FadeIn>

                        <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
                            {howWeWork.map((step, i) => (
                                <FadeIn key={i} delay={i * 0.1} className="relative p-8 rounded-3xl bg-white/5 border border-white/5">
                                    <span className="absolute top-8 right-8 text-5xl font-black text-white/5 select-none">{step.id}</span>
                                    <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                                    <p className="text-muted-foreground font-light leading-relaxed">{step.description}</p>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us & Global Reach */}
            <section className="py-24 bg-primary/5 border-t border-white/5">
                <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <FadeIn>
                            <h2 className="text-fluid-h2 font-bold tracking-tight mb-8">Why Choose Us</h2>
                            <div className="space-y-6">
                                {valueProps.map((prop, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                        </div>
                                        <p className="text-lg text-muted-foreground font-light leading-tight">{prop}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} className="glass-card p-10 rounded-3xl border-white/10 flex flex-col justify-center">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Globe className="w-8 h-8 animate-pulse" />
                                </div>
                                <h3 className="text-3xl font-bold">Clients Worldwide</h3>
                            </div>
                            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-6">
                                Clear Path Digital works with brands across different industries and regions. Our global approach allows us to support businesses regardless of location, while maintaining elite responsiveness.
                            </p>
                            <p className="text-muted-foreground font-light italic border-l-2 border-primary/50 pl-6">
                                Whether you’re launching a new brand or improving an existing digital presence, we’re here to guide you every step of the way.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <ContactCTA />
        </main>
    );
}
