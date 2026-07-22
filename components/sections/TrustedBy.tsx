import React from "react";

export default function TrustedBy() {
  const logos = [
    // Acme
    {
      name: "Acme",
      element: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
          <path d="M10 30L20 10L30 30H10Z" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="20" r="4" fill="#3B82F6"/>
          <text x="42" y="26" fill="#111827" fontFamily="system-ui" fontWeight="700" fontSize="14" letterSpacing="1">ACME</text>
        </svg>
      )
    },
    // Aether
    {
      name: "Aether",
      element: (
        <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
          <path d="M12 20C12 15 16 12 20 12C24 12 26 18 30 22C34 26 36 28 40 28C44 28 48 25 48 20C48 15 44 12 40 12C36 12 34 18 30 22C26 26 24 28 20 28C16 28 12 25 12 20Z" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round"/>
          <text x="60" y="25" fill="#111827" fontFamily="system-ui" fontWeight="700" fontSize="14" letterSpacing="1">AETHER</text>
        </svg>
      )
    },
    // Nova
    {
      name: "Nova",
      element: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
          <path d="M20 8L22 16L30 18L22 20L20 28L18 20L10 18L18 16L20 8Z" fill="#EC4899"/>
          <text x="42" y="25" fill="#111827" fontFamily="system-ui" fontWeight="700" fontSize="14" letterSpacing="1">NOVA</text>
        </svg>
      )
    },
    // Krypton
    {
      name: "Krypton",
      element: (
        <svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
          <path d="M20 8L32 15V29L20 36L8 29V15L20 8Z" stroke="#10B981" strokeWidth="3" strokeLinejoin="round"/>
          <path d="M20 14L26 18V26L20 30L14 26V18L20 14Z" fill="#10B981"/>
          <text x="44" y="25" fill="#111827" fontFamily="system-ui" fontWeight="700" fontSize="14" letterSpacing="1">KRYPTON</text>
        </svg>
      )
    },
    // Clarity
    {
      name: "Clarity",
      element: (
        <svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
          <circle cx="16" cy="20" r="8" stroke="#06B6D4" strokeWidth="3"/>
          <circle cx="26" cy="20" r="8" stroke="#06B6D4" strokeWidth="3" strokeDasharray="4 2"/>
          <text x="44" y="25" fill="#111827" fontFamily="system-ui" fontWeight="700" fontSize="14" letterSpacing="1">CLARITY</text>
        </svg>
      )
    },
    // Apex
    {
      name: "Apex",
      element: (
        <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
          <path d="M10 28L20 16L30 28" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 22L20 16L25 22" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 10V16" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
          <text x="42" y="25" fill="#111827" fontFamily="system-ui" fontWeight="700" fontSize="14" letterSpacing="1">APEX</text>
        </svg>
      )
    },
    // Quantum
    {
      name: "Quantum",
      element: (
        <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
          <circle cx="20" cy="20" r="10" stroke="#EF4444" strokeWidth="2"/>
          <circle cx="20" cy="20" r="4" fill="#EF4444"/>
          <ellipse cx="20" cy="20" rx="14" ry="5" stroke="#EF4444" strokeWidth="1.5" transform="rotate(-30 20 20)"/>
          <text x="44" y="25" fill="#111827" fontFamily="system-ui" fontWeight="700" fontSize="14" letterSpacing="1">QUANTUM</text>
        </svg>
      )
    },
    // Echo
    {
      name: "Echo",
      element: (
        <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
          <rect x="8" y="16" width="3" height="8" rx="1.5" fill="#6366F1"/>
          <rect x="14" y="12" width="3" height="16" rx="1.5" fill="#6366F1"/>
          <rect x="20" y="8" width="3" height="24" rx="1.5" fill="#6366F1"/>
          <rect x="26" y="12" width="3" height="16" rx="1.5" fill="#6366F1"/>
          <rect x="32" y="16" width="3" height="8" rx="1.5" fill="#6366F1"/>
          <text x="46" y="25" fill="#111827" fontFamily="system-ui" fontWeight="700" fontSize="14" letterSpacing="1">ECHO</text>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full h-[100px] bg-white flex items-center overflow-hidden border-y border-neutral-100/10">
      <div className="w-full relative flex items-center">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-container">
          {/* First set of logos */}
          <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="marquee-logo flex items-center justify-center cursor-pointer select-none"
              >
                {logo.element}
              </div>
            ))}
          </div>

          {/* Duplicated set for seamless loop */}
          <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12" aria-hidden="true">
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="marquee-logo flex items-center justify-center cursor-pointer select-none"
              >
                {logo.element}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
