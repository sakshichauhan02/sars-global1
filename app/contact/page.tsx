"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020409] text-white pt-[72px]">
      <section className="relative w-full py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-[0.05] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          
          {/* Left: Info */}
          <ScrollReveal className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Let&apos;s Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg text-slate-400 mb-12 max-w-md leading-relaxed">
              Whether you&apos;re looking to scale your engineering team or seeking your next career-defining role, our team is ready to help.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Email Us</h3>
                  <p className="text-slate-400">hello@sarsglobal.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Headquarters</h3>
                  <p className="text-slate-400">100 Tech Innovation Way<br />San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal>
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl relative">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent</h3>
                  <p className="text-slate-400">Thank you for reaching out. A member of our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-300">First Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="John" 
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-300">Last Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Doe" 
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-300">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="john@company.com" 
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-300">How can we help?</label>
                    <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all appearance-none cursor-pointer">
                      <option className="bg-slate-900 text-white">I am looking to hire engineers</option>
                      <option className="bg-slate-900 text-white">I am looking for a job</option>
                      <option className="bg-slate-900 text-white">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-300">Message</label>
                    <textarea 
                      required 
                      rows={4} 
                      placeholder="Tell us about your requirements..." 
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-[#0A66F5] text-white font-bold text-lg hover:shadow-[0_0_25px_rgba(10,102,245,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
