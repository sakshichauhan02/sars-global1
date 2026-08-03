"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

interface Job {
  title: string;
  company: string;
  location: string;
  salary: string;
  tags: string[];
  featured: boolean;
  logo: React.ReactNode;
}

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

export default function FeaturedRoles() {
  const jobs: Job[] = [
    {
      title: "Senior Frontend Engineer",
      company: "FinTech Flow",
      location: "New York, NY (Remote)",
      salary: "$140k - $170k",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      featured: true,
      logo: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect width="40" height="40" rx="8" fill="#8B5CF6" fillOpacity="0.1" />
          <path d="M12 20C12 15 16 12 20 12C24 12 28 16 28 20C28 24 24 28 20 28C16 28 12 24 12 20Z" stroke="#8B5CF6" strokeWidth="2.5" />
          <circle cx="20" cy="20" r="4" fill="#8B5CF6" />
        </svg>
      )
    },
    {
      title: "Lead Backend Engineer",
      company: "CloudScale",
      location: "San Francisco, CA (Hybrid)",
      salary: "$160k - $190k",
      tags: ["Node.js", "Express", "PostgreSQL", "AWS"],
      featured: true,
      logo: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect width="40" height="40" rx="8" fill="#06B6D4" fillOpacity="0.1" />
          <path d="M20 10L30 15L20 20L10 15L20 10Z" stroke="#06B6D4" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M10 25L20 30L30 25" stroke="#06B6D4" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M10 20L20 25L30 20" stroke="#06B6D4" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Machine Learning Specialist",
      company: "AI Labs",
      location: "Austin, TX (Remote)",
      salary: "$180k - $210k",
      tags: ["Python", "PyTorch", "Docker", "Kubernetes"],
      featured: true,
      logo: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect width="40" height="40" rx="8" fill="#EC4899" fillOpacity="0.1" />
          <circle cx="20" cy="20" r="8" stroke="#EC4899" strokeWidth="2.5" />
          <circle cx="20" cy="20" r="3" fill="#EC4899" />
          <line x1="20" y1="6" x2="20" y2="12" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="28" x2="20" y2="34" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
          <line x1="6" y1="20" x2="12" y2="20" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
          <line x1="28" y1="20" x2="34" y2="20" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <ScrollReveal className="relative w-full py-32 md:py-44 bg-white border-t border-slate-900/[0.06] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Decor */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 0.7) 40%, rgba(241, 245, 249, 0.9) 100%)"
        }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(10,102,245,0.04)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1200px] w-full px-6 flex flex-col gap-24">
        
        {/* Section Heading */}
        <div className="max-w-prose mx-auto text-center flex flex-col gap-6 items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0A66F5]/10 bg-[#0A66F5]/5 text-xs font-semibold tracking-wider text-[#0A66F5] uppercase">
            Careers
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black !text-[#0B1120] font-space-grotesk uppercase tracking-tight">
            Featured Roles
          </h2>
          <p className="text-slate-500 font-inter text-base md:text-lg leading-relaxed max-w-[650px] mx-auto">
            Explore premium software engineering opportunities within our global partner network
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 w-full"
        >
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
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
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  const btn = e.currentTarget.querySelector("span");
                  if (btn) btn.click();
                }
              }}
              className="group relative flex flex-col justify-between p-8 md:p-10 cursor-pointer select-none min-h-[420px] h-[420px] border border-slate-900/[0.08] backdrop-blur-[20px] rounded-[24px] overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66F5]/50"
            >
              {/* 3px Glowing Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0A66F5]/40 to-[#3B82F6]/40 opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Faint Metallic Border Highlight Inner Layer */}
              <div className="absolute inset-0 rounded-[24px] border border-white/40 pointer-events-none z-10" />

              <div>
                {/* Top Section: Logo & Badge */}
                <div className="flex items-center justify-between w-full mb-6">
                  {/* Company Logo */}
                  <div className="transition-transform duration-300 group-hover:scale-105">
                    {job.logo}
                  </div>
                  
                  {/* Featured Badge */}
                  {job.featured && (
                    <span className="text-[10px] px-3 py-1 rounded-full bg-[#0A66F5]/10 text-[#0A66F5] border border-[#0A66F5]/20 font-bold tracking-wide uppercase font-inter">
                      Featured
                    </span>
                  )}
                </div>

                {/* Middle Section: Details */}
                <div className="flex flex-col gap-5">
                  <div>
                    {/* Role Title */}
                    <h3 className="text-xl md:text-2xl font-bold !text-[#0B1120] font-space-grotesk tracking-tight leading-tight transition-colors duration-300 group-hover:text-[#0A66F5]">
                      {job.title}
                    </h3>
                    {/* Company */}
                    <span className="text-sm font-semibold text-slate-400 font-inter mt-1 block">
                      {job.company}
                    </span>
                  </div>

                  {/* Metadata: Location & Salary */}
                  <div className="flex flex-col gap-2.5 border-y border-slate-100 py-3.5 font-inter text-xs md:text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-slate-400">
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-slate-400">
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                      <span className="font-bold text-slate-700">{job.salary}</span>
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mt-1">
                    {job.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-3 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-100 font-medium font-inter transition-colors duration-200 group-hover:bg-slate-100 group-hover:text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Section: Button */}
              <div className="mt-auto pt-4 w-full">
                <span className="text-[#0A66F5] font-bold text-sm tracking-wide font-inter flex items-center gap-2 transition-colors duration-300 group-hover:text-[#0852c4]">
                  Apply Now
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ScrollReveal>
  );
}
