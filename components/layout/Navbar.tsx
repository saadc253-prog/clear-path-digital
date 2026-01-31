'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Logo from '@/components/ui/Logo';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '/services' },
        { name: 'About', href: '/about' },
        { name: 'Work', href: '/work' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'
                }`}
        >
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
                style={{ scaleX }}
            />

            <div className="w-full max-w-[1400px] px-4 mx-auto">
                <nav
                    className={`mx-auto w-full max-w-5xl rounded-full transition-all duration-500 border ${isScrolled
                        ? 'glass px-6 py-3 border-white/5 shadow-lg'
                        : 'bg-transparent border-transparent px-2 py-2'
                        } flex items-center justify-between`}
                >
                    <div className="flex items-center gap-2">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                            <Logo />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="w-px h-4 bg-border mx-2" />
                        <Link
                            href="/contact"
                            className="text-sm font-medium px-5 py-2 rounded-full bg-primary text-primary-foreground hover:bg-white/90 transition-colors"
                        >
                            Let's Talk
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-foreground p-1 mobile-reactive"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-background md:hidden"
                    >
                        {/* Close button inside overlay */}
                        <div className="absolute top-8 right-8 z-[60]">
                            <button
                                className="p-2 text-foreground mobile-reactive"
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        <div className="flex flex-col h-full pt-32 px-8">
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 * i }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-4xl font-bold tracking-tighter hover:text-primary transition-colors mobile-reactive block"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 * navLinks.length }}
                                    className="pt-6 border-t border-white/10"
                                >
                                    <Link
                                        href="/contact"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-4xl font-bold tracking-tighter text-primary mobile-reactive block"
                                    >
                                        Let's Talk
                                    </Link>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-auto pb-12"
                            >
                                <p className="text-muted-foreground text-sm font-light">
                                    Ready to scale? <br /> Clear Path Digital.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
