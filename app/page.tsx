import Hero from '@/components/sections/Hero';
import BrandImpact from '@/components/sections/BrandImpact';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import AboutSummary from '@/components/sections/AboutSummary';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <BrandImpact />
      <ServicesOverview />
      <WhyChooseUs />
      <AboutSummary />
      <ContactCTA />
    </main>
  );
}
