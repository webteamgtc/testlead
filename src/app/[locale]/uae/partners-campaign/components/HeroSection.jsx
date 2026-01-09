"use client";

import Image from "next/image";
import NaqdiIbOnboardingForm from "./HeroForm";

export default function IbHeroWithForm() {
  const perks = [
    { label: "15,000+ \nProducts", icon: "/partner-with-us/banner-icon1.svg" },
    {
      label: "10 Billion USD \nTraded Volume",
      icon: "/partner-with-us/banner-icon2.svg",
    },
    { label: "5-Star Support", icon: "/partner-with-us/banner-icon3.svg" },
    {
      label: "Unmatched \nTransparency",
      icon: "/partner-with-us/banner-icon4.svg",
    },
    {
      label: "15 Year of \nExperience",
      icon: "/partner-with-us/banner-icon3.svg",
    },
    { label: "Premium \nPlatforms", icon: "/partner-with-us/banner-icon4.svg" },
  ];

  const offers = [
    "Level 1 - Earn $10/lot",
    "Level 2 - Earn $15/lot",
    "Level 3 - Earn $20/lot",
    "Level 4 - Earn $25/lot",
    "Level 5 - Earn $30/lot",
    "Premium - Earn $28/lot",
    "Elite RAW - Earn $35/lot",
  ];

  return (
    <section className="w-full bg-[#f6f6f6]">
      <div className="mx-auto container px-4 py-16">
        <div className="mt-7 grid items-start gap-12 md:grid-cols-[1fr_600px]">
          {/* LEFT */}
          <div>
            <p className="text-[28px] font-semibold text-[#293B93]">
              naqdi IB Program
            </p>

            <h1 className="mt-10 text-[40px] font-extrabold leading-[1.1] text-[#0B0F1A]">
              Turn <span className="text-[#B78855]">Connections</span> Into
              <br />
              Revenue.
            </h1>

            <p className="mt-10  text-[21px] font-normal leading-[1.4] text-[#000]">
              Become a Naqdi Introducing Broker and earn up to{" "}
              <span className="font-extrabold text-[24px] text-[#B78855]">70%</span> revenue
              share on client trading activity. More clients, more earnings,
              more growth together.
            </p>

            {/* Perks grid */}
            <div className="mt-20 grid max-w-xl grid-cols-2 gap-4">
              {perks.map((p, idx) => (
                <div
                  key={idx}
                  className="rounded-[10px] flex items-center justify-center flex-col  min-h-[160px] bg-white px-6 py-6 text-center border border-[#D9D9D9]"
                >
                  <div className="mx-auto grid  place-items-center">
                    <img
                      className="h-[44px] w-[44px]"
                      src={p.icon}
                      alt={p.label}
                      width={34}
                      height={34}
                    />
                  </div>
                  <div className="mt-3 whitespace-pre-line text-[18px] font-normal leading-[1.25] text-[#5C5C5C]">
                    {p.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div className="relative">
           <NaqdiIbOnboardingForm/>

            {/* faint bg circle like screenshot */}
            <div className="pointer-events-none absolute -bottom-6 right-4 h-[180px] w-[180px] rounded-full bg-[#B8C0DB]/25 blur-[1px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small fields ---------- */

function Field({ label, full }) {
  return (
    <div className={full ? "" : ""}>
      <div className="mb-1 text-[9px] font-semibold text-[#6B7280]">
        {label}
      </div>
      <input className="h-[38px] w-full rounded-[8px] border border-[#E5E7EB] bg-white px-3 text-[11px] text-[#111827] outline-none placeholder:text-[#9CA3AF] focus:border-[#2E59D9]" />
    </div>
  );
}

function SelectField({ label, placeholder, compact }) {
  return (
    <div className={compact ? "" : ""}>
      <div className="mb-1 text-[9px] font-semibold text-[#6B7280]">
        {label}
      </div>
      <div className="relative">
        <input
          className="h-[38px] w-full rounded-[8px] border border-[#E5E7EB] bg-white pl-3 pr-8 text-[11px] text-[#111827] outline-none placeholder:text-[#9CA3AF] focus:border-[#2E59D9]"
          placeholder={placeholder}
        />
        <svg
          className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7 10l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

function PerkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l2.4 5.6L20 10l-5.2 2.4L12 18l-2.8-5.6L4 10l5.6-2.4L12 2Z"
        fill="#2E59D9"
        opacity="0.15"
      />
      <path
        d="M12 2l2.4 5.6L20 10l-5.2 2.4L12 18l-2.8-5.6L4 10l5.6-2.4L12 2Z"
        stroke="#2E59D9"
        strokeWidth="1.6"
      />
    </svg>
  );
}
