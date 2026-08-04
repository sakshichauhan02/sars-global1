"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
  initials: string;
  color: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    { name: "Sarah Jenkins", role: "VP of Engineering", company: "CloudScale", review: "SARS transformed our engineering pipeline. Three senior Node.js devs hired in under 72 hours — all exceptional. Night and day vs our old recruiting vendor.", rating: 5, initials: "SJ", color: "from-blue-600 to-cyan-500" },
    { name: "David Chen", role: "CTO", company: "FinTech Flow", review: "Finding experienced React developers was stalling our roadmap. SARS matched us with two engineers who began shipping code on day one. Insane speed.", rating: 5, initials: "DC", color: "from-violet-600 to-blue-500" },
    { name: "Amanda Miller", role: "Director of Product", company: "HealthSync", review: "The technical vetting is top-notch. Every engineer they presented could actually solve our complex architecture challenges. Zero resume padding.", rating: 5, initials: "AM", color: "from-teal-600 to-cyan-500" },
    { name: "Marcus Brody", role: "Engineering Manager", company: "RetailHub", review: "Scaled our dev squad by 5 engineers in two weeks for Q4. They integrated seamlessly with our team culture and practices. Remarkable execution.", rating: 5, initials: "MB", color: "from-orange-600 to-pink-500" },
    { name: "Elena Rostova", role: "Founder & CEO", company: "AI Labs", review: "As an early-stage startup, we need talent fast. SARS matched us with stellar Python/ML engineers instantly. Worth every penny.", rating: 5, initials: "ER", color: "from-pink-600 to-violet-600" },
    { name: "Thomas Wright", role: "VP of Technology", company: "LogiRoute", review: "Contract-to-hire flexibility let us verify fit risk-free. Excellent payroll, compliance, and ongoing support. SARS is our go-to recruiting partner now.", rating: 5, initials: "TW", color: "from-indigo-600 to-blue-600" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => { if (typeof window !== "undefined") setScreenWidth(window.innerWidth); };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCount = screenWidth >= 1024 ? 3 : screenWidth >= 768 ? 2 : 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentIndex >= testimonials.length) {
      const t = setTimeout(() => { setIsTransitioning(false); setCurrentIndex(0); }, 500);
      return () => clearTimeout(t);
    }
  }, [currentIndex, testimonials.length]);

  const displayTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative w-full py-32 bg-[#020409] overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/6 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase font-dm-sans mb-5">
            Testimonials
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            What Leaders{" "}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-[500px] mx-auto">
            Engineering leaders who hired through SARS Global share their experience.
          </p>
        </motion.div>

        <div className="w-full overflow-hidden py-4">
          <div
            style={{
              transform: `translate3d(-${currentIndex * (100 / visibleCount)}%, 0, 0)`,
              transition: isTransitioning ? "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" : "none"
            }}
            className="flex w-full"
          >
            {displayTestimonials.map((item, idx) => {
              const relativeIndex = idx - currentIndex;
              const isCenter = visibleCount === 3 ? relativeIndex === 1 : relativeIndex === 0;
              return (
                <div
                  key={idx}
                  style={{ minWidth: `${100 / visibleCount}%`, width: `${100 / visibleCount}%` }}
                  className="px-3 box-border"
                >
                  <div
                    style={{
                      transform: isCenter ? "scale(1.03)" : "scale(0.97)",
                      transition: "transform 0.5s ease, opacity 0.5s ease",
                      opacity: isCenter ? 1 : 0.55
                    }}
                    className={`relative p-7 rounded-3xl h-full flex flex-col justify-between select-none border backdrop-blur-sm transition-all duration-500 ${
                      isCenter
                        ? "border-blue-500/40 bg-blue-500/5 shadow-[0_0_40px_rgba(10,102,245,0.12)]"
                        : "border-white/5 bg-white/[0.02]"
                    }`}
                  >
                    {isCenter && <div className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl bg-gradient-to-r ${item.color}`} />}

                    <div className="flex flex-col gap-5">
                      <div className="flex gap-0.5">
                        {[...Array(item.rating)].map((_, i) => (
                          <span key={i} className="text-amber-400 text-base">★</span>
                        ))}
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed italic">
                        &ldquo;{item.review}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center gap-3 mt-7">
                      <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                        {item.initials}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{item.name}</p>
                        <p className="text-slate-500 text-xs">{item.role}, {item.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, index) => {
            const isActive = currentIndex % testimonials.length === index;
            return (
              <button
                key={index}
                onClick={() => { setIsTransitioning(true); setCurrentIndex(index); }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive ? "bg-blue-500 w-6" : "bg-white/10 w-1.5 hover:bg-white/25"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
