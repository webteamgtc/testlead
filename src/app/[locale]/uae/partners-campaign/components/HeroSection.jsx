"use client";

import Image from "next/image";
import NaqdiIbOnboardingForm from "./HeroForm";

export default function IbHeroWithForm() {
  const perks = [
    {
      title: "Fast & Secure",
      description: "Execution",
      icon: "/partner-with-us/banner-icon1.svg",
    },
    {
      title: "24/7 Multilingual",
      description: "Support",
      icon: "/partner-with-us/banner-icon2.svg",
    },
    {
      title: "Instant & Reliable",
      description: "Withdrawal",
      icon: "/partner-with-us/banner-icon3.svg",
    },
    {
      title: "Advanced Copy",
      description: "Trading",
      icon: "/partner-with-us/banner-icon4.svg",
    },
    {
      title: "Stable Trading",
      description: "Platforms",
      icon: "/partner-with-us/banner-icon1.svg",
    },
    {
      title: "Various Funding",
      description: " Options",
      icon: "/partner-with-us/banner-icon2.svg",
    },
    {
      title: "Multi Tier",
      description: "IB System",
      icon: "/partner-with-us/banner-icon3.svg",
    },
    {
      title: "High & Competitive",
      description: "Rebate",
      icon: "/partner-with-us/banner-icon4.svg",
    },
      {
      title: "Real-Time IB",
      description: "Dashboard",
      icon: "/partner-with-us/banner-icon4.svg",
    },
  ];

  return (
    <section className="w-full bg-[#f6f6f6]"  id="register-form">
      <div className="container mx-auto">
        <div className="pt-2 flex md:justify-start justify-center">
          <Image
            src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/logo-2024-new.webp"
            width={200}
            height={72}
            alt="GTCFX"
            className="lg:w-[200px] lg:h-[72px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer"
          />
        </div>
      </div>
      <div className="mx-auto container px-4 pb-16 pt-3">
        <div className="mt-7 grid items-start gap-12 md:grid-cols-[1fr_600px]">
          {/* LEFT */}
          <div className="md:text-left text-center flex flex-col gap-4 md:pt-10">
            <p className="md:text-[22px] text-[18px] font-semibold text-primary">
             Grow Your Client Network. Earn More. Partner Stronger.
            </p>

            <h2 className="md:text-[40px] 2xl:text-5xl text-[28px] font-extrabold md:leading-[1.1] leading-nomral text-[#202a6b]">
              Become {" "}
              <span className="text-[#B78855]">Our Partner </span> 
              and Unlock Unlimited Earning Potential!
            </h2>

            <p className="md:text-[21px] text-[18px] font-normal leading-[1.4] text-[#000]">
              Power up your business expansion and client network while
              <span className="font-extrabold text-[24px] text-[#B78855]">
                {" "}
                maximizing
              </span>{" "}
              the advantages of our IB program.
            </p>

            {/* Perks grid */}
            <div className="md:mt-20 mt-5 grid max-w-4xl md:grid-cols-3 grid-cols-2 gap-4">
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
          </div>

          {/* RIGHT FORM CARD */}
          <div className="relative">
            <NaqdiIbOnboardingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
