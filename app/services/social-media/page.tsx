'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ProblemSolution from '@/components/services/ProblemSolution';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import BenefitsGrid from '@/components/services/BenefitsGrid';
import ContactCTA from '@/components/sections/ContactCTA';
import FadeIn from '@/components/animations/FadeIn';
import {
    Users, Heart, Share2, MessageCircle, BarChart, Hash,
    Target, Layout, MessageSquare, LineChart, Globe,
    CheckCircle2, Rocket, Building2, Wrench, Briefcase,
    ChevronDown
} from 'lucide-react';
import { useState } from 'react';

export default function SocialMediaPage() {
    const processSteps = [
        {
            title: 'Discover',
            description: 'We dive deep into your business, target audience, and current market position to identify unique growth opportunities.',
        },
        {
            title: 'Plan',
            description: 'Building a tailored strategy that aligns content pillars, platform selection, and engagement tactics with your business goals.',
        },
        {
            title: 'Create',
            description: 'Our creative team designs and produces high-quality visuals and captions that reflect your brand voice and stop the scroll.',
        },
        {
            title: 'Engage',
            description: 'Beyond posting, we actively manage your community, responding to comments and building genuine connections with your audience.',
        },
        {
            title: 'Optimize',
            description: 'Constant analysis of performance metrics allows us to refine our approach and maximize your social media ROI.',
        },
    ];

    const benefits = [
        {
            title: 'Strategy & Planning',
            description: 'Data-driven content and growth strategies designed to deliver consistent results and brand alignment.',
            icon: <Target className="w-6 h-6" />
        },
        {
            title: 'Content Creation',
            description: 'Engaging, platform-specific content including visuals and captions that reflect your professional brand voice.',
            icon: <Layout className="w-6 h-6" />
        },
        {
            title: 'Platform Management',
            description: 'Complete management of your presence across Instagram, Facebook, LinkedIn, and more, including posting and monitoring.',
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: 'Audience Engagement',
            description: 'Building stronger relationships and brand loyalty by actively responding to comments and community messages.',
            icon: <MessageSquare className="w-6 h-6" />
        },
        {
            title: 'Performance Optimization',
            description: 'Continuous tracking and refinement of strategies to improve reach, engagement, and overall campaign effectiveness.',
            icon: <LineChart className="w-6 h-6" />
        }
    ];

    const valueProps = [
        'Goal-driven social media strategies',
        'Consistent brand messaging across all platforms',
        'Professional content and reliable execution',
        'Transparent reporting on core growth metrics',
        'Scalable services for startups and established brands'
    ];

    const industries = [
        { name: 'Startups', icon: <Rocket className="w-6 h-6" /> },
        { name: 'Small & Medium Businesses', icon: <Building2 className="w-6 h-6" /> },
        { name: 'Agencies', icon: <Briefcase className="w-6 h-6" /> },
        { name: 'Service Providers', icon: <Wrench className="w-6 h-6" /> },
        { name: 'Global Brands', icon: <Globe className="w-6 h-6" /> },
    ];

    const faqs = [
        { q: 'Which social media platforms do you manage?', a: 'We manage platforms where your customers are most active, typically focusing on Instagram, Facebook, LinkedIn, and Twitter/X.' },
        { q: 'Do you create content or just manage accounts?', a: 'We offer full-service solutions, including professional content creation, graphic design, copywriting, and daily account management.' },
        { q: 'How long does it take to see results?', a: 'Social media is a marathon, not a sprint. While initial engagement improvements usually appear within weeks, measurable growth typically takes 3-6 months of consistency.' },
        { q: 'Do you work with international clients?', a: 'Yes, we provide professional social media marketing services to businesses and brands worldwide.' },
        { q: 'Can you run paid social media campaigns?', a: 'Absolutely. We can integrate paid social campaigns into your organic strategy to accelerate reach and lead generation.' },
    ];

    return (
        <main className="min-h-screen">
            <ServiceHero
                title="Social Media Marketing"
                subtitle="Social Media Marketing Services That Help Businesses Grow"
                description="Professional strategies designed to build brand awareness, engage your audience, and drive measurable growth. We create and manage social ecosystems aligned perfectly with your core business goals."
                gradientFrom="from-purple-500/20"
                gradientTo="to-background"
            />

            <ProblemSolution
                problem="Posting content without a strategy leads to zero engagement. Without a consistent presence, your business misses vital opportunities to connect with an audience that discovers brands purely through social channels."
                solution="A dedicated social media team combining creativity with data-driven strategy. We handle everything from end-to-end planning to daily platform execution and community building."
                outcome="A strong, consistent brand presence that builds audience trust, drives high-quality traffic, and supports your long-term lead generation and conversion goals."
            />

            <BenefitsGrid benefits={benefits} />

            {/* Why Choose Us */}
            <section className="py-24 relative overflow-hidden">
                <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <h2 className="text-fluid-h2 font-bold tracking-tight mb-8">Why Choose Clear Path Digital for Social Media</h2>
                            <p className="text-fluid-body text-muted-foreground font-light mb-8 leading-relaxed">
                                We combine creativity with strategy to deliver meaningful growth, not just vanity metrics. Our focus is on building a loyal community of brand advocates that translate into real business results.
                            </p>
                            <div className="space-y-4">
                                {valueProps.map((prop, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-foreground/80 font-light">{prop}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2} className="relative aspect-square rounded-3xl overflow-hidden glass-card border-white/10 flex items-center justify-center p-12 bg-white/5">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />
                            <Users className="w-48 h-48 text-primary/40 animate-pulse" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <ProcessTimeline steps={processSteps} />

            {/* Industries Section */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="w-full max-w-6xl px-4 md:px-8 mx-auto text-center">
                    <FadeIn className="mb-16">
                        <h2 className="text-fluid-h2 font-bold tracking-tight mb-4">Who We Work With</h2>
                        <p className="text-fluid-body text-muted-foreground font-light max-w-2xl mx-auto">Our social media services are ideal for businesses ready to bridge the gap between simple posting and strategic growth.</p>
                    </FadeIn>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        {industries.map((industry, i) => (
                            <FadeIn key={i} delay={i * 0.1} className="flex flex-col items-center gap-4 group">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    {industry.icon}
                                </div>
                                <span className="text-sm font-medium text-foreground/80">{industry.name}</span>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24">
                <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
                    <FadeIn className="text-center mb-16">
                        <h2 className="text-fluid-h2 font-bold tracking-tight mb-4 text-center">Frequently Asked Questions</h2>
                        <p className="text-fluid-body text-muted-foreground font-light text-center">Everything you need to know about our social media management process.</p>
                    </FadeIn>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <details className="group glass-card rounded-2xl border border-white/5 overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                        <span className="text-lg font-medium pr-8">{faq.q}</span>
                                        <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform duration-300" />
                                    </summary>
                                    <div className="p-6 pt-0 text-muted-foreground font-light leading-relaxed border-t border-white/5">
                                        {faq.a}
                                    </div>
                                </details>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <ContactCTA />
        </main>
    );
}
