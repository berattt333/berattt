import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { useScrollPosition } from '@/hooks/useScrollReveal';

const navLinks = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/menu', label: 'Menü' },
  { to: '/about', label: 'Hikâyemiz' },
  { to: '/contact', label: 'İletişim' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
          {/* Wordmark */}
          <Link
            to="/"
            className={`font-serif text-lg font-medium tracking-tight transition-colors duration-300 ${textColor} sm:text-xl`}
            aria-label={`${siteConfig.name} ana sayfa`}
          >
            <span className="italic">Wysteria</span> Works
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
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
              className="rounded-full bg-plum/90 px-6 py-2.5 text-sm font-medium text-ivory transition-all duration-300 hover:bg-plum"
            >
              Menüyü Keşfet
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
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
