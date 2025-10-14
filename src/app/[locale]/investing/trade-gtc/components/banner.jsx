"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import InvestingForm from "../../component/InvestingForm";

const HeroSectionTradeMArket = ({ setIsOpen, page = "UAE" }) => {
    const t = useTranslations("investing");

    return (
        <section
            className="relative  bg-gradient-to-r from-[#293794] to-[#000021] bg-right bg-no-repeat text-[#E5E5EA] overflow-hidden flex flex-col"
        >
            {/* ==== TOP LOGO ==== */}
            <div className="container pt-3">
                <Image
                    src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/footer-logo.webp"
                    width={200}
                    height={72}
                    alt="GTCFX"
                    className="lg:w-[200px] mx-auto md:mx-0 lg:h-[72px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer"
                />
            </div>

            <div className="absolute top-0 h-full w-full  right-0 pointer-events-none">
                <Image
                    src="/investing/gtc-bg.svg"
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
                            <h1 className="text-[48px] leading-tight md:text-[55px] font-black 2xl:text-[76px] 2xl:leading-tight inline-block text-transparent bg-gradient-to-r bg-clip-text from-[#E1CFBB] to-[#956D42] max-w-lg px-5 md:px-0"

                            >Trade
                                <br />
                                With GTC</h1>

                            <p className="text-[22px] lg:text-[22px] text-[#FFF] font-semibold text-base leading-[40px] px-2 md:px-0 max-w-xl">
                                Trade the Fed’s Next Move.
                            </p>
                            <p className="text-[22px] text-[#FFF] text-base mt-2 leading-[32px] px-2 md:px-0 max-w-xl">
                                Join thousands of traders who are preparing for the Federal Reserve’s (Fed) next big move. React instantly to market volatility with GTC’s multi-regulated platform.
                            </p>
                        </div>

                        {/* Right Column (optional image placeholder for layout balance) */}
                        <div className=" md:pb-24 pb-10 md:col-span-5">
                            <InvestingForm
                                zapierUrl="https://hooks.zapier.com/hooks/catch/16420445/u52nrpg/"
                                successPath="/investing/trade-gold/success"
                                page="investing"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionTradeMArket;
