import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionHeader';

export function RegistrationPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.eventbrite.com/static/widgets/eb_widgets.js';
    script.async = true;
    script.onload = () => {
      window.EBWidgets?.createWidget({
        widgetType: 'checkout',
        eventId: '2000290048381',
        iframeContainerId: 'eventbrite-checkout',
      });
    };
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div>
      <section className="bg-brand-cream py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Link to="/events" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy/60 transition-colors hover:text-brand-emerald">
              <ArrowLeft className="h-4 w-4" />
              Back to Events
            </Link>
            <SectionLabel className="mt-12">Register Interest</SectionLabel>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-[-0.04em] text-brand-navy md:text-6xl">
              Stop The Cycle Global Summit 2026
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-navy/60">
              Saturday, October 3, 2026 at 10:00 AM · SUNTAAL EVENT CENTER
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-3xl border border-brand-navy/10 bg-white p-5 shadow-sm md:p-8">
              <div id="eventbrite-checkout" className="min-h-[500px]" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
