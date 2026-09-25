import { useEffect, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Target, TrendingUp, Quote, Calendar, MapPin, Pause, Play } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { Button } from '@/components/Buttons';
import { SectionLabel, SectionHeader } from '@/components/SectionHeader';
import { programs } from '@/data/programs';
import { currentSummit, isSummitUpcoming, summitThemes } from '@/data/summits';
import { stories, impactMetrics } from '@/data/stories';
import { galleryItems } from '@/data/gallery';
import { organization } from '@/data/organization';
import { usePageMeta } from '@/lib/usePageMeta';

const impactPillars = [
  { icon: Target, label: 'Skills', description: 'Digital skills, AI and future-ready capabilities.' },
  { icon: Users, label: 'Leadership', description: 'Leadership development, confidence and decision-making.' },
  { icon: Sparkles, label: 'Opportunity', description: 'Exposure, mentorship, partnerships and access.' },
  { icon: TrendingUp, label: 'Economic Empowerment', description: 'Entrepreneurship, employability and economic participation.' },
];

const involvementPaths = [
  {
    title: 'Join a Program',
    description: 'Build digital skills, leadership capacity and a community that grows with you.',
    to: '/programs',
    image: '/images/photos/media-desk.webp',
    alt: 'Participants working at a digital media desk',
  },
  {
    title: 'Volunteer',
    description: 'Serve behind the scenes at summits, masterclasses and community gatherings.',
    to: '/get-involved',
    image: '/images/photos/team-campaign-signs.webp',
    alt: 'Stop The Cycle volunteers holding campaign signs',
  },
  {
    title: 'Partner With Us',
    description: 'Bring your organization, expertise or resources to create opportunities for young people.',
    to: '/get-involved',
    image: '/images/photos/summit-panel.webp',
    alt: 'Panelists seated together on stage during the summit',
  },
];

