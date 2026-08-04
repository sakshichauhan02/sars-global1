"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    icon: "📋",
    title: "Requirement Intake",
    desc: "Share your stack, team size, culture, and timeline. Our system starts matching immediately.",
    metric: "< 15 min",
    metricLabel: "Avg. intake time",
    gradient: "from-blue-600 to-cyan-500",
    detail: ["Role definition", "Tech stack mapping", "Seniority calibration", "Culture alignment"],
  },
  {
    num: "02",
    icon: "🤖",
    title: "AI Talent Matching",
    desc: "Our LLM analyzes 200+ signals across our global pool and ranks top candidates.",
    metric: "< 2 hours",
    metricLabel: "To shortlist",
    gradient: "from-violet-600 to-blue-600",
    detail: ["200+ signals analyzed", "GitHub profile scan", "OSS contribution score", "Culture fit model"],
  },
  {
    num: "03",
    icon: "🔬",
    title: "Technical Screening",
    desc: "Every candidate completes domain-specific coding tests and architecture reviews.",
    metric: "Top 3%",
    metricLabel: "Candidates pass",
    gradient: "from-cyan-500 to-teal-500",
    detail: ["Live coding sessions", "System design review", "Domain expertise check", "Communication eval"],
  },
  {
    num: "04",
    icon: "🚀",
    title: "Deploy & Onboard",
    desc: "Your engineer is onboarded in under 48 hours. We handle compliance, payroll & admin.",
    metric: "< 48h",
    metricLabel: "Full deployment",
    gradient: "from-pink-600 to-violet-600",
    detail: ["Day-1 onboarding", "Payroll & compliance", "90-day guarantee", "Ongoing support"],
  },
];

export default function ProcessTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="relative w-full py-32 bg-white overflow-hidden font-poppins text-slate-900">
      {/* Background */}
      <div className="absolute inset-0 bg-dots-white pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-50 blur-[120px] rounded-full pointer-events-none" />

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
            How It Works
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            Our{" "}
            <span className="gradient-text">Process</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-[550px] mx-auto">
            Four steps. Forty-eight hours. One elite engineer on your team.
          </p>
        </motion.div>

        {/* Process Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-7 rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm overflow-hidden cursor-default transition-all duration-400 shadow-sm hover:border-blue-300 hover:shadow-[0_20px_50px_rgba(10,102,245,0.08)]"
            >
              {/* Hover glow top border */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

              {/* Step number watermark */}
              <div className="absolute top-4 right-4 text-7xl font-extrabold text-slate-900/5 group-hover:text-blue-600/5 transition-colors leading-none select-none">
                {step.num}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {step.desc}
              </p>

              {/* Metric pill */}
              <div className={`inline-flex flex-col items-start px-4 py-3 rounded-xl bg-gradient-to-br ${step.gradient} bg-opacity-10 border border-slate-200 mb-6`}>
                <span className="text-xl font-extrabold text-slate-900">{step.metric}</span>
                <span className="text-[10px] text-slate-500 tracking-wider uppercase">{step.metricLabel}</span>
              </div>

              {/* Checklist */}
              <ul className="flex flex-col gap-2">
                {step.detail.map((d, di) => (
                  <li key={di} className="flex items-center gap-2.5 text-xs text-slate-500 group-hover:text-slate-700 transition-colors">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${step.gradient} flex-shrink-0`} />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Connecting arrow bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          className="hidden xl:block relative mt-8 mx-12 origin-left"
        >
          <div className="h-[2px] bg-gradient-to-r from-blue-600 via-cyan-400 via-violet-500 to-pink-600 rounded-full" />
          <motion.div
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border border-slate-200 shadow-[0_0_20px_rgba(10,102,245,0.3)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
