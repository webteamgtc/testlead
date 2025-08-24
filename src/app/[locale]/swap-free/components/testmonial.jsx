import CustomButton from "@/app/components/common/CustomButton";
import React, { use } from "react";
import { useTranslations } from "next-intl";


const TestimonialCard = ({ text, name, index, country, odd }) => (
  <div className={`bg-white rounded-[16px] p-4 text-sm space-y-1 flex flex-col gap-2 `}
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

  const t = useTranslations('switchToGtc.testimonialSection');


  const testimonials = [
    {
      text: "Open Your Account",
      name: "Just pop in your name and email. It takes less than a minute, literally.",
      stars: 5,
      country: t("testimonials.one.country")
    },
    {
      text: "Instant Activation",
      name: "The moment your account is set, your Swap Free benefit is live. No request needed.",
      stars: 5,
      country: t("testimonials.two.country")
    },
    {
      text: "Start Trading Anything",
      name: "Pick your market, FX, gold, indices etc, you’re good to go, Swap Free.",
      stars: 5,
      country: t("testimonials.three.country")
    },
    {
      text: "Hold. Trade. Repeat.",
      name: "Whether you're in for the long haul or short bursts, your strategy stays fee-free.",
      stars: 5,
      country: t("testimonials.four.country")
    },
  ];

  return (
    <section className="bg-[#fff] india-bg-switch py-8 md:py-20">
      <div className="container mx-auto">
        <div className=" grid md:grid-cols-1 gap-8 md:gap-16 ">
          {/* Left Section */}
          <div className="flex flex-col ltr:text-left rtl:text-right justify-center space-y-5 md:space-y-2">
            <h2 className="text-2xl md:text-3xl xl:text-[40px] font-bold text-[#000032] leading-snug capitalize w-64 md:w-full">
              Swap Free for Life?
            </h2>
            <p className="text-base md:text-lg font-semibold xl:text-[22px] text-[#4D4D70] max-w-2xl">
              Only with a GTC Trading Account. Let’s Make it Happen for you.</p>
            <p className="text-sm md:text-base xl:text-[18px] text-[#4D4D70] max-w-2xl">
              This might be the simplest upgrade you'll ever make. No forms, no waiting, no hidden catches. Just follow these quick steps to switch to GTC and trade swap free for life.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 md:gap-6">
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
              Trade Swap Free
              <svg width="9" height="14" color="#fff" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#fff" strokeWidth="3" />
              </svg>
            </button>
            <p className="text-sm md:text-base mt-3 text-center text-[#4D4D70]  font-medium  leading-relaxed">
              T&Cs Apply
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IBTestimonials;
