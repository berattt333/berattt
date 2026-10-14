import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/site';
import Reveal from '@/components/Reveal';
import SmartImage from '@/components/SmartImage';
import { Eyebrow, OrnamentalRule } from '@/components/SectionHeading';

export default function SignatureProducts() {
  const featured = products.filter((p) => p.featured);

  return (
    <section className="relative bg-ivory px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Sezonun Seçkisi</Eyebrow>
            <h2 className="mt-4 text-balance text-4xl font-light leading-tight text-espresso sm:text-5xl lg:text-6xl">
              İmza lezzetlerimiz
            </h2>
          </Reveal>
          <Reveal delay={1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-relaxed text-espresso/60">
              Her biri özenle hazırlanır, mevsimle değişir. Wysteria
              Works'ün ruhunu yansıtan birkaç özel seçki.
            </p>
          </Reveal>
        </div>

        <OrnamentalRule className="mb-16" />

        {/* Products — alternating editorial layout */}
        <div className="space-y-20 lg:space-y-28">
          {featured.map((product, index) => {
            const isLeft = index % 2 === 0;
            return (
              <Reveal key={product.id} as="article">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
                  {/* Image */}
                  <div className={`lg:col-span-6 ${isLeft ? '' : 'lg:order-2 lg:col-start-7'}`}>
                    <div className={`relative ${isLeft ? 'lg:ml-8' : 'lg:mr-8'}`}>
                      <div className="overflow-hidden rounded-[2.5rem]">
                        <SmartImage
                          src={product.image}
                          alt={product.alt}
                          aspect="aspect-[4/5]"
                          loading="lazy"
                        />
                      </div>
                      {/* Price badge */}
                      <div className={`absolute bottom-6 ${isLeft ? '-right-4 lg:-right-8' : '-left-4 lg:-left-8'} rounded-full bg-plum px-5 py-3 text-ivory shadow-lg`}>
                        <span className="font-serif text-xl font-medium">₺{product.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`lg:col-span-5 ${isLeft ? 'lg:col-start-8' : 'lg:order-1 lg:col-start-1'}`}>
                    <span className="text-xs font-medium uppercase tracking-wide-2 text-brass-dark">
                      {product.category}
                    </span>
                    <h3 className="mt-3 text-3xl font-light text-espresso lg:text-4xl">
                      {product.name}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-espresso/60">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal className="mt-20 text-center">
          <Link
            to="/menu"
            className="group inline-flex items-center gap-2.5 rounded-full border border-plum/30 px-7 py-3.5 text-sm font-medium text-plum transition-all duration-300 hover:bg-plum hover:text-ivory"
          >
            Tüm Menüyü Keşfet
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
