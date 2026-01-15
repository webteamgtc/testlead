"use client";

import React from "react";

export default function WhyChoosePartnersGTCFX() {
  return (
    <section className="w-full bg-white py-5">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="mt-2 font-extrabold leading-[1.3] text-primary md:text-[25px] lg:text-[36px] text-[20px] md:leading-tight">
            Why Partners Choose <span className="text-[#B48755]">GTCFX</span>
          </h2>
        </div>

        {/* Main Layout */}
        <div className="relative mt-12">
          {/* Center Card (Image) */}
          <div className="relative mx-auto h-[390px] w-full max-w-[470px] overflow-hidden rounded-[14px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] md:h-[490px]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url(/ib/20260115-165307.png)",
                backgroundSize: "cover",
              }}
            />
          </div>

          {/* Desktop Cards - Left */}
          <FeatureCard
            className="absolute left-[92px] top-[30px] hidden md:block"
            title="Full Earnings Control"
            text={
              <>
                Set your earning structure based on the value you bring to your
                clients, with no caps on your potential.
              </>
            }
            widthClass="w-[330px]"
          />

          <FeatureCard
            className="absolute left-[0px] top-[180px] hidden md:block"
            title="Globally Trusted Broker"
            text={
              <>
                Recognized by partners worldwide with strong ratings on{" "}
                <SmartLink href="https://www.google.com/search?q=GTCFX+reviews">
                  Google
                </SmartLink>
                ,{" "}
                <SmartLink href="https://www.trustpilot.com/">
                  Trustpilot
                </SmartLink>
                ,{" "}
                <SmartLink href="https://www.wikifx.com/">WikiFX</SmartLink>,{" "}
                <SmartLink href="https://www.investing.com/">
                  Investing.com
                </SmartLink>
                , and <SmartLink href="https://www.myfxbook.com/">Myfxbook</SmartLink>
                .
              </>
            }
            widthClass="w-[330px]"
          />

           <FeatureCard
            className="absolute right-0 top-[180px] hidden md:block"
            title="Loyalty Rewards Program"
            text={
              <>
                 Reward long-term activity for both partners and clients,
                supporting sustainable business growth.
              </>
            }
            widthClass="w-[330px]"
            align="right"
          />

          {/* Desktop Cards - Right */}
          <FeatureCard
            className="absolute right-[40px] top-[30px] hidden md:block"
            title="All-in-One Partner Portal"
            text={
              <>
                Centralize clients, earnings, networks, and performance with
                full visibility and control.
              </>
            }
            widthClass="w-[330px]"
            align="right"
          />

              <FeatureCard
            className="absolute left-[50px] top-[350px] hidden md:block"
            title="Instant Rebate Access"
            text={
              <>
                Rebates are credited as soon as trades close and are immediately
                available for withdrawal.
              </>
            }
            widthClass="w-[330px]"
          />

     

          <FeatureCard
            className="absolute right-[40px] top-[350px] hidden md:block"
            title="Proven & Regulated"
            text={
              <>
                A multi-regulated forex broker with over 14 years of industry
                experience.
              </>
            }
            widthClass="w-[330px]"
            align="right"
          />

          {/* Mobile stacked cards */}
          <div className="mt-10 grid gap-4 md:hidden">
            <FeatureCard
              title="Full Earnings Control"
              text={
                <>
                  Set your earning structure based on the value you bring to
                  your clients, with no caps on your potential.
                </>
              }
            />

            <FeatureCard
              title="Globally Trusted Broker"
              text={
                <>
                  Recognized by partners worldwide with strong ratings on{" "}
                  <SmartLink href="https://www.google.com/search?q=GTCFX+reviews">
                    Google
                  </SmartLink>
                  ,{" "}
                  <SmartLink href="https://www.trustpilot.com/">
                    Trustpilot
                  </SmartLink>
                  , <SmartLink href="https://www.wikifx.com/">WikiFX</SmartLink>,{" "}
                  <SmartLink href="https://www.investing.com/">
                    Investing.com
                  </SmartLink>
                  , and{" "}
                  <SmartLink href="https://www.myfxbook.com/">Myfxbook</SmartLink>
                  .
                </>
              }
            />

            <FeatureCard
              title="Loyalty Rewards Program"
              text={
                <>
                  Reward long-term activity for both partners and clients,
                  supporting sustainable business growth.
                </>
              }
            />

            <FeatureCard
              title="All-in-One Partner Portal"
              text={
                <>
                  Centralize clients, earnings, networks, and performance with
                  full visibility and control.
                </>
              }
            />

            <FeatureCard
              title="Instant Rebate Access"
              text={
                <>
                  Rebates are credited as soon as trades close and are
                  immediately available for withdrawal.
                </>
              }
            />

            <FeatureCard
              title="Proven & Regulated"
              text={
                <>
                  A multi-regulated forex broker with over 14 years of industry
                  experience.
                </>
              }
            />
          </div>

             <div className="mt-12 text-center">
              <button
                className=" bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22]
                           hover:from-[#293794] hover:to-[#000021]
                           text-sm font-bold md:text-base
                           text-white px-8 py-3 rounded-full transition-all duration-300"
                onClick={() => {
                  document.getElementById("register-form")?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen?.(false);
                }}
              >
                Switch to GTCFX Today
              </button>
            </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Bits ---------- */

function SmartLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-[#B48755] underline underline-offset-2 hover:opacity-90"
    >
      {children}
    </a>
  );
}

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
        <p className="text-[12px] font-extrabold text-secondary">{title}</p>
        <p className="mt-1 text-[12px] font-medium leading-[1.45]">
          {text}
        </p>
      </div>
    </div>
  );
}
