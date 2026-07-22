import React from "react";

export default function IndustriesMarquee() {
  const row1Tags = [
    "Healthcare IT",
    "FinTech",
    "EdTech",
    "AI",
    "React",
    "Next.js",
    "Node.js",
    "Machine Learning",
    "Web3",
    "UI/UX Design",
    "GraphQL",
  ];

  const row2Tags = [
    "AWS",
    "Azure",
    "Python",
    "Java",
    "DevOps",
    "Cloud",
    "Cyber Security",
    "Kubernetes",
    "Docker",
    "TypeScript",
    "Go Lang",
  ];

  return (
    <section className="w-full py-20 bg-[#0B1120] border-t border-white/5 flex flex-col gap-8 overflow-hidden">
      {/* Title & Subheading */}
      <div className="max-w-4xl mx-auto text-center px-6 flex flex-col gap-3">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-space-grotesk uppercase tracking-tight">
          Industries & Technologies
        </h2>
        <p className="text-metallic-gray max-w-xl mx-auto font-inter text-sm md:text-base">
          Our global talent network specializes in cutting-edge industries and leading modern technology stacks.
        </p>
      </div>

      <div className="flex flex-col gap-6 relative w-full mt-4">
        {/* Soft edge fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B1120] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B1120] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scrolls Left */}
        <div className="w-full overflow-hidden flex items-center">
          <div className="marquee-left-container">
            {/* First Set */}
            <div className="flex items-center gap-4 px-2">
              {row1Tags.map((tag, idx) => (
                <div
                  key={`r1-1-${idx}`}
                  className="glass bg-white/5 backdrop-blur-md border border-white/12 text-white px-[20px] py-[10px] rounded-full whitespace-nowrap text-sm md:text-base font-medium transition-all duration-300 hover:bg-white/15 hover:border-white/20 hover:scale-105 select-none cursor-default"
                >
                  {tag}
                </div>
              ))}
            </div>
            {/* Duplicated Set for seamless looping */}
            <div className="flex items-center gap-4 px-2" aria-hidden="true">
              {row1Tags.map((tag, idx) => (
                <div
                  key={`r1-2-${idx}`}
                  className="glass bg-white/5 backdrop-blur-md border border-white/12 text-white px-[20px] py-[10px] rounded-full whitespace-nowrap text-sm md:text-base font-medium transition-all duration-300 hover:bg-white/15 hover:border-white/20 hover:scale-105 select-none cursor-default"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Scrolls Right */}
        <div className="w-full overflow-hidden flex items-center">
          <div className="marquee-right-container">
            {/* First Set */}
            <div className="flex items-center gap-4 px-2">
              {row2Tags.map((tag, idx) => (
                <div
                  key={`r2-1-${idx}`}
                  className="glass bg-white/5 backdrop-blur-md border border-white/12 text-white px-[20px] py-[10px] rounded-full whitespace-nowrap text-sm md:text-base font-medium transition-all duration-300 hover:bg-white/15 hover:border-white/20 hover:scale-105 select-none cursor-default"
                >
                  {tag}
                </div>
              ))}
            </div>
            {/* Duplicated Set for seamless looping */}
            <div className="flex items-center gap-4 px-2" aria-hidden="true">
              {row2Tags.map((tag, idx) => (
                <div
                  key={`r2-2-${idx}`}
                  className="glass bg-white/5 backdrop-blur-md border border-white/12 text-white px-[20px] py-[10px] rounded-full whitespace-nowrap text-sm md:text-base font-medium transition-all duration-300 hover:bg-white/15 hover:border-white/20 hover:scale-105 select-none cursor-default"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
