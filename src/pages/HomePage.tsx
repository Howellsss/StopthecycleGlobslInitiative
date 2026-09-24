import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Target, TrendingUp, Quote } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { Button, ArrowLink } from '@/components/Buttons';
import { SectionLabel, SectionHeader } from '@/components/SectionHeader';
import { programs } from '@/data/programs';
import { currentSummit, summitThemes } from '@/data/summits';
import { stories, impactMetrics, partnerCategories } from '@/data/stories';
import { galleryItems } from '@/data/gallery';
import { organization } from '@/data/organization';

const impactPillars = [
  { icon: Target, label: 'Skills', description: 'Digital skills, AI and future-ready capabilities.' },
  { icon: Users, label: 'Leadership', description: 'Leadership development, confidence and decision-making.' },
  { icon: Sparkles, label: 'Opportunity', description: 'Exposure, mentorship, partnerships and access.' },
  { icon: TrendingUp, label: 'Economic Empowerment', description: 'Entrepreneurship, employability and economic participation.' },
];

const getInvolvedOptions = [
  'Join a Program',
  'Attend a Summit',
  'Become a Volunteer',
  'Partner With Stop The Cycle',
  'Become a Mentor',
  'Support the Initiative',
];

const heroSlides = [
  {
    src: '/images/hero/IMG_9483.jpg',
    alt: 'Stop The Cycle speaker addressing the room in black and white',
    position: 'right top',
    mirror: true,
  },
  {
    src: '/images/hero/IMG_9491.jpg',
    alt: 'Stop The Cycle speaker addressing an audience in white',
    position: 'left top',
  },
  {
    src: '/images/hero/IMG_9486.PNG',
    alt: 'Stop The Cycle speaker presenting in blue',
    position: 'left 18%',
  },
  {
    src: '/images/hero/IMG_9489.jpg',
    alt: 'Stop The Cycle speaker sharing a message on stage',
    position: 'left 18%',
  },
  {
    src: '/images/hero/IMG_9482_2.jpg',
    alt: 'Stop The Cycle speaker presenting on stage in teal',
    position: 'center 15%',
  },
];

