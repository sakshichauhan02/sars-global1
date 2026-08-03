"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Trigger animations when the timeline enters the viewport
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Requirement Gathering",
      desc: "Define your technical needs, team size, timeline, and cultural alignment preferences.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      number: "02",
      title: "AI Talent Matching",
      desc: "Our AI matching engine crawls our global talent pool to source the top 3% matching candidates.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Technical Screening",
      desc: "Candidates undergo rigorous coding tests and technical interviews by subject matter experts.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 11 13 15 9" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Deployment & Support",
      desc: "Swift onboarding in under 48 hours with continued administrative and payroll support.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7">
          <path d="M22 2L11 13" />
          <path d="M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      )
    }
  ];

  // Variants for staggered node entry animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // 0.2s delay between each node
      }
    }
  };

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  } as const;

  return (
    <ScrollReveal className="relative w-full py-32 md:py-44 bg-[#0B1120] border-t border-white/5 flex flex-col items-center justify-center overflow-hidden">
      {/* Dark Blueprint Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-35 pointer-events-none z-0" />
      
      {/* Radial Glow Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(10,102,245,0.08)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#3B82F6]/[0.02] blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1200px] w-full px-6 flex flex-col gap-24">
        
        {/* Heading */}
        <div className="max-w-prose mx-auto text-center flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-wider text-slate-300 uppercase self-center">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black !text-white font-space-grotesk uppercase tracking-tight">
            Our Process
          </h2>
          <p className="text-slate-400 font-inter text-base md:text-lg leading-relaxed max-w-[650px] mx-auto">
            From Requirement Scoping to Global Engineer Deployment
          </p>
        </div>

        {/* Responsive Timeline Container */}
        <div
          ref={containerRef}
          className="relative w-full max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-10 px-6"
        >
          {/* Connector Line (Desktop: Horizontal) */}
          <div className="absolute top-[32px] left-[48px] right-[48px] h-[2px] bg-white/10 hidden md:block pointer-events-none">
            {/* Travelling Pulse Dot */}
            <motion.div
              initial={{ left: "0%" }}
              animate={{ left: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "linear"
              }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0A66F5] shadow-[0_0_15px_8px_rgba(10,102,245,0.6)]"
            />
          </div>
          
          {/* Connector Line (Mobile: Vertical) */}
          <div className="absolute left-[50px] top-[38px] bottom-[38px] w-[2px] bg-white/10 md:hidden pointer-events-none">
            {/* Travelling Pulse Dot */}
            <motion.div
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "linear"
              }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#0A66F5] shadow-[0_0_15px_8px_rgba(10,102,245,0.6)]"
            />
          </div>

          {/* Staggered Timeline Nodes Wrapper */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full flex flex-col md:flex-row justify-between gap-16 md:gap-10"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={nodeVariants}
                className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-8 md:gap-8 flex-1"
              >
                
                {/* Node Circle */}
                <div className="relative flex-shrink-0 w-[52px] h-[52px] md:w-16 md:h-16 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md z-10 transition-all duration-400 hover:border-[#0A66F5]/50 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(10,102,245,0.2)]">
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#0A66F5] text-white font-space-grotesk text-[10px] md:text-[11px] font-bold flex items-center justify-center shadow-[0_2px_8px_rgba(10,102,245,0.4)]">
                    {step.number}
                  </div>
                  {/* SVG Icon */}
                  <div className="text-[#0A66F5] flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    {step.icon}
                  </div>
                </div>

                {/* Node Details */}
                <div className="flex flex-col gap-4 pt-1 md:pt-0">
                  <h3 className="text-lg md:text-xl font-bold !text-white font-space-grotesk tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-inter leading-relaxed max-w-[240px] md:mx-auto">
                    {step.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </ScrollReveal>
  );
}
