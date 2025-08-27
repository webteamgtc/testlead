import CustomButton from "@/app/components/common/CustomButton";
import React, { use } from "react";
import { useTranslations } from "next-intl";


const TestimonialCard = ({ text, name, index, country, odd }) => (
  <div className={`bg-white rounded-[16px] p-9 md:p-4 text-sm space-y-1 flex flex-col gap-2 `}
    style={{
      boxShadow: "1px 6px 16px 0px #0000001A"
    }}
  >
    <div className="w-full text-lg text-[#4D4D70]">
      0{index + 1}
    </div>

    <p className={`md:text-[24px] max-w-[180px] text-lg font-bold text-transparent bg-gradient-to-r  bg-clip-text from-[#293794] to-[#000021] mb-0`}>{text}</p>
    <div>
      <p className="text-base w-full text-[#4D4D70] mb-0 mt-2">{name}</p>
    </div>


  </div>
);

const IBTestimonials = ({ setIsOpen }) => {
  const t = useTranslations("swapFreePage")
  const testimonials = [
    {
      text: t("swapFree.card1.title"),
      name: t("swapFree.card1.desc"),
      stars: 5,
      country: t("testimonials.one.country")
    },
    {
      text: t("swapFree.card2.title"),
      name: t("swapFree.card2.desc"),
      stars: 5,
      country: t("testimonials.two.country")
    },
    {
      text: t("swapFree.card3.title"),
      name: t("swapFree.card3.desc"),
      stars: 5,
      country: t("testimonials.three.country")
    },
    {
      text: t("swapFree.card4.title"),
      name: t("swapFree.card4.desc"),
      stars: 5,
      country: t("testimonials.four.country")
    },
  ];

  return (
    <section className="bg-[#fff] india-bg-switch py-12 md:py-20">
      <div className="container mx-auto">
        <div className=" grid md:grid-cols-1 gap-8 md:gap-16 ">
          {/* Left Section */}
          <div className="flex flex-col ltr:text-left rtl:text-right justify-center space-y-5 md:space-y-2">
            <h2 className="text-2xl md:text-3xl xl:text-[40px] font-bold text-[#000032] leading-snug capitalize w-64 md:w-full">
              {t("swapFree.heading")}
            </h2>
            <p className="text-base md:text-lg font-semibold xl:text-[22px] text-[#4D4D70] max-w-2xl">
              {t("swapFree.desc")}
            </p>
            <p className="text-sm md:text-base xl:text-[18px] text-[#4D4D70] max-w-2xl">
              {t("swapFree.para1")}
            </p>

          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 md:gap-6">
            {testimonials.map((item, idx) => {
              const odd = idx % 2 == 0 ? true : false
              return (
                <TestimonialCard key={idx} {...item} index={idx} odd={odd} />
              )
            })}
          </div>
          <div className="relative mt-6 ">
            <button className="bg-gradient-to-r  mx-auto  flex items-center gap-2 from-[#293794] cursor-pointer to-[#000021] hover:bg-gradient-to-r  hover:from-[#4e4d71] hover:to-[#4e4d71] text-sm font-bold md:text-base xl:text-lg text-white  px-8 py-3 rounded-xl transition-all duration-300"
              onClick={() => setIsOpen(true)}>
              {t("swapFree.btnText")}
              <svg width="9" height="14" color="#fff" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#fff" strokeWidth="3" />
              </svg>
            </button>
            <p className="text-sm md:text-base mt-3 text-center text-[#4D4D70]  font-medium  leading-relaxed">
              {t("tcApply")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IBTestimonials;
