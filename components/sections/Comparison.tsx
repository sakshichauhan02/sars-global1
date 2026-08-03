"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemLeftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

const itemRightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

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
    <ScrollReveal className="relative w-full py-32 md:py-44 bg-[#F8FAFC] border-t border-slate-900/[0.06] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(10,102,245,0.06)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] rounded-full bg-[#0A66F5]/[0.03] blur-[80px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1200px] w-full px-6 flex flex-col gap-24">
        {/* Title Block */}
        <div className="max-w-prose mx-auto text-center flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0A66F5]/10 bg-[#0A66F5]/5 text-xs font-semibold tracking-wider text-[#0A66F5] uppercase self-center">
            Comparison
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black !text-[#0B1120] font-space-grotesk uppercase tracking-tight">
            Why SARS TALENT?
          </h2>
          <p className="text-slate-500 font-inter text-base md:text-lg leading-relaxed max-w-[650px] mx-auto">
            See how our advanced global talent matching compares against traditional staffing methods.
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 w-full items-stretch">
          
          {/* Left Column: Traditional Staffing */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={listVariants}
            className="flex flex-col gap-10 p-8 md:p-12 rounded-[24px] bg-white/80 border border-slate-900/[0.08] backdrop-blur-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.02)] transition-all duration-400 hover:border-slate-300/60 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold !text-slate-500 font-space-grotesk tracking-tight uppercase border-b border-slate-100 pb-5">
              Traditional Staffing
            </h3>
            <div className="flex flex-col gap-8">
              {traditionalItems.map((item, idx) => (
                <motion.div 
                  key={`trad-${idx}`} 
                  variants={itemLeftVariants}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-base font-bold !text-slate-700 font-space-grotesk tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-inter leading-relaxed max-w-[400px]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center Divider & VS Badge (Desktop: Vertical) */}
          <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex-col items-center justify-center pointer-events-none z-10">
            <div className="w-[1px] h-full bg-gradient-to-b from-[#0A66F5]/0 via-[#0A66F5]/20 to-[#0A66F5]/0" />
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                borderColor: [
                  "rgba(10, 102, 245, 0.2)",
                  "rgba(10, 102, 245, 0.5)",
                  "rgba(10, 102, 245, 0.2)"
                ],
                boxShadow: [
                  "0 0 20px rgba(10, 102, 245, 0.1)",
                  "0 0 35px rgba(10, 102, 245, 0.25)",
                  "0 0 20px rgba(10, 102, 245, 0.1)"
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
              className="absolute w-14 h-14 rounded-full border bg-white/95 backdrop-blur-md flex items-center justify-center text-sm font-black !text-[#0B1120] pointer-events-auto select-none font-space-grotesk"
            >
              VS
            </motion.div>
          </div>

          {/* Center Divider & VS Badge (Mobile: Horizontal) */}
          <div className="flex lg:hidden items-center justify-center w-full my-4 relative h-12">
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#0A66F5]/25 to-transparent" />
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 12px rgba(10, 102, 245, 0.08)",
                  "0 0 25px rgba(10, 102, 245, 0.2)",
                  "0 0 12px rgba(10, 102, 245, 0.08)"
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
              className="relative z-10 w-11 h-11 rounded-full border border-slate-200/80 bg-white/95 backdrop-blur-md flex items-center justify-center text-xs font-bold !text-[#0B1120] select-none font-space-grotesk"
            >
              VS
            </motion.div>
          </div>

          {/* Right Column: With SARS TALENT */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={listVariants}
            className="relative flex flex-col gap-10 p-8 md:p-12 rounded-[24px] bg-white/90 border-2 border-[#0A66F5]/80 shadow-[0_20px_50px_rgba(10,102,245,0.05)] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(10,102,245,0.14)] overflow-hidden"
          >
            {/* Top 4px Glowing Accent */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#0A66F5] to-[#3B82F6]" />
            
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold !text-[#0B1120] font-space-grotesk tracking-tight uppercase border-b border-slate-100 pb-5 flex items-center justify-between">
              <span>With SARS TALENT</span>
              <span className="text-[10px] px-3 py-1 rounded-full bg-[#0A66F5]/10 text-[#0A66F5] border border-[#0A66F5]/20 font-bold tracking-wide uppercase font-inter">
                Recommended
              </span>
            </h3>
            <div className="flex flex-col gap-8">
              {sarsItems.map((item, idx) => (
                <motion.div 
                  key={`sars-${idx}`} 
                  variants={itemRightVariants}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-[#0A66F5]/10 flex items-center justify-center text-[#0A66F5] border border-[#0A66F5]/20">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-base font-bold !text-[#0B1120] font-space-grotesk tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 font-inter leading-relaxed max-w-[400px]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </ScrollReveal>
  );
}
