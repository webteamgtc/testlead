"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

const HeroSection = ({ setIsOpen, page = "UAE" }) => {
    const t = useTranslations("investing");

    return (
        <section
            className="bg-[url('/investing/banner-new.png')] relative md:bg-[url('/investing/banner.webp')] bg-cover bg-right bg-no-repeat min-h-[900px] md:min-h-[760px] text-[#E5E5EA] overflow-hidden flex flex-col [clip-path:none] md:[clip-path:polygon(0%_0%,100%_0,100%_20%,100%_100%,0%_90%)]"
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
            <div className="flex-grow flex relative md:items-center pt-10 md:pt-0">
                <div className="container">
                    <div className="grid md:grid-cols-2 items-center gap-10">
                        {/* Left Column */}
                        <div className="text-center md:text-left md:pb-20 pb-6">
                            <h1 className="text-[48px] leading-tight md:text-[55px] font-black 2xl:text-[76px] 2xl:leading-tight inline-block text-white max-w-lg px-5 md:px-0"
                                dangerouslySetInnerHTML={{ __html: t("banner.title") }}
                            />

                            <p className="text-[22px] 2xl:text-[32px] text-base mt-3 font-light leading-[40px] px-2 md:px-0 max-w-xl">
                                {t("banner.desc")}
                            </p>

                            {/* Desktop Button */}
                            <div className="mt-8 hidden md:flex">
                                <button
                                    className="bg-gradient-to-r from-[#E1CFBB] to-[#956D42] hover:from-[#4e4d71] hover:to-[#4e4d71] text-sm md:text-base xl:text-lg text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 flex items-center gap-2"
                                    onClick={() => setIsOpen(true)}
                                >
                                    {t("banner.btnText")}
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
                                    {t("banner.btnText")}
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
                            <p className="text-white pt-3 text-lg">{t("banner.alreadyAccount")} <Link href="https://mygtcfx.com/" target="_blank" className="text-secondary">{t("banner.login")}</Link></p>
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

export default HeroSection; 