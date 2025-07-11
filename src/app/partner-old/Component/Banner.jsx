
"use client"
import React from "react";
import Image from "next/image";
import CustomButton from "@/app/components/common/CustomButton";


const Banner = ({setIsOpen}) => {
       const data = [
    {
      icon: "/icon1.svg",
      title: "Up to 80% RevShare Paid On Demand"
    },
    {
      icon: "/icon2.svg",
      title: "Become a Partner in Just a Few Clicks"
    },
    {
      icon: "/icon3.svg",
      title: "Dynamic Leverage Up to 1:2000"
    },
    {
      icon: "/icon4.svg",
      title: "Your Traders Get a Tradable Bonus"
    },
    {
      icon: "/icon5.svg",
      title: "Full Marketing & Event Support Provided"
    },
    {
      icon: "/icon6.svg",
      title: "Multi-Regulated Brokerage: SCA, FSC"
    }
  ]
  return (
    <section className="bg-gradient-to-r from-[#293794] to-[#000021] text-[#E5E5EA] py-8 md:py-20 relative overflow-hidden">

      <div className="absolute bottom-0 right-0 w-1/2 h-full z-0 pointer-events-none opacity-10 hidden md:block">
        <div className="relative w-full sm:h-96 xl:h-[600px] scale-[1.4] origin-bottom-right">
          <Image
            src="/ib/layer1.webp"
            alt="Decorative background"
            fill
            className="object-right-bottom object-contain"
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 h-full z-0 pointer-events-none opacity-100 hidden md:block">
        <div className="relative w-full h-full scale-[0.9] origin-bottom-right">
          <Image
            src="/ib/layer3.webp"
            alt="Decorative background"
            fill
            className="object-right-bottom object-contain"
          />
        </div>
      </div>


      <div className="container">
        <div className=" grid md:grid-cols-2 items-center gap-10 z-10 relative mb-8">
          {/* Left Column */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-3xl font-light">
              India’s Top IB's Now Earn Up to
            </h3>
            <h1 className="text-4xl md:text-6xl font-bold">80% REVSHARE</h1>
            <h3 className="text-xl md:text-3xl mb-6 font-light leadging-none">
              with GTC
            </h3>
            <p className="text-sm md:text-base mb-6 leading-relaxed max-w-xl">
              Join a multi-regulated broker trusted worldwide. Your traders get a tradable bonus just for switching to us, plus you earn up to 80% RevShare with fast payouts, multilingual support, and no setup costs.
            </p>
            <div className="flex flex-row justify-center md:justify-start items-center gap-4">
              <CustomButton
                        text="Get 80% Revshare"
                        bgColor="bg-white"
                        textColor="text-[#1F2937]"
                        strokeColor="#000032"
                        onClick={() => setIsOpen(true)}
                      />
            </div>
        
          </div>

        </div>

        {/* Bottom Feature Bar */}
        <div className="relative z-50 bg-gradient-to-b from-[#293794af] to-[#000021ab] mt-0 py-5 px-4 md:px-10 rounded-[16px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 text-sm text-center text-white/90 gap-6 md:gap-0"

          style={{
            boxShadow: "1px 6px 16px 0px #00000080",

            backdropFilter: "blur(8px)"
          }}>
          {data?.map((item, idx) => (
            <div key={idx} className="px-2">
              <img src={item?.icon} alt="Feature Icon" className="mx-auto mb-1 w-12 h-12" />
              <span className="block text-xs xl:text-base w-40 sm:w-40 xl:w-48 mx-auto line-clamp-2">{item?.title}</span>
            </div>
          ))}
        </div>
      </div>

    </section >
   );
};

export default Banner;