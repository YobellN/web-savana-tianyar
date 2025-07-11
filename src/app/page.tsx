import TopInfoHeader from '@/components/TopInfoHeader';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import SavanaInfoSection from '@/components/SavanaInfoSection';
import GallerySection from '@/components/GallerySection';
import InfoSection from '@/components/InfoSection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopInfoHeader />
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <SavanaInfoSection />
      <GallerySection />
      <InfoSection />
      <TestimonialSection />
      <Footer />
    </main>
  );
}