import { type Experience } from '@/config/Experience';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Skill from '../common/Skill';
import Github from '../svgs/Github';
import LinkedIn from '../svgs/LinkedIn';
import Website from '../svgs/Website';
import X from '../svgs/X';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface ExperienceCardProps {
  experience: Experience;
  isPreview?: boolean;
}

export function ExperienceCard({
  experience,
  isPreview = false,
}: ExperienceCardProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Company Header */}
      <div className="flex flex-col gap-2 md:flex-row md:justify-between md:gap-4">
        {/* Left Side */}
        <div className="flex items-start gap-3 sm:items-center sm:gap-4">
          <Image
            src={experience.image}
            alt={experience.company}
            width={100}
            height={100}
            className="size-10 flex-shrink-0 rounded-md sm:size-12"
          />
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-1 sm:gap-2">
              <h3
                className={cn(
                  'text-base font-bold sm:text-lg md:text-xl',
                  experience.isBlur ? 'blur-[5px]' : 'blur-none',
                )}
              >
                {experience.company}
              </h3>
              {experience.badge && (
                <div className="flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-2 py-0.5 text-xs font-semibold text-orange-500 dark:border-orange-400/30 dark:text-orange-400">
                  {experience.badge}
                </div>
              )}
              {experience.website && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.website}
                      target="_blank"
                      className="size-4 text-neutral-500"
                    >
                      <Website />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Visit Website</TooltipContent>
                </Tooltip>
              )}
              {experience.x && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.x}
                      target="_blank"
                      className="size-4 text-neutral-500"
                    >
                      <X />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Follow on X</TooltipContent>
                </Tooltip>
              )}
              {experience.linkedin && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.linkedin}
                      target="_blank"
                      className="size-4 text-neutral-500"
                    >
                      <LinkedIn />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Connect on LinkedIn</TooltipContent>
                </Tooltip>
              )}
              {experience.github && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.github}
                      target="_blank"
                      className="size-4 text-neutral-500"
                    >
                      <Github />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>View GitHub</TooltipContent>
                </Tooltip>
              )}
              {experience.isCurrent && (
                <div className="flex items-center gap-1 rounded-md border-green-300 bg-green-500/10 px-2 py-1 text-xs">
                  <div className="size-2 animate-pulse rounded-full bg-green-500"></div>
                  Working
                </div>
              )}
            </div>
            <p>{experience.position}</p>
            {experience.metrics && experience.metrics.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {experience.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="flex items-center rounded-md border border-black/10 bg-black/5 px-2 py-1 text-[11px] font-medium tracking-wider text-neutral-600 uppercase dark:border-white/10 dark:bg-white/5 dark:text-neutral-400"
                  >
                    {metric}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Right Side */}
        <div className="text-secondary flex flex-col md:text-right">
          <p>
            {experience.startDate} -{' '}
            {experience.isCurrent ? 'Present' : experience.endDate}
          </p>
          <p>{experience.location}</p>
        </div>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-md mt-4 mb-2 font-semibold">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((technology, techIndex: number) => (
            <Skill
              key={techIndex}
              name={technology.name}
              href={technology.href}
            >
              {technology.icon}
            </Skill>
          ))}
        </div>
      </div>

      {/* Description */}
      <ul className="text-secondary marker:text-primary/50 flex list-disc flex-col space-y-2 pl-4">
        {(isPreview && experience.shortDescription
          ? experience.shortDescription
          : experience.description
        ).map((desc: React.ReactNode, descIndex: number) => (
          <li key={descIndex} className="pl-1">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
}
