import ServiceHero from '@/components/services/ServiceHero';
import ProblemSolution from '@/components/services/ProblemSolution';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import BenefitsGrid from '@/components/services/BenefitsGrid';
import ContactCTA from '@/components/sections/ContactCTA';
import { Users, Heart, Share2, MessageCircle, BarChart, Hash } from 'lucide-react';

export default function SocialMediaPage() {
    const processSteps = [
        {
            title: 'Audience Analysis',
            description: 'Understanding who your customers are, where they hang out, and what content they consume.',
        },
        {
            title: 'Strategy Development',
            description: 'Crafting a unique voice and content pillars that resonate with your target demographic.',
        },
        {
            title: 'Content Creation',
            description: 'Producing high-quality visuals, videos, and copy that stop the scroll and drive engagement.',
        },
        {
            title: 'Community Management',
            description: 'Actively engaging with your followers to build loyalty and trust around your brand.',
        },
        {
            title: 'Analytics & Reporting',
            description: 'Tracking key metrics to understand what works and optimizing our approach for better ROI.',
        },
    ];

    const benefits = [
        {
            title: 'Community Growth',
            description: 'We don\'t just buy followers; we build genuine communities of people who love your brand.',
            icon: <Users className="w-6 h-6" />
        },
        {
            title: 'Brand Humanization',
            description: 'Give your business a personality. We help you connect with your audience on an emotional level.',
            icon: <Heart className="w-6 h-6" />
        },
        {
            title: 'Viral Reach',
            description: 'Creative content strategies designed to get shared, extending your reach far beyond your follower count.',
            icon: <Share2 className="w-6 h-6" />
        },
        {
            title: 'Direct Engagement',
            description: 'Talk TO your customers, not AT them. We manage conversations to turn questions into sales.',
            icon: <MessageCircle className="w-6 h-6" />
        },
        {
            title: 'Insightful Analytics',
            description: 'Learn what your audience wants. We provide deep insights into behavior and preferences.',
            icon: <BarChart className="w-6 h-6" />
        },
        {
            title: 'Trend Jacking',
            description: 'We stay on top of the latest trends so your brand always feels relevant and current.',
            icon: <Hash className="w-6 h-6" />
        }
    ];

    return (
        <main className="min-h-screen">
            <ServiceHero
                title="Social Media Marketing"
                subtitle="Build a Loyal Community."
                description="Turn followers into fans and fans into customers with engaging, authentic social media strategies."
                gradientFrom="from-purple-500/20"
                gradientTo="to-background"
            />

            <ProblemSolution
                problem="You're posting content but getting no engagement, or worse, you don't have time to post consistently at all."
                solution="A dedicated social media team that handles everything from creative strategy to daily execution."
                outcome="A vibrant, growing community of loyal brand advocates and a consistent source of referral traffic."
            />

            <BenefitsGrid benefits={benefits} />

            <ProcessTimeline steps={processSteps} />

            <ContactCTA />
        </main>
    );
}
