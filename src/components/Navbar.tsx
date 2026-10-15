import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, ArrowRight } from 'lucide-react';
import { brandLogo, siteConfig } from '@/data/site';
import { useScrollPosition } from '@/hooks/useScrollReveal';

const navLinks = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/about', label: 'Hikâyemiz' },
  { to: '/contact', label: 'İletişim' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const scrolled = useScrollPosition();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const transparent = isHome && !scrolled && !open;
  const bgColor = transparent ? 'bg-transparent' : 'bg-ivory/90 backdrop-blur-lg';
  const textColor = transparent ? 'text-ivory' : 'text-espresso';
  const borderColor = transparent ? 'border-transparent' : 'border-ivory-300/60';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgColor} border-b ${borderColor}`}>
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12 lg:py-5">
          <Link
            to="/"
            className="flex h-9 w-[9.5rem] items-center sm:h-10 sm:w-[10.5rem]"
            aria-label={`${siteConfig.name} ana sayfa`}
          >
            {logoFailed ? (
              <span className={`font-serif text-xl font-medium tracking-tight ${transparent ? 'text-ivory' : 'text-espresso'}`}>
                <span className="italic">Wysteria</span>
              </span>
            ) : (
              <img
                src={brandLogo}
                alt={siteConfig.name}
                onError={() => setLogoFailed(true)}
                className={`h-full w-full object-cover transition-all duration-300 ${transparent ? '' : 'brightness-0 opacity-75'}`}
              />
            )}
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                    active ? 'text-brass-dark' : textColor
                  } hover:text-brass-dark`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/menu"
              className="group inline-flex items-center gap-2 rounded-full bg-plum px-6 py-2.5 text-sm font-medium text-ivory transition-all duration-300 hover:bg-plum-600"
            >
              Menüyü Keşfet
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="rounded-full p-2 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={open}
          >
            {open ? (
              <X className={transparent ? 'text-ivory' : 'text-espresso'} size={22} />
            ) : (
              <MenuIcon className={transparent ? 'text-ivory' : 'text-espresso'} size={22} />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile panel */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-plum/30 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-ivory px-8 pt-20 pb-8 shadow-2xl transition-transform duration-500 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`font-serif text-2xl font-medium transition-colors ${
                    active ? 'text-brass-dark' : 'text-espresso hover:text-brass'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/menu"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-plum px-6 py-3 text-sm font-medium text-ivory transition-all duration-300 hover:bg-plum-600"
            >
              Menüyü Keşfet
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-auto border-t border-ivory-300 pt-6">
            <p className="text-sm text-mauve-dark">{siteConfig.addressShort}</p>
            <a href={`tel:${siteConfig.phone}`} className="mt-1 block text-sm text-mauve-dark">
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
