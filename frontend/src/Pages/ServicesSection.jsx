import React from "react";
import ProcessFlow from "../components/ProcessFlow";
import ServicesHero from "../components/ServicesHero";
import CirclularServices from "../components/CirclularServices";
import CreativeSection from "../components/CreativeSection";
import CTASection from "../components/CTASection";
export default function ServicesSection() {
  return (
    <div className="w-full bg-white overflow-hidden">
      <CirclularServices />
      <ServicesHero />
      <CreativeSection />
      <ProcessFlow />
      <CTASection />
    </div>
  );
}
