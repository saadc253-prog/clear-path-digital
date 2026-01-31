import ServiceHero from '@/components/services/ServiceHero';
import ProblemSolution from '@/components/services/ProblemSolution';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import BenefitsGrid from '@/components/services/BenefitsGrid';
import ContactCTA from '@/components/sections/ContactCTA';
import { Phone, Headset, Users, PieChart, Lock, Mic } from 'lucide-react';

export default function CallSupportPage() {
    const processSteps = [
        {
            title: 'Script Development',
            description: 'Collaborating to create natural, effective scripts for inbound support or outbound sales.',
        },
        {
            title: 'System Setup',
            description: 'Configuring IVR, routing rules, and call recording systems to match your business needs.',
        },
        {
            title: 'Mock Calls',
            description: 'Rigorous role-playing simulations to prepare agents for every possible customer scenario.',
        },
        {
            title: 'Go Live',
            description: 'Handling live calls with professionalism, empathy, and efficiency.',
        },
        {
            title: 'Performance Analysis',
            description: 'Tracking handle times, resolution rates, and CSAT scores to continuously improve.',
        },
    ];

    const benefits = [
        {
            title: 'Professional Image',
            description: 'Ensure every caller is greeted professionally, creating a positive first impression for your brand.',
            icon: <Headset className="w-6 h-6" />
        },
        {
            title: 'Scalable Workforce',
            description: 'Scale your support team up or down instantly based on seasonal demand without hiring hassles.',
            icon: <Users className="w-6 h-6" />
        },
        {
            title: 'Crystal Clear Audio',
            description: 'We use enterprise-grade VoIP technology to ensure every conversation is crisp and clear.',
            icon: <Mic className="w-6 h-6" />
        },
        {
            title: 'No Missed Calls',
            description: 'Eliminate abandoned calls. Our routing logic ensures every customer gets connected to an agent.',
            icon: <Phone className="w-6 h-6" />
        },
        {
            title: 'Detailed Reporting',
            description: 'Get granular insights into call volume, duration, and outcomes to optimize your operations.',
            icon: <PieChart className="w-6 h-6" />
        },
        {
            title: 'Secure Handling',
            description: 'PCI-compliant and secure handling of sensitive customer information during calls.',
            icon: <Lock className="w-6 h-6" />
        }
    ];

    return (
        <main className="min-h-screen">
            <ServiceHero
                title="Call Support Services"
                subtitle="The Voice of Your Brand."
                description="Professional inbound and outbound call handling that extends your team without the overhead."
                gradientFrom="from-orange-500/20"
                gradientTo="to-background"
            />

            <ProblemSolution
                problem="Missed calls mean missed opportunities, but hiring full-time in-house receptionists is expensive and hard to scale."
                solution="Flexible, professional call support teams that act as a seamless extension of your business."
                outcome="Never miss a lead again. Professional handling of every inquiry, improved brand image, and scalable support."
            />

            <BenefitsGrid benefits={benefits} />

            <ProcessTimeline steps={processSteps} />

            <ContactCTA />
        </main>
    );
}
