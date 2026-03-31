import { worksContent } from "@/content/home";
import { RevealSection } from "./RevealSection";
import { SectionTitle } from "./SectionTitle";

export function WorksSection() {
  const { title, items } = worksContent;

  return (
    <RevealSection>
      <div className="card">
        <SectionTitle>{title}</SectionTitle>
        <div className="works-grid">
          {items.map((work, i) => (
            <div key={`${i}-${work.title}`} className="work-card">
              <div className="work-card-header">
                <div className="work-title">{work.title}</div>
                <div className="work-time">{work.time}</div>
              </div>
              <div className="work-type">{work.type}</div>
              <p className="work-desc">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
