import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Offers } from '@/components/sections/Offers';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ApplicationForm } from '@/components/sections/ApplicationForm';
import { Testimonials } from '@/components/sections/Testimonials';
import { Stats } from '@/components/sections/Stats';
import { Faq } from '@/components/sections/Faq';
import { CtaFinal } from '@/components/sections/CtaFinal';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Offers />
        <Features />
        <HowItWorks />
        <ApplicationForm />
        <Testimonials />
        <Stats />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
