"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is SARS TALENT?",
      answer: "SARS TALENT is a premium global tech recruitment and talent matching platform. We connect high-growth companies with the top 3% of software engineering talent worldwide, streamlining hiring from sourcing to onboarding."
    },
    {
      question: "How fast can I hire an engineer?",
      answer: "Our average matching turnaround is under 72 hours. Once we gather your specific technical requirements, our AI matching engine filters candidates instantly and provides pre-vetted options for you to interview."
    },
    {
      question: "What technologies do your engineers specialize in?",
      answer: "Our talent network covers leading modern technology stacks, including React, Next.js, Node.js, Python, AWS, Azure, DevOps, Go, Java, Kubernetes, and machine learning architectures."
    },
    {
      question: "Is there a vetting process?",
      answer: "Yes, absolutely. Every engineer undergoes a multi-stage vetting process including coding tests, technical architecture reviews conducted by senior domain experts, and cultural alignment evaluations."
    },
    {
      question: "How does contract-to-hire staffing work?",
      answer: "Contract-to-hire allows you to work with an engineer on a flexible contract basis first (typically 3 to 6 months) to evaluate compatibility risk-free before making a permanent full-time employment offer."
    },
    {
      question: "Do you handle international payroll and compliance?",
      answer: "Yes, we handle all global onboarding, local labor law compliance, tax withholding, and monthly payroll processing so your internal team can focus entirely on shipping product."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

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

      <div className="relative z-10 max-w-[800px] w-full px-6 flex flex-col gap-20">
        
        {/* Section Heading */}
        <div className="text-center flex flex-col gap-6 max-w-prose mx-auto items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0A66F5]/10 bg-[#0A66F5]/5 text-xs font-semibold tracking-wider text-[#0A66F5] uppercase">
            Support
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black !text-[#0B1120] font-space-grotesk uppercase tracking-tight">
            FAQ
          </h2>
          <p className="text-slate-500 font-inter text-base md:text-lg leading-relaxed max-w-[650px] mx-auto">
            Frequently Asked Questions
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-6 w-full">
          {faqs.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={idx}
                className={`relative border rounded-[24px] overflow-hidden transition-all duration-300 backdrop-blur-[20px] ${
                  isActive
                    ? "bg-white border-[#0A66F5] shadow-[0_15px_45px_rgba(10,102,245,0.08)] scale-[1.01]"
                    : "bg-white/80 border-slate-900/[0.08] hover:border-slate-300/60 shadow-sm"
                }`}
              >
                {/* Top Glowing Accent Line when Active */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0A66F5] to-[#3B82F6] z-10" />
                )}

                {/* Inner Metallic Border */}
                <div className="absolute inset-0 rounded-[24px] border border-white/40 pointer-events-none z-10" />

                {/* Accordion Trigger */}
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 cursor-pointer select-none text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66F5]/50 focus-visible:ring-offset-2"
                  aria-expanded={isActive}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className="font-bold !text-[#0B1120] font-space-grotesk text-base md:text-lg tracking-tight pr-4">
                    {item.question}
                  </span>
                  
                  {/* Plus icon turning into cross on rotate */}
                  <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 text-[#0A66F5] w-6 h-6 flex items-center justify-center"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </motion.div>
                </button>

                {/* Animated Expandable Panel */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`faq-btn-${idx}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 md:px-8 md:pb-8 text-sm md:text-base text-slate-500 font-inter leading-relaxed max-w-prose">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </ScrollReveal>
  );
}
