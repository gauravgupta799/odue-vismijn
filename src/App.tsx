import { Header } from '@/components/Header';
import { Hero, HeroImage } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Steps } from '@/components/Steps';
import { Gallery } from '@/components/Gallery';
import { News } from '@/components/News';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <main className="overflow-hidden bg-cream text-ink">
      <Header />
      <Hero />
      <HeroImage />
      <About />
      <Services />
      <Steps />
      <Gallery />
      <News />
      <Footer />
    </main>
  );
}

export default App;
