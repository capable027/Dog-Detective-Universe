"use client";

import {
  AboutSection,
  ContactSection,
  HeroSection,
  HobbiesSection,
  SiteFooter,
  SkillsSection,
  WorksSection,
} from "@/components/home";
import { useMagneticCursor } from "@/hooks/useMagneticCursor";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function HomePage() {
  useScrollReveal();
  const { dotRef, ringRef } = useMagneticCursor();

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden />
      <div className="cursor-ring" ref={ringRef} aria-hidden />

      <HeroSection />

      <div className="page">
        <AboutSection />
        <SkillsSection />
        <WorksSection />
        <HobbiesSection />
        <ContactSection />
        <SiteFooter />
      </div>
    </>
  );
}
