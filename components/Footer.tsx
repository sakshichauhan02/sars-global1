import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0B1120] pt-[100px] pb-[40px] px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Soft background decor */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_bottom_left,rgba(10,102,245,0.05),transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full flex flex-col gap-16">
        {/* Responsive 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center">
              <span className="font-space-grotesk text-xl font-bold tracking-tight text-white">
                SARS <span className="text-[#0A66F5]">TALENT</span>
              </span>
            </Link>
            <p className="text-[13px] text-slate-400 font-inter leading-relaxed max-w-[240px]">
              Connecting world-class engineering talent with innovative companies building the future of technology.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4 font-inter">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-inter">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/services/talent"
                  className="text-[13px] text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-0.5 inline-block"
                >
                  Talent
                </Link>
              </li>
              <li>
                <Link
                  href="/services/recruitment"
                  className="text-[13px] text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-0.5 inline-block"
                >
                  Recruitment
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="text-[13px] text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-0.5 inline-block"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-4 font-inter">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-inter">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/about"
                  className="text-[13px] text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-0.5 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[13px] text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-0.5 inline-block"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[13px] text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-0.5 inline-block"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="flex flex-col gap-4 font-inter">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-inter">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:info@sarstalent.com"
                  className="text-[13px] text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-0.5 inline-block"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-0.5 inline-block"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <span className="text-[13px] text-slate-400">
                  Location
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center pt-8 border-t border-white/5 w-full">
          <p className="text-[13px] text-slate-500 font-inter">
            &copy; {new Date().getFullYear()} SARS TALENT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
