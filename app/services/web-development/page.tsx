import ServiceHero from '@/components/services/ServiceHero';
import ProblemSolution from '@/components/services/ProblemSolution';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import BenefitsGrid from '@/components/services/BenefitsGrid';
import ContactCTA from '@/components/sections/ContactCTA';
import { Rocket, Shield, Smartphone, Zap, Search, Layout } from 'lucide-react';

export default function WebDevelopmentPage() {
    const processSteps = [
        {
            title: 'Discovery & Strategy',
            description: 'We dive deep into your business goals, target audience, and competitive landscape to build a roadmap for success.',
        },
        {
            title: 'UX/UI Design',
            description: 'Creating wireframes and high-fidelity mockups that prioritize user experience and conversion optimization.',
        },
        {
            title: 'Development',
            description: 'Clean, semantic coding using modern frameworks to ensure speed, security, and scalability.',
        },
        {
            title: 'Testing & QA',
            description: 'Rigorous cross-browser and device testing to ensure a flawless experience for every user.',
        },
        {
            title: 'Launch & Support',
            description: 'Smooth deployment and ongoing maintenance to keep your site running at peak performance.',
        },
    ];

    const benefits = [
        {
            title: 'Lightning Fast Performance',
            description: 'We build with Next.js and static generation to ensure your site loads instantly, boosting SEO and user retention.',
            icon: <Zap className="w-6 h-6" />
        },
        {
            title: 'Mobile-First Design',
            description: 'Your site will look and function perfectly on every device, capture the 60%+ of traffic coming from smartphones.',
            icon: <Smartphone className="w-6 h-6" />
        },
        {
            title: 'SEO Optimized Core',
            description: 'Built with semantic HTML and technical SEO best practices baked in from the very first line of code.',
            icon: <Search className="w-6 h-6" />
        },
        {
            title: 'Enterprise Grade Security',
            description: 'Secure architectures that protect your customer data and give you peace of mind against digital threats.',
            icon: <Shield className="w-6 h-6" />
        },
        {
            title: 'Scalable Architecture',
            description: 'Codebases designed to grow with your business, allowing for easy feature additions and integrations.',
            icon: <Rocket className="w-6 h-6" />
        },
        {
            title: 'Custom User Experience',
            description: 'No cookie-cutter templates. We design unique journeys that guide users towards conversion.',
            icon: <Layout className="w-6 h-6" />
        }
    ];

    return (
        <main className="min-h-screen">
            <ServiceHero
                title="Web Development"
                subtitle="Custom Code. High Performance."
                description="We build lightning-fast, scalable, and visually stunning websites that drive real business results."
                gradientFrom="from-blue-500/20"
                gradientTo="to-background"
            />

            <ProblemSolution
                problem="Generic templates and slow-loading sites kill conversions and damage your brand reputation."
                solution="Custom-coded, performance-optimized web applications built with the latest technology stack."
                outcome="A blazing fast website that ranks higher on Google, delights users, and converts visitors into customers."
            />

            <BenefitsGrid benefits={benefits} />

            <ProcessTimeline steps={processSteps} />

            <ContactCTA />
        </main>
    );
}
