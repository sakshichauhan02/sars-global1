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
    <ScrollReveal className="w-full py-24 bg-[#F8FAFC] border-t border-neutral-200/60 flex flex-col items-center justify-center">
      <div className="max-w-[1200px] w-full px-6 flex flex-col gap-16">
        
        {/* Section Heading */}
        <div className="max-w-xl mx-auto text-center flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold !text-neutral-900 font-space-grotesk uppercase tracking-tight">
            Featured Roles
          </h2>
          <p className="text-neutral-500 font-inter text-sm md:text-base leading-relaxed">
            Explore premium software engineering opportunities within our global partner network
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                y: -8,
                borderColor: "#0A66F5",
                boxShadow: "0 8px 32px rgba(10, 102, 245, 0.15)"
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  // Simulate applying
                  const btn = e.currentTarget.querySelector("span");
                  if (btn) btn.click();
                }
              }}
              className="group flex flex-col justify-between p-8 cursor-pointer select-none h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66F5]/50 focus-visible:ring-offset-2 bg-white/10 backdrop-blur-[16px] border border-white/10 rounded-xl"
            >
              <div>
                {/* Top Section: Logo & Badge */}
                <div className="flex items-center justify-between w-full mb-6">
                  {/* Company Logo */}
                  {job.logo}
                  
                  {/* Featured Badge */}
                  {job.featured && (
                    <span className="text-xs px-2.5 py-1 rounded bg-[#0A66F5]/10 text-[#0A66F5] border border-[#0A66F5]/25 font-bold tracking-wide uppercase font-inter">
                      Featured
                    </span>
                  )}
                </div>

                {/* Middle Section: Details */}
                <div className="flex flex-col gap-4">
                  <div>
                    {/* Role Title */}
                    <h3 className="text-lg md:text-xl font-bold !text-neutral-900 font-space-grotesk tracking-tight leading-tight">
                      {job.title}
                    </h3>
                    {/* Company */}
                    <span className="text-sm font-semibold text-neutral-500 font-inter mt-1 block">
                      {job.company}
                    </span>
                  </div>

                  {/* Metadata: Location & Salary */}
                  <div className="flex flex-col gap-1.5 border-y border-neutral-100 py-3 font-inter text-xs md:text-sm text-neutral-600">
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-neutral-400">
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-neutral-400">
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                      <span className="font-semibold text-neutral-700">{job.salary}</span>
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {job.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200/50 font-medium font-inter"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Section: Button */}
              <div className="mt-8 pt-6 border-t border-neutral-100 w-full">
                <span className="text-[#0A66F5] font-bold text-sm md:text-base font-inter flex items-center gap-2 transition-colors duration-300 group-hover:text-[#0852c4]">
                  Apply Now
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </ScrollReveal>
  );
}
