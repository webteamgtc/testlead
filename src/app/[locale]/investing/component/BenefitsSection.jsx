"use client";
import React from "react";
import Image from "next/image";

const BenefitsSection = () => {
  const cards = [
    {
      title: "Key Benefits",
      subtitle: "Here's why so many gold traders are turning to GTC.",
      icon: "/investing/key.svg",
      theme: "gold",
      slope: "right",
      iconSide: "right",
      align: "left", // <- text alignment
    },
    {
      title: "Trust & Credibility",
      subtitle: "Here's why so many gold traders are turning to GTC.",
      icon: "/investing/trusted.svg",
      theme: "navy",
      slope: "left",
      iconSide: "left",
      align: "center",
    },
    {
      title: "Customer Support",
      subtitle: "Here's why so many gold traders are turning to GTC.",
      icon: "/investing/support.svg",
      theme: "gold",
      slope: "right",
      iconSide: "right",
      align: "right",
    },
  ];

  const bands = {
    gold: "bg-gradient-to-br from-[#D7B790] via-[#B9926D] to-[#8E6C49]",
    navy: "bg-gradient-to-br from-[#0B1A68] via-[#14258D] to-[#20246F]",
  };

  // angle of the diagonal cap
  const wedge = {
    right: "[clip-path:polygon(0%_0%,100%_0%,100%_26%,0%_99%)]",
    left:  "[clip-path:polygon(0%_0%,100%_0%,100%_99%,0%_26%)]",
  };

  const textAlignCls = (align) =>
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  return (
    <section className="w-full py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={i}
              className="relative h-[360px] rounded-2xl overflow-hidden bg-[#F4F7FB] shadow-[0_8px_30px_rgba(17,38,146,0.08)] ring-1 ring-black/5"
            >
              {/* Top diagonal band */}
              <div
                className={[
                  "absolute inset-x-0 top-0 h-[52%]",
                  bands[c.theme],
                  wedge[c.slope],
                ].join(" ")}
              />

              {/* Small icon chip under the diagonal */}
              <div
                className={[
                  "absolute top-[46%] z-[1]",
                  c.iconSide === "left" ? "left-6" : "right-6",
                ].join(" ")}
              >
                <div className="inline-flex items-center justify-center rounded-xl px-3 py-2 ">
                  <Image
                    src={c.icon}
                    alt={c.title}
                    width={36}
                    height={36}
                    className="object-contain"
                    priority={i === 0}
                  />
                </div>
              </div>

              {/* Text area (anchored to bottom, aligned per card) */}
              <div
                className={[
                  "absolute left-6 right-6 bottom-7",
                  "flex flex-col",
                  textAlignCls(c.align),
                ].join(" ")}
              >
                <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#B99059]">
                  {c.title}
                </h3>
                <p className="mt-2 text-[#0F1B3D]/80 text-[16px] leading-6 max-w-[32ch] md:max-w-none">
                  {c.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
