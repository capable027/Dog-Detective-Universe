import { hobbiesContent } from "@/content/home";
import { RevealSection } from "./RevealSection";
import { SectionTitle } from "./SectionTitle";

export function HobbiesSection() {
  const { title, items, note } = hobbiesContent;

  return (
    <RevealSection>
      <div className="card card-alt">
        <SectionTitle>{title}</SectionTitle>
        <ul className="hobby-list">
          {items.map((label) => (
            <li key={label} className="hobby-item">
              {label}
            </li>
          ))}
        </ul>
        <p className="hobby-note">{note}</p>
      </div>
    </RevealSection>
  );
}
