import { projectsConfig } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { skillsConfig } from "@/config/skills";
import { socialsConfig } from "@/config/socials";

export function GET() {
  const projects = projectsConfig
    .filter((project) => project.enabled !== false)
    .sort((a, b) => a.order - b.order)
    .map(
      (project) => `## ${project.title}

URL: ${siteConfig.meta.url}/project/${project.id}
Repository: ${project.liveUrl}
Category: ${project.category}
Year: ${project.year}
Technologies: ${project.tags.join(", ")}

${project.description}

${project.content}`,
    )
    .join("\n\n");

  const skills = skillsConfig
    .filter((skill) => skill.enabled !== false)
    .map((skill) => skill.name)
    .join(", ");

  const profiles = socialsConfig
    .filter((social) => social.enabled !== false && social.href)
    .map((social) => `- ${social.platform}: ${social.href}`)
    .join("\n");

  const content = `# ${siteConfig.personal.fullName}, full portfolio context

Canonical URL: ${siteConfig.meta.url}

## Professional identity

${siteConfig.meta.description}

${siteConfig.personal.fullName} is a Computer Engineering student at Thapar Institute of Engineering & Technology and a software engineer focused on backend engineering, distributed systems, infrastructure, and full-stack development. He is interested in AI infrastructure, agentic systems, cloud engineering, developer tools, and scalable backend architectures. He is open to software engineering internships, backend engineering, infrastructure engineering, AI engineering, and related technical opportunities.

## Skills

${skills}

## Experience

The homepage contains the current experience timeline and its factual descriptions. See ${siteConfig.meta.url}/#experience.

## Projects

${projects}

## Public profiles

${profiles}

- Email: mailto:prathamworks06@gmail.com

This file describes the public content available on the portfolio. It does not guarantee indexing, ranking, or citation by any search engine or AI system.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
