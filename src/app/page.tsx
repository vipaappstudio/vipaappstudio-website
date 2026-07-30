import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedApps from "@/components/home/FeaturedApps";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/home/CallToAction";
export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedApps />
       <WhyChooseUs />
       <CallToAction />
    </>
  );
}