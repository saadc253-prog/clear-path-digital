'use client';

// Refined Work Page v1.2: Bulletproof Template Gallery
import { useState } from 'react';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import Tilt from '@/components/animations/Tilt';
import ContactCTA from '@/components/sections/ContactCTA';
import Link from 'next/link';
import { ArrowUpRight, Plus, Monitor } from 'lucide-react';
import Image from 'next/image';

const categories = ['All', 'Medical', 'Hospitality', 'Real Estate', 'Fashion'];

const projects = [
    {
        name: 'Medicare Premium',
        category: 'Medical',
        impact: 'High-performance clinic management and appointment booking ecosystem.',
        image: '/medical.png'
    },
    {
        name: 'Aurum Suites',
        category: 'Hospitality',
        impact: 'Elegant reservation platform for luxury hotels and premium stays.',
        image: '/hotel.png'
    },
    {
        name: 'Luxe Haven Realty',
        category: 'Real Estate',
        impact: 'Advanced property discovery system with high-conversion listing layouts.',
        image: '/real-estate.png'
    },
    {
        name: 'Elysium Boutique',
        category: 'Fashion',
        impact: 'Modern e-commerce architecture for luxury fashion and apparel brands.',
        image: '/fashion.png'
    },
];

export default function WorkPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <main className="pt-40 min-h-screen bg-background relative overflow-hidden">
            {/* Background Aesthetic Blobs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />

            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto relative z-10">
                <FadeIn className="max-w-5xl mx-auto text-center mb-24">
                    <span className="inline-block py-1.5 px-5 rounded-full border border-primary/20 bg-primary/10 text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-8 shadow-[0_0_20px_-5px_#10b981]">
                        Ready-to-Deploy Solutions
                    </span>
                    <h1 className="text-fluid-h1 font-bold tracking-tight mb-8">
                        Industry <span className="text-muted-foreground">Excellence.</span>
                    </h1>
                    <p className="text-fluid-body text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
                        While we work on showcasing our custom client projects, explore our **Premium Industry Templates**.
                        Each one is a high-performance ecosystem built to scale your business from day one.
                    </p>
                </FadeIn>

                {/* Category Filter */}
                <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-4 mb-24 relative z-30">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-10 py-3.5 rounded-full text-xs font-bold transition-all duration-300 border tracking-widest uppercase ${activeCategory === cat
                                ? 'bg-primary border-primary text-white shadow-[0_0_30px_-10px_#10b981]'
                                : 'bg-white/5 border-white/10 text-muted-foreground hover:border-primary/50 hover:text-white'
                                } mobile-reactive`}
                        >
                            {cat}
                        </button>
                    ))}
                </FadeIn>

                <StaggerContainer className="grid gap-12 md:grid-cols-2 mb-32 relative z-20">
                    {filteredProjects.map((project) => (
                        <FadeIn key={project.name}>
                            <Tilt className="aspect-[16/10] rounded-[3rem] overflow-hidden glass-card border border-white/10 group relative bg-slate-900/50 shadow-2xl">
                                {/* Image Backdrop */}
                                <div className="absolute inset-0 z-0 bg-slate-900">
                                    <div className="absolute inset-0 bg-slate-800 animate-pulse" /> {/* Loading Placeholder */}
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 relative z-1"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-2" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14 z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2.5 rounded-xl bg-primary/20 border border-primary/30 text-primary shadow-inner">
                                                <Monitor size={18} />
                                            </div>
                                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                                                {project.category}
                                            </span>
                                        </div>
                                        <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 shadow-2xl mobile-reactive">
                                            <ArrowUpRight className="w-7 h-7" />
                                        </div>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
                                        {project.name}
                                    </h3>
                                    <p className="text-white/70 text-lg font-light max-w-lg leading-relaxed mb-2 drop-shadow-md">
                                        {project.impact}
                                    </p>
                                </div>
                            </Tilt>
                        </FadeIn>
                    ))}

                    {/* "Your Project Next" Teaser */}
                    <FadeIn>
                        <Tilt className="aspect-[16/10] rounded-[3rem] overflow-hidden border border-dashed border-white/20 hover:border-primary/50 transition-all duration-500 flex flex-col items-center justify-center text-center p-12 group bg-white/[0.02] hover:bg-primary/[0.03]">
                            <div className="w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary transition-all duration-500 shadow-2xl">
                                <Plus className="w-14 h-14 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Your Project Next?</h3>
                            <p className="text-muted-foreground text-xl font-light max-w-sm leading-relaxed mb-10">
                                We're ready to build your custom digital masterpiece. Let's start the conversation.
                            </p>
                            <Link href="/contact" className="px-12 py-5 rounded-full bg-white text-black text-sm font-bold hover:bg-primary hover:text-white transition-all shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-primary/20 mobile-reactive">
                                Get Started Today
                            </Link>
                        </Tilt>
                    </FadeIn>
                </StaggerContainer>
            </div>
            <ContactCTA />
        </main>
    );
}
