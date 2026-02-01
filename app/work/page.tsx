'use client';
// Build trigger: Updated Industry Gallery v1.1
import { useState } from 'react';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import Tilt from '@/components/animations/Tilt';
import ContactCTA from '@/components/sections/ContactCTA';
import Link from 'next/link';
import { ArrowUpRight, Search, Plus } from 'lucide-react';
import Image from 'next/image';

const categories = ['All', 'Medical', 'Hospitality', 'Real Estate', 'Fashion'];

const projects = [
    {
        name: 'Medicare Premium',
        category: 'Medical',
        impact: 'High-performance clinic management and appointment booking ecosystem.',
        image: '/medicare_template_mockup_1769983023348.png'
    },
    {
        name: 'Aurum Suites',
        category: 'Hospitality',
        impact: 'Elegant reservation platform for luxury hotels and premium stays.',
        image: '/luxury_hotel_template_mockup_1769983038805.png'
    },
    {
        name: 'Luxe Haven Realty',
        category: 'Real Estate',
        impact: 'Advanced property discovery system with high-conversion listing layouts.',
        image: '/real_estate_template_mockup_1769983056524.png'
    },
    {
        name: 'Elysium Boutique',
        category: 'Fashion',
        impact: 'Modern e-commerce architecture for luxury fashion and apparel brands.',
        image: '/fashion_boutique_template_mockup_1769983070029.png'
    },
];

export default function WorkPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <main className="pt-32">
            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                <FadeIn className="max-w-5xl mx-auto text-center mb-20">
                    <span className="inline-block py-1 px-4 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium tracking-widest uppercase text-primary mb-6">
                        Ready-to-Deploy Solutions
                    </span>
                    <h1 className="text-fluid-h1 font-bold tracking-tight mb-8">
                        Industry <span className="text-muted-foreground">Excellence.</span>
                    </h1>
                    <p className="text-fluid-body text-muted-foreground font-light max-w-3xl mx-auto">
                        While we work on showcasing our custom client projects, explore our **Premium Industry Templates**.
                        Each one is a high-performance ecosystem built to scale your business from day one.
                    </p>
                </FadeIn>

                {/* Category Filter */}
                <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-4 mb-20">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                                ? 'bg-primary border-primary text-white shadow-[0_0_25px_-5px_#10b981]'
                                : 'border-white/10 text-muted-foreground hover:border-primary/50 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </FadeIn>

                <StaggerContainer className="grid gap-12 md:grid-cols-2 mb-24">
                    {filteredProjects.map((project, index) => (
                        <FadeIn key={project.name}>
                            <Tilt className="group flex flex-col h-full rounded-[2.5rem] overflow-hidden glass-card border-white/5 bg-white/5 hover:border-primary/20 transition-all duration-500 relative">
                                {/* Image Box */}
                                <div className="aspect-[16/10] overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />

                                    {/* Category Float */}
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-[10px] font-bold uppercase tracking-widest text-primary">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Part */}
                                <div className="p-10 flex flex-col flex-grow">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                                            {project.name}
                                        </h3>
                                        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0 mobile-reactive">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground text-lg font-light leading-relaxed">
                                        {project.impact}
                                    </p>
                                </div>
                            </Tilt>
                        </FadeIn>
                    ))}

                    {/* "Your Project Next" Teaser */}
                    <FadeIn>
                        <Tilt className="aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-dashed border-white/10 hover:border-primary/50 transition-colors duration-500 flex flex-col items-center justify-center text-center p-12 group bg-white/5">
                            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary transition-all duration-500">
                                <Plus className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Your Project Next?</h3>
                            <p className="text-muted-foreground font-light max-w-sm">
                                We're ready to build your custom digital masterpiece. Let's start the conversation.
                            </p>
                            <Link href="/contact" className="mt-8 px-8 py-3 rounded-full bg-white text-black text-sm font-bold hover:bg-primary hover:text-white transition-all shadow-xl mobile-reactive">
                                Get Started
                            </Link>
                        </Tilt>
                    </FadeIn>
                </StaggerContainer>
            </div>
            <ContactCTA />
        </main>
    );
}
