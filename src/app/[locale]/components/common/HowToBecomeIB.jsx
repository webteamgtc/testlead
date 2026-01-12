"use client";

import React from "react";

export default function HowToBecomeIB({ setIsOpen }) {
  const steps = [
    {
      title: "Activate Your IB Account",
      desc: "Create your partner account in minutes.",
    },
    {
      title: "Pick Your Preferred Earning Plan",
      desc: "Share your referral link and bring in new clients.",
    },
    {
      title: "Start Earning Rebates",
      desc: "Get paid for every trade your referred clients make.",
    },
  ];

  return (
    <section className="relative w-full bg-[#f7f7fc] overflow-hidden border-t border-b border-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          {/* LEFT: Image + Pulse */}
        <div className="lg:col-span-6 flex justify-center lg:justify-start">
  <div className="pulse-wrap w-full max-w-[520px]">
    {/* pulse background */}
    <div className="pulse-bg" />

    {/* image on top */}
    <img
      src="/ib/asset.webp"
      alt="IB dashboard"
      className="w-full relative z-10"
    />
  </div>
</div>
          {/* RIGHT: Content */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-[#111]">
              Simple Steps to Join{" "}
              <span className="text-secondary">Our Partnership Program</span>
            </h2>

            <div className="mt-10 space-y-14">
              {steps.map((s, idx) => {
                const number = idx + 1;
                const isLast = idx === steps.length - 1;

                return (
                  <div key={number} className="relative">
                    <div className="flex items-start gap-5">
                      <div className="relative shrink-0 w-12 flex justify-center">
                        <div className="h-12 w-12 rounded-full bg-white border border-black/20 flex items-center justify-center text-[#4b2a67] font-bold">
                          {number}
                        </div>

                        {!isLast && (
                          <div className="absolute top-12 left-1/2 -translate-x-1/2 h-[70px] border-l-2 border-dotted border-black/30" />
                        )}
                      </div>

                      <div className="flex-1 pt-1">
                        <h3 className="font-bold text-[#111] text-base sm:text-lg">
                          {s.title}:
                        </h3>
                        <p className="text-[#444] text-sm sm:text-lg mt-1 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12">
              <button
                className="bg-gradient-to-r from-[#E1CFBB] to-[#956D42]
                           hover:from-[#293794] hover:to-[#000021]
                           text-sm font-bold md:text-base
                           text-white px-8 py-3 rounded-full transition-all duration-300"
                onClick={() => {
                  document.getElementById("register-form")?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen?.(false);
                }}
              >
                Join our Partnership Program
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
