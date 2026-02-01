import ServiceHero from '@/components/services/ServiceHero';
import ProblemSolution from '@/components/services/ProblemSolution';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import BenefitsGrid from '@/components/services/BenefitsGrid';
import ContactCTA from '@/components/sections/ContactCTA';
import FadeIn from '@/components/animations/FadeIn';
import {
    Phone, Headset, Users, PieChart, Lock, Mic,
    PhoneForwarded, Globe, ArrowRightLeft, ShieldCheck,
    Search, CheckCircle2, Building2, ShoppingBag,
    Wrench, Database, Rocket, ChevronDown
} from 'lucide-react';

export default function CallSupportPage() {
    const processSteps = [
        {
            title: 'Understand',
            description: 'We learn about your business, services, and core customer needs to build a solid foundation.',
        },
        {
            title: 'Onboard',
            description: 'Trained agents are educated on your internal processes, scripts, and specific brand tone.',
        },
        {
            title: 'Support',
            description: 'Our agents handle inbound and outbound calls professionally, acting as a true extension of your team.',
        },
        {
            title: 'Monitor',
            description: 'Continuous oversight to ensure quality, performance, and consistent communication standards.',
        },
        {
            title: 'Optimize',
            description: 'Regular feedback loops to improve efficiency and the overall customer experience over time.',
        },
    ];

    const benefits = [
        {
            title: 'Inbound Call Support',
            description: 'Handling incoming customer inquiries, support requests, order assistance, and general information.',
            icon: <Headset className="w-6 h-6" />
        },
        {
            title: 'Outbound Call Support',
            description: 'Professional follow-ups, appointment confirmations, lead outreach, and proactive customer engagement.',
            icon: <PhoneForwarded className="w-6 h-6" />
        },
        {
            title: 'Customer Service',
            description: 'Expertly managing customer concerns and resolving issues to ensure a positive brand experience.',
            icon: <Users className="w-6 h-6" />
        },
        {
            title: 'Call Handling & Routing',
            description: 'Efficient management of call flows, directing customers to the right support channels without delay.',
            icon: <ArrowRightLeft className="w-6 h-6" />
        },
        {
            title: 'Outsourced Solutions',
            description: 'Reduce operational costs while maintaining elite quality and consistent global service coverage.',
            icon: <Globe className="w-6 h-6" />
        }
    ];

    const valueProps = [
        'Trained and experienced call support agents',
        'Brand-aligned communication and scripts',
        'Fast response and effective call handling',
        'Scalable support for growing businesses',
        'Global service coverage'
    ];

    const industries = [
        { name: 'E-commerce businesses', icon: <ShoppingBag className="w-6 h-6" /> },
        { name: 'Service-based companies', icon: <Wrench className="w-6 h-6" /> },
        { name: 'SaaS and technology firms', icon: <Database className="w-6 h-6" /> },
        { name: 'Startups and growing businesses', icon: <Rocket className="w-6 h-6" /> },
        { name: 'International brands', icon: <Globe className="w-6 h-6" /> },
    ];

    const faqs = [
        { q: 'Do you provide inbound and outbound call support?', a: 'Yes, we offer comprehensive services for both inbound inquiries and proactive outbound outreach.' },
        { q: 'Can your agents follow our scripts and brand tone?', a: 'Absolutely. We train our agents extensively on your specific scripts, brand voice, and guidelines during the onboarding phase.' },
        { q: 'Do you offer 24/7 call support?', a: 'Yes, we provide round-the-clock support options to ensure your customers are taken care of regardless of time zones.' },
        { q: 'Is call support outsourcing suitable for small businesses?', a: 'Yes, our services are highly scalable and cost-effective, designed to grow with businesses of all sizes.' },
        { q: 'Do you work with international clients?', a: 'Yes, we provide professional call support services to businesses and brands worldwide.' },
    ];

    return (
        <main className="min-h-screen">
            <ServiceHero
                title="Call Support Services"
                subtitle="Professional Call Support Services for Businesses Worldwide"
                description="Reliable and professional call support agents acting as an extension of your team. We ensure every call is handled with clarity, professionalism, and care, supporting businesses globally with scalable inbound and outbound solutions."
                gradientFrom="from-orange-500/20"
                gradientTo="to-background"
            />

            <ProblemSolution
                problem="Missed calls, long wait times, or untrained responses lead to lost opportunities and dissatisfied customers. Managing internal call volumes is a burden that slows down your growth."
                solution="Professional inbound and outbound call support that acting as the voice of your brand. Our trained agents handle everything from inquiries to lead outreach with consistent standards."
                outcome="Improved response times, increased customer retention, and a significant reduction in internal workload, allowing you to focus on scaling your core business operations."
            />

            <BenefitsGrid benefits={benefits} />

            {/* Why Choose Us */}
            <section className="py-24 relative overflow-hidden">
                <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <h2 className="text-4xl font-bold tracking-tight mb-8">Why Choose Clear Path Digital for Call Support</h2>
                            <p className="text-muted-foreground font-light mb-8 leading-relaxed">
                                Businesses partner with us because we deliver consistency, reliability, and professionalism. We work closely with your team to ensure our agents represent your brand accurately in every conversation.
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
                        <FadeIn delay={0.2} className="relative aspect-square rounded-3xl overflow-hidden glass-card border-white/10 flex items-center justify-center p-12">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                            <Headset className="w-48 h-48 text-primary/40 animate-pulse" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <ProcessTimeline steps={processSteps} />

            {/* Industries Section */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="w-full max-w-6xl px-4 md:px-8 mx-auto text-center">
                    <FadeIn className="mb-16">
                        <h2 className="text-4xl font-bold tracking-tight mb-4">Industries We Support</h2>
                        <p className="text-muted-foreground font-light max-w-2xl mx-auto">Our call support services are tailor-made for high-growth sectors requiring professional communication.</p>
                    </FadeIn>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        {industries.map((industry, i) => (
                            <FadeIn key={i} delay={i * 0.1} className="flex flex-col items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group hover:bg-primary transition-colors duration-500">
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
                        <h2 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground font-light">Everything you need to know about our call support services.</p>
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
