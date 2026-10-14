import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { aboutImages, storyImages } from '@/data/site';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import SmartImage from '@/components/SmartImage';
import { Eyebrow, OrnamentalRule } from '@/components/SectionHeading';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hikâyemiz"
        title="Bir ritüelin doğuşu"
        subtitle="Wysteria Works, bir kahveden fazlasıdır. Bir durak, bir nefes, bir geleneğin başlangıcı."
        crumb="Hikâyemiz"
      />

      {/* Manifesto */}
      <section className="bg-ivory px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mx-auto max-w-4xl text-center">
            <OrnamentalRule className="mb-8" />
            <p className="text-balance text-2xl font-light leading-relaxed text-espresso sm:text-3xl lg:text-4xl lg:leading-relaxed">
              İnanıyoruz ki iyi bir kahve sadece bir içecek değil,
              günün ritüelidir. Bir kruvasan sadece bir pastı değil,
              sabahın vaadidir. Burada sunduğumuz, sıcak bir anın
              tadıdır.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story 1 — image left, text right */}
      <section className="bg-plum px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <div className="relative">
                <div className="overflow-hidden rounded-[2.5rem]">
                  <SmartImage
                    src={aboutImages.story1}
                    alt="Bardaktan kahveyi dökerken elde demleme"
                    aspect="aspect-[4/5]"
                    loading="lazy"
                  />
                </div>
                <span className="absolute -right-2 -top-6 select-none font-serif text-7xl text-ivory/10 lg:text-9xl" aria-hidden="true">
                  02
                </span>
              </div>
            </Reveal>
            <Reveal delay={1} className="lg:col-span-5 lg:col-start-8">
              <Eyebrow className="text-brass-light">Çekirdekten Fincana</Eyebrow>
              <h2 className="mt-4 text-3xl font-light leading-tight text-ivory sm:text-4xl lg:text-5xl">
                Demlemenin sanatı
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ivory/65">
                Her çekirdeği tek köken menşeisiyle, özenle seçiyoruz.
                V60 yöntemiyle, suyun sıcaklığını ve akışını kontrol
                ederek, her fincanda meyve ve çiçek notalarını ortaya
                çıkarıyoruz.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ivory/65">
                Bu, hızlı bir demleme değil. Sabırlı bir süreç. Ve
                sonuç, beklemeye değer.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story 2 — text left, image right, offset */}
      <section className="bg-ivory px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Fırından</Eyebrow>
              <h2 className="mt-4 text-3xl font-light leading-tight text-espresso sm:text-4xl lg:text-5xl">
                Her sabah taze
              </h2>
              <OrnamentalRule className="mt-6" />
              <p className="mt-6 text-base leading-relaxed text-espresso/60">
                Mutfak ekibimiz, günün ilk ışıklarında hamuru yoğurmaya
                başlar. Tereyağının kat kat açılması, mayanın sabırla
                bekletilmesi, fırının ısı dengesi — hepsi bir denge.
              </p>
              <p className="mt-4 text-base leading-relaxed text-espresso/60">
                Kruvasanlarımız, ekmeğimiz ve pastalarımız, kapımızı
                açtığımızda misafirlerimizi karşılıyor. Sıcacık, kokulu
                ve taze.
              </p>
            </Reveal>
            <Reveal delay={1} className="lg:col-span-6 lg:col-start-7">
              <div className="relative">
                <div className="overflow-hidden rounded-[2.5rem]">
                  <SmartImage
                    src={aboutImages.story2}
                    alt="Eller kahveyi fincana dökerken"
                    aspect="aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-2 w-28 overflow-hidden rounded-2xl border-4 border-ivory sm:w-36 lg:-right-8 lg:w-48">
                  <SmartImage
                    src={storyImages.detail}
                    alt="Dilimlenmiş kruvasanlar"
                    aspect="aspect-square"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story 3 — overlay quote */}
      <section className="relative overflow-hidden bg-plum py-24 lg:py-32">
        <div className="absolute inset-0">
          <SmartImage
            src={aboutImages.hero}
            alt="Sanat eserleriyle dolu sıcak kafe iç mekanı"
            aspect="aspect-none"
            className="h-full"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-plum/65" />
        </div>
        <Reveal className="relative mx-auto max-w-3xl px-6 text-center lg:px-12">
          <OrnamentalRule className="mb-8" />
          <p className="text-balance text-2xl font-light italic leading-relaxed text-ivory sm:text-3xl lg:text-4xl lg:leading-relaxed">
            "Bir fincan kahve, bir ömür dostluğun başlangıcı olabilir."
          </p>
          <p className="mt-6 text-xs uppercase tracking-wide-3 text-brass-light">
            Wysteria Works Felsefesi
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-ivory px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Sizi Bekliyoruz</Eyebrow>
              <h2 className="mt-4 text-balance text-3xl font-light leading-tight text-espresso sm:text-4xl lg:text-5xl">
                Bir fincan için uğrayın, bir an için kalın
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-espresso/60">
                Menümüzü keşfedin veya Çark Caddesi'nde bizi ziyaret
                edin. Kapımız her zaman açık.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/menu"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-plum px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-300 hover:bg-plum-600"
                >
                  Menüyü Keşfet
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-plum/30 px-7 py-3.5 text-sm font-medium text-plum transition-all duration-300 hover:bg-plum hover:text-ivory"
                >
                  İletişim
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="overflow-hidden rounded-[2rem]">
                <SmartImage
                  src={storyImages.interior}
                  alt="Sanat dolu duvarlarla sıcak kafe iç mekanı"
                  aspect="aspect-[4/5]"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
