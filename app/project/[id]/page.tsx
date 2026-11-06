import { projectsConfig } from "@/config/projects";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectContent } from "./project-content";

export async function generateStaticParams() {
  return projectsConfig.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projectsConfig.find((p) => p.id === resolvedParams.id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const url = `${siteConfig.meta.url}/project/${project.id}`;

  return {
    title: project.title,
    description: project.description,
    keywords: [
      ...siteConfig.meta.keywords,
      ...project.tags,
      "portfolio project",
      "developer project",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: project.title,
      description: project.description,
      siteName: siteConfig.meta.shortTitle,
      images: [
        {
          url: project.image,
          alt: project.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      creator: siteConfig.meta.twitterCreator,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const enabled = [...projectsConfig]
    .filter((p) => p.enabled !== false)
    .sort((a, b) => a.order - b.order);
  const index = enabled.findIndex((p) => p.id === resolvedParams.id);
  const project = enabled[index];

  if (!project) {
    notFound();
  }

  const prev = index > 0 ? enabled[index - 1] : undefined;
  const next = index < enabled.length - 1 ? enabled[index + 1] : undefined;

  const projectUrl = `${siteConfig.meta.url}/project/${project.id}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@id": `${projectUrl}/#software`,
    name: project.title,
    description: project.description,
    url: projectUrl,
    image: `${siteConfig.meta.url}${project.image}`,
    codeRepository: project.liveUrl,
    programmingLanguage: project.tags,
    author: {
      "@id": `${siteConfig.meta.url}/#person`,
    },
    isPartOf: {
      "@id": `${siteConfig.meta.url}/#website`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectContent project={project} prev={prev} next={next} />
    </>
  );
}
