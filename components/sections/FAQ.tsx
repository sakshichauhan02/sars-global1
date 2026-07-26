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
    <ScrollReveal className="w-full py-24 bg-white border-t border-neutral-100 flex flex-col items-center justify-center">
      <div className="max-w-[800px] w-full px-6 flex flex-col gap-12">
        
        {/* Section Heading */}
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold !text-neutral-900 font-space-grotesk uppercase tracking-tight">
            FAQ
          </h2>
          <p className="text-neutral-500 font-inter text-sm md:text-base">
            Frequently Asked Questions
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4 w-full">
          {faqs.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={idx}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "bg-[#0A66F5]/5 border-l-[3px] border-l-[#0A66F5] border-neutral-200"
                    : "bg-white border-neutral-200"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 cursor-pointer select-none text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66F5]/50 focus-visible:ring-offset-2"
                  aria-expanded={isActive}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className="font-bold !text-neutral-900 font-space-grotesk text-base tracking-tight pr-4">
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
                      <div className="px-6 pb-6 text-sm md:text-base text-neutral-600 font-inter leading-relaxed">
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
