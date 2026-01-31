import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import Tilt from '@/components/animations/Tilt';
import ContactCTA from '@/components/sections/ContactCTA';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        name: 'Nexus FinTech',
        category: 'Web Engineering',
        impact: '240% increase in user retention through performance architecture.',
    },
    {
        name: 'Aura Skincare',
        category: 'Identity & Brand',
        impact: 'Seamless global rollout with a mobile-first digital identity.',
    },
    {
        name: 'Equinox SaaS',
        category: 'Performance SEO',
        impact: 'Ranked #1 for high-intent industry keywords in 4 months.',
    },
    {
        name: 'Lumina Home',
        category: 'CX Solutions',
        impact: '98% customer satisfaction rating with automated chat operations.',
    },
    {
        name: 'Vanguard Logistix',
        category: 'Platform Design',
        impact: 'Custom real-time tracking dashboard for global fleet operations.',
    },
    {
        name: 'Solaris energy',
        category: 'Growth Strategy',
        impact: '10x lead generation growth through integrated organic marketing.',
    },
];

export default function WorkPage() {
    return (
        <main className="section-padding">
            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                <FadeIn className="max-w-5xl mx-auto text-center mb-24">
                    <span className="inline-block py-1 px-4 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium tracking-widest uppercase text-primary mb-6">
                        Proven Impact
                    </span>
                    <h1 className="text-fluid-h1 font-bold tracking-tight mb-8">
                        Digital <span className="text-muted-foreground">Masterpieces.</span>
                    </h1>
                    <p className="text-fluid-body text-muted-foreground font-light max-w-3xl mx-auto">
                        We don't just ship projects; we deliver competitive advantages.
                        A curated selection of ecosystems built to scale.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-24">
                    {projects.map((project, index) => (
                        <FadeIn key={index}>
                            <Tilt className="aspect-[4/5] rounded-3xl overflow-hidden glass-card border-white/10 group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent group-hover:bg-primary/5 transition-colors duration-500" />

                                {/* Content Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end">
                                    <div className="flex items-center justify-between mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="text-xs font-semibold uppercase tracking-widest text-primary">{project.category}</span>
                                        <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.name}</h3>
                                    <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                                        {project.impact}
                                    </p>
                                </div>
                            </Tilt>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>
            <ContactCTA />
        </main>
    );
}
