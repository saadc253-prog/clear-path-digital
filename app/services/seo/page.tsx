import ServiceHero from '@/components/services/ServiceHero';
import ProblemSolution from '@/components/services/ProblemSolution';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import BenefitsGrid from '@/components/services/BenefitsGrid';
import ContactCTA from '@/components/sections/ContactCTA';
import { Target, TrendingUp, Globe, LineChart, Award, FileText } from 'lucide-react';

export default function SeoPage() {
    const processSteps = [
        {
            title: 'SEO Audit',
            description: 'A comprehensive analysis of your current website health, backlink profile, and content gaps.',
        },
        {
            title: 'Keyword Research',
            description: 'Identifying high-intent keywords that your potential customers are actually searching for.',
        },
        {
            title: 'On-Page Optimization',
            description: 'Optimizing titles, meta tags, and content structure to help search engines understand your value.',
        },
        {
            title: 'Content Strategy',
            description: 'Creating authoritative, helpful content that answers user questions and builds domain authority.',
        },
        {
            title: 'Link Building',
            description: 'Acquiring high-quality backlinks from reputable industry sources to boost your credibility.',
        },
    ];

    const benefits = [
        {
            title: 'First Page Rankings',
            description: 'We target the keywords that matter most to your business, driving qualified traffic that converts.',
            icon: <Target className="w-6 h-6" />
        },
        {
            title: 'Long-Term Growth',
            description: 'Unlike ads which stop when you stop paying, SEO builds a sustainable foundation for years of organic traffic.',
            icon: <TrendingUp className="w-6 h-6" />
        },
        {
            title: 'Local & Global Reach',
            description: 'Whether you want to dominate your city or the world, our strategies are tailored to your geographic goals.',
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: 'Data-Driven Decisions',
            description: 'No guessing. We use advanced analytics to track progress, identify opportunities, and refine our strategy.',
            icon: <LineChart className="w-6 h-6" />
        },
        {
            title: 'Authority Building',
            description: 'Establish your brand as the industry leader with high-quality content and authoritative backlinks.',
            icon: <Award className="w-6 h-6" />
        },
        {
            title: 'Technical Perfection',
            description: 'We fix the under-the-hood issues that hold you back, ensuring Google can crawl and index your site perfectly.',
            icon: <FileText className="w-6 h-6" />
        }
    ];

    return (
        <main className="min-h-screen">
            <ServiceHero
                title="Search Engine Optimization"
                subtitle="Dominate Search Results."
                description="Stop losing traffic to competitors. We help you rank higher, drive more organic traffic, and increase leads."
                gradientFrom="from-green-500/20"
                gradientTo="to-background"
            />

            <ProblemSolution
                problem="Your amazing website is invisible to potential customers because it doesn't appear on the first page of Google."
                solution="Data-driven SEO strategies that combine technical fixes, content optimization, and authority building."
                outcome="Sustainable organic traffic growth and a steady stream of qualified leads without paying for ads."
            />

            <BenefitsGrid benefits={benefits} />

            <ProcessTimeline steps={processSteps} />

            <ContactCTA />
        </main>
    );
}
