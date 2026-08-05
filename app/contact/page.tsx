"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const OFFICES = [
  { city: "San Francisco", region: "Global HQ", icon: "🌉", gradient: "from-blue-600 to-cyan-500" },
  { city: "London", region: "EMEA Hub", icon: "🎡", gradient: "from-violet-600 to-purple-500" },
  { city: "Singapore", region: "APAC Hub", icon: "🦁", gradient: "from-pink-600 to-rose-500" }
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setIsSubmitted(true), 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white pt-[72px] font-poppins">
      
      {/* 1. Hero & Form (DARK with Violet/Cyan) */}
      <section className="relative w-full py-24 lg:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-dots opacity-15 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-violet-600/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 items-center">
          
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl md:text-[80px] font-extrabold tracking-tight mb-8">
              Let&apos;s Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-500">Next Great Team</span>
            </h1>
            <p className="text-xl text-slate-400 mb-16 max-w-lg">
              Skip the automated chatbots. Reach out directly, and a dedicated talent architect will respond within 2 hours.
            </p>
          </div>

          <div className="w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-transparent rounded-[3rem] blur-2xl" />
            <div className="bg-[#080d1a]/90 border border-white/10 rounded-[3rem] p-10 md:p-12 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-cyan-400 to-transparent opacity-50" />
              {isSubmitted ? (
                <div className="text-center py-20 relative z-10">
                  <h3 className="text-4xl font-extrabold text-white mb-4">Request Received</h3>
                  <p className="text-slate-400">A talent architect will review your requirements and contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
                  <h3 className="text-3xl font-extrabold text-white mb-2">Send a Message</h3>
                  <input required type="email" placeholder="Work Email" className="w-full bg-[#020409]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-violet-500/50" />
                  <textarea required rows={4} placeholder="Project Details" className="w-full bg-[#020409]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-violet-500/50" />
                  <button type="submit" className="w-full py-5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-extrabold text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all hover:scale-[1.02]">
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Enterprise Partnerships (DARK) */}
      <section className="relative py-32 bg-[#080d1a] border-b border-white/5 text-center overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-extrabold mb-6">Enterprise ATS Integrations</h2>
          <p className="text-slate-400 text-lg mb-10">We integrate seamlessly with Greenhouse, Lever, and Workday. If you are an ATS provider looking to partner, access our developer API docs.</p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-colors">API Documentation</button>
            <button className="px-8 py-4 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30 font-bold hover:bg-violet-600/30 transition-colors">Partner Program</button>
          </div>
        </div>
      </section>

      {/* 3. Global Offices Section (LIGHT with Multi-color) */}
      <section className="relative py-32 bg-[#F8FAFC] text-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-dots-white pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold mb-6">Our Global Hubs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OFFICES.map((office, i) => (
              <div key={i} className="flex flex-col p-12 rounded-[2.5rem] bg-white border border-slate-200 group overflow-hidden relative">
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${office.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="text-6xl mb-6 relative z-10">{office.icon}</div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2 relative z-10">{office.city}</h3>
                <p className="text-slate-500 font-bold uppercase tracking-widest relative z-10">{office.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
