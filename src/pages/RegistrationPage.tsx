import { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, ExternalLink, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionHeader';
import { currentSummit } from '@/data/summits';
import { organization } from '@/data/organization';
import { usePageMeta } from '@/lib/usePageMeta';

declare global {
  interface Window {
    EBWidgets?: {
      createWidget: (options: { widgetType: 'checkout'; eventId: string; iframeContainerId: string; iframeContainerHeight?: number }) => void;
    };
  }
}

type WidgetState = 'loading' | 'ready' | 'failed';

export function RegistrationPage() {
  usePageMeta('Register for the Global Summit 2026', `Register for the Stop The Cycle Global Summit 2026 on ${currentSummit.date} at ${currentSummit.venue}, Port Harcourt.`);
  const [widgetState, setWidgetState] = useState<WidgetState>('loading');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.eventbrite.com/static/widgets/eb_widgets.js';
    script.async = true;
    script.onload = () => {
      if (!window.EBWidgets) {
        setWidgetState('failed');
        return;
      }
      window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: currentSummit.eventbriteId,
        iframeContainerId: 'eventbrite-checkout',
      });
      setWidgetState('ready');
    };
    script.onerror = () => setWidgetState('failed');
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div>
      <section className="bg-brand-cream py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Link to="/events" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-navy/75 transition-colors hover:text-brand-emerald">
              <ArrowLeft className="h-4 w-4" />
              Back to Events
            </Link>
            <div className="mt-8">
              <SectionLabel>Register</SectionLabel>
            </div>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-[-0.04em] text-brand-navy md:text-6xl">
              Stop The Cycle Global Summit 2026
            </h1>
            <ul className="mt-6 flex flex-col gap-2 text-base text-brand-navy/80 sm:text-lg">
              <li className="flex items-start gap-3"><Calendar className="mt-1 h-5 w-5 shrink-0 text-brand-emerald" />{currentSummit.date} · {currentSummit.time}</li>
              <li className="flex items-start gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-emerald" />{currentSummit.venue}, {currentSummit.address}</li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-3xl border border-brand-navy/10 bg-white p-4 shadow-sm md:p-8">
              {widgetState === 'failed' ? (
                <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 text-center">
                  <p className="max-w-md text-base text-brand-navy/80">
                    The registration form couldn't load here. You can register directly on Eventbrite instead.
                  </p>
                  <a
                    href={currentSummit.eventbriteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-emerald px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-emerald-light"
                  >
                    Register on Eventbrite
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ) : (
                <>
                  {widgetState === 'loading' && (
                    <p className="py-6 text-center text-sm text-brand-navy/75" role="status">Loading registration…</p>
                  )}
                  <div id="eventbrite-checkout" className="min-h-[500px]" />
                </>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-4 rounded-3xl bg-brand-cream-warm p-6 text-sm text-brand-navy/80 md:flex-row md:items-center md:justify-between">
              <p>
                Having trouble?{' '}
                <a href={currentSummit.eventbriteUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-emerald underline underline-offset-4">
                  Register on Eventbrite
                </a>{' '}
                or call us.
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                {organization.phones.map((phone) => (
                  <li key={phone.tel}>
                    <a href={`tel:${phone.tel}`} className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-brand-navy hover:text-brand-emerald">
                      <Phone className="h-4 w-4 text-brand-emerald" />
                      {phone.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
