import { useState, useCallback, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { PageHero } from '@/components/PageHero';
import { usePageMeta } from '@/lib/usePageMeta';
import { galleryItems, galleryCategories, galleryYears, type GalleryItem } from '@/data/gallery';

export function GalleryPage() {
  usePageMeta('Gallery', 'Photos from Stop The Cycle summits, masterclasses, community gatherings and the people behind the movement.');
  const [category, setCategory] = useState<string>('All');
  const [year, setYear] = useState<string>('All');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = galleryItems.filter((item) => {
    const matchCat = category === 'All' || item.category === category;
    const matchYear = year === 'All' || item.year === year;
    return matchCat && matchYear;
  });

  const lightboxIndex = lightbox ? filtered.findIndex((i) => i.id === lightbox.id) : -1;

  const navigateLightbox = useCallback((dir: number) => {
    if (lightboxIndex < 0) return;
    const next = (lightboxIndex + dir + filtered.length) % filtered.length;
    setLightbox(filtered[next]);
  }, [lightboxIndex, filtered]);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isLightboxOpen = lightbox !== null;

  // Keyboard support and scroll lock while the lightbox is open.
  useEffect(() => {
    if (!isLightboxOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      else if (e.key === 'ArrowLeft') navigateLightbox(-1);
      else if (e.key === 'ArrowRight') navigateLightbox(1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isLightboxOpen, navigateLightbox]);

  return (
    <div>
      <PageHero
        label="Gallery"
        title="The moments that move us."
        subtitle="A movement is measured by the people who show up — the conversations that happen, the hands that are raised, the friendships that begin."
        image="/images/photos/summit-audience.webp"
        imagePosition="center 40%"
      />

      {/* Gallery */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <Reveal>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter by category">
                {galleryCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={category === cat}
                    onClick={() => setCategory(cat)}
                    className={`min-h-11 shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      category === cat
                        ? 'bg-brand-emerald text-white'
                        : 'border border-brand-navy/15 text-brand-navy/75 hover:border-brand-emerald/50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex gap-2" role="group" aria-label="Filter by year">
                {galleryYears.map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    aria-pressed={year === yr}
                    onClick={() => setYear(yr)}
                    className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      year === yr
                        ? 'bg-brand-navy text-white'
                        : 'border border-brand-navy/15 text-brand-navy/75 hover:border-brand-navy/30'
                    }`}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Masonry grid */}
          <StaggerGroup key={`${category}-${year}`} className="mt-10 columns-2 gap-3 sm:gap-4 lg:columns-3 [&>*]:mb-3 sm:[&>*]:mb-4">
            {filtered.map((item) => (
              <StaggerItem key={item.id}>
                <button
                  type="button"
                  onClick={() => setLightbox(item)}
                  aria-label={`Open photo: ${item.title}`}
                  className="group relative block w-full overflow-hidden rounded-2xl"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="img-zoom w-full bg-brand-cream-warm object-cover object-top"
                    style={{ aspectRatio: item.id.length % 3 === 0 ? '4/5' : item.id.length % 2 === 0 ? '1/1' : '4/3' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-lime">{item.category}</p>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-white/75">{item.year}</p>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-brand-navy/75">No images match these filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-navy/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close photo"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Previous photo"
            className="absolute bottom-6 left-4 z-10 flex sm:bottom-auto h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            className="absolute bottom-6 right-4 z-10 flex sm:bottom-auto h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="mx-4 max-w-4xl sm:mx-16" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.alt} className="mx-auto max-h-[70vh] sm:max-h-[75vh] w-full rounded-2xl object-contain" />
            <div className="mt-4 text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-lime">{lightbox.category}</p>
              <p className="text-lg font-bold text-white">{lightbox.title}</p>
              <p className="text-sm text-white/80">{lightbox.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
