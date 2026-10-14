import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { heroImage, siteConfig } from '@/data/site';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-plum">
      {/* Background image — soft organic mask */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{
            backgroundImage: `url(${heroImage})`,
            clipPath: 'polygon(0 0, 100% 0, 100% 88%, 60% 100%, 0 92%)',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-plum/70 via-plum/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory/90 via-transparent to-plum/10" />
      </div>

      {/* Decorative circular badge */}
      <div className="absolute right-6 top-24 z-10 hidden lg:block lg:right-12 lg:top-28">
        <div className="relative h-28 w-28 lg:h-32 lg:w-32">
          <svg viewBox="0 0 200 200" className="h-full w-full">
            <defs>
              <path
                id="circle-path"
                d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
              />
            </defs>
            <text className="fill-ivory/50 text-[10px] uppercase tracking-wide-2" fontFamily="Mulish">
              <textPath href="#circle-path" startOffset="0%">
                Wysteria Works · Çark Caddesi · Adapazarı ·
              </textPath>
            </text>
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-serif text-xl text-brass-light italic">
            w
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 pb-24 pt-28 lg:px-12">
        <div className="max-w-2xl">
          <span className="animate-fade-up text-[11px] font-medium uppercase tracking-wide-3 text-brass-light">
            {siteConfig.name} — Çark Caddesi
          </span>

          <h1
            className="mt-5 animate-fade-up text-balance text-5xl font-light leading-[1.05] text-ivory sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.1s' }}
          >
            Küçük bir mola,
            <br />
            <span className="italic font-normal text-brass-light">unutulmaz</span> bir tat.
          </h1>

          <p
            className="mt-7 max-w-md animate-fade-up text-base leading-relaxed text-ivory/75"
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
              className="group inline-flex items-center gap-2.5 rounded-full bg-brass px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-300 hover:bg-brass-dark"
            >
              Menüyü Keşfet
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-ivory/80 underline-offset-4 transition-colors hover:text-brass-light hover:underline"
            >
              Hikâyemizi Tanıyın
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
