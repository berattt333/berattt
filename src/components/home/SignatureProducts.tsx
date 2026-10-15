import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { products } from '@/data/site';
import Reveal from '@/components/Reveal';
import SmartImage from '@/components/SmartImage';
import { Eyebrow, OrnamentalRule } from '@/components/SectionHeading';
import WaffleRitual from '@/components/home/WaffleRitual';

export default function SignatureProducts() {
  const featured = products
    .filter((p) => p.featured)
    .sort((a, b) => (a.id === 'waffle' ? -1 : b.id === 'waffle' ? 1 : 0));

  return (
    <section className="relative bg-ivory px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <WaffleRitual />

        {/* Header */}
        <div className="mb-14 text-center">
          <Reveal>
            <Eyebrow>Wysteria'nın Favorisi</Eyebrow>
            <h2 className="mt-4 text-balance text-4xl font-light leading-tight text-espresso sm:text-5xl lg:text-6xl">
              Waffle ve kahve ritüeli
            </h2>
            <OrnamentalRule className="mt-6" />
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-espresso/55">
              Dışı çıtır, içi yumuşak waffle'larımızı iyi kahve ve soğuk
              içeceklerle eşleştirdik. Günün en tatlı molası burada başlar.
            </p>
          </Reveal>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
          {featured.map((product, index) => (
            <Reveal key={product.id} delay={(index % 2) as 0 | 1}>
              <article className="group h-full overflow-hidden rounded-[2rem] bg-ivory-50 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <SmartImage
                    src={product.image}
                    alt={product.alt}
                    aspect="aspect-[5/4]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {/* Price badge */}
                  <div className="absolute right-5 top-5 rounded-full bg-plum/90 px-4 py-2 text-ivory shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                    <span className="font-serif text-lg font-medium">₺{product.price}</span>
                  </div>
                  {/* Popular badge */}
                  <div className="absolute left-5 top-5 flex items-center gap-1 rounded-full bg-brass/90 px-3 py-1.5 text-ivory shadow-md backdrop-blur-sm">
                    <Star size={10} fill="currentColor" />
                    <span className="text-[10px] font-semibold uppercase tracking-wide">{product.id === 'waffle' ? 'İmza' : 'Popüler'}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-7 pb-8 pt-6">
                  <span className="text-xs font-medium uppercase tracking-wide-2 text-brass-dark">
                    {product.category}
                  </span>
                  <h3 className="mt-2.5 text-2xl font-light text-espresso transition-colors group-hover:text-plum">
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
