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
    <ScrollReveal className="w-full py-20 bg-white border-t border-neutral-100 flex flex-col gap-8 overflow-hidden">
      {/* Title & Subheading */}
      <div className="max-w-4xl mx-auto text-center px-6 flex flex-col gap-3">
        <h2 className="text-3xl md:text-4xl font-bold !text-neutral-900 font-space-grotesk uppercase tracking-tight">
          Industries & Technologies
        </h2>
        <p className="text-neutral-500 max-w-xl mx-auto font-inter text-sm md:text-base">
          Our global talent network specializes in cutting-edge industries and leading modern technology stacks.
        </p>
      </div>

      <div className="flex flex-col gap-6 relative w-full mt-4">
        {/* Soft edge fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row 1: Industry Pills (Scrolls Right-to-Left / Left) */}
        <div className="marquee-parent w-full overflow-hidden flex items-center">
          <div className="marquee-left">
            {/* First Set */}
            <div className="flex items-center gap-4 px-2">
              {row1Tags.map((tag, idx) => (
                <div
                  key={`r1-1-${idx}`}
                  className="bg-neutral-50/50 border border-neutral-200/80 !text-neutral-800 px-[20px] py-[10px] rounded-full whitespace-nowrap text-sm md:text-base font-medium transition-all duration-300 hover:bg-neutral-100/80 hover:border-neutral-300 hover:scale-105 select-none cursor-default shadow-sm"
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
                  className="bg-neutral-50/50 border border-neutral-200/80 !text-neutral-800 px-[20px] py-[10px] rounded-full whitespace-nowrap text-sm md:text-base font-medium transition-all duration-300 hover:bg-neutral-100/80 hover:border-neutral-300 hover:scale-105 select-none cursor-default shadow-sm"
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
                  className="bg-neutral-50/50 border border-neutral-200/80 !text-neutral-800 px-[20px] py-[10px] rounded-full whitespace-nowrap text-sm md:text-base font-medium transition-all duration-300 hover:bg-neutral-100/80 hover:border-neutral-300 hover:scale-105 select-none cursor-default shadow-sm"
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
                  className="bg-neutral-50/50 border border-neutral-200/80 !text-neutral-800 px-[20px] py-[10px] rounded-full whitespace-nowrap text-sm md:text-base font-medium transition-all duration-300 hover:bg-neutral-100/80 hover:border-neutral-300 hover:scale-105 select-none cursor-default shadow-sm"
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
