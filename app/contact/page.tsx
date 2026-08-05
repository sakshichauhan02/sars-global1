"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const OFFICES = [
  { city: "San Francisco", region: "Global HQ", icon: "🌉", gradient: "from-blue-600 to-cyan-500" },
  { city: "London", region: "EMEA Hub", icon: "🎡", gradient: "from-violet-600 to-purple-500" },
  { city: "Singapore", region: "APAC Hub", icon: "🦁", gradient: "from-pink-600 to-rose-500" }
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    el.addEventListener("mousemove", move);
    return () => el.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  // Parallax bindings
  const bgX = useTransform(mouseX, [0, 1], ["0%", "-5%"]);
  const bgY = useTransform(mouseY, [0, 1], ["0%", "-5%"]);
  const lensX = useTransform(mouseX, [0, 1], ["-20%", "20%"]);
  const lensY = useTransform(mouseY, [0, 1], ["-20%", "20%"]);
  const formParallaxX = useTransform(mouseX, [0, 1], ["15px", "-15px"]);
  const formParallaxY = useTransform(mouseY, [0, 1], ["15px", "-15px"]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setIsSubmitted(true), 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white pt-[72px] font-poppins">
      
      {/* 1. Hero & Form (DARK with Animated Parallax Dots) */}
      <section ref={containerRef} className="relative w-full py-24 lg:py-32 overflow-hidden border-b border-white/5 min-h-[90vh] flex items-center perspective-1000">
        {/* Animated Dots */}
        <motion.div
          className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] bg-dots pointer-events-none"
          style={{ x: bgX, y: bgY }}
        />
        
        {/* Dynamic Lens */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full pointer-events-none mix-blend-overlay z-0"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 60%)",
            x: lensX,
            y: lensY,
            translateX: "-50%",
            translateY: "-50%"
          }}
        />

        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-violet-600/20 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 items-center w-full">
          
          <div className="flex flex-col justify-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-[80px] font-extrabold tracking-tight mb-8 drop-shadow-2xl">
              Let&apos;s Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-500 text-glow">Next Great Team</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-400 mb-16 max-w-lg">
              Skip the automated chatbots. Reach out directly, and a dedicated talent architect will respond within 2 hours.
            </motion.p>
          </div>

          <div className="w-full relative z-20">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-cyan-600/20 rounded-[3rem] blur-2xl" />
            <motion.div style={{ x: formParallaxX, y: formParallaxY }} className="bg-[#080d1a]/90 border border-white/10 rounded-[3rem] p-10 md:p-12 backdrop-blur-3xl shadow-[0_40px_100px_rgba(139,92,246,0.3)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500 opacity-80" />
              {isSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20 relative z-10">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl text-green-400">✓</span>
                  </div>
                  <h3 className="text-4xl font-extrabold text-white mb-4">Request Received</h3>
                  <p className="text-slate-400">A talent architect will review your requirements and contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
                  <h3 className="text-3xl font-extrabold text-white mb-2">Send a Message</h3>
                  <input required type="email" placeholder="Work Email" className="w-full bg-[#020409]/80 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-violet-500/80 transition-colors shadow-inner" />
                  <textarea required rows={4} placeholder="Project Details" className="w-full bg-[#020409]/80 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-violet-500/80 transition-colors shadow-inner" />
                  <button type="submit" className="w-full py-5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-extrabold text-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all hover:scale-[1.02]">
                    Send Message →
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Enterprise Partnerships (DARK) */}
      <section className="relative py-32 bg-[#080d1a] border-b border-white/5 text-center overflow-hidden">
        <div className="absolute inset-0 bg-dots pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-extrabold mb-6">Enterprise ATS Integrations</h2>
          <p className="text-slate-400 text-lg mb-10">We integrate seamlessly with Greenhouse, Lever, and Workday. If you are an ATS provider looking to partner, access our developer API docs.</p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 hover:border-white/20 transition-all shadow-md">API Documentation</button>
            <button className="px-8 py-4 rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30 font-bold hover:bg-violet-600/40 hover:text-white hover:border-violet-400 transition-all shadow-md">Partner Program</button>
          </div>
        </div>
      </section>

      {/* 3. Global Offices Section (LIGHT) */}
      <section className="relative py-32 bg-[#F8FAFC] text-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-dots-white pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold mb-6">Our Global Hubs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OFFICES.map((office, i) => (
              <div key={i} className="flex flex-col p-12 rounded-[2.5rem] bg-white/80 backdrop-blur-md border border-slate-200 group overflow-hidden relative hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all">
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${office.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="text-6xl mb-6 relative z-10 group-hover:scale-110 transition-transform origin-left">{office.icon}</div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2 relative z-10 group-hover:text-blue-600 transition-colors">{office.city}</h3>
                <p className="text-slate-500 font-bold uppercase tracking-widest relative z-10">{office.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
