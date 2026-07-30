import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQ from "@/components/contact/FAQ";
import ContactCTA from "@/components/contact/ContactCTA";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactCards />
      <ContactInfo />
      <FAQ />
      <ContactCTA />
    </main>
  );
}