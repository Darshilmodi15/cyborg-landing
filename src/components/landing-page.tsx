"use client";

import { useLenis } from "@/hooks/use-lenis";
import { CapabilitiesSection } from "@/components/features/capabilities-section";
import { FaqSection } from "@/components/faq/faq-section";
import { Footer } from "@/components/footer/footer";
import { HeroSection } from "@/components/hero/hero-section";
import { FinalCta } from "@/components/final-cta";
import { SiteHeader } from "@/components/site-header";
import { StatsSection } from "@/components/stats/stats-section";
import { TechnologyShowcase } from "@/components/technology/technology-showcase";
import { TestimonialsSection } from "@/components/testimonials/testimonials-section";
import { TimelineSection } from "@/components/timeline/timeline-section";

export function LandingPage() {
  useLenis();

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <TechnologyShowcase />
        <StatsSection />
        <TimelineSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
