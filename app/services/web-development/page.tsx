'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ProblemSolution from '@/components/services/ProblemSolution';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import BenefitsGrid from '@/components/services/BenefitsGrid';
import ContactCTA from '@/components/sections/ContactCTA';
import FadeIn from '@/components/animations/FadeIn';
import { Rocket, Shield, Smartphone, Zap, Search, Layout, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function WebDevelopmentPage() {
    const processSteps = [
        {
            title: 'Discover & Plan',
            description: 'We understand your business, audience, and goals to define the website strategy.',
        },
        {
            title: 'Design & Prototype',
            description: 'Our designers create a visual blueprint that balances aesthetics and usability.',
        },
        {
            title: 'Develop & Optimize',
            description: 'Developers bring the design to life using clean, SEO-friendly code.',
        },
        {
            title: 'Test & Launch',
            description: 'We rigorously test your website for performance, responsiveness, and functionality before launch.',
        },
        {
            title: 'Maintain & Support',
            description: 'Post-launch, we provide ongoing support, updates, and optimizations as your business grows.',
        },
    ];

    const benefits = [
        {
            title: 'Experienced Development Team',
            description: 'Skilled in React.js, Next.js, Node.js, and other modern technologies to build high-performance solutions.',
            icon: <Zap className="w-6 h-6" />
        },
        {
            title: 'SEO-Friendly Websites',
            description: 'Optimized code and structure for higher search engine rankings, helping your business get discovered.',
            icon: <Search className="w-6 h-6" />
        },
        {
            title: 'Conversion-Focused Design',
            description: 'Websites that not only look good but drive real results by guiding visitors toward meaningful actions.',
            icon: <Layout className="w-6 h-6" />
        },
        {
            title: 'Responsive & Scalable',
            description: 'Perfect performance across all devices with an architecture designed to grow with your business.',
            icon: <Smartphone className="w-6 h-6" />
        },
        {
            title: 'Reliable Security',
            description: 'Secure architectures that protect your data and provide peace of mind in a digital-first world.',
            icon: <Shield className="w-6 h-6" />
        },
        {
            title: 'Affordable & Transparent',
            description: 'High-quality web development services without hidden costs, tailored to your budget and goals.',
            icon: <Rocket className="w-6 h-6" />
        }
    ];

    const specificServices = [
        {
            title: 'Custom Website Development',
            description: 'We design and develop websites from scratch that align with your brand identity and business goals. Every website is built for high performance, security, and scalability.'
        },
        {
            title: 'React & Next.js Development',
            description: 'Using the latest technologies, we create fast, interactive, and modern websites. React.js allows dynamic UIs, while Next.js ensures better performance and SEO.'
        },
        {
            title: 'E-commerce Website Development',
            description: 'Solutions designed to increase sales. We integrate payment gateways, inventory management, and user-friendly navigation for seamless shopping.'
        },
        {
            title: 'Website Redesign & Optimization',
            description: 'We improve existing websites, focusing on user experience, load speed, mobile responsiveness, and SEO to enhance engagement.'
        },
        {
            title: 'CMS & Web Application Development',
            description: 'Custom web applications and CMS platforms that give you control over your content and streamline your business operations.'
        }
    ];

    const faqs = [
        {
            q: "How long does it take to build a website?",
            a: "It depends on complexity. Standard business websites usually take 4–6 weeks, while custom web applications or large e-commerce platforms may take longer."
        },
        {
            q: "Do you offer mobile-friendly websites?",
            a: "Yes. Every website we build is fully responsive and optimized for mobile devices, ensuring a perfect experience on smartphones and tablets."
        },
        {
            q: "Can you redesign my existing website?",
            a: "Absolutely. We can overhaul your current site to improve user experience, speed, and SEO performance while keeping your core brand identity intact."
        },
        {
            q: "Can you build e-commerce solutions?",
            a: "Yes, we specialize in high-converting e-commerce sites with secure payment integration and scalable architectures."
        }
    ];

    return (
        <main className="min-h-screen">
            <ServiceHero
                title="Web Development"
                subtitle="Custom Web Development Services"
                description="Professional web development services designed to help businesses grow online. Fast, secure, scalable, and conversion-focused."
                gradientFrom="from-emerald-500/20"
                gradientTo="to-background"
            />

            <ProblemSolution
                problem="Generic templates and slow-loading sites kill conversions. Without a high-performance site, you risk losing customers before they even explore your offerings."
                solution="We combine modern technologies like React.js and Next.js with a results-driven approach to ensure your website performs exceptionally."
                outcome="A well-built website that acts as your business engine online, guiding visitors toward actions that matter—like inquiries or purchases."
            />

            {/* Specific Services List */}
            <section className="py-24 relative overflow-hidden">
                <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                    <FadeIn className="mb-16">
                        <h2 className="text-4xl font-bold tracking-tight mb-4">Our Specialized Solutions</h2>
                        <div className="h-1 w-20 bg-primary rounded-full" />
                    </FadeIn>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {specificServices.map((service, i) => (
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
                title="Why Choose Us for Web Development?"
                subtitle="The Advantage"
            />

            <ProcessTimeline steps={processSteps} />

            {/* FAQ Section */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
                    <FadeIn className="text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground font-light">Everything you need to know about our development process.</p>
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

