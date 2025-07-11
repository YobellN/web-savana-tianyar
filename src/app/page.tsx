import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import InfoSection from '@/components/InfoSection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <InfoSection />
      <TestimonialSection />
      <Footer />
    </main>
  );
}