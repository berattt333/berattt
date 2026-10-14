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
        <div className="mb-14 text-center">
          <Reveal>
            <Eyebrow>Sezonun Seçkisi</Eyebrow>
            <h2 className="mt-4 text-balance text-4xl font-light leading-tight text-espresso sm:text-5xl lg:text-6xl">
              İmza lezzetlerimiz
            </h2>
            <OrnamentalRule className="mt-6" />
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-espresso/55">
              Her biri özenle hazırlanır, mevsimle değişir. Wysteria
              Works'ün ruhunu yansıtan birkaç özel seçki.
            </p>
          </Reveal>
        </div>

        {/* Products — clean card grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
          {featured.map((product, index) => (
            <Reveal key={product.id} delay={(index % 2) as 0 | 1}>
              <article className="group h-full overflow-hidden rounded-[2rem] bg-ivory-50 shadow-sm transition-all duration-500 hover:shadow-md">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <SmartImage
                    src={product.image}
                    alt={product.alt}
                    aspect="aspect-[5/4]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute right-5 top-5 rounded-full bg-plum/90 px-4 py-2 text-ivory backdrop-blur-sm">
                    <span className="font-serif text-lg font-medium">₺{product.price}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-7 pb-8 pt-6">
                  <span className="text-xs font-medium uppercase tracking-wide-2 text-brass-dark">
                    {product.category}
                  </span>
                  <h3 className="mt-2.5 text-2xl font-light text-espresso">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-espresso/55">
                    {product.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-16 text-center">
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
