"use client";

import { motion } from "framer-motion";
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
    points: ["Scrum Master included", "Scalable on demand", "Dedicated Slack/Teams channel", "Quarterly performance reviews"],
    ideal: "Large scale product development",
    icon: "🤝"
  },
  {
    title: "Permanent Hiring",
    desc: "Elite engineers joining your core team full-time.",
    points: ["90-day replacement guarantee", "Rigorous cultural fit vetting", "Salary negotiation handled", "Direct employment"],
    ideal: "Scaling core engineering capability",
    icon: "🏢"
  },
  {
    title: "Contract Staffing",
    desc: "Specialized contractors for short-to-medium term sprint goals.",
    points: ["Deployed in 48 hours", "Hourly or monthly billing", "No payroll overhead", "Pre-vetted technical depth"],
    ideal: "Urgent project deadlines & skill gaps",
    icon: "⚡"
  }
];

const FAQS = [
  { q: "How do you vet your engineers?", a: "Every candidate goes through a 4-stage process: automated technical screening, a live system design interview with our internal senior architects, a behavioral analysis, and a strict background check." },
  { q: "What is your pricing model?", a: "We charge a flat percentage of the candidate's first-year base salary for permanent hires, payable only upon successful placement. For contractors, we offer transparent hourly rates with a small margin included." },
  { q: "Can I interview the candidates?", a: "Absolutely. We provide a curated shortlist of 3-5 top matches. You maintain full control over the final interview and selection process." },
  { q: "What if the contractor leaves mid-project?", a: "We maintain a deep bench of 'ready-to-deploy' talent. In the rare event a contractor must leave, we provide an equivalent replacement within 72 hours." }
];

export default function TalentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white pt-[72px]">
      
      {/* 1. Split-Screen Hero */}
      <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 max-w-[1400px] mx-auto py-20 gap-16">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
        
        {/* Left: Copy */}
        <div className="flex-1 flex flex-col gap-8 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-blue-300 uppercase">For Hiring Managers</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Scale Your Engine with <span className="gradient-text">Top 1% Talent</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
            Stop digging through resumes. Tell us what you&apos;re building, and our AI-driven matching engine will deploy a curated shortlist of vetted experts within 48 hours.
          </p>
          <div className="flex items-center gap-6 mt-4">
            <div className="flex -space-x-4">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Hired" className="w-12 h-12 rounded-full border-2 border-[#020409] object-cover" />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg">500+</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Engineers Deployed</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Intake Preview */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full max-w-md bg-white/[0.02] border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-[0_0_50px_rgba(10,102,245,0.1)] z-10"
        >
          <h3 className="text-2xl font-bold mb-6">Start a Talent Request</h3>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">I need a...</label>
              <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-blue-500/50">
                <option>Senior React Engineer</option>
                <option>Lead DevOps Architect</option>
                <option>Machine Learning Researcher</option>
                <option>Full-Stack Squad (4+)</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Engagement Type</label>
              <div className="grid grid-cols-2 gap-3">
                <div className="border border-blue-500/50 bg-blue-500/10 rounded-xl p-3 text-center text-sm font-semibold text-blue-400 cursor-pointer">Contract</div>
                <div className="border border-white/10 bg-white/5 rounded-xl p-3 text-center text-sm font-semibold text-slate-300 cursor-pointer hover:bg-white/10">Full-Time</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Work Email</label>
              <input type="email" placeholder="cto@company.com" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50" />
            </div>
            <Link href="/contact" className="w-full py-4 mt-4 rounded-xl bg-gradient-to-r from-blue-600 to-[#0A66F5] text-white font-bold text-center hover:shadow-[0_0_25px_rgba(10,102,245,0.4)] transition-all">
              See My Matches →
            </Link>
          </form>
        </motion.div>
      </section>

      {/* 2. Vetted Profiles Marquee */}
      <section className="py-24 bg-[#080d1a] border-y border-white/5 overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Pre-Vetted & Ready to Code</h2>
            <p className="text-slate-400">Sneak peek at the caliber of engineers in our active network.</p>
          </div>
          <Link href="/contact" className="text-blue-400 font-semibold hover:text-white transition-colors">View All Profiles →</Link>
        </div>
        
        <div className="relative w-full flex overflow-x-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#080d1a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080d1a] to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex gap-6 px-6 whitespace-nowrap marquee-parent"
          >
            {[...PROFILES, ...PROFILES].map((p, i) => (
              <div key={i} className="w-[350px] inline-flex flex-col bg-[#020409] border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-colors shrink-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img src={p.img} alt={p.name} className="w-12 h-12 rounded-full border border-white/20 object-cover" />
                    <div>
                      <h4 className="font-bold text-white text-lg">{p.name}</h4>
                      <p className="text-xs text-slate-400">{p.role}</p>
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold rounded uppercase tracking-wider">{p.match} AI Match</div>
                </div>
                <div className="flex gap-4 mb-5 text-sm text-slate-300">
                  <div className="flex flex-col"><span className="text-xs text-slate-500">Prev.</span><span>{p.prev}</span></div>
                  <div className="flex flex-col"><span className="text-xs text-slate-500">Exp.</span><span>{p.exp}</span></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map(s => (
                    <span key={s} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Engagement Models */}
      <ScrollReveal className="py-24 bg-[#020409]">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Flexible Engagement Models</h2>
            <p className="text-slate-400">Scale up or down precisely based on your product roadmap.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MODELS.map((m, i) => (
              <div key={i} className="flex flex-col bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-5xl opacity-20 group-hover:scale-110 transition-transform">{m.icon}</div>
                <h3 className="text-2xl font-bold mb-3 relative z-10">{m.title}</h3>
                <p className="text-slate-400 mb-8 h-[50px] relative z-10">{m.desc}</p>
                
                <div className="flex-1 flex flex-col gap-4 relative z-10">
                  {m.points.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs shrink-0">✓</div>
                      <span className="text-sm text-slate-300">{pt}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Ideal For</span>
                  <span className="text-sm text-white">{m.ideal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* 4. Client FAQs */}
      <ScrollReveal className="py-24 bg-[#080d1a] border-t border-white/5">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Client FAQ</h2>
          <div className="flex flex-col gap-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-white/[0.02] border border-white/10 rounded-2xl p-6 cursor-pointer open:bg-white/[0.04]">
                <summary className="font-bold text-lg list-none flex justify-between items-center outline-none">
                  {faq.q}
                  <span className="text-blue-400 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="text-slate-400 mt-4 leading-relaxed pr-8">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}
