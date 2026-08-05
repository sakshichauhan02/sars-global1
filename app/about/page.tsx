"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const TEAM = [
  { name: "Sarah Jenkins", role: "Chief Executive Officer", img: "https://i.pravatar.cc/300?u=sarahj", bio: "Former VP of Engineering at Stripe. Founded SARS to fix the broken technical recruitment model." },
  { name: "Marcus Chen", role: "Head of AI Matching", img: "https://i.pravatar.cc/300?u=marcus", bio: "Ph.D. in ML from Stanford. Architect behind our proprietary candidate vetting engine." },
  { name: "David Alaba", role: "VP of Global Talent", img: "https://i.pravatar.cc/300?u=david", bio: "15+ years scaling engineering teams across NA, EMEA, and APAC for Fortune 500s." },
  { name: "Elena Rostova", role: "Lead Technical Assessor", img: "https://i.pravatar.cc/300?u=elena2", bio: "Ex-Google Staff Engineer. Designs and oversees all system design interview protocols." }
];

const ADVISORS = [
  { name: "Jonathan Doe", role: "Strategic Advisor", company: "Ex-CTO @ Uber" },
  { name: "Alicia Keys", role: "Culture & DEI", company: "VP HR @ Netflix" },
  { name: "Samir Patil", role: "Growth Partner", company: "Partner @ Sequoia" }
];

const TIMELINE = [
  { year: "2021", title: "The Inception", desc: "SARS Global was founded to eliminate the technical recruitment friction experienced by fast-growing startups." },
  { year: "2022", title: "AI Engine V1", desc: "Launched our proprietary ML vetting engine, reducing initial candidate screening time from days to seconds." },
  { year: "2023", title: "Global Expansion", desc: "Opened operational hubs in London and Singapore, establishing a 24/7 placement pipeline." },
  { year: "2024", title: "Enterprise Scaling", desc: "Crossed 1,000+ active enterprise clients and over $50M in localized payroll managed." }
];

const CULTURE = [
  { title: "No Resumes, Only Reality", desc: "We don't care how well a candidate writes a CV. We care how well they write code, design systems, and communicate under pressure." },
  { title: "Speed is a Feature", desc: "In tech, moving slow means losing. We built our internal tools to guarantee 48-hour turnarounds without sacrificing a single degree of quality." },
  { title: "Radical Transparency", desc: "We share interview recordings, raw technical scores, and unedited feedback with our clients. No hidden flaws." }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white pt-[72px]">
      
      {/* 1. Cinematic Hero (DARK) */}
      <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none translate-x-1/3" />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Engineering <br />
              <span className="gradient-text">Meets Empathy</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
              We started SARS Global because technical recruitment was fundamentally broken. Recruiters didn&apos;t understand code, and engineers hated the process. We built a platform that respects the craft.
            </p>
          </div>
          
          <div className="flex-1 w-full relative">
            <div className="aspect-square max-w-[500px] mx-auto rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_0_50px_rgba(10,102,245,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent z-10 mix-blend-overlay" />
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" alt="Team collaborating" className="w-full h-full object-cover grayscale opacity-80" />
            </div>
            {/* Floating stat */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-[#080d1a]/90 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
              <div className="text-3xl font-extrabold text-blue-400 mb-1">2021</div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Year Founded</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Global Presence Map (LIGHT) */}
      <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-y border-slate-100">
        <div className="absolute inset-0 bg-dots-white pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain opacity-[0.03] pointer-events-none filter invert" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-50 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">A Truly Global Footprint</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">We source, vet, and place engineering talent across 4 continents and 90+ countries, seamlessly handling local compliance and payroll.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "90+", label: "Countries Placed" },
              { stat: "1.2M", label: "Engineers Analyzed" },
              { stat: "48h", label: "Avg. Time to Shortlist" },
              { stat: "98%", label: "Retention Rate" }
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <span className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-3">{s.stat}</span>
                <span className="text-xs text-slate-500 font-bold tracking-widest uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Journey Timeline (DARK) */}
      <section className="py-24 bg-[#080d1a] border-b border-white/5">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-16">The Journey So Far</h2>
          <div className="flex flex-col gap-12 border-l-2 border-white/10 pl-8 relative">
            {TIMELINE.map((t, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-blue-600 border-4 border-[#080d1a]"></div>
                <div className="text-blue-400 font-bold mb-1">{t.year}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{t.title}</h3>
                <p className="text-slate-400 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership Team Grid (DARK) */}
      <ScrollReveal className="py-32 bg-[#020409]">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 w-fit mb-4">
                <span className="text-xs font-semibold tracking-widest text-blue-300 uppercase">Leadership</span>
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Meet the Team</h2>
              <p className="text-slate-400 max-w-xl text-lg">Built by engineers, for engineers. Our leadership team brings decades of experience from the world&apos;s most demanding technical organizations.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {TEAM.map((member, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#080d1a] hover:border-blue-500/30 transition-all">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020409] via-[#020409]/40 to-transparent z-10" />
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm font-bold mb-4 uppercase tracking-wider">{member.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Advisors Grid */}
          <div className="pt-16 border-t border-white/10">
            <h3 className="text-2xl font-bold mb-8">Board & Advisors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ADVISORS.map((adv, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <h4 className="font-bold text-white text-lg">{adv.name}</h4>
                  <p className="text-blue-400 text-sm font-semibold mb-1">{adv.role}</p>
                  <p className="text-slate-500 text-sm">{adv.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 5. Culture & Mission Blocks (LIGHT) */}
      <ScrollReveal className="py-24 bg-[#F8FAFC] text-slate-900 border-t border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">How We Operate</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CULTURE.map((c, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white border border-slate-200 hover:-translate-y-2 transition-transform duration-300 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(10,102,245,0.08)]">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl mb-6 border border-blue-100">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{c.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
