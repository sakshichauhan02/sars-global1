"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const SKILLS = ["React", "Rust", "Python", "Solidity", "Node.js", "Go", "Kubernetes", "GraphQL", "PyTorch"];

const JOBS = [
  { id: 1, title: "Senior AI Engineer", company: "Stealth Startup", loc: "Remote (US)", type: "Full-Time", salary: "$160k - $210k + Equity", tech: ["Python", "PyTorch", "AWS"], tag: "Hot Role" },
  { id: 2, title: "Staff Frontend Architect", company: "FinTech Unicorn", loc: "New York, NY (Hybrid)", type: "Full-Time", salary: "$180k - $230k", tech: ["React", "TypeScript", "Next.js"], tag: "New" },
  { id: 3, title: "Lead Smart Contract Dev", company: "DeFi Protocol", loc: "Remote (Global)", type: "Contract (12mo)", salary: "$120/hr", tech: ["Solidity", "Foundry", "EVM"], tag: "" },
  { id: 4, title: "Backend Engineer - Infrastructure", company: "SaaS Enterprise", loc: "San Francisco, CA", type: "Full-Time", salary: "$150k - $190k", tech: ["Go", "Kubernetes", "gRPC"], tag: "" },
  { id: 5, title: "Machine Learning Ops (MLOps)", company: "HealthTech AI", loc: "Remote (EU/US)", type: "Full-Time", salary: "$140k - $175k", tech: ["Docker", "Python", "Terraform"], tag: "Actively Interviewing" },
];

const JOURNEY = [
  { step: "01", title: "Apply & AI Profile Generation", desc: "Upload your resume or LinkedIn. Our engine instantly analyzes your history and highlights your core technical strengths." },
  { step: "02", title: "Technical Vetting", desc: "A single, rigorous system design and coding interview with our internal architects. Pass once, skip the technical screens at 50+ companies." },
  { step: "03", title: "Direct Pitching", desc: "We bypass ATS black holes. Our talent advocates pitch your verified profile directly to CTOs and VP of Engineerings." },
  { step: "04", title: "Offer & Negotiation", desc: "We provide market data and negotiate on your behalf to ensure you secure the compensation and equity you deserve." }
];

export default function RolesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white pt-[72px]">
      
      {/* 1. Job Board Search Hero */}
      <section className="relative w-full py-32 flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(10,102,245,0.15)_0%,#020409_70%)] pointer-events-none" />
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Find Your Next <span className="gradient-text">Breakthrough</span>
          </h1>
          <p className="text-lg text-slate-400 mb-10">
            Access exclusive, unlisted roles at the world&apos;s most innovative startups and tech giants.
          </p>
          
          {/* Big Search Bar */}
          <div className="relative w-full mb-8">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <span className="text-2xl">🔍</span>
            </div>
            <input 
              type="text" 
              placeholder="Search roles, skills, or companies..." 
              className="w-full h-20 bg-white/5 border border-white/10 rounded-full pl-16 pr-40 text-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all backdrop-blur-xl shadow-[0_0_30px_rgba(10,102,245,0.05)]"
            />
            <button className="absolute right-3 top-3 bottom-3 px-8 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-colors shadow-lg">
              Search
            </button>
          </div>

          {/* Skill Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-sm font-semibold text-slate-500 py-2">Trending:</span>
            {SKILLS.map(s => (
              <button key={s} className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-sm text-slate-300 hover:border-blue-500/50 hover:text-blue-400 transition-colors">
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Advanced Job List */}
      <section className="py-20 bg-[#080d1a]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
            <h2 className="text-2xl font-bold">Latest Openings</h2>
            <select className="bg-transparent border border-white/10 rounded-lg px-4 py-2 text-sm text-slate-300 focus:outline-none cursor-pointer">
              <option className="bg-[#020409]">Most Relevant</option>
              <option className="bg-[#020409]">Highest Salary</option>
              <option className="bg-[#020409]">Newest First</option>
            </select>
          </div>

          <div className="flex flex-col gap-4">
            {JOBS.map((job, i) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-blue-500/30 transition-all cursor-pointer"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.title}</h3>
                    {job.tag && (
                      <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md ${job.tag === 'Hot Role' ? 'bg-orange-500/20 text-orange-400' : 'bg-green-500/20 text-green-400'}`}>
                        {job.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-400">
                    <span className="flex items-center gap-1 font-medium text-slate-300">🏢 {job.company}</span>
                    <span className="flex items-center gap-1">📍 {job.loc}</span>
                    <span className="flex items-center gap-1">💼 {job.type}</span>
                    <span className="flex items-center gap-1 text-green-400 font-semibold">💵 {job.salary}</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {job.tech.map(t => (
                      <span key={t} className="px-2 py-1 rounded bg-white/5 text-xs text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>

                <button className="mt-4 md:mt-0 px-6 py-3 rounded-xl border border-white/10 bg-transparent text-white font-semibold text-sm group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors shrink-0">
                  View Role
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold transition-colors">
              Load More Roles
            </button>
          </div>
        </div>
      </section>

      {/* 3. Candidate Journey */}
      <ScrollReveal className="py-24 bg-[#020409] border-t border-white/5">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We act as your personal career agent, handling the friction of job hunting so you can focus on coding.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {JOURNEY.map((j, i) => (
              <div key={i} className="relative flex flex-col pt-8">
                {/* Connecting Line (desktop only) */}
                {i !== JOURNEY.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent z-0" />
                )}
                
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#080d1a] border-2 border-blue-500/30 flex items-center justify-center text-xl font-extrabold text-blue-400 mb-6 shadow-[0_0_20px_rgba(10,102,245,0.2)]">
                  {j.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{j.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
