import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Handshake, Mail, Mic, Plane, Play, Quote, Users, GraduationCap } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionHeader';
import { organization } from '@/data/organization';
import { usePageMeta } from '@/lib/usePageMeta';

const M = '/media/travels/vienna-2026';

interface Clip {
  src: string;
  poster: string;
  title: string;
  caption: string;
  portrait?: boolean;
}

interface Still {
  src: string;
  alt: string;
  caption: string;
  portrait?: boolean;
}

const clip = (name: string, title: string, caption: string, portrait = true): Clip => ({
  src: `${M}/${name}.mp4`,
  poster: `${M}/poster-${name}.webp`,
  title,
  caption,
  portrait,
});

const still = (name: string, alt: string, caption: string, portrait = true): Still => ({ src: `${M}/${name}.webp`, alt, caption, portrait });

const clips = {
  highlights: clip('cop13-highlights', 'COP13 highlights', 'An eye-opening week at the Vienna International Centre.'),
  greatRooms: clip('unodc-great-rooms', 'Great rooms, great conversations', 'Inside the meeting rooms at UNODC, Vienna.'),
  plenary: clip('plenary-hall', 'The plenary hall', 'Delegations from around the world at the Conference of the Parties.', false),
  floor: clip('taking-the-floor', 'Taking the floor', 'Engr. Uche Juan Augustine speaking at the podium.'),
  desk: clip('at-the-delegate-desk', 'At the delegate desk', 'Following the plenary from the floor.', false),
  message1: clip('founder-message-1', 'A message from Vienna, part 1', 'Reflections between sessions.'),
  message2: clip('founder-message-2', 'A message from Vienna, part 2', 'Why these rooms matter for young people.'),
  message3: clip('founder-message-3', 'A message from Vienna, part 3', 'Bringing the conversation home.'),
  outside: clip('delegates-outside', 'Outside the Vienna International Centre', 'Delegates gathering in the courtyard.'),
};

const conversations: Still[] = [
  still('with-a-delegate-3', 'The founder with a conference delegate', 'Conversations that cross borders.'),
  still('with-a-delegate-4', 'The founder with a delegate in a suit', 'New connections in Vienna.'),
  still('with-a-delegate-5', 'The founder with a delegate between sessions', 'Ideas exchanged between sessions.'),
  still('with-a-delegate-2', 'The founder with a delegate outside the Vienna International Centre', 'Outside the Vienna International Centre.'),
  still('with-a-delegate-7', 'The founder with a delegate in a pink jacket', 'Every handshake a possibility.'),
  still('with-a-delegate-8', 'The founder with a delegate in the corridor', 'Friends of the movement.'),
  still('with-a-delegate-6', 'The founder with a delegate at the venue', 'Building relationships that last.'),
  still('with-a-delegate-1', 'The founder with a delegate in the meeting room', 'Shared purpose, different nations.'),
];

const inTheRoom: Still[] = [
  still('conference-of-the-parties', 'The founder at the Conference of the Parties session room', 'At the Conference of the Parties to UNTOC.', false),
  still('plenary-session', 'Delegates seated in the plenary session', 'The plenary in session.'),
  still('peace-education-panel', 'A panel on peace education', 'A panel on peace education.'),
  still('listening-in-session', 'The founder listening with interpretation headphones', 'Listening to the world, in many languages.'),
  still('meeting-room-group', 'Delegates standing together in a meeting room', 'A side meeting with fellow delegates.', false),
  still('corridor-delegation', 'A small delegation together in the corridor', 'Walking the halls with fellow delegates.'),
];

const aroundVienna: Still[] = [
  still('flags-of-nations', 'The founder in front of the flags of nations at the Vienna International Centre', 'Among the flags of the nations.'),
  still('unodc-cop-backdrop', 'The founder at the UNODC COP backdrop', 'At the UNODC COP backdrop.'),
  still('welcome-to-vic-blue', 'The founder at the Welcome to the Vienna International Centre sign', 'Welcome to the Vienna International Centre.'),
  still('vic-exterior', 'The Vienna International Centre towers', 'The Vienna International Centre.'),
  still('quote-wall', 'The founder at a quote wall inside the venue', 'Words worth carrying home.'),
  still('vic-courtyard', 'Two delegates in the courtyard of the Vienna International Centre', 'In the courtyard between sessions.'),
];

