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
  { name: "Media & Press", desc: "Interview requests & branding.", email: "press@sarsglobal.com" }
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
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white pt-[72px]">
      
      {/* Hero & Form Section (DARK) */}
      <section className="relative w-full py-20 lg:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-dots opacity-[0.05] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          
          {/* Left: Enhanced Contact Info */}
          <ScrollReveal className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 w-fit mb-6">
              <span className="text-xs font-semibold tracking-widest text-blue-300 uppercase">24/7 Global Support</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Let&apos;s Build Your <br />
              <span className="gradient-text">Next Great Team</span>
            </h1>
            <p className="text-lg text-slate-400 mb-12 max-w-md leading-relaxed">
              Skip the automated chatbots. Reach out to our global team directly, and a dedicated talent architect will respond within 2 hours.
            </p>

            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Direct Departments</h3>
            <div className="flex flex-col gap-4">
              {DEPTS.map((dept, i) => (
                <div key={i} className="flex justify-between items-center p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors hover:border-blue-500/30">
                  <div>
                    <h4 className="font-bold text-white text-base">{dept.name}</h4>
                    <p className="text-sm text-slate-500 mt-1">{dept.desc}</p>
                  </div>
                  <a href={`mailto:${dept.email}`} className="text-blue-400 text-sm font-semibold hover:text-white transition-colors">
                    {dept.email}
                  </a>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Custom Interactive Form (Retained & Enhanced) */}
          <ScrollReveal>
            <div className="bg-[#080d1a]/80 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="flex flex-col items-center text-center py-16"
                >
                  <div className="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Request Received</h3>
                  <p className="text-slate-400 max-w-xs mx-auto">Thank you for reaching out. A talent architect will review your requirements and contact you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 px-6 py-3 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">First Name</label>
                      <input required type="text" placeholder="John" className="w-full bg-[#020409] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Last Name</label>
                      <input required type="text" placeholder="Doe" className="w-full bg-[#020409] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Work Email</label>
                    <input required type="email" placeholder="john@company.com" className="w-full bg-[#020409] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Inquiry Type</label>
                    <select className="w-full bg-[#020409] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer">
                      <option>I need to hire engineers</option>
                      <option>I am applying for a role</option>
                      <option>Partnership Inquiry</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Project Details</label>
                    <textarea required rows={4} placeholder="Tell us about your stack, timeline, and goals..." className="w-full bg-[#020409] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all resize-none" />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-[#0A66F5] text-white font-bold text-lg hover:shadow-[0_0_25px_rgba(10,102,245,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
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
          </ScrollReveal>
        </div>
      </section>

      {/* Global Offices Section (LIGHT) */}
      <section className="py-32 bg-[#F8FAFC] text-slate-900 border-t border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-white pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-blue-50 blur-[150px] rounded-full pointer-events-none -translate-x-1/2" />

        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Our Global Hubs</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Operating seamlessly across timezones to support your engineering teams around the clock.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OFFICES.map((office, i) => (
              <div key={i} className="flex flex-col p-10 rounded-3xl bg-white border border-slate-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-blue-300 transition-all relative overflow-hidden group">
                <div className="absolute -top-6 -right-6 text-9xl opacity-5 group-hover:scale-110 transition-transform duration-500">{office.icon}</div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-extrabold text-slate-900">{office.city}</h3>
                    <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-600">{office.time}</span>
                  </div>
                  <p className="text-blue-600 font-bold text-sm mb-4 uppercase tracking-wider">{office.region}</p>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed max-w-[200px] font-medium">{office.address}</p>
                  <a href={`mailto:${office.email}`} className="text-sm font-bold text-slate-900 border-b-2 border-slate-200 pb-1 hover:border-blue-600 hover:text-blue-600 transition-colors inline-block">
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
