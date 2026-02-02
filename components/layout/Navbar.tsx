'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Logo from '@/components/ui/Logo';
import {
    Menu, X, ChevronDown, Code, Search,
    Share2, Palette, Phone, MessageSquare,
    ArrowRight
} from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

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

    const services = [
        {
            title: 'Web Development',
            description: 'Custom high-performance websites.',
            href: '/services/web-development',
            icon: <Code className="w-5 h-5" />,
            color: 'text-blue-400'
        },
        {
            title: 'SEO Optimization',
            description: 'Dominating organic search results.',
            href: '/services/seo',
            icon: <Search className="w-5 h-5" />,
            color: 'text-emerald-400'
        },
        {
            title: 'Social Media',
            description: 'Engaging your loyal community.',
            href: '/services/social-media',
            icon: <Share2 className="w-5 h-5" />,
            color: 'text-purple-400'
        },
        {
            title: 'Graphic Design',
            description: 'Premium visual brand identity.',
            href: '/services/graphic-design',
            icon: <Palette className="w-5 h-5" />,
            color: 'text-pink-400'
        },
        {
            title: 'Call Support',
            description: 'Elite professional call handling.',
            href: '/services/call-support',
            icon: <Phone className="w-5 h-5" />,
            color: 'text-orange-400'
        },
        {
            title: 'Chat Support',
            description: '24/7 real-time visitor engagement.',
            href: '/services/chat-support',
            icon: <MessageSquare className="w-5 h-5" />,
            color: 'text-teal-400'
        }
    ];

    const navLinks = [
        { name: 'About', href: '/about' },
        { name: 'Work', href: '/work' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}
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
                        {/* Services Dropdown Trigger */}
                        <div
                            className="relative group py-2"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">
                                Services
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-primary' : ''}`} />
                            </button>

                            {/* Mega Dropdown */}
                            <AnimatePresence>
                                {isServicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]"
                                    >
                                        <div className="glass-card rounded-3xl border border-white/10 p-6 grid grid-cols-2 gap-4 shadow-2xl backdrop-blur-3xl">
                                            {services.map((service) => (
                                                <Link
                                                    key={service.title}
                                                    href={service.href}
                                                    className="group/item p-4 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${service.color} group-hover/item:scale-110 group-hover/item:bg-primary/10 transition-all`}>
                                                            {service.icon}
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">
                                                                {service.title}
                                                            </div>
                                                            <div className="text-xs text-muted-foreground font-light line-clamp-1">
                                                                {service.description}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                            <div className="col-span-2 pt-4 mt-2 border-t border-white/5 flex justify-center">
                                                <Link href="/services" className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 hover:gap-4 transition-all">
                                                    View All Services <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

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
                        className="fixed inset-0 z-50 bg-background md:hidden overflow-y-auto"
                    >
                        <div className="absolute top-8 right-8 z-[60]">
                            <button
                                className="p-2 text-foreground mobile-reactive"
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        <div className="flex flex-col h-full pt-24 pb-12 px-8">
                            <div className="flex flex-col gap-8">
                                {/* Mobile Services Section */}
                                <div>
                                    <button
                                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                                        className="text-4xl font-bold tracking-tighter flex items-center gap-4 hover:text-primary transition-colors mb-6"
                                    >
                                        Services
                                        <ChevronDown className={`w-8 h-8 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-primary' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {isServicesOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="grid gap-4 pl-4 border-l border-white/10">
                                                    {services.map((service) => (
                                                        <Link
                                                            key={service.title}
                                                            href={service.href}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className="flex flex-col gap-1 py-2"
                                                        >
                                                            <div className="text-xl font-bold text-white/90">{service.title}</div>
                                                            <div className="text-xs text-muted-foreground font-light">{service.description}</div>
                                                        </Link>
                                                    ))}
                                                    <Link
                                                        href="/services"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className="text-sm font-bold text-primary uppercase tracking-widest pt-2"
                                                    >
                                                        View All Services
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

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
                                    transition={{ delay: 0.3 }}
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
                                className="mt-12 pb-12"
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
