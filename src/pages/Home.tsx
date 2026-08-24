
import { Hero, HeroImage } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Steps } from '@/components/Steps';
import { Gallery } from '@/components/Gallery';
import { News } from '@/components/News';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import TestimonialSection from '@/components/testimonial';

function App() {
  useScrollReveal();

  return (
    <section className=" home overflow-hidden bg-cream text-ink">
      <Hero />
      <HeroImage />
      <About />
      <Services />
      <Steps />
      <TestimonialSection/>
      <Gallery />
      <News />
    </section>
  );
}

export default App;
