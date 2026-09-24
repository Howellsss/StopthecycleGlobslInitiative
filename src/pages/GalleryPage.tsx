import { useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionHeader';
import { galleryItems, galleryCategories, galleryYears, type GalleryItem } from '@/data/gallery';

export function GalleryPage() {
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

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-cream pt-12 pb-12 lg:pt-16 lg:pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Gallery</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-5xl lg:text-6xl text-balance">
              The moments that move us.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-brand-navy/60 text-pretty">
              A movement is not only measured by what it says. It is measured by the people who show up. The conversations that happen. The hands that are raised. The ideas that are shared. The friendships that begin. These are some of those moments.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {galleryCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                      category === cat
                        ? 'bg-brand-emerald text-white'
                        : 'border border-brand-navy/15 text-brand-navy/60 hover:border-brand-emerald/50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                {galleryYears.map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setYear(yr)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                      year === yr
                        ? 'bg-brand-navy text-white'
                        : 'border border-brand-navy/15 text-brand-navy/60 hover:border-brand-navy/30'
                    }`}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Masonry grid */}
          <StaggerGroup key={`${category}-${year}`} className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {filtered.map((item) => (
              <StaggerItem key={item.id}>
                <button
                  onClick={() => setLightbox(item)}
                  className="group relative block w-full overflow-hidden rounded-2xl"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="img-zoom w-full bg-brand-cream-warm object-cover object-top"
                    style={{ aspectRatio: item.id.length % 3 === 0 ? '4/5' : item.id.length % 2 === 0 ? '1/1' : '4/3' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-lime">{item.category}</p>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-white/60">{item.year}</p>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-brand-navy/40">No images match these filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-navy/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <button
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="mx-16 max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.alt} className="max-h-[75vh] w-full rounded-2xl object-contain" />
            <div className="mt-4 text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-lime">{lightbox.category}</p>
              <p className="text-lg font-bold text-white">{lightbox.title}</p>
              <p className="text-sm text-white/50">{lightbox.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
