import { Link } from 'react-router-dom';

type Props = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  crumb?: string;
};

export default function PageHeader({ title, subtitle, eyebrow, crumb }: Props) {
  return (
    <section className="relative overflow-hidden bg-plum px-6 pb-20 pt-32 lg:px-12 lg:pb-28 lg:pt-40">
      <span
        className="pointer-events-none absolute -right-8 top-8 select-none font-serif text-[14rem] leading-none text-ivory/5 lg:text-[22rem]"
        aria-hidden="true"
      >
        {title.charAt(0)}
      </span>
      <div className="relative mx-auto max-w-[1400px]">
        {crumb && (
          <nav className="mb-6 flex items-center gap-2 text-xs text-ivory/50">
            <Link to="/" className="transition-colors hover:text-brass-light">
              Ana Sayfa
            </Link>
            <span>/</span>
            <span className="text-ivory/80">{crumb}</span>
          </nav>
        )}
        {eyebrow && (
          <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-wide-3 text-brass-light">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl text-balance text-4xl font-light leading-[1.08] text-ivory sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/65">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
