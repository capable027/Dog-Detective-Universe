import { useEffect, useRef } from "react";

const MAGNETIC_SEL =
  "a, button, .work-card, .hobby-item, .skill-tag, .tag, .hero-tag, .contact-link, .hero-info-item";
const MAGNETIC_STRENGTH = 0.35;
const MAGNETIC_RADIUS = 80;

function getCenter(el: Element) {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

export function useMagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.body.classList.add("has-custom-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let magX = 0;
    let magY = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;

      const targets = document.querySelectorAll(MAGNETIC_SEL);
      let nearest: Element | null = null;
      let nearestDist = Infinity;

      targets.forEach((el) => {
        const c = getCenter(el);
        const dist = Math.hypot(mx - c.x, my - c.y);
        if (dist < MAGNETIC_RADIUS && dist < nearestDist) {
          nearestDist = dist;
          nearest = el;
        }
      });

      if (nearest) {
        const c = getCenter(nearest);
        const pull = 1 - nearestDist / MAGNETIC_RADIUS;
        magX = (c.x - mx) * pull * MAGNETIC_STRENGTH;
        magY = (c.y - my) * pull * MAGNETIC_STRENGTH;
        ring.classList.add("is-hovering", "is-magnetic");
        dot.classList.add("is-hovering");
      } else {
        magX *= 0.6;
        magY *= 0.6;
        if (Math.abs(magX) < 0.1) magX = 0;
        if (Math.abs(magY) < 0.1) magY = 0;
        ring.classList.remove("is-hovering", "is-magnetic");
        dot.classList.remove("is-hovering");
      }
    };

    const animateRing = () => {
      const tx = mx + magX;
      const ty = my + magY;
      rx += (tx - rx) * 0.12;
      ry += (ty - ry) * 0.12;
      ring.style.transform = `translate(calc(${rx}px - 50%), calc(${ry}px - 50%))`;
      rafRef.current = requestAnimationFrame(animateRing);
    };
    rafRef.current = requestAnimationFrame(animateRing);

    const onDown = () => {
      dot.classList.add("is-clicking");
      ring.classList.add("is-clicking");
    };
    const onUp = () => {
      dot.classList.remove("is-clicking");
      ring.classList.remove("is-clicking");
    };

    const onDocLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onDocEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onDocLeave);
    document.addEventListener("mouseenter", onDocEnter);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onDocLeave);
      document.removeEventListener("mouseenter", onDocEnter);
    };
  }, []);

  return { dotRef, ringRef };
}
