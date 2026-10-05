import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Vision } from '@/components/Vision';
import { Pillars } from '@/components/Pillars';
import { About } from '@/components/About';
import { Join } from '@/components/Join';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Vision />
      <Pillars />
      <About />
      <Join />
      <Footer />
    </main>
  );
}
