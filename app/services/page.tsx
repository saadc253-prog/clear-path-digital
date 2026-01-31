import ServicesOverview from '@/components/sections/ServicesOverview';
import ContactCTA from '@/components/sections/ContactCTA';

export default function ServicesPage() {
    return (
        <main className="pt-20">
            <div className="container px-4 md:px-6 py-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Services</h1>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
                    We offer a comprehensive suite of digital solutions designed to elevate your brand and drive growth.
                </p>
            </div>
            <ServicesOverview />
            <ContactCTA />
        </main>
    );
}
