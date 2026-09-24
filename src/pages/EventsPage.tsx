import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { Button } from '@/components/Buttons';
import { SectionLabel } from '@/components/SectionHeader';
import { events, featuredEvent } from '@/data/events';

const filters = ['Upcoming', 'Past'] as const;

export function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<'Upcoming' | 'Past'>('Upcoming');

  const filtered = events.filter((e) =>
    e.id !== featuredEvent.id && (activeFilter === 'Upcoming' ? e.status === 'upcoming' : e.status === 'past')
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-cream pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Events</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-5xl lg:text-6xl text-balance">
              Masterclasses. Workshops. Gatherings.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-brand-navy/60 text-pretty">
              Beyond the summit, the movement runs year-round. Training sessions, community gatherings, volunteer hangouts and leadership development — all designed to keep young people growing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter + Events */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured event */}
          <Reveal>
            <div className="mb-16 overflow-hidden rounded-3xl border border-brand-navy/8 bg-brand-cream lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <div className="flex items-center justify-center bg-brand-cream-warm p-5 sm:p-8 lg:p-10">
                <img src={featuredEvent.image} alt={featuredEvent.alt} className="max-h-[720px] w-full object-cover object-top" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">Featured Summit</span>
                <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-[-0.04em] text-brand-navy md:text-4xl">
                  {featuredEvent.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-brand-navy/60">{featuredEvent.description}</p>
                <div className="mt-6 flex flex-col gap-3 text-sm text-brand-navy/60">
                  <div className="flex items-center gap-3"><Calendar className="h-4 w-4 text-brand-emerald" /><span>{featuredEvent.date} · {featuredEvent.time}</span></div>
                  <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-brand-emerald" /><span>{featuredEvent.location}</span></div>
                </div>
                <div className="mt-8"><Button to="/events/register" variant="primary">Register Interest <ArrowRight className="h-4 w-4" /></Button></div>
              </div>
            </div>
          </Reveal>

          {/* Filters */}
          <Reveal>
            <div className="flex items-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-brand-navy text-white'
                      : 'border border-brand-navy/15 text-brand-navy/60 hover:border-brand-navy/30'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Events grid */}
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((event) => (
              <StaggerItem key={event.id}>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-navy/8 bg-brand-cream card-hover">
                  <div className="relative flex min-h-52 items-center justify-center overflow-hidden bg-brand-cream-warm">
                    <img src={event.image} alt={event.alt} className="img-zoom h-full min-h-52 w-full object-cover object-top" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-emerald backdrop-blur-sm">
                      {event.type}
                    </div>
                    {event.featured && (
                      <div className="absolute right-4 top-4 rounded-full bg-brand-emerald px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold leading-snug text-brand-navy">{event.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-navy/50">{event.description}</p>
                    <div className="mt-4 flex flex-col gap-2 text-xs text-brand-navy/40">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-brand-emerald" />
                        <span>{event.date}{event.time && ` · ${event.time}`}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-brand-emerald" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="mt-5">
                      <Link
                        to="/get-involved"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-emerald transition-colors hover:text-brand-emerald-light"
                      >
                        Register Interest
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-brand-navy/40">No {activeFilter.toLowerCase()} events at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-cream-warm py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-4xl lg:text-5xl text-balance">
              Want to be the first to know?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-brand-navy/60 text-pretty">
              Join the movement and we'll keep you informed about upcoming events.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8">
              <Button to="/join" variant="primary" className="px-8 py-4 text-base">
                Join the Movement
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
