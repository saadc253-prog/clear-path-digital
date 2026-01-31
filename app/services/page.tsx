'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ProblemSolution from '@/components/services/ProblemSolution';
import BenefitsGrid from '@/components/services/BenefitsGrid';
import ContactCTA from '@/components/sections/ContactCTA';
import FadeIn from '@/components/animations/FadeIn';
import { Code, Search, Share2, Palette, MessageSquare, Phone, CheckCircle2, ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
    const services = [
        {
            title: 'Web Development Services',
            description: 'Our custom web development services are built to deliver speed, performance, and usability. We design and develop modern, responsive websites using technologies like React and Next.js to ensure scalability, security, and SEO-friendly architecture.',
            icon: <Code className="w-6 h-6" />,
            href: '/services/web-development',
            linkText: 'Learn more about Web Development'
        },
        {
            title: 'SEO Optimization Services',
            description: 'Our SEO services help businesses improve search engine visibility and attract consistent organic traffic. We focus on on-page SEO, technical optimization, and content alignment to support sustainable rankings and long-term growth.',
            icon: <Search className="w-6 h-6" />,
            href: '/services/seo',
            linkText: 'Explore SEO Services'
        },
        {
            title: 'Social Media Marketing Services',
            description: 'We help brands build and manage a strong social media presence through strategic planning and consistent execution. Our social media marketing services focus on content creation, audience engagement, and campaign management.',
            icon: <Share2 className="w-6 h-6" />,
            href: '/services/social-media',
            linkText: 'View Social Media Services'
        },
        {
            title: 'Graphic Design Services',
            description: 'Our graphic design services support your brand across all digital channels. From branding and visual identity to marketing creatives, we design assets that are clean, professional, and aligned with your business goals.',
            icon: <Palette className="w-6 h-6" />,
            href: '/services/graphic-design',
            linkText: 'See Graphic Design Services'
        },
        {
            title: 'Live Chat Support Services',
            description: 'Our 24/7 live chat support services help businesses respond instantly to customer inquiries. With trained agents handling conversations professionally, we help improve response times and customer experience.',
            icon: <MessageSquare className="w-6 h-6" />,
            href: '/services/chat-support',
            linkText: 'Learn about Chat Support'
        },
        {
            title: 'Call Support Services',
            description: 'We provide reliable inbound and outbound call support services to manage customer communication efficiently. Our solutions ensure professional interactions and consistent customer satisfaction.',
            icon: <Phone className="w-6 h-6" />,
            href: '/services/call-support',
            linkText: 'Explore Call Support Services'
        }
    ];

    const benefits = [
        {
            title: 'Full-Service Solutions',
            description: 'From engineering to marketing and support, we provide end-to-end digital solutions under one roof.',
            icon: <CheckCircle2 className="w-6 h-6" />
        },
        {
            title: 'Experienced Global Team',
            description: 'Skilled specialists across development, marketing, and customer support with international experience.',
            icon: <CheckCircle2 className="w-6 h-6" />
        },
        {
            title: 'Scalable Growth',
            description: 'Services designed to grow with your business, from early-stage startup to established agency.',
            icon: <CheckCircle2 className="w-6 h-6" />
        },
        {
            title: 'Performance-Driven',
            description: 'An SEO-focused and results-oriented approach in everything we build and manage.',
            icon: <CheckCircle2 className="w-6 h-6" />
        },
        {
            title: 'Transparent Delivery',
            description: 'Clear communication, dependable timelines, and transparent processes for total peace of mind.',
            icon: <CheckCircle2 className="w-6 h-6" />
        }
    ];

    const faqs = [
        {
            q: "What services does Clear Path Digital offer?",
            a: "Clear Path Digital offers web development, SEO optimization, social media marketing, graphic design, live chat support, and call support services. Our solutions are designed to help businesses grow their online presence and operate more efficiently."
        },
        {
            q: "Do you work with international clients?",
            a: "Yes, we work with businesses worldwide. Our services are structured to support international clients through remote collaboration, clear communication, and flexible engagement models."
        },
        {
            q: "Can I choose only one service?",
            a: "Absolutely. You can work with us on a single service or combine multiple services based on your business needs. Our solutions are flexible and scalable."
        },
        {
            q: "How do you get started with a new project?",
            a: "We begin with a consultation to understand your goals, requirements, and challenges. Based on this, we recommend a tailored strategy and move forward once everything is aligned."
        }
    ];

    return (
        <main className="min-h-screen pt-32">
            {/* Detailed Services Grid */}
            <section className="py-24 relative overflow-hidden">
                <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                    <FadeIn className="mb-16">
                        <h2 className="text-4xl font-bold tracking-tight mb-4">What We Offer</h2>
                        <div className="h-1 w-20 bg-primary rounded-full" />
                    </FadeIn>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="p-8 rounded-[2.5rem] border border-white/5 bg-white/5 hover:border-primary/20 transition-all duration-500 h-full flex flex-col group">
                                    <div className="mb-6 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-muted-foreground font-light leading-relaxed mb-8 flex-grow">
                                        {service.description}
                                    </p>
                                    <Link
                                        href={service.href}
                                        className="inline-flex items-center text-sm font-medium text-white hover:text-primary transition-colors gap-2 group/link"
                                    >
                                        {service.linkText}
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <BenefitsGrid
                benefits={benefits}
                title="Why Choose Clear Path Digital"
                subtitle="The Advantage"
            />

            {/* Our Approach */}
            <section className="py-24 relative overflow-hidden bg-white/5">
                <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <span className="inline-block py-1.5 px-6 rounded-full border border-primary/20 bg-primary/5 text-sm font-semibold tracking-widest uppercase text-primary mb-8 shadow-[0_0_15px_-5px_#10b981]">
                                Our Approach
                            </span>
                            <h2 className="text-fluid-h2 font-bold tracking-tight mb-8">Strategic Execution. <br /> <span className="text-muted-foreground">Measurable Results.</span></h2>
                            <p className="text-fluid-body text-muted-foreground font-light mb-12">
                                We believe successful digital solutions begin with understanding your business.
                                Our approach is simple, effective, and results-driven.
                            </p>
                        </FadeIn>

                        <div className="space-y-8">
                            {[
                                { t: 'Understand', d: 'We start by understanding your goals, audience, and challenges.' },
                                { t: 'Strategize', d: 'We create a tailored digital strategy aligned with your objectives.' },
                                { t: 'Execute', d: 'We implement solutions using industry-proven best practices.' },
                                { t: 'Optimize', d: 'We continuously monitor and optimize for better performance.' }
                            ].map((step, i) => (
                                <FadeIn key={i} delay={i * 0.1} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-lg font-bold text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                                        0{i + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">{step.t}</h4>
                                        <p className="text-muted-foreground font-light">{step.d}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 border-t border-white/5">
                <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
                    <FadeIn className="text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground font-light">Common questions about working with Clear Path Digital.</p>
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

