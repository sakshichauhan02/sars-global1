import ScrollReveal from "@/components/ScrollReveal";
import FeaturedRoles from "@/components/sections/FeaturedRoles";
import IndustriesMarquee from "@/components/sections/IndustriesMarquee";
import Link from "next/link";

export default function RolesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white pt-[72px]">
      {/* Hero Section */}
      <section className="relative w-full py-32 flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(10,102,245,0.15)_0%,#020409_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-dots opacity-[0.03] pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Join the <span className="gradient-text">Elite Network</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl">
            We partner with the world&apos;s most innovative companies. Find high-impact roles in AI, Web3, and Enterprise Engineering that match your expertise.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Link
              href="#open-roles"
              className="px-8 py-3 rounded-xl bg-[#0A66F5] text-white font-bold tracking-wide hover:bg-blue-600 transition-colors duration-300 shadow-[0_0_20px_rgba(10,102,245,0.3)] hover:shadow-[0_0_30px_rgba(10,102,245,0.5)]"
            >
              Explore Open Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Roles Expansion */}
      <div id="open-roles" className="bg-[#F8FAFC]">
        {/* We use FeaturedRoles which has a light background built-in */}
        <FeaturedRoles />
      </div>

      {/* Tech Stack Marquee */}
      <div className="py-20 bg-[#0B1120]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Technologies We Recruit For</h2>
          <p className="text-slate-400">Companies are actively seeking experts in these stacks</p>
        </div>
        <IndustriesMarquee />
      </div>

      {/* Candidate Benefits */}
      <ScrollReveal className="py-24 bg-[#020409]">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Engineers Choose SARS</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We streamline your job search and advocate for your career growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Direct to Hiring Managers", desc: "Skip the black hole. We pitch your profile directly to decision-makers.", icon: "🚀" },
              { title: "Exclusive Opportunities", desc: "Access unlisted roles at top-tier startups and enterprise tech giants.", icon: "💎" },
              { title: "Salary Negotiation", desc: "We provide market insights and advocate for the compensation you deserve.", icon: "📈" }
            ].map((benefit, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-[16px] border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 hover:border-blue-500/50 hover:shadow-[0_8px_32px_rgba(10,102,245,0.1)]">
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