// `mobile` and `desktop` are CSS object-positions that keep the speaker in frame at each size.
const heroSlides = [
  { src: '/images/hero/convener-bw.webp', alt: 'The convener addressing the room, in black and white', desktop: 'right top', mobile: '0% 20%', mirror: true },
  { src: '/images/hero/convener-white.webp', alt: 'The convener addressing an audience, dressed in white', desktop: 'left top', mobile: '30% 20%', mirror: false },
  { src: '/images/hero/convener-blue.webp', alt: 'The convener presenting on stage in blue', desktop: 'left 18%', mobile: '70% 15%', mirror: false },
  { src: '/images/hero/convener-stage.webp', alt: 'The convener sharing a message on stage', desktop: 'left 18%', mobile: '55% 20%', mirror: false },
  { src: '/images/hero/convener-teal.webp', alt: 'The convener presenting on stage in teal', desktop: 'center 15%', mobile: '50% 30%', mirror: false },
];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export function HomePage() {
  usePageMeta();
  const summitUpcoming = isSummitUpcoming();
  const [activeHero, setActiveHero] = useState(0);
  const [paused, setPaused] = useState(prefersReducedMotion);
  // Only download a slide shortly before it is shown.
  const [loadedSlides, setLoadedSlides] = useState(2);

  useEffect(() => {
    if (paused) return;
    const interval = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroSlides.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [paused]);

  useEffect(() => {
    setLoadedSlides((count) => Math.max(count, Math.min(heroSlides.length, activeHero + 2)));
  }, [activeHero]);

  const verifiedStories = stories.filter((story) => !story.isPlaceholder);
  const metricsReady = impactMetrics.length > 0 && impactMetrics.every((metric) => !metric.isPlaceholder);

  return (
    <div>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden bg-brand-emerald text-white">
        {heroSlides.slice(0, loadedSlides).map((slide, index) => (
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={index === activeHero ? slide.alt : ''}
            initial={{ opacity: index === 0 ? 0.82 : 0 }}
            animate={{ opacity: index === activeHero ? 0.82 : 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            style={{ '--pos-mobile': slide.mobile, '--pos-desktop': slide.desktop } as CSSProperties}
            className={`absolute inset-x-0 top-0 h-[62%] w-full object-cover [object-position:var(--pos-mobile)] lg:inset-0 lg:h-full lg:[object-position:var(--pos-desktop)] ${slide.mirror ? 'hero-image-mirror' : ''}`}
          />
        ))}
        {/* Phones: photo shows at the top, text sits on a solid base. Desktop: text on the left. */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald from-40% via-brand-emerald/70 via-55% to-brand-emerald/5 lg:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-brand-emerald via-brand-emerald/88 to-brand-emerald/38 lg:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-brand-navy/45 via-transparent to-brand-emerald/20 lg:block" />

        <div className="relative mx-auto flex min-h-[max(640px,calc(100svh-4rem))] max-w-7xl items-end px-4 pb-12 pt-56 sm:px-6 lg:min-h-[calc(100vh-4rem)] lg:items-center lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-lime">
                <span className="h-px w-10 bg-brand-lime" />
                A youth development movement
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 max-w-3xl font-serif text-6xl font-semibold leading-[0.86] tracking-[-0.055em] text-white sm:text-7xl md:text-8xl lg:mt-6 lg:text-[8.5rem]">
                The cycles
                <span className="block text-brand-lime">stop here.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg lg:mt-8">
                Every generation inherits something. Some inherit opportunity. Others inherit limitations. We believe your circumstances should not have the final word.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-8">
                {summitUpcoming ? (
                  <>
                    <Link to="/events/register" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-lime px-7 py-3.5 text-sm font-bold text-brand-navy transition-all duration-300 hover:bg-white hover:shadow-lg">
                      Register for the Summit
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link to="/programs" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10">
                      Explore Our Programs
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/programs" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-lime px-7 py-3.5 text-sm font-bold text-brand-navy transition-all duration-300 hover:bg-white hover:shadow-lg">
                      Explore Our Programs
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link to="/join" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10">
                      Join the Movement
                    </Link>
                  </>
                )}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 lg:mt-10">
                <p className="font-serif text-2xl italic text-white">{organization.brandStatement}</p>
                <div className="flex items-center" role="group" aria-label="Hero slideshow">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      aria-label={`Show hero image ${index + 1} of ${heroSlides.length}`}
                      aria-pressed={index === activeHero}
                      onClick={() => setActiveHero(index)}
                      className="group flex h-8 items-center px-1"
                    >
                      <span className={`block h-1.5 rounded-full transition-all duration-300 ${index === activeHero ? 'w-8 bg-brand-lime' : 'w-1.5 bg-white/60 group-hover:bg-white'}`} />
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setPaused((p) => !p)}
                    aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
                    className="ml-1 flex h-8 w-8 items-center justify-center rounded-full text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SUMMIT BAND — only until summit day ends */}
      {summitUpcoming && (
        <section aria-label="Global Summit 2026" className="bg-brand-navy text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-lime">Global Summit 2026 · {currentSummit.theme}</p>
              <p className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-white/90 sm:text-base">
                <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-brand-lime" />{currentSummit.date} · {currentSummit.time}</span>
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-lime" />{currentSummit.venue}, Port Harcourt</span>
              </p>
            </div>
            <Link to="/events/register" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-lime px-6 py-3 text-sm font-bold text-brand-navy transition-colors hover:bg-white">
              Register now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      )}

      {/* SECTION 2 — WHY WE EXIST */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Why Stop The Cycle?</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 max-w-3xl font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-4xl lg:text-5xl text-balance">
              What happens when a young person has potential but not opportunity?
            </h2>
          </Reveal>
          <div className="mt-8 flex max-w-3xl flex-col gap-5 text-lg leading-relaxed text-brand-navy/75 text-pretty">
            <Reveal delay={0.1}>
              <p>Young people have never been short of potential. What is often missing is access — to knowledge, to mentors, to opportunity, to community and sometimes to the confidence that says: <span className="font-serif italic text-brand-emerald">"I can become more."</span></p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-brand-navy">Stop The Cycle was born from a conviction that young people do not need to be rescued from their future. They need to be equipped for it.</p>
            </Reveal>
          </div>

          <StaggerGroup className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {impactPillars.map((pillar) => (
              <StaggerItem key={pillar.label} className="h-full">
                <div className="card-hover flex h-full flex-col gap-3 rounded-2xl border border-brand-navy/10 bg-brand-cream p-5 sm:p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-emerald/10">
                    <pillar.icon className="h-5 w-5 text-brand-emerald" />
                  </div>
                  <h3 className="text-base font-bold text-brand-navy">{pillar.label}</h3>
                  <p className="text-sm leading-relaxed text-brand-navy/75">{pillar.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* SECTION 3 — PROGRAMS (swipeable on phones) */}
      <section className="bg-brand-cream-warm py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              label="Programs"
              title="Building the capacity to go further."
              subtitle="Pathways designed to help young people develop practical skills, build character, and step into opportunity."
            />
          </Reveal>
          <StaggerGroup className="scrollbar-none -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:mt-14 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
            {programs.map((program) => (
              <StaggerItem key={program.id} className="w-[85%] shrink-0 snap-start sm:w-[60%] md:w-auto">
                {program.highlight ? (
                  <Link to={`/programs#${program.id}`} className="group flex h-full flex-col justify-between gap-8 overflow-hidden rounded-3xl bg-brand-lime p-7 card-hover md:p-9">
                    <div>
                      <span className="inline-block rounded-full bg-brand-navy px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-lime">
                        {program.category}
                      </span>
                      <h3 className="mt-6 font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-brand-navy md:text-4xl text-balance">{program.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-brand-navy/80 md:text-base">{program.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-brand-navy/15 pt-5">
                      {program.schedule && (
                        <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy">
                          <Calendar className="h-4 w-4" />
                          {program.schedule}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ) : (
                <Link to={`/programs#${program.id}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-navy/10 bg-white card-hover">
                  <div className="relative h-52 overflow-hidden md:h-64">
                    <img src={program.image} alt={program.alt} loading="lazy" decoding="async" className="img-zoom h-full w-full object-cover object-top bg-brand-cream-warm" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-emerald backdrop-blur-sm">
                      {program.category}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="text-xl font-bold leading-snug text-brand-navy">{program.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-navy/75">{program.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-emerald">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
                )}
              </StaggerItem>
            ))}
          </StaggerGroup>
          <p className="mt-4 text-center text-xs text-brand-navy/70 md:hidden" aria-hidden="true">Swipe to see all four programs →</p>
        </div>
      </section>

      {/* SECTION 4 — GLOBAL SUMMIT */}
      <section className="relative overflow-hidden bg-brand-navy py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <Reveal>
                <SectionLabel className="text-brand-lime">The Global Summit · 2026</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-serif text-4xl font-semibold leading-[1.0] tracking-[-0.04em] text-white md:text-5xl lg:text-6xl text-balance">
                  The Currencies <span className="font-normal italic">of the Future</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg leading-relaxed text-white/80 text-pretty">
                  Some rooms change the way you see the world — the Stop The Cycle Global Summit was created to be one of those rooms. {currentSummit.description}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <ul className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 text-sm text-white/90 sm:text-base">
                  <li className="flex items-start gap-3"><Calendar className="mt-0.5 h-5 w-5 shrink-0 text-brand-lime" />{currentSummit.date} · {currentSummit.time}</li>
                  <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-lime" />{currentSummit.venue}, {currentSummit.address}</li>
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-col gap-3 sm:flex-row">
                  {summitUpcoming && (
                    <Link to="/events/register" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-lime px-7 py-3.5 text-sm font-bold text-brand-navy transition-colors duration-300 hover:bg-white">
                      Register Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                  <Link
                    to="/summits"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/5"
                  >
                    About the Summit
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="mx-auto max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/30 lg:max-w-none">
                <img src={currentSummit.image} alt={currentSummit.alt} loading="lazy" decoding="async" className="w-full" />
              </div>
            </Reveal>
          </div>

          <StaggerGroup className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-16 lg:grid-cols-4">
            {summitThemes.map((theme) => (
              <StaggerItem key={theme.title} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-bold text-white">{theme.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{theme.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* SECTION 5 — PROOF: GALLERY (+ stories and impact once verified) */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              label="Gallery"
              title="The moments that move us."
              subtitle="A movement is measured by the people who show up."
              center
            />
          </Reveal>
          <StaggerGroup className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-4">
            {galleryItems.slice(0, 8).map((item) => (
              <StaggerItem key={item.id}>
                <Link to="/gallery" className="group relative block overflow-hidden rounded-2xl">
                  <img src={item.image} alt={item.alt} loading="lazy" decoding="async" className="img-zoom h-40 w-full object-cover object-top bg-brand-cream-warm sm:h-44 md:h-56" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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

          {verifiedStories.length > 0 && (
            <div className="mt-20">
              <Reveal>
                <SectionHeader label="Stories" title="Every cycle we break starts with a person." />
              </Reveal>
              <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {verifiedStories.map((story) => (
                  <StaggerItem key={story.id} className="h-full">
                    <div className="h-full overflow-hidden rounded-3xl border border-brand-navy/10 bg-brand-cream">
                      <img src={story.image} alt={story.alt} loading="lazy" decoding="async" className="h-64 w-full object-cover object-top" />
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-brand-emerald">
                          <Quote className="h-4 w-4" />
                          <span className="text-xs font-bold uppercase tracking-widest">{story.name} · {story.category}</span>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-brand-navy/75">{story.excerpt}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          )}

          {metricsReady && (
            <div className="mt-20 rounded-3xl bg-brand-navy px-6 py-12 text-white">
              <h2 className="text-center font-serif text-3xl font-semibold tracking-[-0.04em]">The work in numbers.</h2>
              <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
                {impactMetrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col items-center gap-2 text-center">
                    <span className="font-serif text-4xl font-semibold tracking-[-0.04em] text-brand-lime">{metric.value}</span>
                    <span className="text-xs leading-snug text-white/75">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 6 — GET INVOLVED */}
      <section className="bg-brand-cream-warm py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              label="Get Involved"
              title="What part will you play?"
              subtitle="Every movement is built by people who decide to participate. Whatever brought you here, there is a way to contribute."
              center
            />
          </Reveal>
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
            {involvementPaths.map((path) => (
              <StaggerItem key={path.title} className="h-full">
                <Link to={path.to} className="group flex h-full items-stretch overflow-hidden rounded-3xl border border-brand-navy/10 bg-white card-hover md:flex-col">
                  <div className="relative w-28 shrink-0 overflow-hidden sm:w-40 md:h-48 md:w-full">
                    <img src={path.image} alt={path.alt} loading="lazy" decoding="async" className="img-zoom h-full w-full object-cover object-top" />
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <h3 className="text-lg font-bold text-brand-navy">{path.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-navy/75">{path.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-emerald">
                      Start here
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div className="mt-8 text-center">
            <Link to="/join" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-emerald hover:text-brand-emerald-light">
              See every way to take part
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FINAL CTA */}
      <section className="relative overflow-hidden bg-brand-navy py-20 text-white lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/photos/question-from-room.webp" alt="" loading="lazy" decoding="async" className="h-full w-full object-cover object-top" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-serif text-4xl font-semibold leading-[1.0] tracking-[-0.04em] text-white md:text-5xl lg:text-6xl text-balance">
              The future will be built by someone.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-white/80 text-pretty">
              Why not people who are prepared? Why not people who are courageous enough to learn? Why not people who refuse to let the circumstances they inherited determine the future they leave behind?
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8">
              <p className="font-serif text-3xl italic text-brand-lime">Stop The Cycle.</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">It starts with you.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <Button to="/get-involved" variant="primary" className="px-8 py-4 text-base">
                Get Involved
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
