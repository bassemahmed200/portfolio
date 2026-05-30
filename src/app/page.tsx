"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PlansSection } from "@/components/sections/PlansSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { QuoteWizard } from "@/components/QuoteWizard";

const LoadingScreen = dynamic(
  () =>
    import("@/components/effects/LoadingScreen").then((mod) => ({
      default: mod.LoadingScreen,
    })),
  { ssr: false }
);

const CustomCursor = dynamic(
  () =>
    import("@/components/effects/CustomCursor").then((mod) => ({
      default: mod.CustomCursor,
    })),
  { ssr: false }
);

const ScrollProgress = dynamic(
  () =>
    import("@/components/effects/ScrollProgress").then((mod) => ({
      default: mod.ScrollProgress,
    })),
  { ssr: false }
);

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar onQuoteClick={() => setIsQuoteOpen(true)} />

      <main>
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <WorkSection />
        <div className="section-divider" />
        <ServicesSection />
        <div className="section-divider" />
        <PlansSection onOpenWizard={() => setIsQuoteOpen(true)} />
        <div className="section-divider" />
        <ContactSection />
      </main>

      <Footer />
      <QuoteWizard isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