export function HomePage() {
  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div>
      {/* SECTION 1 — HERO */}
      <section data-nav-dark="true" className="relative min-h-[680px] overflow-hidden bg-brand-emerald text-white sm:min-h-[720px] lg:min-h-[calc(100vh-4.5rem)]">
        {heroSlides.map((slide, index) => (
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === activeHero ? 0.82 : 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            style={{ objectPosition: slide.position }}
            className={`absolute ${slide.fit === 'contain' ? 'left-1/2 top-0 bottom-0 w-auto max-w-none -translate-x-1/2 object-contain hero-suit-fade' : 'inset-0 h-full w-full object-cover'} ${slide.mirror ? 'hero-image-mirror' : ''}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-emerald via-brand-emerald/88 to-brand-emerald/38" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/45 via-transparent to-brand-emerald/20" />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-end px-4 py-16 sm:min-h-[720px] sm:px-6 lg:min-h-[calc(100vh-4.5rem)] lg:items-center lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-lime">
                <span className="h-px w-10 bg-brand-lime" />
                A youth development movement
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 max-w-3xl font-serif text-6xl font-semibold leading-[0.86] tracking-[-0.055em] text-white sm:text-7xl md:text-8xl lg:text-[8.5rem]">
                The cycles
                <span className="block text-brand-lime">stop here.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Every generation inherits something. Some inherit opportunity. Others inherit limitations. We believe your circumstances should not have the final word.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/programs" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-lime px-7 py-3.5 text-sm font-bold text-brand-navy transition-all duration-300 hover:bg-white hover:shadow-lg">
                  Explore Our Programs
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/join" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10">
                  Join the Movement
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <p className="font-serif text-2xl italic text-white">{organization.brandStatement}</p>
                <div className="flex items-center gap-1.5" aria-label={`Slide ${activeHero + 1} of ${heroSlides.length}`}>
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      aria-label={`Show hero image ${index + 1}`}
                      onClick={() => setActiveHero(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${index === activeHero ? 'w-8 bg-brand-lime' : 'w-1.5 bg-white/50 hover:bg-white'}`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHY STOP THE CYCLE */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Why Stop The Cycle?</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-4xl lg:text-5xl text-balance">
              What happens when a young person has potential but not opportunity?
            </h2>
          </Reveal>
          <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-brand-navy/60 text-pretty">
            <Reveal delay={0.1}>
              <p>What happens when ambition is there, but direction is missing? What happens when people live around limitations for so long that they begin to mistake those limitations for their identity?</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>We have seen what happens. And we have decided it cannot be the end of the story.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-brand-navy/80">Stop The Cycle was born from a conviction that young people do not need to be rescued from their future. They need to be equipped for it.</p>
            </Reveal>
          </div>

          {/* Pillars */}
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {impactPillars.map((pillar) => (
              <StaggerItem key={pillar.label}>
                <div className="card-hover flex flex-col gap-3 rounded-2xl border border-brand-navy/8 bg-brand-cream p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-emerald/10">
                    <pillar.icon className="h-5 w-5 text-brand-emerald" />
                  </div>
                  <h3 className="text-base font-bold text-brand-navy">{pillar.label}</h3>
                  <p className="text-sm leading-relaxed text-brand-navy/50">{pillar.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE DO */}
      <section className="bg-brand-cream-warm py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              label="What We Do"
              title="We are not waiting for the future. We are preparing for it."
            />
          </Reveal>
          <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-brand-navy/60 text-pretty">
            <Reveal delay={0.05}>
              <p>The world is changing quickly. Technology is changing the way we work. The economy is changing the opportunities available to us. And the skills that mattered yesterday may not be enough for tomorrow.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>But young people have never been short of potential. What is often missing is access — to knowledge, to mentors, to opportunity, to community and sometimes to the confidence that says: <span className="font-serif italic text-brand-emerald">"I can become more."</span></p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-brand-navy/80">That is the work of Stop The Cycle.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROGRAMS */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              label="Programs"
              title="Building the capacity to go further."
              subtitle="Pathways designed to help young people develop practical skills, build character, and step into opportunity."
            />
          </Reveal>
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {programs.map((program) => (
              <StaggerItem key={program.id}>
                <Link to="/programs" className="group block overflow-hidden rounded-3xl border border-brand-navy/8 bg-white card-hover">
                  <div className="relative h-64 overflow-hidden">
                    <img src={program.image} alt={program.alt} className="img-zoom h-full w-full object-cover object-top bg-brand-cream-warm" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-emerald backdrop-blur-sm">
                      {program.category}
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold leading-snug text-brand-navy">{program.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-navy/50">{program.description}</p>
                    <div className="mt-5">
                      <ArrowLink to="/programs">Learn more</ArrowLink>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* SECTION 5 — GLOBAL SUMMIT (DARK) */}
      <section data-nav-dark="true" className="relative overflow-hidden bg-brand-navy py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <Reveal>
                <SectionLabel className="text-brand-lime">The Global Summit</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-serif text-4xl font-semibold leading-[1.0] tracking-[-0.04em] text-white md:text-5xl lg:text-6xl text-balance">
                  Leading the Future
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg leading-relaxed text-white/60 text-pretty">
                  Exploring a new way of thinking and acting while anticipating change. Some rooms change the way you see the world — the Stop The Cycle Global Summit was created to be one of those rooms.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-lime">2026 Campaign</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">The Currencies of the Future</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    Strategic tools every youth, entrepreneur, and professional needs to lead with influence, become more, make profits, and maximize the future in this economy.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button to="/summits" variant="primary">View Summit</Button>
                  <Link
                    to="/get-involved"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/5"
                  >
                    Become a Partner
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/images/gallery/571154186_17849725536579622_7811831153233308518_n.jpeg"
                  alt="Stop The Cycle community gathered together"
                  className="h-[400px] w-full bg-white object-cover object-top lg:h-[520px]"
                />
              </div>
            </Reveal>
          </div>

          {/* Summit themes */}
          <StaggerGroup className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {summitThemes.map((theme) => (
              <StaggerItem key={theme.title}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="text-lg font-bold text-white">{theme.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/40">{theme.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* SECTION 6 — CURRENCIES OF THE FUTURE CAMPAIGN */}
      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/images/IMG_9505_2.JPG"
                  alt="A colorful Nigerian gathering with traditional attire and joyful expressions"
                  className="h-[420px] w-full object-cover object-top bg-brand-cream-warm lg:h-[500px]"
                />
              </div>
            </Reveal>
            <div className="flex flex-col gap-6">
              <Reveal delay={0.05}>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">2026 Campaign</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-serif text-4xl font-semibold leading-[1.0] tracking-[-0.04em] text-brand-navy md:text-5xl lg:text-6xl text-balance">
                  The Currencies <br />
                  <span className="font-serif italic font-normal">of the Future</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-lg leading-relaxed text-brand-navy/60 text-pretty">
                  Strategic tools every youth, entrepreneur, and professional needs to lead with influence, become more, make profits, and maximize the future in this economy.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="h-px w-16 bg-brand-gold" />
              </Reveal>
              <Reveal delay={0.25}>
                <Button to="/summits" variant="primary">
                  Discover the Summit
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — LIFE CLASS / COMMUNITY */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <Reveal>
                <SectionLabel>Community</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-4xl lg:text-5xl text-balance">
                  Growth needs a community.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg leading-relaxed text-brand-navy/60 text-pretty">
                  Every Thursday, people gather at the Life Class Community to talk about the things that matter. Purpose. Relationships. Character. Leadership. Failure. Faith. Growth. The questions we are often afraid to ask.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-base leading-relaxed text-brand-navy/50 text-pretty">
                  Because becoming a better person is not always about learning something new. Sometimes it is about unlearning what has been holding you back. We do not pretend growth is easy. We simply believe no one should have to navigate it alone.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <Button to="/join" variant="primary">
                  Join the Community
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/images/IMG_9504_2.JPG"
                  alt="Young adults participating in a community workshop together"
                  className="h-[420px] w-full object-cover object-top bg-brand-cream-warm lg:h-[500px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 8 — GALLERY PREVIEW */}
      <section className="bg-brand-cream-warm py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              label="Gallery"
              title="The moments that move us."
              subtitle="A movement is measured by the people who show up."
              center
            />
          </Reveal>
          <StaggerGroup className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
            {galleryItems.slice(0, 8).map((item) => (
              <StaggerItem key={item.id}>
                <Link to="/gallery" className="group relative block overflow-hidden rounded-2xl">
                  <img src={item.image} alt={item.alt} className="img-zoom h-44 w-full object-cover object-top bg-brand-cream-warm md:h-56" />
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
        </div>
      </section>

      {/* SECTION 9 — STORIES */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              label="Stories"
              title="Every cycle we break starts with a person."
              subtitle="Real people. Real experiences. Real growth."
            />
          </Reveal>
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {stories.map((story) => (
              <StaggerItem key={story.id}>
                <div className="card-hover overflow-hidden rounded-3xl border border-brand-navy/8 bg-brand-cream">
                  <div className="relative h-72 overflow-hidden">
                    <img src={story.image} alt={story.alt} className="img-zoom h-full w-full object-cover object-top bg-brand-cream-warm" />
                    {story.isPlaceholder && (
                      <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-navy/50 backdrop-blur-sm">
                        Editable
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-brand-emerald">
                      <Quote className="h-4 w-4" />
                      <span className="text-xs font-bold uppercase tracking-widest">{story.category}</span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-brand-navy/60">{story.excerpt}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <p className="mt-8 text-center text-xs text-brand-navy/30">
            Story placeholders shown above will be replaced with verified participant stories.
          </p>
        </div>
      </section>

      {/* SECTION 10 — IMPACT NUMBERS */}
      <section className="bg-brand-navy py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionLabel className="text-brand-lime">Impact</SectionLabel>
              <h2 className="mt-5 font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-4xl lg:text-5xl text-balance">
                The work in numbers.
              </h2>
            </div>
          </Reveal>
          <StaggerGroup className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {impactMetrics.map((metric) => (
              <StaggerItem key={metric.label}>
                <div className="flex flex-col items-center gap-2 text-center">
                  <span className="font-serif text-4xl font-semibold tracking-[-0.04em] text-brand-lime">
                    {metric.isPlaceholder ? '—' : metric.value}
                  </span>
                  <span className="text-xs leading-snug text-white/50">{metric.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <p className="mt-8 text-center text-xs text-white/30">
            Impact metrics shown as placeholders will be updated with verified data.
          </p>
        </div>
      </section>

      {/* SECTION 11 — PARTNERSHIPS */}
      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              label="Partnerships"
              title="Progress happens together."
              subtitle="Organizations, brands, institutions, entrepreneurs and professionals can partner with Stop The Cycle to create opportunities for young people."
              center
            />
          </Reveal>
          <StaggerGroup className="mt-12 flex flex-wrap justify-center gap-3">
            {partnerCategories.map((cat) => (
              <StaggerItem key={cat}>
                <span className="rounded-full border border-brand-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy/70">
                  {cat}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div className="mt-10 text-center">
            <Button to="/get-involved" variant="primary">
              Partner With Us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 12 — VOLUNTEER CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/images/IMG_9500_2.JPG"
                  alt="A group of diverse volunteers working together in a community center"
                  className="h-[380px] w-full object-cover object-top bg-brand-cream-warm lg:h-[440px]"
                />
              </div>
            </Reveal>
            <div className="flex flex-col gap-6">
              <Reveal delay={0.05}>
                <SectionLabel>Volunteer</SectionLabel>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-4xl lg:text-5xl text-balance">
                  Be part of something bigger.
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-lg leading-relaxed text-brand-navy/60 text-pretty">
                  There is a particular kind of joy that comes from knowing you helped make something possible for someone else. Every movement needs people who are willing to serve behind the scenes. If that sounds like you, there is a place here for you.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <Button to="/get-involved" variant="primary">
                  Become a Volunteer
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13 — GET INVOLVED */}
      <section className="bg-brand-cream-warm py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionLabel>Get Involved</SectionLabel>
              <h2 className="mt-5 font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-4xl lg:text-5xl text-balance">
                What part will you play?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-brand-navy/60 text-pretty">
                Every movement is built by people who decide to participate. Whatever brought you here, there is a way to contribute.
              </p>
            </div>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
            {getInvolvedOptions.map((option) => (
              <StaggerItem key={option}>
                <Link
                  to="/get-involved"
                  className="group flex items-center justify-between rounded-2xl border border-brand-navy/8 bg-white px-5 py-4 text-sm font-semibold text-brand-navy transition-all duration-300 hover:border-brand-emerald hover:text-brand-emerald"
                >
                  {option}
                  <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* SECTION 14 — FINAL CTA */}
      <section data-nav-dark="true" className="relative overflow-hidden bg-brand-navy py-24 text-white lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/hero/IMG_9494.JPG"
            alt=""
            className="h-full w-full object-cover object-top bg-brand-cream-warm"
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-serif text-4xl font-semibold leading-[1.0] tracking-[-0.04em] text-white md:text-5xl lg:text-6xl text-balance">
              The future will be built by someone.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-white/60 text-pretty">
              Why not people who are prepared? Why not people who are courageous enough to learn? Why not people who refuse to let the circumstances they inherited determine the future they leave behind?
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-lg leading-relaxed text-white/60 text-pretty">
              We believe the next generation is capable of more. Our responsibility is to help them see it. To help them build it. And, when the time comes, to make room for them to lead it.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <p className="font-serif text-3xl italic text-brand-lime">Stop The Cycle.</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/40">It starts with you.</p>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
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
