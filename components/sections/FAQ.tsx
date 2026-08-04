"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "How quickly can SARS Global find me an engineer?",
    a: "Our AI matching engine delivers a curated shortlist of pre-vetted candidates within 48 hours of your requirement submission. For urgent needs, we often deliver in under 24 hours.",
    tag: "Speed",
  },
  {
    q: "What makes your AI matching different from a job board?",
    a: "Job boards surface resumes. We surface engineers who will actually thrive in your team. Our LLM analyzes 200+ signals — GitHub contributions, OSS activity, technical writing, past performance data — and ranks candidates by predicted impact, not just keyword match.",
    tag: "AI Tech",
  },
  {
    q: "Do you handle international hiring and compliance?",
    a: "Absolutely. We operate across 90+ countries and manage all local labor law compliance, payroll processing, contractor agreements, and IP protection. You hire globally, we handle the paperwork.",
    tag: "Global",
  },
  {
    q: "What if the engineer doesn't work out?",
    a: "We offer a 90-day replacement guarantee. If your placed engineer doesn't meet expectations within the first 90 days, we find a replacement at no extra charge — no questions, no friction.",
    tag: "Guarantee",
  },
  {
    q: "What roles and tech stacks do you specialize in?",
    a: "We specialize in the full software engineering spectrum: Frontend (React, Vue, Angular), Backend (Node.js, Python, Go, Java), Full-Stack, DevOps/SRE, Mobile (iOS, Android, React Native), and AI/ML engineers.",
    tag: "Roles",
  },
  {
    q: "Is there a minimum engagement size?",
    a: "Not at all. We work with startups needing their first engineer and enterprises building teams of 50+. Our intake process scales to your exact needs.",
    tag: "Pricing",
  },
];

const tagColors: Record<string, string> = {
  "Speed": "from-blue-600 to-cyan-500",
  "AI Tech": "from-violet-600 to-blue-500",
  "Global": "from-teal-500 to-cyan-400",
  "Guarantee": "from-green-500 to-teal-500",
  "Roles": "from-pink-600 to-violet-600",
  "Pricing": "from-orange-500 to-pink-500",
};

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative w-full py-32 bg-[#080d1a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/6 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase font-dm-sans mb-5">
            FAQ
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Got{" "}
            <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-[500px] mx-auto">
            We&apos;ve answered the ones we get asked most. If yours isn&apos;t here — just reach out.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = active === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-blue-500/40 bg-blue-500/5 shadow-[0_0_30px_rgba(10,102,245,0.1)]"
                    : "border-white/6 bg-white/[0.02] hover:border-blue-500/20"
                }`}
              >
                {/* Active top bar */}
                {isOpen && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${tagColors[faq.tag]} origin-left`}
                  />
                )}

                {/* Question button */}
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${tagColors[faq.tag]} text-white whitespace-nowrap`}>
                      {faq.tag}
                    </span>
                    <span className={`font-semibold text-sm md:text-base leading-snug ${isOpen ? "text-white" : "text-slate-300"}`}>
                      {faq.q}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-slate-400"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-slate-400 text-sm md:text-base leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 mb-4">Still have questions?</p>
          <a
            href="mailto:hello@sarsglobal.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 font-semibold text-sm hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
          >
            <span>📧</span> hello@sarsglobal.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
