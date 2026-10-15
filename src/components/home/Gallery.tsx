import { galleryImages } from '@/data/site';
import Reveal from '@/components/Reveal';
import SmartImage from '@/components/SmartImage';
import { Eyebrow, OrnamentalRule } from '@/components/SectionHeading';

export default function Gallery() {
  return (
    <section className="bg-ivory-200/50 px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="mb-16 text-center">
          <Eyebrow>Mekan</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-light leading-tight text-espresso sm:text-5xl lg:text-6xl">
            Atmosferin tadını çıkarın
          </h2>
          <OrnamentalRule className="mt-6" />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[150px] lg:grid-cols-12 lg:gap-6">
          <Reveal className="h-full sm:col-span-2 lg:col-span-7 lg:row-span-2">
            <div className="group relative h-full overflow-hidden rounded-[2rem]">
              <SmartImage
                src={galleryImages[0].url}
                alt={galleryImages[0].alt}
                aspect="aspect-[16/11] lg:aspect-none lg:h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-plum/50 to-transparent p-6 transition-opacity group-hover:from-plum/30">
                <span className="text-xs font-medium uppercase tracking-wide-2 text-ivory">{galleryImages[0].label}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1} className="h-full sm:col-span-1 lg:col-span-5">
            <div className="group relative h-full overflow-hidden rounded-[2rem]">
              <SmartImage
                src={galleryImages[1].url}
                alt={galleryImages[1].alt}
                aspect="aspect-[4/3] lg:aspect-none lg:h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-plum/50 to-transparent p-5 transition-opacity group-hover:from-plum/30">
                <span className="text-xs font-medium uppercase tracking-wide-2 text-ivory">{galleryImages[1].label}</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="h-full sm:col-span-1 lg:col-span-5">
            <div className="group relative h-full overflow-hidden rounded-[2rem]">
              <SmartImage
                src={galleryImages[2].url}
                alt={galleryImages[2].alt}
                aspect="aspect-[4/3] lg:aspect-none lg:h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-plum/50 to-transparent p-5 transition-opacity group-hover:from-plum/30">
                <span className="text-xs font-medium uppercase tracking-wide-2 text-ivory">{galleryImages[2].label}</span>
              </div>
            </div>
          </Reveal>

          {galleryImages.slice(3).map((image, index) => (
            <Reveal key={image.url} delay={(index % 3) as 0 | 1 | 2} className="h-full sm:col-span-1 lg:col-span-4 lg:row-span-2">
              <div className="group relative h-full overflow-hidden rounded-[2rem]">
                <SmartImage
                  src={image.url}
                  alt={image.alt}
                  aspect="aspect-[4/3] lg:aspect-none lg:h-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-plum/50 to-transparent p-5 transition-opacity group-hover:from-plum/30">
                  <span className="text-xs font-medium uppercase tracking-wide-2 text-ivory">{image.label}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
