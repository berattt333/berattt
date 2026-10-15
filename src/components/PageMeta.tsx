import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '@/data/site';

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: 'Adapazarı Çark Caddesi\'nde çıtır waffle\'lar, özenle demlenen kahveler ve tatlı molalar.',
  },
  '/menu': {
    title: `Menü — ${siteConfig.name}`,
    description: 'Çıtır waffle\'lar, kahveler, soğuk içecekler ve tatlılar. Tüm lezzetlerimiz ve fiyatları.',
  },
  '/about': {
    title: `Hikâyemiz — ${siteConfig.name}`,
    description: 'Wysteria Works\'ün doğuşu: bir ritüelin hikâyesi, demlemenin sanatı ve taze fırınlama tutkusu.',
  },
  '/contact': {
    title: `İletişim — ${siteConfig.name}`,
    description: 'Çark Caddesi, Adapazarı. Telefon, e-posta, çalışma saatleri ve yol tarifi.',
  },
};

export default function PageMeta() {
  const { pathname } = useLocation();
  const meta = pageMeta[pathname] || pageMeta['/'];

  useEffect(() => {
    document.title = meta.title;

    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', meta.description);
  }, [meta]);

  return null;
}
