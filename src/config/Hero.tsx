/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import AWS from '@/components/technologies/AWS';
import TailwindCss from '@/components/technologies/TailwindCss';
import SocketIo from '@/components/technologies/SocketIo';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  NodeJs: NodeJs,
  PostgreSQL: PostgreSQL,
  MongoDB: MongoDB,
  Prisma: Prisma,
  AWS: AWS,
  TailwindCss: TailwindCss,
  SocketIo: SocketIo,
};

export const heroConfig = {
  // Personal Information
  name: 'Pratham Ranka',
  title: 'A Full Stack web developer.',
  avatar: '/assets/pfp.png',

  // Skills Configuration
  skills: [
    { name: 'TypeScript', href: 'https://www.typescriptlang.org/', component: 'TypeScript' },
    { name: 'React', href: 'https://react.dev/', component: 'ReactIcon' },
    { name: 'Next.js', href: 'https://nextjs.org/', component: 'NextJs' },
    { name: 'Node.js', href: 'https://nodejs.org/', component: 'NodeJs' },
    { name: 'PostgreSQL', href: 'https://www.postgresql.org/', component: 'PostgreSQL' },
    { name: 'MongoDB', href: 'https://www.mongodb.com/', component: 'MongoDB' },
    { name: 'Prisma', href: 'https://www.prisma.io/', component: 'Prisma' },
    { name: 'WebSockets', href: 'https://socket.io/', component: 'SocketIo' },
    { name: 'Docker', href: 'https://www.docker.com/', component: null },
    { name: 'AWS', href: 'https://aws.amazon.com/', component: 'AWS' },
    { name: 'Redis', href: 'https://redis.io/', component: null },
    { name: 'Tailwind CSS', href: 'https://tailwindcss.com/', component: 'TailwindCss' },
    { name: 'System Design', href: '#', component: null },
    { name: 'APIs', href: '#', component: null },
    { name: 'Performance Optimization', href: '#', component: null },
  ],

  // Description Configuration
  description: {
    template:
      'I am Pratham Ranka, a software engineer who ships fast and owns products end-to-end. I specialize in architecting scalable backend systems, high-performance UIs, and real-time infrastructure for early-stage startups.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },

  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/pr7ham_develops',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prathamranka06/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/PrathamRanka',
    icon: <Github />,
  },
];
