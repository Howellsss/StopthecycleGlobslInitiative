export const organization = {
  name: 'Stop The Cycle',
  fullName: 'Stop The Cycle Initiative',
  parentOrg: 'Uche Juan Augustine Foundation',
  tagline: 'Equipping young people to lead what comes next.',
  brandStatement: 'It Starts With You.',
  city: 'Port Harcourt',
  country: 'Nigeria',
  email: 'hello@stopthecycle.org',
  // Enquiries & partnerships lines, as printed on the Global Summit 2026 poster.
  phones: [
    { display: '0903 406 7143', tel: '+2349034067143' },
    { display: '0814 218 6118', tel: '+2348142186118' },
    { display: '0703 853 0652', tel: '+2347038530652' },
  ],
  // Leave a link empty to hide its icon in the footer.
  social: {
    instagram: 'https://www.instagram.com/stopthecycleglobalsummit/',
    facebook: '',
    linkedin: '',
    youtube: '',
  },
};

/** Primary navigation shown in the header and mobile menu. */
export const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Summit', path: '/summits' },
  { label: 'Events', path: '/events' },
  { label: 'Gallery', path: '/gallery' },
];

/** Full list of pages, used in the footer. */
export const footerNavItems = [
  { label: 'Home', path: '/' },
  ...navItems,
  { label: "Founder's Snippets", path: '/founder-snippets' },
  { label: 'Join the Movement', path: '/join' },
];
