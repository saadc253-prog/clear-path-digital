import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const footerLinks = {
    services: [
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'SEO Optimization', href: '/services/seo' },
        { name: 'Social Media', href: '/services/social-media' },
        { name: 'Graphic Design', href: '/services/graphic-design' },
        { name: 'AI Chat Support', href: '/services/ai-chat-support' },
        { name: 'AI Automation', href: '/services/ai-automation' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ],
    social: [
        { name: 'Facebook', href: 'https://www.facebook.com/people/Clear-Path-Digital/61587284444357/', icon: Facebook },
        { name: 'Instagram', href: 'https://www.instagram.com/clearpathaibots/', icon: Instagram },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/company/clear-path-digital', icon: Linkedin },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <Logo />
                        </Link>
                        <p className="text-sm text-muted-foreground mb-4">
                            Clear Path Digital provides AI-powered solutions including web development, SEO, social media, graphic design, AI chat support, and automation for businesses worldwide.
                        </p>
                        <a href="mailto:saad@clearpathaibots.com" className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                            <Mail className="w-4 h-4" />
                            saad@clearpathaibots.com
                        </a>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Services</h3>
                        <ul className="mt-4 space-y-4">
                            {footerLinks.services.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-base text-muted-foreground hover:text-primary transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-4">
                            {footerLinks.company.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-base text-muted-foreground hover:text-primary transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Follow Us</h3>
                        <ul className="mt-4 space-y-4">
                            {footerLinks.social.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-base text-muted-foreground hover:text-primary transition-colors group"
                                    >
                                        <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-border pt-8">
                    <p className="text-base text-muted-foreground text-center">
                        &copy; {new Date().getFullYear()} Clear Path Digital. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

