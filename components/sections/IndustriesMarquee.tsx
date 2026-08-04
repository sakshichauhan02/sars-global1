"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "🎨",
    desc: "UI/UX engineers who build beautiful, performant interfaces",
    techs: [
      { name: "React", color: "#61DAFB", icon: "⚛️" },
      { name: "Next.js", color: "#ffffff", icon: "▲" },
      { name: "TypeScript", color: "#3178C6", icon: "TS" },
      { name: "Vue.js", color: "#42B883", icon: "V" },
      { name: "Tailwind", color: "#06B6D4", icon: "💨" },
      { name: "Svelte", color: "#FF3E00", icon: "S" },
      { name: "Vite", color: "#646CFF", icon: "⚡" },
      { name: "Figma", color: "#F24E1E", icon: "🎨" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "⚙️",
    desc: "Server-side engineers who power your systems at scale",
    techs: [
      { name: "Node.js", color: "#339933", icon: "🟢" },
      { name: "Python", color: "#3776AB", icon: "🐍" },
      { name: "Go", color: "#00ADD8", icon: "Go" },
      { name: "Java", color: "#ED8B00", icon: "☕" },
      { name: "PostgreSQL", color: "#336791", icon: "🐘" },
      { name: "Redis", color: "#DC382D", icon: "🔴" },
      { name: "GraphQL", color: "#E10098", icon: "◉" },
      { name: "gRPC", color: "#4285F4", icon: "G" },
    ],
  },
  {
    id: "fullstack",
    label: "Full Stack",
    icon: "🔥",
    desc: "End-to-end engineers who own the entire product lifecycle",
    techs: [
      { name: "React + Node", color: "#61DAFB", icon: "⚛️" },
      { name: "Next.js", color: "#ffffff", icon: "▲" },
      { name: "TypeScript", color: "#3178C6", icon: "TS" },
      { name: "MongoDB", color: "#47A248", icon: "🍃" },
      { name: "Prisma", color: "#2D3748", icon: "△" },
      { name: "tRPC", color: "#2596BE", icon: "T" },
      { name: "Docker", color: "#2496ED", icon: "🐳" },
      { name: "Vercel", color: "#ffffff", icon: "▲" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    icon: "🛠️",
    desc: "Infrastructure engineers who keep your systems bulletproof",
    techs: [
      { name: "AWS", color: "#FF9900", icon: "☁️" },
      { name: "Kubernetes", color: "#326CE5", icon: "⎈" },
      { name: "Terraform", color: "#7B42BC", icon: "🔷" },
      { name: "Docker", color: "#2496ED", icon: "🐳" },
      { name: "Ansible", color: "#EE0000", icon: "⚙️" },
      { name: "GitHub Actions", color: "#2088FF", icon: "⚡" },
      { name: "Prometheus", color: "#E6522C", icon: "🔥" },
      { name: "GCP", color: "#4285F4", icon: "☁️" },
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    icon: "🤖",
    desc: "ML engineers and AI specialists pushing the frontier",
    techs: [
      { name: "PyTorch", color: "#EE4C2C", icon: "🔥" },
      { name: "TensorFlow", color: "#FF6F00", icon: "🧠" },
      { name: "LangChain", color: "#1C3C3C", icon: "⛓️" },
      { name: "OpenAI API", color: "#412991", icon: "🤖" },
      { name: "Hugging Face", color: "#FFD21E", icon: "🤗" },
      { name: "Pandas", color: "#130654", icon: "🐼" },
      { name: "FastAPI", color: "#009688", icon: "⚡" },
      { name: "CUDA", color: "#76B900", icon: "⚡" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: "📱",
    desc: "iOS and Android engineers building the next-gen mobile experience",
    techs: [
      { name: "React Native", color: "#61DAFB", icon: "⚛️" },
      { name: "Flutter", color: "#02569B", icon: "F" },
      { name: "Swift", color: "#FA7343", icon: "🍎" },
      { name: "Kotlin", color: "#7F52FF", icon: "K" },
      { name: "Expo", color: "#000020", icon: "E" },
      { name: "Firebase", color: "#FFCA28", icon: "🔥" },
      { name: "Xcode", color: "#147EFB", icon: "🔵" },
      { name: "Android Studio", color: "#3DDC84", icon: "🤖" },
    ],
  },
];

export default function IndustriesMarquee() {
  const [active, setActive] = useState(roles[0]);

  return (
    <section className="relative w-full py-32 bg-[#020409] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase font-dm-sans mb-5">
            Ecosystem
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Roles &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-[550px] mx-auto">
            Hover or tap a role on the left. See the exact tech stack we recruit for.
          </p>
        </motion.div>

        {/* Two-panel layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 min-h-[480px]">
          {/* Left Sidebar: Roles */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {roles.map((role) => (
              <motion.button
                key={role.id}
                onClick={() => setActive(role)}
                whileHover={{ x: 4 }}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                  active.id === role.id
                    ? "border-blue-500/50 bg-blue-500/10 shadow-[0_0_25px_rgba(10,102,245,0.15)]"
                    : "border-white/6 bg-white/[0.02] hover:border-blue-500/25 hover:bg-blue-500/5"
                }`}
              >
                <span className="text-2xl">{role.icon}</span>
                <div className="flex flex-col">
                  <span className={`font-bold text-sm ${active.id === role.id ? "text-blue-300" : "text-white"}`}>
                    {role.label}
                  </span>
                  <span className="text-slate-500 text-xs mt-0.5 line-clamp-1">
                    {role.desc}
                  </span>
                </div>
                {active.id === role.id && (
                  <span className="ml-auto text-blue-400 text-lg">→</span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Right Panel: Tech Stack */}
          <div className="lg:col-span-3 relative rounded-3xl border border-white/8 bg-white/[0.02] p-8 overflow-hidden">
            {/* Decorative corner grid */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-grid-dark opacity-40 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="h-full flex flex-col gap-6"
              >
                {/* Role header */}
                <div className="flex items-center gap-3 border-b border-white/6 pb-5">
                  <span className="text-4xl">{active.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{active.label}</h3>
                    <p className="text-slate-400 text-sm">{active.desc}</p>
                  </div>
                </div>

                {/* Tech grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {active.techs.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-white/6 bg-white/[0.02] cursor-default transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/5"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </span>
                      <span className="text-xs text-slate-400 font-medium text-center leading-tight group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                      <div
                        className="w-8 h-0.5 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"
                        style={{ background: tech.color }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(10,102,245,0.3)" }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-sm border border-blue-400/20 transition-all duration-300"
                  >
                    Hire a {active.label} Engineer →
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
