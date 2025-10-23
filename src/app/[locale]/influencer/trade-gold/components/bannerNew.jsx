"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import InvestingForm from "@/app/[locale]/investing/component/InvestingForm";

const HeroSectionNew = ({ setIsOpen, page = "UAE" }) => {
    const t = useTranslations("investing");

    return (
        <section
            className=" relative z-10 bg-gradient-to-r items-center gap-2 from-[#101133] to-[#04060F] bg-cover bg-right bg-no-repeat pb-6 text-[#E5E5EA] overflow-hidden flex flex-col" id="topSection"
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


            {/* ==== CENTER CONTENT ==== */}
            <div className="flex-grow flex relative md:-z-[1] md:items-center pt-10 md:pt-0 pb-4">
                <div className="container">
                    <div className="grid md:grid-cols-12 items-center gap-2">
                        {/* Left Column */}
                        <div className="text-center md:text-left md:pb-20 pb-6 md:col-span-4">
                            <h1 className="text-[48px] leading-tight md:text-[55px] font-black 2xl:text-[66px] 2xl:leading-tight inline-block text-transparent bg-gradient-to-b bg-clip-text from-[#A57549] via-[#EAD2A1] to-[#A57549] max-w-lg px-5 md:px-0"
                            >TRADE GOLD</h1>
                            <p className="text-[22px] md:text-[55px] text-base mt-3 font-light leading-[65px] px-2 md:px-0 max-w-xl">
                                with the lowest<br /> spreads at <span className="text-transparent bg-gradient-to-b bg-clip-text from-[#A57549] via-[#EAD2A1] to-[#A57549] font-bold"> GTC</span>
                            </p>
                        </div>
                        <div className="md:col-span-4">
                            <img
                                src="/gold.webp"
                                alt="GTCFX"
                            />
                        </div>
                        {/* Right Column (optional image placeholder for layout balance) */}
                        <div className=" md:pb-6 md:col-span-4">

                            <InvestingForm
                                zapierUrl="https://hooks.zapier.com/hooks/catch/16420445/urequo1/"
                                successPath="/influencer/trade-gold/success"
                                page="investing"
                                isBlue
                                btnText={t("banner.btnText")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionNew; 