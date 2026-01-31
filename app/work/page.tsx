import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import Tilt from '@/components/animations/Tilt';
import ContactCTA from '@/components/sections/ContactCTA';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function WorkPage() {
    return (
        <main className="pt-32 pb-16">
            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                <FadeIn className="max-w-4xl mx-auto text-center mb-20">
                    <span className="inline-block py-1 px-4 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                        Our Work
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Digital <span className="text-muted-foreground">Masterpieces.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                        A curation of our finest digital products, engineered for impact.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-24">
                    {/* Placeholder Project Cards */}
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <FadeIn key={item}>
                            <Tilt className="aspect-[4/3] rounded-3xl overflow-hidden glass-card border-white/10 group">
                                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-500" />

                                {/* Content Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                                    <div className="flex items-center justify-between mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Case Study {item}</span>
                                        <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Project Name</h3>
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
