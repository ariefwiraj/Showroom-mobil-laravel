import { HeroSection } from "@/components/public/HeroSection";
import { FeaturedCars } from "@/components/public/FeaturedCars";
import { AdvantagesSection } from "@/components/public/AdvantagesSection";
import { AboutBrief } from "@/components/public/AboutBrief";
import { WhatsAppCTA } from "@/components/public/WhatsAppCTA";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturedCars />
      <AdvantagesSection />
      <AboutBrief />
      <WhatsAppCTA />
    </>
  );
}
