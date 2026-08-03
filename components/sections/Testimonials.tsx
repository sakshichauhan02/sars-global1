"use client";

import React, { useState, useEffect } from "react";
import ScrollReveal from "../ScrollReveal";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
  initials: string;
  bgClass: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Jenkins",
      role: "VP of Engineering",
      company: "CloudScale",
      review: "SARS TALENT transformed our engineering pipeline. We hired three principal Node.js developers in under 72 hours, and all of them have been exceptional.",
      rating: 5,
      initials: "SJ",
      bgClass: "bg-blue-600"
    },
    {
      name: "David Chen",
      role: "CTO",
      company: "FinTech Flow",
      review: "Finding experienced React developers was stalling our roadmap. SARS matched us with two engineers who onboarded seamlessly and began shipping code on day one.",
      rating: 5,
      initials: "DC",
      bgClass: "bg-purple-600"
    },
    {
      name: "Amanda Miller",
      role: "Director of Product",
      company: "HealthSync",
      review: "The technical vetting from SARS is top-notch. Unlike standard staffing agencies, every engineer they presented was fully capable of solving our complex architecture challenges.",
      rating: 5,
      initials: "AM",
      bgClass: "bg-teal-600"
    },
    {
      name: "Marcus Brody",
      role: "Engineering Manager",
      company: "RetailHub",
      review: "We needed to scale our dev squad rapidly for Q4. SARS provided a dedicated team of 5 pre-vetted devs who integrated perfectly with our internal practices.",
      rating: 5,
      initials: "MB",
      bgClass: "bg-amber-600"
    },
    {
      name: "Elena Rostova",
      role: "Founder & CEO",
      company: "AI Labs",
      review: "As an early-stage startup, we need high-caliber talent but don't have time for months of sourcing. SARS matched us with stellar Python/ML engineers instantly.",
      rating: 5,
      initials: "ER",
      bgClass: "bg-pink-600"
    },
    {
      name: "Thomas Wright",
      role: "VP of Technology",
      company: "LogiRoute",
      review: "Their contract-to-hire flexibility allowed us to verify candidate compatibility risk-free. Excellent payroll, compliance, and ongoing support throughout.",
      rating: 5,
      initials: "TW",
      bgClass: "bg-indigo-600"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [screenWidth, setScreenWidth] = useState(0);

  // Track window resizing to dynamically update visible card count
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setScreenWidth(window.innerWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleCount = () => {
    if (screenWidth >= 1024) return 3; // Desktop
    if (screenWidth >= 768) return 2;  // Tablet
    return 1;                    // Mobile
  };

  const visibleCount = getVisibleCount();

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Seamless infinite loop transition reset
  useEffect(() => {
    if (currentIndex >= testimonials.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // Matches transition duration
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, testimonials.length]);

  const displayTestimonials = [...testimonials, ...testimonials];

  return (
    <ScrollReveal className="relative w-full py-32 md:py-44 bg-[#F8FAFC] border-t border-slate-900/[0.06] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(10,102,245,0.04)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1200px] w-full px-6 flex flex-col gap-24">
        
        {/* Section Heading */}
        <div className="max-w-prose mx-auto text-center flex flex-col gap-6 items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0A66F5]/10 bg-[#0A66F5]/5 text-xs font-semibold tracking-wider text-[#0A66F5] uppercase">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black !text-[#0B1120] font-space-grotesk uppercase tracking-tight">
            Client Success
          </h2>
          <p className="text-slate-500 font-inter text-base md:text-lg leading-relaxed max-w-[650px] mx-auto">
            What engineering leaders say about working with SARS TALENT
          </p>
        </div>

        {/* Carousel Slider Viewport */}
        <div className="w-full overflow-hidden py-4">
          <div
            style={{
              transform: `translate3d(-${currentIndex * (100 / visibleCount)}%, 0, 0)`,
              transition: isTransitioning ? "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" : "none"
            }}
            className="flex w-full gap-0"
          >
            {displayTestimonials.map((item, idx) => {
              const relativeIndex = idx - currentIndex;
              const isCenter =
                visibleCount === 3
                  ? relativeIndex === 1
                  : relativeIndex === 0;

              return (
                <div
                  key={idx}
                  style={{
                    minWidth: `${100 / visibleCount}%`,
                    width: `${100 / visibleCount}%`
                  }}
                  className="px-4 box-border"
                >
                  <div
                    style={{
                      transform: isCenter ? "scale(1.02)" : "scale(1)",
                      transition: "transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease"
                    }}
                    className={`relative p-8 md:p-10 rounded-[24px] h-full flex flex-col justify-between select-none border backdrop-blur-[20px] transition-all duration-500 ${
                      isCenter
                        ? "bg-white border-[#0A66F5] shadow-[0_25px_60px_rgba(10,102,245,0.12)]"
                        : "bg-white/80 border-slate-900/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.02)]"
                    }`}
                  >
                    {/* Top 3px Glowing Line Accent */}
                    <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-[24px] bg-gradient-to-r from-[#0A66F5]/50 to-[#3B82F6]/50 transition-opacity duration-500 ${isCenter ? "opacity-100" : "opacity-30"}`} />

                    {/* Faint Metallic Border Highlight Inner Layer */}
                    <div className="absolute inset-0 rounded-[24px] border border-white/40 pointer-events-none z-10" />

                    <div className="flex flex-col gap-8">
                      {/* Star Rating */}
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <svg
                            key={i}
                            viewBox="0 0 24 24"
                            fill="#F59E0B"
                            className="w-4.5 h-4.5 text-amber-500"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-sm md:text-base text-slate-600 font-inter leading-relaxed italic max-w-prose">
                        &ldquo;{item.review}&rdquo;
                      </p>
                    </div>

                    {/* Reviewer Details */}
                    <div className="flex items-center gap-4 mt-10">
                      {/* Avatar */}
                      <div className={`w-12 h-12 rounded-full ${item.bgClass} flex items-center justify-center text-white font-inter font-bold text-sm shadow-inner`}>
                        {item.initials}
                      </div>
                      
                      {/* Name & Company */}
                      <div className="flex flex-col">
                        <span className="text-sm font-bold !text-[#0B1120] font-inter">
                          {item.name}
                        </span>
                        <span className="text-xs text-slate-500 font-inter mt-0.5">
                          {item.role}, <span className="font-semibold text-slate-600">{item.company}</span>
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {testimonials.map((_, index) => {
            const isActive = currentIndex % testimonials.length === index;
            return (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive ? "bg-[#0A66F5] w-6" : "bg-neutral-300 w-2 hover:bg-neutral-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>

      </div>
    </ScrollReveal>
  );
}
