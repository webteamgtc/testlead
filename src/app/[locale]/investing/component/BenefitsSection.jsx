"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const BenefitsSection = () => {
  const t = useTranslations("investing");

  const [flipped, setFlipped] = useState(null);

  const cards = [
    {
      title: t("sectionTwo.column1.title"),
      subtitle: t("sectionTwo.column1.desc"),
      icon: "/investing/icon1.svg",
      frontTheme: "gold",
      backTheme: "navy",
      slope: "right",
      iconSide: "right",
      align: "right",
      backItems: [t("sectionTwo.column1.list.item1"), t("sectionTwo.column1.list.item2"), t("sectionTwo.column1.list.item3"), t("sectionTwo.column1.list.item4"), t("sectionTwo.column1.list.item5")],
    },
    {
      title: t("sectionTwo.column2.title"),
      subtitle: t("sectionTwo.column3.desc"),
      icon: "/investing/icon2.svg",
      frontTheme: "navy",
      backTheme: "gold",
      slope: "left",
      iconSide: "left",
      align: "left",
      backItems: [t("sectionTwo.column2.list.item1"), t("sectionTwo.column2.list.item2"), t("sectionTwo.column2.list.item3")],
    },
    {
      title: t("sectionTwo.column3.title"),
      subtitle: t("sectionTwo.column3.desc"),
      icon: "/investing/icon3.svg",
      frontTheme: "gold",
      backTheme: "navy",
      slope: "right",
      iconSide: "right",
      align: "right",
      backItems: [t("sectionTwo.column3.list.item1"), t("sectionTwo.column3.list.item2")],
    },
  ]

  const bandFront = {
    gold: "bg-gradient-to-br from-[#D7B790] via-[#B9926D] to-[#8E6C49]",
    navy: "bg-gradient-to-br from-[#0B1A68] via-[#14258D] to-[#20246F]",
  }

  const backGradient = (theme) =>
    theme === "gold"
      ? { background: "linear-gradient(135deg,#D7B790 0%,#B9926D 50%,#8E6C49 100%)" }
      : { background: "linear-gradient(135deg,#0B1A68 0%,#14258D 50%,#20246F 100%)" };

  const backText = {
    navy: "text-white",
    gold: "text-[#0F1B3D]",
  }

  const wedge = {
    right: "[clip-path:polygon(0%_0%,100%_0%,100%_26%,0%_99%)]",
    left: "[clip-path:polygon(0%_0%,100%_0%,100%_99%,0%_26%)]",
  }

  const textAlignCls = (align) =>
    align === "center"
      ? "text-center items-center"
      : align === "right"
        ? "text-right items-end"
        : "text-left items-start";

  return (
    <section className="w-full py-8 relative pb-10 md:pb-20 mt-0 md:mt-[-30px] pt-10 md:pt-16">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none">
        <Image
          src="/investing/section-two-bg.png"
          alt=""
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-[1]">
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => {
            const isFlipped = flipped === i;
            return (
              <div
                key={i}
                className="relative min-h-[360px] rounded-2xl"
                onMouseEnter={() => setFlipped(i)}
                onMouseLeave={() => setFlipped(null)}
                onClick={() => setFlipped(isFlipped ? null : i)}
              >
                <div className="flip-card">
                  <div
                    className="flip-inner"
                    style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                  >
                    <article className="flip-face">
                      <div className="relative h-full w-full bg-[#F4F7FB] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-[0_8px_30px_rgba(17,38,146,0.08)]">
                        <div
                          className={[
                            " h-[48%]",
                            bandFront[c.frontTheme],
                            wedge[c.slope],
                          ].join(" ")}
                        />
                        <div className="p-4 flex flex-col items-center">
                          <div className="inline-flex items-center justify-center rounded-[50%] px-2 py-2 border ">
                            <img src={c.icon} alt="" />
                          </div>
                          <div
                            className={[
                              "",
                              "flex flex-col",
                            ].join(" ")}
                          >
                            <h3 className="text-[20px] mt-1 text-center md:text-[22px] font-extrabold text-[#B99059]">
                              {c.title}
                            </h3>
                            <p className="mt-1 text-[#1A1A47] text-center text-[16px] leading-6 max-w-[32ch] md:max-w-none">
                              {c.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="flip-face flip-back">
                      <div
                        className="h-full w-full rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-[0_8px_30px_rgba(17,38,146,0.08)] p-6 md:p-7 flex"
                        style={backGradient(c.backTheme)}
                      >
                        <div className="m-auto w-full">
                          <ul
                            className={[
                              "list-disc pl-5 text-left space-y-2 md:space-y-2.5",
                              "text-[14px] md:text-[15px] leading-6",
                              backText[c.backTheme],
                              c.backTheme === "gold"
                                ? "marker:text-[#0B1A68]"
                                : "marker:opacity-90",
                            ].join(" ")}
                          >
                            {c.backItems.map((li, idx) => (
                              <li key={idx}>{li}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
