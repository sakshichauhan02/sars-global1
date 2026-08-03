import Hero from "@/components/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
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
    <div className="flex flex-col min-h-screen bg-white text-slate-700">
      {/* 1. Hero Section (Dark) */}
      <Hero />

      {/* 2. Trusted By Section (Light) */}
      <TrustedBy />

      {/* 3. Services Grid Section (Dark) */}
      <ServicesGrid />

      {/* 4. Why SARS TALENT Section (Light) */}
      <Comparison />

      {/* 5. Our Process Section (Dark) */}
      <ProcessTimeline />

      {/* 6. Industries & Technologies Marquee Section (Light) */}
      <IndustriesMarquee />

      {/* 7. Stats & Impact Section (Dark) */}
      <Stats />

      {/* 8. Client Success (Testimonials) Section (Light) */}
      <Testimonials />

      {/* 9. Featured Roles Section (Light Gray) */}
      <FeaturedRoles />

      {/* 10. FAQ Section (White) */}
      <FAQ />
    </div>
  );
}
