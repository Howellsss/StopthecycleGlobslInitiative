/** Global Summit 2026 photo story. Photos by Chase Media. */

export interface StoryPhoto {
  image: string;
  alt: string;
  title: string;
  caption: string;
  width: number;
  height: number;
}

export interface StoryChapter {
  id: string;
  title: string;
  heading: string;
  intro: string;
  photos: StoryPhoto[];
}

export const summit2026Chapters: StoryChapter[] = [
  {
    id: 'arrival',
    title: "Arrival",
    heading: "Before the first word was spoken",
    intro: "The day began at the door. Volunteers carried the message, ushers welcomed every guest by name, and the red carpet filled with stories.",
    photos: [
      { image: '/images/summit-2026/stc2026-07-welcome-team-signs.webp', alt: 'Volunteers holding Stop The Cycle campaign signs', title: 'The Welcome Team', caption: 'The message carried from the very first step.', width: 1024, height: 683 },
      { image: '/images/summit-2026/stc2026-28-registration-desk.webp', alt: 'Volunteers welcoming guests at the registration desk', title: 'Registration Desk', caption: 'Every guest welcomed by name.', width: 1024, height: 819 },
      { image: '/images/summit-2026/stc2026-29-ushers.webp', alt: 'The ushering team in front of the summit backdrop', title: 'The Ushers', caption: 'The team that kept the day running.', width: 1024, height: 567 },
      { image: '/images/summit-2026/stc2026-30-red-carpet-interview.webp', alt: 'A guest being interviewed on the red carpet', title: 'On the Red Carpet', caption: 'Stories shared on the way in.', width: 1024, height: 819 },
      { image: '/images/summit-2026/stc2026-31-carrying-the-message.webp', alt: 'Volunteers in matching outfits holding campaign signs', title: 'Carrying the Message', caption: 'It starts with you.', width: 1024, height: 819 },
      { image: '/images/summit-2026/stc2026-08-warm-welcome.webp', alt: 'Two guests embracing in the summit hall', title: 'A Warm Welcome', caption: 'Connections that last beyond the day.', width: 1024, height: 683 },
    ],
  },
  {
    id: 'main-stage',
    title: "The Main Stage",
    heading: "Ideas under the lights",
    intro: "Speaker after speaker took the stage to unpack The Currencies of the Future: knowledge, relationships, influence and purpose.",
    photos: [
      { image: '/images/summit-2026/stc2026-04-summit-stage.webp', alt: 'The Global Summit 2026 stage under the lights', title: 'The Main Stage', caption: 'Where the conversations began.', width: 1024, height: 580 },
      { image: '/images/summit-2026/stc2026-03-currencies-backdrop.webp', alt: 'A speaker at the podium in front of The Currencies of the Future backdrop', title: 'The Currencies of the Future', caption: 'The theme that set the tone for the day.', width: 1024, height: 683 },
      { image: '/images/summit-2026/stc2026-01-main-stage-speaker.webp', alt: 'A speaker in a white suit addressing the Global Summit 2026 audience', title: 'On the Main Stage', caption: 'The first voices of the day.', width: 1024, height: 1536 },
      { image: '/images/summit-2026/stc2026-02-speaker-purple-suit.webp', alt: 'A speaker in a purple suit speaking at the podium', title: 'Speaking With Conviction', caption: 'Ideas delivered with conviction.', width: 1024, height: 1280 },
      { image: '/images/summit-2026/stc2026-20-podium-traditional.webp', alt: 'A speaker in traditional attire speaking at the podium', title: 'At the Podium', caption: 'Wisdom shared from the stage.', width: 1024, height: 1372 },
      { image: '/images/summit-2026/stc2026-26-speaker-blue-suit.webp', alt: 'A speaker in a blue suit at the glass podium', title: 'Making the Point', caption: 'Ideas that challenge and inspire.', width: 1024, height: 683 },
      { image: '/images/summit-2026/stc2026-33-in-full-flow.webp', alt: 'A speaker in a red cap delivering a talk', title: 'In Full Flow', caption: 'Passion on the main stage.', width: 1024, height: 1280 },
      { image: '/images/summit-2026/stc2026-34-panel-session.webp', alt: 'A panelist seated on stage during a panel session', title: 'Panel Session', caption: 'Perspectives from the panel.', width: 1024, height: 1280 },
      { image: '/images/summit-2026/stc2026-23-on-stage.webp', alt: 'Speakers standing together on the summit stage', title: 'On Stage', caption: 'Voices of the summit.', width: 1024, height: 1536 },
    ],
  },
  {
    id: 'keynotes',
    title: "The Keynotes",
    heading: "Two voices that held the room",
    intro: "Hon. Justice Mabel S. Bello and Dr. Niyi Adesanya delivered the keynotes of the day.",
    photos: [
      { image: '/images/summit-2026/stc2026-18-keynote-justice-bello.webp', alt: 'Hon. Justice Mabel S. Bello delivering her keynote, her portrait on the screen behind her', title: 'Keynote: Hon. Justice Mabel S. Bello', caption: 'A keynote on the currencies of the future.', width: 1024, height: 683 },
      { image: '/images/summit-2026/stc2026-32-justice-bello-stage.webp', alt: 'Hon. Justice Mabel S. Bello speaking on stage', title: 'Keynote Moment', caption: 'A keynote that held the room.', width: 1024, height: 1280 },
      { image: '/images/summit-2026/stc2026-21-keynote-niyi-adesanya.webp', alt: 'Dr. Niyi Adesanya delivering his keynote on stage', title: 'Keynote: Dr. Niyi Adesanya', caption: 'A keynote on building what lasts.', width: 1024, height: 683 },
    ],
  },
  {
    id: 'the-room',
    title: "The Room",
    heading: "A movement is measured by the people who show up",
    intro: "Hundreds of young people, professionals and guests of honour listened, wrote, laughed and stood to applaud.",
    photos: [
      { image: '/images/summit-2026/stc2026-15-full-house.webp', alt: 'A packed audience listening to a speaker', title: 'Full House', caption: 'A full house for the future.', width: 1024, height: 683 },
      { image: '/images/summit-2026/stc2026-05-audience-young.webp', alt: 'Young people in the audience following a session', title: 'In the Audience', caption: 'A room ready to learn.', width: 1024, height: 683 },
      { image: '/images/summit-2026/stc2026-06-guests-of-honour.webp', alt: 'Guests in traditional attire seated at a front table', title: 'Guests of Honour', caption: 'Honoured guests at the summit.', width: 1024, height: 683 },
      { image: '/images/summit-2026/stc2026-16-listening-closely.webp', alt: 'Young people in white shirts listening to a speaker', title: 'Listening Closely', caption: 'Every word counted.', width: 1024, height: 683 },
      { image: '/images/summit-2026/stc2026-17-focused.webp', alt: 'Young people seated in the summit audience', title: 'Focused', caption: 'Present and paying attention.', width: 1024, height: 683 },
      { image: '/images/summit-2026/stc2026-14-taking-notes.webp', alt: 'Guests writing notes during a session', title: 'Taking Notes', caption: 'Learning written down to take home.', width: 1024, height: 683 },
      { image: '/images/summit-2026/stc2026-09-table-conversations.webp', alt: 'Guests talking together at their table', title: 'Table Conversations', caption: 'Conversations around the table.', width: 1024, height: 612 },
      { image: '/images/summit-2026/stc2026-10-shared-laughter.webp', alt: 'Guests laughing together at their table', title: 'Shared Laughter', caption: 'Joy shared between sessions.', width: 1024, height: 683 },
      { image: '/images/summit-2026/stc2026-11-hands-up.webp', alt: 'A guest raising her hands in celebration', title: 'Hands Up', caption: 'Moments worth celebrating.', width: 1024, height: 683 },
      { image: '/images/summit-2026/stc2026-12-joy-in-the-room.webp', alt: 'Women in the audience cheering', title: 'Joy in the Room', caption: 'Energy that filled the hall.', width: 1024, height: 683 },
      { image: '/images/summit-2026/stc2026-13-applause.webp', alt: 'Audience members applauding a speaker', title: 'Applause', caption: 'Applause for ideas that landed.', width: 1024, height: 683 },
      { image: '/images/summit-2026/stc2026-19-young-applause.webp', alt: 'Young women clapping in the audience', title: 'Applause', caption: 'Celebrating every insight.', width: 1024, height: 764 },
    ],
  },
  {
    id: 'honours',
    title: "Honours & Celebration",
    heading: "Recognising those who show up for others",
    intro: "Certificates of recognition were presented on stage, and the day closed in celebration.",
    photos: [
      { image: '/images/summit-2026/stc2026-24-recognition.webp', alt: 'A guest receiving a certificate on stage', title: 'Recognition', caption: 'Honouring those who show up for others.', width: 1024, height: 683 },
      { image: '/images/summit-2026/stc2026-25-honoured.webp', alt: 'A guest receiving a certificate of recognition on stage', title: 'Honoured', caption: 'Recognition well deserved.', width: 1024, height: 683 },
      { image: '/images/summit-2026/stc2026-35-celebrating-together.webp', alt: 'The team and guests celebrating together on stage', title: 'Celebrating Together', caption: 'A celebration of what we built together.', width: 1024, height: 576 },
    ],
  },
  {
    id: 'masterclass',
    title: "The Masterclass",
    heading: "Currencies for building a sustainable business and career empire",
    intro: "A hands-on session on how to build wealth that outlives you, with frameworks, questions from the floor and a class photo to remember it by.",
    photos: [
      { image: '/images/summit-2026/stc2026-41-class-of-2026.webp', alt: 'Participants of the Currencies for Building Sustainable Business & Career Empire session', title: 'Class of 2026', caption: 'Building a business and career that outlives you.', width: 1024, height: 576 },
      { image: '/images/summit-2026/stc2026-36-masterclass-facilitator.webp', alt: 'A facilitator teaching a masterclass session', title: 'Masterclass', caption: 'Practical lessons for building what lasts.', width: 1024, height: 819 },
      { image: '/images/summit-2026/stc2026-37-teaching-moment.webp', alt: 'A facilitator making a point with a microphone', title: 'Teaching Moment', caption: 'Learning in the room.', width: 1024, height: 1280 },
      { image: '/images/summit-2026/stc2026-38-ambidextrous-advantage.webp', alt: 'A facilitator presenting a slide on the Ambidextrous Advantage', title: 'The Ambidextrous Advantage', caption: 'Frameworks for sustainable business.', width: 1024, height: 819 },
      { image: '/images/summit-2026/stc2026-39-question-from-floor.webp', alt: 'A young man asking a question during the session', title: 'A Question From the Floor', caption: 'Every question moves the room forward.', width: 1024, height: 1280 },
      { image: '/images/summit-2026/stc2026-40-speaking-up.webp', alt: 'A young woman speaking during the session', title: 'Speaking Up', caption: 'Confidence, one question at a time.', width: 1024, height: 1269 },
    ],
  },
  {
    id: 'the-team',
    title: "The Team",
    heading: "The people behind Global Summit 2026",
    intro: "Organisers, volunteers and partners who made the day possible.",
    photos: [
      { image: '/images/summit-2026/stc2026-27-team-on-stage.webp', alt: 'Organisers and volunteers together on the summit stage', title: 'The Team on Stage', caption: 'The team behind Global Summit 2026.', width: 1024, height: 683 },
      { image: '/images/summit-2026/stc2026-22-summit-family.webp', alt: 'A large group photo of guests and team in the summit hall', title: 'The Summit Family', caption: 'The people who made the day.', width: 1024, height: 683 },
    ],
  },
];

export const summit2026Photos: StoryPhoto[] = summit2026Chapters.flatMap((chapter) => chapter.photos);
