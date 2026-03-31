import { contactContent } from "@/content/home";
import { RevealSection } from "./RevealSection";
import { SectionTitle } from "./SectionTitle";

export function ContactSection() {
  const { title, intro, links } = contactContent;

  return (
    <RevealSection>
      <div className="card">
        <SectionTitle>{title}</SectionTitle>
        <p className="contact-intro">{intro}</p>
        <div className="contact-links">
          {links.map((link, i) => {
            const href =
              !link.external && link.href.includes("@") && !link.href.startsWith("mailto:")
                ? `mailto:${link.href}`
                : link.href;
            return (
            <a
              key={link.label}
              href={href}
              className={`contact-link${i === 0 ? " contact-link--primary" : ""}`}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
