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

export const currentSummit: SummitEdition = {
  id: '2026',
  year: '2026',
  theme: 'The Currencies of the Future',
  tagline: 'Leading the Future',
  description:
    'Strategic tools every youth, entrepreneur, and professional needs to lead with influence, become more, make profits, and maximize the future in this economy.',
  image: '/images/home/image copy 2.png',
  alt: 'The Currencies of the Future summit artwork',
  status: 'upcoming',
};

export const summitEditions: SummitEdition[] = [
  {
    id: '2025',
    year: '2025',
    theme: 'Leading the Future',
    tagline: 'Of the African Youth',
    description: 'A gathering exploring leadership, opportunity and what it means to prepare a generation for what comes next.',
    image: '/images/hero/IMG_9496.JPG',
    alt: 'A participant listening during the Stop The Cycle summit',
    status: 'past',
  },
  {
    id: '2024',
    year: '2024',
    theme: 'Previous Edition',
    tagline: '',
    description: 'An earlier gathering of the Stop The Cycle community.',
    image: '/images/hero/IMG_9494.JPG',
    alt: 'A speaker engaging the Stop The Cycle community',
    status: 'past',
  },
];

export const summitThemes = [
  { title: 'Ideas', description: 'Exposure to new ways of thinking and seeing the world.' },
  { title: 'Learning', description: 'Practical skills and knowledge from experienced voices.' },
  { title: 'Networking', description: 'Connections that can open doors and change trajectories.' },
  { title: 'Opportunity', description: 'Access to people, platforms and possibilities.' },
];
