export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  title: string;
  caption: string;
  year: string;
  category: 'Summits' | 'Events' | 'Masterclasses' | 'Community' | 'Volunteers' | 'Behind the Scenes';
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    image: '/images/hero/IMG_9495 copy.JPG',
    alt: 'Young people seated together during the Stop The Cycle Global Summit',
    title: 'Summit Session',
    caption: 'Participants listening, learning and showing up for the future.',
    year: '2025',
    category: 'Summits',
  },
  {
    id: 'g2',
    image: '/images/hero/IMG_9493 copy.JPG',
    alt: 'Young people gathered for a Stop The Cycle group conversation',
    title: 'Community Conversation',
    caption: 'The conversations that make growth possible.',
    year: '2025',
    category: 'Community',
  },
  {
    id: 'g3',
    image: '/images/hero/IMG_9494 copy.JPG',
    alt: 'A participant speaking into a microphone during the summit',
    title: 'A Question From The Room',
    caption: 'Every voice has a place in the room.',
    year: '2025',
    category: 'Events',
  },
  {
    id: 'g4',
    image: '/images/hero/IMG_9497 copy.JPG',
    alt: 'The technical team preparing equipment at the summit',
    title: 'Behind The Scenes',
    caption: 'The people and details that help the work happen.',
    year: '2025',
    category: 'Behind the Scenes',
  },
  {
    id: 'g5',
    image: '/images/hero/IMG_9496 copy.JPG',
    alt: 'A participant listening during the Stop The Cycle Global Summit',
    title: 'In The Room',
    caption: 'Attention is the beginning of transformation.',
    year: '2025',
    category: 'Masterclasses',
  },
  {
    id: 'g6',
    image: '/images/IMG_9505_2.JPG',
    alt: 'Young people listening during a Stop The Cycle session',
    title: 'Listening With Purpose',
    caption: 'The room becomes powerful when people choose to pay attention.',
    year: '2025',
    category: 'Summits',
  },
  {
    id: 'g7',
    image: '/images/IMG_9504_2.JPG',
    alt: 'Young people celebrating together while holding their phones',
    title: 'Shared Momentum',
    caption: 'Community grows when people share the moment.',
    year: '2025',
    category: 'Community',
  },
  {
    id: 'g8',
    image: '/images/IMG_9501_2.JPG',
    alt: 'Panelists seated together on stage during the summit',
    title: 'On The Panel',
    caption: 'Different perspectives, one room and a wider view of what is possible.',
    year: '2025',
    category: 'Events',
  },
  {
    id: 'g9',
    image: '/images/IMG_9500_2.JPG',
    alt: 'Stop The Cycle team members holding campaign signs',
    title: 'It Starts With Us',
    caption: 'The people behind the movement and the message.',
    year: '2025',
    category: 'Behind the Scenes',
  },
  {
    id: 'g10', image: '/images/events/IMG_9507.JPG', alt: 'Audience members listening at the summit', title: 'The Audience', caption: 'A room ready to learn.', year: '2025', category: 'Summits',
  },
  {
    id: 'g11', image: '/images/events/IMG_9508.JPG', alt: 'Young people celebrating together', title: 'Shared Energy', caption: 'Community, connection and momentum.', year: '2025', category: 'Community',
  },
  {
    id: 'g12', image: '/images/events/IMG_9509.JPG', alt: 'Panelists speaking together on stage', title: 'The Conversation', caption: 'Many voices shaping one future.', year: '2025', category: 'Events',
  },
  {
    id: 'g13', image: '/images/events/IMG_9510.JPG', alt: 'Stop The Cycle team holding campaign signs', title: 'The Movement', caption: 'The message carried together.', year: '2025', category: 'Behind the Scenes',
  },
  {
    id: 'g14', image: '/images/hero/IMG_9491.jpg', alt: 'A speaker addressing the Stop The Cycle community', title: 'A Voice In The Room', caption: 'Ideas become action when people gather to hear and respond.', year: '2025', category: 'Events',
  },
  {
    id: 'g15', image: '/images/gallery/image copy 2.png', alt: 'A Stop The Cycle community event image', title: 'Community In Motion', caption: 'People, purpose and possibility in the same room.', year: '2025', category: 'Community',
  },
  {
    id: 'g17', image: '/images/gallery/569602076_17849725545579622_4969342789266002829_n copy.jpeg', alt: 'A Stop The Cycle community gathering', title: 'Gathered With Purpose', caption: 'A community making room for connection and growth.', year: '2025', category: 'Community',
  },
  {
    id: 'g18', image: '/images/gallery/568193793_17849391555579622_5497640455532900227_n copy.jpeg', alt: 'A Stop The Cycle event audience', title: 'In The Audience', caption: 'Learning begins with showing up.', year: '2025', category: 'Events',
  },
  {
    id: 'g19', image: '/images/gallery/563628440_17847254883579622_5631914790038471816_n copy.jpeg', alt: 'A Stop The Cycle interview at an event', title: 'The Conversation Continues', caption: 'Stories and ideas carried beyond the room.', year: '2025', category: 'Events',
  },
  {
    id: 'g20', image: '/images/gallery/562627793_17847254793579622_4226812497131940247_n copy.jpeg', alt: 'Stop The Cycle leaders smiling together', title: 'The People Behind The Work', caption: 'The movement is built by people who choose to participate.', year: '2025', category: 'Behind the Scenes',
  },
  {
    id: 'g21', image: '/images/gallery/571154186_17849725536579622_7811831153233308518_n.jpeg', alt: 'Stop The Cycle participants gathered together', title: 'Together In The Room', caption: 'Shared purpose turns a gathering into a movement.', year: '2025', category: 'Community',
  },
  {
    id: 'g22', image: '/images/gallery/571223660_17849724345579622_8524791354055729271_n.jpeg', alt: 'Stop The Cycle community event', title: 'A Room Full Of Possibility', caption: 'Every room holds the possibility of a new beginning.', year: '2025', category: 'Events',
  },
  {
    id: 'g23', image: '/images/gallery/569042753_17849391573579622_7664078858727727339_n.jpeg', alt: 'Stop The Cycle event participants', title: 'Showing Up', caption: 'Progress begins with people who show up.', year: '2025', category: 'Events',
  },
  {
    id: 'g24', image: '/images/gallery/563896105_17847254811579622_1047726315075919569_n.jpeg', alt: 'Stop The Cycle community members', title: 'The Community', caption: 'Connection makes growth possible.', year: '2025', category: 'Community',
  },
  {
    id: 'g25', image: '/images/gallery/564340508_17847254745579622_74256308267825069_n.jpeg', alt: 'Stop The Cycle event moment', title: 'Moving Forward', caption: 'A shared future starts with a shared commitment.', year: '2025', category: 'Behind the Scenes',
  },
];

export const galleryCategories = ['All', 'Summits', 'Events', 'Masterclasses', 'Community', 'Behind the Scenes'] as const;
export const galleryYears = ['All', '2025'] as const;
