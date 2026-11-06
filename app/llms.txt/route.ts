import { projectsConfig } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { skillsConfig } from "@/config/skills";
import { socialsConfig } from "@/config/socials";

const publicSkills = skillsConfig
  .filter((skill) => skill.enabled !== false)
  .map((skill) => skill.name)
  .join(", ");

const publicProfiles = socialsConfig
  .filter((social) => social.enabled !== false && social.href)
  .map((social) => `- ${social.platform}: ${social.href}`)
  .join("\n");

export function GET() {
  const projects = projectsConfig
    .filter((project) => project.enabled !== false)
    .sort((a, b) => a.order - b.order)
    .map(
      (project) =>
        `- [${project.title}](${siteConfig.meta.url}/project/${project.id}): ${project.description}`,
    )
    .join("\n");

  const content = `# ${siteConfig.personal.fullName}

> ${siteConfig.meta.description}

## About

${siteConfig.personal.fullName} is a Computer Engineering student at Thapar Institute of Engineering & Technology and a software engineer focused on backend engineering, distributed systems, infrastructure, and full-stack development. This portfolio is the canonical source for his projects, experience, skills, and public profiles.

## Work

${projects}

## Skills

${publicSkills}

## Contact and profiles

${publicProfiles}

- Email: mailto:prathamworks06@gmail.com

## Canonical pages

- Homepage: ${siteConfig.meta.url}
- Sitemap: ${siteConfig.meta.url}/sitemap.xml
- Full portfolio context: ${siteConfig.meta.url}/llms-full.txt
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
