"use client";
import React from "react";
import { useTranslations } from "next-intl";

const TradeSwitchSection = ({ setIsOpen }) => {
  const t = useTranslations("switchToGtc.tradeSwitchSection");

  return (
    <section className="relative min-h-[500px] md:min-h-[500px] overflow-hidden  flex items-center">
       {/* Background image with 40% grayscale filter */}
      <div
        className="absolute inset-0 bg-[url('/switch/bg-ovalye.webp')] bg-cover bg-center bg-no-repeat filter grayscale-[40%]"
        aria-hidden="true"
      />

      <div className="relative container py-20 mx-auto text-white">
        {/* Content */}
        <div className="relative z-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center ltr:md:text-left rtl:md:text-right h-full">
          {/* Left Title */}
          <div>
            <h2 className="text-[28px] md:text-[48px] xl:text-[60px] xl:font-black font-semibold leading-tight text-white w-72 mx-auto ltr:md:w-96 rtl:md:w-[500px]">
              {t("heading")}
            </h2>
          </div>

          {/* Right Description */}
          <div className="text-sm md:text-base text-[#E5E5EA] leading-relaxed flex flex-col gap-4 items-center ltr:md:items-start">
            <p>{t("description1")}</p>
            <p>{t("description2")}</p>

            <button
              className="bg-gradient-to-r mt-2 flex items-center gap-2 from-[#E1CFBB] to-[#956D42] hover:from-[#4e4d71] hover:to-[#4e4d71] text-sm font-bold md:text-base xl:text-lg text-white px-8 py-3 rounded-xl transition-all duration-300"
              onClick={() => setIsOpen(true)}
            >
              {t("buttonText")}
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#fff" strokeWidth="3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeSwitchSection;
