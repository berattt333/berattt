import { Link } from 'react-router-dom';
import { ArrowUp, Instagram } from 'lucide-react';
import { siteConfig } from '@/data/site';

const footerLinks = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/menu', label: 'Menü' },
  { to: '/about', label: 'Hikâyemiz' },
  { to: '/contact', label: 'İletişim' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-plum text-ivory">
      {/* Soft wave transition */}
      <div className="absolute -top-px left-0 right-0 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="relative block h-[40px] w-full fill-ivory"
          aria-hidden="true"
        >
          <path d="M 0,40 Q 300,5 600,25 T 1200,10 L 1200,60 L 0,60 Z" />
        </svg>
      </div>

      {/* Oversized decorative letter */}
      <span
        className="pointer-events-none absolute right-4 top-12 select-none font-serif text-[16rem] leading-none text-ivory/[0.04] lg:text-[24rem]"
        aria-hidden="true"
      >
        W
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 pb-12 pt-20 lg:px-12 lg:pt-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="font-serif text-2xl font-medium tracking-tight">
              <span className="italic">Wysteria</span> Works
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
              Çark Caddesi'nde günlük taze fırınlanmış pastalar, özenle demlenen
              kahveler ve sezonun tatlıları. Burada her lokma bir ritüeldir.
            </p>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-ivory/60 transition-colors hover:text-brass-light"
            >
              <Instagram size={18} />
              {siteConfig.instagram}
            </a>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h3 className="mb-5 text-xs font-medium uppercase tracking-wide-3 text-brass-light">
              Keşfedin
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ivory/60 transition-colors hover:text-brass-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/menu"
              className="mt-6 inline-block rounded-full border border-brass-light px-5 py-2.5 text-sm font-medium text-brass-light transition-all duration-300 hover:bg-brass-light hover:text-plum"
            >
              Menüyü Keşfet
            </Link>
          </div>

          {/* Contact & hours */}
          <div className="lg:col-span-4 lg:col-start-9">
            <h3 className="mb-5 text-xs font-medium uppercase tracking-wide-3 text-brass-light">
              Ziyaret
            </h3>
            <address className="not-italic text-sm leading-relaxed text-ivory/60">
              {siteConfig.address}
              <br />
              <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-brass-light">
                {siteConfig.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-brass-light">
                {siteConfig.email}
              </a>
            </address>
            <div className="mt-5 space-y-1.5">
              {siteConfig.hours.map((h) => (
                <div key={h.day} className="flex justify-between text-sm text-ivory/50">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-ivory/35">
              Adres ve iletişim bilgileri taslak amaçlıdır.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-6 sm:flex-row">
          <p className="text-xs text-ivory/45">
            © {new Date().getFullYear()} Wysteria Works. Tüm hakları saklıdır.
          </p>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-xs text-ivory/55 transition-colors hover:text-brass-light"
            aria-label="Sayfanın başına dön"
          >
            Başa Dön
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/20 transition-all group-hover:border-brass-light group-hover:bg-brass-light group-hover:text-plum">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
