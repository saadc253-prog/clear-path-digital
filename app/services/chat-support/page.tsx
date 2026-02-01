'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ProblemSolution from '@/components/services/ProblemSolution';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import BenefitsGrid from '@/components/services/BenefitsGrid';
import ContactCTA from '@/components/sections/ContactCTA';
import FadeIn from '@/components/animations/FadeIn';
import {
    MessageSquare, Clock, ShieldCheck, Smile, Database, Zap,
    TrendingUp, Users, ExternalLink, Headset,
    CheckCircle2, ShoppingBag, Wrench, Rocket, Globe,
    ChevronDown
} from 'lucide-react';
import { useState } from 'react';

export default function ChatSupportPage() {
    const processSteps = [
        {
            title: 'Understand',
            description: 'We learn about your business, products, and specific customer needs to coordinate our strategy.',
        },
        {
            title: 'Onboard',
            description: 'Our agents undergo intensive training on your workflows, knowledge base, and brand guidelines.',
        },
        {
            title: 'Support',
            description: 'Our team handles live chat interactions professionally, acting as a real-time extension of your brand.',
        },
        {
            title: 'Monitor',
            description: 'Constant tracking of performance, response quality, and customer satisfaction metrics.',
        },
        {
            title: 'Optimize',
            description: 'Continuous refinement of responses to improve conversion opportunities and user experience.',
        },
    ];

    const benefits = [
        {
            title: '24/7 Live Chat Support',
            description: 'Round-the-clock availability ensuring your customers receive assistance whenever they need it.',
            icon: <Clock className="w-6 h-6" />
        },
        {
            title: 'Website Chat Support',
            description: 'Managing live interactions directly on your site, assisting visitors with product info and navigation.',
            icon: <MessageSquare className="w-6 h-6" />
        },
        {
            title: 'Sales & Lead Chat',
            description: 'Qualifying leads, answering pre-sales questions, and guiding potential customers toward conversions.',
            icon: <TrendingUp className="w-6 h-6" />
        },
        {
            title: 'Customer Service Chat',
            description: 'Handling queries, order updates, and issue resolution to ensure a positive brand experience.',
            icon: <Users className="w-6 h-6" />
        },
        {
            title: 'Chat Outsourcing',
            description: 'Scale your support effortlessly with our trained professionals while reducing operational overhead.',
            icon: <ExternalLink className="w-6 h-6" />
        }
    ];

    const valueProps = [
        'Trained and professional chat support agents',
        'Fast response times and consistent communication',
        'Brand-aligned chat handling and specific tone',
        'Scalable support for growing businesses',
        'Global service coverage across all time zones'
    ];

    const industries = [
        { name: 'E-commerce businesses', icon: <ShoppingBag className="w-6 h-6" /> },
        { name: 'SaaS companies', icon: <Database className="w-6 h-6" /> },
        { name: 'Service-based businesses', icon: <Wrench className="w-6 h-6" /> },
        { name: 'Agencies and startups', icon: <Rocket className="w-6 h-6" /> },
        { name: 'Global brands', icon: <Globe className="w-6 h-6" /> },
    ];

    const faqs = [
        { q: 'Do you provide 24/7 live chat support?', a: 'Yes, we offer comprehensive round-the-clock live chat services to support your customers at any time.' },
        { q: 'Can your agents represent our brand?', a: 'Absolutely. We train our agents extensively on your brand voice, scripts, and product guidelines during onboarding.' },
        { q: 'What platforms do you support?', a: 'We are platform-agnostic and can work with almost any live chat software or website chat system you currently use.' },
        { q: 'Is chat support suitable for small businesses?', a: 'Yes, our services are highly scalable and cost-effective, making them ideal for both startups and established teams.' },
        { q: 'Do you work with international clients?', a: 'Yes, we provide professional chat support services to businesses and brands worldwide.' },
    ];

    return (
        <main className="min-h-screen">
            <ServiceHero
                title="Live Chat Support Services"
                subtitle="24/7 Live Chat Support Services for Businesses"
                description="Professional live chat support services to help businesses respond faster, improve customer experience, and increase conversions. Our trained agents work as an extension of your team, delivering real-time assistance worldwide."
                gradientFrom="from-teal-500/20"
                gradientTo="to-background"
            />

            <ProblemSolution
                problem="Today’s customers expect instant responses. Slow replies or missed inquiries lead to lost sales and poor satisfaction. You can't be online 24/7 to catch every lead."
                solution="Professional live chat support that engages visitors at the right moment. Our agents manage real-time interactions, qualifying leads and resolving issues around the clock."
                outcome="Respond instantly to questions, guide visitors toward action, and increase lead generation while reducing the heavy workload on your internal teams."
            />

            <BenefitsGrid benefits={benefits} />

            {/* Why Choose Us */}
            <section className="py-24 relative overflow-hidden">
                <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <h2 className="text-fluid-h2 font-bold tracking-tight mb-8">Why Choose Clear Path Digital for Chat Support</h2>
                            <p className="text-fluid-body text-muted-foreground font-light mb-8 leading-relaxed">
                                Businesses trust Clear Path Digital because we focus on quality, reliability, and results. We work closely with you to ensure our agents understand your brand, products, and processes perfectly.
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
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                            <MessageSquare className="w-48 h-48 text-primary/40 animate-pulse" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <ProcessTimeline steps={processSteps} />

            {/* Industries Section */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="w-full max-w-6xl px-4 md:px-8 mx-auto text-center">
                    <FadeIn className="mb-16">
                        <h2 className="text-fluid-h2 font-bold tracking-tight mb-4">Industries We Support</h2>
                        <p className="text-fluid-body text-muted-foreground font-light max-w-2xl mx-auto">Our live chat support services are designed to help high-growth sectors bridge the gap between visitors and customers.</p>
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
                        <p className="text-fluid-body text-muted-foreground font-light text-center">Everything you need to know about our chat support services.</p>
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
