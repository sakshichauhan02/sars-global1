import Link from "next/link";

const links = {
  Services: ["Permanent Hiring", "Contract Staffing", "Executive Search", "Dedicated AI Teams"],
  Roles: ["Frontend Engineers", "Backend Engineers", "Full Stack Devs", "DevOps / SRE", "ML / AI Engineers"],
  Company: ["About Us", "Our Process", "Blog", "Careers", "Press"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socials = [
  { label: "LinkedIn", icon: "in", href: "https://linkedin.com" },
  { label: "X", icon: "𝕏", href: "https://x.com" },
  { label: "GitHub", icon: "⌥", href: "https://github.com" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#020409] border-t border-white/5 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 pt-20 pb-10">
        {/* Top: Brand + Newsletter */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-16 pb-16 border-b border-white/5">
          <div className="flex flex-col gap-5 max-w-[340px]">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-extrabold tracking-tight text-white">
                SARS <span className="gradient-text">GLOBAL</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              AI-powered global tech recruitment. Connecting elite engineers with companies building the future — in under 48 hours.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl border border-white/8 bg-white/[0.02] flex items-center justify-center text-slate-400 font-bold text-sm hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/8 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4 max-w-[400px] w-full">
            <h4 className="text-base font-bold text-white">Get the Talent Report</h4>
            <p className="text-slate-500 text-sm">Weekly insights on tech hiring trends, salary benchmarks, and in-demand roles.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@company.com"
                className="flex-1 px-4 py-3 rounded-xl border border-white/8 bg-white/[0.02] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
              />
              <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-sm hover:shadow-[0_0_25px_rgba(10,102,245,0.4)] transition-all duration-300">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/60">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map(item => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-[13px] text-slate-500 hover:text-slate-200 hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
          <p className="text-slate-600 text-[12px]">
            © {new Date().getFullYear()} SARS Global. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[12px] text-slate-600">All systems operational</span>
          </div>
          <p className="text-slate-700 text-[11px]">
            Built with AI precision. Delivered at scale.
          </p>
        </div>
      </div>
    </footer>
  );
}
