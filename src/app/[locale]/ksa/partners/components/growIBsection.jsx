'use client';
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const GrowIBSection = ({ setIsOpen }) => {
  const t = useTranslations("partner.growIB");

  return (
    <section className="bg-gradient-to-r from-[#293794] to-[#000021] text-[#E5E5EA] py-8 md:py-20 relative overflow-hidden text-center">
      {/* Background Image */}
      <div className="absolute top-0 h-full w-full opacity-50 pointer-events-none">
        <Image
          src="/ib/bottom-overlay.webp"
          alt="Decorative background"
          fill
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto">
        <div className="ltr:max-w-4xl rtl:max-w-3xl mx-auto z-10 relative flex flex-col gap-5 md:gap-5">
          <h4 className="text-lg md:text-2xl xl:text-3xl font-[200]">
            {t("subtitle")}
          </h4>
          <h2 className="text-2xl md:text-3xl xl:text-[40px] font-bold text-[#D9C3AA] ltr:max-w-xl rtl:max-w-6xl mx-auto">
            {t("title")}
          </h2>
          <p className="text-base md:text-lg xl:text-[22px]">
            {t("description1")}
          </p>
          <p className="text-xl xl:text-2xl text-white font-semibold">
            {t("description2")}
          </p>
          <div className="flex flex-row justify-center items-center gap-4 mt-2">
            <button
              className="bg-gradient-to-r from-[#E1CFBB] to-[#956D42] hover:from-[#4e4d71] hover:to-[#4e4d71] text-sm md:text-base font-bold xl:text-lg text-white px-6 py-3 rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(true)}
            >
              {t("cta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowIBSection;
