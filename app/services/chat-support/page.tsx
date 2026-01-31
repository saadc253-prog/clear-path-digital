import ServiceHero from '@/components/services/ServiceHero';
import ProblemSolution from '@/components/services/ProblemSolution';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import BenefitsGrid from '@/components/services/BenefitsGrid';
import ContactCTA from '@/components/sections/ContactCTA';
import { MessageSquare, Clock, ShieldCheck, Smile, Database, Zap } from 'lucide-react';

export default function ChatSupportPage() {
    const processSteps = [
        {
            title: 'Knowledge Base Setup',
            description: 'We learn your product inside out to create a comprehensive response database.',
        },
        {
            title: 'Agent Training',
            description: 'Our support agents are trained on your brand voice, policies, and escalation procedures.',
        },
        {
            title: 'Integration',
            description: 'Seamlessly connecting with your existing CRM and chat platforms (Intercom, Zendesk, etc.).',
        },
        {
            title: 'Live Deployment',
            description: 'Going live with 24/7 coverage, ensuring no customer query goes unanswered.',
        },
        {
            title: 'Quality Assurance',
            description: 'Regular conversation reviews and feedback loops to maintain 5-star service levels.',
        },
    ];

    const benefits = [
        {
            title: 'Instant Response Time',
            description: 'In a world of instant gratification, we reply to your customers in seconds, not hours.',
            icon: <Zap className="w-6 h-6" />
        },
        {
            title: '24/7 Coverage',
            description: 'Make sales while you sleep. Our team covers nights, weekends, and holidays so you never miss a lead.',
            icon: <Clock className="w-6 h-6" />
        },
        {
            title: 'Human Touch',
            description: 'Real people, real conversations. We use AI to assist, not replace, the genuine human connection.',
            icon: <Smile className="w-6 h-6" />
        },
        {
            title: 'Data Security',
            description: 'We adhere to strict privacy policies and data protection standards to keep your customer info safe.',
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            title: 'Seamless Integration',
            description: 'We work right inside your existing support tools. No complex manufacturing or new software to learn.',
            icon: <Database className="w-6 h-6" />
        },
        {
            title: 'Multilingual Support',
            description: 'Break language barriers. We offer support in multiple languages to service a global customer base.',
            icon: <MessageSquare className="w-6 h-6" />
        }
    ];

    return (
        <main className="min-h-screen">
            <ServiceHero
                title="Chat Support Services"
                subtitle="24/7 Customer Engagement."
                description="Provide instant, human-powered support to website visitors, increasing conversion rates and customer satisfaction."
                gradientFrom="from-teal-500/20"
                gradientTo="to-background"
            />

            <ProblemSolution
                problem="Customers are leaving your site because they can't find answers instantly, and you can't be online 24/7."
                solution="A dedicated team of live chat agents ready to engage, assist, and convert visitors around the clock."
                outcome="Higher conversion rates, lower support resolution times, and happier customers who feel valued."
            />

            <BenefitsGrid benefits={benefits} />

            <ProcessTimeline steps={processSteps} />

            <ContactCTA />
        </main>
    );
}
