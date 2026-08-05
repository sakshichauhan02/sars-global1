"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const TEAM = [
  { name: "Sarah Jenkins", role: "CEO", img: "https://i.pravatar.cc/400?u=sarahj", bio: "Former VP Eng at Stripe." },
  { name: "Marcus Chen", role: "Head of AI", img: "https://i.pravatar.cc/400?u=marcus", bio: "Stanford ML Ph.D." },
  { name: "David Alaba", role: "VP Talent", img: "https://i.pravatar.cc/400?u=david", bio: "15+ years scaling teams." },
  { name: "Elena Rostova", role: "Lead Assessor", img: "https://i.pravatar.cc/400?u=elena2", bio: "Ex-Google Staff Eng." }
];

const CORE_VALUES = [
  { title: "Code Wins Arguments", desc: "We rely on empirical technical data, not flashy resumes.", icon: "💻", gradient: "from-blue-600 to-cyan-500" },
  { title: "Velocity", desc: "In tech, moving slow means dying. 48-hour turnarounds.", icon: "⚡", gradient: "from-violet-600 to-purple-500" },
  { title: "Radical Candor", desc: "Unedited interview recordings shared with clients.", icon: "👁️", gradient: "from-pink-600 to-rose-500" },
  { title: "Global By Default", desc: "Talent is everywhere. Opportunity should be too.", icon: "🌍", gradient: "from-emerald-500 to-teal-500" }
];

export default function AboutPage() {
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
  const imgParallaxX = useTransform(mouseX, [0, 1], ["15px", "-15px"]);
  const imgParallaxY = useTransform(mouseY, [0, 1], ["15px", "-15px"]);

  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white pt-[72px] font-poppins">
      
      {/* 1. Cinematic Hero (DARK with Animated Parallax Dots) */}
      <section ref={containerRef} className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden perspective-1000">
        {/* Animated Dots */}
        <motion.div
          className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] bg-dots pointer-events-none"
          style={{ x: bgX, y: bgY }}
        />
        
        {/* Dynamic Lens */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full pointer-events-none mix-blend-overlay z-0"
          style={{
            background: "radial-gradient(circle, rgba(10,102,245,0.3) 0%, transparent 60%)",
            x: lensX,
            y: lensY,
            translateX: "-50%",
            translateY: "-50%"
          }}
        />
        
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-20 py-20">
          <div className="flex-1 flex flex-col gap-6">
            <motion.span initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-md text-xs font-bold tracking-widest text-violet-300 uppercase w-fit">
              Our Mission
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl md:text-[80px] font-extrabold tracking-tight leading-[1.1] drop-shadow-2xl">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 text-glow">Meets Empathy</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xl md:text-2xl text-slate-400 max-w-xl mt-4">
              Recruiters didn&apos;t understand code, and engineers hated the process. We built a platform that respects the craft.
            </motion.p>
          </div>
          
          <div className="flex-1 w-full relative z-20">
            <motion.div style={{ x: imgParallaxX, y: imgParallaxY }} className="aspect-square max-w-[600px] mx-auto rounded-[3rem] overflow-hidden border border-white/20 relative shadow-[0_40px_100px_rgba(139,92,246,0.25)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-transparent z-10 mix-blend-overlay" />
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" alt="Team" className="w-full h-full object-cover grayscale opacity-90 scale-105 hover:scale-100 hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Core Values Bento Grid (LIGHT) */}
      <section className="relative py-32 bg-white text-slate-900 overflow-hidden">

        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold mb-6">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_VALUES.map((v, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white/80 backdrop-blur-md border border-slate-200 hover:border-slate-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] group relative overflow-hidden transition-all">
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${v.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${v.gradient} flex items-center justify-center text-3xl mb-6 text-white shadow-lg group-hover:scale-110 transition-transform relative z-10`}>
                  {v.icon}
                </div>
                <h3 className="text-2xl font-extrabold mb-3 relative z-10 group-hover:text-blue-600 transition-colors">{v.title}</h3>
                <p className="text-slate-500 font-medium text-lg relative z-10">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Media & Press Marquee (DARK) */}
      <section className="relative py-24 bg-[#080d1a] border-y border-white/5 overflow-hidden">

        <div className="text-center mb-10 relative z-10">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Featured In</span>
        </div>
        <div className="flex gap-16 whitespace-nowrap opacity-40 justify-center relative z-10">
          {["TechCrunch", "Wired", "Forbes", "Bloomberg", "Wall Street Journal"].map((m, i) => (
            <span key={i} className="text-4xl font-extrabold text-white hover:text-violet-400 hover:opacity-100 transition-all cursor-default">{m}</span>
          ))}
        </div>
      </section>

      {/* 4. Leadership Team Grid (DARK) */}
      <section className="relative py-32 bg-[#020409] overflow-hidden">

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-extrabold mb-16 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, i) => (
              <div key={i} className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080d1a]/80 backdrop-blur-md hover:border-violet-500/50 hover:shadow-[0_20px_60px_rgba(139,92,246,0.2)] transition-all">
                <div className="aspect-[4/5] relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020409] via-[#020409]/60 to-transparent z-10" />
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-2xl font-extrabold text-white mb-1 group-hover:text-violet-300 transition-colors">{member.name}</h3>
                  <p className="text-violet-400 text-xs font-bold uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Internal Careers (LIGHT) */}
      <section className="relative py-32 bg-[#F8FAFC] text-slate-900 border-t border-slate-200 text-center overflow-hidden">

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-extrabold mb-6">Join Our Internal Team</h2>
          <p className="text-xl text-slate-500 mb-10">We are always looking for Staff Engineers, AI Researchers, and Talent Architects to build the future of recruitment.</p>
          <button className="relative z-10 px-10 py-5 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-blue-600 transition-colors shadow-xl hover:-translate-y-1">
            View Internal Roles
          </button>
        </div>
      </section>

    </div>
  );
}
