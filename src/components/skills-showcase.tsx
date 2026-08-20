import { TechIcon } from '@/components/icons';
import { SkillsInteractions } from '@/components/skills-interactions';
import type { IconName } from '@/data/portfolio';

type SkillGroup = {
  label: string;
  skills: { name: string; icon: IconName }[];
};

const groupNotes = [
  'The primitives I reach for when correctness and clarity matter.',
  'APIs, services, and real-time paths built for production traffic.',
  'Durable state, event streams, caching, and operational visibility.',
  'The delivery layer that turns working code into dependable software.',
];

export function SkillsShowcase({ groups }: { groups: SkillGroup[] }) {
  const skills = groups.flatMap((group) => group.skills);

  return (
    <div className="capability-console" data-capability-console>
      <SkillsInteractions />
      <div className="capability-console-bar" aria-hidden="true">
        <div><span className="console-live" /> SYSTEM CAPABILITY INDEX</div>
        <div>{String(skills.length).padStart(2, '0')} MODULES / 04 DOMAINS</div>
      </div>

      <div className="capability-marquee" aria-label="Technology overview">
        <div>
          {[...skills, ...skills].map((skill, index) => (
            <span key={`${skill.name}-${index}`}><i />{skill.name}</span>
          ))}
        </div>
      </div>

      <div className="capability-matrix">
        {groups.map((group, groupIndex) => (
          <article
            className={`capability-card capability-card-${groupIndex + 1}`}
            data-cursor="Scan"
            key={group.label}
          >
            <div className="capability-glow" aria-hidden="true" />
            <div className="capability-card-heading">
              <span>0{groupIndex + 1}</span>
              <div>
                <p>DOMAIN</p>
                <h3>{group.label}</h3>
              </div>
              <b>{group.skills.length.toString().padStart(2, '0')}</b>
            </div>
            <p className="capability-note">{groupNotes[groupIndex]}</p>
            <div className="capability-skills">
              {group.skills.map((skill) => (
                <div className="capability-skill" key={skill.name}>
                  <span><TechIcon name={skill.icon} size={21} /></span>
                  <strong>{skill.name}</strong>
                  <i aria-hidden="true" />
                </div>
              ))}
            </div>
            <div className="capability-card-footer" aria-hidden="true">
              <span>PR/{String(groupIndex + 1).padStart(2, '0')}</span>
              <span>READY</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
