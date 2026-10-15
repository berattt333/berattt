import { MapPin, ExternalLink, Navigation } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function MapFallback() {
  return (
    <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-[2rem] bg-ivory-200">
      {/* Decorative grid — mimics a map */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(#2C1A0E 1px, transparent 1px),
            linear-gradient(90deg, #2C1A0E 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />
      {/* Diagonal road lines */}
      <svg className="absolute inset-0 h-full w-full opacity-10" aria-hidden="true">
        <line x1="0" y1="60%" x2="100%" y2="40%" stroke="#2C1A0E" strokeWidth="8" />
        <line x1="30%" y1="0" x2="50%" y2="100%" stroke="#2C1A0E" strokeWidth="5" />
        <line x1="0" y1="30%" x2="100%" y2="60%" stroke="#2C1A0E" strokeWidth="3" />
      </svg>

      {/* Center card */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full max-w-sm rounded-2xl bg-ivory/95 p-6 text-center shadow-xl backdrop-blur-sm">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-plum/10">
            <MapPin className="text-plum" size={24} />
          </div>
          <h3 className="font-serif text-xl font-light text-espresso">Wysteria Works</h3>
          <p className="mt-2 text-sm leading-relaxed text-espresso/60">{siteConfig.address}</p>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <a
              href={siteConfig.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-plum px-5 py-2.5 text-sm font-medium text-ivory transition-all hover:bg-plum-600"
            >
              <Navigation size={14} />
              Yol Tarifi Al
            </a>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-espresso/20 px-5 py-2.5 text-sm font-medium text-espresso/70 transition-all hover:border-plum hover:text-plum"
            >
              <ExternalLink size={14} />
              Haritada Aç
            </a>
          </div>

          <p className="mt-4 text-xs text-mauve-dark">{siteConfig.hours[0].day}: {siteConfig.hours[0].time}</p>
        </div>
      </div>
    </div>
  );
}
