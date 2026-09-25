import { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { Button } from '@/components/Buttons';
import { SectionHeader } from '@/components/SectionHeader';
import { PageHero } from '@/components/PageHero';
import { usePageMeta } from '@/lib/usePageMeta';

interface Snippet {
  videoId: string;
  title: string;
  description: string;
  /** Shown until the video's own thumbnail loads (or if it can't). */
  fallbackCover: string;
}

const snippets: Snippet[] = [
  {
    videoId: '1225587972',
    title: 'Trust Is a Rare Currency',
    description: 'A short reflection from the founder on the value of trust.',
    fallbackCover: '/images/hero/convener-stage.webp',
  },
  {
    videoId: '1225591160',
    title: 'Money is Never The Drive',
    description: 'A founder’s perspective on purpose, value and meaningful work.',
    fallbackCover: '/images/photos/convener-speaking.webp',
  },
  {
    videoId: '1225591814',
    title: 'You Are Your Greatest Resource',
    description: 'A reminder to recognize and develop what you already carry.',
    fallbackCover: '/images/hero/convener-white.webp',
  },
];

// Loaded only after a click, so it starts straight away with sound and without Vimeo's title, byline or logo overlays.
const playerUrl = (videoId: string) =>
  `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=0&playsinline=1&title=0&byline=0&portrait=0&badge=0&vimeo_logo=0&dnt=1&color=D4DFA0`;

/** Fetches the video's own thumbnail; the card shows a site photo until (or unless) it arrives. */
function useVideoThumbnail(videoId: string) {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(`https://vimeo.com/${videoId}`)}&width=720`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { thumbnail_url?: string } | null) => {
        if (!cancelled && data?.thumbnail_url) setThumbnail(data.thumbnail_url);
      })
      .catch(() => {
        // Keep the fallback cover.
      });
    return () => {
      cancelled = true;
    };
  }, [videoId]);

  return thumbnail;
}

function SnippetCard({ snippet, playing, onPlay }: { snippet: Snippet; playing: boolean; onPlay: () => void }) {
  const thumbnail = useVideoThumbnail(snippet.videoId);

  return (
    <article className="h-full overflow-hidden rounded-3xl border border-brand-navy/8 bg-brand-cream card-hover">
      <div className="relative aspect-[9/16] overflow-hidden bg-brand-navy">
        {playing ? (
          <iframe
            src={playerUrl(snippet.videoId)}
            title={snippet.title}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={onPlay}
            aria-label={`Play video: ${snippet.title}`}
            className="group absolute inset-0 h-full w-full text-left"
          >
            <img
              src={thumbnail ?? snippet.fallbackCover}
              alt=""
              loading="lazy"
              decoding="async"
              className="img-zoom h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-brand-navy/25 transition-colors duration-300 group-hover:bg-brand-navy/10" />
            <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-lime text-brand-navy shadow-xl shadow-black/30 transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-8 w-8 fill-current" />
            </span>
          </button>
        )}
      </div>
      <div className="p-6">
        <h2 className="font-serif text-2xl font-semibold text-brand-navy">{snippet.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-brand-navy/75">{snippet.description}</p>
      </div>
    </article>
  );
}

export function FounderSnippetsPage() {
  usePageMeta("Founder's Snippets", 'Short video reflections from Engr. Uche Juan Augustine on growth, leadership, capacity and building a different future.');
  // Only one video plays at a time: starting another returns the previous card to its cover.
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <div>
      <PageHero
        label="Founder's Snippets"
        title="Short thoughts for the road ahead."
        subtitle="Watch brief reflections from Engr. Uche Juan Augustine on growth, leadership, capacity and the work of building a different future."
        image="/images/hero/convener-stage.webp"
        imagePosition="center 20%"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader label="Watch & Reflect" title="One idea can change your next step." center />
          </Reveal>
          <StaggerGroup className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-6 md:max-w-none md:grid-cols-3">
            {snippets.map((snippet) => (
              <StaggerItem key={snippet.videoId} className="h-full">
                <SnippetCard
                  snippet={snippet}
                  playing={playingId === snippet.videoId}
                  onPlay={() => setPlayingId(snippet.videoId)}
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal>
            <div className="mt-12 text-center">
              <Button to="/join" variant="primary">
                Join the Movement
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
