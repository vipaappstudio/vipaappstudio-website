import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import CompanyStats from "@/components/about/CompanyStats";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <Values />
      <CompanyStats />
      <AboutCTA />
    </main>
  );
}