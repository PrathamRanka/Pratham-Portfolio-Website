'use client';

import Image from 'next/image';
import { experience } from '@/data/portfolio';
import { useExperienceController } from '@/controllers/portfolio.controller';
import { ChevronRightIcon } from '@/components/icons';

export function ExperienceView() {
  const { expandedIndex, toggleExpand } = useExperienceController(-1);

  return (
    <section id="experience" className="pt-8 pb-4" aria-labelledby="experience-heading">
      <hr className="border-neutral-800/80 mb-8" />
      <h2
        id="experience-heading"
        className="text-lg sm:text-xl font-bold text-white mb-5 tracking-tight"
      >
        Experience
      </h2>

      <div className="space-y-3">
        {experience.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <article
              key={item.company}
              className="rounded-xl border border-neutral-800/60 bg-neutral-950/40 hover:border-neutral-700/80 transition-colors p-3.5 sm:p-4"
            >
              <button
                type="button"
                onClick={() => toggleExpand(index)}
                className="w-full text-left flex items-start sm:items-center justify-between gap-3 focus:outline-none"
                aria-expanded={isExpanded}
                aria-controls={`exp-details-${index}`}
              >
                {/* Logo and Role Info */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center overflow-hidden shrink-0">
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                        {item.company}
                      </h3>
                    {item.badge && (
                      <span
                        className="inline-flex items-center gap-1.5 rounded-md border border-[#F26522]/25 bg-[#F26522]/[0.07] px-2 py-1"
                        aria-label={`Y Combinator ${item.badge.replace('YC ', '')}`}
                      >
                        {item.badge.startsWith('YC') && (
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] bg-[#F26522] text-[11px] font-extrabold leading-none text-white">
                            Y
                          </span>
                        )}
                        <span className="text-[11px] font-semibold tracking-tight text-[#F26522]">
                          {item.badge.startsWith('YC')
                            ? `Combinator ${item.badge.replace('YC ', '')}`
                            : item.badge}
                        </span>
                      </span>
                    )}
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-0.5 truncate">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Date and Expand Indicator */}
                <div className="flex items-center gap-2 shrink-0 text-right sm:text-left mt-1 sm:mt-0">
                  <span className="text-xs text-neutral-400 whitespace-nowrap">
                    {item.date}
                  </span>
                  <ChevronRightIcon
                    size={15}
                    className={`text-neutral-500 transition-transform duration-200 ${
                      isExpanded ? 'rotate-90 text-neutral-300' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Collapsible Details */}
              {isExpanded && (
                <div
                  id={`exp-details-${index}`}
                  className="mt-3 pt-3 border-t border-neutral-900 text-xs sm:text-sm text-neutral-400 leading-relaxed pl-13 sm:pl-13 animate-fadeIn"
                >
                  <p>{item.description}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
