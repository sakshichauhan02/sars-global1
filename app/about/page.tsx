import ScrollReveal from "@/components/ScrollReveal";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import Stats from "@/components/sections/Stats";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white pt-[72px]">
      {/* Hero Section */}
      <section className="relative w-full py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none translate-x-1/4 -translate-y-1/4" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center gap-6">
          <div className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-bold tracking-widest uppercase mb-4">
            Our Mission
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Redefining <span className="gradient-text">Global Hiring</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mt-4 leading-relaxed">
            SARS Global was founded on a simple principle: extraordinary engineering talent is distributed globally, but opportunity is not. We bridge the gap between world-class developers and the companies building the future.
          </p>
        </div>
      </section>

      {/* Global Impact (Stats) */}
      <div className="bg-[#0B1120] py-16 border-y border-white/5">
        <Stats />
      </div>

      {/* Core Values */}
      <ScrollReveal className="py-24 bg-[#020409]">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-400 max-w-2xl">The principles that drive how we source, evaluate, and connect talent.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Precision Over Volume", desc: "We don't spam resumes. We meticulously vet every candidate to ensure a 95%+ interview-to-hire ratio." },
              { title: "Speed & Agility", desc: "In the fast-paced tech world, delays cost money. We deliver curated shortlists within 48 hours." },
              { title: "Deep Technical Roots", desc: "Our recruiters understand code. We assess architectural knowledge and problem-solving, not just buzzwords." },
              { title: "Global Perspective", desc: "We source globally to find the best fit, navigating timezones, cultures, and compliance seamlessly." }
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors duration-300">
                <div className="text-blue-500 font-syne text-5xl font-bold mb-4 opacity-50">0{i + 1}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* How We Work */}
      <ProcessTimeline />

      {/* CTA */}
      <section className="py-24 bg-[#0B1120] text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Let&apos;s Build Something Great</h2>
        <Link
          href="/contact"
          className="px-10 py-4 rounded-xl bg-[#0A66F5] text-white font-bold tracking-wide hover:bg-blue-600 transition-all duration-300 inline-block shadow-[0_0_20px_rgba(10,102,245,0.3)]"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
