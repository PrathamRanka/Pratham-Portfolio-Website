import { experienceConfig } from "@/config/experience";
import { projectsConfig } from "@/config/projects";
import { resumeConfig } from "@/config/resume";
import { siteConfig } from "@/config/site";
import { skillsConfig } from "@/config/skills";
import type { Metadata } from "next";
import Link from "next/link";

const enabledExperience = experienceConfig
  .filter((item) => item.enabled !== false)
  .sort((a, b) => a.order - b.order);

const enabledProjects = projectsConfig
  .filter((project) => project.enabled !== false)
  .sort((a, b) => a.order - b.order);

const enabledSkills = skillsConfig
  .filter((skill) => skill.enabled !== false)
  .sort((a, b) => a.order - b.order);

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Pratham Ranka, a Computer Engineering student and software engineer focused on backend systems, infrastructure, and full-stack development.",
  alternates: {
    canonical: `${siteConfig.meta.url}/resume`,
  },
  openGraph: {
    type: "profile",
    url: `${siteConfig.meta.url}/resume`,
    title: "Pratham Ranka | Resume",
    description:
      "Experience, projects, technical skills, and contact information for Pratham Ranka.",
    siteName: siteConfig.meta.shortTitle,
  },
  twitter: {
    card: "summary",
    title: "Pratham Ranka | Resume",
    description:
      "Experience, projects, technical skills, and contact information for Pratham Ranka.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteConfig.meta.url}/resume#profile`,
  url: `${siteConfig.meta.url}/resume`,
  name: "Pratham Ranka | Resume",
  description: metadata.description,
  mainEntity: {
    "@type": "Person",
    "@id": `${siteConfig.meta.url}/#person`,
    name: siteConfig.personal.fullName,
    url: siteConfig.meta.url,
    jobTitle: "Software Engineer",
    sameAs: [
      "https://github.com/PrathamRanka",
      "https://x.com/pr7ham_develops",
      "https://www.linkedin.com/in/prathamranka06/",
    ],
  },
};

export default function ResumePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative min-h-dvh bg-background px-6 pb-16 pt-8 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 text-xs text-muted-foreground"
          >
            <Link href="/" className="underline underline-offset-4">
              Home
            </Link>{" "}
            / Resume
          </nav>

          <header className="border-b border-dashed pb-6">
            <p className="font-mono text-xs text-muted-foreground">
              {siteConfig.personal.location.label}
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">
              {siteConfig.personal.fullName}
            </h1>
            <p className="mt-2 text-base text-muted-foreground">
              Computer Engineering student and software engineer focused on
              backend systems, distributed infrastructure, and full-stack
              development.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <a
                href={resumeConfig.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-primary px-3 py-2 text-primary-foreground"
              >
                View resume PDF
              </a>
              <a
                href={resumeConfig.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-dashed px-3 py-2"
              >
                Download PDF
              </a>
              <a
                href="mailto:prathamworks06@gmail.com"
                className="rounded-sm border border-dashed px-3 py-2"
              >
                Contact Pratham
              </a>
            </div>
          </header>

          <section aria-labelledby="education" className="border-b border-dashed py-6">
            <h2 id="education" className="text-lg font-semibold tracking-tight">
              Education
            </h2>
            <h3 className="mt-3 text-sm font-medium">
              Thapar Institute of Engineering &amp; Technology
            </h3>
            <p className="text-sm text-muted-foreground">
              Computer Engineering, 2028 batch
            </p>
          </section>

          <section aria-labelledby="experience" className="border-b border-dashed py-6">
            <h2 id="experience" className="text-lg font-semibold tracking-tight">
              Experience
            </h2>
            <div className="mt-4 space-y-5">
              {enabledExperience.map((item) => (
                <article key={item.id}>
                  <h3 className="text-sm font-medium">
                    {item.role}, {item.company}
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    {item.period}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="skills" className="border-b border-dashed py-6">
            <h2 id="skills" className="text-lg font-semibold tracking-tight">
              Technical skills
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {enabledSkills.map((skill) => skill.name).join(" · ")}
            </p>
          </section>

          <section aria-labelledby="projects" className="border-b border-dashed py-6">
            <h2 id="projects" className="text-lg font-semibold tracking-tight">
              Selected projects
            </h2>
            <div className="mt-4 space-y-5">
              {enabledProjects.map((project) => (
                <article key={project.id}>
                  <h3 className="text-sm font-medium">
                    <Link
                      href={`/project/${project.id}`}
                      className="underline decoration-border/60 underline-offset-4"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {project.tags.join(" · ")}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <footer className="pt-6 text-sm text-muted-foreground">
            <p>
              Open to software engineering internships, backend and
              infrastructure roles, AI engineering, and technical
              collaborations.
            </p>
            <div className="mt-3 flex flex-wrap gap-4">
              <Link href="/#experience" className="underline underline-offset-4">
                Experience on homepage
              </Link>
              <Link href="/#contact" className="underline underline-offset-4">
                Contact on homepage
              </Link>
              <Link href="/" className="underline underline-offset-4">
                Back to homepage
              </Link>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
