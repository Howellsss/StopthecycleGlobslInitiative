import { currentSummit } from '@/data/summits';

export interface EventItem {
  id: string;
  title: string;
  type: 'Masterclass' | 'Workshop' | 'Community' | 'Volunteer' | 'Leadership' | 'Networking' | 'Summit';
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
  type: 'Summit',
  date: currentSummit.date,
  time: currentSummit.time,
  location: `${currentSummit.venue}, ${currentSummit.address}`,
  description: 'Explore the currencies of the future—knowledge, innovation, technology, relationships, influence, adaptability, and purpose.',
  image: currentSummit.image,
  alt: currentSummit.alt,
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
    image: '/images/photos/whiteboard-session.webp',
    alt: 'A facilitator teaching at a whiteboard during a Stop The Cycle session',
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
    image: '/images/posters/volunteers-hangout.webp',
    alt: 'Volunteers Hangout poster: Be part of something bigger',
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
    image: '/images/photos/group-conversation.webp',
    alt: 'Young people gathered for a Life Class group conversation',
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
    image: '/images/photos/question-from-room.webp',
    alt: 'A speaker with a microphone addressing participants',
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
    image: '/images/photos/masterclass-audience.webp',
    alt: 'An audience of young people at a Stop The Cycle event',
    status: 'upcoming',
    featured: false,
  },
  {
    id: 'global-summit-2025',
    title: 'Global Summit 2025: Leading the Future of the African Youth',
    type: 'Summit',
    date: 'Saturday, 25 October 2025',
    time: '11:00 AM',
    location: 'Suntaal Event Centre, Port Harcourt',
    description: 'Keynote and guest speeches, a panel session, entertainment, an exhibition and awards.',
    image: '/images/posters/summit-2025.webp',
    alt: 'Poster for the Stop The Cycle Global Summit 2025, Leading the Future of the African Youth',
    status: 'past',
    featured: false,
  },
  {
    id: 'skill-acquisition-2025',
    title: 'Free Skill Acquisition Day',
    type: 'Workshop',
    date: 'Friday, 24 October 2025',
    time: '10:00 AM',
    location: '',
    description: 'A one-day programme of digital, vocational and technical skills to help young people stay ahead financially and lead the future.',
    image: '/images/posters/skill-acquisition-2025.webp',
    alt: 'Poster for the Stop The Cycle Free Skill Acquisition day, 24 October 2025',
    status: 'past',
    featured: false,
  },
];
