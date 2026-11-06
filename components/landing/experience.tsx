"use client";

import { experienceConfig, experienceSectionConfig } from "@/config/experience";
import Image from "next/image";
import { motion } from "motion/react";

const enabledExperience = experienceConfig
  .filter((item) => item.enabled !== false)
  .sort((a, b) => a.order - b.order);

export function Experience() {
  if (!enabledExperience.length) {
    return null;
  }

  return (
    <section className="border-t border-dashed pt-4">
      <h2 className="section-heading mb-2 font-sans">
        {experienceSectionConfig.title}
      </h2>
      <div className="space-y-3 px-6">
        {enabledExperience.map((item, idx) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: idx * 0.05 }}
            className="relative border border-dashed p-3 font-sans"
          >
            <h3 className="text-sm font-medium tracking-tight">{item.role}</h3>
            <div className="mt-1 flex items-center gap-2">
              {item.companyLogo && (
                <Image 
                  src={item.companyLogo} 
                  alt={`${item.company} logo`} 
                  width={24} 
                  height={24} 
                  className="size-6"
                />
              )}
              <p className="text-xs font-medium text-muted-foreground">
                {item.company}
              </p>
              {item.ycBadge && (
                <span className="rounded-sm bg-orange-500/10 px-1.5 py-0.5 text-[9px] font-medium text-orange-500">
                  YC S24
                </span>
              )}
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">
              <span className="font-mono text-[10px]">{item.period}</span>
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {item.summary}
            </p>
            {item.highlights?.length ? (
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-6 text-muted-foreground">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
