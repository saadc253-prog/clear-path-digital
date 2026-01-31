'use client';

import { motion } from 'framer-motion';

interface ServiceHeroProps {
    title: string;
    subtitle: string;
    description: string;
    gradientFrom?: string;
    gradientTo?: string;
    children?: React.ReactNode;
}

export default function ServiceHero({
    title,
    subtitle,
    description,
    gradientFrom = 'from-primary/20',
    gradientTo = 'to-background',
    children,
}: ServiceHeroProps) {
    return (
        <section className="relative pt-48 pb-24 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 inset-x-0 h-[600px] pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-b ${gradientFrom} to-transparent opacity-10`} />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-40" />
            </div>

            <div className="w-full max-w-[1400px] px-4 md:px-8 relative z-10 mx-auto">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-4 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                            {subtitle}
                        </span>
                        <h1 className="text-fluid-h1 font-bold tracking-tight text-foreground leading-[1] md:leading-[0.9]">
                            {title}
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        {description}
                    </motion.p>

                    {children && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="pt-8"
                        >
                            {children}
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
