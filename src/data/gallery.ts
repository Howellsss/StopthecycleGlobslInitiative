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
    image: '/images/photos/summit-audience.webp',
    alt: 'Young people seated together during the Stop The Cycle Global Summit',
    title: 'Summit Session',
    caption: 'Participants listening, learning and showing up for the future.',
    year: '2025',
    category: 'Summits',
  },
  {
    id: 'g2',
    image: '/images/photos/group-conversation.webp',
    alt: 'Young people gathered for a Stop The Cycle group conversation',
    title: 'Community Conversation',
    caption: 'The conversations that make growth possible.',
    year: '2025',
    category: 'Community',
  },
  {
    id: 'g3',
    image: '/images/photos/question-from-room.webp',
    alt: 'A participant speaking into a microphone during the summit',
    title: 'A Question From The Room',
    caption: 'Every voice has a place in the room.',
    year: '2025',
    category: 'Events',
  },
  {
    id: 'g4',
    image: '/images/photos/media-desk.webp',
    alt: 'The technical team preparing equipment at the summit',
    title: 'Behind The Scenes',
    caption: 'The people and details that help the work happen.',
    year: '2025',
    category: 'Behind the Scenes',
  },
  {
    id: 'g5',
    image: '/images/photos/participant-listening.webp',
    alt: 'A participant listening during the Stop The Cycle Global Summit',
    title: 'In The Room',
    caption: 'Attention is the beginning of transformation.',
    year: '2025',
    category: 'Masterclasses',
  },
  {
    id: 'g6',
    image: '/images/photos/summit-audience-front-row.webp',
    alt: 'Young people listening during a Stop The Cycle session',
    title: 'Listening With Purpose',
    caption: 'The room becomes powerful when people choose to pay attention.',
    year: '2025',
    category: 'Summits',
  },
  {
    id: 'g7',
    image: '/images/photos/community-phones.webp',
    alt: 'Young people celebrating together while holding their phones',
    title: 'Shared Momentum',
    caption: 'Community grows when people share the moment.',
    year: '2025',
    category: 'Community',
  },
  {
    id: 'g8',
    image: '/images/photos/summit-panel.webp',
    alt: 'Panelists seated together on stage during the summit',
    title: 'On The Panel',
    caption: 'Different perspectives, one room and a wider view of what is possible.',
    year: '2025',
    category: 'Events',
  },
  {
    id: 'g9',
    image: '/images/photos/team-campaign-signs.webp',
    alt: 'Stop The Cycle team members holding campaign signs',
    title: 'It Starts With Us',
    caption: 'The people behind the movement and the message.',
    year: '2025',
    category: 'Behind the Scenes',
  },
  {
    id: 'g14', image: '/images/hero/convener-white.webp', alt: 'A speaker addressing the Stop The Cycle community', title: 'A Voice In The Room', caption: 'Ideas become action when people gather to hear and respond.', year: '2025', category: 'Events',
  },
  {
    id: 'g15', image: '/images/photos/convener-speaking.webp', alt: 'The convener speaking into a microphone at a Stop The Cycle event', title: 'Community In Motion', caption: 'People, purpose and possibility in the same room.', year: '2025', category: 'Community',
  },
  {
    id: 'g17', image: '/images/photos/laptop-session.webp', alt: 'A participant working on a laptop during a digital skills session', title: 'Gathered With Purpose', caption: 'A community making room for connection and growth.', year: '2025', category: 'Community',
  },
  {
    id: 'g18', image: '/images/photos/masterclass-audience.webp', alt: 'A Stop The Cycle event audience', title: 'In The Audience', caption: 'Learning begins with showing up.', year: '2025', category: 'Events',
  },
  {
    id: 'g19', image: '/images/photos/stc2022-interview.webp', alt: 'A guest being interviewed in front of the Stop The Cycle backdrop', title: 'The Conversation Continues', caption: 'Stories and ideas carried beyond the room.', year: '2022', category: 'Events',
  },
  {
    id: 'g20', image: '/images/photos/stc2022-leaders.webp', alt: 'Two Stop The Cycle guests smiling together', title: 'The People Behind The Work', caption: 'The movement is built by people who choose to participate.', year: '2022', category: 'Behind the Scenes',
  },
  {
    id: 'g21', image: '/images/photos/teamwork-studio.webp', alt: 'Participants working in a studio beneath a Teamwork sign', title: 'Together In The Room', caption: 'Shared purpose turns a gathering into a movement.', year: '2025', category: 'Community',
  },
  {
    id: 'g22', image: '/images/photos/whiteboard-session.webp', alt: 'A facilitator teaching at a whiteboard', title: 'A Room Full Of Possibility', caption: 'Every room holds the possibility of a new beginning.', year: '2025', category: 'Events',
  },
  {
    id: 'g23', image: '/images/photos/participant-portrait.webp', alt: 'A participant seated during a Stop The Cycle session', title: 'Showing Up', caption: 'Progress begins with people who show up.', year: '2025', category: 'Events',
  },
  {
    id: 'g24', image: '/images/photos/stc2022-guests.webp', alt: 'Guests posing in front of the Stop The Cycle backdrop', title: 'The Community', caption: 'Connection makes growth possible.', year: '2022', category: 'Community',
  },
  {
    id: 'g25', image: '/images/photos/stc2022-guest.webp', alt: 'A guest at a Stop The Cycle event', title: 'Moving Forward', caption: 'A shared future starts with a shared commitment.', year: '2022', category: 'Behind the Scenes',
  },
];

export const galleryCategories = ['All', 'Summits', 'Events', 'Masterclasses', 'Community', 'Behind the Scenes'] as const;
export const galleryYears = ['All', ...Array.from(new Set(galleryItems.map((item) => item.year))).sort().reverse()];
