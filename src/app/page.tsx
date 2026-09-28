import { PropertySearchProvider } from "@/components/providers/PropertySearchProvider";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { Hero } from "@/components/sections/Hero";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { Neighborhoods } from "@/components/sections/Neighborhoods";
import { OwnerCTA } from "@/components/sections/OwnerCTA";
import { PropertySearch } from "@/components/sections/PropertySearch";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";

export default function HomePage() {
  return (
    <PropertySearchProvider>
      <Hero />
      <PropertySearch />
      <FeaturedProperties />
      <Services />
      <WhyUs />
      <Neighborhoods />
      <OwnerCTA />
      <Testimonials />
      <InstagramSection />
      <ContactSection />
    </PropertySearchProvider>
  );
}
