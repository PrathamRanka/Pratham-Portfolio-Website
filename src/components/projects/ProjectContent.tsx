import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProjectCaseStudyFrontmatter } from '@/types/project';
import rehypeHighlight from '@shikijs/rehype';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Link } from 'next-view-transitions';
import React from 'react';

import TechIcon from '../common/TechIcon';
import Github from '../svgs/Github';
import Website from '../svgs/Website';
import { ProjectComponents } from './ProjectComponents';

interface ProjectContentProps {
  frontmatter: ProjectCaseStudyFrontmatter;
  content: string;
}

export function ProjectContent({ frontmatter, content }: ProjectContentProps) {
  const {
    title,
    description,
    image,
    technologies,
    github,
    live,
    timeline,
    role,
    status,
    challenges,
    learnings,
    problem,
    architecture,
    performanceOptimizations,
    infrastructure,
    metrics,
  } = frontmatter;

  const statusVariant =
    status === 'completed'
      ? 'default'
      : status === 'in-progress'
        ? 'secondary'
        : 'outline';

  const showLive = live && live !== github && live !== '/';

  return (
    <article className="bg-background relative">
      {/* Hero Header - Minimalist & Premium */}
      <div className="relative h-[65vh] min-h-[500px] w-full overflow-hidden border-b border-white/5 bg-neutral-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(67,56,202,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.8))]" />
          <div className="absolute inset-0 [background-image:url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        </div>

        <Container className="relative z-10 flex h-full flex-col justify-end pb-24">
          <div className="max-w-4xl space-y-8 text-left">
            <div className="flex flex-wrap items-center gap-4">
              <Badge
                variant={statusVariant}
                className="rounded-none border-none bg-indigo-500/10 px-2.5 py-0.5 text-[9px] font-black tracking-[0.2em] text-indigo-400 uppercase"
              >
                {status}
              </Badge>
              <div className="h-px w-8 bg-white/10" />
              {metrics?.map((metric, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-black tracking-[0.15em] text-neutral-500 uppercase"
                >
                  {metric}
                </span>
              ))}
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">
              {title}
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed font-medium text-neutral-400 md:text-xl">
              {description}
            </p>

            <div className="flex flex-wrap gap-5 pt-8">
              {github && (
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="h-12 rounded-none border-white/10 bg-white/5 px-10 transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <Link href={github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3 size-4" />
                    Codebase
                  </Link>
                </Button>
              )}
              {showLive && (
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-none bg-white px-10 text-black transition-all hover:bg-neutral-200"
                >
                  <Link href={live} target="_blank" rel="noopener noreferrer">
                    <Website className="mr-3 size-4" />
                    Live Preview
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Overview Grid */}
      <Container className="mt-20">
        <div className="grid grid-cols-1 gap-12 border-y border-white/5 py-16 md:grid-cols-3">
          <div>
            <h4 className="text-[10px] font-black tracking-[0.2em] text-indigo-500 uppercase">
              Role
            </h4>
            <p className="mt-2 text-lg font-bold">{role}</p>
          </div>
          <div>
            <h4 className="text-[10px] font-black tracking-[0.2em] text-indigo-500 uppercase">
              Timeline
            </h4>
            <p className="mt-2 text-lg font-bold">{timeline}</p>
          </div>
          <div>
            <h4 className="text-[10px] font-black tracking-[0.2em] text-indigo-500 uppercase">
              Infrastructure
            </h4>
            <p className="mt-2 text-lg font-bold">
              {infrastructure || 'Distributed'}
            </p>
          </div>
        </div>
      </Container>

      {/* Main Content Body */}
      <Container className="py-32">
        <div className="mx-auto max-w-4xl space-y-32">
          {/* Engineering Depth Sections */}
          {problem && (
            <section className="space-y-8">
              <h2 className="text-[10px] font-black tracking-[0.2em] text-indigo-500 uppercase">
                01. The Problem
              </h2>
              <p className="text-2xl leading-relaxed font-medium text-neutral-200">
                {problem}
              </p>
            </section>
          )}

          {architecture && (
            <section className="space-y-8">
              <h2 className="text-[10px] font-black tracking-[0.2em] text-indigo-500 uppercase">
                02. Architecture
              </h2>
              <div className="glass-morphism premium-glow rounded-[2.5rem] p-8 md:p-12">
                <p className="text-xl leading-relaxed text-neutral-300">
                  {architecture}
                </p>
              </div>
            </section>
          )}

          {/* Technology Highlights */}
          <section className="space-y-8">
            <h2 className="text-[10px] font-black tracking-[0.2em] text-indigo-500 uppercase">
              03. Tech Stack
            </h2>
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="glass-morphism flex items-center gap-3 rounded-2xl px-6 py-4 transition-all hover:bg-white/10"
                >
                  <TechIcon name={tech} className="size-6" />
                  <span className="text-sm font-bold tracking-tight">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Grid */}
          {performanceOptimizations && performanceOptimizations.length > 0 && (
            <section className="space-y-8">
              <h2 className="text-[10px] font-black tracking-[0.2em] text-indigo-500 uppercase">
                04. Optimization
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {performanceOptimizations.map((opt, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-4 rounded-[2rem] bg-neutral-900/50 p-8 ring-1 ring-white/5 transition-all hover:ring-indigo-500/30"
                  >
                    <div className="size-8 rounded-full bg-indigo-500/10 p-1.5 text-indigo-500">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                        />
                      </svg>
                    </div>
                    <p className="text-lg leading-snug font-semibold">{opt}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* MDX Content - The Detailed Story */}
          <section className="prose prose-neutral dark:prose-invert max-w-none">
            <MDXRemote
              source={content}
              components={ProjectComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [[rehypeHighlight, { theme: 'github-dark' }]],
                },
              }}
            />
          </section>

          {/* Challenges & Learnings */}
          <div className="grid gap-12 md:grid-cols-2">
            {challenges && challenges.length > 0 && (
              <div className="space-y-8">
                <h3 className="text-[10px] font-black tracking-[0.2em] text-orange-500 uppercase">
                  Challenges
                </h3>
                <ul className="space-y-4">
                  {challenges.map((c, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-orange-500" />
                      <p className="text-lg font-medium text-neutral-400">
                        {c}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {learnings && learnings.length > 0 && (
              <div className="space-y-8">
                <h3 className="text-[10px] font-black tracking-[0.2em] text-emerald-500 uppercase">
                  Learnings
                </h3>
                <ul className="space-y-4">
                  {learnings.map((l, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <p className="text-lg font-medium text-neutral-400">
                        {l}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </article>
  );
}

function Container({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
