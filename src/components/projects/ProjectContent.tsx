'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ProjectCaseStudyFrontmatter } from '@/types/project';
import { Link } from 'next-view-transitions';
import Github from '../svgs/Github';
import Website from '../svgs/Website';
import TechIcon from '../common/TechIcon';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ProjectComponents } from './ProjectComponents';
import rehypeHighlight from '@shikijs/rehype';

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

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const statusVariant =
    status === 'completed'
      ? 'default'
      : status === 'in-progress'
        ? 'secondary'
        : 'outline';

  return (
    <article className="relative">
      {/* Hero Header with Banner */}
      <div className="relative -mt-16 h-[60vh] min-h-[400px] w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src={image || '/project/abstract-banner.png'}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </motion.div>

        <Container className="relative z-10 flex h-full flex-col justify-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant={statusVariant} className="px-3 py-1 text-xs font-bold tracking-widest uppercase">
                {status}
              </Badge>
              {metrics?.map((metric, idx) => (
                <Badge key={idx} variant="outline" className="border-indigo-500/50 bg-indigo-500/10 text-indigo-400">
                  {metric}
                </Badge>
              ))}
            </div>

            <h1 className="text-5xl font-black tracking-tighter sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            
            <p className="text-secondary max-w-3xl text-xl font-medium leading-relaxed md:text-2xl">
              {description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {live && (
                <Button asChild size="lg" className="rounded-full px-8 shadow-xl shadow-primary/20">
                  <Link href={live} target="_blank" rel="noopener noreferrer">
                    <Website className="mr-2 size-5" />
                    Launch Live
                  </Link>
                </Button>
              )}
              {github && (
                <Button variant="outline" size="lg" asChild className="rounded-full border-white/10 bg-white/5 px-8 backdrop-blur-md">
                  <Link href={github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 size-5" />
                    View Codebase
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>
        </Container>
      </div>

      <Container className="relative z-10 -mt-10 grid grid-cols-1 gap-12 lg:grid-cols-4">
        {/* Sidebar Info */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-10">
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Technology Stack</h4>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech) => (
                  <div key={tech} className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 p-3 backdrop-blur-sm transition-colors hover:bg-white/10">
                    <TechIcon name={tech} className="size-5" />
                    <span className="text-xs font-semibold">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">Role</p>
                <p className="mt-1 text-sm font-semibold">{role}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">Timeline</p>
                <p className="mt-1 text-sm font-semibold">{timeline}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="lg:col-span-3">
          <div className="space-y-20 pb-32">
            {/* Engineering Case Study Sections */}
            {problem && (
              <section className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">The Problem</h2>
                <p className="text-secondary text-lg leading-relaxed">{problem}</p>
              </section>
            )}

            {architecture && (
              <section className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">System Architecture</h2>
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm">
                  <p className="text-secondary text-lg leading-relaxed">{architecture}</p>
                </div>
              </section>
            )}

            {performanceOptimizations && performanceOptimizations.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Performance & Optimization</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {performanceOptimizations.map((opt, i) => (
                    <div key={i} className="flex items-start gap-4 rounded-2xl border border-indigo-500/10 bg-indigo-500/5 p-6">
                      <div className="mt-1 text-indigo-500 italic">⚡</div>
                      <p className="text-sm font-medium leading-relaxed">{opt}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* MDX Content */}
            <section className="prose prose-neutral dark:prose-invert max-w-none prose-h2:text-3xl prose-h2:font-bold prose-p:text-lg prose-p:leading-relaxed prose-li:text-lg">
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

            {/* Infrastructure & Challenges Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              {challenges && challenges.length > 0 && (
                <div className="space-y-6 rounded-3xl border border-orange-500/10 bg-orange-500/5 p-8">
                  <h3 className="text-2xl font-bold text-orange-500">Challenges</h3>
                  <ul className="space-y-4">
                    {challenges.map((c, i) => (
                      <li key={i} className="text-secondary flex items-start gap-3 text-sm">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange-500" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {learnings && learnings.length > 0 && (
                <div className="space-y-6 rounded-3xl border border-emerald-500/10 bg-emerald-500/5 p-8">
                  <h3 className="text-2xl font-bold text-emerald-500">Key Learnings</h3>
                  <ul className="space-y-4">
                    {learnings.map((l, i) => (
                      <li key={i} className="text-secondary flex items-start gap-3 text-sm">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}

// Wrapper to include Container properly
function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
