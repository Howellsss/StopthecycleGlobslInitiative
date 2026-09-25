import { type ReactNode } from 'react';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionHeader';

interface PageHeroProps {
  label: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image: string;
  /** CSS object-position for the background photo. */
  imagePosition?: string;
  children?: ReactNode;
}

/** Photo-backed page header used at the top of inner pages. */
export function PageHero({ label, title, subtitle, image, imagePosition = 'center 30%', children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/85 to-brand-navy/55" />
      <div className="relative mx-auto max-w-4xl px-4 pb-14 pt-20 text-center sm:px-6 lg:px-8 lg:pb-20 lg:pt-28">
        <Reveal>
          <SectionLabel className="text-brand-lime">{label}</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-5xl lg:text-6xl text-balance">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg text-pretty">{subtitle}</p>
          </Reveal>
        )}
        {children && <Reveal delay={0.15}>{children}</Reveal>}
      </div>
    </section>
  );
}
