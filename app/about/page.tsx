"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const TEAM = [
  { name: "Sarah Jenkins", role: "Chief Executive Officer", img: "https://i.pravatar.cc/400?u=sarahj", bio: "Former VP of Engineering at Stripe. Founded SARS to fix the broken technical recruitment model." },
  { name: "Marcus Chen", role: "Head of AI Matching", img: "https://i.pravatar.cc/400?u=marcus", bio: "Ph.D. in ML from Stanford. Architect behind our proprietary candidate vetting engine." },
  { name: "David Alaba", role: "VP of Global Talent", img: "https://i.pravatar.cc/400?u=david", bio: "15+ years scaling engineering teams across NA, EMEA, and APAC for Fortune 500s." },
  { name: "Elena Rostova", role: "Lead Technical Assessor", img: "https://i.pravatar.cc/400?u=elena2", bio: "Ex-Google Staff Engineer. Designs and oversees all system design interview protocols." }
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

  const imgY = useTransform(mouseY, [0, 1], ["-10px", "10px"]);
  const imgX = useTransform(mouseX, [0, 1], ["-10px", "10px"]);

  // Timeline scroll
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white pt-[72px] font-poppins">
      
      {/* 1. Cinematic Hero (DARK) */}
      <section ref={containerRef} className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden perspective-1000">
        <div className="absolute inset-0 bg-dots opacity-[0.1] pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none translate-x-1/3" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-20 py-20">
          <div className="flex-1 flex flex-col gap-6 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-bold tracking-widest text-blue-300 uppercase mb-4 backdrop-blur-md">
                Our Mission
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-[80px] font-extrabold tracking-tight leading-[1.1]"
            >
              Engineering <br />
              <span className="gradient-text text-glow">Meets Empathy</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-slate-400 max-w-xl leading-relaxed mt-4"
            >
              We started SARS Global because technical recruitment was fundamentally broken. Recruiters didn&apos;t understand code, and engineers hated the process. We built a platform that respects the craft.
            </motion.p>
          </div>
          
          <div className="flex-1 w-full relative">
            <motion.div 
              style={{ x: imgX, y: imgY }}
              className="aspect-square max-w-[600px] mx-auto rounded-[3rem] overflow-hidden border border-white/20 relative shadow-[0_30px_100px_rgba(10,102,245,0.25)]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#020409] to-transparent z-10 mix-blend-overlay opacity-60" />
              <div className="absolute inset-0 bg-blue-500/10 z-10 mix-blend-color" />
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" alt="Team collaborating" className="w-full h-full object-cover grayscale opacity-90" />
            </motion.div>
            
            {/* Floating stat */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 p-8 rounded-3xl bg-[#080d1a]/80 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
            >
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-400 mb-2">2021</div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Year Founded</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Global Presence Map (LIGHT) */}
      <section className="py-32 bg-white text-slate-900 relative overflow-hidden border-y border-slate-100">
        <div className="absolute inset-0 bg-dots-white pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain opacity-[0.03] pointer-events-none filter invert scale-110" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-50 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-[1300px] mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight">A Global Footprint</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-xl leading-relaxed">We source, vet, and place engineering talent across 4 continents and 90+ countries, seamlessly handling local compliance.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: "90+", label: "Countries Placed" },
              { stat: "1.2M", label: "Engineers Analyzed" },
              { stat: "48h", label: "Avg. Time to Shortlist" },
              { stat: "98%", label: "Retention Rate" }
            ].map((s, i) => (
              <ScrollReveal key={i} className="flex flex-col items-center text-center p-10 rounded-[2rem] bg-white border border-slate-200 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(10,102,245,0.1)] transition-all duration-300 group">
                <span className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">{s.stat}</span>
                <span className="text-sm text-slate-500 font-extrabold tracking-widest uppercase">{s.label}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Journey Timeline (DARK) */}
      <section ref={timelineRef} className="py-32 bg-[#080d1a] border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none opacity-50" />
        
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-extrabold text-center mb-24 tracking-tight">The Journey So Far</h2>
          
          <div className="flex flex-col gap-16 pl-10 relative">
            {/* Background Line */}
            <div className="absolute left-[9px] top-4 bottom-0 w-1 bg-white/10 rounded-full" />
            {/* Animated Glow Line */}
            <motion.div 
              style={{ height: lineScale }}
              className="absolute left-[9px] top-4 w-1 bg-gradient-to-b from-blue-400 to-cyan-400 shadow-[0_0_20px_rgba(10,102,245,1)] rounded-full origin-top z-10" 
            />

            {TIMELINE.map((t, i) => (
              <ScrollReveal key={i} className="relative group">
                <div className="absolute -left-[51px] top-2 w-6 h-6 rounded-full bg-[#080d1a] border-4 border-white/20 group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(10,102,245,0.5)] transition-all duration-500 z-20"></div>
                <div className="text-blue-400 font-extrabold text-2xl mb-2">{t.year}</div>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">{t.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-medium">{t.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership Team Grid (DARK) */}
      <section className="py-32 bg-[#020409]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col justify-center items-center text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 w-fit mb-6">
              <span className="text-xs font-bold tracking-widest text-blue-300 uppercase">Leadership</span>
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Meet the Team</h2>
            <p className="text-slate-400 max-w-2xl text-xl leading-relaxed">Built by engineers, for engineers. Our leadership brings decades of experience from the world&apos;s most demanding tech organizations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 perspective-1000">
            {TEAM.map((member, i) => (
              <motion.div 
                key={i} 
                whileHover={{ rotateY: 5, rotateX: 5, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080d1a] hover:border-blue-500/50 hover:shadow-[0_20px_60px_rgba(10,102,245,0.2)] transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020409] via-[#020409]/60 to-transparent z-10 pointer-events-none" />
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-3xl font-extrabold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 text-xs font-extrabold mb-6 uppercase tracking-widest">{member.role}</p>
                  <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-medium">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Advisors Grid */}
          <div className="pt-24 border-t border-white/10">
            <h3 className="text-3xl font-extrabold mb-12 text-center tracking-tight">Board & Advisors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ADVISORS.map((adv, i) => (
                <ScrollReveal key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all cursor-default text-center">
                  <h4 className="font-extrabold text-white text-2xl mb-2">{adv.name}</h4>
                  <p className="text-blue-400 text-sm font-bold mb-2 uppercase tracking-widest">{adv.role}</p>
                  <p className="text-slate-500 font-medium">{adv.company}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Culture & Mission Blocks (LIGHT) */}
      <section className="py-32 bg-[#F8FAFC] text-slate-900 border-t border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 blur-[150px] rounded-full pointer-events-none opacity-50" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold mb-4 tracking-tight">How We Operate</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CULTURE.map((c, i) => (
              <ScrollReveal key={i} className="p-12 rounded-[2.5rem] bg-white border border-slate-200 hover:-translate-y-3 transition-transform duration-500 hover:border-blue-400 hover:shadow-[0_30px_60px_rgba(10,102,245,0.08)] group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-extrabold text-2xl mb-8 border border-blue-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {i + 1}
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">{c.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-lg">{c.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
