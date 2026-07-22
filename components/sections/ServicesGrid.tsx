"use client";

import React from "react";
import { motion } from "framer-motion";

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
      title: "Dedicated Teams",
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
    <section className="w-full py-24 bg-white flex flex-col items-center justify-center border-t border-neutral-100">
      <div className="max-w-[1200px] w-full px-6 flex flex-col gap-16">
        {/* Title Block */}
        <div className="max-w-xl flex flex-col gap-4 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-space-grotesk uppercase tracking-tight">
            Staffing Solutions
          </h2>
          <p className="text-neutral-500 font-inter text-sm md:text-base leading-relaxed">
            Tailored recruitment and talent models built to solve your scaling challenges, from single hires to entire product squads.
          </p>
        </div>

        {/* Responsive Grid: Desktop: 4, Tablet: 2, Mobile: 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                borderColor: "#0A66F5",
                boxShadow: "0 15px 30px rgba(10, 102, 245, 0.15)"
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(16px)",
                borderColor: "rgba(176, 184, 196, 0.2)",
                borderWidth: "1px",
                borderRadius: "16px",
              }}
              className="group flex flex-col justify-between p-8 h-full cursor-pointer select-none transition-colors border"
            >
              <div className="flex flex-col gap-6">
                {/* Large Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-[#0A66F5]/5 flex items-center justify-center">
                  {service.icon}
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 font-space-grotesk">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-500 font-inter leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* CTA Arrow */}
              <div className="mt-8 flex items-center gap-2 text-[#0A66F5] font-semibold text-sm font-inter">
                <span>Learn more</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
