import CustomButton from "@/app/components/common/CustomButton";
import React from "react";

const testimonials = [
  {
    text: `“I switched to GTC because the withdrawal speed blew my old broker out of the water. Instant payout in USDT? Love it.”`,
    name: "Mohammed A.",
    stars: 5,
    country: "UAE"
  },
  {
    text: `“I scalp gold all day, and GTC is the only broker I’ve found that actually lets me do that without weird time limits.”`,
    name: "Omar S.",
    stars: 5,
    country: "Qatar"
  },
  {
    text: `“My previous broker slipped my orders like crazy during news. GTC’s execution is solid. I finally trust the platform.”`,
    name: "Hussein B.",
    stars: 5,
    country: "Iraq"
  },
  {
    text: `Customer support at GTC actually speaks to you like a human, not just a ticket number. That alone is worth switching.`,
    name: "Abdullah K.",
    stars: 5,
    country: "Lebanon"
  },
];

const TestimonialCard = ({ text, name, stars, country, odd }) => (
  <div className={`bg-white rounded-[16px] p-4 text-sm space-y-1 flex flex-col gap-2 `}
    style={{
      boxShadow: "1px 6px 16px 0px #0000001A"
    }}
  >
    <div className="w-full text-2xl bg-gradient-to-b from-[#E1CFBB] to-[#956D42] bg-clip-text text-transparent">
      {"★".repeat(stars)}
    </div>

    <p className={`text-base text-[#4D4D70] mb-0`}>{text}</p>
    <div>
      <p className="text-sm w-full text-[#000032] mb-0 mt-2">{name}</p>
      <p className="text-sm w-full text-[#808098] mb-0">{country}</p>
    </div>


  </div>
);

const IBTestimonials = ({ setIsOpen }) => {
  return (
    <section className="bg-[#fff] india-bg-switch py-8 md:py-20">
      <div className="container mx-auto">
        <div className=" grid md:grid-cols-1 items-start gap-8 md:gap-16 ">
          {/* Left Section */}
          <div className="flex flex-col text-left justify-center md:items-baseline space-y-5 md:space-y-2">
            <h2 className="text-2xl md:text-3xl xl:text-[40px] font-bold text-[#000032] leading-snug capitalize w-64 md:w-full">
              What Our Arabic Traders Are Saying
            </h2>
            <p className="text-sm md:text-base xl:text-[18px] text-[#4D4D70] max-w-2xl">
              With thousands of happy traders from the UAE, Oman, Qatar, Kuwait, Iraq, Jordan & Lebanon, isn’t it time you switched to GTC?                        </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 md:gap-6">
            {testimonials.map((item, idx) => {
              const odd = idx % 2 == 0 ? true : false
              return (
                <TestimonialCard key={idx} {...item} odd={odd} />
              )
            })}
          </div>
          <div className="flex justify-center md:mt-2">
            <CustomButton
              text="Switch Now"
              bgColor="bg-[#000032] hover:bg-[#4e4d71]"
              textColor="text-[#fff]"
              onClick={() => setIsOpen(true)}
              showIcon={false} // No SVG arrow
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IBTestimonials;
