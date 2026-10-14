import { Link } from 'react-router-dom';
import { storyImages } from '@/data/site';
import Reveal from '@/components/Reveal';
import SmartImage from '@/components/SmartImage';
import { Eyebrow } from '@/components/SectionHeading';

export default function StorySection() {
  return (
    <section className="relative overflow-hidden bg-plum px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Text */}
          <Reveal className="lg:col-span-5">
            <Eyebrow className="text-brass-light">Hikâyemiz</Eyebrow>
            <h2 className="mt-4 text-balance text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">
              Her güzel şey
              <br />
              <span className="italic font-normal text-brass-light">bir ritüelle</span>
              <br />
              başlar.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-ivory/65">
              Wysteria Works, Çark Caddesi'nin tarih kokan taşlarının
              arasında doğdu. Sabahın ilk ışıklarında demlenen kahve,
              fırından yeni çıkan kruvasanın kokusu, bir fincan başında
              kurulan sohbet...
            </p>
            <p className="mt-4 text-base leading-relaxed text-ivory/65">
              Burada zaman yavaşlar. Her detay özenle seçilir: çekirdeğin
              menşei, hamurun mayalanma süresi, tabağın dokusu. Sadece bir
              kahve değil, bir an sunarız.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brass-light underline-offset-4 transition-colors hover:text-ivory hover:underline"
            >
              Hikâyemizi Tanıyın →
            </Link>
          </Reveal>

          {/* Image */}
          <div className="lg:col-span-7 lg:col-start-7">
            <Reveal delay={1} className="relative">
              <div className="relative overflow-hidden rounded-[2.5rem]">
                <SmartImage
                  src={storyImages.primary}
                  alt="Vintage dekor ve sıcak ışıkla döşenmiş kafe iç mekanı"
                  aspect="aspect-[3/4]"
                  loading="lazy"
                />
              </div>
              {/* Small offset image */}
              <div className="absolute -bottom-6 -left-4 w-28 overflow-hidden rounded-2xl border-4 border-plum sm:w-40 lg:-left-10 lg:w-52">
                <SmartImage
                  src={storyImages.barista}
                  alt="Barista kahve hazırlarken"
                  aspect="aspect-square"
                  loading="lazy"
                />
              </div>
              {/* Decorative number */}
              <span className="absolute -right-2 -top-6 select-none font-serif text-7xl text-ivory/10 lg:text-9xl" aria-hidden="true">
                01
              </span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
