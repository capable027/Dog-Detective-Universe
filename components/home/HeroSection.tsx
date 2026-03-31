import { heroContent } from "@/content/home";

export function HeroSection() {
  const { label, greeting, nameHighlight, sloganLine1, sloganLine2, infoStrip, tags } = heroContent;

  return (
    <section className="hero">
      <p className="hero-label">
        <span className="hero-label-mark" aria-hidden />
        <span>{label}</span>
      </p>

      <h1 className="hero-name">
        <span className="hero-name-line">{greeting}</span>
        <em className="hero-name-accent">{nameHighlight}</em>
      </h1>

      <p className="hero-slogan">
        {sloganLine1}
        <br />
        {sloganLine2}
      </p>

      <div className="hero-info-strip">
        {infoStrip.map((item) => (
          <div key={item.key} className="hero-info-item">
            <span className="hero-info-key">{item.key}</span>
            <span className="hero-info-val">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="hero-tags">
        {tags.map((t) => (
          <span key={t} className="hero-tag">
            {t}
          </span>
        ))}
      </div>

      <div className="hero-scroll-hint">
        <span>往下瞄一眼</span>
        <div className="scroll-arrow" aria-hidden />
      </div>
    </section>
  );
}
