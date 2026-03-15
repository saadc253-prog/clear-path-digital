'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';

export default function ContactCTA() {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                <FadeIn className="bg-gradient-to-br from-violet-50 to-white w-full rounded-[3rem] p-12 md:p-24 text-center border border-violet-200 relative overflow-hidden group shadow-xl">
                    {/* Violet Glow Effect - Swirl */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-200/40 rounded-full blur-[100px] -z-10 group-hover:bg-violet-200/60 transition-colors duration-1000" />

                    {/* Abstract Line Decoration */}
                    <div className="absolute -right-20 -top-20 w-96 h-96 border border-white/5 rounded-full z-0" />
                    <div className="absolute -left-20 -bottom-20 w-96 h-96 border border-white/5 rounded-full z-0" />

                    <h2 className="text-fluid-h2 font-bold tracking-tighter mb-8 relative z-10">
                        Ready to Scale Your Business with <span className="text-primary drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">Smart Digital Solutions?</span>
                    </h2>
                    <p className="text-fluid-body text-muted-foreground max-w-3xl mx-auto mb-8 font-light relative z-10">
                        Partner with Clear Path Digital to build faster websites, improve search visibility, automate customer support, and deliver better customer experiences.
                    </p>
                    <Button size="lg" asChild className="relative z-10 group bg-white text-black hover:bg-white/90 shadow-xl w-full max-w-sm mx-auto min-[400px]:w-auto border-none mb-4">
                        <Link href="/contact">
                            Book Your Free Consultation
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <p className="text-sm text-muted-foreground/60 relative z-10">Strategy call takes only 20 minutes. No commitment required.</p>
                </FadeIn>
            </div>
        </section>
    );
}

