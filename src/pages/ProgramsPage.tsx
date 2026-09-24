import { ArrowRight, Cpu, Heart, Compass, TrendingUp, GraduationCap } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { Button, ArrowLink } from '@/components/Buttons';
import { SectionLabel, SectionHeader } from '@/components/SectionHeader';
import { programs } from '@/data/programs';

const programAreas = [
  {
    icon: Cpu,
    title: 'Digital Upskilling',
    description: 'Technology is changing the way opportunity works. We help young people develop practical digital skills that can open new doors in work, entrepreneurship and the global economy.',
  },
  {
    icon: Heart,
    title: 'Life Class Community',
    description: 'A space for honest conversations, personal growth, mentorship and the difficult work of becoming who you were created to be.',
  },
  {
    icon: Compass,
    title: 'Leadership Development',
    description: 'Leadership is not simply a title. It is the capacity to take responsibility, make decisions, influence others and create change.',
  },
  {
    icon: TrendingUp,
    title: 'Economic Empowerment',
    description: 'Potential becomes powerful when it can create value, generate income and contribute meaningfully to society.',
  },
  {
    icon: GraduationCap,
    title: 'Masterclasses',
    description: 'Bring young people into the room with people who have something valuable to teach.',
  },
];

export function ProgramsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-cream pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Programs</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-5xl lg:text-6xl text-balance">
              Building the capacity to go further.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-brand-navy/60 text-pretty">
              Pathways designed to help young people develop practical skills, build character, and step into opportunity. Not because technology is the destination — but because capacity creates options.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Digital Upskilling Feature */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/images/IMG_9500_2.JPG"
                  alt="The Stop The Cycle team preparing digital media equipment"
                  className="h-[420px] w-full object-cover object-top bg-brand-cream-warm lg:h-[500px]"
                />
              </div>
            </Reveal>
            <div className="flex flex-col gap-6">
              <Reveal delay={0.05}>
                <SectionLabel>Digital Upskilling</SectionLabel>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-4xl lg:text-5xl text-balance">
                  The world is changing. Your skills should too.
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-base leading-relaxed text-brand-navy/60 text-pretty">
                  A university degree can tell the world what you studied. It cannot, by itself, tell the world what you are capable of building. The future will belong to people who are willing to keep learning.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-base leading-relaxed text-brand-navy/60 text-pretty">
                  Through digital training and masterclasses, Stop The Cycle creates opportunities for young people to develop practical capabilities in areas such as AI, digital media, automation, content creation and emerging technologies.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="text-base leading-relaxed text-brand-navy/80 text-pretty">
                  Not because technology is the destination. But because capacity creates options. And sometimes, one new skill is enough to open a door that once seemed impossible.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <Button to="/get-involved" variant="primary">
                  Explore Our Programs
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* All Program Areas */}
      <section className="bg-brand-cream-warm py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader label="All Programs" title="Five pathways. One movement." center />
          </Reveal>
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programAreas.map((area) => (
              <StaggerItem key={area.title}>
                <div className="card-hover flex h-full flex-col gap-4 rounded-3xl border border-brand-navy/8 bg-white p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-emerald/10">
                    <area.icon className="h-6 w-6 text-brand-emerald" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy">{area.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-navy/50">{area.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Life Class Feature */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="order-2 flex flex-col gap-6 lg:order-1">
              <Reveal>
                <SectionLabel>Life Class Community</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-4xl lg:text-5xl text-balance">
                  Some things cannot be learned from a screen.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base leading-relaxed text-brand-navy/60 text-pretty">
                  Every Thursday, people gather to talk about the things that matter. Purpose. Relationships. Character. Leadership. Failure. Faith. Growth. The questions we are often afraid to ask.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-base leading-relaxed text-brand-navy/60 text-pretty">
                  Because becoming a better person is not always about learning something new. Sometimes it is about unlearning what has been holding you back.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-base leading-relaxed text-brand-navy/80 text-pretty">
                  The Life Class Community is a place to learn, unlearn, ask difficult questions, find perspective and grow alongside people who are also figuring things out. We do not pretend growth is easy. We simply believe no one should have to navigate it alone.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="rounded-2xl border border-brand-emerald/20 bg-brand-emerald/5 p-5">
                  <p className="text-sm font-semibold text-brand-emerald">Every Thursday · 5:30 PM</p>
                  <p className="mt-1 text-sm text-brand-navy/50">Port Harcourt · Editable event information</p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <Button to="/join" variant="primary">
                  Join the Community
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/images/IMG_9504_2.JPG"
                  alt="Young people gathered for a Stop The Cycle group conversation"
                  className="h-[420px] w-full object-cover object-top bg-brand-cream-warm lg:h-[500px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Program Grid from data */}
      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader label="Explore" title="Find your pathway." />
          </Reveal>
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {programs.map((program) => (
              <StaggerItem key={program.id}>
                <div className="group overflow-hidden rounded-3xl border border-brand-navy/8 bg-white card-hover">
                  <div className="relative h-56 overflow-hidden">
                    <img src={program.image} alt={program.alt} className="img-zoom h-full w-full object-cover object-top bg-brand-cream-warm" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-emerald backdrop-blur-sm">
                      {program.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-brand-navy">{program.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-navy/50">{program.description}</p>
                    <div className="mt-4">
                      <ArrowLink to="/get-involved">Learn more</ArrowLink>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-20 text-white lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-4xl lg:text-5xl text-balance">
              Capacity creates options.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-white/60 text-pretty">
              Whatever your starting point, there is a pathway here for you.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8">
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
