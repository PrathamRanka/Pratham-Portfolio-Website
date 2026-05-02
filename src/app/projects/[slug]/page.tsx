import { ProjectContent } from '@/components/projects/ProjectContent';
import { ProjectNavigation } from '@/components/projects/ProjectNavigation';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/config/Meta';
import {
  getProjectCaseStudyBySlug,
  getProjectCaseStudySlugs,
  getProjectNavigation,
  getRelatedProjectCaseStudies,
} from '@/lib/project';
import { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

interface ProjectCaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all project case studies
export async function generateStaticParams() {
  const slugs = getProjectCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each project case study
export async function generateMetadata({
  params,
}: ProjectCaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getProjectCaseStudyBySlug(slug);

  if (!caseStudy || !caseStudy.frontmatter.isPublished) {
    return { title: 'Project Not Found' };
  }

  const { title, description, image } = caseStudy.frontmatter;

  return {
    metadataBase: new URL(siteConfig.url),
    title: `${title} — Engineering Case Study`,
    description,
    openGraph: {
      title: `${title} — Engineering Case Study`,
      description,
      images: [image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — Engineering Case Study`,
      description,
      images: [image],
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectCaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = await getProjectCaseStudyBySlug(slug);

  if (!caseStudy || !caseStudy.frontmatter.isPublished) {
    notFound();
  }

  const navigation = await getProjectNavigation(slug);
  const relatedProjects = await getRelatedProjectCaseStudies(slug, 2);

  return (
    <main className="min-h-screen">
      {/* Main Project Content - Handles its own containers and Hero */}
      <ProjectContent
        frontmatter={caseStudy.frontmatter}
        content={caseStudy.content}
      />

      {/* Post-Content Section */}
      <div className="mx-auto max-w-7xl px-6 pb-32 lg:px-8">
        <Separator className="mb-20 opacity-5" />

        {/* Project Navigation */}
        <div className="mb-32">
          <ProjectNavigation
            previous={navigation.previous}
            next={navigation.next}
          />
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="space-y-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-[10px] font-black tracking-[0.2em] text-indigo-500 uppercase">
                Next Steps
              </h2>
              <h3 className="text-4xl font-black tracking-tight md:text-5xl">
                Related Case Studies
              </h3>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group"
                >
                  <div className="glass-morphism premium-glow overflow-hidden rounded-[2.5rem] p-4 transition-all duration-500 hover:bg-white/[0.07]">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem]">
                      <Image
                        src={project.frontmatter.image}
                        alt={project.frontmatter.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div className="p-6">
                      <h4 className="text-2xl font-black tracking-tight transition-colors group-hover:text-indigo-400">
                        {project.frontmatter.title}
                      </h4>
                      <p className="text-secondary mt-4 line-clamp-2 text-lg">
                        {project.frontmatter.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
