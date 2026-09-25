export interface SummitEdition {
  id: string;
  year: string;
  theme: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  status: 'upcoming' | 'past';
}

export const currentSummit = {
  id: '2026',
  year: '2026',
  theme: 'The Currencies of the Future',
  tagline: 'Leading the Future',
  description:
    'Strategic tools every youth, entrepreneur, and professional needs to lead with influence, become more, make profits, and maximize the future in this economy.',
  date: 'Friday, 2 October 2026',
  shortDate: 'Fri 2 Oct',
  time: '1:00 PM',
  venue: 'Suntaal Event Center',
  address: 'Along SARS Road, Port Harcourt, Nigeria',
  // Doors open at 1 PM WAT; the summit is treated as over at the end of that day.
  endsAt: '2026-10-02T23:59:00+01:00',
  eventbriteId: '2000290048381',
  eventbriteUrl: 'https://www.eventbrite.com/e/2000290048381',
  image: '/images/posters/summit-2026-date.webp',
  alt: 'Stop The Cycle Global Summit 2026 poster: The Currencies of the Future, Friday 2 October 2026 at 1 PM, Suntaal Event Center, Port Harcourt',
};

/** True until the end of summit day, so summit calls-to-action retire themselves afterwards. */
export function isSummitUpcoming(now: Date = new Date()) {
  return now.getTime() < new Date(currentSummit.endsAt).getTime();
}

export const summitEditions: SummitEdition[] = [
  {
    id: '2025',
    year: '2025',
    theme: 'Leading the Future',
    tagline: 'Of the African Youth · Saturday, 25 October 2025',
    description: 'A gathering exploring leadership, opportunity and what it means to prepare a generation for what comes next, held at Suntaal Event Centre, Port Harcourt.',
    image: '/images/photos/participant-listening.webp',
    alt: 'A participant listening during the Stop The Cycle Global Summit 2025',
    status: 'past',
  },
];

export const summitThemes = [
  { title: 'Ideas', description: 'Exposure to new ways of thinking and seeing the world.' },
  { title: 'Learning', description: 'Practical skills and knowledge from experienced voices.' },
  { title: 'Networking', description: 'Connections that can open doors and change trajectories.' },
  { title: 'Opportunity', description: 'Access to people, platforms and possibilities.' },
];
