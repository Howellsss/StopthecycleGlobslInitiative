export interface Story {
  id: string;
  name: string;
  category: string;
  excerpt: string;
  image: string;
  alt: string;
  isPlaceholder: boolean;
}

export const stories: Story[] = [
  {
    id: 's1',
    name: 'Participant Story',
    category: 'Program Participant',
    excerpt: 'A story about discovering possibility and taking the next step. Editable placeholder — replace with verified participant story.',
    image: '/images/photos/participant-listening.webp',
    alt: 'A participant listening during the Stop The Cycle Global Summit',
    isPlaceholder: true,
  },
  {
    id: 's2',
    name: 'Volunteer Story',
    category: 'Volunteer',
    excerpt: 'A story about serving behind the scenes and finding community. Editable placeholder — replace with verified volunteer story.',
    image: '/images/photos/media-desk.webp',
    alt: 'The Stop The Cycle team preparing a digital media session',
    isPlaceholder: true,
  },
  {
    id: 's3',
    name: 'Community Story',
    category: 'Life Class Member',
    excerpt: 'A story about growth, unlearning and finding direction. Editable placeholder — replace with verified community story.',
    image: '/images/photos/group-conversation.webp',
    alt: 'Young people gathered for a Stop The Cycle group conversation',
    isPlaceholder: true,
  },
];

export interface ImpactMetric {
  label: string;
  value: string;
  isPlaceholder: boolean;
}

export const impactMetrics: ImpactMetric[] = [
  { label: 'Young People Reached', value: '—', isPlaceholder: true },
  { label: 'Years of Work', value: '—', isPlaceholder: true },
  { label: 'Events', value: '—', isPlaceholder: true },
  { label: 'Summit Participants', value: '—', isPlaceholder: true },
  { label: 'Masterclasses', value: '—', isPlaceholder: true },
  { label: 'Communities Reached', value: '—', isPlaceholder: true },
];

export const partnerCategories = [
  'Strategic Partners',
  'Corporate Partners',
  'Media Partners',
  'Education Partners',
  'Community Partners',
];
