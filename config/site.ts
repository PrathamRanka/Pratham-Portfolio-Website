import { socialsConfig } from "@/config/socials";
import type { AboutGreetings, AboutItem, FooterConfig, PortfolioConfig } from "@/config/types";

export const aboutGreetings: AboutGreetings = {
  morning: "Good morning !",
  afternoon: "Good afternoon !",
  evening: "Good evening !",
};

export const aboutItems: AboutItem[] = [
  {
    id: "build",
    lead: "I'm Pratham. I build distributed systems",
    illustration: "browser",
    body: "from backend infrastructure to scalable applications and production-ready software.",
  },
  {
    id: "share",
    lead: "I share the architecture decisions, code, and lessons",
    illustration: "notebook",
    body: "along the way, because the process is often more useful than a polished launch announcement.",
  },
  {
    id: "learn",
    lead: "Right now, I'm shipping scalable backend software",
    illustration: "plane",
    body: "and becoming a sharper engineer with every deployment.",
  },
];

export const footerConfig: FooterConfig = {
  quote: "The soul becomes dyed with the color of its thoughts.",
  attribution: "Marcus Aurelius",
  credit: "Made with <3 and lots of coffee.",
  artwork: {
    src: "/images/footer-garden-strip.webp",
    width: 1264,
    height: 600,
  },
};

export const siteConfig: PortfolioConfig = {
  meta: {
    url: "https://prathamranka.in",
    title: "Pratham Ranka — Backend Engineer",
    titleTemplate: "%s | Pratham Ranka",
    shortTitle: "Pratham Ranka",
    description:
      "Pratham is a TIET Computer Engineering student from the 2028 batch and an Indian software engineer specialising in backend and full-stack development.",
    keywords: [
      "Pratham Ranka",
      "backend engineer",
      "software engineer",
      "distributed systems",
      "production infrastructure",
      "open source",
      "Node.js",
      "TypeScript",
      "Go",
      "Kubernetes",
      "platform engineer",
      "cloud infrastructure engineer",
      "backend systems engineer",
      "software engineer India",
      "distributed systems engineer",
      "full-stack development",
      "fintech infrastructure",
      "AI agent infrastructure",
      "cloud-native software",
      "Thapar Institute of Engineering & Technology",
      "TIET",
      "Computer Engineering",
      "TIET COE 2028",
    ],
    authors: [{ name: "Pratham Ranka", url: "https://prathamranka.in" }],
    creator: "Pratham Ranka",
    publisher: "Pratham Ranka",
    classification: "Software engineering portfolio",
    category: "technology",
    locale: "en_IN",
    ogImage: {
      url: "/opengraph-image",
      width: 1200,
      height: 630,
      alt: "Pratham Ranka — Backend Engineer",
    },
    twitterCreator: "@pr7ham_develops",
    icon: "/favicon.svg",
    appleIcon: "/apple-touch-icon.png",
    googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
    manifest: {
      name: "Pratham Ranka — Backend Engineer",
      short_name: "Pratham",
      description: "Pratham builds distributed systems and shares the process in public.",
      start_url: "/",
      display: "standalone",
      background_color: "#030506",
      theme_color: "#050607",
      icons: [
        {
          src: "/favicon.ico",
          sizes: "any",
          type: "image/x-icon",
        },
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    robots: {
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      sitemap: "https://prathamranka.in/sitemap.xml",
    },
    sitemap: [
      { url: "https://prathamranka.in", changeFrequency: "weekly", priority: 1 },
      {
        url: "https://prathamranka.in/testimonials",
        changeFrequency: "monthly",
        priority: 0.6,
      },
      {
        url: "https://prathamranka.in/sponsor",
        changeFrequency: "monthly",
        priority: 0.6,
      },
    ],
  },
  personal: {
    fullName: "Pratham Ranka",
    firstName: "Pratham",
    avatar: {
      src: "/images/profile-cutout.webp",
      alt: "Portrait of Pratham Ranka",
      fallback: "PR",
    },
    location: {
      label: "Patiala, India",
      timeZone: "Asia/Kolkata",
    },
    githubUsername: "PrathamRanka",
  },
  sectionOrder: [
    "about",
    "experience",
    "projects",
    "skills",
    "sponsors",
    "github",    
    "socials",
  ],
  sectionFlags: {
    socials: true,
    skills: true,
    // components: true,
    about: true,
    // testimonials: true,
    projects: true,
    bookmarks: false,
    certifications: false,
    sponsors: true,
    experience: true,
    services: false,
    workflow: false,
    github: true,
    // contact: true,
  },
  banner: {
    imageSrc: "/images/profile-banner-cutout.webp",
    imageAlt: "Paper cutouts of a keyboard, notebook, paper plane, and coffee cup",
    openSourceUrl: "https://github.com/PrathamRanka/Portfolio-Website",
    openSourceTooltip: "This project is open source!",
    themeToggleLabel: "Toggle theme",
    themeShortcut: "D",
    themeTooltip: "Toggle theme",
    switchAudioSrc: "/switch.mp3",
  },
  about: {
    title: "Hello there !",
    body: aboutItems.map(({ lead, body }) => `${lead} ${body}`).join(" "),
  },
  services: {
    title: "What I build best",
    items: [
      "Backend systems, distributed infrastructure, and production-ready software.",
      "Full-stack applications with clear data models and fast delivery.",
      "Scalable services that need one strong feature shipped or a messy flow rebuilt without overengineering.",
    ],
  },
  workflow: {
    title: "How I run a project",
    items: [
      {
        label: "Scope",
        description:
          "We agree on one core workflow, fixed deliverables, and what is explicitly out of scope.",
      },
      {
        label: "Communication",
        description:
          "You get short async updates, working demos, and clear blockers instead of vague progress.",
      },
      {
        label: "Handoff",
        description:
          "I ship clean code, deployment support, and next-step recommendations after the first release.",
      },
    ],
  },
  contact: {
    title: "Follow the build, not just the launch",
    description:
      "On X, I share product progress, technical decisions, failed ideas, and the lessons that only appear after shipping.",
    pricing: [
      {
        label: "Minimum engagement",
        value: "$700",
        note: "A good fit for smaller scoped builds, feature sprints, or setup work.",
      },
      {
        label: "Typical MVP range",
        value: "$2.5k-$5k",
        note: "Most founder MVP builds land here once scope, integrations, and handoff are clear.",
      },
      {
        label: "How pricing works",
        value: "Final quote depends on scope",
        note: "Complex workflows, billing, roles, and admin tooling push projects higher.",
      },
    ],
    channels: socialsConfig.filter((item) =>
      ["email", "x", "discord"].includes(item.id),
    ),
  },
  bookmarks: {
    title: "Bookmarks",
    items: [],
  },
  certifications: {
    title: "Certificates",
    items: [],
  },
};
