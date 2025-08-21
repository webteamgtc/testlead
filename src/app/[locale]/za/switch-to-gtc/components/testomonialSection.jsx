import CustomButton from "@/app/components/common/CustomButton";
import React, { use } from "react";
import { useTranslations } from "next-intl";


const TestimonialCard = ({ text, name, stars, country, odd }) => (
  <div className={`bg-white rounded-[16px] p-6 text-sm space-y-1 flex flex-col justify-between gap-2 `}
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

  const t = useTranslations('switchToGtc.testimonialSection');


const testimonials = [
  {
    text: "“Withdrawals are instant. I requested my payout in USDT and it hit my wallet faster than I expected. No other broker I’ve tried comes close. Well done GTC!”",
    name: "Sipho M.",
    stars: 5,
    country: "Johannesburg, South Africa"
  },
  {
 text: "“I trade indices and gold every day, and GTC gives me the conditions I need. They say they offer tight spreads and fast execution and the actually do. GTC is built for real traders.”",
    name: 'Tawanda K.',
    stars: 5,
    country: 'Harare, Zimbabwe'
  },
  {
    text: '“My old broker used to slip my orders all the time. I have to be honest that with GTC, my trades go through clean, even during high volatility, which is rare. Finally I have a platform I can rely on.”',
    name: 'Kwame A.',
    stars: 5,
    country: 'Accra, Ghana'
  },
  {
 text: '“The customer service at GTC is incredible. They are the best I  have ever seen. I can get support in minutes, and they actually solve the problem instead of sending me in circles like other brokers.”',
    name: "David O.",
    stars: 5,
    country: "Nairobi, Kenya"
  },
    {
 text: '“GTC makes trading simple. They provide fast deposits and really smooth withdrawals. I like GTC because they also have no hidden fees. I feel secure here, and that’s why I stay.”',
    name: "Grace N.",
    stars: 5,
    country: "Kampala, Uganda"
  },
];
  
  return (
    <section className="bg-[#fff] india-bg-switch py-8 md:py-20">
      <div className="container mx-auto">
        <div className=" grid md:grid-cols-1 gap-8 md:gap-16 ">
          {/* Left Section */}
          <div className="flex flex-col ltr:text-left rtl:text-right justify-center space-y-5 md:space-y-2">
            <h2 className="text-2xl md:text-3xl xl:text-[40px] font-bold text-[#000032] leading-snug capitalize w-64 md:w-full">
              What African Traders Are Saying
            </h2>
            <p className="text-sm md:text-base xl:text-[18px] text-[#4D4D70] max-w-2xl">
            With thousands of traders across South Africa, Zimbabwe, Ghana, Kenya & Uganda already choosing GTC, isn’t it time you switched?              </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-5 md:gap-6">
            {testimonials.map((item, idx) => {
              const odd = idx % 2 == 0 ? true : false
              return (
                <TestimonialCard key={idx} {...item} odd={odd} />
              )
            })}
          </div>
          <div className="flex justify-center md:mt-2">
            <CustomButton
              text= {t("buttonText")}   
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
