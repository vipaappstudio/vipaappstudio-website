import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyOverview from "@/components/privacy/PrivacyOverview";
import InformationCollection from "@/components/privacy/InformationCollection";
import PermissionsSection from "@/components/privacy/PermissionsSection";
import ThirdPartyServices from "@/components/privacy/ThirdPartyServices";
import DataRetention from "@/components/privacy/DataRetention";
import DataDeletionSection from "@/components/privacy/DataDeletionSection";
import ChildrenPrivacy from "@/components/privacy/ChildrenPrivacy";
import PolicyUpdates from "@/components/privacy/PolicyUpdates";
import PrivacyContact from "@/components/privacy/PrivacyContact";

export default function PrivacyPage() {
  return (
    <main>
      <PrivacyHero />
      <PrivacyOverview />
      <InformationCollection />
      <PermissionsSection />
      <ThirdPartyServices />
      <DataRetention />
      <DataDeletionSection />
      <ChildrenPrivacy />
      <PolicyUpdates />
      <PrivacyContact />
    </main>
  );
}