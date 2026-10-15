import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { brandLogo, heroImage, siteConfig } from '@/data/site';

export default function Hero() {
  return (
    <section className="relative min-h-[min(900px,100svh)] overflow-hidden bg-plum">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center motion-safe:lg:animate-slow-zoom"
          style={{
            backgroundImage: `url(${heroImage})`,
            clipPath: 'polygon(0 0, 100% 0, 100% 88%, 60% 100%, 0 92%)',
          }}
          aria-hidden="true"
        />
        {/* Stronger overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-espresso/75 via-espresso/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory/95 via-ivory/10 to-transparent" />
      </div>

      {/* Decorative circular badge */}
      <div className="absolute right-8 top-28 z-10 hidden lg:block lg:right-16 lg:top-32">
        <div className="relative h-40 w-40 lg:h-48 lg:w-48">
          <div className="absolute inset-0 rounded-full border border-ivory/20" />
          <div className="absolute inset-4 rounded-full border border-ivory/12" />
          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow">
            <defs>
              <path
                id="circle-path"
                d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
              />
            </defs>
            <text className="fill-ivory/55 text-[9px] uppercase tracking-wide-2" fontFamily="Mulish" fontWeight={500}>
              <textPath href="#circle-path" startOffset="0%">
                Wysteria Works · Çark Caddesi · Adapazarı · Sakarya ·
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-ivory/10 backdrop-blur-sm lg:h-24 lg:w-24">
              <span className="font-serif text-3xl font-light italic text-ivory/90 lg:text-4xl">w</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 pb-24 pt-28 lg:px-12">
        <div className="max-w-2xl">
          <img
            src={brandLogo}
            alt={siteConfig.name}
            width="320"
            height="320"
            fetchPriority="high"
            className="mb-7 h-20 w-48 object-cover object-center animate-fade-up sm:h-24 sm:w-56"
          />
          <span className="animate-fade-up text-[11px] font-medium uppercase tracking-wide-3 text-brass-light drop-shadow-sm">
            {siteConfig.name} — Çark Caddesi
          </span>

          <h1
            className="mt-5 animate-fade-up text-balance text-5xl font-light leading-[1.05] text-ivory drop-shadow-md sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.1s' }}
          >
            Küçük bir mola,
            <br />
            <span className="italic font-normal text-brass-light">unutulmaz</span> bir tat.
          </h1>

          <p
            className="mt-7 max-w-md animate-fade-up text-base leading-relaxed text-ivory/80 drop-shadow-sm"
            style={{ animationDelay: '0.2s' }}
          >
            Adapazarı'nın kalbinde, her fincan bir ritüel. Günlük taze
            fırınlanan pastalarımız ve özenle demlenen kahvelerimizle
            sizi bekliyoruz.
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-wrap items-center gap-5"
            style={{ animationDelay: '0.3s' }}
          >
            <Link
              to="/menu"
              className="group inline-flex items-center gap-2.5 rounded-full bg-brass px-7 py-3.5 text-sm font-medium text-ivory shadow-lg transition-all duration-300 hover:bg-brass-dark hover:shadow-xl"
            >
              Menüyü Keşfet
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-ivory/90 underline-offset-4 transition-colors hover:text-brass-light hover:underline"
            >
              Hikâyemizi Tanıyın
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
