"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

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
      label: "Average Hiring Time",
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
    <section className="w-full py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] border-t border-white/5 flex flex-col items-center justify-center">
      <div className="max-w-[1200px] w-full px-6 flex flex-col gap-16">
        {/* Header Block */}
        <div className="max-w-xl mx-auto text-center flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-space-grotesk uppercase tracking-tight">
            Stats & Impact
          </h2>
          <p className="text-metallic-gray font-inter text-sm md:text-base leading-relaxed">
            Delivering performance, speed, and reliability to engineering organizations around the globe.
          </p>
        </div>

        {/* 4-Column Grid: Desktop: 4, Tablet: 2, Mobile: 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-[#0A66F5]/35 hover:bg-white/[0.04] transition-all duration-300 select-none"
            >
              {/* Large Number */}
              <div className="text-4xl md:text-5xl font-extrabold text-white font-space-grotesk tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              {/* Label & Description */}
              <div className="flex flex-col gap-2">
                <h3 className="text-base md:text-lg font-bold text-neutral-200 font-space-grotesk">
                  {stat.label}
                </h3>
                <p className="text-xs md:text-sm text-neutral-400 font-inter leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
