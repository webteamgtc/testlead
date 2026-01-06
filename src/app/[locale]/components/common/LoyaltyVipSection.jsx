"use client";

import React from "react";

export default function LoyaltyVipSection() {
  return (
          <section className="relative text-white py-8 md:py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Faded Background Image at Bottom Center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full z-0 opacity-20">
        <img
          src="/ib/layer5.webp" // ✅ change this path if needed
          alt="Decorative background"
          className="w-full h-auto object-contain object-bottom"
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10">
          
          {/* LEFT: Content (6 columns) */}
          <div className="md:col-span-6 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#060606] leading-tight">
              Loyalty & VIP Rewards
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#333333] max-w-xl">
              Earn real reward points from trading and referrals, join VIP
              competitions, and redeem luxury gifts through our VIP store.
              Higher activity and balances unlock better tiers, priority
              benefits, and daily rewards.
            </p>

                 {/* Footer Text and CTA */}
       
        <div className='flex flex-row items-start justify-baseline mt-10'>
          <button
  className="bg-gradient-to-r from-[#E1CFBB] to-[#956D42]
             hover:from-[#293794] hover:to-[#000021]
             text-sm font-bold md:text-base xl:text-lg
             text-white px-8 py-3 rounded-full
             transition-all duration-300 cursor-pointer"
  onClick={() => {
    document
      .getElementById("register-form")
      ?.scrollIntoView({ behavior: "smooth" });

    setIsOpen(true);
  }}
>
  Register now
</button>
        </div>

          </div>

          {/* RIGHT: Image (6 columns) */}
          <div className="md:col-span-6 flex justify-center md:justify-end">
            <img
              src="/ib/vip.webp" // replace with your real image
              alt="Loyalty and VIP Rewards"
              className="w-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
