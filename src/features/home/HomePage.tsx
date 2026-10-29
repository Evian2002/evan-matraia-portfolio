import { HomeNav } from "@/features/home/components/HomeNav";
import { ContactSection } from "@/features/home/sections/ContactSection";
import { FooterSection } from "@/features/home/sections/FooterSection";
import { HeroSection } from "@/features/home/sections/HeroSection";
import { PortfolioSection } from "@/features/home/sections/PortfolioSection";
import { SkillsSection } from "@/features/home/sections/SkillsSection";

export function HomePage() {
  return (
    <main className="relative min-h-screen bg-background font-sans">
      <HomeNav />
      <HeroSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}

