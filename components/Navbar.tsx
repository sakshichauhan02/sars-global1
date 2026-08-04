"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Talent", href: "/talent" },
    { name: "Roles", href: "/roles" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full h-[72px] flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
          scrolled
            ? "bg-[#020409]/90 backdrop-blur-[20px] border-b border-white/5"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-syne text-xl font-bold tracking-tight text-white">
            SARS <span className="gradient-text">GLOBAL</span>
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-wide transition-colors duration-300 relative group font-dm-sans text-slate-400 hover:text-white"
            >
              {link.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#0A66F5] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right: Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/roles"
              className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 inline-block font-dm-sans text-sm font-semibold"
            >
              Explore Roles
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/talent"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold tracking-wide transition-all duration-300 inline-block font-dm-sans shadow-[0_0_20px_rgba(10,102,245,0.3)] hover:shadow-[0_0_30px_rgba(10,102,245,0.5)]"
            >
              Find Talent
            </Link>
          </motion.div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`transition-colors duration-300 focus:outline-none p-2 ${scrolled ? "text-slate-800 hover:text-[#0A66F5]" : "text-slate-200 hover:text-white"}`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-[#020409]/95 backdrop-blur-[20px] border-b border-white/5 px-6 py-8 flex flex-col gap-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold tracking-wide text-slate-600 hover:text-[#0A66F5] transition-colors duration-200 font-inter"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <hr className="border-slate-100" />
            
            <div className="flex flex-col gap-4">
              <motion.div whileTap={{ scale: 0.98 }} className="w-full">
                <Link
                  href="/roles"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center px-5 py-3 rounded-xl border border-slate-200/80 bg-white/80 text-slate-800 text-sm font-semibold tracking-wide hover:bg-slate-50 transition-colors duration-200 inline-block font-inter shadow-sm"
                >
                  Explore Roles
                </Link>
              </motion.div>
              
              <motion.div whileTap={{ scale: 0.98 }} className="w-full">
                <Link
                  href="/talent"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center px-5 py-3 rounded-xl bg-gradient-to-r from-[#0A66F5] to-[#3B82F6] text-white text-sm font-semibold tracking-wide transition-all duration-300 inline-block font-inter shadow-[0_4px_12px_rgba(10,102,245,0.15)]"
                >
                  Find Talent
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
