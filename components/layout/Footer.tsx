import Link from 'next/link';
import Logo from '@/components/ui/Logo';

const footerLinks = {
    services: [
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'SEO Optimization', href: '/services/seo' },
        { name: 'Social Media', href: '/services/social-media' },
        { name: 'Graphic Design', href: '/services/graphic-design' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
    ],
    social: [
        { name: 'Twitter', href: '#' },
        { name: 'LinkedIn', href: '#' },
        { name: 'Instagram', href: '#' },
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
                        <p className="text-sm text-muted-foreground">
                            Elevating brands with premium digital solutions. We build future-proof businesses.
                        </p>
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
                        <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Connect</h3>
                        <ul className="mt-4 space-y-4">
                            {footerLinks.social.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-base text-muted-foreground hover:text-primary transition-colors">
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
