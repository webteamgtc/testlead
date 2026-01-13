"use client";

import Image from "next/image";

export default function WhyChooseNaqdiIB() {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* Headings */}
        <div className="text-center">
          <p className="md:text-[24px] text-[18px] font-normal text-[#293B93]">
            Why Choose GTCFX
          </p>

          <h2 className="mt-2 md:text-[40px] text-[24px] font-extrabold md:leading-tight leading-[1.3] text-primary">
            <span className="text-[#B48755]">The Future</span> Of Partnership
          </h2>
        </div>

        {/* Main Layout */}
        <div className="relative mt-12">
          {/* Center card */}
          <div className="relative mx-auto md:h-[490px] h-[390px] w-full max-w-[470px] rounded-[14px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] overflow-hidden">
            {/* Candle background */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url(/partner-with-us/mobile-new.png)",
                backgroundSize: "cover",
              }}
            />

            {/* phone - centered normally */}
          
          </div>

          {/* Cards - Left */}
          <FeatureCard
            className="absolute left-[92px] top-[62px] hidden md:block"
            title="Take control of your Earnings:"
            text="With unlimited commissions, your ambition sets the pace."
            widthClass="w-[330px]"
          />
          <FeatureCard
            className="absolute left-[0px] top-[200px] hidden md:block"
            title="World-class reputation:"
            text="Partner with the trusted leader."
            widthClass="w-[330px]"
          />
          <FeatureCard
            className="absolute left-[92px] top-[320px] hidden md:block"
            title="investment-free:"
            text="Begin your IB path. without the initial capital."
            widthClass="w-[320px]"
          />

          {/* Cards - Right */}
          <FeatureCard
            className="absolute right-[40px] top-[62px] hidden md:block"
            title="Excellence Rewarded:"
            text="Extraordinary performance earns you extraordinary rewards."
            widthClass="w-[330px]"
            align="right"
          />
          <FeatureCard
            className="absolute right-0 top-[200px] hidden md:block"
            title="Tailored Tools:"
            text="Explore our advanced Portal for your specialized needs."
            widthClass="w-[330px]"
            align="right"
          />
          <FeatureCard
            className="absolute right-[40px] top-[320px] hidden md:block"
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

