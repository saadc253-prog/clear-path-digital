import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import ContactCTA from '@/components/sections/ContactCTA';
import { Users, Target, Zap, Globe } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="section-padding">
            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                <FadeIn className="max-w-5xl mx-auto text-center mb-24">
                    <span className="inline-block py-1 px-4 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium tracking-widest uppercase text-primary mb-6">
                        Authority in Motion
                    </span>
                    <h1 className="text-fluid-h1 font-bold tracking-tight mb-8">
                        Architecting the <br /> <span className="text-muted-foreground">Digital Future.</span>
                    </h1>
                    <p className="text-fluid-body text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
                        We are a high-performance collective of engineers, designers, and growth strategists.
                        We don't build websites; we build the digital infrastructure that market leaders use to dominate their space.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid gap-6 md:grid-cols-4 auto-rows-[250px] mb-24">
                    {/* Mission - Large Tile */}
                    <FadeIn className="md:col-span-2 md:row-span-2 glass-card p-10 rounded-3xl flex flex-col justify-between group">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                            <Target className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-muted-foreground font-light leading-relaxed text-lg">
                                To obliterate the gap between ambition and reality. We exist to help forward-thinking brands navigate the chaos of the digital age with clarity, precision, and undeniable impact.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Stat 1 */}
                    <FadeIn className="md:col-span-1 md:row-span-1 glass-card p-8 rounded-3xl flex flex-col justify-center items-center text-center">
                        <h4 className="text-5xl font-bold text-white mb-2">5+</h4>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest">Years Experience</p>
                    </FadeIn>

                    {/* Stat 2 */}
                    <FadeIn className="md:col-span-1 md:row-span-1 glass-card p-8 rounded-3xl flex flex-col justify-center items-center text-center">
                        <h4 className="text-5xl font-bold text-white mb-2">100+</h4>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest">Projects Delivered</p>
                    </FadeIn>

                    {/* Vision - Wide Tile */}
                    <FadeIn className="md:col-span-2 md:row-span-1 glass-card p-8 rounded-3xl flex flex-col justify-center group">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                <Zap className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold">The Vision</h3>
                        </div>
                        <p className="text-muted-foreground font-light">
                            A world where design and technology merge seamlessly to create experiences that feel like magic.
                        </p>
                    </FadeIn>

                    {/* Global Reach */}
                    <FadeIn className="md:col-span-2 md:row-span-1 glass-card p-8 rounded-3xl flex items-center gap-6 group">
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform duration-500">
                            <Globe className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold mb-1">Global Reach</h4>
                            <p className="text-muted-foreground font-light">Serving clients across 12 countries and counting.</p>
                        </div>
                    </FadeIn>

                </StaggerContainer>
            </div>
            <ContactCTA />
        </main>
    );
}
