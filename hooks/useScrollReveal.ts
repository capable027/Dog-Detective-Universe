import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-observe]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sections.forEach((el) => el.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
