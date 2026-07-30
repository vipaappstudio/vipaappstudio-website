import SupportHero from "@/components/support/SupportHero";
import SupportCategories from "@/components/support/SupportCategories";
import AppSupport from "@/components/support/AppSupport";
import DataDeletion from "@/components/support/DataDeletion";
import SupportCTA from "@/components/support/SupportCTA";

export default function SupportPage() {
  return (
    <main>
      <SupportHero />
      <SupportCategories />
      <AppSupport />
      <DataDeletion />
      <SupportCTA />
    </main>
  );
}