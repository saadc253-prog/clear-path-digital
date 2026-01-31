import Hero from '@/components/sections/Hero';
import ServicesOverview from '@/components/sections/ServicesOverview';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ServicesOverview />
      <ContactCTA />
    </main>
  );
}
