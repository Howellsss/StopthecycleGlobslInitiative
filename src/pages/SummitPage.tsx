import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Lightbulb, Users, Network, Briefcase } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { Button } from '@/components/Buttons';
import { SectionLabel, SectionHeader } from '@/components/SectionHeader';
import { currentSummit, summitEditions, summitThemes } from '@/data/summits';
import { galleryItems } from '@/data/gallery';

const whatToExpect = [
  { icon: Lightbulb, title: 'Ideas', description: 'Exposure to new ways of thinking and seeing the world.' },
  { icon: Sparkles, title: 'Learning', description: 'Practical skills and knowledge from experienced voices.' },
  { icon: Users, title: 'Connection', description: 'Thousands of young people gathering with shared purpose.' },
  { icon: Network, title: 'Opportunity', description: 'Access to people, platforms and possibilities.' },
  { icon: Briefcase, title: 'Economic Participation', description: 'Tools and frameworks for creating value.' },
  { icon: ArrowRight, title: 'A Wider View', description: 'Leave with something you did not walk in with.' },
];

export function SummitPage() {
  return (
    <div>
      {/* Hero */}
      <section data-nav-dark="true" className="relative overflow-hidden bg-brand-navy pt-20 pb-20 text-white lg:pt-24 lg:pb-28">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/gallery/571223660_17849724345579622_8524791354055729271_n.jpeg" alt="Stop The Cycle community event" className="h-full w-full object-cover object-top" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <SectionLabel className="text-brand-lime">The Global Summit</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl text-balance">
                Leading the Future
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-white/60 text-pretty">
                Some rooms change the way you see the world. The Stop The Cycle Global Summit was created to be one of those rooms. A room where a young entrepreneur can sit beside an experienced professional. Where an idea can meet someone who knows how to build it. Where a question can lead to a conversation. And where a conversation can become an opportunity.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-lg leading-relaxed text-white/60 text-pretty">
                And where thousands of young people can leave with something they did not walk in with: a wider view of what is possible.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/get-involved" variant="primary">Get Involved</Button>
                <Link to="/get-involved" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/5">
                  Become a Partner
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2026 Campaign */}
      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">2026 Campaign</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-serif text-4xl font-semibold leading-[1.0] tracking-[-0.04em] text-brand-navy md:text-5xl lg:text-6xl text-balance">
                  The Currencies <br />
                  <span className="font-serif italic font-normal">of the Future</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg leading-relaxed text-brand-navy/60 text-pretty">
                  {currentSummit.description}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="h-px w-16 bg-brand-gold" />
              </Reveal>
              <Reveal delay={0.2}>
                <Button to="/get-involved" variant="primary">
                  Register Your Interest
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/images/IMG_9501_2.JPG"
                  alt="Young people gathered for a Stop The Cycle summit"
                  className="h-[420px] w-full object-cover object-top bg-brand-cream-warm lg:h-[500px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What To Expect */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader label="What To Expect" title="A platform for ideas, learning and opportunity." center />
          </Reveal>
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whatToExpect.map((item) => (
              <StaggerItem key={item.title}>
                <div className="card-hover flex h-full flex-col gap-4 rounded-3xl border border-brand-navy/8 bg-brand-cream p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-emerald/10">
                    <item.icon className="h-5 w-5 text-brand-emerald" />
                  </div>
                  <h3 className="text-base font-bold text-brand-navy">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-navy/50">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Summit Themes */}
      <section className="bg-brand-cream-warm py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader label="The Experience" title="What the summit makes possible." />
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {summitThemes.map((theme) => (
              <StaggerItem key={theme.title}>
                <div className="rounded-2xl border border-brand-navy/8 bg-white p-6">
                  <h4 className="text-lg font-bold text-brand-navy">{theme.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-brand-navy/50">{theme.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Previous Editions */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              label="Archive"
              title="From where we've been to where we're going."
            />
          </Reveal>
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {summitEditions.map((edition) => (
              <StaggerItem key={edition.id}>
                <div className="group overflow-hidden rounded-3xl border border-brand-navy/8 bg-brand-cream card-hover">
                  <div className="relative h-72 overflow-hidden">
                    <img src={edition.image} alt={edition.alt} className="img-zoom h-full w-full object-cover object-top bg-brand-cream-warm" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-lime">{edition.year}</p>
                      <h3 className="mt-1 font-serif text-2xl font-semibold text-white">{edition.theme}</h3>
                      {edition.tagline && (
                        <p className="text-sm text-white/70">{edition.tagline}</p>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-brand-navy/50">{edition.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Summit Highlights / Gallery Preview */}
      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              label="Highlights"
              title="The moments that stay with you."
              subtitle="Audience. Speakers. Stage moments. Networking. The visual memory of the movement."
            />
          </Reveal>
          <StaggerGroup className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
            {galleryItems.filter((g) => g.category === 'Summits' || g.category === 'Behind the Scenes').slice(0, 8).map((item) => (
              <StaggerItem key={item.id}>
                <div className="group relative overflow-hidden rounded-2xl">
                  <img src={item.image} alt={item.alt} className="img-zoom h-48 w-full object-cover object-top bg-brand-cream-warm md:h-56" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-xs font-semibold text-white">{item.title}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div className="mt-10 text-center">
            <Button to="/gallery" variant="ghost">
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-20 text-white lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-4xl lg:text-5xl text-balance">
              A room where something changes.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-white/60 text-pretty">
              Join us at the next Stop The Cycle Global Summit.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button to="/get-involved" variant="primary" className="px-8 py-4 text-base">
                Get Involved
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Link to="/get-involved" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/5">
                Become a Partner
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
