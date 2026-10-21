
import { getEnabledComponents } from "@/config/components";
import { projectsConfig } from "@/config/projects";
import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseEntries = siteConfig.meta.sitemap
    .filter(
      (item) =>
        !item.url.endsWith("/testimonials") &&
        !item.url.endsWith("/components"),
    )
    .map((item) => ({ ...item }));

  const componentEntries: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.meta.url}/components`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...getEnabledComponents().map((component) => ({
      url: `${siteConfig.meta.url}/components/${component.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  const projectEntries: MetadataRoute.Sitemap = projectsConfig
    .filter((project) => project.enabled !== false)
    .map((project) => ({
      url: `${siteConfig.meta.url}/project/${project.id}`,
      lastModified: new Date(`${project.year}-01-01T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...baseEntries, ...componentEntries, ...projectEntries];
}
