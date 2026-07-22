"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Comparison() {
  const traditionalItems = [
    {
      title: "Slow Hiring",
      desc: "Takes weeks or months of manual vetting, resume filtering, and scheduling."
    },
    {
      title: "High Cost",
      desc: "Heavy placement fees, recruiter commissions, and administrative overhead."
    },
    {
      title: "Limited Talent",
      desc: "Restricted to local geographic search or standard active job boards."
    },
    {
      title: "Long Time-to-Hire",
      desc: "Vacant positions remain open, stalling roadmap progression and shipping cycles."
    }
  ];

  const sarsItems = [
    {
      title: "Fast Hiring",
      desc: "Pre-screened, elite developers matching your stack in under 48 hours."
    },
    {
      title: "Curated Engineers",
      desc: "Direct access to the top 3% of global software engineering talent."
    },
    {
      title: "AI Matching",
      desc: "Data-driven compatibility checking for technical and cultural fit."
    },
    {
      title: "Dedicated Recruiters",
      desc: "Full lifecycle support including compliance, onboarding, and payroll."
    }
  ];

  return (
    <section className="w-full py-24 bg-[#0B1120] border-t border-white/5 flex flex-col items-center justify-center">
      <div className="max-w-[1200px] w-full px-6 flex flex-col gap-16">
        {/* Title Block */}
        <div className="max-w-xl mx-auto text-center flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-space-grotesk uppercase tracking-tight">
            Why SARS TALENT?
          </h2>
          <p className="text-metallic-gray font-inter text-sm md:text-base leading-relaxed">
            See how our advanced global talent matching compares against traditional staffing methods.
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full items-stretch">
          
          {/* Left Column: Traditional Staffing */}
          <div className="flex flex-col gap-8 p-8 md:p-10 rounded-2xl bg-white/[0.01] border border-white/5">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-400 font-space-grotesk tracking-tight uppercase border-b border-white/5 pb-4">
              Traditional Staffing
            </h3>
            <div className="flex flex-col gap-6">
              {traditionalItems.map((item, idx) => (
                <div key={`trad-${idx}`} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-500/60">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-base font-semibold text-neutral-300 font-space-grotesk">
                      {item.title}
                    </h4>
                    <p className="text-sm text-neutral-500 font-inter leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Divider & VS Badge (Desktop: Vertical) */}
          <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex-col items-center justify-center pointer-events-none">
            <div className="w-[1px] h-full bg-white/10" />
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 0 15px rgba(10, 102, 245, 0.3)",
                  "0 0 25px rgba(10, 102, 245, 0.6)",
                  "0 0 15px rgba(10, 102, 245, 0.3)"
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
              className="absolute w-12 h-12 rounded-full border border-white/20 bg-[#0B1120] flex items-center justify-center text-sm font-bold text-white pointer-events-auto select-none font-space-grotesk"
            >
              VS
            </motion.div>
          </div>

          {/* Center Divider & VS Badge (Mobile: Horizontal) */}
          <div className="flex lg:hidden items-center justify-center w-full my-4 relative h-12">
            <div className="absolute w-full h-[1px] bg-white/10" />
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 0 12px rgba(10, 102, 245, 0.3)",
                  "0 0 20px rgba(10, 102, 245, 0.5)",
                  "0 0 12px rgba(10, 102, 245, 0.3)"
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
              className="relative z-10 w-10 h-10 rounded-full border border-white/20 bg-[#0B1120] flex items-center justify-center text-xs font-bold text-white select-none font-space-grotesk"
            >
              VS
            </motion.div>
          </div>

          {/* Right Column: With SARS TALENT */}
          <div className="flex flex-col gap-8 p-8 md:p-10 rounded-2xl bg-white/[0.04] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
            <h3 className="text-xl md:text-2xl font-bold text-white font-space-grotesk tracking-tight uppercase border-b border-white/10 pb-4 flex items-center justify-between">
              <span>With SARS TALENT</span>
              <span className="text-xs px-2.5 py-1 rounded bg-[#0A66F5]/10 text-[#0A66F5] border border-[#0A66F5]/20 font-semibold tracking-wider uppercase font-inter">
                Recommended
              </span>
            </h3>
            <div className="flex flex-col gap-6">
              {sarsItems.map((item, idx) => (
                <div key={`sars-${idx}`} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0A66F5]">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-base font-semibold text-white font-space-grotesk">
                      {item.title}
                    </h4>
                    <p className="text-sm text-metallic-gray font-inter leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
