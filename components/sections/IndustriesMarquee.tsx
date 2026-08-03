"use client";

import React from "react";
import ScrollReveal from "../ScrollReveal";

export default function IndustriesMarquee() {
  const row1Tags = [
    "Healthcare",
    "Finance",
    "Retail",
    "Logistics",
    "Education",
    "Manufacturing",
    "AI",
    "SaaS"
  ];

  const row2Tags = [
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "Azure",
    "Python",
    "Java",
    "Docker",
    "Kubernetes",
    "DevOps"
  ];

  return (
    <ScrollReveal className="w-full py-32 md:py-44 bg-[#F8FAFC] border-t border-slate-900/[0.06] flex flex-col gap-12 overflow-hidden">
      {/* Title & Subheading */}
      <div className="max-w-prose mx-auto text-center px-6 flex flex-col gap-6 font-inter items-center justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0A66F5]/10 bg-[#0A66F5]/5 text-xs font-semibold tracking-wider text-[#0A66F5] uppercase">
          Ecosystem
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black !text-[#0B1120] font-space-grotesk uppercase tracking-tight">
          Industries & Technologies
        </h2>
        <p className="text-slate-500 max-w-[650px] mx-auto font-inter text-base md:text-lg leading-relaxed">
          Our global talent network specializes in cutting-edge industries and leading modern technology stacks.
        </p>
      </div>

      <div className="flex flex-col gap-8 relative w-full mt-4">
        {/* Soft edge fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Industry Pills (Scrolls Right-to-Left / Left) */}
        <div className="marquee-parent w-full overflow-hidden flex items-center">
          <div className="marquee-left">
            {/* First Set */}
            <div className="flex items-center gap-4 px-2">
              {row1Tags.map((tag, idx) => (
                <div
                  key={`r1-1-${idx}`}
                  className="bg-white/80 border border-slate-900/[0.08] backdrop-blur-md !text-slate-800 px-[24px] py-[12px] rounded-full whitespace-nowrap text-sm md:text-base font-bold font-inter transition-all duration-300 hover:border-[#0A66F5]/60 hover:bg-white hover:scale-105 hover:shadow-[0_10px_25px_rgba(10,102,245,0.08)] select-none cursor-default"
                >
                  {tag}
                </div>
              ))}
            </div>
            {/* Duplicated Set for seamless looping */}
            <div className="flex items-center gap-4 px-2" aria-hidden="true">
              {row1Tags.map((tag, idx) => (
                <div
                  key={`r1-2-${idx}`}
                  className="bg-white/80 border border-slate-900/[0.08] backdrop-blur-md !text-slate-800 px-[24px] py-[12px] rounded-full whitespace-nowrap text-sm md:text-base font-bold font-inter transition-all duration-300 hover:border-[#0A66F5]/60 hover:bg-white hover:scale-105 hover:shadow-[0_10px_25px_rgba(10,102,245,0.08)] select-none cursor-default"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Technology Pills (Scrolls Left-to-Right / Right) */}
        <div className="marquee-parent w-full overflow-hidden flex items-center">
          <div className="marquee-right">
            {/* First Set */}
            <div className="flex items-center gap-4 px-2">
              {row2Tags.map((tag, idx) => (
                <div
                  key={`r2-1-${idx}`}
                  className="bg-white/80 border border-slate-900/[0.08] backdrop-blur-md !text-slate-800 px-[24px] py-[12px] rounded-full whitespace-nowrap text-sm md:text-base font-bold font-inter transition-all duration-300 hover:border-[#0A66F5]/60 hover:bg-white hover:scale-105 hover:shadow-[0_10px_25px_rgba(10,102,245,0.08)] select-none cursor-default"
                >
                  {tag}
                </div>
              ))}
            </div>
            {/* Duplicated Set for seamless looping */}
            <div className="flex items-center gap-4 px-2" aria-hidden="true">
              {row2Tags.map((tag, idx) => (
                <div
                  key={`r2-2-${idx}`}
                  className="bg-white/80 border border-slate-900/[0.08] backdrop-blur-md !text-slate-800 px-[24px] py-[12px] rounded-full whitespace-nowrap text-sm md:text-base font-bold font-inter transition-all duration-300 hover:border-[#0A66F5]/60 hover:bg-white hover:scale-105 hover:shadow-[0_10px_25px_rgba(10,102,245,0.08)] select-none cursor-default"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
