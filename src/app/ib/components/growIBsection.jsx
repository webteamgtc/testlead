import React from "react";
import Image from "next/image";

const GrowIBSection = () => {
    return (
        <section className="bg-gradient-to-r from-[#293794] to-[#000021] text-[#E5E5EA] py-8 md:py-20 relative overflow-hidden text-center">
                    <div className="absolute top-0 h-full w-full opacity-50 pointer-events-none">
                  <Image
                    src="/ib/pattern.webp"
                    alt="Decorative background"
                    fill
                    className="object-contain"
                  />
                </div>
                   <div className="relative container mx-auto">
                <div className="max-w-4xl mx-auto z-10 relative flex flex-col gap-3 md:gap-5">
                    <h4 className="text-lg md:text-2xl xl:text-3xl font-[200]">
                        Start Earning More.
                    </h4>
                    <h2 className="text-2xl md:text-3xl xl:text-[40px] font-bold text-[#D9C3AA]">
                        Grow Your IB Business with GTC
                    </h2>
                    <p className="text-base md:text-lg xl:text-[22px]">
                        You’ve seen what GTC brings to the table. Now it’s your turn. Join the partnership programme that’s helping India’s IBs scale faster, earn more, and build lasting trust with their traders.
                    </p>
                    <p className="text-xl xl:text-2xl text-white font-semibold">
                        <span className="text-white">Join us today,</span> and your traders will thank you tomorrow.
                    </p>
                    <div className="flex flex-row justify-center items-center gap-4 mt-1">
                          <button className="bg-gradient-to-r  from-[#E1CFBB] to-[#956D42] text-sm md:text-base xl:text-lg text-white  px-6 py-3 rounded-lg transition-all duration-300">
                        Make the Switch
                    </button>
                    </div>
                      
                </div>
            </div>
        </section>
    );
};

export default GrowIBSection;
