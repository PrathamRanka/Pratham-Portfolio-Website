import { skillsConfig, skillsSectionConfig } from "@/config/skills";
import type { SkillItem } from "@/config/types";
import { cn } from "@/lib/utils";
import AiSdk from "@/public/stacks/ai-sdk";
import AuthIcon from "@/public/stacks/auth";
import CursorIcon from "@/public/stacks/cursor";
import PrismaIcon from "@/public/stacks/prisma";
import ReactIcon from "@/public/stacks/react";
import ShadcnIcon from "@/public/stacks/shadcn";
import TailwindIcon from "@/public/stacks/tailwind";
import TrpcIcon from "@/public/stacks/trcp";
import type { ComponentType } from "react";
import { BsClaude } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import {
  // SiAmazondynamodb,
  SiApachekafka,
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiGo,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReactquery,
  SiRedis,
  SiSocketdotio,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

const skillColorMap: Record<string, string> = {
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  go: "#00ADD8",
  python: "#3776AB",
  cplusplus: "#00599C",
  nodejs: "#5FA04E",
  fastapi: "#009688",
  websocket: "#FFFFFF",
  nextjs: "#FFFFFF",
  postgresql: "#4169E1",
  dynamodb: "#4053D6",
  redis: "#DC382D",
  kafka: "#FFFFFF",
  mongodb: "#47A248",
  docker: "#2496ED",
  kubernetes: "#326CE5",
  githubactions: "#2088FF",
  terraform: "#7B42BC",
  linkedin: "#0A66C2",
  tanstack: "#FF4154",
};

const skillIconMap: Record<string, ComponentType<{ size: string }>> = {
  // frameworks / tooling
  nextjs: SiNextdotjs,
  react: ReactIcon,
  tailwind: TailwindIcon,
  shadcn: ShadcnIcon,
  "better-auth": AuthIcon,
  "ai-sdk": AiSdk,
  claude: BsClaude,
  tanstack: SiReactquery,
  prisma: PrismaIcon,
  trpc: TrpcIcon,
  cursor: CursorIcon,

  // languages
  typescript: SiTypescript,
  javascript: SiJavascript,
  go: SiGo,
  python: SiPython,
  cplusplus: SiCplusplus,

  // backend
  nodejs: SiNodedotjs,
  fastapi: SiFastapi,
  websocket: SiSocketdotio,

  // data & systems
  postgresql: SiPostgresql,
  // dynamodb: SiAmazondynamodb,
  redis: SiRedis,
  kafka: SiApachekafka,
  mongodb: SiMongodb,

  // infra
  docker: SiDocker,
  kubernetes: SiKubernetes,
  githubactions: SiGithubactions,
  terraform: SiTerraform,

  linkedin: FaLinkedin,
};

const enabledSkills = skillsConfig
  .filter((skill) => skill.enabled !== false)
  .sort((a, b) => a.order - b.order);

function SkillChip({ skill }: { skill: SkillItem }) {
  const Icon = skillIconMap[skill.icon];
  const color = skillColorMap[skill.icon];

  // Deliberately no hover:/focus-visible: styles here. These chips are labels,
  // not controls: there is nothing to click and nothing to focus (a div with
  // no tabIndex can never receive focus, so a focus ring is unreachable CSS).
  // Styling them like interactive filter chips made users click them, which
  // PostHog then recorded as $dead_click. If these ever become filters or
  // links, restore the affordances along with the handler.
  const chipClasses =
    "no-js-visible inline-flex items-center gap-1.5 rounded-lg border border-dashed px-3 py-1 text-sm text-muted-foreground";

  return (
    <div className={chipClasses} aria-label={skill.name}>
      {Icon && (
        <span style={color ? { color } : undefined} className="inline-flex">
          <Icon size="18" />
        </span>
      )}
      <span className="font-medium">{skill.name}</span>
    </div>
  );
}

export function Skills() {
  const skills = enabledSkills;
  const categories = skillsSectionConfig.categories;

  return (
    <section className="border-t border-dashed pt-4">
      <h2 className="no-js-visible section-heading">
        {skillsSectionConfig.title}
      </h2>
      {categories.map((category, groupIndex) => {
        const categorySkills = skills.filter(
          (skill) => skill.category === category.id,
        );

        if (categorySkills.length === 0) return null;

        return (
          <div
            key={category.id}
            className={cn(
              "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-6 py-2.5 border-b",
              groupIndex === 3 ? "border-none" : "",
            )}
          >
            <span className="shrink-0 w-36 font-mono text-xs tracking-wider text-muted-foreground">
              {`0${groupIndex + 1}`.padStart(2, "0") + " " + category.label}
            </span>

            <div className="flex flex-wrap gap-2 flex-1">
              {categorySkills.map((skill) => (
                <SkillChip key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}