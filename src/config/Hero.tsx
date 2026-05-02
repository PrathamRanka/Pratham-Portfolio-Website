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
import AWS from '@/components/technologies/AWS';
import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';

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
  title:
    'Software Engineer building scalable backend systems and product-first applications.',
  avatar: '/assets/pfp.png',

  // Skills Configuration
  skills: [
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    { name: 'React', href: 'https://react.dev/', component: 'ReactIcon' },
    { name: 'Next.js', href: 'https://nextjs.org/', component: 'NextJs' },
    { name: 'Node.js', href: 'https://nodejs.org/', component: 'NodeJs' },
    { name: 'Python', href: 'https://www.python.org/', component: null },
    { name: 'Go', href: 'https://go.dev/', component: null },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
    { name: 'MongoDB', href: 'https://www.mongodb.com/', component: 'MongoDB' },
    { name: 'Redis', href: 'https://redis.io/', component: null },
    { name: 'Kafka', href: 'https://kafka.apache.org/', component: null },
    { name: 'Docker', href: 'https://www.docker.com/', component: null },
    { name: 'Kubernetes', href: 'https://kubernetes.io/', component: null },
    { name: 'AWS', href: 'https://aws.amazon.com/', component: 'AWS' },
    { name: 'FastAPI', href: 'https://fastapi.tiangolo.com/', component: null },
    { name: 'Prisma', href: 'https://www.prisma.io/', component: 'Prisma' },
    { name: 'CI/CD', href: 'https://github.com/PrathamRanka', component: null },
  ],

  // Description Configuration
  description: {
    template:
      'I am a startup engineer who ships fast and owns products end-to-end. I specialize in distributed systems, scalable backend infrastructure, real-time architectures, and driving product execution from zero to one.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'default',
      text: 'View Projects',
      href: '/projects',
      icon: null,
    },
    {
      variant: 'outline',
      text: 'View Resume',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'outline',
      text: "Let's Build Together",
      href: 'https://wa.me/+917023206003', // Placeholder mail
      icon: 'Chat',
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
