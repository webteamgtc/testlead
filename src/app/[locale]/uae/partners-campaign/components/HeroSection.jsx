"use client";

import Image from "next/image";
import NaqdiIbOnboardingForm from "./HeroForm";

export default function IbHeroWithForm() {
 const perks = [
  {
    title: "High Rebate",
    description: "Payouts",
    icon: "/partner-with-us/4.png",
  },
  {
    title: "Multi-Tier",
    description: "Structure",
    icon: "/partner-with-us/8.png",
  },
  {
    title: "Real-Time",
    description: "IB Dashboard",
    icon: "/partner-with-us/5.png",
  },
  {
    title: "Instant",
    description: "Withdrawals",
    icon: "/partner-with-us/3.png",
  },
  {
    title: "Copy Trading",
    description: "PAMM & MAM",
    icon: "/partner-with-us/1.png",
  },
  {
    title: "Loyalty Rewards",
    description: "System",
    icon: "/partner-with-us/10.png",
  },
  {
    title: "Stable Trading",
    description: "Platforms",
    icon: "/partner-with-us/7.png",
  },
  {
    title: "Multiple Funding",
    description: "Options",
    icon: "/partner-with-us/6.png",
  },
  {
    title: "24/7",
    description: "Support",
    icon: "/partner-with-us/2.png",
  },
];


  return (
    <>
    <section className="w-full bg-gradient-to-r from-[#293794] to-[#000021] py-2">
        <div className="container mx-auto">
        <div className="flex md:justify-center justify-center">
           <Image
                    src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/footer-logo.webp"
                    width={200}
                    height={72}
                    alt="GTCFX"
                    className="lg:w-[200px] lg:h-[72px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer"
                  />
        </div>
      </div>
    </section>
    <section className="relative bg-[url('/ib/ib-banner.webp')] bg-cover bg-no-repeat bg-center border-b border-secondary/20" id="register-form">
        

    
    
      <div className="relative z-50 mx-auto container px-4 pb-16 pt-3">
        <div className="mt-7 grid items-center gap-6 md:gap-12 lg:grid-cols-[1fr_600px]">
          {/* LEFT */}
          <div className="lg:text-left text-center flex flex-col flex-wrap gap-4">
           

            <h2 className="md:text-[30px] 2xl:text-5xl text-[25px] font-extrabold md:leading-[1.1] leading-tight text-[#fff] md:max-w-xl mx-auto lg:mx-0">
              Unlock <span className="text-secondary">Unlimited Earnings</span>, Grow Your Partner Business with <span className="text-secondary">GTCFX</span>
            </h2>

            <p className="md:text-[21px] text-[16px] font-normal leading-[1.4] text-[#fff] md:max-w-2xl mx-auto lg:mx-0">
             Take your partner business to the next level with advanced tools, high rebate payouts, and full partner support from GTCFX.
            </p>

            {/* Perks grid */}
            <div className="hidden md:mt-8 mt-5 md:grid md:max-w-4xl md:grid-cols-3 grid-cols-2 gap-4">
              {perks.map((p, idx) => (
                <div
                  key={idx}
                  className={`rounded-[10px] flex items-center gap-4 bg-white px-2 py-2 shadow-sm border border-[#D9D9D9]
      ${idx === perks.length - 1 ? "hidden md:flex" : ""}`}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <img
                      className="md:h-[44px] md:w-[44px] h-[30px] w-[30px]"
                      src={p.icon}
                      alt={p.title}
                      width={44}
                      height={44}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <div className="text-xs md:text-[14px] font-semibold leading-[1.25] text-[#000]">
                      {p.title}
                    </div>
                    <div className="mt-1 text-[14px] font-normal leading-[1.25] text-[#000]">
                      {p.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

                  {/* Bottom Feature Bar */}
<div
  className="relative z-50 bg-gradient-to-r from-[#293794] via-[#000021] to-[#293794]
             py-5 px-4 md:px-10 rounded-[16px]
             grid grid-cols-3 md:grid-cols-3
             text-center text-white/90
             mt-3 md:mt-8"
  style={{
    boxShadow: "1px 6px 16px 0px #00000080",
    backdropFilter: "blur(8px)",
  }}
>
  {/* Item 1 */}
  <div className="flex flex-col items-center justify-center gap-1 relative">
    <span className="text-base md:text-xl font-semibold text-secondary">28,000 +</span>
    <span className="text-xs xl:text-sm opacity-90">Partners</span>

    {/* divider (desktop only) */}
    <span className="block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/30" />
  </div>

  {/* Item 2 */}
  <div className="flex flex-col items-center justify-center gap-1 relative">
    <span className="text-base md:text-xl font-semibold text-secondary">$6 Million</span>
    <span className="text-xs xl:text-sm opacity-90">Paid Per Month</span>

    {/* divider (desktop only) */}
    <span className="block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/30" />
  </div>

  {/* Item 3 */}
  <div className="flex flex-col items-center justify-center gap-1">
    <span className="text-base md:text-xl font-semibold text-secondary">$450 Billion</span>
    <span className="text-xs xl:text-sm opacity-90">Monthly Trades</span>
  </div>
</div>
          </div>

         
            <NaqdiIbOnboardingForm /> 
         
        </div>
      </div>
    </section>
    </>
  );
}
