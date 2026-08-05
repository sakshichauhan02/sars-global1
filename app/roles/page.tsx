"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const JOBS = [
  { id: 1, title: "Senior AI Engineer", company: "Stealth Startup", loc: "Remote (US)", type: "Full-Time", salary: "$160k - $210k", tech: ["Python", "PyTorch"], tag: "Hot Role", gradient: "from-pink-500 to-rose-500" },
  { id: 2, title: "Staff Frontend Architect", company: "FinTech Unicorn", loc: "New York, NY", type: "Full-Time", salary: "$180k - $230k", tech: ["React", "TypeScript"], tag: "New", gradient: "from-blue-500 to-cyan-500" },
  { id: 3, title: "Lead Smart Contract Dev", company: "DeFi Protocol", loc: "Remote (Global)", type: "Contract", salary: "$120/hr", tech: ["Solidity", "Foundry"], tag: "", gradient: "from-violet-500 to-purple-500" },
  { id: 4, title: "Backend Infrastructure", company: "SaaS Enterprise", loc: "San Francisco", type: "Full-Time", salary: "$150k - $190k", tech: ["Go", "Kubernetes"], tag: "", gradient: "from-emerald-500 to-teal-500" },
  { id: 5, title: "Machine Learning Ops", company: "HealthTech AI", loc: "Remote (EU/US)", type: "Full-Time", salary: "$140k - $175k", tech: ["Docker", "Python"], tag: "Interviewing", gradient: "from-orange-500 to-amber-500" },
];

const PERKS = [
  { icon: "💰", title: "Salary Negotiation", desc: "Top-of-market compensation data.", gradient: "from-emerald-500 to-teal-500" },
  { icon: "🌍", title: "Visa & Relocation", desc: "Partners offering full sponsorship.", gradient: "from-blue-500 to-cyan-500" },
  { icon: "🛡️", title: "Anonymous Browsing", desc: "Hidden from your current employer.", gradient: "from-violet-500 to-purple-500" },
  { icon: "📚", title: "Interview Prep", desc: "System design mock sessions.", gradient: "from-pink-500 to-rose-500" }
];

export default function RolesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  useEffect(() => {
    const el = heroRef.current;
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
  const searchX = useTransform(mouseX, [0, 1], ["10px", "-10px"]);

  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white pt-[72px] font-poppins">
      
      {/* 1. Job Board Search Hero (DARK with Animated Parallax Dots) */}
      <section ref={heroRef} className="relative w-full min-h-[70vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/5 py-32 perspective-1000">
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
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full flex flex-col items-center">
          <motion.span initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-md w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-violet-300 uppercase">For Candidates</span>
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-[80px] font-extrabold tracking-tight mb-8 drop-shadow-2xl">
            Find Your Next <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-500 text-glow">Breakthrough</span>
          </motion.h1>
          
          <motion.div style={{ x: searchX }} className="relative w-full max-w-3xl mb-12 group mt-8 z-20">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/50 to-cyan-600/50 rounded-full blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-[#080d1a]/90 backdrop-blur-3xl border border-white/20 hover:border-violet-400/50 rounded-full flex items-center p-2 shadow-[0_0_40px_rgba(139,92,246,0.2)] transition-colors">
              <span className="text-2xl pl-6">🔍</span>
              <input type="text" placeholder="Search roles, skills, or companies..." className="flex-1 bg-transparent border-none pl-4 pr-4 h-16 text-lg text-white focus:outline-none" />
              <button className="h-14 px-8 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-shadow">Search</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Global Salary Insights (DARK) */}
      <section className="relative py-32 bg-[#080d1a] border-b border-white/5 overflow-hidden">

        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Global Salary Insights</h2>
            <p className="text-slate-400">Real-time compensation data aggregated from our placed engineers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { reg: "San Francisco", avg: "$195,000", grad: "from-blue-600 to-cyan-500" },
              { reg: "New York", avg: "$180,000", grad: "from-violet-600 to-purple-500" },
              { reg: "London", avg: "£130,000", grad: "from-pink-600 to-rose-500" },
              { reg: "Remote (Global)", avg: "$150,000", grad: "from-emerald-500 to-teal-500" }
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-white/20 transition-all shadow-xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${s.grad} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <h4 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-4 group-hover:text-white transition-colors">{s.reg}</h4>
                <div className="text-3xl font-extrabold text-white">{s.avg}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Advanced Job List (LIGHT) */}
      <section className="relative py-32 bg-white text-slate-900 overflow-hidden">

        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <div className="flex justify-between items-center mb-10 border-b border-slate-200 pb-6">
            <h2 className="text-4xl font-extrabold">Active Opportunities</h2>
          </div>
          <div className="flex flex-col gap-5">
            {JOBS.map((job, i) => (
              <div key={job.id} className="group flex flex-col md:flex-row justify-between items-start md:items-center p-8 rounded-[2rem] border border-slate-200 bg-white/80 backdrop-blur-md hover:border-slate-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all cursor-pointer relative overflow-hidden">
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${job.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="flex flex-col gap-4 relative z-10">
                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                    <span className="font-bold text-slate-700">🏢 {job.company}</span>
                    <span className="font-semibold text-slate-500">📍 {job.loc}</span>
                    <span className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${job.gradient}`}>💵 {job.salary}</span>
                  </div>
                </div>
                <button className="relative z-10 mt-8 md:mt-0 px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-sm group-hover:scale-105 group-hover:bg-blue-600 transition-all shadow-md">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Candidate Testimonials (DARK) */}
      <section className="relative py-32 bg-[#020409] text-white border-t border-white/5 overflow-hidden">

        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-extrabold mb-16 text-center">Engineers We&apos;ve Placed</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { text: "SARS bypassed the 6-round interview mess. One technical deep dive with their Staff Engineer, and I had 3 offers from Series B startups within a week.", role: "Staff Engineer", grad: "from-blue-600/20 to-cyan-600/20", border: "border-blue-500/30" },
              { text: "They negotiated a 30% higher base salary than I was going to ask for, and handled all the awkward equity conversations with the founders.", role: "Lead DevOps", grad: "from-violet-600/20 to-pink-600/20", border: "border-violet-500/30" },
              { text: "The anonymous browsing feature is incredible. I was able to test the market without alerting my current employer.", role: "ML Researcher", grad: "from-emerald-600/20 to-teal-600/20", border: "border-emerald-500/30" }
            ].map((t, i) => (
              <div key={i} className={`p-10 rounded-[2.5rem] bg-gradient-to-br ${t.grad} backdrop-blur-xl border ${t.border} flex flex-col justify-between hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-shadow`}>
                <p className="text-lg leading-relaxed font-medium mb-8">"{t.text}"</p>
                <div className="font-bold text-white uppercase tracking-widest text-xs">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
