import { aboutContent } from "@/content/home";
import { RevealSection } from "./RevealSection";
import { SectionTitle } from "./SectionTitle";

export function AboutSection() {
  const { title, paragraphs, meta, tags } = aboutContent;

  return (
    <RevealSection>
      <div className="card">
        <SectionTitle>{title}</SectionTitle>
        <div className="about-content">
          <p>
            {paragraphs.map((line, i) => (
              <span key={i}>
                {line}
                {i < paragraphs.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>
          <div className="about-meta">
            {meta.map((text, i) => (
              <span key={`${i}-${text}`} className="meta-item">
                {text}
              </span>
            ))}
          </div>
          <div className="tags">
            {tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
