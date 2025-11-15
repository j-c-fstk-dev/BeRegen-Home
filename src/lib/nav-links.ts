
export type NavLink = {
  name: string;
  href: string;
  description?: string;
  external?: boolean;
};

export const mainNavLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Ecosystem', href: '/ecosystem' },
  { name: 'RegenHub', href: '/hub' },
  { name: 'Roadmap', href: '/roadmap' },
  { name: 'Team', href: '/team' },
  { name: 'Tech', href: '/tech' },
  { name: 'Contact', href: '/contact' },
];

export const ecosystemLinks: NavLink[] = [
  { name: 'RegenHub', href: '/hub', description: 'Impact, Identity & Ecological Intelligence' },
  { name: 'RegenFlix', href: '/flix', description: 'Learning & Regenerative Media' },
  { name: 'RegenApp', href: '/app', description: 'Habits for Regeneration' },
  { name: 'RegenFund', href: '/fund', description: 'Community-Aligned Finance' },
];

export const footerLinks: { title: string, links: NavLink[] }[] = [
  {
    title: 'Ecosystem',
    links: [
        { name: 'RegenHub', href: '/hub' },
        { name: 'RegenFlix', href: '/flix' },
        { name: 'RegenApp', href: '/app' },
        { name: 'RegenFund', href: '/fund' },
    ]
  },
  {
    title: 'Foundation',
    links: [
      { name: 'About', href: '/foundation' },
      { name: 'Roadmap', href: '/roadmap' },
      { name: 'Transparency', href: '/transparency' },
      { name: 'Team', href: '/team' },
    ]
  },
  {
    title: 'Contact',
    links: [
      { name: 'hello@beregen.org', href: 'mailto:hello@beregen.org' },
      { name: 'Twitter: @beregen', href: 'https://twitter.com/beregen', external: true },
      { name: 'Contact Form', href: '/contact' },
    ]
  }
];

export const socialLinks: NavLink[] = [
    { name: 'Twitter', href: '#', external: true },
    { name: 'Discord', href: '#', external: true },
    { name: 'Github', href: '#', external: true },
    { name: 'LinkedIn', href: '#', external: true },
];

    