import { ArrowRight, Target, Eye, Compass, Globe } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { Button } from '@/components/Buttons';
import { SectionLabel, SectionHeader } from '@/components/SectionHeader';

const beliefs = [
  { title: 'What We Believe', body: 'There is more in you than your circumstances have allowed you to see. Young people do not need to be rescued from their future. They need to be equipped for it.' },
  { title: 'Our Approach', body: 'We develop the mind. Build character. Teach useful skills. Create opportunities. And give people environments where they can grow.' },
];

const missionBlocks = [
  { icon: Target, title: 'Our Mission', body: 'To help young people discover what they carry, develop the capacity to use it, and find the courage to build something different.' },
  { icon: Eye, title: 'Our Vision', body: 'An independent generation of African professionals and builders who demand results, create value and transform the structures around them.' },
  { icon: Compass, title: 'Our Purpose', body: 'To step into the timeline of a young person\'s life and help break the loops of limitation — not with handouts, but with capacity, community and opportunity.' },
];

export function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-cream pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <SectionLabel>About</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-5xl lg:text-6xl text-balance">
              Why we stop the cycle.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Our Story</SectionLabel>
          </Reveal>
          <div className="mt-6 flex flex-col gap-5 text-lg leading-relaxed text-brand-navy/60 text-pretty">
            <Reveal delay={0.05}>
              <p>Everything starts with a question.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>What happens when a young person has potential but not opportunity? What happens when they have ambition but no direction? What happens when they are surrounded by limitations long enough that they begin to mistake those limitations for their identity?</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>We have seen what happens. And we have decided that it cannot be the end of the story.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="bg-brand-cream-warm py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {beliefs.map((belief) => (
              <StaggerItem key={belief.title}>
                <div className="flex flex-col gap-4">
                  <h3 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-brand-navy">{belief.title}</h3>
                  <p className="text-lg leading-relaxed text-brand-navy/60 text-pretty">{belief.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Mission / Vision / Purpose */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader label="What Drives Us" title="Mission. Vision. Purpose." center />
          </Reveal>
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {missionBlocks.map((block) => (
              <StaggerItem key={block.title}>
                <div className="card-hover flex h-full flex-col gap-5 rounded-3xl border border-brand-navy/8 bg-brand-cream p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-emerald/10">
                    <block.icon className="h-6 w-6 text-brand-emerald" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy">{block.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-navy/50">{block.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-brand-cream-warm py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Portrait */}
            <Reveal className="lg:col-span-2">
              <div className="relative">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src="/images/hero/image copy 5.png"
                    alt="Portrait of Engr. Uche Juan Augustine"
                    className="h-[460px] w-full bg-brand-cream-warm object-cover object-top lg:h-[540px]"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-2xl bg-brand-emerald px-6 py-4 text-white shadow-lg">
                  <p className="text-sm font-bold">Founder & Convener</p>
                </div>
              </div>
            </Reveal>

            {/* Bio */}
            <div className="flex flex-col gap-6 lg:col-span-3">
              <Reveal delay={0.05}>
                <SectionLabel>Leadership</SectionLabel>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-4xl lg:text-5xl text-balance">
                  Engr. Uche Juan Augustine
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-emerald">
                  Founder · Convener · Lead Pastor
                </p>
              </Reveal>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-brand-navy/60 text-pretty">
                <Reveal delay={0.2}>
                  <p>
                    For Uche Juan Augustine, this work is not simply an organization. It is a response to what he has seen, experienced and come to believe about the potential of young people.
                  </p>
                </Reveal>
                <Reveal delay={0.25}>
                  <p>
                    If we want a different future, we have to help people become different before they get there. That means developing the mind. Building character. Learning useful skills. Creating opportunities. And giving people environments where they can grow.
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <p className="text-brand-navy/80">
                    The work is personal. It comes from a conviction that young people are capable of more than their circumstances have shown them — and that the responsibility to help them see it belongs to all of us.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.35}>
                <Button to="/get-involved" variant="ghost">
                  Join the Movement
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* The Bigger Mission */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionLabel>The Bigger Mission</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-4xl lg:text-5xl text-balance">
              A better future doesn't begin with a country. <span className="font-serif italic font-normal text-brand-emerald">It begins with people.</span>
            </h2>
          </Reveal>
          <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-brand-navy/60 text-pretty">
            <Reveal delay={0.1}>
              <p>People who think differently. People who have the courage to build. People who can create value. People who can lead. People who understand that their lives are connected to something bigger than themselves.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Global Reach / UN */}
      <section className="bg-brand-navy py-20 text-white lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-brand-lime" />
              <SectionLabel className="text-brand-lime">Global Reach</SectionLabel>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-4xl lg:text-5xl text-balance">
              The conversation is bigger than one city.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-white/60 text-pretty">
              The organization's message about youth development, opportunity and economic empowerment has also been carried into wider global conversations — including platforms that extend far beyond Port Harcourt.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-white/40 text-pretty">
              Specific global platforms and engagements will be documented here as verified information becomes available.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
