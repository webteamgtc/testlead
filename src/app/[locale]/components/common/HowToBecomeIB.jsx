"use client";

import React from "react";

export default function HowToBecomeIB() {
  const steps = [
   {
      title: "Register",
      desc: "Create your partner account in minutes.",
      icon: "🫱🏻‍🫲🏼",
    },
    {
      title: "Refer Clients",
      desc: "Share your referral link and bring in new clients.",
      icon: "🔗",
    },
    {
      title: "Start Earning Rebates",
      desc: "Get paid for every trade your referred clients make.",
      icon: "🪙",
    },
  ];

  return (
    <section
      className="
        relative w-full overflow-hidden bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90%
      "
    >
   

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-white font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl max-w-xl mx-auto leading-tight">
            Simple Steps to Join Our Partnership Program
          </h2>
          <p className="mt-3 text-white/80 text-sm sm:text-base">
            It’s fast, simple and only takes a few minutes to get started
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14">
          {/* Desktop: connected flow */}
          <div className="hidden lg:flex items-start justify-between gap-8">
            {steps.map((s, i) => (
              <React.Fragment key={s.title}>
                <StepCard {...s} />
                {i !== steps.length - 1 && <Connector />}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile/Tablet: stacked */}
          <div className="grid lg:hidden grid-cols-1 sm:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.title} className="relative">
                <StepCard {...s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ icon, title, desc }) {
  return (
    <div className="w-full lg:w-[280px]">
      <div
        className="
          relative overflow-hidden rounded-2xl
          bg-gradient-to-l from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90%
          border border-white/10
          shadow-[0_18px_55px_rgba(0,0,0,0.45)]
          px-8 py-10
          min-h-[220px]
        "
      >
        {/* subtle green glow like sample */}
        <div className="pointer-events-none absolute -left-10 -bottom-10 h-44 w-44 rounded-full bg-emerald-500/25 blur-2xl" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="text-4xl leading-none drop-shadow">{icon}</div>
          <h3 className="mt-5 text-white font-semibold text-lg">{title}</h3>
          <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-[18rem]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex-1 flex items-center justify-center mt-[76px]">
      {/* left line */}
      <div className="h-px w-full bg-white/15" />
      {/* circle with arrow */}
      <div className="mx-4 flex items-center justify-center">
        <div className="h-8 w-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
          <span className="text-white/80 text-lg leading-none">›</span>
        </div>
      </div>
      {/* right line */}
      <div className="h-px w-full bg-white/15" />
    </div>
  );
}
