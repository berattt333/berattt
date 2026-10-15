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

        {/* Gallery — varied sizes with soft rounded corners */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-6">
          <Reveal className="col-span-2 lg:col-span-6">
            <div className="group relative overflow-hidden rounded-3xl">
              <SmartImage src={galleryImages[0].url} alt={galleryImages[0].alt} aspect="aspect-[16/11]" loading="lazy" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-plum/50 to-transparent p-6 transition-opacity group-hover:from-plum/30">
                <span className="text-xs font-medium uppercase tracking-wide-2 text-ivory">{galleryImages[0].label}</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1} className="col-span-1 lg:col-span-3 lg:mt-12">
            <div className="group relative overflow-hidden rounded-3xl">
              <SmartImage src={galleryImages[1].url} alt={galleryImages[1].alt} aspect="aspect-[4/5]" loading="lazy" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-plum/50 to-transparent p-6 transition-opacity group-hover:from-plum/30">
                <span className="text-xs font-medium uppercase tracking-wide-2 text-ivory">{galleryImages[1].label}</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="col-span-1 lg:col-span-3 lg:mt-12">
            <div className="group relative overflow-hidden rounded-3xl">
              <SmartImage src={galleryImages[2].url} alt={galleryImages[2].alt} aspect="aspect-[3/4]" loading="lazy" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-plum/50 to-transparent p-4 transition-opacity group-hover:from-plum/30">
                <span className="text-xs font-medium uppercase tracking-wide-2 text-ivory">{galleryImages[2].label}</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1} className="col-span-1 lg:col-span-4 lg:mt-4">
            <div className="group relative overflow-hidden rounded-3xl">
              <SmartImage src={galleryImages[3].url} alt={galleryImages[3].alt} aspect="aspect-[3/4]" loading="lazy" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-plum/50 to-transparent p-4 transition-opacity group-hover:from-plum/30">
                <span className="text-xs font-medium uppercase tracking-wide-2 text-ivory">{galleryImages[3].label}</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={2} className="col-span-2 lg:col-span-4 lg:mt-12">
            <div className="group relative overflow-hidden rounded-3xl">
              <SmartImage src={galleryImages[4].url} alt={galleryImages[4].alt} aspect="aspect-[3/4]" loading="lazy" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-plum/50 to-transparent p-4 transition-opacity group-hover:from-plum/30">
                <span className="text-xs font-medium uppercase tracking-wide-2 text-ivory">{galleryImages[4].label}</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="col-span-2 mt-4 lg:col-span-8 lg:col-start-3 lg:mt-12">
            <div className="group relative overflow-hidden rounded-3xl">
              <SmartImage src={galleryImages[5].url} alt={galleryImages[5].alt} aspect="aspect-[16/7]" loading="lazy" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-plum/50 to-transparent p-6 transition-opacity group-hover:from-plum/30">
                <span className="text-xs font-medium uppercase tracking-wide-2 text-ivory">{galleryImages[5].label}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
