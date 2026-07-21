"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const headlineWords = [
    { text: "ELITE", color: "text-white" },
    { text: "IT", color: "text-white" },
    { text: "TALENT", color: "text-primary-blue" },
  ];

  // Main container orchestrating stagger delay of 0.8s between elements (Headline -> Subheading -> Buttons)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  // Headline container to stagger the individual words
  const headlineVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Individual word variants (Opacity: 0 -> 1, Y: 40 -> 0, Ease Out)
  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  } as const;

  // Subheading variants (Opacity: 0 -> 1, Y: 40 -> 0, Ease Out)
  const subheadingVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  } as const;

  // Buttons variants (Opacity: 0 -> 1, Y: 40 -> 0, Ease Out)
  const buttonsVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-a-futuristic-circuit-board-42956-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-pure-black/70 via-pure-black/50 to-pure-black -z-10" />

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1200px] w-full px-6 flex flex-col items-center justify-center text-center gap-6 md:gap-8"
      >
        {/* Headline - Animating word-by-word */}
        <motion.h1
          variants={headlineVariants}
          className="font-space-grotesk font-bold text-[36px] md:text-[48px] lg:text-[64px] leading-tight tracking-[-1px] uppercase flex flex-wrap justify-center gap-x-[0.3em]"
        >
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className={word.color}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.h1>
        
        {/* Subheading */}
        <motion.p
          variants={subheadingVariants}
          className="max-w-[640px] mx-auto text-base md:text-lg lg:text-xl text-metallic-gray font-inter leading-relaxed"
        >
          Connecting world-class engineers with companies building the future.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={buttonsVariants}
          className="flex flex-row flex-wrap gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/talent"
              className="px-6 py-3 md:px-8 md:py-3.5 rounded-lg bg-primary-blue text-white text-sm md:text-base font-semibold hover:bg-opacity-95 transition-all duration-200 inline-block font-inter shadow-lg shadow-primary-blue/20"
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
      </motion.div>
    </section>
  );
}
