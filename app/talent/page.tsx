import ScrollReveal from "@/components/ScrollReveal";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Link from "next/link";

export default function TalentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white pt-[72px]">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Video reused */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        >
          <source src="/only_need_the_background_video (1).mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlay for Hero */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(2,4,9,0.5)_0%,#020409_80%)] pointer-events-none" />

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Find <span className="text-[#0A66F5]">Elite Engineering</span> Talent
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl">
            Scale your engineering team with pre-vetted top-tier developers. From dedicated AI experts to full-stack squads, we deliver excellence in under 48 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-xl bg-[#0A66F5] text-white font-bold tracking-wide hover:bg-blue-600 transition-colors duration-300 shadow-[0_0_20px_rgba(10,102,245,0.3)] hover:shadow-[0_0_30px_rgba(10,102,245,0.5)]"
            >
              Start Hiring
            </Link>
            <Link
              href="#services"
              className="px-8 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-bold tracking-wide hover:bg-white/10 transition-colors duration-300"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Areas */}
      <div id="services">
        <ServicesGrid />
      </div>
      
      <ScrollReveal className="py-20 bg-[#0B1120]">
        <div className="max-w-[1300px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Partner With Us?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">
            We don&apos;t just find resumes. We source, vet, and match engineers based on technical depth and cultural fit, ensuring immediate impact for your projects.
          </p>
          <Stats />
        </div>
      </ScrollReveal>

      <Testimonials />

      {/* CTA Section */}
      <ScrollReveal className="py-24 relative overflow-hidden bg-[#020409]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Build Your Dream Team?</h2>
          <p className="text-xl text-slate-400 mb-10">
            Tell us about your technical requirements and culture. We&apos;ll introduce you to your next great hire within 48 hours.
          </p>
          <Link
            href="/contact"
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-[#0A66F5] text-white text-lg font-bold tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(10,102,245,0.4)] inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
