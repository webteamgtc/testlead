"use client";

import Image from "next/image";

export default function IbProgramIncludes() {
  const cards = [
    {
      title: "Fast & Secure Execution",
      desc: "Lightning-fast order processing with advanced trade security. ",
      icon: "/partner-with-us/why-icon1.svg",
    },
    {
      title: "Instant Fund Transfers",
      desc: "Fast and smooth fund processing for you and your clients.",
      icon: "/partner-with-us/why-icon2.svg",
    },
    {
      title: "Multi-Tier Partners System",
      desc: "Grow your network with a powerful multi-level Partners structure.",
      icon: "/partner-with-us/why-icon3.svg",
    },
    {
      title: "Copy Trading",
      desc: "Boost retention with smart copy trading solutions.",
      icon: "/partner-with-us/why-icon4.svg",
    },
    {
      title: "Stable Trading Platforms",
      desc: "Industry-leading trading platforms for consistent performance.",
      icon: "/partner-with-us/why-icon5.svg",
    },
    {
      title: "24/7 Multilingual Support",
      desc: "Round-the-clock multilingual partner assistance.",
      icon: "/partner-with-us/why-icon6.svg",
    },
  ];

  return (
    <section className="relative w-full bg-white md:py-16 py-10">
      {/* Map background (replace this image with your real map asset) */}

      <div className="relative mx-auto container">
        {/* Heading */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative ">
            <img
              src="/partner-with-us/map-bg.svg"
              alt="Map background"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <h2 className="text-center md:text-[40px] text-[24px] font-extrabold leading-tight text-[#0B0F1A]">
          Why Partner With
          <span className="text-[#B48755]"> GTCFX</span>
        </h2>
        <p className="text-center mt-2 text-sm md:text-[16px] font-medium leading-[1.6] text-[#000]">
          Advanced trading solutions and partner benefits designed for
          sustainable expansion.
        </p>

        {/* Cards grid */}
        <div className="mt-10 grid md:gap-x-5 md:gap-y-12 gap-y-10 gap-x-5 md:grid-cols-3 grid-cols-2">
          {cards.map((c) => (
            <div
              className="relative mx-auto w-full rounded-[20px] bg-[#F6F6F6]"
              style={{
                boxShadow: "0px 4px 30px 0px #00000033",
              }}
              key={c.title}
            >
              <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="grid h-[70px] w-[70px] place-items-center rounded-full">
                  <img
                    src={c.icon}
                    alt="icon"
                    width={44}
                    height={44}
                    className="h-[60px] w-[60px] object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="card-notch relative rounded-[14px] h-full bg-white px-5 pb-7 pt-12">
                <h3 className="text-center mt-3 md:text-[18px] text-[15px] font-extrabold text-secondary">
                  {c.title}
                </h3>
                <p className="mt-1 text-center md:text-[12px] text-[10px] font-medium text-[#000]">
                  {c.desc}
                </p>
              </div>

              <style jsx>{`
                .card-notch {
                  /* creates a circular "bite" at the top center */
                  -webkit-mask: radial-gradient(
                    circle 46px at 50% 0,
                    transparent 98%,
                    #000 100%
                  );
                  mask: radial-gradient(
                    circle 46px at 50% 0,
                    transparent 98%,
                    #000 100%
                  );
                }
              `}</style>
            </div>
          ))}
        </div>

        {/* CTA */}
            <div className="mt-12 text-center">
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
                Register Now
              </button>
            </div>
      </div>
    </section>
  );
}
