import { BottomNav } from "@/components/landing/bottom-nav";
import { FrameGutters } from "@/components/shared/frame-gutters";
import { PostHogProvider } from "@/components/shared/posthog-provider";
import { SiteHeader } from "@/components/shared/site-header";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { Metadata, Viewport } from "next";
import Script from "next/script";
import { DM_Sans, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
  ],
};

const DmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.meta.url),
  title: {
    default: siteConfig.meta.title,
    template: siteConfig.meta.titleTemplate,
  },
  description: siteConfig.meta.description,
  keywords: siteConfig.meta.keywords,
  authors: siteConfig.meta.authors,
  creator: siteConfig.meta.creator,
  publisher: siteConfig.meta.publisher,
  classification: siteConfig.meta.classification,
  category: siteConfig.meta.category,
  alternates: {
    canonical: siteConfig.meta.url,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.meta.locale,
    url: siteConfig.meta.url,
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    siteName: siteConfig.meta.shortTitle,
    images: [
      {
        url: siteConfig.meta.ogImage.url,
        width: siteConfig.meta.ogImage.width,
        height: siteConfig.meta.ogImage.height,
        alt: siteConfig.meta.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [siteConfig.meta.ogImage.url],
    creator: siteConfig.meta.twitterCreator,
  },
  icons: {
    icon: siteConfig.meta.icon,
    shortcut: siteConfig.meta.icon,
    apple: siteConfig.meta.appleIcon,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: siteConfig.meta.googleVerification || undefined,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.meta.url}/#website`,
      url: siteConfig.meta.url,
      name: siteConfig.meta.title,
      description: siteConfig.meta.description,
      publisher: {
        "@id": `${siteConfig.meta.url}/#person`,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.meta.url}/#person`,
      name: siteConfig.personal.fullName,
      url: siteConfig.meta.url,
      jobTitle: "Software Engineer",
      description: siteConfig.meta.description,
      knowsAbout: [
        "Next.js",
        "TypeScript",
        "Go",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Kubernetes",
        "Docker",
        "AWS",
        "DynamoDB",
        "Kafka",
        "FastAPI",
        "WebSockets",
      ],
      sameAs: [
        "https://github.com/PrathamRanka",
        "https://x.com/pr7ham_develops",
        "https://www.linkedin.com/in/prathamranka06/",
      ],
      image: `${siteConfig.meta.url}/profile.png`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-background font-sans",
        DmSans.variable,
        instrumentSerif.variable,
      )}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistMono.variable} antialiased`}
      >
        <noscript>
          <style>{`.no-js-visible { opacity: 1 !important; transform: none !important; stroke-dashoffset: 0 !important; stroke-dasharray: none !important; }`}</style>
        </noscript>
        <ThemeProvider>
          <TooltipProvider>
            <PostHogProvider>
              <SiteHeader />
              <FrameGutters />
              <div className="relative mx-auto w-full max-w-[var(--frame-max-w)]">
                <div className="relative w-full border-x bg-muted/20">
                  {children}
                </div>
                <BottomNav />
              </div>
            </PostHogProvider>
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
        <Script
          defer
          src="https://talvess.vercel.app/script.js"
          data-website-id="60de5aa9-eea8-4f05-b1d6-8a3d244d5644"
        />
      </body>
    </html>
  );
}
