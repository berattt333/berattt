import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/data/site';

type WafflePiece = {
  image: string;
  alt: string;
  label: string;
  left: number;
  top: number;
  spreadX: number;
  spreadY: number;
  rotation: number;
};

const wafflePieces: WafflePiece[] = [
  {
    image: 'https://images.pexels.com/photos/17558647/pexels-photo-17558647.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&dpr=1',
    alt: 'Meyveli ve dondurmalı waffle',
    label: 'Meyveli',
    left: 28,
    top: 28,
    spreadX: -22,
    spreadY: -18,
    rotation: -8,
  },
  {
    image: 'https://images.pexels.com/photos/12148861/pexels-photo-12148861.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&dpr=1',
    alt: 'Çikolatalı waffle ve dondurma',
    label: 'Çikolatalı',
    left: 72,
    top: 28,
    spreadX: 22,
    spreadY: -18,
    rotation: 8,
  },
  {
    image: 'https://images.pexels.com/photos/1131810/pexels-photo-1131810.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&dpr=1',
    alt: 'Klasik meyveli waffle',
    label: 'Klasik',
    left: 28,
    top: 72,
    spreadX: -22,
    spreadY: 18,
    rotation: 7,
  },
  {
    image: 'https://images.pexels.com/photos/37095935/pexels-photo-37095935.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&dpr=1',
    alt: 'Waffle yanında kahve',
    label: 'Kahveyle',
    left: 72,
    top: 72,
    spreadX: 22,
    spreadY: 18,
    rotation: -7,
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;
        const distance = section.offsetHeight - window.innerHeight;
        const travelled = Math.max(0, -section.getBoundingClientRect().top);
        setProgress(Math.min(1, distance > 0 ? travelled / distance : 0));
      });
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[210vh] bg-[#f8efe4]">
      <div className="sticky top-0 h-screen min-h-[680px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,#fffaf4_0%,#f8efe4_54%,#ead4b8_100%)]" />
        <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-brass/15 blur-3xl" />
        <div className="absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-plum/10 blur-3xl" />

        <div className="absolute inset-0 z-10">
          {wafflePieces.map((piece) => (
            <article
              key={piece.label}
              className="absolute w-[35vw] max-w-[360px] min-w-[150px] overflow-hidden rounded-[1.5rem] bg-ivory shadow-[0_24px_70px_rgba(90,62,43,0.18)] sm:rounded-[2rem]"
              style={{
                left: `${piece.left}%`,
                top: `${piece.top}%`,
                transform: `translate3d(calc(-50% + ${piece.spreadX * progress}vw), calc(-50% + ${piece.spreadY * progress}vh), 0) rotate(${piece.rotation * progress}deg) scale(${1 - progress * 0.08})`,
                transformOrigin: 'center',
              }}
            >
              <img src={piece.image} alt={piece.alt} className="aspect-square w-full object-cover" loading="eager" />
              <span className="absolute bottom-3 left-3 rounded-full bg-espresso/75 px-3 py-1 text-[10px] font-medium uppercase tracking-wide-2 text-ivory backdrop-blur-sm sm:bottom-4 sm:left-4">
                {piece.label}
              </span>
            </article>
          ))}
        </div>

        <div className="absolute left-1/2 top-1/2 z-20 flex w-[min(78vw,560px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-wide-3 text-brass-dark sm:text-xs">
            Çark Caddesi · Adapazarı
          </p>
          <h1 className="font-serif text-6xl font-light tracking-tight text-espresso sm:text-8xl lg:text-9xl">
            {siteConfig.name.split(' ')[0]}
          </h1>
          <span className="mt-3 h-px w-16 bg-brass/60" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-espresso/65 sm:text-base">
            Waffle keyfi, iyi kahveyle tamamlanır.
            <br />
            Tatlı bir mola için parçaları bir araya getiriyoruz.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/menu"
              className="group inline-flex items-center gap-2 rounded-full bg-plum px-6 py-3 text-sm font-medium text-ivory shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-plum-600"
            >
              Menüyü Keşfet
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-espresso/20 bg-ivory/60 px-6 py-3 text-sm font-medium text-espresso transition-colors hover:border-brass-dark hover:text-brass-dark"
            >
              Bizi Bul
            </Link>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-espresso/55">
          <span className="text-[10px] font-medium uppercase tracking-wide-3">Aşağı kaydır</span>
          <ArrowDown size={16} className="scroll-cue" />
        </div>

        <div className="absolute bottom-7 right-6 z-30 hidden text-right text-[10px] uppercase tracking-wide-2 text-espresso/45 sm:block lg:right-12">
          <span className="block">Waffle stories</span>
          <span className="mt-1 block text-brass-dark">01 / 04</span>
        </div>
      </div>
    </section>
  );
}
