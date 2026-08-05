"use client";

import { motion, useTransform, useMotionValue, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const PROFILES = [
  { id: 1, name: "David K.", role: "Senior Rust Engineer", prev: "Stripe", exp: "8 YOE", match: "99%", img: "https://i.pravatar.cc/150?u=david", stack: ["Rust", "WASM", "Tokio"] },
  { id: 2, name: "Sarah M.", role: "Lead AI Researcher", prev: "OpenAI", exp: "6 YOE", match: "97%", img: "https://i.pravatar.cc/150?u=sarah", stack: ["PyTorch", "CUDA", "Python"] },
  { id: 3, name: "Michael T.", role: "Staff Full-Stack", prev: "Airbnb", exp: "10 YOE", match: "98%", img: "https://i.pravatar.cc/150?u=michael", stack: ["React", "Node", "AWS"] },
  { id: 4, name: "Elena V.", role: "DevOps Architect", prev: "GitLab", exp: "7 YOE", match: "96%", img: "https://i.pravatar.cc/150?u=elena", stack: ["Kubernetes", "Terraform", "Go"] },
  { id: 5, name: "James L.", role: "Sr. Smart Contract", prev: "Coinbase", exp: "5 YOE", match: "95%", img: "https://i.pravatar.cc/150?u=james", stack: ["Solidity", "EVM", "Foundry"] },
];

const MODELS = [
  {
    title: "Dedicated Teams",
    desc: "A fully managed squad of engineers tailored to your roadmap.",
    points: ["Scrum Master included", "Scalable on demand", "Dedicated Slack channel"],
    ideal: "Large scale product development",
    icon: "🤖",
    gradient: "from-blue-600 to-cyan-500",
    glow: "rgba(10,102,245,0.15)"
  },
  {
    title: "Permanent Hiring",
    desc: "Elite engineers joining your core team full-time.",
    points: ["90-day replacement guarantee", "Rigorous cultural fit vetting", "Salary negotiation handled"],
    ideal: "Scaling core engineering capability",
    icon: "🏢",
    gradient: "from-violet-600 to-blue-600",
    glow: "rgba(139,92,246,0.15)"
  },
  {
    title: "Contract Staffing",
    desc: "Specialized contractors for short-to-medium term sprint goals.",
    points: ["Deployed in 48 hours", "Hourly or monthly billing", "No payroll overhead"],
    ideal: "Urgent project deadlines & skill gaps",
    icon: "⚡",
    gradient: "from-pink-600 to-violet-600",
    glow: "rgba(236,72,153,0.15)"
  }
];

const FAQS = [
  { q: "How do you vet your engineers?", a: "Every candidate goes through a 4-stage process: automated technical screening, a live system design interview with our internal senior architects, a behavioral analysis, and a strict background check." },
  { q: "What is your pricing model?", a: "We charge a flat percentage of the candidate's first-year base salary for permanent hires, payable only upon successful placement. For contractors, we offer transparent hourly rates with a small margin included." },
  { q: "Can I interview the candidates?", a: "Absolutely. We provide a curated shortlist of 3-5 top matches. You maintain full control over the final interview and selection process." },
  { q: "Do you handle local compliance and payroll for remote hires?", a: "Yes, through our employer of record (EOR) partners, we can compliantly hire and pay engineers in over 90 countries without you needing a local entity." }
];

const TECH_STACKS = [
  { category: "Frontend", tools: ["React", "Next.js", "Vue", "TypeScript", "TailwindCSS"], gradient: "from-blue-600 to-cyan-500" },
  { category: "Backend", tools: ["Node.js", "Python", "Go", "Rust", "Java", "C#"], gradient: "from-violet-600 to-blue-600" },
  { category: "Data & AI", tools: ["PyTorch", "TensorFlow", "Pandas", "Spark", "Snowflake"], gradient: "from-pink-600 to-violet-600" },
  { category: "DevOps", tools: ["Kubernetes", "Docker", "AWS", "Terraform", "CI/CD"], gradient: "from-emerald-500 to-teal-500" },
  { category: "Web3", tools: ["Solidity", "Rust", "Foundry", "Hardhat", "Ethers.js"], gradient: "from-orange-500 to-amber-500" }
];

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
        if (charIdx + 1 === current.length) setTimeout(() => setDeleting(true), pause);
        else setCharIdx(c => c + 1);
      } else {
        setText(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx(w => (w + 1) % words.length);
          setCharIdx(0);
        } else setCharIdx(c => c - 1);
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, wordIdx, charIdx, deleting, words, speed, pause]);

  return text;
}

