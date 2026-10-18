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
      <h2 className="section-heading mb-2">{experienceSectionConfig.title}</h2>
      <div className="px-6 space-y-3">
        {enabledExperience.map((item, idx) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: idx * 0.05 }}
            className="border border-dashed p-3 relative"
          >
            <h3 className="text-sm font-semibold">{item.role}</h3>
            <div className="flex items-center gap-2 mt-1">
              {item.companyLogo && (
                <Image 
                  src={item.companyLogo} 
                  alt={`${item.company} logo`} 
                  width={24} 
                  height={24} 
                  className="w-6 h-6"
                />
              )}
              <p className="text-xs text-muted-foreground font-medium">{item.company}</p>
              {item.ycBadge && (
                <span className="text-[9px] px-1.5 py-0.5 bg-orange-500/10 text-orange-500 rounded-sm font-medium">
                  YC S24
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              <span className="font-mono text-[10px]">{item.period}</span>
            </p>
            <p className="mt-1.5 text-xs text-muted-foreground">{item.summary}</p>
            {item.highlights?.length ? (
              <ul className="mt-1.5 list-disc pl-4 text-xs text-muted-foreground space-y-0.5">
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
