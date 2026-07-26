"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const headlineWords = [
    { text: "ELITE", color: "text-white" },
    { text: "IT", color: "text-white" },
    { text: "TALENT", color: "text-[#0A66F5]" },
  ];

  return (
    <ScrollReveal className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
      >
        <source
          src="/only_need_the_background_video%20(1).mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Center Radial Overlay (Keeps sides bright, makes center text readable) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.75)_0%,transparent_55%)] z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-[1200px] w-full px-6 flex flex-col items-center justify-center text-center gap-6 md:gap-8">
        
        {/* Headline - Animating word-by-word with individual transitions */}
        <h1 className="font-space-grotesk font-bold text-[40px] md:text-[56px] lg:text-[72px] leading-tight tracking-[-1px] uppercase flex flex-wrap justify-center gap-x-[0.3em]">
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut"
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
          className="max-w-[640px] mx-auto text-base md:text-lg lg:text-xl text-metallic-gray font-inter leading-relaxed"
        >
          Connecting world-class engineers with companies building the future.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: "easeOut"
          }}
          className="flex flex-row flex-wrap gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/talent"
              className="px-6 py-3 md:px-8 md:py-3.5 rounded-lg bg-[#0A66F5] text-white text-sm md:text-base font-semibold hover:bg-opacity-95 transition-all duration-200 inline-block font-inter shadow-lg shadow-[#0A66F5]/20"
            >
              Hire Talent
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/roles"
              className="px-6 py-3 md:px-8 md:py-3.5 rounded-lg border border-white/20 text-white text-sm md:text-base font-semibold hover:bg-white/10 transition-colors duration-200 inline-block font-inter backdrop-blur-sm"
            >
              Explore Jobs
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </ScrollReveal>
  );
}
