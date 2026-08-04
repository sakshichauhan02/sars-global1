"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function FeaturedRoles() {
  const [formData, setFormData] = useState({
    company: "", name: "", email: "", role: "", timeline: "", size: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const roleOptions = ["Frontend Engineer", "Backend Engineer", "Full Stack Developer", "DevOps / SRE", "ML / AI Engineer", "Mobile Developer", "Engineering Manager", "CTO / VP Engineering", "Other"];
  const timelineOptions = ["ASAP (< 1 week)", "Within 2 weeks", "Within a month", "Just exploring"];
  const sizeOptions = ["1-10", "11-50", "51-200", "201-1000", "1000+"];

  return (
    <section id="hire" className="relative w-full py-32 bg-white overflow-hidden font-poppins text-slate-900">
      {/* Background */}
      <div className="absolute inset-0 bg-dots-white pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-50 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-50 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: pitch */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 sticky top-28"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-6">
                Partner With Us
              </span>
              <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                Get Hired
                <br />
                <span className="gradient-text">With Us.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Tell us who you need. We&apos;ll have pre-vetted, AI-matched engineers ready for your first interview within 48 hours — or we refund your deposit.
              </p>
            </div>

            {/* Promises */}
            <div className="flex flex-col gap-4">
              {[
                { icon: "⚡", text: "First candidates in 48 hours — guaranteed" },
                { icon: "🤖", text: "AI-powered matching across 90+ countries" },
                { icon: "🛡️", text: "90-day replacement guarantee, no questions" },
                { icon: "📊", text: "Live hiring dashboard to track progress" },
                { icon: "🌍", text: "Full compliance, payroll & onboarding handled" },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 bg-white/80 hover:border-blue-400 hover:shadow-sm transition-all group"
                >
                  <span className="text-xl">{p.icon}</span>
                  <span className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">{p.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-blue-100 bg-blue-50">
              <div className="flex -space-x-3">
                {["🟦", "🟪", "🟩", "🟧"].map((c, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-sm">
                    {c}
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-sm">
                <span className="text-blue-700 font-semibold">250+ companies</span> hired through SARS Global this year
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative p-8 md:p-10 rounded-3xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden">
              {/* Top glow bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-cyan-400 to-violet-600" />

              {!submitted ? (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      Start Hiring Today
                    </h3>
                    <p className="text-slate-500 text-sm">No commitment required. We reply within 2 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-slate-500 font-medium">Company Name</label>
                        <input
                          required
                          placeholder="Acme Corp"
                          value={formData.company}
                          onChange={e => setFormData({ ...formData, company: e.target.value })}
                          className="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-slate-500 font-medium">Your Name</label>
                        <input
                          required
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-slate-500 font-medium">Work Email</label>
                      <input
                        required type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-slate-500 font-medium">Role Needed</label>
                        <select
                          required
                          value={formData.role}
                          onChange={e => setFormData({ ...formData, role: e.target.value })}
                          className="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all cursor-pointer"
                        >
                          <option value="">Select role...</option>
                          {roleOptions.map(r => <option key={r}>{r}</option>)}
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-slate-500 font-medium">Hiring Timeline</label>
                        <select
                          required
                          value={formData.timeline}
                          onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                          className="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all cursor-pointer"
                        >
                          <option value="">Select...</option>
                          {timelineOptions.map(t => <option key={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-slate-500 font-medium">Company Size</label>
                      <div className="flex flex-wrap gap-2">
                        {sizeOptions.map(s => (
                          <button
                            type="button"
                            key={s}
                            onClick={() => setFormData({ ...formData, size: s })}
                            className={`px-4 py-2 rounded-xl border text-xs font-medium transition-all duration-200 ${
                              formData.size === s
                                ? "border-blue-500 bg-blue-50 text-blue-700"
                                : "border-slate-200 bg-white text-slate-500 hover:border-blue-300"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-slate-500 font-medium">Additional Context</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your tech stack, team, or specific requirements..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(10,102,245,0.2)" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-base border border-blue-400/20 shadow-[0_0_25px_rgba(10,102,245,0.15)] transition-all duration-300 mt-2"
                    >
                      Get My Engineers in 48 Hours →
                    </motion.button>

                    <p className="text-center text-xs text-slate-500">
                      No spam. No commitment. We reply within 2 hours.
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center gap-6 py-12"
                >
                  <div className="text-6xl">🚀</div>
                  <h3 className="text-2xl font-bold text-slate-900">You&apos;re in!</h3>
                  <p className="text-slate-500">
                    Our team will reach out within 2 hours with your first AI-matched candidates. Check your email.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-blue-600">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Request received — matching started
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
