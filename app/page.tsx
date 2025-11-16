import { HeroSection } from '@/components/HeroSection';
import { GallerySection } from '@/components/GallerySection';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <GallerySection />
    </main>
  );
}
