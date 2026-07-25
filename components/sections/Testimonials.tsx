"use client";

import React, { useState, useEffect } from "react";

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

  // Duplicate list to support seamless infinite loop transitions
  const displayTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="w-full py-24 bg-white border-t border-neutral-100 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-[1200px] w-full px-6 flex flex-col gap-16">
        
        {/* Section Heading */}
        <div className="max-w-xl mx-auto text-center flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold !text-neutral-900 font-space-grotesk uppercase tracking-tight">
            Client Success
          </h2>
          <p className="text-neutral-500 font-inter text-sm md:text-base leading-relaxed">
            What engineering leaders say about working with SARS TALENT
          </p>
        </div>

        {/* Carousel Slider Viewport */}
        <div className="w-full overflow-hidden py-4">
          <div
            style={{
              transform: `translate3d(-${currentIndex * (100 / visibleCount)}%, 0, 0)`,
              transition: isTransitioning ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" : "none"
            }}
            className="flex w-full gap-0"
          >
            {displayTestimonials.map((item, idx) => {
              // Highlight the center card on Desktop, or the first card on Mobile/Tablet
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
                  className="px-3 box-border"
                >
                  <div
                    style={{
                      transform: isCenter ? "scale(1.02)" : "scale(1)",
                      transition: "transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease"
                    }}
                    className={`bg-white border p-8 rounded-[16px] h-full flex flex-col justify-between select-none ${
                      isCenter
                        ? "border-[#0A66F5]/40 shadow-[0_10px_30px_-10px_rgba(10,102,245,0.12)]"
                        : "border-neutral-200/80 shadow-sm"
                    }`}
                  >
                    <div className="flex flex-col gap-6">
                      {/* Star Rating */}
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <svg
                            key={i}
                            viewBox="0 0 24 24"
                            fill="#F59E0B"
                            className="w-5 h-5 text-amber-500"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-sm md:text-base text-neutral-600 font-inter leading-relaxed italic">
                        &ldquo;{item.review}&rdquo;
                      </p>
                    </div>

                    {/* Reviewer Details */}
                    <div className="flex items-center gap-4 mt-8">
                      {/* Avatar */}
                      <div className={`w-12 h-12 rounded-full ${item.bgClass} flex items-center justify-center text-white font-space-grotesk font-bold text-sm shadow-inner`}>
                        {item.initials}
                      </div>
                      
                      {/* Name & Company */}
                      <div className="flex flex-col">
                        <span className="text-sm font-bold !text-neutral-900 font-space-grotesk">
                          {item.name}
                        </span>
                        <span className="text-xs text-neutral-500 font-inter">
                          {item.role}, <span className="font-semibold text-neutral-600">{item.company}</span>
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
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive ? "bg-[#0A66F5] w-6" : "bg-neutral-300 w-2.5 hover:bg-neutral-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
