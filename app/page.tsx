import Hero from '@/components/sections/Hero';
import BrandImpact from '@/components/sections/BrandImpact';
import HomeProblemSolution from '@/components/sections/HomeProblemSolution';
import ServicesOverview from '@/components/sections/ServicesOverview';
import HowWeWork from '@/components/sections/HowWeWork';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import AboutSummary from '@/components/sections/AboutSummary';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <BrandImpact />
      <HomeProblemSolution />
      <ServicesOverview />
      <HowWeWork />
      <WhyChooseUs />
      <Testimonials />
      <AboutSummary />
      <ContactCTA />
    </main>
  );
}
