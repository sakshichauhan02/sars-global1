"use client";

import { motion, useTransform, useMotionValue, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const SKILLS = ["React", "Rust", "Python", "Solidity", "Node.js", "Go", "Kubernetes", "GraphQL", "PyTorch"];

const JOBS = [
  { id: 1, title: "Senior AI Engineer", company: "Stealth Startup", loc: "Remote (US)", type: "Full-Time", salary: "$160k - $210k + Equity", tech: ["Python", "PyTorch", "AWS"], tag: "Hot Role" },
  { id: 2, title: "Staff Frontend Architect", company: "FinTech Unicorn", loc: "New York, NY (Hybrid)", type: "Full-Time", salary: "$180k - $230k", tech: ["React", "TypeScript", "Next.js"], tag: "New" },
  { id: 3, title: "Lead Smart Contract Dev", company: "DeFi Protocol", loc: "Remote (Global)", type: "Contract (12mo)", salary: "$120/hr", tech: ["Solidity", "Foundry", "EVM"], tag: "" },
  { id: 4, title: "Backend Engineer - Infrastructure", company: "SaaS Enterprise", loc: "San Francisco, CA", type: "Full-Time", salary: "$150k - $190k", tech: ["Go", "Kubernetes", "gRPC"], tag: "" },
  { id: 5, title: "Machine Learning Ops (MLOps)", company: "HealthTech AI", loc: "Remote (EU/US)", type: "Full-Time", salary: "$140k - $175k", tech: ["Docker", "Python", "Terraform"], tag: "Actively Interviewing" },
  { id: 6, title: "Principal Security Engineer", company: "CyberDefense Co.", loc: "Remote (Global)", type: "Full-Time", salary: "$200k - $250k", tech: ["Security", "Rust", "C++"], tag: "Exclusive" },
];

const JOURNEY = [
  { step: "01", title: "Apply & Profile Gen", desc: "Upload your resume. Our engine analyzes your history and highlights core strengths." },
  { step: "02", title: "Technical Vetting", desc: "A single rigorous interview with our architects. Pass once, skip screens at 50+ companies." },
  { step: "03", title: "Direct Pitching", desc: "We bypass ATS black holes. Our advocates pitch you directly to engineering leaders." },
  { step: "04", title: "Offer Negotiation", desc: "We provide market data and negotiate on your behalf to secure the compensation you deserve." }
];

const PERKS = [
  { icon: "💰", title: "Salary Negotiation", desc: "We use our aggregated market data to ensure you get top-of-market compensation and equity." },
  { icon: "🌍", title: "Visa & Relocation", desc: "We partner with companies that offer full visa sponsorship and seamless relocation packages." },
  { icon: "🛡️", title: "Anonymous Browsing", desc: "Keep your profile hidden from your current employer while you explore exclusive roles." },
  { icon: "📚", title: "Interview Prep", desc: "Access our internal library of system design templates and mock interview sessions." }
];

export default function RolesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Parallax for Hero Search
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

  const searchX = useTransform(mouseX, [0, 1], ["5px", "-5px"]);
  const searchY = useTransform(mouseY, [0, 1], ["5px", "-5px"]);
  const orbX = useTransform(mouseX, [0, 1], ["-10%", "10%"]);

  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white pt-[72px] font-poppins">
      
      {/* 1. Job Board Search Hero (DARK with Parallax) */}
      <section ref={heroRef} className="relative w-full min-h-[70vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/5 perspective-1000 py-32">
        <motion.div 
          style={{ x: orbX }}
          className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(10,102,245,0.15)_0%,#020409_70%)] pointer-events-none" 
        />
        <div className="absolute inset-0 bg-dots opacity-[0.1] pointer-events-none" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-blue-300 uppercase">For Candidates</span>
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-[80px] font-extrabold tracking-tight mb-8 leading-[1.1]"
          >
            Find Your Next <br/>
            <span className="gradient-text text-glow">Breakthrough</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl"
          >
            Access exclusive, unlisted roles at the world&apos;s most innovative startups and tech giants without dealing with automated recruiters.
          </motion.p>
          
          {/* Big Search Bar with Parallax */}
          <motion.div 
            style={{ x: searchX, y: searchY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative w-full max-w-3xl mb-12 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50" />
            <div className="relative bg-[#080d1a]/80 backdrop-blur-2xl border border-white/20 rounded-full flex items-center p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <span className="text-2xl pl-6 text-slate-400">🔍</span>
              <input 
                type="text" 
                placeholder="Search roles, skills, or companies..." 
                className="flex-1 bg-transparent border-none pl-4 pr-4 h-16 text-lg text-white placeholder-slate-500 focus:outline-none"
              />
              <button className="h-14 px-8 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(10,102,245,0.4)]">
                Search
              </button>
            </div>
          </motion.div>

          {/* Skill Pills */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <span className="text-sm font-bold text-slate-500 py-2 uppercase tracking-wider">Trending:</span>
            {SKILLS.map((s, i) => (
              <motion.button 
                key={s} 
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-sm font-semibold text-slate-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-colors"
              >
                {s}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Perks of the Network (LIGHT) */}
      <section className="py-32 bg-[#F8FAFC] text-slate-900 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 blur-[150px] rounded-full pointer-events-none opacity-50" />
        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Why Join the Network?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PERKS.map((p, i) => (
              <ScrollReveal key={i} className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-blue-400 hover:shadow-[0_20px_40px_rgba(10,102,245,0.08)] transition-all duration-300 group cursor-default">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
                <h3 className="font-extrabold text-xl mb-3 text-slate-900">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{p.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Advanced Job List (LIGHT) */}
      <section className="py-32 bg-white text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-white pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-50 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <div className="flex justify-between items-center mb-10 border-b border-slate-200 pb-6">
            <h2 className="text-4xl font-extrabold tracking-tight">Active Opportunities</h2>
            <select className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 focus:outline-none cursor-pointer hover:border-blue-300 transition-colors">
              <option>Most Relevant</option>
              <option>Highest Salary</option>
              <option>Newest First</option>
            </select>
          </div>

          <div className="flex flex-col gap-5">
            {JOBS.map((job, i) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 6) * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="group flex flex-col md:flex-row justify-between items-start md:items-center p-8 rounded-[2rem] border border-slate-200 bg-white hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(10,102,245,0.08)] transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                    {job.tag && (
                      <span className={`px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded-md ${job.tag === 'Hot Role' || job.tag === 'Exclusive' ? 'bg-orange-50 text-orange-600 border border-orange-200' : 'bg-green-50 text-green-600 border border-green-200'}`}>
                        {job.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                    <span className="flex items-center gap-2 font-bold text-slate-700">🏢 {job.company}</span>
                    <span className="flex items-center gap-2 font-semibold text-slate-500">📍 {job.loc}</span>
                    <span className="flex items-center gap-2 font-semibold text-slate-500">💼 {job.type}</span>
                    <span className="flex items-center gap-2 text-blue-600 font-extrabold bg-blue-50 px-3 py-1 rounded-lg">💵 {job.salary}</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {job.tech.map(t => (
                      <span key={t} className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">{t}</span>
                    ))}
                  </div>
                </div>

                <button className="mt-8 md:mt-0 px-8 py-4 rounded-xl bg-slate-50 text-slate-700 font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0 border border-slate-200 group-hover:border-blue-600 group-hover:shadow-[0_10px_20px_rgba(10,102,245,0.3)]">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Candidate Journey (DARK) */}
      <section className="py-32 bg-[#020409] text-white relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-5">
              The Blueprint
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">How It Works</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">We act as your personal career agent, handling the friction of job hunting so you can focus on writing great code.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {JOURNEY.map((j, i) => (
              <ScrollReveal key={i} className="relative flex flex-col pt-8 group cursor-default">
                {/* Connecting Line */}
                {i !== JOURNEY.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-blue-500/30 to-transparent z-0" />
                )}
                
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#080d1a] border border-blue-500/30 flex items-center justify-center text-2xl font-extrabold text-blue-400 mb-8 shadow-[0_0_30px_rgba(10,102,245,0.15)] group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {j.step}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{j.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{j.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
