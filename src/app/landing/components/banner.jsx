
import React from "react";
import Image from "next/image";
const HeroSection = () => {
  const data = [
    {
      icon: "/icon1.svg",
      title: "Up to 80% RevShare Paid On Demand"
    },
    {
      icon: "/icon2.svg",
      title: "Become an IB in Just a Few Clicks"
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
      title: "Multi-Regulated Brokerage: SCA, FCA & ASIC"
    }
  ]
  return (
    <section className="bg-gradient-to-b from-[#0B0A2F] to-[#101243] text-[#E5E5EA] py-16 relative overflow-hidden">

      <div className="absolute bottom-0 right-0 w-1/2 h-full z-0 pointer-events-none opacity-10">
        <div className="relative w-full h-full scale-[1.4] origin-bottom-right">
          <Image
            src="/ib/layer1.webp"
            alt="Decorative background"
            fill
            className="object-right-bottom object-contain"
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 h-full z-0 pointer-events-none opacity-100">
        <div className="relative w-full h-full scale-[0.8] origin-bottom-right">
          <Image
            src="/ib/layer3.webp"
            alt="Decorative background"
            fill
            className="object-right-bottom object-contain"
          />
        </div>
      </div>


      <div className="container">
        <div className=" grid md:grid-cols-2 items-center gap-10 z-10 relative">
          {/* Left Column */}
          <div>
            <h3 className="text-xl md:text-3xl font-light">
              India’s Top IBs Now Earn Up to
            </h3>
            <h1 className="text-2xl md:text-6xl font-bold">80% REVSHARE</h1>
            <h3 className="text-xl md:text-3xl mb-6 font-light">
              with GTC
            </h3>
            <p className="text-sm md:text-base mb-8 leading-relaxed max-w-md">
              Join a multi-regulated broker trusted worldwide. Your traders get a tradable bonus just for switching to us, plus you earn up to 80% RevShare with fast payouts, multilingual support, and no setup costs.
            </p>

            <button className="bg-white text-[#1F2937] px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
              Get 80% Revshare →
            </button>
          </div>

          {/* Right Column (Phone UI) */}
          <div className="relative w-full h-[300px] md:h-[500px]">

          </div>
        </div>

        {/* Bottom Feature Bar */}
        <div className="relative z-50 bg-gradient-to-r from-[#293794] to-[#000021] mt-14 py-2 px-4 md:px-10 rounded-[16px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 text-sm text-center text-white/90 gap-4"

          style={{
            boxShadow: "1px 6px 16px 0px #00000080",

            backdropFilter: "blur(8px)"
          }}>
          {data?.map((item, idx) => (
            <div key={idx} className="px-2">
              <img src={item?.icon} alt="Feature Icon" className="mx-auto mb-1 w-10 h-10" />
              <span className="block">{item?.title}</span>
            </div>
          ))}
        </div>
      </div>

    </section >
  );
};

export default HeroSection;
