import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#000000] pt-[80px] pb-[40px] px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-16">
        {/* Responsive 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center">
              <span className="font-space-grotesk text-xl font-bold tracking-tight text-white">
                SARS <span className="text-primary-blue">TALENT</span>
              </span>
            </Link>
            <p className="text-[13px] text-[#6B7280] font-inter leading-relaxed max-w-[240px]">
              Connecting world-class engineering talent with innovative companies building the future of technology.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4 font-inter">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-space-grotesk">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/services/talent"
                  className="text-[13px] text-[#6B7280] hover:text-white transition-colors duration-200"
                >
                  Talent
                </Link>
              </li>
              <li>
                <Link
                  href="/services/recruitment"
                  className="text-[13px] text-[#6B7280] hover:text-white transition-colors duration-200"
                >
                  Recruitment
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="text-[13px] text-[#6B7280] hover:text-white transition-colors duration-200"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-4 font-inter">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-space-grotesk">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-[13px] text-[#6B7280] hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[13px] text-[#6B7280] hover:text-white transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[13px] text-[#6B7280] hover:text-white transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="flex flex-col gap-4 font-inter">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-space-grotesk">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:info@sarstalent.com"
                  className="text-[13px] text-[#6B7280] hover:text-white transition-colors duration-200"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#6B7280] hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <span className="text-[13px] text-[#6B7280]">
                  Location
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center pt-8 border-t border-white/5 w-full">
          <p className="text-[13px] text-[#6B7280] font-inter">
            &copy; {new Date().getFullYear()} SARS TALENT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
