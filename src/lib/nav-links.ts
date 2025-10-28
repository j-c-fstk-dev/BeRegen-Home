export type NavLink = {
  name: string;
  href: string;
  description?: string;
  external?: boolean;
};

export const mainNavLinks: NavLink[] = [
  { name: 'Foundation', href: '/foundation' },
  { name: 'Community', href: '/community' },
  { name: 'Transparency', href: '/transparency' },
  { name: 'Updates', href: '/updates' },
];

export const ecosystemLinks: NavLink[] = [
  { name: 'BeRegen App', href: '/app', description: 'RegenTaskFlow – Productivity & regenerative habits' },
  { name: 'RegenHub', href: '/hub', description: 'Impact verification and certification' },
  { name: 'RegenFund', href: '/fund', description: 'Decentralized force financing real impact' },
  { name: 'RegenFlix', href: '/flix', description: 'Education for a regenerative life' },
  { name: 'RegenStore', href: '/store', description: 'Every purchase funds impact' },
];

export const footerLinks: { title: string, links: NavLink[] }[] = [
  {
    title: 'Ecosystem',
    links: [
      ...ecosystemLinks,
    ]
  },
  {
    title: 'Foundation',
    links: [
      { name: 'About Us', href: '/foundation' },
      { name: 'Transparency', href: '/transparency' },
      { name: 'Updates', href: '/updates' },
    ]
  },
  {
    title: 'Community',
    links: [
      { name: 'Support Us', href: '/community' },
      { name: 'Get Involved', href: '/community#get-involved' },
      { name: 'Patreon', href: '#', external: true },
      { name: 'Giveth', href: '#', external: true },
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Docs', href: '/docs' },
      { name: 'Brand Kit', href: '#' },
      { name: 'Contact Us', href: '#' },
    ]
  }
];

export const socialLinks: NavLink[] = [
    { name: 'Twitter', href: '#', external: true },
    { name: 'Discord', href: '#', external: true },
    { name: 'Github', href: '#', external: true },
    { name: 'LinkedIn', href: '#', external: true },
];
