import { skillsContent } from "@/content/home";
import { RevealSection } from "./RevealSection";
import { SectionTitle } from "./SectionTitle";

export function SkillsSection() {
  const { title, groups } = skillsContent;

  return (
    <RevealSection>
      <div className="card card-alt">
        <SectionTitle>{title}</SectionTitle>
        {groups.map((group) => (
          <div key={group.label} className="skills-group">
            <div className="skills-group-label">{group.label}</div>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item} className="skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
