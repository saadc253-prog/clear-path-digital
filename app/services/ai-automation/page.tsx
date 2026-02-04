'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ProblemSolution from '@/components/services/ProblemSolution';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import BenefitsGrid from '@/components/services/BenefitsGrid';
import ContactCTA from '@/components/sections/ContactCTA';
import FadeIn from '@/components/animations/FadeIn';
import {
    Sparkles, Zap, Workflow, Brain, Database, Clock,
    TrendingUp, BarChart3, RefreshCw, Shield,
    CheckCircle2, Building2, ShoppingBag,
    Wrench, Rocket, Globe, ChevronDown, Cpu
} from 'lucide-react';

export default function AIAutomationPage() {
    const processSteps = [
        {
            title: 'Discover',
            description: 'We analyze your workflows, identify repetitive tasks, and map automation opportunities across your business.',
        },
        {
            title: 'Design',
            description: 'Custom AI automation solutions tailored to your specific processes, tools, and business objectives.',
        },
        {
            title: 'Deploy',
            description: 'Seamless integration with your existing systems - CRM, email, databases, and third-party apps.',
        },
        {
            title: 'Monitor',
            description: 'Real-time performance tracking with detailed analytics on time saved, errors reduced, and ROI.',
        },
        {
            title: 'Evolve',
            description: 'Continuous optimization as your business grows, with AI that learns and adapts to new patterns.',
        },
    ];

    const benefits = [
        {
            title: 'Intelligent Workflow Automation',
            description: 'AI-powered automation that handles complex decision-making, not just simple if-then rules. Adapts to edge cases automatically.',
            icon: <Workflow className="w-6 h-6" />
        },
        {
            title: 'Data Processing & Analysis',
            description: 'Automatically extract, transform, and analyze data from multiple sources with AI precision. Real-time data syncing across platforms.',
            icon: <Database className="w-6 h-6" />
        },
        {
            title: 'Smart Document Processing',
            description: 'AI that reads, understands, and processes invoices, contracts, and forms automatically with 99.7% accuracy.',
            icon: <Cpu className="w-6 h-6" />
        },
        {
            title: 'Predictive Analytics',
            description: 'Forecast trends, identify patterns, and make data-driven decisions with AI-powered insights and machine learning models.',
            icon: <BarChart3 className="w-6 h-6" />
        },
        {
            title: 'Integration Ecosystem',
            description: 'Connect 1000+ apps and services seamlessly - from Salesforce to Slack to custom APIs. No-code visual workflow builder.',
            icon: <RefreshCw className="w-6 h-6" />
        },
        {
            title: 'Email Automation',
            description: 'Smart email categorization, auto-responses, and intelligent routing based on content analysis and sentiment.',
            icon: <Zap className="w-6 h-6" />
        },
        {
            title: 'CRM Synchronization',
            description: 'Automatic contact updates, deal tracking, and pipeline management across Salesforce, HubSpot, and custom CRMs.',
            icon: <TrendingUp className="w-6 h-6" />
        },
        {
            title: 'Custom API Workflows',
            description: 'Build sophisticated multi-step automations with webhooks, REST APIs, and custom business logic tailored to your needs.',
            icon: <Shield className="w-6 h-6" />
        }
    ];

    const valueProps = [
        'Reduce manual work by up to 90% - save 20-30 hours per week per employee',
        'Eliminate 99.7% of human errors in repetitive tasks',
        'Scale operations 10x without proportional headcount growth',
        '24/7 automated processing with 99.9% uptime SLA',
        'Average ROI of 400% achieved within 3-6 months',
        'Process 1000+ tasks per day that previously required full-time staff'
    ];

    const industries = [
        { name: 'E-commerce', icon: <ShoppingBag className="w-6 h-6" /> },
        { name: 'Finance & Banking', icon: <Building2 className="w-6 h-6" /> },
        { name: 'Healthcare', icon: <Wrench className="w-6 h-6" /> },
        { name: 'SaaS & Tech', icon: <Rocket className="w-6 h-6" /> },
        { name: 'Manufacturing', icon: <Globe className="w-6 h-6" /> },
    ];

    const faqs = [
        { q: 'What types of tasks can AI automation handle?', a: 'AI automation can handle data entry, document processing, email responses, scheduling, report generation, customer onboarding, invoice processing, and much more. If it\'s repetitive and rule-based, we can automate it.' },
        { q: 'How long does implementation take?', a: 'Simple automations can be live in 1-2 weeks. Complex enterprise solutions typically take 4-8 weeks including discovery, design, development, testing, and training.' },
        { q: 'Will automation replace my team?', a: 'No! Automation eliminates tedious tasks, allowing your team to focus on strategic, creative, and high-value work. It augments human capabilities rather than replacing them.' },
        { q: 'What if my processes change?', a: 'Our AI automation solutions are designed to be flexible and easily updated. We provide ongoing support and can quickly adapt automations as your business evolves.' },
        { q: 'Is my data secure?', a: 'Absolutely. We use enterprise-grade encryption, comply with GDPR/SOC 2 standards, and never store sensitive data unnecessarily. Security is built into every automation.' },
    ];

    return (
        <main className="min-h-screen">
            <ServiceHero
                title="AI Automation"
                subtitle="Intelligent Workflow Automation Powered by AI"
                description="Transform your business operations with cutting-edge AI automation. Eliminate repetitive tasks, reduce errors by 99%, and scale effortlessly while your team focuses on what truly matters."
                gradientFrom="from-blue-500/20"
                gradientTo="to-background"
            />

            <ProblemSolution
                problem="Manual, repetitive tasks consume 40% of your team's time. Human errors cost money, slow growth, and create bottlenecks. Scaling requires hiring more people, increasing overhead exponentially."
                solution="AI-powered automation that handles repetitive workflows intelligently. Our systems learn your processes, make smart decisions, and execute tasks 24/7 with perfect accuracy."
                outcome="Reduce operational costs by 60%, eliminate 99% of manual errors, and scale infinitely without proportional headcount growth. Your team becomes 10x more productive overnight."
            />

            <BenefitsGrid benefits={benefits} />

            {/* Why Choose Us */}
            <section className="py-24 relative overflow-hidden">
                <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <h2 className="text-fluid-h2 font-bold tracking-tight mb-8">Why Choose Clear Path Digital for AI Automation</h2>
                            <p className="text-fluid-body text-muted-foreground font-light mb-8 leading-relaxed">
                                We don't just automate tasks - we transform businesses. Our AI solutions are custom-built for your unique workflows, ensuring maximum ROI and seamless integration with your existing tech stack.
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
                            <Sparkles className="w-48 h-48 text-primary/40 animate-pulse" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <ProcessTimeline steps={processSteps} />

            {/* Industries Section */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="w-full max-w-6xl px-4 md:px-8 mx-auto text-center">
                    <FadeIn className="mb-16">
                        <h2 className="text-fluid-h2 font-bold tracking-tight mb-4">Industries We Automate</h2>
                        <p className="text-fluid-body text-muted-foreground font-light max-w-2xl mx-auto">Our AI automation solutions are transforming operations across diverse sectors, from startups to Fortune 500 companies.</p>
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
                        <p className="text-fluid-body text-muted-foreground font-light text-center">Everything you need to know about AI automation.</p>
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
