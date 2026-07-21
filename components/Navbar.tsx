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
            ? "bg-[#0B1120]/85 backdrop-blur-[20px] border-b border-white/8"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-space-grotesk text-xl font-bold tracking-tight text-white">
            SARS <span className="text-primary-blue">TALENT</span>
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-metallic-gray hover:text-white transition-colors duration-200 relative group font-inter"
            >
              {link.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary-blue transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right: Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/roles"
              className="px-5 py-2.5 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-200 inline-block font-inter"
            >
              Explore Roles
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/talent"
              className="px-5 py-2.5 rounded-lg bg-primary-blue text-white text-sm font-medium hover:bg-opacity-90 transition-all duration-200 inline-block font-inter"
            >
              Find Talent
            </Link>
          </motion.div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-primary-blue focus:outline-none p-2"
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
            className="fixed top-[72px] left-0 right-0 z-40 bg-[#0B1120]/95 backdrop-blur-[20px] border-b border-white/8 px-6 py-8 flex flex-col gap-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-metallic-gray hover:text-white transition-colors duration-200 font-inter"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <hr className="border-white/10" />
            
            <div className="flex flex-col gap-4">
              <motion.div whileTap={{ scale: 0.98 }} className="w-full">
                <Link
                  href="/roles"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center px-5 py-3 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-200 inline-block font-inter"
                >
                  Explore Roles
                </Link>
              </motion.div>
              
              <motion.div whileTap={{ scale: 0.98 }} className="w-full">
                <Link
                  href="/talent"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center px-5 py-3 rounded-lg bg-primary-blue text-white text-sm font-medium hover:bg-opacity-90 transition-all duration-200 inline-block font-inter"
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
