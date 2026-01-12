"use client";

import Image from "next/image";

export default function IbProgramIncludes() {
  const cards = [
    {
      title: "Security of funds",
      desc: "$1,000,000 capital protection per account",
      icon: "/partner-with-us/why-icon1.svg",
    },
    {
      title: "Extra marketing bonus",
      desc: "Additional marketing bonus on top of your rebates",
      icon: "/partner-with-us/why-icon2.svg",
    },
    {
      title: "Mega prizes",
      desc: "Mega prizes with our IB Loyalty Program",
      icon: "/partner-with-us/why-icon3.svg",
    },
    {
      title: "Cutting-edge trading platforms",
      desc: "Full ECN platform, negative balance protection, no slippage",
      icon: "/partner-with-us/why-icon4.svg",
    },
    {
      title: "Experienced account managers",
      desc: "A team of dedicated and highly experienced IB managers",
      icon: "/partner-with-us/why-icon5.svg",
    },
    {
      title: "Tightest spreads in the industry",
      desc: "0.0* pips on EUR/USD",
      icon: "/partner-with-us/why-icon6.svg",
    },
  ];

  return (
    <section className="relative w-full bg-white py-16">
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
        <h2 className="text-center text-[40px] font-extrabold leading-tight text-[#0B0F1A]">
          naqdi <span className="text-[#B48755]">IB Program</span> Includes
        </h2>

        {/* Cards grid */}
        <div className="mt-20 grid gap-x-10 gap-y-24 md:grid-cols-3">
          {cards.map((c) => (
            <div
              className="relative mx-auto w-full max-w-[360px] rounded-[20px] bg-[#F6F6F6]"
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

              <div className="card-notch relative rounded-[14px] h-full bg-white px-8 pb-7 pt-12">
                <h3 className="text-center mt-3 text-[18px] font-extrabold text-[#000]">
                  {c.title}
                </h3>
                <p className="mt-1 text-center text-[12px] font-medium text-[#000]">
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
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-[#293B93] to-[#0D122D] px-16 py-[14px] text-[16px] font-semibold text-white hover:brightness-110 active:translate-y-[1px]"
          >
            Become An IB
          </button>
        </div>
      </div>
    </section>
  );
}
