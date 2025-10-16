"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const BenefitsSectionTradeMArket = () => {
    const t = useTranslations("investingMarket");

    const [flipped, setFlipped] = useState(null);

    const cards = [
        {
            title: t("sectionTwo.column1.title"),
            icon: "/investing/market-icon1.svg",
            frontTheme: "gold",
            backTheme: "navy",
            slope: "right",
            iconSide: "right",
            align: "right",
            backItems: [
                { title: t("sectionTwo.column1.list.itemOneTitle"), sub: t("sectionTwo.column1.list.para1") },
                { title: t("sectionTwo.column1.list.itemTwoTitle"), sub: t("sectionTwo.column1.list.para2") },
                { title: t("sectionTwo.column1.list.itemThreeTitle"), sub: t("sectionTwo.column1.list.para3") },
            ],
        },
        {
            title: t("sectionTwo.column2.title"),
            icon: "/investing/market-icon2.svg",
            frontTheme: "navy",
            backTheme: "navy",
            slope: "left",
            iconSide: "left",
            align: "left",
            backItems: [
                {
                    title: t("sectionTwo.column2.list.item1"), sub: t("sectionTwo.column2.list.item1para")

                },
                {
                    title: null,
                    list: [
                        t("sectionTwo.column2.list.card2.item1"), t("sectionTwo.column2.list.card2.item2"),
                        t("sectionTwo.column2.list.card2.item3")
                    ]

                },
                { title: t("sectionTwo.column2.list.card3Title"), sub:t("sectionTwo.column2.list.card3para") },
            ],
        },
    ];

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

    return (
        <section className="w-full py-8 relative pb-10 md:pb-24 mt-0 pt-10 md:pt-24">
            <div className="pointer-events-none absolute inset-0 z-0">
                <img
                    src="/investing/market-bg-new.svg"
                    alt=""
                    className="absolute right-0 left-0 w-full object-cover bottom-0 h-[92%] max-h-[780px] opacity-60"
                />
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-[1]">
                <div className="grid gap-6 md:gap-8 sm:grid-cols-2 ">
                    {cards.map((c, i) => {
                        const isFlipped = flipped === i;
                        return (
                            <div
                                key={i}
                                className="relative min-h-[500px] rounded-2xl"
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
                                                        "h-[60%]",
                                                        bandFront[c.frontTheme],
                                                        wedge[c.slope],
                                                    ].join(" ")}
                                                />
                                                <div className="md:p-4 flex flex-col items-center">
                                                    <div className="inline-flex items-center justify-center h-[50px] w-[50px] px-2 md:py-2 ">
                                                        <img src={c.icon} alt="" />
                                                    </div>
                                                    <div
                                                        className={[
                                                            "",
                                                            "flex flex-col",
                                                        ].join(" ")}
                                                    >
                                                        <h3 className="text-[20px] text-center md:text-[32px] leading-[40px] font-extrabold text-transparent bg-gradient-to-r bg-clip-text from-[#293794] to-[#000021]"
                                                            dangerouslySetInnerHTML={{ __html: c.title }}
                                                        >
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>

                                        <article className="flip-face flip-back bg-gradient-to-br from-[#293794]  to-[#000021] ">
                                            <div
                                                className="h-full w-full bg-[url('/investing/card-back-bg.svg')] bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden ring-1 shadow-[0_8px_30px_rgba(17,38,146,0.08)] p-6 md:p-7 flex"
                                            // style={backGradient(c.backTheme)}
                                            >
                                                <div className="w-full">
                                                    <div className="w-full pt-12">
                                                        {c.backItems.map((it, idx) => {
                                                            const isString = typeof it === "string";
                                                            return (
                                                                <p
                                                                    key={idx}
                                                                    className={[
                                                                        "text-left",
                                                                        "text-[14px] md:text-[15px] leading-6",
                                                                        "mb-2 md:mb-2.5 last:mb-0",
                                                                        backText[c.backTheme],
                                                                    ].join(" ")}
                                                                >
                                                                    {isString ? (
                                                                        it
                                                                    ) : (
                                                                        <div className="pb-4">
                                                                            <strong className="font-semibold text-[24px] text-transparent bg-gradient-to-r bg-clip-text from-[#E1CFBB] to-[#956D42]">{it.title}</strong>
                                                                            {it.sub && <span className="block text-base text-[#FFFFFF] leading-5 opacity-80 mt-0.5">{it.sub}</span>}
                                                                            {it.list && it?.list?.map(single => <p className="block text-base text-[#FFFFFF] leading-5 opacity-80 mt-0.5">{single}</p>)}
                                                                        </div>
                                                                    )}
                                                                </p>
                                                            );
                                                        })}
                                                    </div>
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

export default BenefitsSectionTradeMArket;
