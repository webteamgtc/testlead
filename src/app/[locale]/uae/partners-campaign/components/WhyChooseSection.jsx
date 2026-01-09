"use client";

import Image from "next/image";

export default function WhyChooseNaqdiIB() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* Headings */}
        <div className="text-center">
          <p className="text-[36px] font-normal text-[#293B93]">
            Why Choose Naqdi IB?
          </p>

          <h2 className="mt-2 text-[40px] font-extrabold leading-tight text-[#000]">
            <span className="text-[#B48755]">The Future</span> Of Partnership
          </h2>
        </div>

        {/* Main Layout */}
        <div className="relative mt-12">
          {/* Center card */}
          <div className="relative mx-auto h-[490px] w-full max-w-[470px] rounded-[14px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] overflow-hidden">
            {/* Candle background */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url(/partner-with-us/candle.svg)",
                backgroundSize: "cover",
              }}
            />

            {/* phone - centered normally */}
            <div className="relative flex h-full items-center justify-center z-10">
              <div className="relative">
                <img
                  src="/partner-with-us/mobile.svg"
                  alt="Phone"
                  width={460}
                  height={920}
                  className="h-auto w-[230px] rounded-[28px]"
                />
                
                {/* coins (dummy) */}
                <div className="pointer-events-none absolute -bottom-9 left-1/2 flex -translate-x-1/2 items-end gap-4">
                  <div className="h-[92px] w-[92px] rounded-full bg-gradient-to-br from-[#F6D36B] to-[#C8891C] shadow-[0_12px_20px_rgba(0,0,0,0.18)]" />
                  <div className="h-[78px] w-[78px] rounded-full bg-gradient-to-br from-[#FFD98A] to-[#B7771D] shadow-[0_12px_20px_rgba(0,0,0,0.18)]" />
                </div>
              </div>
            </div>
          </div>

          {/* Cards - Left */}
          <FeatureCard
            className="absolute left-[92px] top-[82px] hidden md:block"
            title="Take control of your Earnings:"
            text="With unlimited commissions, your ambition sets the pace."
            widthClass="w-[330px]"
          />
          <FeatureCard
            className="absolute left-[0px] top-[230px] hidden md:block"
            title="World-class reputation:"
            text="Partner with the trusted leader."
            widthClass="w-[330px]"
          />
          <FeatureCard
            className="absolute left-[92px] top-[360px] hidden md:block"
            title="investment-free:"
            text="Begin your IB path. without the initial capital."
            widthClass="w-[320px]"
          />

          {/* Cards - Right */}
          <FeatureCard
            className="absolute right-[40px] top-[82px] hidden md:block"
            title="Excellence Rewarded:"
            text="Extraordinary performance earns you extraordinary rewards."
            widthClass="w-[330px]"
            align="right"
          />
          <FeatureCard
            className="absolute right-0 top-[230px] hidden md:block"
            title="Tailored Tools:"
            text="Explore our advanced Portal for your specialized needs."
            widthClass="w-[330px]"
            align="right"
          />
          <FeatureCard
            className="absolute right-[40px] top-[360px] hidden md:block"
            title="Control your earnings:"
            text="Unlimited commissions, limited only by your ambition."
            widthClass="w-[340px]"
            align="right"
          />

          {/* Mobile stacked cards */}
          <div className="mt-10 grid gap-4 md:hidden">
            <FeatureCard
              title="Take control of your Earnings:"
              text="With unlimited commissions, your ambition sets the pace."
            />
            <FeatureCard
              title="World-class reputation:"
              text="Partner with the trusted leader."
            />
            <FeatureCard
              title="investment-free:"
              text="Begin your IB path. without the initial capital."
            />
            <FeatureCard
              title="Excellence Rewarded:"
              text="Extraordinary performance earns you extraordinary rewards."
            />
            <FeatureCard
              title="Tailored Tools:"
              text="Explore our advanced Portal for your specialized needs."
            />
            <FeatureCard
              title="Control your earnings:"
              text="Unlimited commissions, limited only by your ambition."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Bits ---------- */

function FeatureCard({
  title,
  text,
  className = "",
  widthClass = "w-full",
  align = "left",
}) {
  return (
    <div
      className={[
        "rounded-[6px] bg-white px-6 py-5",
        "shadow-[0_10px_22px_rgba(0,0,0,0.14)]",
        widthClass,
        className,
      ].join(" ")}
    >
      <div className={align === "right" ? "text-left" : "text-left"}>
        <p className="text-[12px] font-extrabold text-[#111827]">
          {title}
          <span className="font-medium text-[#111827]">{text ? "" : ""}</span>
        </p>
        <p className="mt-1 text-[12px] font-medium leading-[1.45] text-[#5B6472]">
          {text}
        </p>
      </div>
    </div>
  );
}

function CandleStack({ reversed = false }) {
  return (
    <div
      className={[
        "flex items-end gap-3",
        reversed ? "flex-row-reverse" : "",
      ].join(" ")}
    >
      <Candle h={58} />
      <Candle h={96} />
      <Candle h={72} />
    </div>
  );
}

function Candle({ h = 80 }) {
  return (
    <div className="relative">
      <div
        className="w-[18px] rounded-[3px] bg-[#9CC4FF]"
        style={{ height: `${h}px` }}
      />
      {/* wick line */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#5AA0FF]" />
      {/* tiny top/bottom caps */}
      <div className="absolute -top-[6px] left-1/2 h-[10px] w-[10px] -translate-x-1/2 rounded-[2px] bg-[#4F96FF]" />
      <div className="absolute -bottom-[6px] left-1/2 h-[10px] w-[10px] -translate-x-1/2 rounded-[2px] bg-[#4F96FF]" />
    </div>
  );
}
