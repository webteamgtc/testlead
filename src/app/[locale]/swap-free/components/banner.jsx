
"use client"
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
const HeroSection = ({ setIsOpen }) => {
  const t = useTranslations("swapFreePage")
  return (
    <section className="bg-gradient-to-r from-[#000032] to-[#000032] text-[#E5E5EA] py-8 md:py-28 relative overflow-hidden">

      {/* Desktop Background Image Only */}
      <div className="hidden md:block absolute inset-0 z-0 scale-[1.0] origin-bottom-right hero-bg">
        <Image
          src="/swap-free/banner-img.webp"
          alt="Hero BG"
          fill
          className="object-cover object-right 3xl:object-contain"
          priority
        />
      </div>

      <div className="container">
        <div className=" grid md:grid-cols-2 items-center gap-10 z-10 relative">
          {/* Left Column */}
          <div className="text-center md:text-left">
            <h1 className="text-[35px] leading-tight md:text-[40px] xl:text-[45px] font-bold 2xl:text-[50px] 2xl:leading-tight bg-gradient-to-b from-[#E1CFBB] to-[#956D42] inline-block text-transparent bg-clip-text px-5 md:px-0">
              {t("banner.heading")}
            </h1>
            <h3 className="text-[22px] md:text-[32px] mb-6 font-light leadging-non px-2 md:px-0">
              {t("banner.desc")}
            </h3>
            <div className="flex flex-col sm:hidden relative w-full h-[200px]">
                <Image src='/swap-free/banner.png' fill alt="" className="object-contain" />
            </div>
            <p className="text-base md:text-base mb-6 leading-nomral max-w-xl  px-2 md:px-0">
              {t("banner.para1")}
            </p>
            <div className="my-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center rounded-xl max-w-6xl mx-auto">
              {/* Swaps */}
              <div className="flex flex-col items-center space-y-1">
                <div className="border border-[#fff] rounded-full p-2 mb-2">
                  <img className=" w-5 h-5" src="/swap-free/banner-icon1.svg" alt="" />
                </div>
                <p className="font-semibold text-sm">{t("banner.column1.title")}</p>
                <p className="text-xs text-white/80">{t("banner.column1.desc")}</p>
              </div>

              {/* Forever */}
              <div className="flex flex-col items-center space-y-1">
                <div className="border border-[#fff] rounded-full p-2 mb-2">
                  <img className=" w-5 h-5" src="/swap-free/banner-icon2.svg" alt="" />

                </div>
                <p className="font-semibold text-sm">{t("banner.column2.title")}</p>
                <p className="text-xs text-white/80">{t("banner.column2.desc")}</p>
              </div>

              {/* Unlock */}
              <div className="flex flex-col items-center space-y-1">
                <div className="border border-[#fff] rounded-full p-2 mb-2">
                  <img className=" w-5 h-5" src="/swap-free/banner-icon3.svg" alt="" />

                </div>
                <p className="font-semibold text-sm">{t("banner.column3.title")}</p>
                <p className="text-xs text-white/80">{t("banner.column3.desc")}</p>
              </div>

              {/* Unlimited */}
              <div className="flex flex-col items-center space-y-1">
                <div className="border border-[#fff] rounded-full p-2 mb-2">
                  <img className=" w-5 h-5" src="/swap-free/banner-icon4.svg" alt="" />

                </div>
                <p className="font-semibold text-sm">{t("banner.column4.title")}</p>
                <p className="text-xs text-white/80">{t("banner.column4.desc")}</p>
              </div>
            </div>

            <div className="relative pt-1 flex flex-col md:items-start items-center justify-center">
              <button className="bg-gradient-to-r mt-2  flex items-center gap-2 from-[#E1CFBB] cursor-pointer to-[#956D42] hover:bg-gradient-to-r  hover:from-[#4e4d71] hover:to-[#4e4d71] text-sm font-bold md:text-base xl:text-lg text-white  px-8 py-3 rounded-xl transition-all duration-300"
                onClick={() => setIsOpen(true)}>
                {t("banner.btnText")}
                <svg width="9" height="14" color="#fff" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L1 13" stroke="#fff" strokeWidth="3" />
                </svg>
              </button>
            </div>
            <p className="text-sm md:text-base mt-4  font-medium  leading-relaxed max-w-xl">
              {t("tcApply")}
            </p>
            <div className="relative pt-1 flex flex-col md:items-start items-center justify-center"></div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;