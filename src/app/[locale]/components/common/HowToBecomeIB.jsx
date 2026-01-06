"use client";

import React from "react";

export default function HowToBecomeIB({ setIsOpen }) {
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
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90%">
      <div className="relative z-10 max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-white font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl max-w-2xl mx-auto leading-tight">
            Simple Steps to Join Our Partnership Program
          </h2>
          <p className="mt-3 text-white/80 text-sm sm:text-base">
            It’s fast, simple and only takes a few minutes to get started
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12">
          {/* Desktop: connected flow */}
          <div className="hidden lg:flex items-center justify-between gap-6">
            {steps.map((s, i) => (
              <React.Fragment key={s.title}>
                <StepCard {...s} />
                {i !== steps.length - 1 && <Connector />}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile/Tablet */}
          <div className="grid lg:hidden grid-cols-1 sm:grid-cols-3 gap-4">
            {steps.map((s) => (
              <div key={s.title} className="relative">
                <StepCard {...s} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center mt-14">
          <button
            className="bg-gradient-to-r from-[#E1CFBB] to-[#956D42]
                       hover:from-[#ffffff] hover:to-[#ffffff]
                       text-sm font-bold md:text-base xl:text-lg
                       text-white hover:text-primary
                       px-8 py-3 rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => {
              document
                .getElementById("register-form")
                ?.scrollIntoView({ behavior: "smooth" });

              setIsOpen?.(false);
            }}
          >
            Join our Partnership Program
          </button>
        </div>
      </div>
    </section>
  );
}

function StepCard({ icon, title, desc }) {
  return (
    <div className="w-full lg:w-[320px]">
      <div
        className="
          relative overflow-hidden rounded-2xl
          bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]
          border border-white/10
          shadow-[0_16px_40px_rgba(0,0,0,0.35)]
          px-5 py-5
        "
      >
        {/* subtle glow */}
        <div className="pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-emerald-500/20 blur-2xl" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

        {/* Slim horizontal layout */}
        <div className="relative z-10 flex items-start gap-4">
          <div className="shrink-0 text-3xl leading-none drop-shadow-sm mt-0.5">
            {icon}
          </div>

          <div className="text-left">
            <h3 className="text-white font-semibold text-base leading-snug">
              {title}
            </h3>
            <p className="mt-1 text-white/80 text-sm leading-relaxed">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="h-px w-full bg-white/15" />
      <div className="mx-3 flex items-center justify-center">
        <div className="h-8 w-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
          <span className="text-white/80 text-lg leading-none">›</span>
        </div>
      </div>
      <div className="h-px w-full bg-white/15" />
    </div>
  );
}
