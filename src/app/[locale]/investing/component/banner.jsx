"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import TradeForm from "../../components/TradeForm";
import InvestingForm from "./InvestingForm";

const HeroSection = ({ setIsOpen, page = "UAE" }) => {
    const t = useTranslations("investing");

    return (
        <section
            className=" relative z-10 bg-[#000032] bg-cover bg-right bg-no-repeat pb-6 text-[#E5E5EA] overflow-hidden flex flex-col [clip-path:none] md:[clip-path:polygon(0%_0%,100%_0,100%_20%,100%_100%,0%_90%)]"
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
            <div className="absolute top-0 h-full w-full opacity-70 right-0 pointer-events-none">
                <Image
                    src="/investing/new-bg.svg"
                    alt="Decorative background"
                    fill
                    className="object-cover"
                />
            </div>

            {/* ==== CENTER CONTENT ==== */}
            <div className="flex-grow flex relative md:-z-[1] md:items-center pt-10 md:pt-0 pb-4">
                <div className="container">
                    <div className="grid md:grid-cols-12 items-center gap-10">
                        {/* Left Column */}
                        <div className="text-center md:text-left md:pb-20 pb-6 md:col-span-7">
                            <h1 className="text-[48px] leading-tight md:text-[55px] font-black 2xl:text-[76px] 2xl:leading-tight inline-block text-transparent bg-gradient-to-r bg-clip-text from-[#E1CFBB] to-[#956D42] max-w-lg px-5 md:px-0"
                                dangerouslySetInnerHTML={{ __html: t("banner.title") }}
                            />
                            <p className="text-[22px] 2xl:text-[32px] text-base mt-3 font-light leading-[40px] px-2 md:px-0 max-w-xl">
                                {t("banner.desc")}
                            </p>
                        </div>

                        {/* Right Column (optional image placeholder for layout balance) */}
                        <div className=" md:pb-16 md:col-span-5">
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

export default HeroSection; 