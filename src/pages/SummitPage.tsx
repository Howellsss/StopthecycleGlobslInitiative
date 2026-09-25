import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Lightbulb, Users, Network, Briefcase, Calendar, MapPin } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { Button } from '@/components/Buttons';
import { SectionLabel, SectionHeader } from '@/components/SectionHeader';
import { currentSummit, isSummitUpcoming, summitEditions } from '@/data/summits';
import { galleryItems } from '@/data/gallery';
import { usePageMeta } from '@/lib/usePageMeta';

const whatToExpect = [
  { icon: Lightbulb, title: 'Ideas', description: 'Exposure to new ways of thinking and seeing the world.' },
  { icon: Sparkles, title: 'Learning', description: 'Practical skills and knowledge from experienced voices.' },
  { icon: Users, title: 'Connection', description: 'Young people gathering with shared purpose.' },
  { icon: Network, title: 'Opportunity', description: 'Access to people, platforms and possibilities.' },
  { icon: Briefcase, title: 'Economic Participation', description: 'Tools and frameworks for creating value.' },
  { icon: ArrowRight, title: 'A Wider View', description: 'Leave with something you did not walk in with.' },
];

const secondaryButton =
  'inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/5';
const limeButton =
  'inline-flex items-center justify-center gap-2 rounded-full bg-brand-lime px-7 py-3.5 text-sm font-bold text-brand-navy transition-colors duration-300 hover:bg-white';

export function SummitPage() {
  usePageMeta(
    'Global Summit 2026',
    `The Stop The Cycle Global Summit 2026 — ${currentSummit.theme}. ${currentSummit.date}, ${currentSummit.time}, ${currentSummit.venue}, Port Harcourt.`
  );
  const summitUpcoming = isSummitUpcoming();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-navy pb-16 pt-16 text-white lg:pb-24 lg:pt-24">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/photos/summit-audience-front-row.webp" alt="" className="h-full w-full object-cover object-top" />
        </div>
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <Reveal>
              <SectionLabel className="text-brand-lime">The Global Summit · 2026</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl text-balance">
                The Currencies <span className="font-normal italic">of the Future</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-white/80 text-pretty">
                Some rooms change the way you see the world. The Stop The Cycle Global Summit was created to be one of those rooms — where a young entrepreneur can sit beside an experienced professional, and a question can become a conversation, and a conversation an opportunity.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-8 flex flex-col gap-3 text-base text-white/90">
                <li className="flex items-start gap-3"><Calendar className="mt-0.5 h-5 w-5 shrink-0 text-brand-lime" />{currentSummit.date} · {currentSummit.time}</li>
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-lime" />{currentSummit.venue}, {currentSummit.address}</li>
              </ul>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {summitUpcoming ? (
                  <Link to="/events/register" className={limeButton}>
                    Register Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <Link to="/get-involved" className={limeButton}>
                    Hear about the next summit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
                <Link to="/get-involved" className={secondaryButton}>
                  Become a Partner
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="mx-auto max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/30 lg:max-w-none">
              <img src="/images/posters/summit-2026-speakers.webp" alt="Global Summit 2026 poster featuring Hon. Justice Mabel S. Bello, Amb. Engr. Uche Juan Augustine and Dr. Niyi Adesanya" className="w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2026 Campaign */}
      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <Reveal>
                <SectionLabel>2026 Campaign</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-4xl lg:text-5xl text-balance">
                  Strategic tools for the economy ahead.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg leading-relaxed text-brand-navy/75 text-pretty">{currentSummit.description}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-base leading-relaxed text-brand-navy/75 text-pretty">
                  Featuring keynote speeches, panel sessions, music, drama, refreshments, raffle draws, awards, gifts, networking, opportunities, scholarships and certifications.
                </p>
              </Reveal>
              {summitUpcoming && (
                <Reveal delay={0.2}>
                  <Button to="/events/register" variant="primary">
                    Register Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Reveal>
              )}
            </div>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/images/photos/summit-panel.webp"
                  alt="Panelists seated together on stage during a Stop The Cycle summit"
                  loading="lazy"
                  decoding="async"
                  className="h-[360px] w-full object-cover object-top bg-brand-cream-warm lg:h-[480px]"
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
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {whatToExpect.map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <div className="card-hover flex h-full flex-col gap-3 rounded-3xl border border-brand-navy/8 bg-brand-cream p-5 sm:gap-4 sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-emerald/10">
                    <item.icon className="h-5 w-5 text-brand-emerald" />
                  </div>
                  <h3 className="text-base font-bold text-brand-navy">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-navy/75">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Previous Editions */}
      <section className="bg-brand-cream-warm py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader label="Archive" title="From where we've been to where we're going." />
          </Reveal>
          <div className="mt-10 flex flex-col gap-6">
            {summitEditions.map((edition) => (
              <Reveal key={edition.id}>
                <div className="grid overflow-hidden rounded-3xl border border-brand-navy/8 bg-white md:grid-cols-2">
                  <img src={edition.image} alt={edition.alt} loading="lazy" decoding="async" className="h-64 w-full object-cover object-top md:h-full" />
                  <div className="flex flex-col justify-center p-6 md:p-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-emerald">{edition.year}</p>
                    <h3 className="mt-2 font-serif text-3xl font-semibold tracking-[-0.03em] text-brand-navy">{edition.theme}</h3>
                    {edition.tagline && <p className="mt-1 text-sm font-semibold text-brand-navy/75">{edition.tagline}</p>}
                    <p className="mt-4 text-base leading-relaxed text-brand-navy/75">{edition.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
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
          <StaggerGroup className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-4">
            {galleryItems.filter((g) => g.category === 'Summits' || g.category === 'Behind the Scenes').slice(0, 8).map((item) => (
              <StaggerItem key={item.id}>
                <Link to="/gallery" className="group relative block overflow-hidden rounded-2xl">
                  <img src={item.image} alt={item.alt} loading="lazy" decoding="async" className="img-zoom h-40 w-full object-cover object-top bg-brand-cream-warm md:h-56" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-xs font-semibold text-white">{item.title}</p>
                  </div>
                </Link>
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
            <p className="mt-6 text-lg text-white/80 text-pretty">
              {summitUpcoming
                ? `Join us on ${currentSummit.date} at ${currentSummit.venue}, Port Harcourt.`
                : 'Join us at the next Stop The Cycle Global Summit.'}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link to={summitUpcoming ? '/events/register' : '/get-involved'} className={limeButton}>
                {summitUpcoming ? 'Register Now' : 'Get Involved'}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/get-involved" className={secondaryButton}>
                Become a Partner
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
