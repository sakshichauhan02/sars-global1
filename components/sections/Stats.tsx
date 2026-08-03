"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, animate, motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setCount(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export default function Stats() {
  const stats = [
    {
      value: 500,
      suffix: "+",
      label: "Successful Placements",
      desc: "Top-tier software engineers successfully integrated into global development teams."
    },
    {
      value: 98,
      suffix: "%",
      label: "Retention Rate",
      desc: "Exceptional candidate vetting leading to long-term stability and client success."
    },
    {
      value: 72,
      suffix: " Hours",
      label: "Average Time-to-Hire",
      desc: "Speedy turnaround from initial scoping of technical requirements to final onboarding."
    },
    {
      value: 250,
      suffix: "+",
      label: "Enterprise Clients",
      desc: "Partnering with leading tech enterprises and high-growth venture-backed startups."
    }
  ];

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

      <div className="relative z-10 max-w-[1200px] w-full px-6 flex flex-col gap-24">
        {/* Header Block */}
        <div className="max-w-prose mx-auto text-center flex flex-col gap-6 items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0A66F5]/10 bg-[#0A66F5]/5 text-xs font-semibold tracking-wider text-[#0A66F5] uppercase">
            Metrics
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0B1120] font-space-grotesk uppercase tracking-tight">
            Stats & Impact
          </h2>
          <p className="text-slate-500 font-inter text-base md:text-lg leading-relaxed max-w-[650px] mx-auto">
            Delivering performance, speed, and reliability to engineering organizations around the globe.
          </p>
        </div>

        {/* 4-Column Grid: Desktop: 4, Tablet: 2, Mobile: 1 */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 w-full"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              style={{ backgroundColor: "rgba(255, 255, 255, 0.85)" }}
              className="group relative flex flex-col gap-6 p-8 md:p-10 rounded-[24px] border border-slate-900/[0.08] backdrop-blur-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.01)] hover:border-[#0A66F5]/50 hover:shadow-[0_20px_50px_rgba(10,102,245,0.1)] transition-all duration-300 select-none overflow-hidden"
            >
              {/* 3px Glowing Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0A66F5]/40 to-[#3B82F6]/40 opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Faint Metallic Border Highlight Inner Layer */}
              <div className="absolute inset-0 rounded-[24px] border border-white/40 pointer-events-none z-10" />

              {/* Large Number */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A66F5] font-space-grotesk tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              {/* Label & Description */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg md:text-xl font-bold text-[#0B1120] font-space-grotesk tracking-tight">
                  {stat.label}
                </h3>
                <p className="text-sm text-slate-500 font-inter leading-relaxed max-w-prose">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ScrollReveal>
  );
}
