"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "⚡",
    tag: "Fast Hiring",
    title: "Permanent Placement",
    desc: "Full-time engineers sourced, vetted, and delivered. Zero fluff, pure match.",
    features: ["AI-screened resumes", "Technical interviews", "Culture fit analysis"],
    gradient: "from-blue-600 to-cyan-500",
    glow: "rgba(10,102,245,0.15)",
  },
  {
    icon: "🔄",
    tag: "Flexible",
    title: "Contract Staffing",
    desc: "Scale instantly with pre-vetted contractors. Deploy in under 48 hours.",
    features: ["Rapid deployment", "Flexible terms", "Managed payroll"],
    gradient: "from-violet-600 to-blue-600",
    glow: "rgba(139,92,246,0.15)",
  },
  {
    icon: "🧠",
    tag: "Executive",
    title: "Leadership Search",
    desc: "Find your next CTO, VP of Eng, or Principal Architect from our elite 1% pool.",
    features: ["C-Suite sourcing", "Confidential search", "Global reach"],
    gradient: "from-cyan-500 to-teal-500",
    glow: "rgba(34,211,238,0.15)",
  },
  {
    icon: "🤖",
    tag: "AI-Powered",
    title: "Dedicated AI Teams",
    desc: "Full product squads powered by AI matching — from ideation to deployment.",
    features: ["LLM specialists", "MLOps engineers", "AI product leads"],
    gradient: "from-pink-600 to-violet-600",
    glow: "rgba(236,72,153,0.15)",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative w-full py-32 bg-white overflow-hidden font-poppins text-slate-900">
      {/* Background */}
      <div className="absolute inset-0 bg-dots-white pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-5">
            Our Services
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            Staffing{" "}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-[550px] mx-auto">
            We don&apos;t just fill positions — we build engineering teams that ship.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative p-8 rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm overflow-hidden cursor-pointer transition-all duration-500 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(10,102,245,0.08)]"
              style={{ "--glow": s.glow } as React.CSSProperties}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 30% 30%, ${s.glow}, transparent 70%)` }}
              />

              {/* Top bar */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

              <div className="relative z-10 flex flex-col gap-6">
                {/* Icon + Tag row */}
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 text-white`}>
                    {s.icon}
                  </div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-slate-500 border border-slate-200 px-3 py-1 rounded-full group-hover:border-blue-300 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-300">
                    {s.tag}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2">
                  {s.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-sm text-slate-500">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${s.gradient} flex-shrink-0`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors duration-300 pt-2">
                  <span>Learn more</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
