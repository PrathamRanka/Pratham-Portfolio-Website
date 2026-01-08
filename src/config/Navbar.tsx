export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  pfp: {
    src: '/assets/pfp.png',
    alt: 'pfp',
    width: 100,
    height: 100,
  },
  navItems: [
    {
      label: 'Work',
      href: '/work-experience',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ] as NavItem[],
};
