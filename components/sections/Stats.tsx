"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix = "", duration = 2.5 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: v => setCount(Math.floor(v)),
    });
    return () => ctrl.stop();
  }, [inView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  {
    value: 500, suffix: "+",
    label: "Engineers Placed",
    desc: "Across 40+ countries in high-growth companies",
    icon: "👥",
    gradient: "from-blue-600 to-cyan-500",
    bar: 85,
  },
  {
    value: 98, suffix: "%",
    label: "Retention Rate",
    desc: "Our engineers stay. Industry avg is 72%.",
    icon: "🛡️",
    gradient: "from-violet-600 to-blue-500",
    bar: 98,
  },
  {
    value: 48, suffix: "h",
    label: "Avg. Hire Time",
    desc: "From requirement to deployed engineer",
    icon: "⚡",
    gradient: "from-cyan-500 to-teal-400",
    bar: 70,
  },
  {
    value: 250, suffix: "+",
    label: "Enterprise Clients",
    desc: "Including Fortune 500 and unicorn startups",
    icon: "🏢",
    gradient: "from-pink-600 to-violet-600",
    bar: 75,
  },
];

// Radial chart mini component
function RadialProgress({ pct, color }: { pct: number; color: string }) {
  const r = 36;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" className="rotate-[-90deg]">
      <circle cx="44" cy="44" r={r} fill="none" stroke="rgba(10,102,245,0.1)" strokeWidth="6" />
      <motion.circle
        cx="44" cy="44" r={r}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: circ - dash }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function Stats() {
  return (
    <section className="relative w-full py-32 bg-white overflow-hidden font-poppins text-slate-900">
      {/* Background */}
      <div className="absolute inset-0 bg-dots-white pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-5">
            Impact
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            Numbers That{" "}
            <span className="gradient-text">Prove It</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-[550px] mx-auto">
            Real metrics from real placements. No vanity numbers.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative p-7 rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm overflow-hidden cursor-default transition-all duration-400 hover:border-blue-300 hover:shadow-[0_20px_50px_rgba(10,102,245,0.08)]"
            >
              {/* Gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

              {/* Radial chart */}
              <div className="relative flex items-center justify-center mb-5">
                <RadialProgress pct={s.bar} color="#0A66F5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl">{s.icon}</span>
                </div>
              </div>

              {/* Big number */}
              <div className={`text-4xl xl:text-5xl font-extrabold bg-gradient-to-br ${s.gradient} bg-clip-text text-transparent mb-2 text-center`}>
                <Counter value={s.value} suffix={s.suffix} />
              </div>

              <h3 className="text-base font-bold text-slate-900 text-center mb-2 group-hover:text-blue-600 transition-colors">
                {s.label}
              </h3>
              <p className="text-slate-500 text-xs text-center leading-relaxed">
                {s.desc}
              </p>

              {/* Progress bar */}
              <div className="mt-5 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.bar}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${s.gradient}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Globe-style world map placeholder with stats overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 p-8 rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">
                90+ Countries. <span className="gradient-text">One Standard.</span>
              </h3>
              <p className="text-slate-500 text-sm max-w-[450px]">
                Our talent network spans every major tech hub — Silicon Valley, London, Bangalore, Singapore, Toronto, Berlin, and beyond. One platform. Elite talent, everywhere.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {["🇺🇸 USA", "🇬🇧 UK", "🇩🇪 Germany", "🇮🇳 India", "🇨🇦 Canada", "🇸🇬 Singapore"].map((c, i) => (
                <span key={i} className="px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-700 text-sm hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 transition-all cursor-default">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
