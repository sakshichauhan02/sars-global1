"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const OFFICES = [
  { city: "San Francisco", region: "Global HQ", time: "PST", address: "100 Tech Innovation Way, CA 94105", email: "sf@sarsglobal.com", icon: "🌉" },
  { city: "London", region: "EMEA Hub", time: "GMT", address: "Level 39, One Canada Square, E14 5AB", email: "london@sarsglobal.com", icon: "🎡" },
  { city: "Singapore", region: "APAC Hub", time: "SGT", address: "Marina Bay Financial Centre, 018981", email: "sg@sarsglobal.com", icon: "🦁" }
];

const DEPTS = [
  { name: "Enterprise Sales", desc: "Scaling a team of 10+ engineers?", email: "enterprise@sarsglobal.com" },
  { name: "Candidate Support", desc: "Questions about your application?", email: "talent@sarsglobal.com" },
  { name: "Media & Press", desc: "Interview requests & branding.", email: "press@sarsglobal.com" },
  { name: "Partner API Integrations", desc: "For ATS integration issues.", email: "api@sarsglobal.com" }
];

const SUPPORT_FAQS = [
  { q: "How quickly do you respond to talent requests?", a: "Our enterprise sales team typically responds within 2 hours during normal business hours across our global hubs." },
  { q: "Can candidates contact support directly?", a: "Yes, candidates who are actively interviewing can reach their dedicated talent advocate via their provided Slack channel or direct email." },
  { q: "Where can I find press assets?", a: "Please email our Press team, and we will provide our brand guidelines, logos, and executive bios." }
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white pt-[72px] font-poppins">
      
      {/* 1. Hero & Form Section (DARK) */}
      <section className="relative w-full py-24 lg:py-32 overflow-hidden border-b border-white/5 perspective-1000">
        <div className="absolute inset-0 bg-dots opacity-[0.1] pointer-events-none" />
        
        {/* Animated glowing orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-600/20 blur-[150px] rounded-full pointer-events-none" 
        />
        
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 items-center">
          
          {/* Left: Enhanced Contact Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 w-fit mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-bold tracking-widest text-blue-300 uppercase">24/7 Global Support</span>
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-[80px] font-extrabold tracking-tight mb-8 leading-[1.1]"
            >
              Let&apos;s Build Your <br />
              <span className="gradient-text text-glow">Next Great Team</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-400 mb-16 max-w-lg leading-relaxed"
            >
              Skip the automated chatbots. Reach out directly, and a dedicated talent architect will respond within 2 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Direct Departments</h3>
              <div className="flex flex-col gap-4">
                {DEPTS.map((dept, i) => (
                  <div key={i} className="flex justify-between items-center p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-all hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(10,102,245,0.1)] group">
                    <div>
                      <h4 className="font-extrabold text-white text-lg group-hover:text-blue-400 transition-colors">{dept.name}</h4>
                      <p className="text-sm text-slate-500 mt-1 font-medium">{dept.desc}</p>
                    </div>
                    <a href={`mailto:${dept.email}`} className="text-blue-400 text-sm font-bold hover:text-white transition-colors hidden sm:block bg-blue-500/10 px-4 py-2 rounded-lg border border-blue-500/30">
                      Email
                    </a>
                  </div>
                ))}
              </div>
              
              {/* Socials */}
              <div className="flex gap-6 mt-10 pt-10 border-t border-white/10">
                <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Connect:</span>
                <a href="#" className="text-white font-bold hover:text-blue-400 transition-colors">LinkedIn</a>
                <a href="#" className="text-white font-bold hover:text-blue-400 transition-colors">Twitter (X)</a>
                <a href="#" className="text-white font-bold hover:text-blue-400 transition-colors">GitHub</a>
              </div>
            </motion.div>
          </div>

          {/* Right: Custom Interactive Form (3D Tilt) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-[3rem] blur-2xl" />
            
            <div className="bg-[#080d1a]/90 border border-white/10 rounded-[3rem] p-10 md:p-12 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] relative overflow-hidden">
              {/* Form subtle glow line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent opacity-50" />

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="flex flex-col items-center text-center py-20"
                >
                  <div className="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(74,222,128,0.3)] relative">
                    <div className="absolute inset-0 border-4 border-green-500/50 rounded-full animate-ping" />
                    <svg className="w-12 h-12 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-extrabold text-white mb-4">Request Received</h3>
                  <p className="text-slate-400 text-lg max-w-sm mx-auto">Thank you for reaching out. A talent architect will review your requirements and contact you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-12 px-8 py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white/10 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <h3 className="text-3xl font-extrabold text-white mb-2">Send a Message</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-bold text-blue-400 uppercase tracking-widest">First Name</label>
                      <input required type="text" placeholder="John" className="w-full bg-[#020409]/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all hover:bg-white/[0.02]" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-bold text-blue-400 uppercase tracking-widest">Last Name</label>
                      <input required type="text" placeholder="Doe" className="w-full bg-[#020409]/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all hover:bg-white/[0.02]" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold text-blue-400 uppercase tracking-widest">Work Email</label>
                    <input required type="email" placeholder="john@company.com" className="w-full bg-[#020409]/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all hover:bg-white/[0.02]" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold text-blue-400 uppercase tracking-widest">Inquiry Type</label>
                    <select className="w-full bg-[#020409]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer hover:bg-white/[0.02]">
                      <option>I need to hire engineers</option>
                      <option>I am applying for a role</option>
                      <option>Partnership Inquiry</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold text-blue-400 uppercase tracking-widest">Project Details</label>
                    <textarea required rows={4} placeholder="Tell us about your stack, timeline, and goals..." className="w-full bg-[#020409]/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all resize-none hover:bg-white/[0.02]" />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-5 mt-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-extrabold text-lg hover:shadow-[0_0_30px_rgba(10,102,245,0.5)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <span className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      "Send Message →"
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Support FAQs (DARK) */}
      <section className="py-32 bg-[#080d1a] text-white border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
              Knowledge Base
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Support FAQ</h2>
          </div>
          <div className="flex flex-col gap-6">
            {SUPPORT_FAQS.map((faq, i) => (
              <details key={i} className="group bg-white/[0.02] border border-white/10 rounded-2xl p-8 cursor-pointer open:bg-white/[0.04] hover:border-blue-500/30 transition-colors">
                <summary className="font-extrabold text-xl list-none flex justify-between items-center outline-none">
                  {faq.q}
                  <span className="text-blue-400 group-open:rotate-45 transition-transform text-3xl leading-none">+</span>
                </summary>
                <p className="text-slate-400 mt-6 leading-relaxed pr-8 font-medium text-lg">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Global Offices Section (LIGHT) */}
      <section className="py-32 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-white pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 w-[1000px] h-[500px] bg-blue-50 blur-[150px] rounded-full pointer-events-none -translate-x-1/2" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold mb-6 tracking-tight">Our Global Hubs</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-xl">Operating seamlessly across timezones to support your engineering teams around the clock.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OFFICES.map((office, i) => (
              <ScrollReveal key={i} className="flex flex-col p-12 rounded-[2.5rem] bg-white border border-slate-200 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:border-blue-400 transition-all relative overflow-hidden group cursor-default">
                <div className="absolute -top-6 -right-6 text-[150px] opacity-[0.03] group-hover:scale-110 group-hover:opacity-[0.06] transition-all duration-500">{office.icon}</div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="text-4xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">{office.city}</h3>
                    <span className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-extrabold text-blue-600 shadow-sm">{office.time}</span>
                  </div>
                  <p className="text-blue-600 font-extrabold text-sm mb-6 uppercase tracking-widest">{office.region}</p>
                  <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-[200px] font-medium">{office.address}</p>
                  <a href={`mailto:${office.email}`} className="text-base font-extrabold text-slate-900 border-b-2 border-slate-200 pb-1 hover:border-blue-600 hover:text-blue-600 transition-colors inline-block">
                    {office.email}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
