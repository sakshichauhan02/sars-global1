"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
  };

  return (
    <section className="w-full py-24 bg-[#0B1120] border-t border-white/5 flex flex-col items-center justify-center">
      <div className="max-w-[1200px] w-full px-6 flex flex-col gap-16">
        
        {/* Heading */}
        <div className="max-w-xl mx-auto text-center flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold !text-white font-space-grotesk uppercase tracking-tight">
            Our Process
          </h2>
          <p className="text-metallic-gray font-inter text-sm md:text-base leading-relaxed">
            From Requirement to Deployment
          </p>
        </div>

        {/* Responsive Timeline Container */}
        <div
          ref={containerRef}
          className="relative w-full max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-6 px-6"
        >
          {/* Connector Line SVG (Desktop: Horizontal) */}
          <svg className="absolute top-[32px] left-[40px] right-[40px] h-[4px] w-[calc(100%-80px)] hidden md:block overflow-visible pointer-events-none">
            {/* Background Line */}
            <line x1="0" y1="2" x2="100%" y2="2" stroke="#1E293B" strokeWidth="2" />
            {/* Animated Draw Line */}
            <motion.line
              x1="0"
              y1="2"
              x2="100%"
              y2="2"
              stroke="#B0B8C4"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            {/* Travelling Pulse Dot */}
            <motion.circle
              r="4"
              fill="#0A66F5"
              initial={{ cx: "0%" }}
              animate={isInView ? { cx: "100%" } : { cx: "0%" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear"
              }}
              cy="2"
              style={{ filter: "drop-shadow(0 0 4px #0A66F5)" }}
            />
          </svg>
          
          {/* Connector Line SVG (Mobile: Vertical) */}
          <svg className="absolute left-[30px] top-6 bottom-6 w-[4px] h-[calc(100%-48px)] md:hidden overflow-visible pointer-events-none">
            {/* Background Line */}
            <line x1="2" y1="0" x2="2" y2="100%" stroke="#1E293B" strokeWidth="2" />
            {/* Animated Draw Line */}
            <motion.line
              x1="2"
              y1="0"
              x2="2"
              y2="100%"
              stroke="#B0B8C4"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            {/* Travelling Pulse Dot */}
            <motion.circle
              r="4"
              fill="#0A66F5"
              initial={{ cy: "0%" }}
              animate={isInView ? { cy: "100%" } : { cy: "0%" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear"
              }}
              cx="2"
              style={{ filter: "drop-shadow(0 0 4px #0A66F5)" }}
            />
          </svg>

          {/* Staggered Timeline Nodes Wrapper */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full flex flex-col md:flex-row justify-between gap-12 md:gap-6"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={nodeVariants}
                className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-6 flex-1"
              >
                
                {/* Node Circle */}
                <div className="relative flex-shrink-0 w-[52px] h-[52px] md:w-16 md:h-16 rounded-full bg-[#0B1120] border-2 border-neutral-700/50 flex items-center justify-center shadow-sm z-10">
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#0A66F5] text-white font-space-grotesk text-[10px] md:text-[11px] font-bold flex items-center justify-center shadow-sm">
                    {step.number}
                  </div>
                  {/* SVG Icon */}
                  <div className="text-[#0A66F5] flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* Node Details */}
                <div className="flex flex-col gap-2 pt-1 md:pt-0">
                  <h3 className="text-lg font-bold !text-white font-space-grotesk tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-400 font-inter leading-relaxed max-w-xs md:max-w-none">
                    {step.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
