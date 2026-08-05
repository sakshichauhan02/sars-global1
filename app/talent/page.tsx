"use client";

import { motion, useTransform, useMotionValue, useScroll, useSpring } from "framer-motion";
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
    icon: "🤝",
    glow: "rgba(10,102,245,0.15)"
  },
  {
    title: "Permanent Hiring",
    desc: "Elite engineers joining your core team full-time.",
    points: ["90-day replacement guarantee", "Rigorous cultural fit vetting", "Salary negotiation handled"],
    ideal: "Scaling core engineering capability",
    icon: "🏢",
    glow: "rgba(139,92,246,0.15)"
  },
  {
    title: "Contract Staffing",
    desc: "Specialized contractors for short-to-medium term sprint goals.",
    points: ["Deployed in 48 hours", "Hourly or monthly billing", "No payroll overhead"],
    ideal: "Urgent project deadlines & skill gaps",
    icon: "⚡",
    glow: "rgba(34,211,238,0.15)"
  }
];

const FAQS = [
  { q: "How do you vet your engineers?", a: "Every candidate goes through a 4-stage process: automated technical screening, a live system design interview with our internal senior architects, a behavioral analysis, and a strict background check." },
  { q: "What is your pricing model?", a: "We charge a flat percentage of the candidate's first-year base salary for permanent hires, payable only upon successful placement. For contractors, we offer transparent hourly rates with a small margin included." },
  { q: "Can I interview the candidates?", a: "Absolutely. We provide a curated shortlist of 3-5 top matches. You maintain full control over the final interview and selection process." },
  { q: "Do you handle local compliance and payroll for remote hires?", a: "Yes, through our employer of record (EOR) partners, we can compliantly hire and pay engineers in over 90 countries without you needing a local entity." }
];

const TECH_STACKS = [
  { category: "Frontend", tools: ["React", "Next.js", "Vue", "TypeScript", "TailwindCSS"] },
  { category: "Backend", tools: ["Node.js", "Python", "Go", "Rust", "Java", "C#"] },
  { category: "Data & AI", tools: ["PyTorch", "TensorFlow", "Pandas", "Spark", "Snowflake"] },
  { category: "DevOps", tools: ["Kubernetes", "Docker", "AWS", "Terraform", "CI/CD"] },
  { category: "Web3", tools: ["Solidity", "Rust", "Foundry", "Hardhat", "Ethers.js"] }
];

const SUCCESS_STORIES = [
  { company: "Fintech Unicorn", metric: "3 Weeks", result: "Scaled core banking engineering team from 10 to 25 devs." },
  { company: "Series A AI Startup", metric: "48 Hours", result: "Deployed 2 Staff ML Researchers to beat a product deadline." },
  { company: "Enterprise SaaS", metric: "98%", result: "Retention rate across 40+ placements over the last two years." }
];

// Custom Hook for Typing Effect
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

