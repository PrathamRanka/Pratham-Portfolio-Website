import { about, mySkills } from '@/config/About';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function About() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />
      {/* About me */}
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-8">
        <Image
          src="/assets/pfp.png"
          alt="About"
          width={100}
          height={100}
          className="border-secondary size-40 flex-shrink-0 rounded-md border-2 bg-blue-300 sm:size-56 md:size-60 dark:bg-yellow-300"
        />
        <div className="mt-0 md:mt-0">
          <h3 className="text-xl font-bold sm:text-2xl md:text-3xl">
            {about.name}
          </h3>
          <p className="text-secondary mt-4 text-sm sm:text-base">
            {about.description}
          </p>
          <p className="text-secondary mt-6 text-sm font-bold sm:mt-8 sm:text-base">
            Skills
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {mySkills.map((skill) => (
              <Tooltip key={skill.key}>
                <TooltipTrigger asChild>
                  <div className="size-5 transition-transform hover:scale-110 hover:cursor-pointer sm:size-6">
                    {skill}
                  </div>
                </TooltipTrigger>
                <TooltipContent>{skill.key}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
