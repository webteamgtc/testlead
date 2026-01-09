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
            // <div
            //   key={c.title}
            //   className="relative rounded-[20px] bg-[#F6F6F6] px-6 pb-6 pt-10"
            //   style={{
            //     boxShadow: "0px 4px 30px 0px #00000033",
            //   }}
            // >
            //   {/* Icon bubble */}
            //   <div className="absolute -top-9 left-1/2 -translate-x-1/2">
            //     <div className="grid h-[70] w-[70] place-items-center rounded-full bg-white">
            //       <img src={c.icon} alt={c.title} width={58} height={58} />
            //     </div>
            //   </div>

            //   <div className="text-center">
            //     <div className="text-[20px] font-extrabold text-[#000]">
            //       {c.title}
            //     </div>
            //     <div className="mx-auto mt-2 max-w-[240px] text-[16px] font-medium leading-[1.35] text-[#6B7280]">
            //       {c.desc}
            //     </div>
            //   </div>
            // </div>
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

/* ---------------- Icons (simple, close enough placeholders) ---------------- */

function IconShield() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 4L31 8.5V18.5C31 26.6 24.9 32.2 20 35C15.1 32.2 9 26.6 9 18.5V8.5L20 4Z"
        fill="#E9F1FF"
        stroke="#2E6AE6"
        strokeWidth="1.8"
      />
      <path
        d="M16 20.2L18.6 22.8L24.8 16.6"
        stroke="#2E6AE6"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCube() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 5L32 12V28L20 35L8 28V12L20 5Z"
        fill="#E9F1FF"
        stroke="#2E6AE6"
        strokeWidth="1.8"
      />
      <path d="M20 5V35" stroke="#2E6AE6" strokeWidth="1.8" opacity="0.7" />
      <path
        d="M8 12L20 19L32 12"
        stroke="#2E6AE6"
        strokeWidth="1.8"
        opacity="0.7"
      />
    </svg>
  );
}

function IconCoin() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="20"
        cy="20"
        r="14"
        fill="#E9F1FF"
        stroke="#2E6AE6"
        strokeWidth="1.8"
      />
      <path
        d="M22.7 14.5c-3.6-1-6.2 1-6.2 3.4 0 4.1 8 2.7 8 6.3 0 1.4-1.3 2.2-3.1 2.2-1.5 0-2.8-.5-3.9-1.3"
        stroke="#2E6AE6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 12.5v15"
        stroke="#2E6AE6"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBtc() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="20"
        cy="20"
        r="14"
        fill="#E9F1FF"
        stroke="#2E6AE6"
        strokeWidth="1.8"
      />
      <path
        d="M18 13.5h4.2c2.2 0 3.8 1.1 3.8 3 0 1.6-1.1 2.5-2.4 2.8 1.7.3 3 1.4 3 3.3 0 2.1-1.8 3.4-4.4 3.4H18V13.5Z"
        stroke="#2E6AE6"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M19 12v16"
        stroke="#2E6AE6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M23 12v16"
        stroke="#2E6AE6"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconPeople() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 19.5c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4Z"
        fill="#E9F1FF"
        stroke="#2E6AE6"
        strokeWidth="1.8"
      />
      <path
        d="M25.5 20c2 0 3.6-1.6 3.6-3.6 0-2-1.6-3.6-3.6-3.6s-3.6 1.6-3.6 3.6c0 2 1.6 3.6 3.6 3.6Z"
        fill="#E9F1FF"
        stroke="#2E6AE6"
        strokeWidth="1.8"
      />
      <path
        d="M8.8 30.5c.7-4 3.7-6.2 7.7-6.2s7 2.2 7.7 6.2"
        stroke="#2E6AE6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M23 29.8c.5-2.8 2.6-4.4 5.4-4.4 2.8 0 4.9 1.6 5.4 4.4"
        stroke="#2E6AE6"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5 7c4.6 1.2 8 5.2 8.5 10.2-3.3 3.6-7.6 6.7-12.6 8.9-2.2-2.2-4.1-4.1-6.3-6.3 2.2-5 5.3-9.3 10.4-12.8Z"
        fill="#E9F1FF"
        stroke="#2E6AE6"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14.2 20.1L9.8 24.5c-.7.7-.7 1.9 0 2.6l3.1 3.1c.7.7 1.9.7 2.6 0l4.4-4.4"
        stroke="#2E6AE6"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="25.8" cy="15.8" r="2.2" fill="#2E6AE6" opacity="0.85" />
    </svg>
  );
}
