import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-pure-black text-metallic-gray">
      {/* Hero Section */}
      <Hero />

      {/* Content Section below to check header transition */}
      <section className="py-24 px-6 bg-[#0B1120] border-t border-white/5 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full text-center flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-space-grotesk">Why SARS TALENT?</h2>
            <p className="text-metallic-gray max-w-xl mx-auto font-inter text-sm md:text-base">
              We bridge the gap between world-class developers and top-tier global teams.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl glass text-left flex flex-col gap-3">
              <div className="text-primary-blue text-xl font-bold font-space-grotesk">01</div>
              <h3 className="text-lg font-semibold text-white">Vetted Network</h3>
              <p className="text-sm text-metallic-gray/80 leading-relaxed font-inter">
                Access a pre-screened pool of the top 3% software engineers worldwide.
              </p>
            </div>
            <div className="p-6 rounded-xl glass text-left flex flex-col gap-3">
              <div className="text-primary-blue text-xl font-bold font-space-grotesk">02</div>
              <h3 className="text-lg font-semibold text-white">Rapid Matching</h3>
              <p className="text-sm text-metallic-gray/80 leading-relaxed font-inter">
                Connect with the right talent in under 48 hours with our matching algorithms.
              </p>
            </div>
            <div className="p-6 rounded-xl glass text-left flex flex-col gap-3">
              <div className="text-primary-blue text-xl font-bold font-space-grotesk">03</div>
              <h3 className="text-lg font-semibold text-white">End-to-End Care</h3>
              <p className="text-sm text-metallic-gray/80 leading-relaxed font-inter">
                We handle sourcing, compliance, payroll, and onboarding so you can scale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