const collaborations = [
  { icon: Mic, title: 'Speaking and delegations', text: 'Invite us to share what we are learning about youth development, leadership and breaking cycles of limitation.' },
  { icon: GraduationCap, title: 'Youth programmes and exchanges', text: 'Co-create programmes, masterclasses and exchanges for young people in Nigeria and beyond.' },
  { icon: Users, title: 'Summits and convenings', text: 'Partner on the Stop The Cycle Global Summit or bring a session to our community in Port Harcourt.' },
  { icon: Handshake, title: 'Research and advocacy', text: 'Work with us on prevention, education and opportunity for the next generation.' },
];

function VideoCard({ clip: c, className = '' }: { clip: Clip; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const start = () => {
    setStarted(true);
    requestAnimationFrame(() => ref.current?.play().catch(() => undefined));
  };
  return (
    <figure className={className}>
      <div className={`relative overflow-hidden rounded-3xl bg-black ${c.portrait ? 'aspect-[9/16]' : 'aspect-video'}`}>
        <video
          ref={ref}
          src={c.src}
          poster={c.poster}
          preload="none"
          playsInline
          controls={started}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {!started && (
          <button type="button" onClick={start} aria-label={`Play video: ${c.title}`} className="group absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/0 to-black/10">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-lime text-brand-navy shadow-xl shadow-black/40 transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-7 w-7 fill-current" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3">
        <p className="text-sm font-bold">{c.title}</p>
        <p className="text-sm opacity-80">{c.caption}</p>
      </figcaption>
    </figure>
  );
}

function StillCard({ s }: { s: Still }) {
  return (
    <figure className="break-inside-avoid">
      <img src={s.src} alt={s.alt} loading="lazy" decoding="async" className="w-full rounded-2xl object-cover" style={{ aspectRatio: s.portrait ? '3/4' : '16/10' }} />
      <figcaption className="mt-2 text-sm opacity-80">{s.caption}</figcaption>
    </figure>
  );
}

function ChapterHead({ n, label, title, intro, dark = false }: { n: string; label: string; title: string; intro?: string; dark?: boolean }) {
  return (
    <Reveal>
      <div className="grid gap-4 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-10">
        <span className={`font-serif text-6xl font-semibold leading-none tracking-[-0.05em] lg:text-8xl ${dark ? 'text-brand-lime' : 'text-brand-emerald/25'}`}>{n}</span>
        <div className="max-w-3xl">
          <SectionLabel className={dark ? '!text-brand-lime' : ''}>{label}</SectionLabel>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl text-balance">{title}</h2>
          {intro && <p className={`mt-4 text-base leading-relaxed md:text-lg ${dark ? 'text-white/80' : 'text-brand-navy/75'}`}>{intro}</p>}
        </div>
      </div>
    </Reveal>
  );
}

export function TravelsPage() {
  usePageMeta(
    'Travels & Tours',
    'Stop The Cycle on the international stage: representing the initiative at the United Nations Office on Drugs and Crime in Vienna for COP13 to the UN Convention against Transnational Organized Crime. Open to international collaboration.'
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-navy-deep text-white">
        <video
          src={clips.plenary.src}
          poster={clips.plenary.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep via-brand-navy-deep/70 to-brand-navy-deep/30" />
        <div className="relative mx-auto grid min-h-[86svh] max-w-7xl items-end gap-10 px-4 pb-14 pt-28 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:pb-20">
          <div>
            <Reveal>
              <SectionLabel className="!text-brand-lime">Travels &amp; Tours</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-7xl text-balance">
                Taking the conversation <span className="italic text-brand-lime">to the world.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                The cycles we are breaking in Port Harcourt are part of a global story. We take our work into international rooms, learn from them, and bring what we learn home to young people.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#vienna" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-lime px-7 py-3.5 text-sm font-bold text-brand-navy transition-colors hover:bg-white">
                  See the Vienna journey
                </a>
                <a href="#collaborate" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10">
                  Collaborate with us
                </a>
              </div>
            </Reveal>
          </div>

          {/* Boarding pass */}
          <Reveal delay={0.2}>
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-white text-brand-navy shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between bg-brand-lime px-6 py-3 text-xs font-bold uppercase tracking-[0.2em]">
                <span>Stop The Cycle · Delegation</span>
                <Plane className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between px-6 pt-6">
                <div>
                  <p className="font-serif text-5xl font-semibold tracking-[-0.04em]">PHC</p>
                  <p className="text-xs text-brand-navy/70">Port Harcourt, Nigeria</p>
                </div>
                <div className="flex flex-1 items-center gap-2 px-4 text-brand-emerald">
                  <span className="h-px flex-1 border-t-2 border-dashed border-brand-emerald/40" />
                  <Plane className="h-5 w-5" />
                  <span className="h-px flex-1 border-t-2 border-dashed border-brand-emerald/40" />
                </div>
                <div className="text-right">
                  <p className="font-serif text-5xl font-semibold tracking-[-0.04em]">VIE</p>
                  <p className="text-xs text-brand-navy/70">Vienna, Austria</p>
                </div>
              </div>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-4 px-6 py-6 text-sm">
                <div className="col-span-2">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-navy/60">Destination</dt>
                  <dd className="font-semibold">United Nations Office on Drugs and Crime, Vienna International Centre</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-navy/60">Occasion</dt>
                  <dd className="font-semibold">COP13 to the UN Convention against Transnational Organized Crime</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-navy/60">Delegate</dt>
                  <dd className="font-semibold">Engr. Uche Juan Augustine</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-navy/60">Representing</dt>
                  <dd className="font-semibold">Stop The Cycle Initiative</dd>
                </div>
              </dl>
              <div className="relative border-t-2 border-dashed border-brand-navy/15 px-6 py-4">
                <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-brand-navy-deep" />
                <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-brand-navy-deep" />
                <p className="font-serif text-lg italic text-brand-emerald">Your dreams are valid.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Destinations strip */}
      <section className="border-b border-brand-navy/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-[1fr_1fr] lg:px-8">
          <a href="#vienna" className="group flex items-center gap-4 rounded-2xl border border-brand-navy/10 p-5 transition-colors hover:border-brand-emerald">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-navy font-bold text-brand-lime">01</span>
            <span className="flex-1">
              <span className="block font-serif text-xl font-semibold text-brand-navy">Vienna, Austria</span>
              <span className="block text-sm text-brand-navy/75">UNODC · COP13 to UNTOC</span>
            </span>
          </a>
          <a href="#collaborate" className="group flex items-center gap-4 rounded-2xl border-2 border-dashed border-brand-emerald/40 p-5 transition-colors hover:border-brand-emerald hover:bg-brand-cream-warm">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-lime text-brand-navy">
              <Globe className="h-5 w-5" />
            </span>
            <span className="flex-1">
              <span className="block font-serif text-xl font-semibold text-brand-navy">Your city next?</span>
              <span className="block text-sm text-brand-navy/75">Invite Stop The Cycle to your country or convening.</span>
            </span>
          </a>
        </div>
      </section>

      {/* Vienna intro: caption 1 + video */}
      <section id="vienna" className="scroll-mt-20 bg-white py-16 text-brand-navy lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ChapterHead
            n="01"
            label="Vienna, Austria"
            title="Connecting with brilliant minds and driving real impact."
            intro="At the 13th session of the Conference of the Parties (COP13) to the UN Convention against Transnational Organized Crime, hosted by the United Nations Office on Drugs and Crime."
          />
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <VideoCard clip={clips.highlights} className="mx-auto w-full max-w-sm" />
            </Reveal>
            <Reveal delay={0.05}>
              <blockquote className="relative">
                <Quote className="h-10 w-10 text-brand-lime" />
                <p className="mt-4 font-serif text-2xl leading-snug tracking-[-0.02em] md:text-3xl">
                  What an incredible, eye-opening week in Vienna. From deep-dive panel sessions to candid conversations behind the scenes, it was all about learning, unlearning, and pushing for real-world solutions to global organized crime.
                </p>
                <p className="mt-6 font-serif text-xl italic text-brand-emerald">The work doesn't stop here.</p>
                <footer className="mt-6 text-sm font-semibold text-brand-navy/75">Engr. Uche Juan Augustine, Founder &amp; Convener</footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* In the room */}
      <section className="bg-brand-cream-warm py-16 text-brand-navy lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ChapterHead n="02" label="In the room" title="Where global decisions are debated." intro="Plenary sessions, panels and side meetings with delegations from around the world." />
          <Reveal>
            <div className="mt-12">
              <VideoCard clip={clips.plenary} />
            </div>
          </Reveal>
          <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
            {inTheRoom.map((s) => (
              <StillCard key={s.src} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Taking the floor */}
      <section className="bg-brand-navy py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ChapterHead n="03" label="Taking the floor" title="A voice for young people, on a global stage." intro="Representing Stop The Cycle Initiative and the young people it serves." dark />
          <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <Reveal>
              <VideoCard clip={clips.floor} className="mx-auto w-full max-w-sm" />
            </Reveal>
            <Reveal delay={0.05}>
              <VideoCard clip={clips.desk} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Great rooms: caption 2 + video */}
      <section className="bg-white py-16 text-brand-navy lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ChapterHead n="04" label="United Nations Office on Drugs and Crime" title="Great rooms. Great conversations." />
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <Reveal>
              <blockquote>
                <Quote className="h-10 w-10 text-brand-lime" />
                <p className="mt-4 font-serif text-2xl leading-snug tracking-[-0.02em] md:text-3xl">
                  Bringing solutions to global issues. Representing Stop The Cycle Initiative in Austria. Great rooms, great conversations. To God be the glory.
                </p>
                <p className="mt-6 font-serif text-xl italic text-brand-emerald">Your dreams are valid.</p>
                <footer className="mt-6 text-sm font-semibold text-brand-navy/75">Engr. Uche Juan Augustine, Founder &amp; Convener</footer>
              </blockquote>
            </Reveal>
            <Reveal delay={0.05}>
              <VideoCard clip={clips.greatRooms} className="mx-auto w-full max-w-sm" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Conversations across borders */}
      <section className="bg-brand-cream-warm py-16 text-brand-navy lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ChapterHead n="05" label="Conversations across borders" title="Every handshake, a possible partnership." intro="Delegates, advocates and professionals met in the corridors and meeting rooms of the Vienna International Centre." />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {conversations.map((s) => (
              <Reveal key={s.src}>
                <StillCard s={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Voices from Vienna */}
      <section className="bg-brand-navy-deep py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ChapterHead n="06" label="Voices from Vienna" title="Messages recorded on location." intro="Short reflections from the founder, filmed between sessions at the Vienna International Centre." dark />
        </div>
        <div className="scrollbar-none mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 sm:px-6 lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-8">
          {[clips.message1, clips.message2, clips.message3, clips.outside].map((c) => (
            <VideoCard key={c.src} clip={c} className="w-[72%] shrink-0 snap-start sm:w-[45%] lg:w-auto" />
          ))}
        </div>
      </section>

      {/* Around the VIC */}
      <section className="bg-white py-16 text-brand-navy lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ChapterHead n="07" label="Around the Vienna International Centre" title="Postcards from Vienna." />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {aroundVienna.map((s) => (
              <Reveal key={s.src}>
                <StillCard s={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborate */}
      <section id="collaborate" className="scroll-mt-20 bg-brand-lime py-16 text-brand-navy lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal>
              <SectionLabel>International collaboration</SectionLabel>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.0] tracking-[-0.04em] md:text-6xl text-balance">Let&apos;s build across borders.</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-navy/80">
                Stop The Cycle is open to working with international organisations, institutions, governments and companies that believe young people are worth investing in.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${organization.email}?subject=${encodeURIComponent('International collaboration with Stop The Cycle')}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-navy-deep"
                >
                  <Mail className="h-4 w-4" />
                  Start a conversation
                </a>
                <Link to="/get-involved" className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/30 px-7 py-3.5 text-sm font-semibold text-brand-navy hover:border-brand-navy">
                  Partner with us
                </Link>
              </div>
              <p className="mt-6 text-sm text-brand-navy/80">
                Or call {organization.phones.map((p, i) => (
                  <span key={p.tel}>
                    {i > 0 && ' · '}
                    <a href={`tel:${p.tel}`} className="font-semibold underline underline-offset-4">{p.display}</a>
                  </span>
                ))}
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {collaborations.map((c) => (
                <Reveal key={c.title}>
                  <div className="h-full rounded-3xl bg-white/70 p-6">
                    <c.icon className="h-6 w-6 text-brand-emerald" />
                    <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-navy/80">{c.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
