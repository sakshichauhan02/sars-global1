"use client";

import { motion, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Static array to prevent reference changes on every render
const ROLES = ["Engineers", "DevOps Leads", "ML Architects", "Full-Stack Devs", "CTOs"];

// Typing animation hook
function useTypingEffect(words: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx(c => c + 1);
        }
      } else {
        setText(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx(w => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx(c => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, wordIdx, charIdx, deleting, words, speed, pause]);

  return text;
}

const CANDIDATES = [
  { id: 1, name: "Alex Mercer", score: "98%", exp: "8 YOE", stack: "React, Node, AWS", badge: "bg-green-500 text-white", status: "Interview Scheduled" },
  { id: 2, name: "Priya Sharma", score: "95%", exp: "6 YOE", stack: "React, TS, GraphQL", badge: "bg-blue-500 text-white", status: "Ready to Interview" },
  { id: 3, name: "James Wei", score: "91%", exp: "7 YOE", stack: "Vue, React, Python", badge: "bg-blue-500/20 text-blue-300", status: "Sourced" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse positions for parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const [activeCandidateId, setActiveCandidateId] = useState<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    };
    el.addEventListener("mousemove", move);
    return () => el.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  // Transform values for parallax lens and dots
  const bgX = useTransform(mouseX, [0, 1], ["0%", "-5%"]);
  const bgY = useTransform(mouseY, [0, 1], ["0%", "-5%"]);
  const lensX = useTransform(mouseX, [0, 1], ["-20%", "20%"]);
  const lensY = useTransform(mouseY, [0, 1], ["-20%", "20%"]);

  const imgX = useTransform(mouseX, [0, 1], ["10px", "-10px"]);
  const imgY = useTransform(mouseY, [0, 1], ["10px", "-10px"]);

  const typedText = useTypingEffect(ROLES, 80);

  const stats = [
    { value: "< 48h", label: "Hire Time" },
    { value: "Top 3%", label: "Quality" },
    { value: "98%", label: "Retention" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#020409] font-poppins perspective-1000"
    >
      {/* Interactive Dotted Background */}
      <motion.div
        className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] bg-dots pointer-events-none"
        style={{ x: bgX, y: bgY }}
      />

      {/* Push-in Distortion Lens */}
      <motion.div 
        className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-overlay z-0"
        style={{
          background: "radial-gradient(circle, rgba(10, 102, 245, 0.4) 0%, transparent 60%)",
          x: lensX,
          y: lensY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
      
      {/* Ambient Blue/Black Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-[1300px] w-full mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-[100px]">

        {/* Left Side: Text */}
        <div className="flex flex-col items-start text-left gap-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
              AI-Powered Global Tech Recruitment
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-extrabold text-[52px] md:text-[64px] xl:text-[82px] leading-[1.1] tracking-tight text-white h-[200px] md:h-[250px]"
          >
            Hire Elite
            <br />
            <span className="gradient-text text-glow">
              {typedText}
              <span className="cursor" />
            </span>
            <br />
            Worldwide
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-[550px] text-slate-400 text-lg md:text-xl leading-relaxed"
          >
            We connect global tech companies with pre-vetted, AI-matched engineers — deployed in hours, not weeks.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#hire"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(10,102,245,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-base border border-blue-400/30 shadow-[0_0_25px_rgba(10,102,245,0.3)] transition-all duration-300"
            >
              Hire Elite Talent →
            </motion.a>
            <motion.a
              href="#process"
              whileHover={{ scale: 1.05, borderColor: "rgba(10,102,245,0.5)", background: "rgba(10,102,245,0.08)" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl border border-white/10 text-slate-200 font-bold text-base backdrop-blur-md transition-all duration-300"
            >
              How It Works
            </motion.a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex gap-4 mt-4 w-full"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, borderColor: "rgba(10,102,245,0.4)" }}
                className="flex flex-col items-start gap-1 px-5 py-4 rounded-2xl border border-white/6 bg-white/[0.025] backdrop-blur-md cursor-default transition-all duration-300 group flex-1"
              >
                <span className="text-2xl md:text-3xl font-extrabold text-white group-hover:gradient-text transition-colors">
                  {s.value}
                </span>
                <span className="text-[11px] text-slate-500 tracking-wider uppercase">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Mock Dashboard UI */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full h-[550px] hidden lg:block"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-[2rem] blur-xl" />
          
          <motion.div 
            style={{ x: imgX, y: imgY }}
            className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-[#080d1a]/80 backdrop-blur-xl shadow-[0_0_50px_rgba(10,102,245,0.15)] flex flex-col"
          >
            {/* Top Bar */}
            <div className="h-12 border-b border-white/10 bg-white/[0.02] flex items-center px-6 justify-between">
              <div className="flex gap-2 cursor-pointer">
                <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-400 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 transition-colors" />
              </div>
              <div className="text-xs text-slate-500 font-medium font-mono">SARS Engine v2.4 (Interactive)</div>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 flex">
              {/* Sidebar */}
              <div className="w-16 flex flex-col items-center gap-6 pt-6 border-r border-white/10 bg-white/[0.01]">
                {["⊞", "👥", "📊", "⚙️"].map((icon, i) => (
                  <button key={i} className={`text-xl ${i === 1 ? "text-blue-400" : "text-slate-500"} hover:scale-110 hover:text-white transition-all`}>
                    {icon}
                  </button>
                ))}
              </div>

              {/* Main Panel */}
              <div className="flex-1 p-6 flex flex-col gap-6 relative">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-white font-bold text-lg">AI Match Results</h3>
                    <p className="text-slate-400 text-xs">Role: Senior React Developer</p>
                  </div>
                  <button className="px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-bold flex items-center gap-2 hover:bg-green-500/20 transition-colors cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Scan Complete
                  </button>
                </div>

                {/* Candidates List */}
                <div className="flex flex-col gap-3 relative z-10">
                  {CANDIDATES.map((c, i) => {
                    const isActive = activeCandidateId === c.id;
                    return (
                      <motion.div 
                        key={c.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (i * 0.15) }}
                        onClick={() => setActiveCandidateId(isActive ? null : c.id)}
                        className={`p-4 rounded-xl border flex flex-col gap-4 cursor-pointer transition-all duration-300 ${
                          isActive 
                            ? "bg-blue-600/10 border-blue-500/50 shadow-[0_0_20px_rgba(10,102,245,0.1)] scale-[1.02] z-20" 
                            : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-blue-500/30"
                        }`}
                      >
                        {/* Header Row */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white border transition-colors ${
                              isActive ? "bg-blue-600 border-blue-400" : "bg-slate-800 border-white/10"
                            }`}>
                              {c.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-white text-sm font-semibold">{c.name}</p>
                              <p className="text-slate-500 text-xs">{c.stack}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-slate-400 text-xs hidden sm:block">{c.exp}</span>
                            <div className={`px-2.5 py-1 rounded-md text-xs font-bold ${c.badge}`}>
                              {c.score} Match
                            </div>
                          </div>
                        </div>

                        {/* Expandable Content when active */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pt-3 border-t border-white/10 overflow-hidden flex flex-col gap-3"
                            >
                              <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-400">Status: <span className="text-white font-semibold">{c.status}</span></span>
                                <span className="text-blue-400 font-semibold cursor-pointer hover:underline">View Full Profile →</span>
                              </div>
                              <div className="flex gap-2">
                                <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors">
                                  Schedule Interview
                                </button>
                                <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold rounded-lg border border-white/10 transition-colors">
                                  Reject
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Floating Notification */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-8 px-6 py-4 rounded-2xl border border-white/10 bg-[#020409]/90 backdrop-blur-xl shadow-2xl flex items-center gap-4 z-50 cursor-pointer hover:scale-105 hover:border-green-500/50 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(52,211,153,0.3)]">
              ✓
            </div>
            <div>
              <p className="text-white text-sm font-bold">Interview Scheduled</p>
              <p className="text-slate-400 text-xs">Alex Mercer - Tomorrow 10AM</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
