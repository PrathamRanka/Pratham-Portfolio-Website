'use client';

import Container from '@/components/common/Container';
import { ProjectList } from '@/components/projects/ProjectList';
import { Separator } from '@/components/ui/separator';
import { projects } from '@/config/Projects';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      {/* Clean Header Section */}
      <div className="relative border-b border-white/5 bg-neutral-950 py-32">
        <div className="absolute inset-0 [background-image:url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(67,56,202,0.1),transparent_70%)]" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-6xl font-black tracking-tight sm:text-8xl">
              Engineering <span className="text-indigo-500">Log</span>
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed font-medium text-neutral-400">
              A collection of high-ownership projects, infrastructure
              experiments, and scalable systems.
            </p>
          </motion.div>
        </Container>
      </div>

      <Container className="py-20">
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black tracking-tight">
              All Shipments
              {projects.length > 0 && (
                <span className="text-muted-foreground ml-3 text-sm font-normal tracking-widest uppercase opacity-50">
                  [{projects.length}]
                </span>
              )}
            </h2>
          </div>

          <Separator className="opacity-5" />

          <ProjectList projects={projects} />
        </div>
      </Container>
    </main>
  );
}
