"use client";

import Image from "next/image";
import NaqdiIbOnboardingForm from "./HeroForm";

export default function IbHeroWithForm() {
  const perks = [
    { title: "High Rebate", description: "Payouts", icon: "/partner-with-us/4.png" },
    { title: "Multi-Tier", description: "Structure", icon: "/partner-with-us/8.png" },
    { title: "Real-Time", description: "IB Dashboard", icon: "/partner-with-us/5.png" },
    { title: "Instant", description: "Withdrawals", icon: "/partner-with-us/3.png" },
    { title: "Copy Trading", description: "PAMM & MAM", icon: "/partner-with-us/1.png" },
    { title: "Loyalty Rewards", description: "System", icon: "/partner-with-us/10.png" },
    { title: "Stable Trading", description: "Platforms", icon: "/partner-with-us/7.png" },
    { title: "Multiple Funding", description: "Options", icon: "/partner-with-us/6.png" },
    { title: "24/7", description: "Support", icon: "/partner-with-us/2.png" },
  ];

  return (
    <>
      {/* Top logo bar */}
      <section className="w-full bg-gradient-to-r from-[#293794] to-[#000021] py-2">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <Image
              src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/footer-logo.webp"
              width={200}
              height={72}
              alt="GTCFX"
              className="cursor-pointer lg:h-[72px] lg:w-[200px] md:h-[53px] md:w-[120px] h-[47px] w-[130px]"
            />
          </div>
        </div>
      </section>

      {/* Hero section */}
      <section className="relative overflow-hidden border-b border-secondary/20" id="register-form">
        {/* Base background */}
        <div className="absolute inset-0 z-0 bg-[#f6f6f6]" />

        {/* Decorative background image (fixed for mobile) */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-full -translate-x-1/2 opacity-30">
          <img
            src="/ib/layer5.webp"
            alt="Decorative background"
            className="w-full object-contain object-bottom"
            style={{ height: "1000px" }} // ✅ mobile height
          />
          {/* Desktop taller background */}
          <style jsx>{`
            @media (min-width: 768px) {
              img[alt="Decorative background"] {
                height: 1100px;
              }
            }
          `}</style>
        </div>

        <div className="relative z-50 mx-auto container px-4 pb-16 pt-3">
          <div className="mt-7 grid items-center gap-6 md:gap-12 md:grid-cols-[1fr_600px]">
            {/* LEFT */}
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="text-[25px] font-extrabold leading-tight text-[#202a6b] md:text-[40px] md:leading-[1.1] 2xl:text-5xl">
                Unlock <span className="text-secondary">Unlimited Earnings</span>, Grow Your Partner
                Business with <span className="text-secondary">GTCFX</span>
              </h2>

              <p className="text-[16px] font-normal leading-[1.4] text-[#000] md:text-[21px]">
                Take your partner business to the next level with advanced tools, high rebate payouts,
                and full partner support from GTCFX.
              </p>

              {/* Perks grid */}
              <div className="mt-5 grid max-w-4xl grid-cols-2 gap-3 md:mt-8 md:grid-cols-3 md:gap-4">
                {perks.map((p, idx) => (
                  <div
                    key={idx}
                    className={[
                      "rounded-[10px] flex items-center gap-3 bg-white px-2 py-2 shadow-sm border border-[#D9D9D9]",
                      // ✅ Desktop: hide last item if you want perfect 3x3 alignment
                      idx === perks.length - 1 ? "" : "",
                      // ✅ Mobile: make last item span full row so it doesn't look broken
                      idx === perks.length - 1 ? "col-span-2 md:col-span-1" : "",
                    ].join(" ")}
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-[30px] w-[30px] md:h-[44px] md:w-[44px]"
                        src={p.icon}
                        alt={p.title}
                        width={44}
                        height={44}
                      />
                    </div>

                    <div className="flex-1">
                      <div className="text-[12px] font-semibold leading-[1.25] text-[#000] md:text-[14px]">
                        {p.title}
                      </div>
                      <div className="mt-0.5 text-[12px] font-normal leading-[1.25] text-[#000] md:mt-1 md:text-[14px]">
                        {p.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Feature Bar */}
              <div
                className="relative z-50 mt-3 grid grid-cols-3 rounded-[16px] bg-gradient-to-r from-[#293794] to-[#000021]
                           px-3 py-4 text-center text-white/90 md:mt-8 md:px-10 md:py-5"
                style={{
                  boxShadow: "1px 6px 16px 0px #00000080",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="relative flex flex-col items-center justify-center gap-1">
                  <span className="text-base font-semibold text-secondary md:text-xl">28,000 +</span>
                  <span className="text-[10px] opacity-90 sm:text-xs xl:text-sm">Partners</span>

                  {/* ✅ truly desktop-only divider */}
                  <span className="hidden md:block absolute right-0 top-1/2 h-10 w-px -translate-y-1/2 bg-white/30" />
                </div>

                <div className="relative flex flex-col items-center justify-center gap-1">
                  <span className="text-base font-semibold text-secondary md:text-xl">$6 Million</span>
                  <span className="text-[10px] opacity-90 sm:text-xs xl:text-sm">Paid Per Month</span>

                  {/* ✅ truly desktop-only divider */}
                  <span className="hidden md:block absolute right-0 top-1/2 h-10 w-px -translate-y-1/2 bg-white/30" />
                </div>

                <div className="flex flex-col items-center justify-center gap-1">
                  <span className="text-base font-semibold text-secondary md:text-xl">$450 Billion</span>
                  <span className="text-[10px] opacity-90 sm:text-xs xl:text-sm">Monthly Trades</span>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <NaqdiIbOnboardingForm />
          </div>
        </div>
      </section>
    </>
  );
}
