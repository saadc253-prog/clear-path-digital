'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ProblemSolution from '@/components/services/ProblemSolution';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import BenefitsGrid from '@/components/services/BenefitsGrid';
import ContactCTA from '@/components/sections/ContactCTA';
import FadeIn from '@/components/animations/FadeIn';
import { Target, TrendingUp, Globe, LineChart, Award, FileText, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function SeoPage() {
    const processSteps = [
        {
            title: 'Website & SEO Audit',
            description: 'We perform a detailed analysis of your website health, indexing, and current performance to identify growth gaps.',
        },
        {
            title: 'Keyword & Competitor Analysis',
            description: 'In-depth research to identify high-intent keywords and analyze competitor strategies for a winning roadmap.',
        },
        {
            title: 'On-Page & Technical Optimization',
            description: 'Solving technical health issues and optimizing content structure to ensure search engines can crawl and rank you.',
        },
        {
            title: 'Content & Internal Linking',
            description: 'Improving existing content and implementing a strategy that targets search intent and builds domain authority.',
        },
        {
            title: 'Continuous Monitoring',
            description: 'Ongoing tracking, reporting, and refinement to maintain and improve your competitive search positions.',
        },
    ];

    const benefits = [
        {
            title: 'Data-Driven Strategies',
            description: 'We use ethical, data-backed SEO practices that focus on measurable results and sustainable growth.',
            icon: <LineChart className="w-6 h-6" />
        },
        {
            title: 'Long-Term Growth',
            description: 'A dedicated focus on building organic authority that delivers consistent value for years to come.',
            icon: <TrendingUp className="w-6 h-6" />
        },
        {
            title: 'Multidisciplinary Expertise',
            description: 'Years of experience across multiple industries, helping businesses dominate both local and global markets.',
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: 'Transparent Reporting',
            description: 'Clear communication and regular reporting to keep you informed of performance, improvements, and metrics.',
            icon: <FileText className="w-6 h-6" />
        },
        {
            title: 'Ethical SEO Practices',
            description: 'We strictly follow search engine guidelines to protect your domain and build trust with your audience.',
            icon: <Award className="w-6 h-6" />
        },
        {
            title: 'Business-Aligned Goals',
            description: 'We dont just rank keywords; we target search terms that drive leads, sales, and real business results.',
            icon: <Target className="w-6 h-6" />
        }
    ];

    const specializedServices = [
        {
            title: 'On-Page SEO Optimization',
            description: 'Optimizing titles, meta tags, internal linking, and content relevance to ensure search engines understand your value perfectly.'
        },
        {
            title: 'Technical SEO',
            description: 'Improving site speed, mobile responsiveness, crawlability, and indexing to ensure a flawless technical foundation.'
        },
        {
            title: 'Content SEO & Strategy',
            description: 'Creating and optimizing authoritative content that targets search intent and builds long-term digital credibility.'
        },
        {
            title: 'Keyword Research',
            description: 'Identifying high-intent, long-tail keywords with the right balance of volume and competition for higher conversions.'
        },
        {
            title: 'Local & Global SEO',
            description: 'Tailored strategies to dominate your local region or expand your footprint across international markets.'
        },
        {
            title: 'SEO Audits & Insights',
            description: 'Deep-dive analysis of your digital presence to identify gaps, opportunities, and a clear path to ranking higher.'
        }
    ];

    const faqs = [
        {
            q: "How long does SEO take to show results?",
            a: "SEO is a long-term strategy. Initial improvements may be seen within a few weeks, while significant results typically develop over 3–6 months depending on competition."
        },
        {
            q: "Do you work with new websites?",
            a: "Yes. We offer SEO services for new websites, including foundation setup, technical optimization, and keyword strategy to support growth from day one."
        },
        {
            q: "Can you guarantee first-page rankings?",
            a: "No ethical SEO provider can guarantee rankings. We guarantee the use of proven strategies and best practices that significantly improve your visibility over time."
        },
        {
            q: "Do you provide ongoing SEO services?",
            a: "Yes. SEO requires continuous optimization, monitoring, and content updates to maintain performance and stay ahead of evolving algorithms."
        },
        {
            q: "Is SEO better than paid advertising?",
            a: "They serve different purposes. SEO provides long-term organic growth and trust, while paid ads deliver immediate visibility. Many businesses benefit from using both."
        }
    ];

    return (
        <main className="min-h-screen">
            <ServiceHero
                title="SEO Services"
                subtitle="SEO Services for Organic Growth"
                description="Professional SEO services designed to improve search visibility, drive targeted organic traffic, and support long-term business development."
                gradientFrom="from-emerald-500/20"
                gradientTo="to-background"
            />

            <ProblemSolution
                problem="Disjointed SEO efforts and poor search visibility kill consistent growth. Without a ranking strategy, you're invisible to users searching for your services."
                solution="We focus on sustainable, data-driven strategies that align with search intent and evolving algorithms to build long-term authority."
                outcome="Measurable results in search visibility, targeted organic leads, and a digital presence that builds trust and authority without relying on ads."
            />

            {/* Specialized Solutions */}
            <section className="py-24 relative overflow-hidden">
                <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                    <FadeIn className="mb-16">
                        <h2 className="text-4xl font-bold tracking-tight mb-4">Our Specialized SEO Solutions</h2>
                        <div className="h-1 w-20 bg-primary rounded-full" />
                    </FadeIn>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {specializedServices.map((service, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="p-8 rounded-[2rem] border border-white/5 bg-white/5 hover:border-primary/20 transition-all duration-300 h-full group">
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-muted-foreground font-light leading-relaxed">{service.description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <BenefitsGrid
                benefits={benefits}
                title="Why Choose CPD for SEO?"
                subtitle="The Advantage"
            />

            <ProcessTimeline steps={processSteps} />

            {/* FAQ Section */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
                    <FadeIn className="text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground font-light">Everything you need to know about our organic optimization process.</p>
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

