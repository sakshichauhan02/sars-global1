"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const headlineWords = [
    { text: "ELITE", color: "text-white" },
    { text: "IT", color: "text-white" },
    { text: "TALENT", color: "bg-clip-text text-transparent bg-gradient-to-r from-[#0A66F5] to-[#3B82F6]" },
  ];

  return (
    <ScrollReveal className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1120] py-24">
      {/* Background System */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#0B1120]" />
        
        {/* Soft Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-40" />

        {/* Ambient Lighting & Glows */}
        <div className="absolute top-[-10%] left-[-15%] w-[80%] h-[70%] bg-[radial-gradient(circle_at_center,rgba(10,102,245,0.15)_0%,transparent_70%)] rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)] rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(10,102,245,0.08)_0%,transparent_60%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1200px] w-full px-6 flex flex-col items-center justify-center text-center gap-8 md:gap-12 mt-12">
        
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-semibold tracking-wider text-slate-300 uppercase shadow-inner"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0A66F5] animate-pulse" />
          Trusted by Next-Gen AI Enterprises
        </motion.div>

        {/* Headline */}
        <h1 className="font-space-grotesk font-black text-[44px] md:text-[70px] lg:text-[90px] leading-[1.05] tracking-tight uppercase flex flex-wrap justify-center gap-x-[0.25em]">
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={word.color}
            >
              {word.text}
            </motion.span>
          ))}
        </h1>
        
        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut"
          }}
          className="max-w-[650px] mx-auto text-base md:text-lg lg:text-xl text-slate-400 font-inter leading-relaxed"
        >
          Connecting world-class engineers with companies building the future of technology.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: "easeOut"
          }}
          className="flex flex-row flex-wrap gap-5 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/talent"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#0A66F5] to-[#3B82F6] text-white text-sm md:text-base font-semibold tracking-wide transition-all duration-300 inline-block font-inter shadow-[0_8px_30px_rgba(10,102,245,0.25)] hover:shadow-[0_8px_45px_rgba(10,102,245,0.45)]"
            >
              Hire Elite Talent
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/roles"
              className="px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-sm md:text-base font-semibold tracking-wide hover:bg-white/10 transition-colors duration-300 inline-block font-inter backdrop-blur-md"
            >
              Explore Jobs
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Glass Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.0,
            ease: "easeOut"
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-[850px] mt-8 md:mt-12"
        >
          {[
            { label: "Talent Pool Vetting", value: "Top 3%" },
            { label: "Average Match Time", value: "< 48 Hours" },
            { label: "Client Placement Retention", value: "98%" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative px-6 py-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-[12px] flex flex-col items-center justify-center text-center group transition-all duration-400 hover:border-[#0A66F5]/30 hover:bg-white/[0.04]"
            >
              <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />
              <span className="text-2xl md:text-3xl font-black font-space-grotesk text-white tracking-tight transition-colors duration-300 group-hover:text-[#0A66F5]">
                {stat.value}
              </span>
              <span className="text-[11px] text-slate-400 font-inter mt-1.5 tracking-wider uppercase font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </ScrollReveal>
  );
}
