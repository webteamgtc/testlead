"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

const HeroSectionTradeMArket = ({ setIsOpen, page = "UAE" }) => {
    const t = useTranslations("investing");

    return (
        <section
            className="b relative md:bg-[url('/investing/trade-banner-full.svg')] bg-cover bg-right bg-no-repeat min-h-[900px] md:min-h-[760px] text-[#E5E5EA] overflow-hidden flex flex-col [clip-path:none] md:[clip-path:polygon(0%_0%,100%_0,100%_20%,100%_100%,0%_90%)]"
        >
            {/* ==== TOP LOGO ==== */}
            <div className="container pt-3">
                <Image
                    src="/investing/LOGO-blue.svg"
                    width={200}
                    height={72}
                    alt="GTCFX"
                 />
            </div>

            {/* ==== CENTER CONTENT ==== */}
            <div className="flex-grow flex relative md:items-center pt-10 md:pt-0">
                <div className="container">
                    <div className="grid md:grid-cols-2 items-center gap-10">
                        {/* Left Column */}
                        <div className="text-center md:text-left md:pb-20 pb-6">
                            <h1 className="text-[48px] leading-tight md:text-[55px] font-black 2xl:text-[76px] 2xl:leading-tight inline-block text-transparent bg-gradient-to-r bg-clip-text from-[#293794] to-[#000021]  max-w-lg px-5 md:px-0"

                            >Trade the <br />
                                Markets</h1>

                            <p className="text-[22px] lg:text-[32px] text-[#000032] text-base mt-3 font-medium leading-[40px] px-2 md:px-0 max-w-xl">
                                Open Your GTC Trading <br />Account & Trade Today.
                            </p>
                            <p className="text-[22px] text-[#000032] text-base mt-3 leading-[32px] px-2 md:px-0 max-w-xl">Multi-regulated, secure, and ultra-fast
                                withdrawals when you trade with GTC.
                                We remove all the unnecessary barriers.
                            </p>

                            {/* Desktop Button */}
                            <div className="mt-8 hidden md:flex">
                                <button
                                    className="bg-gradient-to-r from-[#E1CFBB] to-[#956D42] hover:from-[#4e4d71] hover:to-[#4e4d71] text-sm md:text-base xl:text-lg text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 flex items-center gap-2"
                                    onClick={() => setIsOpen(true)}
                                >
                                   Start Now
                                    <svg
                                        width="9"
                                        height="14"
                                        color="#fff"
                                        viewBox="0 0 9 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M1 1L7 7L1 13" stroke="#fff" strokeWidth="3" />
                                    </svg>
                                </button>
                            </div>

                            {/* Mobile Button */}
                            <div className="mt-6 flex md:hidden justify-center">
                                <button
                                    className="bg-gradient-to-r justify-center w-full sm:w-fit from-[#E1CFBB] to-[#956D42] text-sm font-bold text-white px-8 py-3 rounded-xl transition-all duration-300 flex items-center gap-2"
                                    onClick={() => setIsOpen(true)}
                                >
                                   Start Now
                                    <svg
                                        width="9"
                                        height="14"
                                        color="#fff"
                                        viewBox="0 0 9 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M1 1L7 7L1 13" stroke="#fff" strokeWidth="3" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-[#000032] pt-3 text-lg">{t("banner.alreadyAccount")} <Link href="https://mygtcfx.com/" target="_blank" className="text-secondary">{t("banner.login")}</Link></p>
                        </div>

                        {/* Right Column (optional image placeholder for layout balance) */}
                        <div className="hidden md:block"></div>
                        <div className="md:hidden block">
                            <img src="/investing/banner-gold-mobile.png" className=" absolute sm:relative" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionTradeMArket;
