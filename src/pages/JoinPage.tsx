import { ArrowRight, Users, GraduationCap, Heart, Briefcase, Calendar, HandHeart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { Button } from '@/components/Buttons';
import { SectionLabel, SectionHeader } from '@/components/SectionHeader';
import { organization } from '@/data/organization';

const pathways = [
  { icon: GraduationCap, title: 'Join a Program', description: 'Develop digital skills, leadership capacity and practical capabilities.' },
  { icon: Calendar, title: 'Attend an Event', description: 'Show up at a masterclass, workshop or community gathering.' },
  { icon: Users, title: 'Become a Volunteer', description: 'Contribute your time, skills and energy behind the scenes.' },
  { icon: HandHeart, title: 'Become a Mentor', description: 'Share your experience with someone who is still finding their way.' },
  { icon: Briefcase, title: 'Collaborate', description: 'Bring your organization into the conversation.' },
  { icon: Heart, title: 'Support the Movement', description: 'Help create opportunities for young people who need them.' },
];

export function JoinPage() {
  return (
    <div>
      <section className="bg-brand-cream py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Reveal>
              <SectionLabel>Join the Movement</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-5xl lg:text-6xl text-balance">
                There's a place for you here.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-brand-navy/60 text-pretty">
                You don't have to have everything figured out. You don't have to already be successful. You don't need to know exactly where your journey is going. You only need to be willing to take the next step.
              </p>
            </Reveal>
          </div>
          <div className="mt-8 flex flex-col gap-3 border-t border-brand-navy/10 pt-8 text-lg leading-relaxed text-brand-navy/60 text-pretty">
            <Reveal>
              <p>You can join a program. Attend an event. Come to the Summit. Volunteer your skills. Become a mentor. Support the work. Bring your organization into the conversation.</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-brand-navy/80">Whatever your starting point, there is a place for you in this movement.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-serif text-3xl italic text-brand-emerald">{organization.brandStatement}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="bg-brand-cream-warm py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader label="Your Pathway" title="Where do you begin?" center />
          </Reveal>
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pathways.map((path) => (
              <StaggerItem key={path.title}>
                <Link to="/get-involved" className="card-hover flex h-full flex-col gap-4 rounded-3xl border border-brand-navy/8 bg-white p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-emerald/10">
                    <path.icon className="h-6 w-6 text-brand-emerald" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy">{path.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-navy/50">{path.description}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Volunteer Feature */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/images/IMG_9500_2.JPG"
                  alt="Young people gathered for a Stop The Cycle group conversation"
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
                  There is a particular kind of joy that comes from knowing you helped make something possible for someone else. A conversation. A photograph. A registration desk. A training session. A connection. A word of encouragement.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-base leading-relaxed text-brand-navy/50 text-pretty">
                  Every movement needs people who are willing to serve behind the scenes. If that sounds like you, there is a place here for you.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <Button to="/get-involved" variant="primary">
                  Join the Volunteer Community
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-navy py-16 text-white lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-serif text-3xl italic text-brand-lime">It starts with you.</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-4xl lg:text-5xl text-balance">
              Take the next step.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
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
