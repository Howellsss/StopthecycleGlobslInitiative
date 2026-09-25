import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { Button } from '@/components/Buttons';
import { events, featuredEvent, type EventItem } from '@/data/events';
import { currentSummit, isSummitUpcoming } from '@/data/summits';
import { PageHero } from '@/components/PageHero';
import { usePageMeta } from '@/lib/usePageMeta';

const filters = ['Upcoming', 'Past'] as const;

/** Where each event card's action should lead. Past events have no action. */
function eventAction(event: EventItem) {
  if (event.status === 'past') return null;
  if (event.id === 'life-class-weekly') return { label: 'About Life Class', to: '/programs#life-class' };
  return { label: 'Get notified', to: '/get-involved' };
}

export function EventsPage() {
  usePageMeta('Events', 'Masterclasses, workshops, volunteer hangouts, the weekly Life Class Community and the Stop The Cycle Global Summit.');
  const [activeFilter, setActiveFilter] = useState<'Upcoming' | 'Past'>('Upcoming');
  const summitUpcoming = isSummitUpcoming();

  const filtered = events.filter((e) =>
    e.id !== featuredEvent.id && (activeFilter === 'Upcoming' ? e.status === 'upcoming' : e.status === 'past')
  );

  return (
    <div>
      <PageHero
        label="Events"
        title="Masterclasses. Workshops. Gatherings."
        subtitle="Beyond the summit, the movement runs year-round. Training sessions, community gatherings, volunteer hangouts and leadership development — all designed to keep young people growing."
        image="/images/photos/masterclass-audience.webp"
        imagePosition="center 40%"
      />

      {/* Filter + Events */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured event */}
          <Reveal>
            <div className="mb-16 overflow-hidden rounded-3xl border border-brand-navy/8 bg-brand-cream lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <div className="flex items-center justify-center bg-brand-cream-warm p-5 sm:p-8 lg:p-10">
                <img src={featuredEvent.image} alt={featuredEvent.alt} className="max-h-[720px] w-full rounded-xl object-contain" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">{summitUpcoming ? 'Featured Summit' : 'Past Summit'}</span>
                <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-[-0.04em] text-brand-navy md:text-4xl">
                  {featuredEvent.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-brand-navy/75">{featuredEvent.description}</p>
                <div className="mt-6 flex flex-col gap-3 text-sm text-brand-navy/75">
                  <div className="flex items-start gap-3"><Calendar className="mt-0.5 h-4 w-4 shrink-0 text-brand-emerald" /><span>{featuredEvent.date} · {featuredEvent.time}</span></div>
                  <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-emerald" /><span>{featuredEvent.location}</span></div>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {summitUpcoming && (
                    <Button to="/events/register" variant="primary">Register Now <ArrowRight className="h-4 w-4" /></Button>
                  )}
                  <Button to="/summits" variant="ghost">About the Summit</Button>
                </div>
                {summitUpcoming && (
                  <p className="mt-4 text-sm text-brand-navy/75">Free Eventbrite registration for {currentSummit.shortDate}.</p>
                )}
              </div>
            </div>
          </Reveal>

          {/* Filters */}
          <Reveal>
            <div className="flex items-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`min-h-11 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-brand-navy text-white'
                      : 'border border-brand-navy/15 text-brand-navy/75 hover:border-brand-navy/30'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Events grid */}
          <StaggerGroup key={activeFilter} className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((event) => {
              const action = eventAction(event);
              return (
              <StaggerItem key={event.id} className="h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-navy/8 bg-brand-cream card-hover">
                  <div className="relative flex min-h-52 items-center justify-center overflow-hidden bg-brand-cream-warm">
                    <img src={event.image} alt={event.alt} loading="lazy" decoding="async" className="img-zoom h-52 w-full object-cover object-top" />
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
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-navy/75">{event.description}</p>
                    <div className="mt-4 flex flex-col gap-2 text-xs text-brand-navy/75">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-brand-emerald" />
                        <span>{event.date}{event.time && ` · ${event.time}`}</span>
                      </div>
                      {event.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 text-brand-emerald" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                    {action && (
                      <div className="mt-3">
                        <Link
                          to={action.to}
                          className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-emerald transition-colors hover:text-brand-emerald-light"
                        >
                          {action.label}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </StaggerItem>
              );
            })}
          </StaggerGroup>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-brand-navy/75">No {activeFilter.toLowerCase()} events at the moment.</p>
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
            <p className="mt-6 text-lg text-brand-navy/75 text-pretty">
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
