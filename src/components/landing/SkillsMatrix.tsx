'use client';

import React from 'react';
import { motion } from 'framer-motion';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { skillsMatrix } from '@/config/Skills';

export default function SkillsMatrix() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Container className="mt-32">
      <SectionHeading subHeading="Technical Arsenal" heading="Skills Matrix" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {skillsMatrix.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-black/20"
          >
            {/* Subtle gradient glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            <h3 className="mb-6 text-lg font-semibold tracking-tight">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIdx) => (
                <div
                  key={skillIdx}
                  className="flex items-center gap-2 rounded-lg border border-black/5 bg-black/5 px-3 py-2 text-sm font-medium transition-colors hover:bg-black/10 dark:border-white/5 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  {skill.icon && (
                    <div className="flex size-5 items-center justify-center">
                      {skill.icon}
                    </div>
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}