export default function TalentPage() {
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
  const formX = useTransform(mouseX, [0, 1], ["15px", "-15px"]);
  const formY = useTransform(mouseY, [0, 1], ["15px", "-15px"]);
  
  const typedText = useTypingEffect(["AI Engineers", "DevOps Leads", "Rust Experts", "Top 1% Talent"], 80);

  const processRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: processRef, offset: ["start center", "end center"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white pt-[72px] font-poppins">
      
      {/* 1. Ultra-Premium Interactive Hero (DARK) */}
      <section ref={containerRef} className="relative w-full min-h-[95vh] flex items-center overflow-hidden perspective-1000">
        {/* Animated Parallax Dots */}
        <motion.div
          className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] bg-dots pointer-events-none"
          style={{ x: bgX, y: bgY }}
        />
        
        {/* Dynamic Distortion Lens (Follows Mouse) */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full pointer-events-none mix-blend-overlay z-0"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 60%)",
            x: lensX,
            y: lensY,
            translateX: "-50%",
            translateY: "-50%"
          }}
        />
        
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 py-20">
          <div className="flex flex-col gap-8 justify-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-md w-fit hover:border-violet-400 transition-colors cursor-default">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-violet-300 uppercase">For Hiring Managers</span>
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-[72px] font-extrabold tracking-tight leading-[1.1] h-[160px] md:h-[220px]">
              Scale Your Engine with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 text-glow">
                {typedText}<span className="cursor" />
              </span>
            </motion.h1>
            
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xl text-slate-400 leading-relaxed max-w-xl">
              Stop digging through resumes. Tell us what you&apos;re building, and our AI-driven matching engine will deploy a curated shortlist of vetted experts within 48 hours.
            </motion.p>
          </div>

          <div className="relative w-full h-full min-h-[500px] hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 via-cyan-600/20 to-transparent rounded-[2rem] blur-2xl" />
            <motion.div style={{ x: formX, y: formY }} className="w-full max-w-md bg-[#080d1a]/80 border border-white/10 rounded-[2rem] backdrop-blur-3xl shadow-[0_0_50px_rgba(139,92,246,0.15)] flex flex-col overflow-hidden">
              <div className="h-12 border-b border-white/10 bg-white/[0.02] flex items-center px-6 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-slate-500 font-medium font-mono">SARS Engine v2.0</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Initialize Search</h3>
                <form className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2 relative">
                    <label className="text-[11px] font-bold text-violet-400 uppercase tracking-wider">I need a...</label>
                    <select className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white appearance-none focus:border-violet-500/50 transition-colors">
                      <option>Senior React Engineer</option>
                      <option>Lead DevOps Architect</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-violet-400 uppercase tracking-wider">Engagement Model</label>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border border-violet-500/50 bg-violet-500/10 rounded-xl p-3 text-center text-sm font-bold text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.2)] cursor-pointer">Contract</div>
                      <div className="border border-white/10 bg-white/5 rounded-xl p-3 text-center text-sm font-semibold text-slate-300 hover:bg-white/10 transition-colors cursor-pointer">Full-Time</div>
                    </div>
                  </div>
                  <Link href="/contact" className="w-full py-4 mt-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-center hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:scale-[1.02] transition-all">
                    Engage Engine →
                  </Link>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. ROI & Value Calculator (DARK) */}
      <section className="relative py-32 bg-[#080d1a] border-y border-white/5 overflow-hidden">
        {/* Subtle static dots for secondary dark sections */}
        <div className="absolute inset-0 bg-dots pointer-events-none" />
        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">The Cost of Bad Hires</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">Traditional recruiting wastes months of engineering time. See how SARS optimizes your hiring ROI.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 rounded-[2rem] bg-[#020409]/80 backdrop-blur-xl border border-white/10 flex flex-col gap-8 hover:border-white/20 transition-colors shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Traditional Agencies</h3>
              {[
                { label: "Time to Shortlist", val: "3-4 Weeks", bar: "w-[80%]", color: "bg-red-500" },
                { label: "Engineering Hours Wasted", val: "40+ Hours", bar: "w-[90%]", color: "bg-red-500" },
                { label: "1-Year Retention", val: "65%", bar: "w-[65%]", color: "bg-amber-500" }
              ].map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-slate-400">{s.label}</span>
                    <span className="text-white">{s.val}</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${s.bar} ${s.color} opacity-60`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-10 rounded-[2rem] bg-gradient-to-br from-violet-600/10 to-cyan-600/10 backdrop-blur-xl border border-violet-500/30 flex flex-col gap-8 relative overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.1)] hover:border-cyan-400/50 transition-colors">
              <div className="absolute top-0 right-0 p-8 text-8xl opacity-5">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-2">SARS Global</h3>
              {[
                { label: "Time to Shortlist", val: "48 Hours", bar: "w-[15%]", color: "bg-green-400" },
                { label: "Engineering Hours Wasted", val: "0 Hours", bar: "w-[5%]", color: "bg-green-400" },
                { label: "1-Year Retention", val: "98%", bar: "w-[98%]", color: "bg-cyan-400" }
              ].map((s, i) => (
                <div key={i} className="relative z-10">
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-violet-300">{s.label}</span>
                    <span className="text-white">{s.val}</span>
                  </div>
                  <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden">
                    <div className={`h-full ${s.bar} ${s.color} shadow-[0_0_15px_currentColor]`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Advanced Hover Vetted Profiles (LIGHT) */}
      <section className="relative py-32 bg-white text-slate-900 border-y border-slate-100 overflow-hidden">
        {/* Subtle static dots for light sections */}
        <div className="absolute inset-0 bg-dots-white pointer-events-none" />
        <div className="max-w-[1300px] mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-50 text-violet-600 text-xs font-bold tracking-widest uppercase mb-5">
              Top 1% Network
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-slate-900">Pre-Vetted & Ready</h2>
            <p className="text-slate-500 text-lg">A live look at the caliber of engineers actively passing our technical assessments.</p>
          </div>
        </div>
        
        <div className="relative w-full flex overflow-x-hidden z-10">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 40, repeat: Infinity }} className="flex gap-6 px-6 whitespace-nowrap marquee-parent">
            {[...PROFILES, ...PROFILES].map((p, i) => (
              <div key={i} className="w-[380px] inline-flex flex-col bg-white/80 backdrop-blur-md border border-slate-200 rounded-[2rem] p-8 hover:border-violet-400 hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)] transition-all shrink-0 group relative cursor-default">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-[2rem]" />
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img src={p.img} alt={p.name} className="w-14 h-14 rounded-full border-2 border-slate-100 object-cover" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-xl">{p.name}</h4>
                      <p className="text-sm font-semibold text-slate-500">{p.role}</p>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 bg-green-50 text-green-600 border border-green-200 text-[10px] font-extrabold rounded-md shadow-sm">{p.match} AI Match</div>
                </div>
                <div className="flex gap-6 mb-6 pt-6 border-t border-slate-100">
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 uppercase font-bold mb-1">Previous</span><span className="font-semibold text-slate-700">{p.prev}</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 uppercase font-bold mb-1">Experience</span><span className="font-semibold text-slate-700">{p.exp}</span></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.stack.map(s => (
                    <span key={s} className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Scroll-Linked Vetting Process (DARK) */}
      <section ref={processRef} className="relative py-32 bg-[#020409] text-white border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-dots pointer-events-none" />
        <div className="max-w-[1300px] mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="sticky top-32">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Rigorous <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Protocol</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">We reject 97% of applicants. Our process is designed by ex-FAANG architects to ensure only the highest caliber engineers make it to your desk.</p>
          </div>
          
          <div className="relative pl-12 md:pl-16">
            <div className="absolute left-[23px] top-4 bottom-4 w-1 bg-white/10 rounded-full" />
            <motion.div style={{ height: lineHeight }} className="absolute left-[23px] top-4 w-1 bg-gradient-to-b from-violet-500 via-cyan-400 to-pink-500 shadow-[0_0_20px_rgba(139,92,246,0.9)] z-10 origin-top" />

            <div className="flex flex-col gap-16 relative z-20">
              {[
                { step: "1", title: "AI Codebase Analysis", desc: "Engine parses open-source contributions & GitHub repos." },
                { step: "2", title: "Live Pair Programming", desc: "Real-world pairing sessions on actual product features." },
                { step: "3", title: "Architectural Design", desc: "60-minute whiteboarding session with our Staff Engineers." },
                { step: "4", title: "Cultural Alignment", desc: "Behavioral deep-dive to ensure high EQ." }
              ].map((s, i) => (
                <ScrollReveal key={i} className="flex gap-8 group">
                  <div className="absolute -left-12 md:-left-16 w-12 h-12 rounded-full bg-[#080d1a] border-2 border-white/20 flex items-center justify-center text-slate-500 font-extrabold text-xl group-hover:border-violet-500 group-hover:text-violet-300 group-hover:bg-violet-500/20 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all z-20">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-2xl mb-3 group-hover:text-violet-300 transition-colors">{s.title}</h4>
                    <p className="text-slate-400">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Technologies (LIGHT with Multi-color Gradients) */}
      <section className="relative py-32 bg-[#F8FAFC] text-slate-900 border-b border-slate-200">
        <div className="absolute inset-0 bg-dots-white pointer-events-none" />
        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Core Technologies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_STACKS.map((stack, i) => (
              <ScrollReveal key={i} className="p-8 rounded-[2rem] bg-white/80 backdrop-blur-md border border-slate-200 hover:border-slate-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] group relative overflow-hidden transition-all">
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${stack.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <h3 className="font-extrabold text-xl mb-6 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stack.gradient} flex items-center justify-center text-white shadow-lg`}>
                    {i+1}
                  </div>
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.tools.map(tool => (
                    <span key={tool} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-bold text-slate-600 group-hover:border-slate-300 transition-colors">{tool}</span>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
