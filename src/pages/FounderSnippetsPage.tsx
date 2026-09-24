import { ArrowRight } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { Button } from '@/components/Buttons';
import { SectionLabel, SectionHeader } from '@/components/SectionHeader';

const snippets = [
  {
    title: 'Trust Is a Rare Currency',
    description: 'A short reflection from the founder on the value of trust.',
    embedUrl: 'https://player.vimeo.com/video/1225587972?badge=0&autopause=0&player_id=0&app_id=58479&muted=1&title=0&byline=0&portrait=0&vimeo_logo=0&dnt=1',
  },
  {
    title: 'Money is Never The Drive',
    description: 'A founder’s perspective on purpose, value and meaningful work.',
    embedUrl: 'https://player.vimeo.com/video/1225591160?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&vimeo_logo=0&dnt=1',
  },
  {
    title: 'You Are Your Greatest Resource',
    description: 'A reminder to recognize and develop what you already carry.',
    embedUrl: 'https://player.vimeo.com/video/1225591814?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&vimeo_logo=0&dnt=1',
  },
];

export function FounderSnippetsPage() {
  return (
    <div>
      <section className="bg-brand-cream pt-12 pb-12 lg:pt-16 lg:pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal><SectionLabel>Founder’s Snippets</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-5xl lg:text-6xl text-balance">
              Short thoughts for the road ahead.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-brand-navy/60 text-pretty">
              Watch brief reflections from Engr. Uche Juan Augustine on growth, leadership, capacity and the work of building a different future.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader label="Watch & Reflect" title="One idea can change your next step." center />
          </Reveal>
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {snippets.map((snippet) => (
              <StaggerItem key={snippet.title}>
                <article className="overflow-hidden rounded-3xl border border-brand-navy/8 bg-brand-cream card-hover">
                  <div className="relative aspect-[9/16] overflow-hidden bg-brand-navy">
                    <iframe
                      src={snippet.embedUrl}
                      title={snippet.title}
                      className="absolute inset-0 h-full w-full"
                      allow="fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-2xl font-semibold text-brand-navy">{snippet.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-brand-navy/60">{snippet.description}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal>
            <div className="mt-12 text-center">
              <Button to="/get-involved" variant="primary">
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
