import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Experiences from '@/components/Experiences';
import Meditation from '@/components/Meditation';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Experiences />
      <Meditation />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
