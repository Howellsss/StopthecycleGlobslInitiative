export interface EventItem {
  id: string;
  title: string;
  type: 'Masterclass' | 'Workshop' | 'Community' | 'Volunteer' | 'Leadership' | 'Networking';
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  alt: string;
  status: 'upcoming' | 'past';
  featured: boolean;
}

export const featuredEvent: EventItem = {
  id: 'global-summit-2026',
  title: 'Stop The Cycle Global Summit 2026',
  type: 'Networking',
  date: 'Saturday, October 3, 2026',
  time: '10:00 AM',
  location: 'SUNTAAL EVENT CENTER',
  description: 'Explore the currencies of the future—knowledge, innovation, technology, relationships, influence, adaptability, and purpose.',
  image: '/images/events/IMG_9539.JPG',
  alt: 'Stop The Cycle Global Summit 2026 poster for The Currencies of the Future',
  status: 'upcoming',
  featured: true,
};

export const events: EventItem[] = [
  {
    id: 'ai-masterclass',
    title: 'AI & Digital Media Masterclass',
    type: 'Masterclass',
    date: 'To be announced',
    time: '',
    location: 'Port Harcourt',
    description: 'A hands-on session exploring AI tools, digital content creation and the practical skills shaping the future of work.',
    image: '/images/gallery/571223660_17849724345579622_8524791354055729271_n.jpeg',
    alt: 'The Stop The Cycle team preparing a digital media session',
    status: 'upcoming',
    featured: true,
  },
  {
    id: 'volunteers-hangout',
    title: 'Volunteers Hangout',
    type: 'Volunteer',
    date: 'To be announced',
    time: '',
    location: 'Port Harcourt',
    description: 'A gathering for current and prospective volunteers to connect, share experiences and build community.',
    image: '/images/events/image copy 2.png',
    alt: 'Volunteers gathered together for the Stop The Cycle Volunteers Hangout',
    status: 'upcoming',
    featured: true,
  },
  {
    id: 'life-class-weekly',
    title: 'The Life Class Community',
    type: 'Community',
    date: 'Every Thursday',
    time: '5:30 PM',
    location: 'Port Harcourt',
    description: 'Weekly gatherings for honest conversations about purpose, character, leadership and growth.',
    image: '/images/events/IMG_9509.JPG',
    alt: 'Participants listening during a Stop The Cycle session',
    status: 'upcoming',
    featured: false,
  },
  {
    id: 'leadership-session',
    title: 'Leadership Development Session',
    type: 'Leadership',
    date: 'To be announced',
    time: '',
    location: 'Port Harcourt',
    description: 'Building the capacity to take responsibility, make decisions and create change.',
    image: '/images/events/IMG_9510.JPG',
    alt: 'A speaker sharing a question with the room',
    status: 'upcoming',
    featured: false,
  },
  {
    id: 'networking-event',
    title: 'Community Networking Night',
    type: 'Networking',
    date: 'To be announced',
    time: '',
    location: 'Port Harcourt',
    description: 'An evening of connections, conversations and collaboration among young professionals and entrepreneurs.',
    image: '/images/gallery/569602076_17849725545579622_4969342789266002829_n copy.jpeg',
    alt: 'Stop The Cycle community members gathered together',
    status: 'upcoming',
    featured: false,
  },
];
