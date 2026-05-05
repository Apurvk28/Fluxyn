import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { SearchChangedSection } from "../components/SearchChangedSection";
import { MissionSection } from "../components/MissionSection";
import { SolutionSection } from "../components/SolutionSection";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export function LandingPage() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-foreground selection:text-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SearchChangedSection />
      <MissionSection />
      <SolutionSection />
      <CTASection />
      <Footer />
    </main>
  );
}
