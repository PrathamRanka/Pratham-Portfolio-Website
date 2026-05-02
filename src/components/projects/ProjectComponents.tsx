import Image from 'next/image';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import TechIcon from '../common/TechIcon';
import { CodeCopyButton } from '../blog/CodeCopyButton';

// Custom Technology component for displaying technology badges with icons
const Technology = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 p-3 backdrop-blur-sm transition-colors hover:bg-white/10">
      <TechIcon name={name} className="size-5" />
      <span className="text-xs font-semibold">{name}</span>
    </div>
  );
};

// Custom TechStack component for displaying multiple technologies
const TechStack = ({ technologies }: { technologies: string[] }) => {
  return (
    <div className="my-12 space-y-6">
      <h4 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Project Tech Stack</h4>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {technologies.map((tech) => (
          <Technology key={tech} name={tech} />
        ))}
      </div>
    </div>
  );
};

export const ProjectComponents = {
  img: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => (
    <div className="my-12 overflow-hidden rounded-3xl border border-white/5 shadow-2xl">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={600}
        className="w-full object-cover"
        {...props}
      />
      {alt && <p className="mt-4 text-center text-sm text-neutral-500 italic">{alt}</p>}
    </div>
  ),
  h1: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h1 className="mb-12 text-4xl font-black tracking-tight sm:text-5xl" {...props}>
      {children}
    </h1>
  ),
  h2: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h2 className="mt-20 mb-8 text-3xl font-bold tracking-tight" {...props}>
      {children}
    </h2>
  ),
  h3: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h3 className="mt-12 mb-6 text-2xl font-bold tracking-tight" {...props}>
      {children}
    </h3>
  ),
  p: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <p className="text-secondary mb-8 text-lg leading-relaxed" {...props}>
      {children}
    </p>
  ),
  ul: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <ul className="mb-12 ml-6 list-disc space-y-4" {...props}>
      {children}
    </ul>
  ),
  ol: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <ol className="mb-12 ml-6 list-decimal space-y-4" {...props}>
      {children}
    </ol>
  ),
  li: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <li className="text-secondary text-lg leading-relaxed" {...props}>
      {children}
    </li>
  ),
  pre: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => {
    const getTextContent = (node: React.ReactNode): string => {
      if (typeof node === 'string') return node;
      if (typeof node === 'number') return String(node);
      if (React.isValidElement(node) && node.props && typeof node.props === 'object') {
        return getTextContent((node.props as { children?: React.ReactNode }).children);
      }
      if (Array.isArray(node)) return node.map(getTextContent).join('');
      return '';
    };

    const codeText = getTextContent(children);

    return (
      <div className="group relative my-12 overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md">
        <pre className="overflow-x-auto p-6 text-sm leading-relaxed" {...props}>
          {children}
        </pre>
        <div className="absolute top-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
          <CodeCopyButton code={codeText} />
        </div>
      </div>
    );
  },
  code: ({
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
    [key: string]: unknown;
  }) => {
    if (className?.includes('language-')) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }

    return (
      <code className="rounded bg-white/10 px-2 py-0.5 font-mono text-sm" {...props}>
        {children}
      </code>
    );
  },
  blockquote: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <blockquote
      className="my-12 border-l-4 border-indigo-500 bg-indigo-500/5 py-8 pr-8 pl-12 italic"
      {...props}
    >
      <div className="text-secondary text-2xl leading-relaxed">
        {children}
      </div>
    </blockquote>
  ),

  // Project-specific components
  Technology,
  TechStack,
};
