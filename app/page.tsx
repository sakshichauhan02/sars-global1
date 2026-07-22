import Hero from "@/components/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Comparison from "@/components/sections/Comparison";
import IndustriesMarquee from "@/components/sections/IndustriesMarquee";
import Stats from "@/components/sections/Stats";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-pure-black text-metallic-gray">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trusted By Section */}
      <TrustedBy />

      {/* 3. Services Grid Section */}
      <ServicesGrid />

      {/* 4. Why SARS TALENT Section */}
      <Comparison />

      {/* 5. Industries & Technologies Marquee Section */}
      <IndustriesMarquee />

      {/* 6. Stats & Impact Section */}
      <Stats />
    </div>
  );
}
