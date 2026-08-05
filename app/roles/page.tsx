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
  { step: "01", title: "Apply & Profile Gen", desc: "Upload your resume. Our engine analyzes your history and highlights core strengths." },
  { step: "02", title: "Technical Vetting", desc: "A single rigorous interview with our architects. Pass once, skip screens at 50+ companies." },
  { step: "03", title: "Direct Pitching", desc: "We bypass ATS black holes. Our advocates pitch you directly to engineering leaders." },
  { step: "04", title: "Offer Negotiation", desc: "We provide market data and negotiate on your behalf to secure the compensation you deserve." }
];

export default function RolesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white pt-[72px]">
      
      {/* 1. Job Board Search Hero (DARK) */}
      <section className="relative w-full py-32 flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(10,102,245,0.15)_0%,#020409_70%)] pointer-events-none" />
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto w-full">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-blue-300 uppercase">For Candidates</span>
          </span>
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

      {/* 2. Advanced Job List (LIGHT) */}
      <section className="py-24 bg-white text-slate-900 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-white pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-50 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <div className="flex justify-between items-center mb-8 border-b border-slate-200 pb-6">
            <h2 className="text-3xl font-extrabold">Latest Openings</h2>
            <select className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 focus:outline-none cursor-pointer">
              <option>Most Relevant</option>
              <option>Highest Salary</option>
              <option>Newest First</option>
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
                className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-[0_10px_30px_rgba(10,102,245,0.06)] transition-all cursor-pointer"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                    {job.tag && (
                      <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md ${job.tag === 'Hot Role' ? 'bg-orange-50 text-orange-600 border border-orange-200' : 'bg-green-50 text-green-600 border border-green-200'}`}>
                        {job.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                    <span className="flex items-center gap-1.5 font-semibold text-slate-700">🏢 {job.company}</span>
                    <span className="flex items-center gap-1.5 font-medium text-slate-500">📍 {job.loc}</span>
                    <span className="flex items-center gap-1.5 font-medium text-slate-500">💼 {job.type}</span>
                    <span className="flex items-center gap-1.5 text-blue-600 font-bold">💵 {job.salary}</span>
                  </div>
                  <div className="flex gap-2 mt-1">
                    {job.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600">{t}</span>
                    ))}
                  </div>
                </div>

                <button className="mt-6 md:mt-0 px-6 py-3 rounded-xl bg-blue-50 text-blue-600 font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0 border border-blue-200 group-hover:border-blue-600">
                  View Role
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold transition-colors shadow-sm">
              Load More Roles
            </button>
          </div>
        </div>
      </section>

      {/* 3. Candidate Journey (DARK) */}
      <ScrollReveal className="py-24 bg-[#020409] text-white border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">How It Works</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We act as your personal career agent, handling the friction of job hunting so you can focus on coding.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {JOURNEY.map((j, i) => (
              <div key={i} className="relative flex flex-col pt-8">
                {/* Connecting Line (desktop only) */}
                {i !== JOURNEY.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-gradient-to-r from-blue-500/30 to-transparent z-0" />
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
