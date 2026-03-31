import { footerContent } from "@/content/home";

export function SiteFooter() {
  return (
    <div className="footer">
      {footerContent.lines.map((line, i) => (
        <div key={i} className="footer-line">
          {line}
        </div>
      ))}
    </div>
  );
}
