import TermsHero from "@/components/terms/TermsHero";
import TermsOverview from "@/components/terms/TermsOverview";
import AcceptanceOfTerms from "@/components/terms/AcceptanceOfTerms";
import UseOfServices from "@/components/terms/UseOfServices";
import IntellectualProperty from "@/components/terms/IntellectualProperty";
import UserResponsibilities from "@/components/terms/UserResponsibilities";
import Disclaimer from "@/components/terms/Disclaimer";
import LimitationOfLiability from "@/components/terms/LimitationOfLiability";
import Termination from "@/components/terms/Termination";
import GoverningLaw from "@/components/terms/GoverningLaw";
import TermsUpdates from "@/components/terms/TermsUpdates";
import TermsContact from "@/components/terms/TermsContact";

export default function TermsPage() {
  return (
    <main>
      <TermsHero />
      <TermsOverview />
      <AcceptanceOfTerms />
      <UseOfServices />
      <IntellectualProperty />
      <UserResponsibilities />
      <Disclaimer />
      <LimitationOfLiability />
      <Termination />
      <GoverningLaw />
      <TermsUpdates />
      <TermsContact />
    </main>
  );
}