export default function TalentPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse positions for parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

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

  // Transform values for parallax
  const bgX = useTransform(mouseX, [0, 1], ["0%", "-5%"]);
  const bgY = useTransform(mouseY, [0, 1], ["0%", "-5%"]);
  const formX = useTransform(mouseX, [0, 1], ["10px", "-10px"]);
  const formY = useTransform(mouseY, [0, 1], ["10px", "-10px"]);
  const orbX = useTransform(mouseX, [0, 1], ["-20%", "20%"]);
  const orbY = useTransform(mouseY, [0, 1], ["-20%", "20%"]);

  const typedText = useTypingEffect(["AI Engineers", "DevOps Leads", "Rust Experts", "Top 1% Talent"], 80);

  // Scroll logic for Vetting Process
  const processRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white pt-[72px] font-poppins">
      
      {/* 1. Ultra-Premium Interactive Hero (DARK) */}
      <section 
        ref={containerRef}
        className="relative w-full min-h-[95vh] flex items-center overflow-hidden perspective-1000"
      >
        <motion.div
          className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] bg-dots pointer-events-none opacity-20"
          style={{ x: bgX, y: bgY }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-[700px] h-[700px] rounded-full pointer-events-none mix-blend-overlay z-0"
          style={{
            background: "radial-gradient(circle, rgba(10, 102, 245, 0.4) 0%, transparent 60%)",
            x: orbX,
            y: orbY,
            translateX: "25%",
            translateY: "-50%"
          }}
        />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 py-20">
          
          {/* Left: Copy */}
          <div className="flex flex-col gap-8 justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">For Hiring Managers</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-[72px] font-extrabold tracking-tight leading-[1.1] h-[160px] md:h-[220px]"
            >
              Scale Your Engine with <br />
              <span className="gradient-text text-glow">
                {typedText}<span className="cursor" />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-400 leading-relaxed max-w-xl"
            >
              Stop digging through resumes. Tell us what you&apos;re building, and our AI-driven matching engine will deploy a curated shortlist of vetted experts within 48 hours.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-6 mt-4"
            >
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Hired" className="w-12 h-12 rounded-full border-2 border-[#020409] object-cover hover:-translate-y-1 transition-transform cursor-pointer" />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">500+</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Engineers Deployed</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Premium Interactive Intake UI */}
          <div className="relative w-full h-full min-h-[500px] hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-[2rem] blur-xl" />
            <motion.div 
              style={{ x: formX, y: formY }}
              className="w-full max-w-md bg-[#080d1a]/80 border border-white/10 rounded-[2rem] backdrop-blur-2xl shadow-[0_0_50px_rgba(10,102,245,0.15)] flex flex-col overflow-hidden"
            >
              <div className="h-12 border-b border-white/10 bg-white/[0.02] flex items-center px-6 justify-between">
                <div className="flex gap-2 cursor-pointer">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-400 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 transition-colors" />
                </div>
                <div className="text-xs text-slate-500 font-medium font-mono">SARS Intake v2.0</div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Initialize Search</h3>
                <form className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2 relative group">
                    <label className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">I need a...</label>
                    <select className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white appearance-none focus:outline-none focus:border-blue-500/50 transition-colors cursor-pointer group-hover:bg-white/[0.05]">
                      <option>Senior React Engineer</option>
                      <option>Lead DevOps Architect</option>
                      <option>Machine Learning Researcher</option>
                      <option>Full-Stack Squad (4+)</option>
                    </select>
                    <div className="absolute right-4 top-10 pointer-events-none text-slate-500">▼</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">Engagement Model</label>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border border-blue-500/50 bg-blue-500/10 rounded-xl p-3 text-center text-sm font-bold text-blue-400 cursor-pointer shadow-[0_0_15px_rgba(10,102,245,0.2)]">Contract</div>
                      <div className="border border-white/10 bg-white/5 rounded-xl p-3 text-center text-sm font-semibold text-slate-300 cursor-pointer hover:bg-white/10 transition-colors">Full-Time</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">Work Email</label>
                    <input type="email" placeholder="cto@company.com" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500/50 transition-colors placeholder-slate-600" />
                  </div>
                  <Link href="/contact" className="w-full py-4 mt-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-center hover:shadow-[0_0_30px_rgba(10,102,245,0.4)] transition-all duration-300 hover:scale-[1.02]">
                    Engage Talent Engine →
                  </Link>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Advanced Hover Vetted Profiles (LIGHT) */}
      <section className="py-32 bg-white text-slate-900 border-y border-slate-100 overflow-hidden relative">
        <div className="absolute inset-0 bg-dots-white pointer-events-none" />
        <div className="absolute top-0 right-1/2 w-[600px] h-[300px] bg-blue-50 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1300px] mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-5">
              Top 1% Network
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-slate-900 tracking-tight">Pre-Vetted & Ready</h2>
            <p className="text-slate-500 text-lg max-w-xl">A live look at the caliber of engineers actively passing our technical assessments.</p>
          </div>
          <Link href="/contact" className="text-blue-600 font-bold hover:text-blue-500 transition-colors flex items-center gap-2 group">
            View All Profiles <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
        
        <div className="relative w-full flex overflow-x-hidden z-10">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            className="flex gap-6 px-6 whitespace-nowrap marquee-parent"
          >
            {[...PROFILES, ...PROFILES].map((p, i) => (
              <div key={i} className="w-[380px] inline-flex flex-col bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(10,102,245,0.12)] transition-all duration-300 shrink-0 group relative overflow-hidden cursor-default">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img src={p.img} alt={p.name} className="w-14 h-14 rounded-full border-2 border-slate-100 object-cover group-hover:border-blue-100 transition-colors" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-xl group-hover:text-blue-600 transition-colors">{p.name}</h4>
                      <p className="text-sm font-semibold text-slate-500">{p.role}</p>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 bg-green-50 text-green-600 border border-green-200 text-[10px] font-extrabold rounded-md uppercase tracking-widest">{p.match} AI Match</div>
                </div>
                
                <div className="flex gap-6 mb-6 pt-6 border-t border-slate-100">
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Previous</span><span className="font-semibold text-slate-700">{p.prev}</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Experience</span><span className="font-semibold text-slate-700">{p.exp}</span></div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.stack.map(s => (
                    <span key={s} className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Scroll-Linked Vetting Process (DARK) */}
      <section ref={processRef} className="py-32 bg-[#020409] text-white border-b border-white/5 relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="sticky top-32">
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-5">
              The Protocol
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Rigorous <br/><span className="gradient-text">Vetting Protocol</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
              We reject 97% of applicants before you ever see their profile. Our vetting process is designed by ex-FAANG architects to ensure only the highest caliber engineers make it to your desk.
            </p>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#080d1a] border border-white/10 w-fit">
              <div className="text-5xl font-extrabold text-blue-500">3%</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider leading-snug">Acceptance<br/>Rate</div>
            </div>
          </div>
          
          <div className="relative pl-12 md:pl-16">
            {/* Scroll Linked Line */}
            <div className="absolute left-[23px] top-4 bottom-4 w-1 bg-white/10 rounded-full" />
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute left-[23px] top-4 w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-violet-500 rounded-full shadow-[0_0_15px_rgba(10,102,245,0.8)] z-10 origin-top"
            />

            <div className="flex flex-col gap-16 relative z-20">
              {[
                { step: "1", title: "AI Codebase Analysis", desc: "Our engine parses open-source contributions, GitHub repos, PRs, and past projects to evaluate raw code quality and documentation habits before a human ever speaks to them." },
                { step: "2", title: "Live Pair Programming", desc: "No algorithmic brain-teasers or LeetCode. We conduct real-world pairing sessions on actual product features to see how they collaborate and debug in real-time." },
                { step: "3", title: "Architectural Design", desc: "A rigorous 60-minute whiteboarding session with our internal Staff Engineers to assess system scale, architectural trade-offs, and deep backend logic." },
                { step: "4", title: "Cultural Alignment", desc: "A behavioral deep-dive to ensure high emotional intelligence (EQ), strong remote communication skills, and an exact fit for your company's specific culture." }
              ].map((s, i) => (
                <ScrollReveal key={i} className="flex gap-8 group">
                  <div className="absolute -left-12 md:-left-16 w-12 h-12 rounded-full bg-[#080d1a] border-2 border-white/20 flex items-center justify-center text-slate-500 font-extrabold text-xl group-hover:border-blue-500 group-hover:text-blue-400 group-hover:bg-blue-500/10 group-hover:shadow-[0_0_20px_rgba(10,102,245,0.4)] transition-all duration-500 z-20">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-2xl mb-3 group-hover:text-blue-400 transition-colors">{s.title}</h4>
                    <p className="text-slate-400 text-base leading-relaxed">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tech Stack Expertise (LIGHT) */}
      <section className="py-32 bg-white text-slate-900 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-white pointer-events-none" />
        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Core Technologies</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">We maintain highly specialized, pre-vetted talent pools across modern development ecosystems.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_STACKS.map((stack, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-[0_20px_40px_rgba(10,102,245,0.08)] transition-all duration-400 group cursor-default"
              >
                <h3 className="font-extrabold text-slate-900 text-xl mb-6 flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-blue-500 group-hover:shadow-[0_0_15px_rgba(10,102,245,0.5)] transition-shadow"></span>
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.tools.map(tool => (
                    <span key={tool} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-bold text-slate-600 group-hover:bg-white group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">{tool}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 3D Tilt Success Stories (DARK) */}
      <section className="py-32 bg-[#080d1a] text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-5">
              Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Client Success</h2>
            <p className="text-slate-400 text-lg">Measurable results delivered for the world&apos;s fastest-growing companies.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
            {SUCCESS_STORIES.map((story, i) => (
              <motion.div 
                key={i}
                whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/5 hover:shadow-[0_30px_60px_rgba(10,102,245,0.15)] transition-colors cursor-default"
              >
                <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-400 mb-6">{story.metric}</div>
                <h4 className="font-bold text-2xl text-white mb-3">{story.company}</h4>
                <p className="text-slate-400 text-base leading-relaxed font-medium">{story.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Premium Engagement Models (LIGHT) */}
      <ScrollReveal className="py-32 bg-[#F8FAFC] text-slate-900 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 blur-[150px] rounded-full pointer-events-none opacity-50" />
        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Engagement Models</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">Scale up or down precisely based on your product roadmap.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MODELS.map((m, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="flex flex-col bg-white border border-slate-200 rounded-[2rem] p-10 hover:shadow-[0_30px_60px_rgba(10,102,245,0.08)] hover:border-blue-400 transition-all relative overflow-hidden group cursor-default"
                style={{ "--glow": m.glow } as React.CSSProperties}
              >
                {/* Hover Glow Background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 80% 20%, ${m.glow}, transparent 60%)` }}
                />

                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl mb-8 border border-blue-100 group-hover:scale-110 transition-transform duration-500 relative z-10">{m.icon}</div>
                <h3 className="text-3xl font-extrabold mb-4 text-slate-900 relative z-10 group-hover:text-blue-700 transition-colors">{m.title}</h3>
                <p className="text-slate-500 mb-10 h-[60px] relative z-10 font-medium">{m.desc}</p>
                
                <div className="flex-1 flex flex-col gap-4 relative z-10">
                  {m.points.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs shrink-0 font-bold border border-blue-100">✓</div>
                      <span className="text-sm font-bold text-slate-700">{pt}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 pt-6 border-t border-slate-100 relative z-10">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Ideal For</span>
                  <span className="text-sm font-extrabold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg inline-block">{m.ideal}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* 7. Client FAQs (DARK) */}
      <ScrollReveal className="py-32 bg-[#020409] text-white border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-5">
              Knowledge Base
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Client FAQ</h2>
          </div>
          <div className="flex flex-col gap-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-white/[0.02] border border-white/10 rounded-2xl p-6 cursor-pointer open:bg-white/[0.04] hover:border-blue-500/30 transition-colors">
                <summary className="font-bold text-lg list-none flex justify-between items-center outline-none">
                  {faq.q}
                  <span className="text-blue-400 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="text-slate-400 mt-4 leading-relaxed pr-8 font-medium">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}
