import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function WhatsAppButton() {
  const message = encodeURIComponent('Merhaba! Wysteria Works hakkında bilgi almak istiyorum.');
  const phoneDigits = siteConfig.phone.replace(/\D/g, '');
  const href = `https://wa.me/${phoneDigits}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
    >
      <MessageCircle size={26} className="text-white" fill="white" />
      {/* Tooltip */}
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-espresso px-3 py-1.5 text-xs font-medium text-ivory opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
        WhatsApp'tan Yaz
      </span>
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 motion-safe:animate-ping" aria-hidden="true" />
    </a>
  );
}
