import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Calendar, ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionHeader';
import { summit2026Chapters, summit2026Photos, type StoryChapter, type StoryPhoto } from '@/data/summit2026';
import { usePageMeta } from '@/lib/usePageMeta';

const heroPhoto = summit2026Photos.find((p) => p.image.includes('full-house')) ?? summit2026Photos[0];

/** Chapters with a dark background, for rhythm while scrolling. */
const darkChapters = new Set(['keynotes', 'the-team']);

function Photo({ photo, onOpen }: { photo: StoryPhoto; onOpen: () => void }) {
  return (
    <figure className="group">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open photo: ${photo.title}`}
        className="relative block w-full overflow-hidden rounded-2xl bg-brand-cream-warm"
      >
        <img
          src={photo.image}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          style={{ aspectRatio: `${photo.width}/${photo.height}` }}
          className="img-zoom w-full object-cover"
        />
      </button>
      <figcaption className="mt-3">
        <p className="text-sm font-bold">{photo.title}</p>
        <p className="mt-0.5 text-sm opacity-80">{photo.caption}</p>
      </figcaption>
    </figure>
  );
}

function Chapter({
  chapter,
  index,
  next,
  onOpen,
}: {
  chapter: StoryChapter;
  index: number;
  next?: StoryChapter;
  onOpen: (photo: StoryPhoto) => void;
}) {
  const dark = darkChapters.has(chapter.id);
  const [feature, ...rest] = chapter.photos;
  const number = String(index + 1).padStart(2, '0');

  return (
    <section
      id={chapter.id}
      data-chapter={chapter.id}
      className={`scroll-mt-28 py-16 lg:py-24 ${dark ? 'bg-brand-navy text-white' : index % 2 === 0 ? 'bg-white text-brand-navy' : 'bg-brand-cream-warm text-brand-navy'}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-12">
            <span className={`font-serif text-7xl font-semibold leading-none tracking-[-0.05em] lg:text-9xl ${dark ? 'text-brand-lime' : 'text-brand-emerald/25'}`}>
              {number}
            </span>
            <div className="max-w-3xl">
              <SectionLabel className={dark ? 'text-brand-lime' : ''}>{chapter.title}</SectionLabel>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-4xl lg:text-5xl text-balance">
                {chapter.heading}
              </h2>
              <p className={`mt-4 text-base leading-relaxed md:text-lg text-pretty ${dark ? 'text-white/80' : 'text-brand-navy/75'}`}>{chapter.intro}</p>
            </div>
          </div>
        </Reveal>

        {/* Feature photo */}
        <Reveal delay={0.05}>
          <figure className="group mt-10 lg:mt-14">
            <button
              type="button"
              onClick={() => onOpen(feature)}
              aria-label={`Open photo: ${feature.title}`}
              className="relative block w-full overflow-hidden rounded-3xl bg-brand-cream-warm"
            >
              <img
                src={feature.image}
                alt={feature.alt}
                loading="lazy"
                decoding="async"
                className="img-zoom h-[60vh] max-h-[640px] min-h-[320px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white md:p-10">
                <p className="font-serif text-2xl font-semibold tracking-[-0.02em] md:text-4xl">{feature.title}</p>
                <p className="mt-2 max-w-xl text-sm text-white/85 md:text-base">{feature.caption}</p>
              </div>
            </button>
          </figure>
        </Reveal>

        {/* The rest, in their true shapes */}
        {rest.length > 0 && (
          <div className={`mt-8 gap-6 [&>*]:mb-8 ${rest.length <= 2 ? 'columns-1 sm:columns-2' : 'columns-1 sm:columns-2 lg:columns-3'}`}>
            {rest.map((photo) => (
              <Reveal key={photo.image} className="break-inside-avoid">
                <Photo photo={photo} onOpen={() => onOpen(photo)} />
              </Reveal>
            ))}
          </div>
        )}

        {next && (
          <div className="mt-4 flex justify-center">
            <a
              href={`#${next.id}`}
              className={`group inline-flex min-h-11 items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-colors ${
                dark ? 'border-white/30 text-white hover:border-brand-lime hover:text-brand-lime' : 'border-brand-navy/20 text-brand-navy hover:border-brand-emerald hover:text-brand-emerald'
              }`}
            >
              Next: {next.title}
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export function Summit2026Page() {
  usePageMeta(
    'Stop The Cycle Global Summit 2026',
    'Photo story of the Stop The Cycle Global Summit 2026, The Currencies of the Future: keynotes, the main stage, the masterclass and the people who made it. Friday, 2 October 2026, Port Harcourt.'
  );
  const [active, setActive] = useState(summit2026Chapters[0].id);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Highlight the chapter currently on screen.
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-chapter]'));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive((visible[0].target as HTMLElement).dataset.chapter!);
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Keep the active chip in view in the chapter bar on phones.
  useEffect(() => {
    navRef.current?.querySelector<HTMLElement>(`[data-chip="${active}"]`)?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [active]);

  const step = useCallback(
    (dir: number) => setLightbox((i) => (i === null ? i : (i + dir + summit2026Photos.length) % summit2026Photos.length)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox, step]);

  const open = (photo: StoryPhoto) => setLightbox(summit2026Photos.indexOf(photo));
  const current = lightbox === null ? null : summit2026Photos[lightbox];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <img src={heroPhoto.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-brand-navy/30" />
        <div className="relative mx-auto flex min-h-[78svh] max-w-7xl flex-col justify-end px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-20">
          <Reveal>
            <SectionLabel className="text-brand-lime">STCGS 2026 · The Photo Story</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-7xl lg:text-8xl text-balance">
              Stop The Cycle Global Summit 2026
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 font-serif text-2xl italic text-brand-lime md:text-3xl">The Currencies of the Future</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90 md:text-base">
              <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-brand-lime" />Friday, 2 October 2026</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-lime" />Suntaal Event Center, Port Harcourt</span>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={`#${summit2026Chapters[0].id}`}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-brand-lime px-7 py-3.5 text-sm font-bold text-brand-navy transition-colors hover:bg-white"
            >
              Start the story
              <ArrowDown className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Chapter bar */}
      <nav aria-label="Chapters" className="sticky top-16 z-30 border-b border-brand-navy/10 bg-white/95 backdrop-blur-md">
        <div ref={navRef} className="scrollbar-none mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:justify-center lg:px-8">
          {summit2026Chapters.map((c, i) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              data-chip={c.id}
              aria-current={active === c.id ? 'true' : undefined}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === c.id ? 'bg-brand-navy text-white' : 'text-brand-navy/75 hover:bg-brand-cream-warm hover:text-brand-navy'
              }`}
            >
              <span className={active === c.id ? 'text-brand-lime' : 'text-brand-emerald'}>{String(i + 1).padStart(2, '0')}</span> {c.title}
            </a>
          ))}
        </div>
      </nav>

      {summit2026Chapters.map((chapter, i) => (
        <Chapter key={chapter.id} chapter={chapter} index={i} next={summit2026Chapters[i + 1]} onOpen={open} />
      ))}

      {/* Closing */}
      <section className="bg-brand-lime py-16 text-brand-navy lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-serif text-4xl font-semibold leading-[1.0] tracking-[-0.04em] md:text-6xl text-balance">Be in the room next year.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-brand-navy/80">Join the movement, volunteer at the next summit, or partner with us to open more doors for young people.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/get-involved" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-navy-deep">
                Get Involved
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/gallery" className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/30 px-7 py-3.5 text-sm font-semibold text-brand-navy hover:border-brand-navy">
                More from the gallery
              </Link>
            </div>
            <p className="mt-10 text-sm text-brand-navy/75">Photos by Chase Media.</p>
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-navy/95 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button ref={closeRef} type="button" aria-label="Close photo" onClick={() => setLightbox(null)} className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
            <X className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute bottom-6 left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:bottom-auto">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button type="button" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute bottom-6 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:bottom-auto">
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="mx-4 max-w-5xl sm:mx-16" onClick={(e) => e.stopPropagation()}>
            <img src={current.image} alt={current.alt} className="mx-auto max-h-[70vh] rounded-2xl object-contain sm:max-h-[78vh]" />
            <div className="mt-4 text-center text-white">
              <p className="text-lg font-bold">{current.title}</p>
              <p className="text-sm text-white/80">{current.caption}</p>
              <p className="mt-1 text-xs text-white/70">{(lightbox ?? 0) + 1} / {summit2026Photos.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
