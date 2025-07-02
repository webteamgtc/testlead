import React from "react";
import Image from "next/image";

const GrowIBSection = () => {
    return (
        <section className="bg-gradient-to-b from-[#0B0A2F] to-[#101243] text-[#E5E5EA] py-12 md:py-16 relative overflow-hidden text-center">
                    <div className="absolute top-0 h-full w-full opacity-50 pointer-events-none">
                  <Image
                    src="/ib/pattern.webp"
                    alt="Decorative background"
                    fill
                    className="object-contain"
                  />
                </div>
                   <div className="relative container mx-auto">
                <div className="max-w-4xl mx-auto z-10 relative">
                    <h2 className="text-lg md:text-2xl font-[200] mb-2">
                        Start Earning More.
                    </h2>
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#D9C3AA]">
                        Grow Your IB Business with GTC
                    </h1>
                    <p className="text-base md:text-lg font-[200]  text-white/90 mb-2 leading-relaxed">
                        You’ve seen what GTC brings to the table. Now it’s your turn. Join the partnership programme that’s helping India’s IBs scale faster, earn more, and build lasting trust with their traders.
                    </p>
                    <p className="text-base md:text-lg text-white font-medium mb-10">
                        <span className="text-white">Join us today,</span> and your traders will thank you tomorrow.
                    </p>
                        <button className="bg-gradient-to-r  from-[#E1CFBB] to-[#956D42] text-sm text-white  px-6 py-3 rounded-lg transition-all duration-300">
                        Make the Switch
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GrowIBSection;
