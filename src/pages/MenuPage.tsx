import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products, categories, siteConfig } from '@/data/site';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { OrnamentalRule } from '@/components/SectionHeading';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const filteredProducts = useMemo(
    () => products.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <PageHeader
        eyebrow="Dijital Menü"
        title="Lezzetlerimiz"
        subtitle="Kahveden tatlıya, fırından yeni çıkan her şey. Mevsime göre güncellenir."
        crumb="Menü"
      />

      <section className="bg-ivory px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1100px]">
          {/* Category navigation — pill tabs */}
          <div className="sticky top-16 z-30 -mx-6 mb-8 bg-ivory/90 px-6 py-3 backdrop-blur-md lg:mx-0 lg:rounded-full lg:px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => {
                const active = cat === activeCategory;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                      active
                        ? 'bg-plum text-ivory'
                        : 'bg-ivory-200 text-espresso/70 hover:bg-mauve/20'
                    }`}
                    aria-pressed={active}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product list — compact rows with small thumbnails */}
          <div className="divide-y divide-ivory-300/60">
            {filteredProducts.map((product, index) => (
              <Reveal key={product.id} delay={index < 4 ? (index % 4) as 0 | 1 | 2 | 3 : 0}>
                <article className="group flex items-center gap-4 py-5 transition-colors duration-200 hover:bg-ivory-200/50 sm:gap-6 sm:py-6">
                  {/* Thumbnail */}
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20">
                    <img
                      src={product.image}
                      alt={product.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-espresso sm:text-lg">
                      {product.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-espresso/60 sm:line-clamp-1">
                      {product.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex-shrink-0 text-right">
                    <span className="font-serif text-lg font-medium text-plum sm:text-xl">
                      ₺{product.price}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 rounded-2xl bg-ivory-200/70 px-6 py-5 text-center">
            <p className="text-sm leading-relaxed text-espresso/55">
              Fiyatlar ve ürünler taslak amaçlıdır. Mevsimsel değişiklikler
              ve güncellemeler işletme tarafından yapılabilir.
            </p>
          </div>

          {/* CTA */}
          <Reveal className="mt-12 text-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full border border-plum/30 px-7 py-3.5 text-sm font-medium text-plum transition-all duration-300 hover:bg-plum hover:text-ivory"
            >
              Bizi Ziyaret Edin
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
