"use client"
import { useTranslations } from "next-intl";
import React from "react";

export default function CommonLastBanner({ setIsOpen, page }) {
    const t = useTranslations("investing");

    return (
        <section className="relative w-full">
            <img
                src="/investing/last.jpg"
                alt=""
                className="md:h-[460px] h-[300px] w-full object-center object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#293794]/85 to-[#000021]/85" />
            <div className="absolute inset-0">
                <div className="mx-auto flex h-full container flex-col items-center justify-center text-center">
                    <h2 className="text-transparent bg-gradient-to-r bg-clip-text from-[#E1CFBB] to-[#956D42] font-bold max-w-4xl tracking-tight leading-[26px] text-[24px]  md:leading-[56px] md:text-[44px] lg:text-[60px]">
                        {t("lastSection.title")}
                    </h2>
                    <p className=" mt-5 md:text-[20px] text-[18px]  max-w-2xl mx-auto text-white"> {t("lastSection.desc")}
                    </p>

                    <button
                        className="bg-gradient-to-b mt-8 from-[#E1CFBB] cursor-pointer to-[#956D42] hover:from-[#4e4d71] hover:to-[#4e4d71] text-sm md:text-base xl:text-lg text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 flex items-center gap-2"
                        onClick={() => {
                            setIsOpen(true)
                        }}
                    >
                        {t("lastSection.btnText")}
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            className="translate-x-[1px]"
                            fill="none"
                        >
                            <path
                                d="M9 6l6 6l-6 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
} 