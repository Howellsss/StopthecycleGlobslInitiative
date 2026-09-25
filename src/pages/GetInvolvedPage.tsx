import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionHeader';
import { PageHero } from '@/components/PageHero';
import { organization } from '@/data/organization';
import { usePageMeta } from '@/lib/usePageMeta';

export function GetInvolvedPage() {
  usePageMeta('Get Involved', 'Join a program, volunteer, mentor or partner with Stop The Cycle.');
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [formHeight, setFormHeight] = useState(800);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.thedemoaccount.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    const onMessage = (e: MessageEvent) => {
      if (e.origin !== 'https://link.thedemoaccount.com') return;
      const data = e.data;
      if (data && typeof data === 'object') {
        if (data.event === 'form:resized' && typeof data.height === 'number') {
          setFormHeight(data.height);
        } else if (data.event === 'form:loaded' && typeof data.height === 'number') {
          setFormHeight(data.height);
        }
      }
    };

    window.addEventListener('message', onMessage);

    return () => {
      script.remove();
      window.removeEventListener('message', onMessage);
    };
  }, []);

  return (
    <div>
      <PageHero
        label="Get Involved"
        title="What part will you play?"
        subtitle="Maybe you want to learn. Maybe you want to teach. Maybe you have resources, experience, or a story someone else needs to hear. Whatever brought you here, there is a way to contribute."
        image="/images/photos/community-phones.webp"
        imagePosition="center 30%"
      />

      {/* Embedded survey form */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-brand-navy/8 bg-brand-cream p-4 shadow-sm md:p-6">
              <iframe
                ref={iframeRef}
                src="https://link.thedemoaccount.com/widget/survey/37c0McLyhfbWva5xUtGg"
                title="Stop The Cycle sign-up form"
                id="37c0McLyhfbWva5xUtGg"
                data-cookie-consent="false"
                style={{ border: 'none', width: '100%', height: `${formHeight}px` }}
                scrolling="no"
                className="w-full rounded-2xl transition-[height] duration-300"
                loading="eager"
              />
            </div>
          </Reveal>
          <p className="mt-6 text-center text-sm text-brand-navy/75">
            Form not loading? Email{' '}
            <a href={`mailto:${organization.email}`} className="font-semibold text-brand-emerald underline underline-offset-4">{organization.email}</a>{' '}
            or call{' '}
            <a href={`tel:${organization.phones[0].tel}`} className="font-semibold text-brand-emerald underline underline-offset-4">{organization.phones[0].display}</a>.
          </p>
        </div>
      </section>

      {/* Collaboration block */}
      <section className="bg-brand-cream-warm py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Collaboration</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-4xl lg:text-5xl text-balance">
              Build with us.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-brand-navy/75 text-pretty">
              No generation changes its future alone. We believe the work becomes stronger when people bring what they have to the table — expertise, technology, funding, networks, platforms, ideas and relationships.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-brand-navy/75 text-pretty">
              If you represent an organization that believes young people are worth investing in, we would like to hear from you. Not because we are looking for logos. Because we are looking for people willing to build.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${organization.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-navy-deep"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${organization.phones[0].tel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/20 px-7 py-3.5 text-sm font-semibold text-brand-navy transition-all duration-300 hover:border-brand-emerald hover:text-brand-emerald"
              >
                <Phone className="h-4 w-4" />
                Call {organization.phones[0].display}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
