"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const BenefitsSectionTradeMArket = () => {
    const t = useTranslations("investing");

    const [flipped, setFlipped] = useState(null);

    const cards = [
        {
            title: "Why Fed Meetings Matter",
            desc: "Here's why so many gold traders are turning to GTC.",
            icon: "/investing/gtc-icon1.svg",
            frontTheme: "gold",
            backTheme: "navy",
            slope: "right",
            iconSide: "right",
            align: "right",
            // Card 1 → heading + paragraph blocks
            backItems: [
                {
                    title: "Fed Announcements",
                    sub: "Fed announcements can create strong market volatility within minutes."
                },
                {
                    title: "Rate Cuts",
                    sub: "Rate cuts may boost equities and support gold prices."
                },
                {
                    title: "Market Updates",
                    sub: "Markets expect a potential rate cut at the upcoming FOMC."
                }
            ]
        },

        {
            title: "What History Shows",
            desc: "Here's why so many gold traders are turning to GTC.",
            icon: "/investing/gtc-icon2.svg",
            frontTheme: "navy",
            backTheme: "navy",
            slope: "left",
            iconSide: "left",
            align: "left",
            // Card 2 → bullets
            backItems: [
                {
                    list: [
                        "Even during rate cuts, markets don’t always react positively.",
                        "In December 2018 the S&P 500 saw its largest Fed-day swing since 2008 due to hawkish guidance.",
                    ]
                }
            ]
        },

        {
            title: "Why Trade the Markets with GTC?",
            desc: "Here's why so many gold traders are turning to GTC.",
            icon: "/investing/gtc-icon3.svg",
            frontTheme: "gold",
            backTheme: "navy",
            slope: "right",
            iconSide: "right",
            align: "right",
            // Card 3 → bullets
            backItems: [
                {
                    list: [
                        "Ultra-Low Spreads on Gold, Forex & all CFDs.",
                        "Go long or short: trade both directions.",
                        "Same-Day Withdrawals.",
                        "Real-Time Alerts after FOMC; get market commentary.",
                        "Multi-Regulated: DFSA, FSCA, FSC & VFSC."
                    ]
                }
            ]
        },

        {
            title: "Start Trading in 3 Steps",
            desc: "Here's why so many gold traders are turning to GTC.",
            icon: "/investing/gtc-icon4.svg",
            frontTheme: "navy",
            backTheme: "navy",
            slope: "left",
            iconSide: "left",
            align: "left",
            // Card 4 → bullets
            backItems: [
                {
                    list: [
                        "Register your OTC account in minutes.",
                        "Verify your identity (KYC).",
                        "Deposit & trade to be ready for the Fed’s decision."
                    ]
                }
            ]
        }
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
                    src="/investing/gtc-section-bg.svg"
                    alt=""
                    className="absolute right-0 left-0 w-full object-cover bottom-0 h-[92%]"
                />
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-[1]">
                <div className="grid gap-6 md:gap-8 sm:grid-cols-2 ">
                    {cards.map((c, i) => {
                        const isFlipped = flipped === i;
                        return (
                            <div
                                key={i}
                                className="relative min-h-[450px] rounded-2xl"
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
                                            <div className="relative h-full w-full bg-[#F2F6F9] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-[0_8px_30px_rgba(17,38,146,0.08)]">
                                                <div
                                                    className={[
                                                        "h-[40%]",
                                                        bandFront[c.frontTheme],
                                                        wedge[c.slope],
                                                    ].join(" ")}
                                                />
                                                <div className="md:p-6 flex flex-col items-center">
                                                    <div className={`flex w-full items-center j${c.align == "right" ? " justify-end" : " justify-start"} h-[50px] px-2 md:py-2 `}>
                                                        <img src={c.icon} alt="" />
                                                    </div>
                                                    <div
                                                        className={[
                                                            "",
                                                            "flex flex-col",
                                                            `${c.align == "right" ? " justify-end text-end" : " justify-start text-left"}`
                                                        ].join(" ")}
                                                    >
                                                        <h3 className="text-[20px] md:text-[28px] leading-[40px] font-semibold text-[#BC9366]"
                                                            dangerouslySetInnerHTML={{ __html: c.title }}
                                                        >
                                                        </h3>
                                                        <p className="text-[#000032] md:text-[24px] text-[16px] mt-2 ">{c.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>

                                        {/* BACK */}
                                        <article className="flip-face flip-back bg-gradient-to-br from-[#293794]  to-[#000021] ">
                                            <div
                                                className="h-full w-full bg-[url('/investing/gtc-card-bg.svg')] bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden ring-1 shadow-[0_8px_30px_rgba(17,38,146,0.08)] p-6 md:p-7 flex"
                                            >
                                                <div className="w-full">
                                                    <div className="w-full pt-12 text-left text-white">
                                                        {i === 0 ? (
                                                            /* ---------- Card 1: headings + paragraphs ---------- */
                                                            <div className="space-y-5">
                                                                {c.backItems.map((it, idx) => (
                                                                    <div key={idx}>
                                                                        {it.title && (
                                                                            <h4 className="text-[18px] md:text-[20px] font-semibold leading-6">
                                                                                {it.title}
                                                                            </h4>
                                                                        )}
                                                                        {it.sub && (
                                                                            <p className="mt-1 text-[14px] md:text-[15px] leading-6 opacity-85">
                                                                                {it.sub}
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            /* ---------- Cards 2–4: unordered list ---------- */
                                                            <ul className="list-disc pl-6 space-y-3 text-[14px] md:text-[15px] leading-6">
                                                                {c.backItems.flatMap((it) => {
                                                                    // Accept either {title,sub}, string, or {list:[...]}
                                                                    if (typeof it === "string") return [it];
                                                                    if (Array.isArray(it?.list)) return it.list;
                                                                    const combo = [it?.title, it?.sub].filter(Boolean).join(" — ");
                                                                    return combo ? [combo] : [];
                                                                }).map((text, liIdx) => (
                                                                    <li key={liIdx} className="opacity-90">
                                                                        {text}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
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
