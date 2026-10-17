import type { HackathonModel } from '@/models/portfolio.model';

export const hackathons: HackathonModel[] = [
  {
    name: 'NSUT Hack 2K25',
    award: 'Featured Project',
    date: '2025',
    location: 'New Delhi, India',
    description:
      'Engineered VIGIL OS Pro: a real-time fraud detection and vendor risk monitoring system with automated compliance verification, anomaly detection, and an interactive risk dashboard.',
    githubUrl: 'https://github.com/PrathamRanka/NSUT_HACK_2K25',
  },
  {
    name: 'AquaNexus — Pathogen Detection',
    award: 'Technical Showcase',
    date: '2025',
    location: 'Patiala, India',
    description:
      'AI-powered automated microorganism detection and water quality analysis system designed for rapid pathogen identification and environmental safety.',
    projectUrl: 'https://aquanexus.vercel.app',
    githubUrl: 'https://github.com/PrathamRanka/aquanexus',
  },
];
