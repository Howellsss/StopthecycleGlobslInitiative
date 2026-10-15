export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  title: string;
  caption: string;
  year: string;
  category: 'Summits' | 'Events' | 'Masterclasses' | 'Community' | 'Volunteers' | 'Behind the Scenes';
  /** Natural size of the photo, so the gallery can keep its true shape. */
  width?: number;
  height?: number;
}

export const galleryItems: GalleryItem[] = [
  // Global Summit 2026 — The Currencies of the Future. Photos by Chase Media.
  { id: 's26-01', image: '/images/summit-2026/stc2026-01-main-stage-speaker.webp', alt: 'A speaker in a white suit addressing the Global Summit 2026 audience', title: 'On the Main Stage', caption: 'The first voices of the day.', year: '2026', category: 'Summits', width: 1024, height: 1536 },
  { id: 's26-02', image: '/images/summit-2026/stc2026-02-speaker-purple-suit.webp', alt: 'A speaker in a purple suit speaking at the podium', title: 'Speaking With Conviction', caption: 'Ideas delivered with conviction.', year: '2026', category: 'Summits', width: 1024, height: 1280 },
  { id: 's26-03', image: '/images/summit-2026/stc2026-03-currencies-backdrop.webp', alt: 'A speaker at the podium in front of The Currencies of the Future backdrop', title: 'The Currencies of the Future', caption: 'The theme that set the tone for the day.', year: '2026', category: 'Summits', width: 1024, height: 683 },
  { id: 's26-04', image: '/images/summit-2026/stc2026-04-summit-stage.webp', alt: 'The Global Summit 2026 stage under the lights', title: 'The Main Stage', caption: 'Where the conversations began.', year: '2026', category: 'Summits', width: 1024, height: 580 },
  { id: 's26-05', image: '/images/summit-2026/stc2026-05-audience-young.webp', alt: 'Young people in the audience following a session', title: 'In the Audience', caption: 'A room ready to learn.', year: '2026', category: 'Summits', width: 1024, height: 683 },
  { id: 's26-06', image: '/images/summit-2026/stc2026-06-guests-of-honour.webp', alt: 'Guests in traditional attire seated at a front table', title: 'Guests of Honour', caption: 'Honoured guests at the summit.', year: '2026', category: 'Summits', width: 1024, height: 683 },
  { id: 's26-07', image: '/images/summit-2026/stc2026-07-welcome-team-signs.webp', alt: 'Volunteers holding Stop The Cycle campaign signs', title: 'The Welcome Team', caption: 'The message carried from the very first step.', year: '2026', category: 'Behind the Scenes', width: 1024, height: 683 },
  { id: 's26-08', image: '/images/summit-2026/stc2026-08-warm-welcome.webp', alt: 'Two guests embracing in the summit hall', title: 'A Warm Welcome', caption: 'Connections that last beyond the day.', year: '2026', category: 'Community', width: 1024, height: 683 },
  { id: 's26-09', image: '/images/summit-2026/stc2026-09-table-conversations.webp', alt: 'Guests talking together at their table', title: 'Table Conversations', caption: 'Conversations around the table.', year: '2026', category: 'Community', width: 1024, height: 612 },
  { id: 's26-10', image: '/images/summit-2026/stc2026-10-shared-laughter.webp', alt: 'Guests laughing together at their table', title: 'Shared Laughter', caption: 'Joy shared between sessions.', year: '2026', category: 'Community', width: 1024, height: 683 },
  { id: 's26-11', image: '/images/summit-2026/stc2026-11-hands-up.webp', alt: 'A guest raising her hands in celebration', title: 'Hands Up', caption: 'Moments worth celebrating.', year: '2026', category: 'Summits', width: 1024, height: 683 },
  { id: 's26-12', image: '/images/summit-2026/stc2026-12-joy-in-the-room.webp', alt: 'Women in the audience cheering', title: 'Joy in the Room', caption: 'Energy that filled the hall.', year: '2026', category: 'Summits', width: 1024, height: 683 },
  { id: 's26-13', image: '/images/summit-2026/stc2026-13-applause.webp', alt: 'Audience members applauding a speaker', title: 'Applause', caption: 'Applause for ideas that landed.', year: '2026', category: 'Summits', width: 1024, height: 683 },
  { id: 's26-14', image: '/images/summit-2026/stc2026-14-taking-notes.webp', alt: 'Guests writing notes during a session', title: 'Taking Notes', caption: 'Learning written down to take home.', year: '2026', category: 'Summits', width: 1024, height: 683 },
  { id: 's26-15', image: '/images/summit-2026/stc2026-15-full-house.webp', alt: 'A packed audience listening to a speaker', title: 'Full House', caption: 'A full house for the future.', year: '2026', category: 'Summits', width: 1024, height: 683 },
  { id: 's26-16', image: '/images/summit-2026/stc2026-16-listening-closely.webp', alt: 'Young people in white shirts listening to a speaker', title: 'Listening Closely', caption: 'Every word counted.', year: '2026', category: 'Summits', width: 1024, height: 683 },
  { id: 's26-17', image: '/images/summit-2026/stc2026-17-focused.webp', alt: 'Young people seated in the summit audience', title: 'Focused', caption: 'Present and paying attention.', year: '2026', category: 'Summits', width: 1024, height: 683 },
  { id: 's26-18', image: '/images/summit-2026/stc2026-18-keynote-justice-bello.webp', alt: 'Hon. Justice Mabel S. Bello delivering her keynote, her portrait on the screen behind her', title: 'Keynote: Hon. Justice Mabel S. Bello', caption: 'A keynote on the currencies of the future.', year: '2026', category: 'Summits', width: 1024, height: 683 },
  { id: 's26-19', image: '/images/summit-2026/stc2026-19-young-applause.webp', alt: 'Young women clapping in the audience', title: 'Applause', caption: 'Celebrating every insight.', year: '2026', category: 'Summits', width: 1024, height: 764 },
  { id: 's26-20', image: '/images/summit-2026/stc2026-20-podium-traditional.webp', alt: 'A speaker in traditional attire speaking at the podium', title: 'At the Podium', caption: 'Wisdom shared from the stage.', year: '2026', category: 'Summits', width: 1024, height: 1372 },
  { id: 's26-21', image: '/images/summit-2026/stc2026-21-keynote-niyi-adesanya.webp', alt: 'Dr. Niyi Adesanya delivering his keynote on stage', title: 'Keynote: Dr. Niyi Adesanya', caption: 'A keynote on building what lasts.', year: '2026', category: 'Summits', width: 1024, height: 683 },
  { id: 's26-22', image: '/images/summit-2026/stc2026-22-summit-family.webp', alt: 'A large group photo of guests and team in the summit hall', title: 'The Summit Family', caption: 'The people who made the day.', year: '2026', category: 'Community', width: 1024, height: 683 },
  { id: 's26-23', image: '/images/summit-2026/stc2026-23-on-stage.webp', alt: 'Speakers standing together on the summit stage', title: 'On Stage', caption: 'Voices of the summit.', year: '2026', category: 'Summits', width: 1024, height: 1536 },
  { id: 's26-24', image: '/images/summit-2026/stc2026-24-recognition.webp', alt: 'A guest receiving a certificate on stage', title: 'Recognition', caption: 'Honouring those who show up for others.', year: '2026', category: 'Summits', width: 1024, height: 683 },
  { id: 's26-25', image: '/images/summit-2026/stc2026-25-honoured.webp', alt: 'A guest receiving a certificate of recognition on stage', title: 'Honoured', caption: 'Recognition well deserved.', year: '2026', category: 'Summits', width: 1024, height: 683 },
  { id: 's26-26', image: '/images/summit-2026/stc2026-26-speaker-blue-suit.webp', alt: 'A speaker in a blue suit at the glass podium', title: 'Making the Point', caption: 'Ideas that challenge and inspire.', year: '2026', category: 'Summits', width: 1024, height: 683 },
  { id: 's26-27', image: '/images/summit-2026/stc2026-27-team-on-stage.webp', alt: 'Organisers and volunteers together on the summit stage', title: 'The Team on Stage', caption: 'The team behind Global Summit 2026.', year: '2026', category: 'Behind the Scenes', width: 1024, height: 683 },
  { id: 's26-28', image: '/images/summit-2026/stc2026-28-registration-desk.webp', alt: 'Volunteers welcoming guests at the registration desk', title: 'Registration Desk', caption: 'Every guest welcomed by name.', year: '2026', category: 'Behind the Scenes', width: 1024, height: 819 },
  { id: 's26-29', image: '/images/summit-2026/stc2026-29-ushers.webp', alt: 'The ushering team in front of the summit backdrop', title: 'The Ushers', caption: 'The team that kept the day running.', year: '2026', category: 'Behind the Scenes', width: 1024, height: 567 },
  { id: 's26-30', image: '/images/summit-2026/stc2026-30-red-carpet-interview.webp', alt: 'A guest being interviewed on the red carpet', title: 'On the Red Carpet', caption: 'Stories shared on the way in.', year: '2026', category: 'Events', width: 1024, height: 819 },
  { id: 's26-31', image: '/images/summit-2026/stc2026-31-carrying-the-message.webp', alt: 'Volunteers in matching outfits holding campaign signs', title: 'Carrying the Message', caption: 'It starts with you.', year: '2026', category: 'Behind the Scenes', width: 1024, height: 819 },
  { id: 's26-32', image: '/images/summit-2026/stc2026-32-justice-bello-stage.webp', alt: 'Hon. Justice Mabel S. Bello speaking on stage', title: 'Keynote Moment', caption: 'A keynote that held the room.', year: '2026', category: 'Summits', width: 1024, height: 1280 },
  { id: 's26-33', image: '/images/summit-2026/stc2026-33-in-full-flow.webp', alt: 'A speaker in a red cap delivering a talk', title: 'In Full Flow', caption: 'Passion on the main stage.', year: '2026', category: 'Summits', width: 1024, height: 1280 },
  { id: 's26-34', image: '/images/summit-2026/stc2026-34-panel-session.webp', alt: 'A panelist seated on stage during a panel session', title: 'Panel Session', caption: 'Perspectives from the panel.', year: '2026', category: 'Summits', width: 1024, height: 1280 },
  { id: 's26-35', image: '/images/summit-2026/stc2026-35-celebrating-together.webp', alt: 'The team and guests celebrating together on stage', title: 'Celebrating Together', caption: 'A celebration of what we built together.', year: '2026', category: 'Community', width: 1024, height: 576 },
  { id: 's26-36', image: '/images/summit-2026/stc2026-36-masterclass-facilitator.webp', alt: 'A facilitator teaching a masterclass session', title: 'Masterclass', caption: 'Practical lessons for building what lasts.', year: '2026', category: 'Masterclasses', width: 1024, height: 819 },
  { id: 's26-37', image: '/images/summit-2026/stc2026-37-teaching-moment.webp', alt: 'A facilitator making a point with a microphone', title: 'Teaching Moment', caption: 'Learning in the room.', year: '2026', category: 'Masterclasses', width: 1024, height: 1280 },
  { id: 's26-38', image: '/images/summit-2026/stc2026-38-ambidextrous-advantage.webp', alt: 'A facilitator presenting a slide on the Ambidextrous Advantage', title: 'The Ambidextrous Advantage', caption: 'Frameworks for sustainable business.', year: '2026', category: 'Masterclasses', width: 1024, height: 819 },
  { id: 's26-39', image: '/images/summit-2026/stc2026-39-question-from-floor.webp', alt: 'A young man asking a question during the session', title: 'A Question From the Floor', caption: 'Every question moves the room forward.', year: '2026', category: 'Masterclasses', width: 1024, height: 1280 },
  { id: 's26-40', image: '/images/summit-2026/stc2026-40-speaking-up.webp', alt: 'A young woman speaking during the session', title: 'Speaking Up', caption: 'Confidence, one question at a time.', year: '2026', category: 'Masterclasses', width: 1024, height: 1269 },
  { id: 's26-41', image: '/images/summit-2026/stc2026-41-class-of-2026.webp', alt: 'Participants of the Currencies for Building Sustainable Business & Career Empire session', title: 'Class of 2026', caption: 'Building a business and career that outlives you.', year: '2026', category: 'Masterclasses', width: 1024, height: 576 },
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
