"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const whySars = [
  { icon: "🤖", title: "AI Talent Matching", desc: "Proprietary LLM analyzes 200+ signals to surface the perfect engineer for your team, culture, and tech stack." },
  { icon: "⚡", title: "48-Hour Delivery", desc: "From requirement to candidate shortlist in under 48 hours. No ghosting, no delays, no excuses." },
  { icon: "🌍", title: "Global Talent Pool", desc: "Access the top 3% from 90+ countries — time-zone matched, compliance handled, ready to ship." },
  { icon: "🛡️", title: "Quality Guarantee", desc: "98% retention rate backed by our 90-day replacement guarantee. We own the outcome." },
  { icon: "📊", title: "Data-Driven Insights", desc: "Live dashboards, hiring velocity metrics, and market intelligence to keep you ahead of the curve." },
  { icon: "🤝", title: "Dedicated Recruiters", desc: "Your team gets a dedicated recruiter who lives and breathes your domain. Not a ticket queue." },
];

export default function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative w-full py-32 bg-[#020409] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/8 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase font-dm-sans mb-5">
            Why SARS Global
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            The Ultimate{" "}
            <span className="gradient-text">AI Hiring Platform.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-[600px] mx-auto">
            Traditional staffing is slow and inaccurate. We leverage advanced LLMs to match you with top-tier engineers in record time.
          </p>
        </motion.div>

        {/* Split: Metrics + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left: Big AI statement card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-950/60 to-[#020409] p-8 flex flex-col gap-8 min-h-[500px]"
          >
            {/* Scan line effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              <div className="scan-line" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="text-6xl mb-6">🧬</div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                AI That Actually<br />
                <span className="gradient-text">Understands Code</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our proprietary matching engine parses GitHub contributions, technical blogs, open-source activity, and 200+ engineering signals to find talent that traditional recruiters miss.
              </p>
            </div>

            {/* Live metric display */}
            <div className="relative z-10 flex flex-col gap-3 mt-auto">
              {[
                { label: "AI Match Accuracy", val: 94, color: "#0A66F5" },
                { label: "Time Saved vs Traditional", val: 78, color: "#22d3ee" },
                { label: "First-Interview Pass Rate", val: 91, color: "#a78bfa" },
              ].map((m, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">{m.label}</span>
                    <span className="text-white font-semibold">{m.val}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.2, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: m.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: 6-item feature grid */}
          <div ref={ref} className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whySars.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: "rgba(10,102,245,0.35)" }}
                className="group relative p-6 rounded-2xl border border-white/6 bg-white/[0.02] backdrop-blur-sm cursor-default transition-all duration-300"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
