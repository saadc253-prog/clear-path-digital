import ServiceHero from '@/components/services/ServiceHero';
import ProblemSolution from '@/components/services/ProblemSolution';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import BenefitsGrid from '@/components/services/BenefitsGrid';
import ContactCTA from '@/components/sections/ContactCTA';
import { Palette, Eye, LayoutTemplate, PenTool, Image, Layers } from 'lucide-react';

export default function GraphicDesignPage() {
    const processSteps = [
        {
            title: 'Creative Brief',
            description: 'We start by understanding your brand vision, values, and the message you want to convey.',
        },
        {
            title: 'Concept Development',
            description: 'Brainstorming and sketching multiple concepts to explore different visual directions.',
        },
        {
            title: 'Design Execution',
            description: 'Bringing the selected concept to life with precision, color psychology, and typography.',
        },
        {
            title: 'Feedback Loops',
            description: 'Collaborative refinement rounds to ensure the final design isn\'t just good, but perfect.',
        },
        {
            title: 'Final Delivery',
            description: 'Providing all necessary file formats (AI, EPS, PNG, SVG) for web and print use.',
        },
    ];

    const benefits = [
        {
            title: 'Brand Consistency',
            description: 'We ensure every pixel aligns with your brand guidelines, creating a cohesive identity across all channels.',
            icon: <Palette className="w-6 h-6" />
        },
        {
            title: 'Attention Grabbing',
            description: 'In a crowded feed, our designs stop the scroll and demand attention from your target audience.',
            icon: <Eye className="w-6 h-6" />
        },
        {
            title: 'Multi-Format Delivery',
            description: 'From billboards to favicons, we create vectors that scale perfectly to any size without losing quality.',
            icon: <Layers className="w-6 h-6" />
        },
        {
            title: 'Psychology of Color',
            description: 'We use color theory to evoke the right emotions and influence customer decision-making.',
            icon: <PenTool className="w-6 h-6" />
        },
        {
            title: 'Custom Illustrations',
            description: 'Ditch the stock photos. We create unique illustrations that tell your specific brand story.',
            icon: <Image className="w-6 h-6" />
        },
        {
            title: 'Print & Digital Ready',
            description: 'Files prepared correctly for professional printing and optimized for fast web loading.',
            icon: <LayoutTemplate className="w-6 h-6" />
        }
    ];

    return (
        <main className="min-h-screen">
            <ServiceHero
                title="Graphic Design"
                subtitle="Visuals That Speak."
                description="Elevate your brand with premium design that communicates quality and professionalism at a glance."
                gradientFrom="from-pink-500/20"
                gradientTo="to-background"
            />

            <ProblemSolution
                problem="Your branding looks outdated or inconsistent, failing to communicate the premium nature of your services."
                solution="World-class graphic design services that align your visual identity with your business excellence."
                outcome="A cohesive, professional brand image that instills confidence and stands out in a crowded market."
            />

            <BenefitsGrid benefits={benefits} />

            <ProcessTimeline steps={processSteps} />

            <ContactCTA />
        </main>
    );
}
