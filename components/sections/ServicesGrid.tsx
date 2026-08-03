"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

export default function ServicesGrid() {
  const services = [
    {
      title: "Permanent Hiring",
      description: "Secure top-tier technical talent for long-term growth. We source, vet, and match engineers who align with your culture and technical roadmap.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-[#0A66F5]">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    },
    {
      title: "Contract Staffing",
      description: "Scale your team rapidly with high-caliber contract engineers. Enjoy flexible terms and swift deployment with matches in under 48 hours.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-[#0A66F5]">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    {
      title: "Executive Search",
      description: "Identify and attract senior technical leaders, CTOs, and principal architects who will guide your vision and scale your engineering teams.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-[#0A66F5]">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: "Dedicated Hiring Teams",
      description: "Deploy pre-vetted, high-performing dedicated squads tailored to your roadmap. We handle sourcing, payroll, and scaling seamlessly.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-[#0A66F5]">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  return (
    <ScrollReveal className="relative w-full py-32 md:py-44 bg-white flex flex-col items-center justify-center border-t border-slate-200/50 overflow-hidden">
      {/* Soft Metallic Mesh Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 0.7) 40%, rgba(241, 245, 249, 0.9) 100%)"
        }}
      />
      
      {/* Very subtle blue radial gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(10,102,245,0.05),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_bottom_left,rgba(10,102,245,0.06),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(10,102,245,0.03),transparent_70%)] pointer-events-none z-0" />
      
      {/* Faint Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none z-0" />
      
      {/* Soft floating blue gradient blobs behind cards */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[#0A66F5]/[0.025] blur-[120px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/[0.03] blur-[140px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '12s' }} />

      <div className="relative z-10 max-w-[1200px] w-full px-6 flex flex-col gap-24">
        {/* Title Block */}
        <div className="flex flex-col gap-6 text-center items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0A66F5]/10 bg-[#0A66F5]/5 text-xs font-semibold tracking-wider text-[#0A66F5] uppercase">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold !text-[#0B1120] font-space-grotesk uppercase tracking-tight">
            Staffing Solutions
          </h2>
          <p className="text-slate-500 font-inter text-base md:text-lg leading-relaxed max-w-[650px] mx-auto">
            Tailored recruitment and talent models built to solve your scaling challenges, from single hires to entire product squads.
          </p>
        </div>

        {/* Responsive Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 w-full"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.02,
                borderColor: "rgba(10, 102, 245, 0.8)",
                boxShadow: "0 20px 60px rgba(10, 102, 245, 0.18)"
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1] as const
              }}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.85)"
              }}
              className="group relative flex flex-col justify-between p-8 md:p-10 min-h-[440px] h-[440px] cursor-pointer select-none border border-slate-900/[0.08] backdrop-blur-[20px] rounded-[24px] overflow-hidden transition-all duration-300"
            >
              {/* 3px Glowing Top Line Accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0A66F5]/40 via-[#0A66F5] to-[#3B82F6]/40 opacity-40 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Faint Metallic Border Highlight Inner Layer */}
              <div className="absolute inset-0 rounded-[24px] border border-white/40 pointer-events-none z-10" />

              <div className="flex flex-col gap-8">
                {/* Large circular glass icon container (72px) */}
                <div className="relative w-[72px] h-[72px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#0A66F5]/10 to-[#3B82F6]/5 border border-[#0A66F5]/10 shadow-[0_8px_32px_rgba(10,102,245,0.04)] transition-all duration-300 group-hover:border-[#0A66F5]/30">
                  {/* Subtle inner circular glow */}
                  <div className="absolute inset-1 rounded-full bg-[#0A66F5]/[0.02] group-hover:bg-[#0A66F5]/[0.08] transition-colors duration-300" />
                  
                  {/* Rotating and scaling icon */}
                  <div className="relative z-10 text-[#0A66F5] transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110">
                    {service.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl md:text-2xl font-bold !text-[#0B1120] font-space-grotesk tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-inter leading-relaxed max-w-[280px]">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-auto pt-6 flex items-center gap-3 text-[#0A66F5] font-bold text-sm font-inter transition-all duration-300">
                <span>Learn more</span>
                <div className="w-8 h-8 rounded-full bg-[#0A66F5]/5 border border-[#0A66F5]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#0A66F5] group-hover:border-[#0A66F5] group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#0A66F5] transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ScrollReveal>
  );
}
