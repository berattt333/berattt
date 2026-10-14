import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import Reveal from '@/components/Reveal';
import { Eyebrow, OrnamentalRule } from '@/components/SectionHeading';

export default function VisitSection() {
  return (
    <section className="relative bg-ivory px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Text content */}
          <Reveal className="lg:col-span-5">
            <Eyebrow>Ziyaret</Eyebrow>
            <h2 className="mt-4 text-balance text-4xl font-light leading-tight text-espresso sm:text-5xl lg:text-6xl">
              Sizi bekliyoruz
            </h2>
            <OrnamentalRule className="mt-6" />

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-1 flex-shrink-0 text-brass-dark" size={20} />
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide-2 text-mauve-dark">Adres</p>
                  <p className="mt-1 text-base leading-relaxed text-espresso/70">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-1 flex-shrink-0 text-brass-dark" size={20} />
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide-2 text-mauve-dark">Çalışma Saatleri</p>
                  <div className="mt-1 space-y-1">
                    {siteConfig.hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-8 text-base text-espresso/70">
                        <span>{h.day}</span>
                        <span className="text-mauve-dark">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a
              href={siteConfig.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-plum px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-300 hover:bg-plum-600"
            >
              Yol Tarifi Al
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>

            <p className="mt-4 text-xs text-mauve-dark">
              Adres ve saatler taslak amaçlıdır, kesinleştiğinde güncellenecektir.
            </p>
          </Reveal>

          {/* Map */}
          <Reveal delay={1} className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[2rem] shadow-lg">
              <iframe
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="480"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Wysteria Works konum haritası"
                className="block w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
