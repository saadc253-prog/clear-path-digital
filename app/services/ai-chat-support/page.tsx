'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ProblemSolution from '@/components/services/ProblemSolution';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import BenefitsGrid from '@/components/services/BenefitsGrid';
import ContactCTA from '@/components/sections/ContactCTA';
import FadeIn from '@/components/animations/FadeIn';
import {
    Bot, Clock, ShieldCheck, Smile, Database, Zap,
    TrendingUp, Users, Brain, MessageSquare,
    CheckCircle2, ShoppingBag, Wrench, Rocket, Globe,
    ChevronDown, Sparkles
} from 'lucide-react';
import { useState } from 'react';

export default function AIChatSupportPage() {
    const processSteps = [
        {
            title: 'Analyze',
            description: 'We analyze your business needs, customer queries, and support patterns to design the perfect AI solution.',
        },
        {
            title: 'Train',
            description: 'Our AI models are trained on your knowledge base, FAQs, and brand voice to deliver accurate responses.',
        },
        {
            title: 'Deploy',
            description: 'Seamless integration with your existing platforms - website, apps, or messaging channels.',
        },
        {
            title: 'Learn',
            description: 'Continuous machine learning from interactions to improve accuracy and customer satisfaction.',
        },
        {
            title: 'Scale',
            description: 'Effortlessly handle unlimited conversations simultaneously without additional costs.',
        },
    ];

    const benefits = [
        {
            title: 'Instant AI Responses',
            description: 'Lightning-fast answers to customer queries 24/7 with zero wait time, powered by advanced natural language processing.',
            icon: <Zap className="w-6 h-6" />
        },
        {
            title: 'Intelligent Conversations',
            description: 'Context-aware AI that understands intent, remembers conversation history, and provides personalized responses.',
            icon: <Brain className="w-6 h-6" />
        },
        {
            title: 'Multilingual Support',
            description: 'Communicate with customers in 100+ languages automatically, breaking down global barriers.',
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: 'Lead Qualification',
            description: 'AI-powered lead scoring and qualification that identifies high-value prospects and routes them appropriately.',
            icon: <TrendingUp className="w-6 h-6" />
        },
        {
            title: 'Seamless Handoff',
            description: 'Smart escalation to human agents when needed, with full conversation context preserved.',
            icon: <Users className="w-6 h-6" />
        }
    ];

    const valueProps = [
        'Advanced GPT-4 powered conversational AI',
        'Instant responses with 99.9% uptime guarantee',
        'Custom training on your brand and products',
        'Unlimited scalability without additional costs',
        'Real-time analytics and performance insights'
    ];

    const industries = [
        { name: 'E-commerce', icon: <ShoppingBag className="w-6 h-6" /> },
        { name: 'SaaS & Tech', icon: <Database className="w-6 h-6" /> },
        { name: 'Healthcare', icon: <Wrench className="w-6 h-6" /> },
        { name: 'Finance', icon: <Rocket className="w-6 h-6" /> },
        { name: 'Education', icon: <Globe className="w-6 h-6" /> },
    ];

    const faqs = [
        { q: 'How accurate is the AI chat support?', a: 'Our AI achieves 95%+ accuracy through advanced GPT-4 models and custom training on your specific business data. It continuously learns and improves from every interaction.' },
        { q: 'Can the AI handle complex customer queries?', a: 'Yes! Our AI is trained to understand context, handle multi-turn conversations, and escalate to human agents when needed for complex scenarios.' },
        { q: 'How long does implementation take?', a: 'Most implementations are live within 2-4 weeks, including custom training, integration, and testing phases.' },
        { q: 'What happens if the AI can\'t answer a question?', a: 'The AI seamlessly transfers the conversation to a human agent with full context, ensuring no customer frustration.' },
        { q: 'Is my customer data secure?', a: 'Absolutely. We use enterprise-grade encryption, comply with GDPR/CCPA, and never share your data with third parties.' },
    ];

    return (
        <main className="min-h-screen">
            <ServiceHero
                title="AI Chat Support"
                subtitle="Intelligent 24/7 AI-Powered Customer Conversations"
                description="Transform customer support with cutting-edge AI that understands, learns, and scales infinitely. Deliver instant, personalized responses while reducing costs by up to 80%."
                gradientFrom="from-teal-500/20"
                gradientTo="to-background"
            />

            <ProblemSolution
                problem="Traditional chat support is expensive, slow to scale, and limited by human availability. Customers expect instant answers 24/7, but hiring enough agents is cost-prohibitive."
                solution="AI-powered chat support that handles unlimited conversations simultaneously with human-like understanding. Our intelligent system learns your business and delivers accurate, personalized responses instantly."
                outcome="Reduce support costs by 80%, respond to 100% of inquiries instantly, and scale effortlessly as your business grows - all while maintaining high customer satisfaction."
            />

            <BenefitsGrid benefits={benefits} />

            {/* Why Choose Us */}
            <section className="py-24 relative overflow-hidden">
                <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <h2 className="text-fluid-h2 font-bold tracking-tight mb-8">Why Choose Clear Path Digital for AI Chat</h2>
                            <p className="text-fluid-body text-muted-foreground font-light mb-8 leading-relaxed">
                                We combine cutting-edge AI technology with deep business understanding. Our solutions are custom-trained for your industry, ensuring accurate, brand-aligned responses that truly understand your customers.
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
                            <Bot className="w-48 h-48 text-primary/40 animate-pulse" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <ProcessTimeline steps={processSteps} />

            {/* Industries Section */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="w-full max-w-6xl px-4 md:px-8 mx-auto text-center">
                    <FadeIn className="mb-16">
                        <h2 className="text-fluid-h2 font-bold tracking-tight mb-4">Industries We Transform</h2>
                        <p className="text-fluid-body text-muted-foreground font-light max-w-2xl mx-auto">Our AI chat solutions are tailored for high-growth sectors that demand instant, intelligent customer engagement.</p>
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
                        <p className="text-fluid-body text-muted-foreground font-light text-center">Everything you need to know about our AI chat support.</p>
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
