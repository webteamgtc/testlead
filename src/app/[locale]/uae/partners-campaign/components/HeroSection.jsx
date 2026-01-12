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
      title: "24/7",
      description: "Multilingual Support",
      icon: "/partner-with-us/banner-icon2.svg",
    },
    {
      title: "Quick",
      description: "Withdrawal",
      icon: "/partner-with-us/banner-icon3.svg",
    },
    {
      title: "Copy",
      description: "Trading",
      icon: "/partner-with-us/banner-icon4.svg",
    },
    {
      title: "Most Stable",
      description: "Trading Platforms",
      icon: "/partner-with-us/banner-icon1.svg",
    },
    {
      title: "Various",
      description: "Funding Options",
      icon: "/partner-with-us/banner-icon2.svg",
    },
    {
      title: "Multi Tier",
      description: "IB System",
      icon: "/partner-with-us/banner-icon3.svg",
    },
    {
      title: "70%",
      description: "Rebate",
      icon: "/partner-with-us/banner-icon4.svg",
    },
  ];

  return (
    <section className="w-full bg-[#f6f6f6]">
      <div className="container mx-auto">
        <div className="pt-10 flex md:justify-start justify-center">
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
          <div className="md:text-left text-center">
            <p className="md:text-[28px] text-[24px] font-semibold text-[#293B93]">
              Grow Your Clients Network With Us!
            </p>

            <h1 className="md:mt-10 mt-5 md:text-[40px] text-[30px] font-extrabold md:leading-[1.1] leading-[1.3] text-[#0B0F1A]">
              Become an{" "}
              <span className="text-[#B78855]">Introducing Broker</span> Into
              and Unlock Unlimited Earning Potential!.
            </h1>

            <p className="md:mt-10 mt-5  md:text-[21px] text-[18px] font-normal leading-[1.4] text-[#000]">
              Power up your business expansion and client network while
              <span className="font-extrabold text-[24px] text-[#B78855]">
                {" "}
                maximizing
              </span>{" "}
              the advantages of our IB program.
            </p>

            {/* Perks grid */}
            <div className="md:mt-20 mt-10 grid max-w-4xl md:grid-cols-3 grid-cols-2 gap-4">
              {perks.map((p, idx) => (
                <div
                  key={idx}
                  className="rounded-[10px] flex items-center gap-4 bg-white px-2 py-2 shadow-sm border border-[#D9D9D9]"
                >
                  {/* Icon on left */}
                  <div className="flex-shrink-0">
                    <img
                      className="md:h-[44px] md:w-[44px] h-[30px] w-[30px]"
                      src={p.icon}
                      alt={p.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  {/* Text on right */}
                  <div className="flex-1">
                    <div className="text-[16px] font-semibold leading-[1.25] text-[#000]">
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
