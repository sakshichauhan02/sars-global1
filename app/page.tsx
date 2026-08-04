import Hero from "@/components/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Comparison from "@/components/sections/Comparison";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import IndustriesMarquee from "@/components/sections/IndustriesMarquee";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import FeaturedRoles from "@/components/sections/FeaturedRoles";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white">
      {/* 1. Hero — Dark (neural network canvas) */}
      <Hero />

      {/* 2. Services Grid — Dark navy */}
      <ServicesGrid />

      {/* 3. Why SARS — Pure dark */}
      <Comparison />

      {/* 4. Our Process — Dark navy */}
      <ProcessTimeline />

      {/* 5. Roles & Tech — Pure dark */}
      <IndustriesMarquee />

      {/* 6. Stats & Impact — Dark navy */}
      <Stats />

      {/* 7. Testimonials — Pure dark */}
      <Testimonials />

      {/* 8. Get Hired With Us — Pure dark */}
      <FeaturedRoles />

      {/* 9. FAQ — Dark navy */}
      <FAQ />
    </div>
  );
}
