import Hero from '@/components/home/Hero';
import SignatureProducts from '@/components/home/SignatureProducts';
import StorySection from '@/components/home/StorySection';
import Gallery from '@/components/home/Gallery';
import VisitSection from '@/components/home/VisitSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SignatureProducts />
      <StorySection />
      <Gallery />
      <VisitSection />
    </>
  );
}
