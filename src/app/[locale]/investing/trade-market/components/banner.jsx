"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import InvestingForm from "../../component/InvestingForm";

const HeroSectionTradeMArket = ({ setIsOpen, page = "UAE" }) => {
    const t = useTranslations("investingMarket");

    return (
        <section
            className="relative  bg-[#f0e7dd] bg-right bg-no-repeat text-[#E5E5EA] overflow-hidden flex flex-col [clip-path:none] md:[clip-path:polygon(0%_0%,100%_0,100%_20%,100%_90%,0%_100%)]"
        >
            {/* ==== TOP LOGO ==== */}
            <div className="container pt-3">
                <Image
                    src="/investing/Logo-blue.svg"
                    width={200}
                    height={72}
                    alt="GTCFX blue"
                    className=" mx-auto md:mx-0  cursor-pointer"
                />
            </div>

            <div className="absolute top-0 h-full w-full opacity-70 right-0 pointer-events-none">
                <Image
                    src="/investing/market-bg.svg"
                    alt="Decorative background"
                    fill
                    className="object-cover"
                />
            </div>

            {/* ==== CENTER CONTENT ==== */}
            <div className="flex-grow flex relative md:items-center pt-10 md:pt-0">
                <div className="container">
                    <div className="grid md:grid-cols-12 items-center gap-10">
                        {/* Left Column */}
                        <div className="text-center md:text-left md:pb-20 pb-6 md:col-span-7">
                            <h1 className="text-[48px] leading-tight md:text-[55px] font-black 2xl:text-[76px] 2xl:leading-tight inline-block text-transparent bg-gradient-to-r bg-clip-text from-[#293794] to-[#000021]  max-w-lg px-5 md:px-0"
                                dangerouslySetInnerHTML={{ __html: t("banner.title") }}
                            ></h1>

                            <p className="text-[22px] lg:text-[32px] text-[#000032] text-base mt-3 font-medium leading-[40px] px-2 md:px-0 max-w-xl"
                                dangerouslySetInnerHTML={{ __html: t("banner.desc") }}
                            >
                            </p>
                            <p className="text-[22px] text-[#000032] text-base mt-3 leading-[32px] px-2 md:px-0 max-w-xl">{t("banner.para")}
                            </p>
                        </div>

                        {/* Right Column (optional image placeholder for layout balance) */}
                        <div className=" md:pb-24 pb-10 md:col-span-5">
                            <InvestingForm
                                zapierUrl="https://hooks.zapier.com/hooks/catch/16420445/u52nrpg/"
                                successPath="/investing/success"
                                page="investing"
                                btnText={t("banner.btnText")}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionTradeMArket;